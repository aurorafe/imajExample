var SurveyTrace = {
  positions: null,
  surveyTraceIsActive: !1,
  mustClearSequenceTraceMapMarker: !1,
  realImageSize: null,
  visibleSize: null,
  PINPOINT_DISTANCE_FACTOR: 1.5,
  DIFFERENT_SEQUENCE_HEIGHT: 2,
  colors: "#D60047 #27d949 #c2d927 #c24427 #c227ae #5f68dc #dc5fc9 #4bb7b1 #6fb74b #fd0505 #3bbfe5 #cfe53b #a900dc".split(" "),
  viewerCurrentPosition: null,
  container: null,
  sequenceTraceTitleContainer: null,
  projections: null,
  currentPositionId: null,
  currentSurveyTraceHTML: null,
  currentSurveyTraceResponse: null,
  surveyTraceAjaxRequest: null,
  customDraw: function () {
  },
  moveImageToClickPosition: !0,
  draw: function (a) {
    this.hideTrace();
    this.currentPositionId = null;
    a && (!SurveyTrace.surveyTraceIsActive || Nigsys.isPositionMode() || Nigsys.isMeasurementMode() || Nigsys.isPolyligneMode() || this.getSurveyTrace(a.id, {draw: !0}), this.currentPositionId = a.id, this.viewerCurrentPosition = a, ImageControler.currentSurveyTrace.customDraw())
  },
  showHideSurveyTrace: function () {
    SurveyTrace.surveyTraceIsActive ? this.hideTrace() : this.getSurveyTrace(this.currentPositionId, {draw: !0});
    SurveyTrace.surveyTraceIsActive = !SurveyTrace.surveyTraceIsActive;
    ImajnetUrl.changeUrlParam(ImajnetUrl.SURVEY_TRACE_URL_PARAM_NAME, SurveyTrace.surveyTraceIsActive ? ImajnetUrl.SURVEY_TRACE_ACTIVE_PARAM_VALUE : "", !0)
  },
  restoreTrace: function () {
  },
  hideTrace: function () {
  },
  getSurveyTrace: function (a, b) {
    if (!(Nigsys.isPositionMode() || Nigsys.isMeasurementMode() || Nigsys.isPolyligneMode()) && (ImajnetZoom.deactivateZoom(), ImajnetAPI.mustAbortRequests && null !== this.surveyTraceAjaxRequest && this.surveyTraceAjaxRequest.abort(),
        a)) {
      var c = {
        position: {id: a},
        radius: ImajnetSettings.imajnetSettings.surveyTrace,
        limit: ImajnetSettings.limitSurveyTrace,
        timeframe: ImajnetTimeframe.getTimeframe()
      };
      this.surveyTraceAjaxRequest = ImajnetAPI.doImajnetRequest("GET", "/api/photogrammetry/image/visible/", c, this.surveyTraceReceived, this.surveyTraceError, null, null, !0, b)
    }
  },
  surveyTraceReceived: function (a, b) {
    (a = JSON.parse(a)) && a.size ? (SurveyTrace.realImageSize = {
      width: a.size.width,
      height: a.size.height
    }, "FLAT" == ImageControler.currentImageType && (SurveyTrace.visibleSize =
      {
        width: ImageControler.currentSurveyTrace.container.width(),
        height: ImageControler.currentSurveyTrace.container.height()
      }), b.draw ? (jQuery("#imajnetTraceSurveyButtonContainer").addClass("buttonActive"), ImageControler.currentSurveyTrace.drawSurveyTrace(a)) : (ImageControler.currentSurveyTrace.projections = a.projections, ImageControler.currentSurveyTrace.positions = a.positions, ImageControler.currentSurveyTrace.goToClickPosition(b.event))) : ImageControler.currentSurveyTrace.surveyTraceError()
  },
  surveyTraceError: function () {
    ImageControler.currentSurveyTrace.hideTrace()
  },
  drawSurveyTrace: function (a) {
  },
  getDistanceSizeFactor: function (a) {
    return 0 >= a ? 1 : 25 < a ? .16 : 1 - a / 30
  },
  getSequenceColor: function (a) {
    return this.colors[a % 10]
  },
  computeImageAngle: function (a, b) {
    360 < a && (a = 360);
    0 > a && (a = 360 + a);
    360 < b && (b = 360);
    0 > b && (b = 360 + b);
    var c = a - b;
    0 > c && (c = 360 + c);
    return c
  },
  calculateOrientationIndex: function (a, b) {
    var c = this.computeImageAngle(a, b), c = Math.round(c / 45);
    return 8 == c ? 0 : c
  },
  getPositionByIndexInArray: function (a) {
    var b = null;
    jQuery.each(this.positions, function (c, d) {
      if (c == a)return b = d, !1
    });
    return b
  },
  moveImageToPosition: function (a) {
    ImajnetZoom.left = -1;
    a = this.getPositionByIndexInArray(a);
    ImajnetAPI.setImajnetImage({position: a})
  },
  onImageResize: function (a, b) {
    SurveyTrace.surveyTraceIsActive && (SurveyTrace.visibleSize = {
      width: a,
      height: b
    }, ImageControler.currentSurveyTrace && ImageControler.currentSurveyTrace.drawSurveyTrace())
  },
  showSequenceTraceMapMarker: function (a, b, c, d, e, f) {
    a = this.getPositionByIndexInArray(a);
    ImajnetMap.setOrientationMarker(a, ImajnetMap.imajboxOrientedImagesDimension, b, -2);
    this.mustClearSequenceTraceMapMarker = !0;
    this.sequenceTraceTitleContainer.html(c);
    ImajnetUI.showAndPositionInsideNear(this.container, {
      top: parseInt(d),
      left: parseInt(e),
      height: parseInt(f)
    }, this.sequenceTraceTitleContainer);
    jQuery(this).addClass("opacity100")
  },
  hideSequenceTraceMapMarker: function () {
    ImajnetMap.hideSurveyTrace();
    this.mustClearSequenceTraceMapMarker = !1;
    this.sequenceTraceTitleContainer.hide();
    jQuery(this).removeClass("opacity100")
  },
  clearSurveyTraceMapMarkerIfNeeded: function () {
    this.mustClearSequenceTraceMapMarker &&
    this.hideSequenceTraceMapMarker()
  },
  clearSurveyTrace: function () {
  }
};
var FlatSurveyTrace = Nigsys.cloneObject(SurveyTrace);
FlatSurveyTrace.customDraw = function () {
  this.container = jQuery("#imajnetSurveyTraceLayer")
};
FlatSurveyTrace.restoreTrace = function () {
  !this.container || Nigsys.isPositionMode() || Nigsys.isMeasurementMode() || Nigsys.isPolyligneMode() || (this.container.html(this.currentSurveyTraceHTML), jQuery("#imajnetTraceSurveyButtonContainer").addClass("buttonActive"))
};
FlatSurveyTrace.hideTrace = function () {
  jQuery("#imajnetTraceSurveyButtonContainer").removeClass("buttonActive");
  null !== this.container && ("" != this.container.html() && (this.currentSurveyTraceHTML = this.container.html()), this.container.html(""))
};
FlatSurveyTrace.clearTrace = function () {
  this.sequenceTraceData = [];
  this.container && this.container.html("");
  this.clearSurveyTraceMapMarkerIfNeeded()
};
FlatSurveyTrace.drawSurveyTrace = function (a) {
  if (!(Nigsys.isPositionMode() || Nigsys.isMeasurementMode() || Nigsys.isPolyligneMode()) && (this.container && this.container.html(""), void 0 === a ? a = this.currentSurveyTraceResponse : this.currentSurveyTraceResponse = a, SurveyTrace.realImageSize && a.projections && a.positions)) {
    var f = SurveyTrace.visibleSize.width / SurveyTrace.realImageSize.width,
      k = SurveyTrace.visibleSize.height / SurveyTrace.realImageSize.height;
    this.projections = a.projections;
    this.positions = a.positions;
    for (a =
           0; a < this.projections.length; a++) {
      if (0 <= this.projections[a].coordinates.z) {
        var c = this.projections[a].coordinates.x, d = this.projections[a].coordinates.y;
        if (0 > c || c > SurveyTrace.realImageSize.width || 0 > d || d > SurveyTrace.realImageSize.height)return !1;
        var e = this.getSequenceColor(this.positions[a].traceId),
          b = 60 * this.getDistanceSizeFactor(this.projections[a].coordinates.z),
          l = Imajnet.imajnetPath + "img/orientation/" + "A1_up.png?'+Imajnet.version+' A1_right_up.png?'+Imajnet.version+' A1_right.png?'+Imajnet.version+' A1_right_down.png?'+Imajnet.version+' A1_down.png?'+Imajnet.version+' A1_Left_down.png?'+Imajnet.version+' A1_Left.png?'+Imajnet.version+' A1_Left_up.png?'+Imajnet.version+'".split(" ")[this.calculateOrientationIndex(this.viewerCurrentPosition.orientation.yaw,
              this.positions[a].orientation.yaw)], b = 150, h = this.projections[a].coordinates.z, g = b / h * 2,
          b = b / 2 / h * 2, d = Math.min(Math.max(d * k, 0 + b / 2), this.container.height() - b / 2) - .6 * b / 2,
          c = Math.min(Math.max(c * f, 0 + g / 2), this.container.width() - g / 2) - g / 2,
          h = jQuery.imajnet.map.surveyTrace.distance + ": " + this.projections[a].coordinates.z.toFixed(2) + " " + jQuery.imajnet.map.surveyTrace.meters + (this.viewerCurrentPosition.traceId != this.positions[a].traceId ? " | " + jQuery.imajnet.map.surveyTrace.date + ": " + this.positions[a].timestamp : "");
        this.container.append('\x3cdiv id\x3d"imageSurveyTrace_' + a + '" class\x3d"imageSurveyTrace opacity60" ' + (' onmouseover\x3d"ImageControler.currentSurveyTrace.showSequenceTraceMapMarker(' + a + ",'" + e + "', '" + h + "', '" + d + "', '" + c + "', '" + b + '\');" onmouseout\x3d"ImageControler.currentSurveyTrace.hideSequenceTraceMapMarker();"') + (' style\x3d"position: absolute; top: ' + d + "px; left: " + c + "px; width: " + g + "px; height:" + b + "px; background-color: " + e + '; z-index: 2;"') + '\x3e\x3cimg src\x3d"' + l + '" align\x3d"left" width\x3d"' +
          g + '" height\x3d"' + b + '" /\x3e\x3c/div\x3e');
        Nigsys.bindClickEvent(jQuery("#imageSurveyTrace_" + a), function (a) {
          ImageControler.currentSurveyTrace.moveImageToPosition(a.data.index)
        }, {index: a})
      }
      this.container.append('\x3cdiv id\x3d"sequenceTraceTitleContainer"\x3e\x3c/div\x3e');
      this.sequenceTraceTitleContainer = jQuery("#sequenceTraceTitleContainer")
    }
    0 < ImajnetZoom.zoomLevel && this.hideTrace()
  }
};
FlatSurveyTrace.clearSurveyTrace = function () {
  this.sequenceTraceData = [];
  this.container && this.container.html("");
  this.clearSurveyTraceMapMarkerIfNeeded()
};
FlatSurveyTrace.onImageDbClick = function (a) {
  SurveyTrace.surveyTraceIsActive ? ImageControler.currentSurveyTrace.goToClickPosition(a) : ImageControler.currentSurveyTrace.getSurveyTrace(ImajnetMap.currentPosition.id, {event: a})
};
FlatSurveyTrace.goToClickPosition = function (a) {
  if (ImageControler.currentSurveyTrace.positions) {
    var f = ImajnetUI.imajnetImageContainer.offset();
    a = ImajnetZoom.getRealImageCoordinates(a.clientX - f.left, a.clientY - f.top);
    for (var f = ImajnetZoom.getRealImageSize().height, k = ImajnetMap.currentPosition.traceId, c = null, d = 999999, e = 0; e < ImageControler.currentSurveyTrace.positions.length; e++)if (k == ImageControler.currentSurveyTrace.positions[e].traceId) {
      var b = Math.abs(ImageControler.currentSurveyTrace.projections[e].coordinates.y -
        a.y);
      !(b > f) && b < d && (c = ImageControler.currentSurveyTrace.positions[e], d = b)
    }
    ImajnetAPI.setImajnetImage({position: c})
  }
};
var CubeSurveyTrace = Nigsys.cloneObject(SurveyTrace);
CubeSurveyTrace.customDraw = function () {
};