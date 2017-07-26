/**
 * Created by FDD on 2017/7/26.
 */
var CubePhotogrammetry = Nigsys.cloneObject(Photogrammetry);
var Graphic = {
  svg: null,
  constraintSVG: null,
  previewPanelSVG: null,
  canShowPopup: !1,
  firstClickCoordinates: null,
  lastClickCoordinates: null,
  defaultStrokeWidth: 2,
  renderers: ["SVG", "VML", "Canvas"],
  cubeObjects: null,
  LRSGUIPRDivisionsMinLength: 50,
  initSVG: function (a, b) {
    if (b)return b;
    b = Raphael(a, "100%", "100%");
    jQuery(b.canvas).css("position", "absolute");
    jQuery(b.canvas).css("top", "0");
    jQuery(b.canvas).css("top", "0");
    jQuery(b.canvas).css("z-index", "1");
    return b
  },
  init: function () {
  },
  initConstraint: function () {
    this.constraintSVG =
      this.initSVG("popupImajnetControlsLayer", this.constraintSVG);
    if (!Nigsys.isPolyligneMode()) jQuery(this.constraintSVG.canvas).on("click", ImajnetUI.onImageClick)
  },
  previewPanelGraphicInit: function () {
    this.previewPanelSVG = this.initSVG("imajnetPhotogrammetryZoomedImageContainer", this.previewPanelSVG);
    jQuery(this.previewPanelSVG.canvas).attr("onmouseover", "ImageControler.currentPhotogrammetry.previewPanelMouseOver();")
  },
  showPreviewPanelSVG: function () {
  },
  drawPreviewPanelPoint: function (a, b, d) {
    a = ImageControler.currentPhotogrammetry.getPreviewPanelPoint(a,
      b, d);
    a = '\x3cdiv class\x3d"zoomImageClickedPoint" style\x3d"position: absolute; top: ' + (a.y - 3) + "px; left: " + (a.x - 3) + 'px; width: 6px; height: 6px;"\x3e\x3c/div\x3e';
    ImajnetUI.previewImageContainer.append(a)
  },
  drawPreviewPanelLine: function (a, b) {
  },
  drawLine: function (a, b, d, c, e, f) {
  },
  drawLineBetweenPoints: function (a, b, d, c, e) {
  },
  drawPolygon: function (a, b, d) {
  },
  drawIntermediateLine: function (a, b, d, c) {
  },
  getConstraintColor: function (a) {
    var b = 0, b = .75 < a ? parseInt(127 + 512 * (1 - a) / 3) : parseInt(1020 * a / 3);
    return "rgb(" + Math.min(parseInt(340 *
        (1 - a)), 255) + ", " + b + ", 0)"
  },
  drawConstraintLine: function (a, b) {
  },
  drawConstraint: function (a, b) {
  },
  highlightFeatureOnImage: function (a) {
  },
  unHighlightFeatureOnImage: function (a) {
  },
  clear: function () {
    this.lastClickCoordinates = this.firstClickCoordinates = null;
    this.clearGraphicObjects()
  },
  clearItem: function (a) {
  },
  clearGraphicObjects: function () {
  },
  clearConstraints: function () {
  },
  hideAllLayersProjections: function () {
  },
  showAllLayersProjections: function () {
  },
  clearPreviewPanel: function () {
    null !== this.previewPanelSVG && (this.previewPanelSVG.remove(),
      this.previewPanelSVG = null)
  },
  mouseMove: function (a) {
  },
  initLRSGUI: function (a) {
    if (!a.LRSGUISVG) {
      var b = ImajnetLRSGUICommon.getContainerSize(a.orientation, a.containerWidth, a.containerHeight);
      a.LRSGUISVG = Raphael(a.containerId, b.width, b.height);
      a.LRSGUISVG.canvas.id = a.canvasId
    }
  },
  getPoint: function (a, b) {
    return "portrait" == a.orientation ? b : {x: b.y, y: b.x}
  },
  drawLRSGUIRoad: function (a) {
    var b = [this.getPoint(a, {x: a.roadXOffset, y: 0}), this.getPoint(a, {x: a.roadXOffset, y: a.containerHeight})];
    "portrait" == a.orientation ? (startX =
      a.roadXOffset, startY = 0, endX = a.roadXOffset, endY = a.containerHeight) : (startX = 0, startY = a.roadXOffset, endX = a.containerHeight, endY = a.roadXOffset);
    a.LRSGUISVG.path("M " + b[0].x + " " + b[0].y + " L " + b[1].x + " " + b[1].y).attr({
      stroke: "#FFFFFF",
      stroke: "2" == a.roadType ? "#000000" : "#FFFFFF",
      "stroke-width": "2" == a.roadType ? a.trainStrokeWidth : a.roadStrokeWidth
    })
  },
  drawLRSGUILine: function (a, b, d, c, e) {
    b = "";
    if ("1" == a.roadType) this.drawLRSGUIRoad(a); else if ("2" == a.roadType) {
      this.drawLRSGUIRoad(a);
      e = c = null;
      for (d = 0; d < a.containerHeight; d +=
        20)c = this.getPoint(a, {x: a.roadXOffset - 7, y: d}), e = this.getPoint(a, {
        x: a.roadXOffset + 7,
        y: d
      }), b += "M " + c.x + " " + c.y + " L " + e.x + " " + e.y + " ";
      a.LRSGUISVG.path(b).attr({stroke: "#000000", "stroke-width": a.trainStrokeWidth})
    } else if (3 == a.roadType) {
      c = this.getPoint(a, {x: a.roadXOffset, y: 0});
      b = "M " + c.x + " " + c.y + " ";
      for (d = 0; d < a.containerHeight; d += 40)c = [this.getPoint(a, {
        x: a.roadXOffset - 10,
        y: d + 20
      }), this.getPoint(a, {x: a.roadXOffset + 10, y: d + 40 - 20}), this.getPoint(a, {
        x: a.roadXOffset,
        y: d + 40
      })], b += "C " + c[0].x + " " + c[0].y + " " + c[1].x +
        " " + c[1].y + " " + c[2].x + " " + c[2].y + " ";
      a.LRSGUISVG.path(b).attr({stroke: "#0000FF", "stroke-width": a.roadStrokeWidth, "stroke-opacity": 1})
    }
  },
  drawPRTop: function (a, b) {
    var d = null, d = "portrait" == a.orientation ? [{x: b.x, y: Math.round(b.y - a.prSize / 2)}, {
      x: b.x,
      y: b.y - a.prSize
    }, {x: b.x + a.prSize, y: b.y - a.prSize}, {
      x: b.x + a.prSize,
      y: Math.round(b.y - a.prSize / 2)
    }] : [{x: Math.round(b.y - a.prSize / 2), y: b.x}, {
      x: Math.round(b.y - a.prSize / 4),
      y: Math.round(b.x - a.prSize / 2)
    }, {x: Math.round(b.y + a.prSize / 4), y: Math.round(b.x - a.prSize / 2)}, {
      x: Math.round(b.y +
        a.prSize / 2), y: b.x
    }];
    a.LRSGUISVG.path("M " + d[0].x + " " + d[0].y + "C " + d[1].x + " " + d[1].y + " " + d[2].x + " " + d[2].y + " " + d[3].x + " " + d[3].y).attr({
      fill: "#AAAAAA",
      stroke: "#000000",
      "stroke-width": 1
    })
  },
  drawPR: function (a, b, d, c) {
    c = [this.getPoint(a, {
      x: b.x - a.PRLineLineIndicatorWidth / 6,
      y: b.y
    }), this.getPoint(a, {x: Math.round(b.x + a.prSize / 2 + a.PRDivisionOffset), y: b.y})];
    a.LRSGUISVG.path("M " + c[0].x + " " + c[0].y + " L " + c[1].x + " " + c[1].y).attr({
      stroke: "#FFFFFF",
      "stroke-width": a.lineIndicatorStrokeWidth
    });
    c = "portrait" == a.orientation ?
      [{x: b.x, y: Math.round(b.y - a.prSize / 2)}, {x: b.x, y: b.y + 2}, {
        x: b.x + a.prSize,
        y: b.y + 2
      }, {x: b.x + a.prSize, y: Math.round(b.y - a.prSize / 2)}] : [{
        x: Math.round(b.y - a.prSize / 2),
        y: b.x
      }, {x: Math.round(b.y - a.prSize / 2), y: b.x + a.prSize}, {
        x: Math.round(b.y + a.prSize / 2),
        y: b.x + a.prSize
      }, {x: Math.round(b.y + a.prSize / 2), y: b.x}];
    a.LRSGUISVG.path("M " + c[0].x + " " + c[0].y + " L " + c[1].x + " " + c[1].y + " L " + c[2].x + " " + c[2].y + " L " + c[3].x + " " + c[3].y + " Z").attr({
      fill: "#FFFFFF",
      stroke: "#000000",
      "stroke-width": 1
    });
    this.drawPRTop(a, b);
    b = this.getPoint(a,
      {
        x: Math.round(b.x + a.prSize / 2),
        y: Math.round(b.y - a.prSize / 4 + ("landscape" == a.orientation ? a.prSize / 4 : 0))
      });
    a.LRSGUISVG.text(b.x, b.y, d).attr({"font-size": a.PRFontSize, "text-anchor": "middle", "font-weight": "bold"})
  },
  getDivisionStep: function (a, b) {
    var d = b / a;
    if (d <= Graphic.LRSGUIPRDivisionsMinLength)return Graphic.LRSGUIPRDivisionsMinLength;
    var c = d % Graphic.LRSGUIPRDivisionsMinLength;
    return d = c < Graphic.LRSGUIPRDivisionsMinLength / 2 ? d - c : d + (Graphic.LRSGUIPRDivisionsMinLength - c)
  },
  getPRDivisions: function (a, b, d) {
    var c =
      0;
    0 == a ? c = 1 : 1 == a ? c = 2 : 2 == a ? c = 2 : 3 == a ? c = 2 : 4 == a ? c = 3 : 5 == a ? c = 3 : 6 == a ? c = 4 : 7 == a ? c = 5 : 8 == a ? c = 5 : 9 == a ? c = 7 : 10 == a ? c = 7 : 11 == a ? c = 10 : 12 == a ? c = 11 : 13 == a ? c = 11 : 14 == a ? c = 11 : 15 == a ? c = 22 : 16 == a ? c = 27 : 17 == a ? c = 28 : 18 == a ? c = 33 : 19 == a ? c = 34 : 20 == a ? c = 37 : 21 == a ? c = 40 : 22 == a ? c = 43 : 23 == a ? c = 46 : 24 == a ? c = 49 : 25 == a && (c = 52);
    a = Graphic.getDivisionStep(c * d, b);
    return {count: Math.round(b / a), step: a}
  },
  drawPRDivisions: function (a, b, d, c) {
    var e = a.KMToPixelZoomByZoom(1) / 25;
    1 > e && (e = 1);
    c = Graphic.getPRDivisions(a.currentZoomLevel - (a.maxZoomLevel - a.zeroBasedMaxZoomLevel),
      c, e);
    for (e = 0; e < c.count; e++) {
      var f = e * c.step, g = Math.round(b.y + d / c.count * e);
      0 > g || g > a.containerHeight || (g = this.getPoint(a, {
        x: b.x,
        y: g - 0
      }), f = a.LRSGUISVG.text(g.x, g.y, "- " + f).attr({
        fill: "#FFFFFF",
        "font-size": 12,
        "text-anchor": "start"
      }), "landscape" == a.orientation && (a.PRDivisionWidth = f.getBBox().width, f.transform("t-" + a.PRDivisionWidth / 2 + ",0R90")))
    }
  },
  onDrawLRSGUIImageOrientation: function (a, b) {
    var d = this.getPoint(a, b);
    a.LRSGUISVG.circle(d.x, d.y, a.positionCircleRadius).data({identifier: "imageOrientation"}).attr({
      fill: "#00FF00",
      "fill-opacity": .5, stroke: "#000000", "stroke-width": 1
    });
    var d = this.getPoint(a, {
      x: b.x + a.PRDivisionOffset - ("portrait" == a.orientation ? 0 : a.PRDivisionWidth / 2),
      y: b.y
    }), c = this.getPoint(a, {x: a.containerWidth, y: b.y});
    a.LRSGUISVG.path("M " + d.x + " " + d.y + " L " + c.x + " " + c.y).data({identifier: "imageOrientation"}).attr({
      stroke: "#FF0000",
      "stroke-width": a.lineIndicatorStrokeWidth,
      "stroke-opacity": 1
    })
  },
  drawLRSGUIImageOrientation: function (a, b, d) {
    a != ImajnetUI.LRSGUI ? "undefined" !== typeof LRSSchematic && LRSSchematic.drawImajnetImagePosition() :
      ("undefined" !== typeof LRSSchematic && LRSSchematic.drawImajnetImagePosition({
        PRIndexInArray: d,
        currentRoadId: a.currentRoadId,
        relativeAbscisa: a.linearPosition.relativeAbscisa,
        roadType: a.linearPosition.road.type,
        unit: a.linearPosition.road.unit
      }), this.onDrawLRSGUIImageOrientation(a, b))
  },
  onClearLRSGUIImageOrientation: function (a) {
    var b = [];
    a.LRSGUISVG.forEach(function (a) {
      "imageOrientation" == a.data("identifier") && b.push(a)
    });
    jQuery.each(b, function (a, b) {
      b.remove()
    })
  },
  clearLRSGUIImageOrientation: function (a) {
    "undefined" !==
    typeof LRSSchematic && a === ImajnetUI.LRSGUI && (LRSSchematic.imajnetImageData = null);
    if (a && a.LRSGUISVG) {
      if (a === ImajnetUI.LRSGUI && "undefined" !== typeof LRSSchematic && LRSSchematic.LRSGUI && !LRSSchematic.isMinimized() && a.currentRoadId == LRSSchematic.LRSGUI.currentRoadId) this.onClearLRSGUIImageOrientation(LRSSchematic.LRSGUI);
      this.onClearLRSGUIImageOrientation(a)
    }
  },
  clearLRSGUI: function (a) {
    a.LRSGUISVG && a.LRSGUISVG.clear()
  },
  setLRSGUISize: function (a, b, d) {
    a.LRSGUI && a.LRSGUI.LRSGUISVG && (a.itemWidth = b, a.itemHeight =
      d, a.LRSGUI.initSize({width: b, height: d}), a.LRSGUI.LRSGUISVG.setSize(b, d))
  },
  drawLRSSchematicLine: function (a, b, d, c) {
    return a.LRSGUISVG.path("M " + b.x + " " + b.y + " L " + d.x + " " + d.y).attr(c)
  },
  drawRoadBoundsAndCenterLine: function (a) {
    var b = 0, d = 0;
    "portrait" == LRSSchematic.orientation ? (b = LRSSchematic.itemWidth, d = LRSSchematic.itemHeight) : (b = LRSSchematic.itemHeight, d = LRSSchematic.itemWidth);
    var c = [this.getPoint(a, {x: 0, y: 0}), this.getPoint(a, {x: 0, y: d})];
    this.drawLRSSchematicLine(a, c[0], c[1], {
      stroke: "#FFFFFF", "stroke-width": 1,
      "stroke-dasharray": "-"
    });
    b = parseInt(b / 2);
    c = [this.getPoint(a, {x: b, y: 0}), this.getPoint(a, {x: b, y: d})];
    this.drawLRSSchematicLine(a, c[0], c[1], {stroke: "#FFFFFF", "stroke-width": 1})
  },
  drawFeatureDefaultPoint: function (a, b, d) {
    a = a.LRSGUISVG.circle(b.x, b.y, LRSSchematic.featurePointSize / 2).attr({
      fill: "#00FF00",
      "fill-opacity": .5,
      stroke: "#000000"
    });
    a[0].id = "featureGraphicElements_" + d.replace(".", "_");
    return a
  },
  drawFeaturePoint: function (a, b, d, c, e) {
    b = this.getPoint({orientation: LRSSchematic.orientation}, {x: b.x, y: b.y});
    e ? (c.featureSize = LRSSchematic.featurePointSize, c.layerStyle = d, StyleEditor.drawFeaturePoint(d, c, b)) : LRSSchematic.pushDraggableFeature({
      layerName: d,
      featureId: c.fid,
      container: this.drawFeatureDefaultPoint(a, b, c.fid)[0]
    })
  },
  drawFeatureLinePoint: function (a, b) {
    return a.LRSGUISVG.circle(b.x, b.y, 7).attr({fill: Nigsys.hoverObjectsColor})
  },
  onDrawFeatureLine: function (a, b, d, c, e, f, g) {
    a = this.drawLRSSchematicLine(a, b, d, {
      stroke: c.strokeColor ? c.strokeColor : "#000000",
      "stroke-width": c.strokeWidth ? c.strokeWidth : 1
    }).data("data",
      {layerName: e, featureId: f.fid});
    c.strokeDashstyle && a.node.setAttribute("stroke-dasharray", LRSSchematic.dasharrayToMeters(c.strokeDashstyle));
    g && a.node.setAttribute("id", "featureGraphicElements_" + f.fid.replace(".", "_"));
    return a
  },
  drawFeatureLine: function (a, b, d, c, e, f) {
    f ? StyleEditor.drawFeatureLine(a, b, d, c, e) : LRSSchematic.pushDraggableFeature({
      layerName: c,
      featureId: e.fid,
      feature: e,
      container: ImageControler.currentGraphic.onDrawFeatureLine(a, b, d, {
        strokeColor: "#00FF00",
        strokeWidth: 10
      }, c, e, !0),
      isLine: !0
    })
  },
  drawFeatureImage: function (a) {
  },
  recalculateWithRotation: function (a) {
    return Math.sqrt(2 * Math.pow(a, 2)) - a
  },
  recalculateInCaseOfRotation: function (a) {
    var b = a.rotation;
    b && 0 !== b % 90 && (b = parseInt(b) / 90, .5 < b && (b = 1 - b), a.pointRadius -= b * this.recalculateWithRotation(a.pointRadius) + 2, a.strokeWidth && (a.strokeWidth -= 2 * b * this.recalculateWithRotation(a.strokeWidth)))
  },
  appendPinPoint: function (a, b) {
  },
  createRenderer: function (a, b, d) {
  }
};