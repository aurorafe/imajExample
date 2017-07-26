/**
 * Created by FDD on 2017/7/26.
 */
var ImajnetPolyligne = {
  type: "", typesArray: ["polyligne", "polygon"], currentAddObjectId: -1, isPolyligneObject: function (a) {
    return a ? (a = ImageControler.currentPhotogrammetry.getObjectById(a)) ? -1 !== jQuery.inArray(a.type, ImajnetPolyligne.typesArray) || a.points : !1 : !1
  }, addPreviewPanel: function () {
    jQuery("#imajnetPreviewPanel").html('\x3cdiv id\x3d"imajnetPreviewPanelContent"\x3e\x3cdiv class\x3d"imajnetPreviewPanelItem imageTrace" id\x3d"imajnetPreviewPanelItem1"\x3e\x3cb\x3e' + jQuery.imajnet.map[ImajnetPolyligne.type].step +
      "\x26nbsp;1\x3c/b\x3e\x3cbr/\x3e" + jQuery.imajnet.map[ImajnetPolyligne.type].step1Content + '\x3c/div\x3e\x3cdiv class\x3d"imajnetPreviewPanelItemArrow" id\x3d"imajnetPreviewPanelItemArrow1"\x3e\x3c/div\x3e\x3cdiv class\x3d"imajnetPreviewPanelItem imageTrace" id\x3d"imajnetPreviewPanelItem2"\x3e\x3cb\x3e' + jQuery.imajnet.map[ImajnetPolyligne.type].step + "\x26nbsp;2\x3c/b\x3e\x3cbr/\x3e" + jQuery.imajnet.map[ImajnetPolyligne.type].step2Content + '\x3c/div\x3e\x3cdiv class\x3d"imajnetPreviewPanelItemArrow" id\x3d"imajnetPreviewPanelItemArrow2"\x3e\x3c/div\x3e\x3cdiv class\x3d"imajnetPreviewPanelItem imageTrace" id\x3d"imajnetPreviewPanelItem3" onclick\x3d"ImajnetPolyligne.onFinishClick(); return false;" style\x3d"cursor: pointer; z-index: 2; position: relative;"\x3e\x3cb\x3e' +
      jQuery.imajnet.map[ImajnetPolyligne.type].step + "\x26nbsp;3\x3c/b\x3e\x3cbr/\x3e" + jQuery.imajnet.map[ImajnetPolyligne.type].step3Content + "\x3c/div\x3e\x3c/div\x3e");
    Nigsys.browserIsIE7() || Nigsys.browserIsIE8() || jQuery(".imajnetPreviewPanelItem").corner("5px");
    ImajnetUI.popupImajnetControlsLayer.append('\x3cimg id\x3d"polyligneDenied" src\x3d"' + Imajnet.imajnetPath + "img/measurementDenied.png?" + Imajnet.version + '" width\x3d"100" height\x3d"100" style\x3d"position: absolute; top: ' + (ImajnetUI.imajnetImageContainerSize.height -
      100) / 2 + "px; left: " + (ImajnetUI.imajnetImageContainerSize.width - 100) / 2 + 'px; display: none;" /\x3e')
  }, show: function (a) {
    ImageControler.currentPhotogrammetry.deletePrevObjects();
    ImajnetPosition.hidePosition(a);
    ImajnetMeasurement.hideMeasurement(a);
    ImageControler.currentSurveyTrace.hideTrace();
    ImajnetZoom.deactivateZoom();
    ImajnetUI.activeControlButton = "imajnetPolyligne";
    this.currentAddObjectId = -1;
    this.addPreviewPanel();
    jQuery("#imajnetPreviewPanel").show();
    jQuery("#imajnetPolyligneButtonContainer" + ImajnetPolyligne.type).addClass("buttonActive");
    ImageControler.currentPhotogrammetry.clear();
    ImajnetImageSwitcher.hide();
    ImajnetUI.LRSGUI.hide();
    ImajnetZoom.imageWasDragged = !1;
    Address.hideAddressContainer();
    LRS.hideLRSContainer();
    ImajnetUI.hideDateContainer()
  }, hide: function (a, c) {
    if (ImajnetPolyligne.type && !c) ImajnetPolyligne.onFinish(c);
    ImajnetUI.activeControlButton = "";
    jQuery("#imajnetPreviewPanel").hide();
    jQuery("#polyligneDenied").hide();
    jQuery("#imajnetPolyligneButtonContainer" + ImajnetPolyligne.type).removeClass("buttonActive");
    ImajnetPolyligne.type =
      "";
    ImageControler.currentPhotogrammetry && (ImageControler.currentPhotogrammetry.currentStep = 1, ImageControler.currentPhotogrammetry.setRedStep(ImageControler.currentPhotogrammetry.currentStep - 1), ImageControler.currentPhotogrammetry.firstImagePosition = null, ImageControler.currentPhotogrammetry.constraintParameter = null, a ? (ImageControler.currentPhotogrammetry.redraw(!1), ImageControler.currentSurveyTrace.draw(ImajnetMap.currentPosition)) : ImageControler.currentPhotogrammetry.hidePreviewPanel())
  }, showHide: function (a) {
    ImajnetPolyligne.type &&
    a != ImajnetPolyligne.type || !jQuery("#imajnetPolyligneButtonContainer" + ImajnetPolyligne.type).hasClass("buttonActive") ? (this.hide(!1, !1), ImajnetPolyligne.type = a, this.show(!0)) : (this.hide(!0, !1), LRS.cachedPoints[ImajnetMap.currentPosition.lat + ":" + ImajnetMap.currentPosition.lon + ":" + ImajnetMap.currentPosition.height] && ImajnetUI.LRSGUI.draw(LRS.cachedPoints[ImajnetMap.currentPosition.lat + ":" + ImajnetMap.currentPosition.lon + ":" + ImajnetMap.currentPosition.height]), Address.showAddress(), LRS.showLRS(), ImajnetUI.showDateContainer(),
      ImageControler.currentPhotogrammetry.redraw(!1))
  }, showHideDenied: function () {
    ImageControler.currentPhotogrammetry.photogrammetryIsDenied() ? jQuery("#polyligneDenied").show() : (jQuery("#polyligneDenied").hide(), Nigsys.isPolyligneMode() && 0 == ImageControler.currentPhotogrammetry.currentStep % 2 && ImageControler.currentPhotogrammetry.getConstraint())
  }, reload: function (a) {
    jQuery("#imajnetPolyligneButtonContainer" + ImajnetPolyligne.type).hasClass("buttonActive") && (this.deleteLastSessionObjects(), a = ImajnetPolyligne.type,
      this.hide(!1, !0), ImajnetPolyligne.type = a, this.show(!1), ImajnetZoom.imageWasDragged = !1)
  }, getAllObjectsId: function (a) {
    for (var c = [], b = 0; b < ImageControler.currentPhotogrammetry.objects.length; b++)for (var d = 0; d < ImageControler.currentPhotogrammetry.objects[b].data.length; d++)if (-1 !== jQuery.inArray(ImageControler.currentPhotogrammetry.objects[b].data[d].type, ImajnetPolyligne.typesArray)) {
      c.push(ImageControler.currentPhotogrammetry.objects[b].data[d].id);
      var e = !1;
      ImageControler.currentPhotogrammetry.objects[b].data[d].id ==
      a && (e = !0);
      for (var f = 0; f < ImageControler.currentPhotogrammetry.objects[b].data[d].points.length; f++)c.push(ImageControler.currentPhotogrammetry.objects[b].data[d].points[f].id), ImageControler.currentPhotogrammetry.objects[b].data[d].points[f].id == a && (e = !0);
      if (e)return c;
      c = []
    }
    return c
  }, getTotalDistance: function (a) {
    for (var c = 0, b = 0; b < a.points.length; b++)"undefined" === typeof a.points[b].distance || isNaN(a.points[b].distance) || (c += a.points[b].distance);
    return c
  }, getCurrentObjectMiddlePoint: function (a) {
    for (var c =
      ImajnetPolyligne.getTotalDistance(a) / 2, b = 0, d = 0; d < a.points.length; d++)if ("undefined" !== typeof a.points[d].distance && !isNaN(a.points[d].distance)) {
      if (b + a.points[d].distance > c)return !a.points[d + 1] || b + a.points[d].distance / 2 > c ? a.points[d].photogrammetryPosition3D.coordinates : a.points[d + 1].photogrammetryPosition3D.coordinates;
      b += a.points[d].distance
    }
  }, deleteLastSessionObjects: function () {
    -1 != ImajnetPolyligne.currentAddObjectId && ImageControler.currentPhotogrammetry.deletePhotogrammetryItem(ImajnetPolyligne.currentAddObjectId)
  },
  isPolyligneOrPolygon: function (a) {
    return -1 !== jQuery.inArray(a, ImajnetPolyligne.typesArray)
  }, objectIsPolyligneOrPolygon: function (a) {
    a = ImageControler.currentPhotogrammetry.getObjectById(a);
    return -1 !== jQuery.inArray(a.type, ImajnetPolyligne.typesArray)
  }, pointPositionSuccess: function (a, c) {
    ImageControler.currentPhotogrammetry.currentStep++;
    ImageControler.currentPhotogrammetry.setRedStep(2);
    if ((a = JSON.parse(a)) && a.parameter && a.parameter.imagePoint && a.parameter.imagePoint.img1) {
      a.type = ImajnetPolyligne.type;
      a.linkToNext = !0;
      if (-1 === ImajnetPolyligne.currentAddObjectId) {
        var b = ImageControler.currentPhotogrammetry.addObject(a.parameter.imagePoint.img1, {
          parameter: a.parameter,
          type: ImajnetPolyligne.type
        }, !0, !0, !1);
        ImajnetPolyligne.currentAddObjectId = b.id;
        b = ImageControler.currentPhotogrammetry.getObjectById(ImajnetPolyligne.currentAddObjectId);
        a.id = ImageControler.currentPhotogrammetry.getLastObjectId();
        b.points = Array(a)
      } else {
        b = ImageControler.currentPhotogrammetry.getObjectById(ImajnetPolyligne.currentAddObjectId);
        a.id = ImageControler.currentPhotogrammetry.getLastObjectId();
        var d = b.points.length - 1;
        b.points[d].distance = ImageControler.currentPhotogrammetry.computeDistanceBetweenPoints(b.points[d].photogrammetryPosition3D.coordinates, a.photogrammetryPosition3D.coordinates);
        b.points.push(a)
      }
      ImajnetMap.drawPhotogrammetryObjects();
      ImajnetAPI.setImajnetImage({position: a.parameter.imagePoint.img1}).done(function () {
      });
      ImageControler.currentPhotogrammetry.redraw(!1)
    } else ImajnetUI.showError(jQuery.imajnet.map.position.errorPosition,
      !0)
  }, pointPositionError: function (a) {
    ImageControler.currentPhotogrammetry.currentStep--
  }, pointPositionComplete: function (a) {
    200 !== a.status && (ImajnetPolyligne.pointPositionError(), ImajnetUI.showError(jQuery.imajnet.map.position.errorPosition, !0))
  }, positionObject: function (a, c, b) {
    ImajnetAPI.mustAbortRequests && null !== this.positionAjaxRequest && this.positionAjaxRequest.abort();
    var d = null;
    b && b.face && (d = b.face);
    if (1 == ImageControler.currentPhotogrammetry.currentStep % 2) {
      ImageControler.currentPhotogrammetry.firstImagePosition =
        ImajnetMap.currentPosition;
      ImajnetZoom.imageQuality = "HIGH_RESOLUTION";
      var e = null;
      "FLAT" == ImageControler.currentImageType ? (ImajnetUI.previewImage.attr("src", ImajnetAPI.buildImageURL(ImageControler.currentPhotogrammetry.firstImagePosition, ImajnetUI.getPreviewImageResolution())), e = ImajnetZoom.getRealImageCoordinates(a, c)) : (ImajnetUI.previewImage.attr("src", ImajnetAPI.buildImageURL(ImageControler.currentPhotogrammetry.firstImagePosition, ImajnetUI.getPreviewImageResolution()), d), e = {
        x: a,
        y: c
      });
      ImageControler.currentGraphic.clearPreviewPanel();
      a = ImajnetZoom.getPreviewPanelZoomFactor();
      c = ImageControler.currentPhotogrammetry.setPreviewPanelVisibleRegion(e, a);
      ImageControler.currentGraphic.drawPreviewPanelPoint(e, a, c);
      ImageControler.currentPhotogrammetry.showPreviewPanel();
      ImageControler.currentPhotogrammetry.constraintParameter = Object({points: Array(e)});
      ImageControler.currentImageControl.getPrevious(!0);
      ImageControler.currentPhotogrammetry.currentStep++;
      ImajnetUI.imajnetImageContainer.bind("mousemove", ImageControler.currentPhotogrammetry.imageMouseMovePreviewPanel);
      ImageControler.currentPhotogrammetry.setRedStep(1)
    } else ImageControler.currentPhotogrammetry.hidePreviewPanel(), ImajnetZoom.imageQuality = "HIGH_RESOLUTION", e = "FLAT" == ImageControler.currentImageType ? ImajnetZoom.getRealImageCoordinates(a, c) : {
      x: a,
      y: c
    }, ImageControler.currentGraphic.clearConstraints(), Address.showAddress(), this.positionAjaxRequest = ImajnetAPI.doImajnetRequest("GET", "/api/photogrammetry/position3D/", {
      imagePoint: {
        img1: ImageControler.currentPhotogrammetry.firstImagePosition, img2: ImajnetMap.currentPosition,
        imgCoord1: {
          x: ImageControler.currentPhotogrammetry.constraintParameter.points[0].x,
          y: ImageControler.currentPhotogrammetry.constraintParameter.points[0].y
        }, imgCoord2: {x: e.x, y: e.y}
      }
    }, this.pointPositionSuccess, null, this.pointPositionComplete, null, null, b)
  }, onFinishClick: function () {
    ImajnetPolyligne.showHide(ImajnetPolyligne.type)
  }, onFinish: function (a) {
    if (Imajnet.imajnetIsActive() && -1 != ImajnetPolyligne.currentAddObjectId)if (ImageControler.currentPhotogrammetry && ImageControler.currentPhotogrammetry.setRedStep(3),
        a = ImageControler.currentPhotogrammetry.getObjectById(ImajnetPolyligne.currentAddObjectId), ImajnetPolyligne.currentAddObjectId = -1, "polyligne" == ImajnetPolyligne.type && 2 > a.points.length || "polygon" == ImajnetPolyligne.type && 3 > a.points.length) ImageControler.currentPhotogrammetry.deletePhotogrammetryItem(a.id); else {
      ImageControler.currentPhotogrammetry.getObjectLRS(a);
      for (var c = [], b = 0; b < a.points.length; b++)c.push({
        x: a.points[b].photogrammetryPosition3D.coordinates.lon,
        y: a.points[b].photogrammetryPosition3D.coordinates.lat
      });
      "polygon" == ImajnetPolyligne.type && (a.points[a.points.length - 1].distance = ImageControler.currentPhotogrammetry.computeDistanceBetweenPoints(a.points[a.points.length - 1].photogrammetryPosition3D.coordinates, a.points[0].photogrammetryPosition3D.coordinates), c.push(c[0]));
      a.measurement = ImageControler.currentPhotogrammetry.getMeasurement(a);
      ImajnetPlugin.onPolyligneCreated({
        id: ImajnetPolyligne.currentAddObjectId,
        pointsArray: c,
        type: "polyligne" == ImajnetPolyligne.type ? "LineString" : "Polygon"
      });
      ImageControler.currentPhotogrammetry.drawObjectClipboard(a,
        !0);
      ImageControler.currentPhotogrammetry.updateCache()
    }
  }
};