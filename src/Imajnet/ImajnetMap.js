var ImajnetMap = {
  cartographicServerDomains: null,
  FEATURE_TYPE_IMAGE_ORIENTATION: "imageOrientationFeature",
  FEATURE_TYPE_LARGE_IMAGE_ORIENTATION: "largeImageOrientationFeature",
  FEATURE_TYPE_ORIENTED_IMAGES: "orientedImagesFeature",
  FEATURE_TYPE_IMAGE_SWITCHER: "imageSwitcher",
  FEATURE_TYPE_SURVEY_TRACE: "surveyTrace",
  FEATURE_TYPE_PROJECTION: "projectedFeature",
  MARKER_TYPE_POSITION: "positionFeature",
  MARKER_TYPE_POLYLIGNE_POSITION: "polylignePositionFeature",
  FEATURE_TYPE_MEASUREMENT: "measurementFeature",
  FEATURE_TYPE_POLYLIGNE: "polyligneFeature",
  FEATURE_TYPE_POLYGON: "polygonFeature",
  MARKER_TYPE_IMAJBOX: "imajboxMarker",
  MARKER_TYPE_TARGET_POINT: "targetPointMarker",
  MARKER_TYPE_IMAGE_TAG: "imageTag",
  MARKER_TYPE_CLICKED_POINT: "clickedPoint",
  featureWrappers: [],
  IMAJNET_MAX_ZOOM: 25,
  IMAJNET_LAYER_Z_INDEX: 1E4,
  imajnetCrs: "EPSG:4326",
  imajnetProjection: null,
  map: null,
  LRSUrl: null,
  currentPosition: null,
  lastLoadedImagePosition: "",
  imajnetLayer: null,
  roadLayer: null,
  roadLayerName: "roads",
  prLayer: null,
  prLayerName: "pr",
  roadWFSLayerName: "sections",
  prWFSLayerName: "pr",
  allWFS: null,
  allWFSName: "Imajnet WFS",
  key: "",
  layerName: "Imajnet",
  imajnetSurveyTraceLayer: null,
  imajnetSurveyTraceLayerName: "Imajnet survey trace",
  imajnetImageSwitcherLayer: null,
  imajnetImageSwitcherLayerName: "Imajnet image switcher",
  photogrammetryPositionsLayer: null,
  photogrammetryPositionsLayerName: "Photogrammetry positions",
  imajnetOrientationLayer: null,
  imajnetOrientationLayerName: "Imajnet image orientation",
  imajnetDragFeaturesLayer: null,
  imajnetDragFeaturesLayerName: "Image features",
  dragBoxFeature: null,
  zoomLevelOnCenter: 20,
  markerLayerZIndex: 999,
  imajnetPOIRequest: null,
  POIArray: null,
  imajboxTriangleDimension: 130,
  imajboxOrientedImagesDimension: 160,
  wideImageTriangleGeometry: null,
  defaultViewAngle: 80,
  markerType: {IMAGE_POINT: "imagePoint", CLICK_POSITION_ON_MAP: "clickPositionOnMap", IMAJBOX: "imajbox"},
  RESOLUTIONS: [156543.0339, 78271.51695, 39135.758475, 19567.8792375, 9783.93961875, 4891.969809375, 2445.9849046875, 1222.99245234375, 611.496226171875, 305.7481130859375, 152.87405654296876, 76.43702827148438, 38.21851413574219,
    19.109257067871095, 9.554628533935547, 4.777314266967774, 2.388657133483887, 1.1943285667419434, .5971642833709717],
  viewAngle: 80,
  getImajnetTileUrls: function () {
    var a = ImajnetProtocol.getUsernameForUrl('/api/tile/%7B"tile":%7B"x":{x},"y":{y},"zoom":{z}%7D,"timeframe":' + ImajnetTimeframe.getTimeframe() + "%7D");
    if (null !== ImajnetMap.cartographicServerDomains) {
      var b = [];
      ImajnetMap.cartographicServerDomains.forEach(function (c) {
        b.push(c + "/service" + a)
      });
      return b
    }
    return [Imajnet.serverUrl + a]
  },
  getImajnetTileUrl: function (a) {
    if (!a)return ImajnetProtocol.getUsernameForUrl(Imajnet.serverUrl +
      '/api/tile/%7B"tile":%7B"x":{x},"y":{y},"zoom":{z}%7D,"timeframe":' + ImajnetTimeframe.getTimeframe() + "%7D");
    var b = ImajnetPlugin.getMapResolution();
    x = Math.round((a.left - CommonCore.sphericalMercatorExtent.left) / (b * ImajnetMap.map.tileSize.w));
    y = Math.round((CommonCore.sphericalMercatorExtent.top - a.top) / (b * ImajnetMap.map.tileSize.h));
    a = ImajnetMap.map.getZoom();
    a = Object({tile: {x: x, y: y, zoom: a}, timeframe: ImajnetTimeframe.getTimeframe()});
    a = "/api/tile/" + encodeURIComponent(JSON.stringify(a));
    b = null;
    b = null !==
    ImajnetMap.cartographicServerDomains ? ImajnetMap.selectUrl(a, ImajnetMap.cartographicServerDomains) + "/service" + a : Imajnet.serverUrl + a;
    return ImajnetProtocol.getUsernameForUrl(b)
  },
  URL_HASH_FACTOR: (Math.sqrt(5) - 1) / 2,
  selectUrl: function (a, b) {
    for (var c = 1, d = 0, e = a.length; d < e; d++)c = c * a.charCodeAt(d) * ImajnetMap.URL_HASH_FACTOR, c -= Math.floor(c);
    return b[Math.floor(c * b.length)]
  },
  doOnMapClick: function (a, b) {
    Imajnet.clickMode == Imajnet.CLICK_MODE_CLOSEST_IMAGE || b ? ImajnetAPI.getClosestPosition(a.lat, a.lon, Imajnet.searchRadius[ImajnetPlugin.getCurrentZoomLevel()]) :
      Imajnet.clickMode == Imajnet.CLICK_MODE_ORIENTED_IMAGES && ImajnetClickMode.showOrientedImages(a.lon, a.lat, ImajnetClickMode.orientedImagesReceived, ImajnetClickMode.orientedImagesError)
  },
  onMapClick: function (a, b) {
    a && this.doOnMapClick(a, b)
  },
  mapClickHandler: function (a) {
    if (Imajnet.imajnetClosestPositionIsActive() || Imajnet.imajnetOrientedImagesIsActive()) ImajnetMap.onMapClick(a)
  },
  mapZoomEndHandler: function () {
    ImajnetMap.setOrientationMarker(ImajnetMap.currentPosition, ImajnetMap.imajboxTriangleDimension, Nigsys.defaultObjectsColor,
      -1);
    Imajnet.clickMode !== Imajnet.CLICK_MODE_CLOSEST_IMAGE && ImajnetClickMode.redrawOrientedImages()
  },
  addToFeatureWrappers: function (a) {
    var b = new FeatureWrapper;
    jQuery.each(a, function (a, d) {
      b[a] = d
    });
    ImajnetMap.addToFeatureWrappersArray(b)
  },
  addToFeatureWrappersArray: function (a) {
    a.getId() && ImajnetMap.getFeatureWrapperById(a.getId()) && ImajnetMap.clearPhotogrammetryObject(a.getId());
    ImajnetMap.featureWrappers.push(a)
  },
  hideImajboxMarker: function () {
    if (this.allWFS) {
      var a = this.getFeatureWrappersByType(this.MARKER_TYPE_IMAJBOX);
      a.length && (ImajnetPlugin.removeMarkerFeatures(this.allWFS, a), this.deleteFeatureWrapperObject(this.MARKER_TYPE_IMAJBOX))
    }
  },
  hideOrientation: function () {
    if (this.imajnetOrientationLayer) {
      ImajnetMap.hideLargeImageOrientation();
      var a = this.getFeatureWrappersByType(this.FEATURE_TYPE_IMAGE_ORIENTATION);
      a.length && (ImajnetPlugin.removeFeatures(this.imajnetOrientationLayer, a), this.deleteFeatureWrapperObject(this.FEATURE_TYPE_IMAGE_ORIENTATION))
    }
  },
  hideLargeImageOrientation: function () {
    if (this.imajnetOrientationLayer) {
      var a =
        this.getFeatureWrappersByType(this.FEATURE_TYPE_LARGE_IMAGE_ORIENTATION);
      a.length && (ImajnetPlugin.removeFeatures(this.imajnetOrientationLayer, a), this.deleteFeatureWrapperObject(this.FEATURE_TYPE_LARGE_IMAGE_ORIENTATION))
    }
  },
  getPolyligneFeatureWrapper: function (a) {
    var b = this.getPolyligneFeatureWrappers(a.getId());
    if (!b)return a;
    for (a = 0; a < b.length; a++)if (b[a].type != ImajnetMap.MARKER_TYPE_POLYLIGNE_POSITION)return b[a]
  },
  getFeatureWrapperById: function (a) {
    for (var b = 0, c = ImajnetMap.featureWrappers.length; b <
    c; ++b)if (ImajnetMap.featureWrappers[b].id == a)return ImajnetMap.featureWrappers[b];
    return null
  },
  getPolyligneFeatureWrappers: function (a) {
    a = ImajnetPolyligne.getAllObjectsId(a);
    for (var b = [], c = 0; c < a.length; c++) {
      var d = this.getFeatureWrapperById(a[c]);
      d && b.push(d)
    }
    return b
  },
  getFeatureWrappersByType: function (a) {
    for (var b = [], c = 0, d = this.featureWrappers.length; c < d; ++c)this.featureWrappers[c].getType() == a && b.push(this.featureWrappers[c]);
    return b
  },
  deleteFeatureWrapperObject: function (a) {
    for (var b = 0; b < this.featureWrappers.length; b++)this.featureWrappers[b].getType() ==
    a && (this.featureWrappers.splice(b, 1), b--)
  },
  deleteFeatureWrapperObjectById: function (a) {
    for (var b = 0; b < this.featureWrappers.length; b++)if (this.featureWrappers[b].getId() == a) {
      this.featureWrappers.splice(b, 1);
      break
    }
  },
  hideSurveyTrace: function () {
    this.imajnetSurveyTraceLayer && (ImajnetPlugin.removeAllFeatures(this.imajnetSurveyTraceLayer), this.deleteFeatureWrapperObject(this.FEATURE_TYPE_SURVEY_TRACE))
  },
  hideImageSwitcher: function () {
    this.imajnetImageSwitcherLayer && (ImajnetPlugin.removeAllFeatures(this.imajnetImageSwitcherLayer),
      this.deleteFeatureWrapperObject(this.FEATURE_TYPE_IMAGE_SWITCHER))
  },
  hideOrientedImages: function () {
    if (this.imajnetDragFeaturesLayer) {
      var a = this.getFeatureWrappersByType(this.FEATURE_TYPE_ORIENTED_IMAGES);
      a.length && (ImajnetPlugin.removeFeatures(this.imajnetDragFeaturesLayer, a), this.deleteFeatureWrapperObject(this.FEATURE_TYPE_ORIENTED_IMAGES))
    }
  },
  cutTriangleMargins: function (a) {
    return a
  },
  getPointOnCircle: function (a, b, c) {
    c = c / 180 * Math.PI;
    return {x: a.x + Math.cos(c) * b, y: a.y + Math.sin(c) * b}
  },
  getTriangleCoordinates: function (a,
                                    b, c, d) {
    var e = [];
    e.push(a);
    for (var g = d = 90 - b / 2 + d; g <= b + d;)e.push(ImajnetMap.getPointOnCircle(a, c, g)), g += 1;
    e.push(a);
    return e
  },
  getTriangle: function (a, b, c, d) {
    a = Nigsys.transformImajnetOrientationPoint(Object({
      x: a.lon,
      y: a.lat
    }), new Proj4js.Proj("EPSG:4326"), new Proj4js.Proj("EPSG:900913"));
    b = this.getTriangleCoordinates(a, c, b, d);
    c = 0;
    for (d = b.length; c < d - 1; ++c)b[c] = Nigsys.transformImajnetOrientationPoint(b[c], new Proj4js.Proj("EPSG:900913"), new Proj4js.Proj("EPSG:4326"));
    return b
  },
  setOrientationMarker: function (a,
                                  b, c, d) {
    if (a && a.lon && a.lat && a.orientation) {
      var e = a.orientation.viewAngle, g = a.orientation.yaw;
      if (-1 == d) {
        ImajnetMap.hideOrientation();
        var f = 0, f = 80;
        if ("FLAT" == ImageControler.currentImageType) {
          if (ImajnetUI.getLargeImageWidthOverflow() ? (ImajnetMap.setOrientationMarker(a, b, "#CCCCCC", -4), ImajnetUI.fullSizeAspectRatio > ImajnetUI.imageAspectRatio && 100 > e && (f = f * ImajnetUI.imageAspectRatio / ImajnetUI.fullSizeAspectRatio), e = 0 == ImajnetZoom.zoomLevel ? f : f * (1 - ImajnetZoom.zoomLevel / (ImajnetZoom.maxZoomLevel + 1))) : (ImajnetMap.setOrientationMarker(a,
              b, "#CCCCCC", -4), e *= 1 - ImajnetZoom.zoomLevel / (ImajnetZoom.maxZoomLevel + 1)), f = a.orientation.viewAngle - e) {
            var h = 0;
            if (h = ImajnetUI.imajnetImage.width() - ImajnetUI.imajnetImageContainerSize.width) h = 1 + 2 * ImajnetUI.imajnetImage.position().left / h, g += h * f / 2
          }
        } else ImajnetMap.setOrientationMarker(a, b, "#CCCCCC", -4), f = ImajnetMap.defaultViewAngle, ImajnetUI.fullSizeAspectRatio > ImajnetUI.imageAspectRatio && 100 > e && (f = f * ImajnetUI.imageAspectRatio / ImajnetUI.fullSizeAspectRatio), e = 0 == ImajnetZoom.zoomLevel ? f : f * (1 - ImajnetZoom.zoomLevel /
          (ImajnetZoom.maxZoomLevel + 1)), g -= CubePlugin.yow
      } else void 0 === d && (d = -1);
      b = 1.1 * ImajnetPlugin.getMapScale() / b;
      a = this.getTriangle(a, b, e, g);
      if (-1 == d) a = ImajnetMap.cutTriangleMargins(a); else if (-4 == d) wideImageTriangleGeometry = a; else {
        f = Nigsys.cloneObject(a[0]);
        b = this.getTriangleCoordinates(f, e, b / 5, g);
        e = 0;
        for (g = b.length; e < g - 1; ++e)b[e] = Nigsys.transformImajnetOrientationPoint(b[e], new Proj4js.Proj("EPSG:900913"), new Proj4js.Proj("EPSG:4326"));
        a = [a, b]
      }
      switch (d) {
        case -4:
          ImajnetMap.hideLargeImageOrientation();
          if (c = ImajnetPlugin.addFeature(ImajnetMap.imajnetOrientationLayer, a, {
              type: "Polygon",
              zIndex: 0,
              fillColor: c,
              fillOpacity: .7,
              strokeWidth: .5
            })) c.setType(ImajnetMap.FEATURE_TYPE_LARGE_IMAGE_ORIENTATION), ImajnetMap.addToFeatureWrappersArray(c);
          break;
        case -3:
          if (c = ImajnetPlugin.addFeature(ImajnetMap.imajnetImageSwitcherLayer, a, {
              type: "MultiPolygon",
              fillColor: c,
              strokeWidth: .5
            })) c.setType(ImajnetMap.FEATURE_TYPE_IMAGE_SWITCHER), ImajnetMap.addToFeatureWrappersArray(c);
          break;
        case -2:
          if (c = ImajnetPlugin.addFeature(ImajnetMap.imajnetSurveyTraceLayer,
              a, {
                type: "MultiPolygon",
                fillColor: c,
                strokeWidth: .5
              })) c.setType(ImajnetMap.FEATURE_TYPE_SURVEY_TRACE), ImajnetMap.addToFeatureWrappersArray(c);
          break;
        case -1:
          if (c = ImajnetPlugin.addFeature(ImajnetMap.imajnetOrientationLayer, a, {
              type: "Polygon",
              zIndex: 0,
              fillColor: c,
              fillOpacity: .5,
              strokeWidth: .5
            })) c.setType(ImajnetMap.FEATURE_TYPE_IMAGE_ORIENTATION), ImajnetMap.addToFeatureWrappersArray(c);
          break;
        default:
          if (c = ImajnetPlugin.addFeature(ImajnetMap.imajnetDragFeaturesLayer, a, {
              type: "MultiPolygon", zIndex: 1, fillColor: c,
              fillOpacity: .5, strokeWidth: .5
            })) c.setId(d), c.setType(ImajnetMap.FEATURE_TYPE_ORIENTED_IMAGES), ImajnetMap.addToFeatureWrappersArray(c)
      }
    }
  },
  setCurrentPosition: function (a) {
    ImajnetMap.currentPosition = a ? a : null;
    ImajnetAPI.lastNavigationPositionImageId = ""
  },
  isOutsideViewport: function (a) {
    var b = map.getExtent();
    return b ? !b.containsLonLat(a) : !1
  },
  setImajboxMarkerPosition: function (a, b) {
    ImajnetMap.hideImajboxMarker();
    var c = null, d = null;
    a.position ? (c = a.position.lon, d = a.position.lat) : a.parameter && a.parameter.coordinates &&
      (c = a.parameter.coordinates.lon, d = a.parameter.coordinates.lat);
    if (c && d) {
      if (c = ImajnetPlugin.addMarker(ImajnetMap.allWFS, {
          lon: c,
          lat: d,
          type: ImajnetMap.markerType.IMAJBOX,
          imagePath: Imajnet.imajnetPath + "img/imajbox.png?" + Imajnet.version,
          size: {width: 32, height: 32}
        })) c.setType(ImajnetMap.MARKER_TYPE_IMAJBOX), ImajnetMap.addToFeatureWrappersArray(c);
      b && (c = a.position ? a.position : a.parameter.coordinates) && (ImajnetZoom.imageIsZoomed() && ImajnetZoom.resetZoom(), ImajnetMap.setOrientationMarker(c, ImajnetMap.imajboxTriangleDimension,
        Nigsys.defaultObjectsColor, -1), ImajnetPlugin.centerMapToPosition(c, !0))
    }
  },
  addClickedPointToMap: function (a) {
    a = ImajnetPlugin.addMarker(ImajnetMap.photogrammetryPositionsLayer, {
      lon: a.lon,
      lat: a.lat,
      type: ImajnetMap.markerType.CLICK_POSITION_ON_MAP,
      imagePath: Imajnet.imajnetPath + "img/targetIconMarker16x36.png?" + Imajnet.version,
      size: {width: 16, height: 36}
    });
    a.setId(0);
    a.setType(ImajnetMap.MARKER_TYPE_TARGET_POINT);
    ImajnetMap.addToFeatureWrappersArray(a)
  },
  clearClickedPointFromMap: function () {
    if (ImajnetMap.photogrammetryPositionsLayer) {
      var a =
        ImajnetMap.getFeatureWrappersByType(ImajnetMap.MARKER_TYPE_TARGET_POINT);
      a && a[0] && ImajnetPlugin.removeMarker(ImajnetMap.photogrammetryPositionsLayer, a[0]);
      this.deleteFeatureWrapperObject(this.MARKER_TYPE_TARGET_POINT)
    }
  },
  clearPhotogrammetryObject: function (a) {
    var b = this.getFeatureWrapperById(a);
    if (b) {
      if (0 == a) this.clearClickedPointFromMap(); else if (b.getType() == ImajnetMap.MARKER_TYPE_POSITION || b.getType() == ImajnetMap.MARKER_TYPE_POLYLIGNE_POSITION) ImajnetPlugin.removeMarker(this.photogrammetryPositionsLayer,
        b); else if (b.getType() == ImajnetMap.FEATURE_TYPE_MEASUREMENT) ImajnetPlugin.removeFeatures(this.imajnetDragFeaturesLayer, Array(b)); else if (-1 !== jQuery.inArray(b.getType().replace("Feature", ""), ImajnetPolyligne.typesArray)) {
        b = this.getPolyligneFeatureWrappers(a);
        if (!b)return;
        for (var c = 0; c < b.length; c++)b[c].getType() == ImajnetMap.MARKER_TYPE_POLYLIGNE_POSITION ? ImajnetPlugin.removeMarker(this.photogrammetryPositionsLayer, b[c]) : ImajnetPlugin.removeFeatures(this.imajnetDragFeaturesLayer, Array(b[c])), this.deleteFeatureWrapperObjectById(b[c].getId())
      }
      this.deleteFeatureWrapperObjectById(a)
    }
  },
  clearPhotogrammetryObjects: function () {
    this.clearClickedPointFromMap();
    if (this.imajnetDragFeaturesLayer) {
      var a = this.getFeatureWrappersByType(this.FEATURE_TYPE_MEASUREMENT);
      a.length && (ImajnetPlugin.removeFeatures(this.imajnetDragFeaturesLayer, a), this.deleteFeatureWrapperObject(this.FEATURE_TYPE_MEASUREMENT));
      a = this.getFeatureWrappersByType(this.FEATURE_TYPE_POLYLIGNE);
      a.length && (ImajnetPlugin.removeFeatures(this.imajnetDragFeaturesLayer, a), this.deleteFeatureWrapperObject(this.FEATURE_TYPE_POLYLIGNE));
      a = this.getFeatureWrappersByType(this.FEATURE_TYPE_POLYGON);
      a.length && (ImajnetPlugin.removeFeatures(this.imajnetDragFeaturesLayer, a), this.deleteFeatureWrapperObject(this.FEATURE_TYPE_POLYGON))
    }
    ImajnetPlugin.removeAllMarkersFromLayer(this.photogrammetryPositionsLayer);
    this.deleteFeatureWrapperObject(this.MARKER_TYPE_POSITION);
    ImajnetPlugin.removeAllMarkersFromLayer(this.photogrammetryPositionsLayer);
    this.deleteFeatureWrapperObject(this.MARKER_TYPE_POLYLIGNE_POSITION)
  },
  addLineFeature: function (a, b, c) {
    b =
      ImajnetPlugin.addFeature(ImajnetMap.imajnetDragFeaturesLayer, b, {
        type: "LineString",
        strokeColor: Nigsys.defaultObjectsColor,
        strokeWidth: 2
      });
    b.setId(a);
    b.setType(c);
    ImajnetMap.addToFeatureWrappersArray(b);
    return b
  },
  addPolygonFeature: function (a, b, c, d) {
    b = ImajnetPlugin.addFeature(ImajnetMap.imajnetDragFeaturesLayer, b, {
      type: "MultiPolygon",
      fillColor: d ? d : Nigsys.defaultObjectsColor,
      strokeWidth: 1,
      strokeColor: "#00FF00"
    });
    b.setId(a);
    b.setType(c);
    ImajnetMap.addToFeatureWrappersArray(b);
    return b
  },
  addPoint: function (a,
                      b, c, d) {
    b = !d && "polyligne" != b && "polygon" != b;
    c = ImajnetPlugin.addMarker(ImajnetMap.photogrammetryPositionsLayer, {
      lon: c.lon,
      lat: c.lat,
      type: ImajnetMap.markerType.IMAGE_POINT,
      imagePath: Imajnet.imajnetPath + "img/" + (b ? "pinpoint" : "polyligne") + ".png?" + Imajnet.version,
      size: {width: b ? 32 : 7, height: b ? 32 : 7}
    });
    c.setId(a);
    d ? c.setType(ImajnetMap.MARKER_TYPE_POLYLIGNE_POSITION) : c.setType(ImajnetMap.MARKER_TYPE_POSITION);
    ImajnetMap.addToFeatureWrappersArray(c)
  },
  drawPolylignePoints: function (a) {
    for (var b = 0; b < a.points.length; b++)ImajnetMap.addPoint(a.points[b].id,
      a.type, a.points[b].photogrammetryPosition3D.coordinates, a.points[b].linkToNext)
  },
  drawPhotogrammetryObjects: function () {
    for (var a = 0; a < ImageControler.currentPhotogrammetry.objects.length; a++)for (var b = 0; b < ImageControler.currentPhotogrammetry.objects[a].data.length; b++)if (Nigsys.isPolyligneMode() && ImajnetMap.clearPhotogrammetryObject(ImageControler.currentPhotogrammetry.objects[a].data[b].id), 0 == ImageControler.currentPhotogrammetry.objects[a].data[b].id) ImajnetMap.addClickedPointToMap(ImageControler.currentPhotogrammetry.objects[a].data[b].photogrammetryPosition3D.coordinates);
    else if (void 0 !== ImageControler.currentPhotogrammetry.objects[a].data[b].photogrammetryPosition3D) ImajnetMap.addPoint(ImageControler.currentPhotogrammetry.objects[a].data[b].id, ImageControler.currentPhotogrammetry.objects[a].data[b].type, ImageControler.currentPhotogrammetry.objects[a].data[b].photogrammetryPosition3D.coordinates, ImageControler.currentPhotogrammetry.objects[a].data[b].linkToNext); else if (void 0 !== ImageControler.currentPhotogrammetry.objects[a].data[b].measurementResult) ImajnetMap.addLineFeature(ImageControler.currentPhotogrammetry.objects[a].data[b].id,
      [Nigsys.lonLatToXY(ImageControler.currentPhotogrammetry.objects[a].data[b].measurementResult.firstPoint), Nigsys.lonLatToXY(ImageControler.currentPhotogrammetry.objects[a].data[b].measurementResult.secondPoint)], ImajnetMap.FEATURE_TYPE_MEASUREMENT); else if (ImajnetPolyligne.isPolyligneOrPolygon(ImageControler.currentPhotogrammetry.objects[a].data[b].type) && ImageControler.currentPhotogrammetry.objects[a].data[b].points) {
      for (var c = [], d = 0; d < ImageControler.currentPhotogrammetry.objects[a].data[b].points.length; d++)c.push(Nigsys.lonLatToXY(ImageControler.currentPhotogrammetry.objects[a].data[b].points[d].photogrammetryPosition3D.coordinates));
      if ("polyligne" == ImageControler.currentPhotogrammetry.objects[a].data[b].type) {
        if (2 > c.length) {
          ImajnetMap.drawPolylignePoints(ImageControler.currentPhotogrammetry.objects[a].data[b]);
          continue
        }
        ImajnetMap.addLineFeature(ImageControler.currentPhotogrammetry.objects[a].data[b].id, c, ImageControler.currentPhotogrammetry.objects[a].data[b].type + "Feature")
      } else if ("polygon" == ImageControler.currentPhotogrammetry.objects[a].data[b].type) {
        if (3 > c.length) {
          ImajnetMap.drawPolylignePoints(ImageControler.currentPhotogrammetry.objects[a].data[b]);
          continue
        }
        c.push(c[0]);
        ImajnetMap.addPolygonFeature(ImageControler.currentPhotogrammetry.objects[a].data[b].id, Array(c), ImageControler.currentPhotogrammetry.objects[a].data[b].type + "Feature", Nigsys.defaultPolygonObjectsColor)
      }
      ImajnetMap.drawPolylignePoints(ImageControler.currentPhotogrammetry.objects[a].data[b])
    }
    this.photogrammetryPositionsLayer && ImajnetPlugin.setLayerZIndex(this.photogrammetryPositionsLayer, this.markerLayerZIndex)
  },
  removeFeatures: function () {
    this.hideOrientation();
    this.hideSurveyTrace();
    this.hideOrientedImages()
  },
  POIImajnetPositionChangeHandler: function () {
    if (ImajnetMap.POIArray) {
      for (var a = "", b = 0; b < ImajnetMap.POIArray.length; b++)ImajnetMap.currentPosition && ImajnetMap.POIArray[b].position.id == ImajnetMap.currentPosition.id && (a = b);
      "" == a && jQuery(ImajnetEvents.mappingObject).unbind(ImajnetEvents.positionChangeEventName, ImajnetMap.POIImajnetPositionChangeHandler);
      jQuery("#imajnetPOI").val(a)
    }
  },
  POIChanged: function (a) {
    a = a.val();
    "" != a && (a = this.POIArray[a]) && ("undefined" !== typeof ImajnetUI &&
    Nigsys.showLoading(ImajnetUI.imageContainer), ImajnetZoom.left = -1, ImajnetAPI.setImajnetImage({position: a.position}), ImajnetPlugin.centerMapToPosition(a.position), jQuery(ImajnetEvents.mappingObject).bind(ImajnetEvents.positionChangeEventName, ImajnetMap.POIImajnetPositionChangeHandler))
  },
  onPOIReceived: function (a) {
    a = JSON.parse(a);
    ImajnetUI.showItem(ImajnetUI.imageContainerId);
    if (!a || !a.poi || 1 > a.poi.length) jQuery("#imajnetPOI").length && jQuery("#imajnetPOI").html('\x3coption value\x3d""\x3e' + jQuery.imajnet.map.poi.optionDefault +
      "\x3c/option\x3e"); else if (ImajnetMap.POIArray = a.poi, jQuery("#imajnetPOI").length) {
      a = '\x3coption value\x3d""\x3e' + jQuery.imajnet.map.poi.optionDefault + "\x3c/option\x3e";
      for (var b = 0; b < ImajnetMap.POIArray.length; b++)a += '\x3coption value\x3d"' + b + '"' + (ImajnetMap.currentPosition && ImajnetMap.POIArray[b].position.lat == ImajnetMap.currentPosition.lat && ImajnetMap.POIArray[b].position.lon == ImajnetMap.currentPosition.lon ? 'selected\x3d"selected"' : "") + "\x3e" + ImajnetMap.POIArray[b].description + "\x3c/option\x3e";
      jQuery("#imajnetPOI").html(a)
    }
    ImajnetUrl.getUrlParamValue(ImajnetUrl.LOCATION_URL_PARAM_NAME) || Nigsys.getUserPosition()
  },
  loadPOI: function () {
    ImajnetAPI.mustAbortRequests && null !== this.imajnetPOIRequest && this.imajnetPOIRequest.abort();
    jQuery(ImajnetEvents.mappingObject).bind(ImajnetEvents.positionChangeEventName, ImajnetMap.POIImajnetPositionChangeHandler);
    this.imajnetPOIRequest = ImajnetAPI.doImajnetRequest("GET", "/api/app/poi/", null, this.onPOIReceived, null)
  },
  initLRSUrl: function () {
    var a = "/carto/" + ImajnetMap.key +
      "/wms";
    ImajnetMap.LRSUrl = null;
    if (ImajnetMap.cartographicServerDomains) {
      ImajnetMap.LRSUrl = [];
      for (var b in ImajnetMap.cartographicServerDomains)ImajnetMap.LRSUrl[b] = ImajnetMap.cartographicServerDomains[b] + a
    } else ImajnetMap.LRSUrl = Imajnet.cartographicServerUrl + a
  },
  registerToMap: function () {
    ImajnetMap.imajnetLayer && (ImajnetPlugin.removeLayerFromMap(ImajnetMap.imajnetLayer), ImajnetMap.imajnetLayer = null);
    ImajnetMap.imajnetLayer = ImajnetPlugin.addImajnetLayerToMap();
    ImajnetMap.imajnetSurveyTraceLayer = ImajnetPlugin.addVectorLayerToMap(ImajnetMap.imajnetSurveyTraceLayerName);
    ImajnetMap.imajnetImageSwitcherLayer = ImajnetPlugin.addVectorLayerToMap(ImajnetMap.imajnetImageSwitcherLayerName);
    ImajnetMap.photogrammetryPositionsLayer = ImajnetPlugin.addMarkerLayerToMap(ImajnetMap.photogrammetryPositionsLayerName);
    ImajnetMap.imajnetDragFeaturesLayer = ImajnetPlugin.addVectorLayerToMap(ImajnetMap.imajnetDragFeaturesLayerName);
    ImajnetMap.imajnetOrientationLayer = ImajnetPlugin.addVectorLayerToMap(ImajnetMap.imajnetOrientationLayerName);
    ImajnetUrl.applyUrlParams();
    ImajnetPlugin.registerMapEvents();
    ImajnetMap.allWFS || (ImajnetMap.allWFS = ImajnetPlugin.addVectorLayerToMap(ImajnetMap.allWFSName));
    ImajnetPlugin.afterImajnetLayersAddedToMap()
  },
  unregisterFromMap: function () {
    this.hideImajboxMarker();
    this.hideOrientation();
    "undefined" !== typeof ImajnetClickMode && ImajnetClickMode.hideOrientedImages();
    this.imajnetLayer && (ImajnetPlugin.removeLayerFromMap(this.imajnetLayer), this.imajnetLayer = null);
    this.imajnetDragFeaturesLayer && (ImajnetPlugin.removeLayerFromMap(this.imajnetDragFeaturesLayer), this.imajnetDragFeaturesLayer =
      null);
    this.roadLayer && (ImajnetPlugin.removeLayerFromMap(this.roadLayer), this.roadLayer = null);
    this.prLayer && (ImajnetPlugin.removeLayerFromMap(this.prLayer), this.prLayer = null);
    this.allWFS && (ImajnetPlugin.removeLayerFromMap(this.allWFS), this.allWFS = null);
    this.imajnetSurveyTraceLayer && (ImajnetPlugin.removeLayerFromMap(this.imajnetSurveyTraceLayer), this.imajnetSurveyTraceLayer = null);
    this.imajnetImageSwitcherLayer && (ImajnetPlugin.removeLayerFromMap(this.imajnetImageSwitcherLayer), this.imajnetImageSwitcherLayer =
      null);
    this.clearPhotogrammetryObjects();
    ImageControler.currentPhotogrammetry && ImageControler.currentPhotogrammetry.clear();
    this.photogrammetryPositionsLayer && (ImajnetPlugin.removeLayerFromMap(this.photogrammetryPositionsLayer), this.photogrammetryPositionsLayer = null);
    this.imajnetOrientationLayer && (ImajnetPlugin.removeLayerFromMap(this.imajnetOrientationLayer), this.imajnetOrientationLayer = null);
    ImajnetPlugin.unregisterMapEvents();
    this.setCurrentPosition(null);
    ImajnetPlugin.onImajnetDeactivated()
  }
};