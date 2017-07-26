var CubeGraphic = Nigsys.cloneObject(Graphic);
CubeGraphic.init = function () {
  this.cubeObjects || (this.cubeObjects = new THREE.Object3D);
  CubePlugin.objectsScene.add(this.cubeObjects)
};
CubeGraphic.showPreviewPanelSVG = function () {
  null !== this.previewPanelSVG && jQuery(this.previewPanelSVG.canvas).show()
};
CubeGraphic.drawPreviewPanelLine = function (a, b) {
  this.previewPanelSVG.path("M " + a.x + " " + a.y + " L " + b.x + " " + b.y).attr({
    stroke: Nigsys.defaultObjectsColor,
    "stroke-width": 2
  })
};
CubeGraphic.drawLine = function (a, b, c, d, e, f) {
  this.init();
  this.svg.path("M " + a + " " + b + " L " + c + " " + d).attr({
    stroke: f ? f : Nigsys.defaultObjectsColor,
    "stroke-width": this.defaultStrokeWidth
  }).data("id", e).mouseover(function (a) {
    var b = this.attr();
    this.objectIdToHighlight = this.data("id");
    ImageControler.currentPhotogrammetry.showLRS(a, null, this.objectIdToHighlight, "imajnetImageLayer");
    b.stroke == Nigsys.differentTracePinPointColor ? (ImageControler.currentPhotogrammetry.highlightPinPoint(this.objectIdToHighlight),
      this.attr({stroke: Nigsys.differentTracePinPointHoverColor})) : (ImageControler.currentPhotogrammetry.highlightMeasurement(this.objectIdToHighlight), this.attr({stroke: Nigsys.hoverObjectsColor}))
  }).mouseout(function () {
    var a = this.attr();
    jQuery("#imajnetPhotogrammetryLRS_" + this.data("id")).hide();
    a.stroke == Nigsys.differentTracePinPointHoverColor ? (ImageControler.currentPhotogrammetry.deselectHighlightPinPoint(this.objectIdToHighlight), this.attr({stroke: Nigsys.differentTracePinPointColor})) : (ImageControler.currentPhotogrammetry.deselectHighlightMeasurement(this.objectIdToHighlight),
      this.attr({stroke: Nigsys.defaultObjectsColor}));
    this.objectIdToHighlight = ""
  }).mousedown(function () {
    ImageControler.currentPhotogrammetry.zoomToObject(this.data("id"), ImajnetMap.FEATURE_TYPE_MEASUREMENT)
  }).dblclick(function (a) {
    ImageControler.currentPhotogrammetry.showComment(a, null, this.data("id"), "popupImajnetControlsLayer", "textareaEditComment_")
  })
};
CubeGraphic.drawIntermediateLine = function (a, b) {
  if (a && b) {
    var c = [a, b], d = new THREE.LineBasicMaterial({color: 65280, linewidth: 2}), e = new THREE.Geometry;
    e.vertices = c;
    line = new THREE.Line(e, d);
    line.name = "Intermediate Line";
    this.cubeObjects.add(line)
  }
};
CubeGraphic.drawConstraintLine = function (a, b) {
  this.constraintSVG.path(a).attr({stroke: b, "stroke-width": 1})
};
CubeGraphic.drawConstraint = function (a, b) {
  this.initConstraint();
  for (var c = ImajnetZoom.getCoordinatesFromRealAtCurrentZoom(a.point[0]), d = "M " + c.x + " " + c.y, e = 1; e < a.point.length - 1; e++)c = ImajnetZoom.getCoordinatesFromRealAtCurrentZoom(a.point[e]), d += " L " + c.x + " " + c.y;
  this.drawConstraintLine(d, this.getConstraintColor(a.precision))
};
CubeGraphic.clearGraphicObjects = function () {
  this.cubeObjects && (this.cubeObjects.children = [])
};
CubeGraphic.clearConstraints = function () {
  null !== this.constraintSVG && (this.constraintSVG.remove(), this.constraintSVG = null)
};
CubeGraphic.clearAllLayersProjections = function () {
  if (this.svg) {
    var a = [];
    this.svg.forEach(function (b) {
      void 0 !== b.data("object") && a.push(b)
    });
    jQuery.each(a, function (a, c) {
      c.remove()
    })
  }
};
CubeGraphic.hideAllLayersProjections = function () {
  if (this.svg) {
    var a = [];
    this.svg.forEach(function (b) {
      a.push(b)
    });
    jQuery.each(a, function (a, c) {
      c.hide()
    })
  }
};
CubeGraphic.showAllLayersProjections = function () {
  if (this.svg) {
    var a = [];
    this.svg.forEach(function (b) {
      a.push(b)
    });
    jQuery.each(a, function (a, c) {
      c.show()
    })
  }
};
CubeGraphic.mouseMove = function (a) {
  a && (ImageControler.currentGraphic.clearGraphicObjects(), ImageControler.currentGraphic.lastClickCoordinates = CubePlugin.getCubeCoordinatesFromEvent(a), a = CubePlugin.getCubeCoordinatesFromImageCoordinates(ImageControler.currentGraphic.firstClickCoordinates), ImageControler.currentGraphic.lastClickCoordinates && a && ImageControler.currentGraphic.drawIntermediateLine(a, ImageControler.currentGraphic.lastClickCoordinates))
};
CubeGraphic.recalculateWithRotation = function (a) {
  return Math.sqrt(2 * Math.pow(a, 2)) - a
};
CubeGraphic.recalculateInCaseOfRotation = function (a) {
  var b = a.rotation;
  b && 0 !== b % 90 && (b = parseInt(b) / 90, .5 < b && (b = 1 - b), a.pointRadius -= b * this.recalculateWithRotation(a.pointRadius) + 2, a.strokeWidth && (a.strokeWidth -= 2 * b * this.recalculateWithRotation(a.strokeWidth)))
};
CubeGraphic.createRenderer = function (a, b, c) {
  var d = null;
  c && (c = OpenLayersForProjection.Renderer[c]) && c.prototype.supported() && (d = new c(a));
  if (!d)for (var e = 0, f = this.renderers.length; e < f; ++e)if ((c = OpenLayersForProjection.Renderer[this.renderers[e]]) && c.prototype.supported()) {
    d = new c(a);
    break
  }
  d.map = {
    getResolution: function () {
      return 1
    }
  };
  b && (d.setSize(new OpenLayersForProjection.Size(b.width, b.height)), d.setExtent(new OpenLayersForProjection.Bounds(-b.width / 2, -b.height / 2, b.width / 2, b.height / 2), !0));
  return d
};/**
 * Created by FDD on 2017/7/26.
 */
