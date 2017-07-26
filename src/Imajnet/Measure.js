/**
 * Created by FDD on 2017/7/26.
 */
var ImajnetMeasurement = {
  firstLoad: !0,
  zoomLevel: null,
  firstImageClick1: null,
  firstImageClick2: null,
  secondImageClick1: null,
  noOfClickedPoints: 1,
  measurementAjaxRequest: null,
  onMeasurementClick: function (a) {
    ImageControler.currentPhotogrammetry.openImageWithPhotogrammetryObject(a.getId())
  },
  addPreviewPanel: function () {
    jQuery("#imajnetPreviewPanel").html('\x3cdiv id\x3d"imajnetPreviewPanelContent"\x3e\x3cdiv class\x3d"imajnetPreviewPanelItem imageTrace" id\x3d"imajnetPreviewPanelItem1"\x3e\x3cb\x3e' + jQuery.imajnet.map.measurement.step +
      "\x26nbsp;1\x3c/b\x3e\x3cbr/\x3e" + jQuery.imajnet.map.measurement.step1Content + '\x3c/div\x3e\x3cdiv class\x3d"imajnetPreviewPanelItemArrow" id\x3d"imajnetPreviewPanelItemArrow1"\x3e\x3c/div\x3e\x3cdiv class\x3d"imajnetPreviewPanelItem imageTrace" id\x3d"imajnetPreviewPanelItem2"\x3e\x3cb\x3e' + jQuery.imajnet.map.measurement.step + "\x26nbsp;2\x3c/b\x3e\x3cbr/\x3e" + jQuery.imajnet.map.measurement.step2Content + '\x3c/div\x3e\x3cdiv class\x3d"imajnetPreviewPanelItemArrow" id\x3d"imajnetPreviewPanelItemArrow2"\x3e\x3c/div\x3e\x3cdiv class\x3d"imajnetPreviewPanelItem imageTrace" id\x3d"imajnetPreviewPanelItem3"\x3e\x3cb\x3e' +
      jQuery.imajnet.map.measurement.step + "\x26nbsp;3\x3c/b\x3e\x3cbr/\x3e" + jQuery.imajnet.map.measurement.step3Content + "\x3c/div\x3e\x3c/div\x3e");
    Nigsys.browserIsIE7() || Nigsys.browserIsIE8() || jQuery(".imajnetPreviewPanelItem").corner("5px");
    ImajnetUI.popupImajnetControlsLayer.append('\x3cimg id\x3d"measurementDenied" src\x3d"' + Imajnet.imajnetPath + "img/measurementDenied.png?" + Imajnet.version + '" width\x3d"100" height\x3d"100" style\x3d"position: absolute; top: ' + (ImajnetUI.imajnetImageContainerSize.height -
      100) / 2 + "px; left: " + (ImajnetUI.imajnetImageContainerSize.width - 100) / 2 + 'px; display: none;" /\x3e')
  },
  showMeasurement: function (a) {
    ImageControler.currentPhotogrammetry.deletePrevObjects();
    ImajnetPosition.hidePosition(a);
    ImajnetPolyligne.hide(a);
    ImageControler.currentSurveyTrace.hideTrace();
    ImajnetZoom.deactivateZoom();
    ImajnetUI.activeControlButton = "imajnetMeasurement";
    this.addPreviewPanel();
    this.firstLoad = !1;
    jQuery("#imajnetPreviewPanel").show();
    jQuery("#imajnetMeasurementButtonContainer").addClass("buttonActive");
    ImageControler.currentPhotogrammetry.clear();
    ImajnetImageSwitcher.hide();
    ImajnetUI.LRSGUI.hide();
    ImajnetZoom.imageWasDragged = !1;
    Address.hideAddressContainer();
    LRS.hideLRSContainer();
    ImajnetUI.hideDateContainer()
  },
  hideMeasurement: function (a) {
    ImajnetUI.activeControlButton = "";
    ImajnetUI.imajnetImageContainer && ImageControler.currentPhotogrammetry && !Nigsys.onMobile() && ImajnetUI.imajnetImageContainer.unbind("mousemove", ImageControler.currentPhotogrammetry.imageMouseMovePreviewPanel).unbind("mousemove", ImageControler.currentGraphic.mouseMove);
    jQuery("#imajnetPreviewPanel").hide();
    jQuery("#measurementDenied").hide();
    jQuery("#imajnetMeasurementButtonContainer").removeClass("buttonActive");
    ImageControler.currentPhotogrammetry && (this.noOfClickedPoints = ImageControler.currentPhotogrammetry.currentStep = 1, ImageControler.currentPhotogrammetry.setRedStep(ImageControler.currentPhotogrammetry.currentStep - 1), ImageControler.currentPhotogrammetry.firstImagePosition = null, ImageControler.currentPhotogrammetry.constraintParameter = null, a ? (ImageControler.currentPhotogrammetry.redraw(!1),
      ImageControler.currentSurveyTrace.draw(ImajnetMap.currentPosition)) : ImageControler.currentPhotogrammetry.hidePreviewPanel())
  },
  showHideMeasurement: function () {
    jQuery("#imajnetMeasurementButtonContainer").hasClass("buttonActive") ? (this.hideMeasurement(!0), LRS.cachedPoints[ImajnetMap.currentPosition.lat + ":" + ImajnetMap.currentPosition.lon + ":" + ImajnetMap.currentPosition.height] && ImajnetUI.LRSGUI.draw(LRS.cachedPoints[ImajnetMap.currentPosition.lat + ":" + ImajnetMap.currentPosition.lon + ":" + ImajnetMap.currentPosition.height]),
      Address.showAddress(), LRS.showLRS(), ImajnetUI.showDateContainer(), ImageControler.currentPhotogrammetry.redraw(!1)) : this.showMeasurement(!0)
  },
  showHideMeasurementDenied: function () {
    this.noOfClickedPoints = 1;
    ImageControler.currentPhotogrammetry.photogrammetryIsDenied() ? jQuery("#measurementDenied").show() : (jQuery("#measurementDenied").hide(), Nigsys.onMobile() || ImajnetUI.imajnetImageContainer.bind("mousemove", ImageControler.currentPhotogrammetry.imageMouseMovePreviewPanel).bind("mousemove", ImageControler.currentGraphic.mouseMove),
      ImageControler.currentPhotogrammetry.getConstraint())
  },
  reload: function (a) {
    jQuery("#imajnetMeasurementButtonContainer").hasClass("buttonActive") && (this.hideMeasurement(!1), this.showMeasurement(!1), ImajnetZoom.imageWasDragged = !1)
  },
  getPreviewPanelZoomFactor: function (a, c) {
    return Math.max(.65 * Math.min(ImajnetZoom.HIGH_RESOLUTION_WIDTH / Math.abs(c.x - a.x), ImajnetZoom.HIGH_RESOLUTION_HEIGHT / Math.abs(c.y - a.y)), 1)
  },
  drawPreviewPanelLine: function (a, c, b, d) {
    ImageControler.currentGraphic.previewPanelGraphicInit();
    a = ImageControler.currentPhotogrammetry.getPreviewPanelPoint(a, b, d);
    c = ImageControler.currentPhotogrammetry.getPreviewPanelPoint(c, b, d);
    ImageControler.currentGraphic.drawPreviewPanelLine(a, c)
  },
  onImageResize: function (a) {
    Nigsys.isMeasurementMode() && ImageControler.currentGraphic.firstClickCoordinates && ImageControler.currentGraphic.mouseMove(a)
  },
  measurementReceived: function (a) {
    ImageControler.currentPhotogrammetry.setRedStep(ImageControler.currentPhotogrammetry.currentStep);
    ImajnetMeasurement.showHideMeasurement();
    if ((a = JSON.parse(a)) && a.parameter && a.parameter.imagePoint1 && a.parameter.imagePoint1.img1) {
      a.type = "measurement";
      var c = ImageControler.currentPhotogrammetry.addObject(a.parameter.imagePoint1.img1, a, !1, !0, !0);
      ImajnetAPI.setImajnetImage({position: a.parameter.imagePoint1.img1});
      ImageControler.currentPhotogrammetry.getObjectLRS(a);
      ImajnetPlugin.onMeasurementCreated({id: c.id, measurement: a.measurementResult})
    } else ImajnetUI.showError(jQuery.imajnet.map.measurement.errorMeasurement, !0)
  },
  measurementComplete: function (a) {
    200 !==
    a.status && (ImajnetMeasurement.showHideMeasurement(), ImageControler.currentPhotogrammetry.redraw(!1), ImajnetUI.showError(jQuery.imajnet.map.measurement.errorMeasurement, !0))
  },
  drawPreviewPanelLineAgain: function () {
    if (null !== ImajnetMeasurement.firstImageClick1 && null !== ImajnetMeasurement.firstImageClick2) {
      ImageControler.currentGraphic.clearPreviewPanel();
      var a = {
          x: this.firstImageClick1.x == this.firstImageClick2.x ? this.firstImageClick1.x : Math.abs(this.firstImageClick1.x + this.firstImageClick2.x) / 2,
          y: this.firstImageClick1.y ==
          this.firstImageClick2.y ? this.firstImageClick1.y : Math.abs(this.firstImageClick1.y + this.firstImageClick2.y) / 2
        }, c = this.getPreviewPanelZoomFactor(this.firstImageClick1, this.firstImageClick2),
        a = ImageControler.currentPhotogrammetry.setPreviewPanelVisibleRegion(a, c);
      ImajnetMeasurement.drawPreviewPanelLine(this.firstImageClick1, this.firstImageClick2, c, a)
    }
  },
  measureObject: function (a, c, b) {
    if (jQuery("#imajnetMeasurementButtonContainer").hasClass("buttonActive")) {
      ImajnetAPI.mustAbortRequests && null !== this.measurementAjaxRequest &&
      this.measurementAjaxRequest.abort();
      var d = null;
      b && b.face && (d = b.face);
      ImajnetZoom.imageQuality = "HIGH_RESOLUTION";
      b = null;
      "FLAT" == ImageControler.currentImageType ? (ImajnetUI.previewImage.attr("src", ImajnetAPI.buildImageURL(ImageControler.currentPhotogrammetry.firstImagePosition, ImajnetUI.getPreviewImageResolution())), b = ImajnetZoom.getRealImageCoordinates(a, c)) : (ImajnetUI.previewImage.attr("src", ImajnetAPI.buildImageURL(ImageControler.currentPhotogrammetry.firstImagePosition, ImajnetUI.getPreviewImageResolution()),
        d), b = {x: a, y: c});
      switch (ImageControler.currentPhotogrammetry.currentStep) {
        case 1:
          switch (this.noOfClickedPoints) {
            case 1:
              ImageControler.currentGraphic.firstClickCoordinates = {x: b.x, y: b.y, face: d};
              ImageControler.currentPhotogrammetry.firstImagePosition = ImajnetMap.currentPosition;
              this.firstImageClick1 = {
                imageId: ImageControler.currentPhotogrammetry.firstImagePosition.id,
                x: b.x,
                y: b.y
              };
              this.noOfClickedPoints++;
              ImageControler.currentGraphic.init();
              Nigsys.onMobile() || ("FLAT" == ImageControler.currentImageType ? ImajnetUI.imajnetImageContainer.bind("mousemove",
                ImageControler.currentPhotogrammetry.imageMouseMovePreviewPanel).bind("mousemove", ImageControler.currentGraphic.mouseMove) : CubePlugin.cubeContainer.bind("mousemove", ImageControler.currentPhotogrammetry.imageMouseMovePreviewPanel).bind("mousemove", ImageControler.currentGraphic.mouseMove));
              break;
            case 2:
              ImajnetUI.previewImage.attr("src", ImajnetAPI.buildImageURL(ImageControler.currentPhotogrammetry.firstImagePosition, ImajnetUI.getPreviewImageResolution())), c = {
                x: this.firstImageClick1.x == b.x ? this.firstImageClick1.x :
                  Math.abs(this.firstImageClick1.x + b.x) / 2,
                y: this.firstImageClick1.y == b.y ? this.firstImageClick1.y : Math.abs(this.firstImageClick1.y + b.y) / 2
              }, a = this.getPreviewPanelZoomFactor(this.firstImageClick1, b), c = ImageControler.currentPhotogrammetry.setPreviewPanelVisibleRegion(c, a), this.drawPreviewPanelLine(this.firstImageClick1, b, a, c), ImageControler.currentPhotogrammetry.showPreviewPanel(), ImageControler.currentPhotogrammetry.setRedStep(ImageControler.currentPhotogrammetry.currentStep), this.firstImageClick2 = {
                imageId: ImageControler.currentPhotogrammetry.firstImagePosition.id,
                x: b.x, y: b.y
              }, ImageControler.currentPhotogrammetry.constraintParameter = Object({
                points: [Object({
                  x: this.firstImageClick1.x,
                  y: this.firstImageClick1.y
                }), Object({x: this.firstImageClick2.x, y: this.firstImageClick2.y})]
              }), this.noOfClickedPoints = 1, ImageControler.currentPhotogrammetry.currentStep++, ImageControler.currentImageControl.getPrevious(!0), ImageControler.currentGraphic.firstClickCoordinates = null
          }
          break;
        case 2:
          switch (this.noOfClickedPoints) {
            case 1:
              ImageControler.currentGraphic.init();
              ImageControler.currentGraphic.firstClickCoordinates =
                {x: b.x, y: b.y, face: d};
              this.secondImageClick1 = {imageId: ImajnetMap.currentPosition.id, x: b.x, y: b.y};
              this.noOfClickedPoints++;
              break;
            case 2:
              Nigsys.onMobile() || ("FLAT" == ImageControler.currentImageType ? ImajnetUI.imajnetImageContainer.unbind("mousemove", ImageControler.currentPhotogrammetry.imageMouseMovePreviewPanel).unbind("mousemove", ImageControler.currentGraphic.mouseMove) : CubePlugin.cubeContainer.unbind("mousemove", ImageControler.currentPhotogrammetry.imageMouseMovePreviewPanel).unbind("mousemove", ImageControler.currentGraphic.mouseMove)),
                ImageControler.currentPhotogrammetry.setRedStep(ImageControler.currentPhotogrammetry.currentStep), ImageControler.currentGraphic.clearConstraints(), this.measurementAjaxRequest = ImajnetAPI.doImajnetRequest("GET", "/api/photogrammetry/measurement/free/", {
                imagePoint1: {
                  img1: ImageControler.currentPhotogrammetry.firstImagePosition,
                  img2: ImajnetMap.currentPosition,
                  imgCoord1: {x: this.firstImageClick1.x, y: this.firstImageClick1.y},
                  imgCoord2: {x: this.secondImageClick1.x, y: this.secondImageClick1.y}
                }, imagePoint2: {
                  img1: ImageControler.currentPhotogrammetry.firstImagePosition,
                  img2: ImajnetMap.currentPosition,
                  imgCoord1: {x: this.firstImageClick2.x, y: this.firstImageClick2.y},
                  imgCoord2: {x: b.x, y: b.y}
                }
              }, this.measurementReceived, null, this.measurementComplete), Address.showAddress(), this.noOfClickedPoints = 1, ImageControler.currentPhotogrammetry.currentStep++
          }
      }
    }
  }
};