/**
 * Created by FDD on 2017/7/26.
 */
var ImajnetClickMode = {
  positions: null,
  orientedImagesAjaxRequest: null,
  centerMarkerLayer: null,
  centerMarkerLayerName: "Target point markers",
  requestedPosition: null,
  getPositionByIndexInArray: function (a) {
    var d = null;
    jQuery.each(this.positions, function (e, c) {
      if (c.wrapperId == a)return d = c, !1
    });
    return d
  },
  addClickedPointToPhotogrammetry: function () {
    if (null !== ImajnetMap.currentPosition && (ImageControler.currentPhotogrammetry.removeMapClickedPoint(), null !== this.requestedPosition)) {
      var a = {
        id: 0, position: ImajnetMap.currentPosition,
        photogrammetryPosition3D: {coordinates: this.requestedPosition}, type: ImajnetMap.MARKER_TYPE_CLICKED_POINT
      };
      ImageControler.currentPhotogrammetry.addObject(ImajnetMap.currentPosition, a, !1, !0, !0);
      ImageControler.currentPhotogrammetry.getObjectLRS(a)
    }
  },
  moveImageToPosition: function (a) {
    ImajnetZoom.left = -1;
    Nigsys.showLoading(ImajnetUI.imageContainer);
    a = this.getPositionByIndexInArray(a);
    ImajnetAPI.setImajnetImage({position: a});
    ImajnetUI.showItem(ImajnetUI.imageContainerId)
  },
  drawOrientedImages: function (a) {
    if (null !==
      this.positions && null !== this.requestedPosition)for (var d = ImageControler.currentPhotogrammetry.getLastObjectId(), e = -1, c = !1, b = 0; b < this.positions.length; b++) {
      var f = Nigsys.distanceBetweenPoints(this.requestedPosition, this.positions[b]);
      !c && 25 < f && (e = 0, this.positions[b].wrapperId = d + e + 1, ImajnetMap.setOrientationMarker(this.positions[0], ImajnetMap.imajboxOrientedImagesDimension, "#00FF00", this.positions[b].wrapperId), a && ("undefined" !== typeof ImajnetUI && (ImajnetUI.showItem(ImajnetUI.imageContainerId), Nigsys.showLoading(ImajnetUI.imageContainer)),
        ImajnetZoom.left = -1, ImajnetAPI.setImajnetImage({position: this.positions[0]})), c = !0);
      !c && 4 < f && (e = b, this.positions[b].wrapperId = d + e + 1, ImajnetMap.setOrientationMarker(this.positions[b], ImajnetMap.imajboxOrientedImagesDimension, "#00FF00", this.positions[b].wrapperId), a && ("undefined" !== typeof ImajnetUI && (ImajnetUI.showItem(ImajnetUI.imageContainerId), Nigsys.showLoading(ImajnetUI.imageContainer)), ImajnetZoom.left = -1, ImajnetAPI.setImajnetImage({position: this.positions[b]})), c = !0);
      b != e && (this.positions[b].wrapperId =
        d + b + 1, ImajnetMap.setOrientationMarker(this.positions[b], ImajnetMap.imajboxOrientedImagesDimension, "#00FF00", this.positions[b].wrapperId))
    }
  },
  redrawClickedPointOnMap: function () {
    ImajnetMap.clearClickedPointFromMap();
    null !== this.requestedPosition && ImajnetMap.addClickedPointToMap(this.requestedPosition)
  },
  redrawOrientedImages: function () {
    ImajnetMap.hideOrientedImages();
    this.addClickMode(!1);
    ImajnetClickMode.redrawClickedPointOnMap()
  },
  addClickMode: function (a) {
    ImajnetClickMode.drawOrientedImages(a);
    a && ImajnetClickMode.addClickedPointToPhotogrammetry()
  },
  orientedImagesReceived: function (a) {
    ImajnetMap.hideImajboxMarker();
    ImajnetMap.hideOrientation();
    a = JSON.parse(a);
    a.positions && (ImajnetClickMode.positions = a.positions, ImajnetClickMode.addClickMode(!0));
    ImajnetClickMode.redrawClickedPointOnMap()
  },
  orientedImagesError: function () {
    ImajnetMap.hideImajboxMarker();
    ImajnetMap.hideOrientation();
    ImajnetClickMode.hideOrientedImages();
    ImajnetZoom.left = -1;
    ImajnetAPI.setImajnetImage({position: null})
  },
  getOrientedImages: function (a, d, e, c, b) {
    ImajnetAPI.mustAbortRequests &&
    null !== this.orientedImagesAjaxRequest && this.orientedImagesAjaxRequest.abort();
    this.orientedImagesAjaxRequest = ImajnetAPI.doImajnetRequest("GET", "/api/photogrammetry/image/orientation/", {
      position: {
        lon: a,
        lat: d
      },
      radius: ImajnetSettings.imajnetSettings.orientedImages,
      limit: ImajnetSettings.limitOrientedImages,
      sequenceType: Imajnet.sequenceType
    }, e, c, null, null, null, b)
  },
  showOrientedImages: function (a, d, e, c, b) {
    ImajnetUI.stopSwipeNavigation(!0);
    this.hideOrientedImages();
    this.requestedPosition = {lon: a, lat: d};
    this.getOrientedImages(this.requestedPosition.lon,
      this.requestedPosition.lat, e, c, b)
  },
  hideOrientedImages: function () {
    ImajnetMap.clearClickedPointFromMap();
    this.requestedPosition = this.positions = null;
    ImajnetMap.hideOrientedImages();
    Photogrammetry.removeMapClickedPoint()
  }
};