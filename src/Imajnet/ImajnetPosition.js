/**
 * Created by FDD on 2017/7/26.
 */
var ImajnetPosition = {
  firstLoad: !0, zoomLevel: null, positionAjaxRequest: null, onPositionClick: function (a, b) {
    ImageControler.currentPhotogrammetry.openImageWithPhotogrammetryObject(b.getId())
  }, addPreviewPanel: function () {
    jQuery("#imajnetPreviewPanel").html('\x3cdiv id\x3d"imajnetPreviewPanelContent"\x3e\x3cdiv class\x3d"imajnetPreviewPanelItem imageTrace " id\x3d"imajnetPreviewPanelItem1"\x3e\x3cb\x3e' + jQuery.imajnet.map.position.step + "\x26nbsp;1\x3c/b\x3e\x3cbr/\x3e" + jQuery.imajnet.map.position.step1Content +
      '\x3c/div\x3e\x3cdiv class\x3d"imajnetPreviewPanelItemArrow" id\x3d"imajnetPreviewPanelItemArrow1"\x3e\x3c/div\x3e\x3cdiv class\x3d"imajnetPreviewPanelItem imageTrace" id\x3d"imajnetPreviewPanelItem2"\x3e\x3cb\x3e' + jQuery.imajnet.map.position.step + "\x26nbsp;2\x3c/b\x3e\x3cbr/\x3e" + jQuery.imajnet.map.position.step2Content + '\x3c/div\x3e\x3cdiv class\x3d"imajnetPreviewPanelItemArrow" id\x3d"imajnetPreviewPanelItemArrow2"\x3e\x3c/div\x3e\x3cdiv class\x3d"imajnetPreviewPanelItem imageTrace" id\x3d"imajnetPreviewPanelItem3"\x3e\x3cb\x3e' +
      jQuery.imajnet.map.position.step + "\x26nbsp;3\x3c/b\x3e\x3cbr/\x3e" + jQuery.imajnet.map.position.step3Content + "\x3c/div\x3e\x3c/div\x3e");
    Nigsys.browserIsIE7() || Nigsys.browserIsIE8() || jQuery(".imajnetPreviewPanelItem").corner("5px");
    ImajnetUI.popupImajnetControlsLayer.append('\x3cimg id\x3d"positionDenied" src\x3d"' + Imajnet.imajnetPath + "img/measurementDenied.png?" + Imajnet.version + '" width\x3d"100" height\x3d"100" style\x3d"position: absolute; top: ' + (ImajnetUI.imajnetImageContainerSize.height - 100) /
      2 + "px; left: " + (ImajnetUI.imajnetImageContainerSize.width - 100) / 2 + 'px; display: none;" /\x3e')
  }, showPosition: function (a) {
    ImageControler.currentPhotogrammetry.deletePrevObjects();
    ImajnetMeasurement.hideMeasurement(a);
    ImajnetPolyligne.hide(a);
    ImageControler.currentSurveyTrace.hideTrace();
    ImajnetZoom.deactivateZoom();
    ImajnetUI.activeControlButton = "imajnetPosition";
    this.addPreviewPanel();
    this.firstLoad = !1;
    jQuery("#imajnetPreviewPanel").show();
    jQuery("#imajnetPositionButtonContainer").addClass("buttonActive");
    ImageControler.currentPhotogrammetry.clear();
    ImajnetImageSwitcher.hide();
    ImajnetUI.LRSGUI.hide();
    ImajnetZoom.imageWasDragged = !1;
    Address.hideAddressContainer();
    LRS.hideLRSContainer();
    ImajnetUI.hideDateContainer()
  }, hidePosition: function (a) {
    ImajnetUI.activeControlButton = "";
    ImajnetUI.imajnetImageContainer && ImageControler.currentPhotogrammetry && ImajnetUI.imajnetImageContainer.unbind("mousemove", ImageControler.currentPhotogrammetry.imageMouseMovePreviewPanel);
    jQuery("#imajnetPreviewPanel").hide();
    jQuery("#positionDenied").hide();
    jQuery("#imajnetPositionButtonContainer").removeClass("buttonActive");
    ImageControler.currentPhotogrammetry && (ImageControler.currentPhotogrammetry.currentStep = 1, ImageControler.currentPhotogrammetry.setRedStep(ImageControler.currentPhotogrammetry.currentStep - 1), ImageControler.currentPhotogrammetry.firstImagePosition = null, ImageControler.currentPhotogrammetry.constraintParameter = null, a ? (ImageControler.currentPhotogrammetry.redraw(!1), ImageControler.currentSurveyTrace.draw(ImajnetMap.currentPosition)) :
      ImageControler.currentPhotogrammetry.hidePreviewPanel())
  }, showHidePosition: function () {
    jQuery("#imajnetPositionButtonContainer").hasClass("buttonActive") ? (this.hidePosition(!0), LRS.cachedPoints[ImajnetMap.currentPosition.lat + ":" + ImajnetMap.currentPosition.lon + ":" + ImajnetMap.currentPosition.height] && ImajnetUI.LRSGUI.draw(LRS.cachedPoints[ImajnetMap.currentPosition.lat + ":" + ImajnetMap.currentPosition.lon + ":" + ImajnetMap.currentPosition.height]), Address.showAddress(), LRS.showLRS(), ImajnetUI.showDateContainer(),
      ImageControler.currentPhotogrammetry.redraw(!1)) : this.showPosition(!0)
  }, showHidePositionDenied: function () {
    ImageControler.currentPhotogrammetry.photogrammetryIsDenied() ? jQuery("#positionDenied").show() : (jQuery("#positionDenied").hide(), ImageControler.currentPhotogrammetry.getConstraint())
  }, reload: function () {
    jQuery("#imajnetPositionButtonContainer").hasClass("buttonActive") && (this.hidePosition(!1), this.showPosition(!1), ImajnetZoom.imageWasDragged = !1)
  }, pinPointPositionReceived: function (a, b) {
    ImageControler.currentPhotogrammetry.setRedStep(ImageControler.currentPhotogrammetry.currentStep);
    ImajnetPosition.showHidePosition();
    if ((a = JSON.parse(a)) && a.parameter && a.parameter.imagePoint && a.parameter.imagePoint.img1) {
      a.type = "position";
      var d = ImageControler.currentPhotogrammetry.addObject(a.parameter.imagePoint.img1, a, !1, !0, !0);
      ImajnetAPI.setImajnetImage({position: a.parameter.imagePoint.img1});
      ImageControler.currentPhotogrammetry.getObjectLRS(a);
      ImajnetPlugin.onPinPointCreated({id: d.id, point: a.photogrammetryPosition3D})
    } else ImajnetUI.showError(jQuery.imajnet.map.position.errorPosition, !0)
  },
  pinPointPositionComplete: function (a) {
    200 !== a.status && (ImajnetPosition.showHidePosition(), ImajnetUI.showError(jQuery.imajnet.map.position.errorPosition, !0))
  }, positionObject: function (a, b, d) {
    ImajnetAPI.mustAbortRequests && null !== this.positionAjaxRequest && this.positionAjaxRequest.abort();
    var e = null;
    d && d.face && (e = d.face);
    ImageControler.currentPhotogrammetry.setRedStep(ImageControler.currentPhotogrammetry.currentStep);
    switch (ImageControler.currentPhotogrammetry.currentStep) {
      case 1:
        ImageControler.currentPhotogrammetry.firstImagePosition =
          ImajnetMap.currentPosition;
        ImajnetZoom.imageQuality = "HIGH_RESOLUTION";
        var c = null;
        "FLAT" == ImageControler.currentImageType ? (ImajnetUI.previewImage.attr("src", ImajnetAPI.buildImageURL(ImageControler.currentPhotogrammetry.firstImagePosition, ImajnetUI.getPreviewImageResolution())), c = ImajnetZoom.getRealImageCoordinates(a, b)) : (ImajnetUI.previewImage.attr("src", ImajnetAPI.buildImageURL(ImageControler.currentPhotogrammetry.firstImagePosition, ImajnetUI.getPreviewImageResolution()), e), c = {
          x: a,
          y: b
        });
        ImageControler.currentGraphic.clearPreviewPanel();
        a = ImajnetZoom.getPreviewPanelZoomFactor();
        b = ImageControler.currentPhotogrammetry.setPreviewPanelVisibleRegion(c, a);
        ImageControler.currentGraphic.drawPreviewPanelPoint(c, a, b);
        ImageControler.currentPhotogrammetry.showPreviewPanel();
        ImageControler.currentPhotogrammetry.constraintParameter = Object({points: Array(c)});
        ImageControler.currentImageControl.getPrevious(!0);
        ImageControler.currentPhotogrammetry.currentStep++;
        ImajnetUI.imajnetImageContainer.bind("mousemove", ImageControler.currentPhotogrammetry.imageMouseMovePreviewPanel);
        break;
      case 2:
        ImageControler.currentPhotogrammetry.hidePreviewPanel(), ImajnetZoom.imageQuality = "HIGH_RESOLUTION", c = "FLAT" == ImageControler.currentImageType ? ImajnetZoom.getRealImageCoordinates(a, b) : {
          x: a,
          y: b
        }, ImageControler.currentGraphic.clearConstraints(), this.positionAjaxRequest = ImajnetAPI.doImajnetRequest("GET", "/api/photogrammetry/position3D/", {
          imagePoint: {
            img1: ImageControler.currentPhotogrammetry.firstImagePosition,
            img2: ImajnetMap.currentPosition,
            imgCoord1: {
              x: ImageControler.currentPhotogrammetry.constraintParameter.points[0].x,
              y: ImageControler.currentPhotogrammetry.constraintParameter.points[0].y
            },
            imgCoord2: {x: c.x, y: c.y}
          }
        }, this.pinPointPositionReceived, null, this.pinPointPositionComplete, null, null, d), Address.showAddress(), ImageControler.currentPhotogrammetry.currentStep++
    }
  }
};