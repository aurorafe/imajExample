/**
 * Created by FDD on 2017/7/26.
 */
var ImajnetZoom = {
  imageWasDragged: !1,
  imageQuality: "MEDIUM_RESOLUTION",
  width: 0,
  height: 0,
  shiftZoomStart: {x: 0, y: 0},
  left: -1,
  top: 0,
  startScrollLeft: 0,
  startScrollTop: 0,
  zoomLevel: 0,
  zoomRatio: 1.2,
  maxZoomLevel: 20,
  lastZoomLevel: null,
  firstZoom: !0,
  HIGH_RESOLUTION_WIDTH: 2448,
  HIGH_RESOLUTION_HEIGHT: 2050,
  MEDIUM_RESOLUTION_WIDTH: 1024,
  MEDIUM_RESOLUTION_HEIGHT: 857,
  LOW_RESOLUTION_WIDTH: 512,
  LOW_RESOLUTION_HEIGHT: 428,
  THUMBNAIL_RESOLUTION_WIDTH: 512,
  THUMBNAIL_RESOLUTION_HEIGHT: 428,
  zKeyPressed: !1,
  shiftKeyPressed: !1,
  zoomBigImageLoaded: !1,
  orientationTriangleData: null,
  zoomedImagesCache: [],
  setZoomDimension: function () {
    this.width = ImajnetUI.imajnetImageContainerInitialSize.width;
    this.height = ImajnetUI.imajnetImageContainerInitialSize.height
  },
  init: function (a, b) {
    ImajnetZoom.setZoomDimension();
    ImajnetZoom.registerEvents()
  },
  imageIsZoomed: function () {
    return 0 != ImajnetZoom.zoomLevel
  },
  moveToTop: function (a) {
    ImajnetUI.imajnetImage.css("top", parseInt(a))
  },
  moveToLeft: function (a) {
    ImajnetUI.imajnetImage.css("left", parseInt(a));
    ImajnetUI.moveSurveyTraceContainerToLeft(a)
  },
  moveToPosition: function (a, b, c) {
    this.width - Math.abs(a) < ImajnetUI.imajnetImageContainerSize.width && (a = this.width - ImajnetUI.imajnetImageContainerSize.width);
    this.height - Math.abs(b) < ImajnetUI.imajnetImageContainerSize.height && (b = this.height - ImajnetUI.imajnetImageContainerSize.height);
    b = -1 * Math.abs(b);
    this.left = a = -1 * Math.abs(a);
    this.top = b;
    this.moveToLeft(a);
    this.moveToTop(b);
    c && ImajnetMap.setOrientationMarker(ImajnetMap.currentPosition, ImajnetMap.imajboxTriangleDimension, Nigsys.defaultObjectsColor, -1)
  },
  setDimension: function (a, b) {
    ImajnetUI.imajnetImage.css("width", a);
    ImajnetUI.imajnetImage.css("height", b)
  },
  updateProjections: function () {
    ImageControler.currentPhotogrammetry.redraw(!1)
  },
  setDraggableContainment: function () {
    var a = ImajnetUI.imajnetImageContainer.offset();
    ImajnetUI.getLargeImageWidthOverflow();
    var b = parseInt(a.left + ImajnetUI.imajnetImageContainerSize.width - this.width),
      c = parseInt(a.top + ImajnetUI.imajnetImageContainerSize.height - this.height), e = parseInt(a.left),
      a = parseInt(a.top);
    try {
      ImajnetUI.imajnetImage.draggable("option",
        "containment", [b, c, e, a])
    } catch (d) {
    }
  },
  resetZoom: function () {
    ImajnetUI.enableSwipeHandlers();
    ImajnetZoom.setZoomDimension();
    this.setDimension(this.width, this.height);
    this.moveToPosition(0, 0, !0);
    this.zoomLevel = 0;
    this.lastZoomLevel = null;
    this.setDraggableContainment();
    this.updateProjections();
    SurveyTrace.surveyTraceIsActive && ImageControler.currentSurveyTrace.restoreTrace();
    this.isZoomMode() || (ImajnetZoom.doWhenDeactivateZoom(), ImajnetUI.imajnetImageContainer.off("vmousedown", ImajnetZoom.onShiftZoomStart),
    CubePlugin.cubeMesh && (CubePlugin.camera.fov = 80))
  },
  canZoom: function () {
    return this.zKeyPressed || this.shiftKeyPressed
  },
  getCurrentZoomFactor: function () {
    return Math.pow(ImajnetZoom.zoomRatio, ImajnetZoom.zoomLevel)
  },
  getRealImageSize: function () {
    return {width: ImajnetZoom.HIGH_RESOLUTION_WIDTH, height: ImajnetZoom.HIGH_RESOLUTION_HEIGHT}
  },
  getRealImageCoordinates: function (a, b) {
    var c = ImajnetZoom.getCoordinatesOnScreen(a, b), e = ImajnetZoom.getRealImageSize();
    return {
      x: e.width / ImajnetUI.imajnetImageContainerInitialSize.width *
      c.x, y: e.height / ImajnetUI.imajnetImageContainerInitialSize.height * c.y
    }
  },
  getCoordinatesOnScreen: function (a, b) {
    var c = Math.abs(ImajnetZoom.top) + b, e = Math.abs(ImajnetZoom.left) + a, d = this.getCurrentZoomFactor();
    return {x: e / d, y: c / d}
  },
  getScreenCoordinatesFromRealCoordinates: function (a) {
    var b = this.getRealImageSize();
    return {
      x: a.x / (b.width / ImajnetUI.imajnetImageContainerInitialSize.width),
      y: a.y / (b.height / ImajnetUI.imajnetImageContainerInitialSize.height)
    }
  },
  getCoordinatesAtCurrentZoom: function (a, b) {
    return {
      x: a.x *
      b, y: a.y * b
    }
  },
  getCoordinatesFromRealAtCurrentZoom: function (a) {
    a = this.getCoordinatesAtCurrentZoom(a, this.getCurrentZoomFactor());
    a = this.getScreenCoordinatesFromRealCoordinates(a);
    return {x: parseInt(a.x - Math.abs(this.left)), y: parseInt(a.y - Math.abs(this.top))}
  },
  onShiftZoomStart: function (a) {
    if (1 != a.which && !Nigsys.onMobile())return a.preventDefault(), a.stopPropagation(), Nigsys.disableEventPropagation(a), !1;
    var b = jQuery(a.target).parent();
    b && Nigsys.stringContains(b.attr("class"), "imajnetControlsLayerButtonsItem") ||
    !ImajnetMap.currentPosition || (b = ImajnetUI.imajnetImageContainer.offset(), ImajnetZoom.shiftZoomStart.x = a.clientX, ImajnetZoom.shiftZoomStart.y = a.clientY, ImajnetUI.imajnetZoomOnShiftBoxOffset.x = ImajnetZoom.shiftZoomStart.x - b.left, ImajnetUI.imajnetZoomOnShiftBoxOffset.y = ImajnetZoom.shiftZoomStart.y - b.top, ImajnetUI.imajnetZoomOnShiftBox.css("left", ImajnetUI.imajnetZoomOnShiftBoxOffset.x).css("top", ImajnetUI.imajnetZoomOnShiftBoxOffset.y).show(), ImajnetZoom.imageWasDragged = !0)
  },
  imageDragStart: function (a,
                            b) {
    ImajnetZoom.startScrollLeft = a.clientX;
    ImajnetZoom.startScrollTop = a.clientY
  },
  shiftZoomMouseMove: function (a) {
    if ((ImajnetZoom.canZoom() || ImajnetZoom.isZoomMode()) && ImajnetUI.imajnetZoomOnShiftBox.is(":visible")) {
      var b = a.clientX - ImajnetZoom.shiftZoomStart.x;
      a = a.clientY - ImajnetZoom.shiftZoomStart.y;
      var c = ImajnetUI.imajnetZoomOnShiftBoxOffset.x;
      0 > b && (c += b, b *= -1);
      var e = ImajnetUI.imajnetZoomOnShiftBoxOffset.y;
      0 > a && (e += a, a *= -1);
      ImajnetUI.imajnetZoomOnShiftBox.css("left", c).css("top", e).css("width", b).css("height",
        a)
    } else ImajnetUI.hideShiftBox()
  },
  imageDragOutsideContainer: function () {
    var a = ImajnetUI.imajnetImageContainer.offset().left;
    return 0 == ImajnetZoom.zoomLevel && (event.clientX < a || event.clientX > ImajnetUI.imajnetImageContainer.width() + a)
  },
  imageDragRightReachEnd: function () {
    return ImajnetUI.imajnetImage.position().left + ImajnetUI.imajnetImage.width() <= ImajnetUI.imajnetImageContainerSize.width
  },
  imageDragReachEnd: function () {
    return 0 == ImajnetZoom.zoomLevel && (ImajnetImageSwitcher.dragRightPosition && ImajnetZoom.imageDragRightReachEnd() ||
      ImajnetImageSwitcher.dragLeftPosition && 0 == ImajnetUI.imajnetImage.position().left)
  },
  imageDrag: function (a, b) {
    ImajnetUI.dragImageSliderCount = 0;
    ImajnetZoom.imageDragOutsideContainer() || (ImajnetZoom.imageDragRightReachEnd() || 0 == ImajnetUI.imajnetImage.position().left) && !ImajnetUI.popupImajnetControlsLayer.hasClass("ui-draggable-dragging") || (this.moveToPosition(ImajnetZoom.left + a.clientX - ImajnetZoom.startScrollLeft, ImajnetZoom.top + a.clientY - ImajnetZoom.startScrollTop, !0), ImajnetZoom.startScrollLeft = a.clientX,
      ImajnetZoom.startScrollTop = a.clientY, this.updateProjections(), ImageControler.currentGraphic.mouseMove(a))
  },
  onImageDragStop: function (a, b) {
    ImajnetZoom.imageDragReachEnd() && (ImajnetUI.enableDraggable(ImajnetUI.imajnetImageSliderInnerContainer), ImajnetUI.disableImageDrag())
  },
  imageDragStop: function (a, b) {
    ImajnetZoom.onImageDragStop(a, b);
    ImajnetZoom.imageDragOutsideContainer() || (this.left = b.position.left, this.top = b.position.top, Nigsys.browserIsIE() && this.updateProjections(), this.imageWasDragged = !0)
  },
  shiftZoomEnd: function (a) {
    if ("undefined" !==
      typeof ImajnetUI && ImajnetUI && ImajnetUI.imajnetZoomOnShiftBox) {
      var b = ImajnetUI.imajnetZoomOnShiftBox.width(), c = ImajnetUI.imajnetZoomOnShiftBox.height();
      if (!ImajnetZoom.canZoom() && !ImajnetZoom.isZoomMode() || .5 > b || .5 > c) ImajnetUI.hideShiftBox(), ImajnetUI.imajnetZoomOnShiftBox.hide(); else {
        var e = ImajnetUI.imajnetImageContainer.offset(), d = ImajnetUI.imajnetZoomOnShiftBox.offset(), f = a.clientX;
        a = a.clientY;
        Math.round(d.left) + 1 < ImajnetZoom.shiftZoomStart.x && (ImajnetZoom.shiftZoomStart.x = f, ImajnetUI.imajnetZoomOnShiftBoxOffset.x =
          ImajnetZoom.shiftZoomStart.x - e.left);
        Math.round(d.top) + 1 < ImajnetZoom.shiftZoomStart.y && (ImajnetZoom.shiftZoomStart.y = a, ImajnetUI.imajnetZoomOnShiftBoxOffset.y = ImajnetZoom.shiftZoomStart.y - e.top);
        ImajnetUI.hideShiftBox();
        ImajnetZoom.zoomOnShift(b, c)
      }
    }
  },
  onZoomAddHighImageSuccess: function (a, b, c) {
    a.unbind({error: ImajnetZoom.onZoomAddHighImageError, load: ImajnetZoom.onZoomAddHighImageSuccess});
    ImajnetZoom.zoomBigImageLoaded = !0;
    -1 == ImajnetZoom.zoomedImagesCache.indexOf(ImajnetMap.currentPosition.id) && ImajnetZoom.zoomedImagesCache.push(ImajnetMap.currentPosition.id)
  },
  onZoomAddHighImageError: function (a, b) {
    a.attr("src", ImajnetAPI.buildImageURLWithResolution(ImajnetMap.currentPosition, ImajnetSettings.imajnetImageResolutions[ImajnetSettings.imajnetSettings.imageQuality]));
    a.unbind({error: ImajnetZoom.onZoomAddHighImageError, load: ImajnetZoom.onZoomAddHighImageSuccess});
    ImajnetZoom.zoomBigImageLoaded = !0
  },
  zoomOnScroll: function (a, b) {
    if (!Nigsys.scrollDeltaIsValid(b) || null != this.lastZoomLevel && this.lastZoomLevel == this.zoomLevel && (ImajnetZoom.zoomLevel != this.lastZoomLevel ||
      0 != this.zoomLevel))return !1;
    if (!(0 < b && this.zoomLevel == this.maxZoomLevel)) {
      ImajnetUI.disableSwipeHandlers();
      this.imageWasDragged = !1;
      this.lastZoomLevel = ImajnetZoom.zoomLevel;
      var c = ImajnetUI.imajnetImageContainer.offset(), e = a.originalEvent.clientX - c.left,
        c = a.originalEvent.clientY - c.top, d = this.getCoordinatesOnScreen(e, c);
      if (0 < b) -1 !== ImajnetUI.imajnetImage.attr("src").indexOf(ImajnetSettings.imajnetImageResolutions[3]) || this.zoomBigImageLoaded || ImajnetAPI.preloadImage(ImajnetUI.imajnetImage, ImajnetAPI.buildImageURLWithResolution(ImajnetMap.currentPosition,
        ImajnetSettings.imajnetImageResolutions[3]), this.onZoomAddHighImageSuccess, this.onZoomAddHighImageError), this.zoomLevel++; else {
        if (1 >= this.zoomLevel) {
          this.resetZoom();
          ImageControler.currentGraphic.mouseMove(a);
          return
        }
        this.zoomLevel--
      }
      ImageControler.currentSurveyTrace.hideTrace();
      var f = this.getCurrentZoomFactor(), d = this.getCoordinatesAtCurrentZoom(d, f),
        g = ImajnetUI.imajnetImageContainerInitialSize.height * f;
      this.width = Math.max(ImajnetUI.imajnetImageContainerInitialSize.width, ImajnetUI.imajnetImageContainerInitialSize.width *
        f);
      this.height = Math.max(ImajnetUI.imajnetImageContainerInitialSize.height, g);
      this.setDimension(this.width, this.height);
      this.moveToPosition(d.x - e, d.y - c, !0);
      ImageControler.currentGraphic.mouseMove(a);
      this.setDraggableContainment()
    }
  },
  zoomOnShift: function (a, b) {
    for (var c = ImajnetUI.imajnetZoomOnShiftBoxOffset.x + a / 2, e = ImajnetUI.imajnetZoomOnShiftBoxOffset.y + b / 2, d = 0; d < this.maxZoomLevel; d++) {
      var f = Math.pow(ImajnetZoom.zoomRatio, d + 1), g = b * f;
      if (a * f >= ImajnetUI.imajnetImageContainerSize.width || g >= ImajnetUI.imajnetImageContainerSize.height)break;
      f = ImajnetUI.imajnetImageContainer.offset();
      this.zoomOnScroll({originalEvent: {clientX: c + f.left, clientY: e + f.top}}, 1)
    }
    d = ImajnetUI.imajnetImage.position();
    this.moveToPosition(d.left + (ImajnetUI.imajnetImageContainerSize.width / 2 - c), d.top + (ImajnetUI.imajnetImageContainerSize.height / 2 - e), !0);
    this.updateProjections()
  },
  hideDragDisabledVisual: function () {
    return !1
  },
  bindHideDragDisabledVisual: function () {
    if (ImajnetUI.imajnetImageSliderInnerContainer) ImajnetUI.imajnetImageSliderInnerContainer.on("dragstart", ImajnetZoom.hideDragDisabledVisual)
  },
  unBindHideDragDisabledVisual: function () {
    ImajnetUI.imajnetImageSliderInnerContainer && ImajnetUI.imajnetImageSliderInnerContainer.off("dragstart", ImajnetZoom.hideDragDisabledVisual)
  },
  doWhenActivateZoom: function () {
    ImajnetUI.disableSwipeHandlers();
    ImajnetZoom.bindHideDragDisabledVisual();
    ImajnetUI.disableImageAllDrag();
    ImajnetUI.imajnetImageContainer.on("vmousedown", ImajnetZoom.onShiftZoomStart);
    ImajnetUI.imajnetImageContainer.on("vmousemove", ImajnetZoom.shiftZoomMouseMove);
    jQuery(".popupImajnetImage").addClass("zoomCursor")
  },
  activateZoom: function () {
    ImajnetPosition.hidePosition(!0);
    ImajnetMeasurement.hideMeasurement(!0);
    ImajnetPolyligne.type = "";
    ImajnetPolyligne.hide(!0);
    ImajnetUI.activeControlButton = "zoom";
    jQuery("#imajnetZoomButtonContainer").addClass("buttonActive");
    ImajnetZoom.zKeyPressed = !0;
    ImajnetZoom.shiftKeyPressed = !0;
    ImajnetZoom.doWhenActivateZoom()
  },
  doWhenDeactivateZoom: function () {
    ImajnetZoom.unBindHideDragDisabledVisual()
  },
  deactivateZoom: function () {
    ImajnetZoom.doWhenDeactivateZoom();
    ImajnetUI.activeControlButton =
      "";
    jQuery("#imajnetZoomButtonContainer").removeClass("buttonActive");
    ImajnetZoom.zKeyPressed = !1;
    ImajnetZoom.shiftKeyPressed = !1;
    0 < this.zoomLevel && ImajnetUI.enableImageAllDrag();
    jQuery(".popupImajnetImage").removeClass("zoomCursor");
    ImajnetUI.imajnetImageContainer && (ImajnetUI.imajnetImageContainer.off("vmousedown", ImajnetZoom.onShiftZoomStart), ImajnetUI.imajnetImageContainer.off("vmousemove", ImajnetZoom.shiftZoomMouseMove))
  },
  isZoomMode: function () {
    return jQuery("#imajnetZoomButtonContainer").hasClass("buttonActive")
  },
  activateDeactivateZoom: function (a) {
    ImajnetZoom.isZoomMode() ? (ImajnetZoom.deactivateZoom(), 0 == ImajnetZoom.zoomLevel ? ImajnetUI.enableDraggable(ImajnetUI.imajnetImageSliderInnerContainer) : (ImajnetUI.enableImageAllDrag(), ImajnetUI.imajnetImageContainer.off("vmousedown", ImajnetZoom.onShiftZoomStart))) : ImajnetZoom.activateZoom()
  },
  scrollEndTimeout: function () {
    ImageControler.currentImageControl.resetFastNavigation();
    ImajnetMap.currentPosition && lastLoadedImageId == ImajnetMap.currentPosition.id && ImageControler.currentImageControl.doRequests(ImajnetMap.currentPosition)
  },
  zoomOnPinch: function (a, b, c, e) {
    var d = ImajnetUI.imajnetImageContainer.offset();
    b = Nigsys.getPinchCenter(b[0].start, b[1].start);
    a.clientX = b.x + d.left;
    a.clientY = b.y + d.top;
    e = 10 * e / ImajnetUI.imajnetImageContainer.height();
    for (d = 0; d < e; d++)ImajnetZoom.zoomOnScrollHandler(a, c);
    ImajnetUI.enableImageAllDrag()
  },
  zoomOnScrollHandler: function (a, b) {
    if (a.target && (Nigsys.stringContains(a.target.className, "textareaEditComment") || Nigsys.stringContains(a.target.className, "imajnetImageSwitcherImageItem") || Nigsys.stringContains(a.target.className,
        "imajnetImageSwitcherOrderedImageItemImage") || Nigsys.stringContains(a.target.className, "orderedImageDate") || Nigsys.stringContains(a.target.className, "scrollOrderedImagesLeftImage") || Nigsys.stringContains(a.target.className, "scrollOrderedImagesRightImage") || Nigsys.stringContains(a.target.id, "imajnetImageSwitcherCenterImage")))return !1;
    var c = jQuery(a.target).parent();
    if (c && Nigsys.stringContains(c.attr("class"), "imajnetControlsLayerButtonsItem"))return !1;
    b = Nigsys.getDelta(a, b);
    ImajnetZoom.canZoom() ||
    ImajnetZoom.isZoomMode() || Nigsys.onMobile() ? (ImajnetZoom.zoomOnScroll(a, b), ImajnetZoom.updateProjections()) : (clearTimeout(ImageControler.currentImageControl.fastNavigationTimeout), ImageControler.currentImageControl.setFastNavigation(), ImageControler.currentImageControl.fastNavigationTimeout = setTimeout("ImajnetZoom.scrollEndTimeout()", 300), 0 > b ? ImageControler.currentImageControl.getPrevious(!1) : ImageControler.currentImageControl.getNext(!1));
    a.preventDefault();
    return !0
  },
  registerEvents: function () {
    ImajnetUI.imajnetImageContainer.on("mousewheel DOMMouseScroll",
      ImajnetZoom.zoomOnScrollHandler)
  },
  getPreviewPanelZoomFactor: function () {
    return 5
  }
};