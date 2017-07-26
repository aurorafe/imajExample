var ImajnetPlugin = {
  getMapScale: function () {
    ImajnetUserMessages.functionNotImplemented("getMapScale")
  }, getCurrentZoomLevel: function () {
    ImajnetUserMessages.functionNotImplemented("getCurrentZoomLevel")
  }, zoomMapTo: function (a) {
    ImajnetUserMessages.functionNotImplemented("zoomMapTo")
  }, zoomMapToFeatureWrapper: function (a, b) {
    ImajnetUserMessages.functionNotImplemented("zoomMapToFeatureWrapper")
  }, centerMapToPosition: function (a, b) {
    ImajnetUserMessages.functionNotImplemented("centerMapToPosition")
  }, addWMSLayerToMap: function (a,
                                 b) {
    ImajnetUserMessages.functionNotImplemented("addWMSLayerToMap")
  }, addVectorLayerToMap: function (a) {
    ImajnetUserMessages.functionNotImplemented("addVectorLayerToMap")
  }, removeLayerFromMap: function (a) {
    ImajnetUserMessages.functionNotImplemented("removeLayerFromMap")
  }, addFeature: function (a, b, c) {
    ImajnetUserMessages.functionNotImplemented("addFeature")
  }, removeFeatures: function (a, b) {
    ImajnetUserMessages.functionNotImplemented("removeFeatures")
  }, removeAllFeatures: function (a) {
    ImajnetUserMessages.functionNotImplemented("removeAllFeatures")
  },
  selectFeature: function (a, b) {
    ImajnetUserMessages.functionNotImplemented("selectFeature")
  }, unselectFeature: function (a, b) {
    ImajnetUserMessages.functionNotImplemented("unselectFeature")
  }, selectPolygonFeature: function (a, b) {
  }, unselectPolygonFeature: function (a, b) {
  }, addMarkerLayerToMap: function (a) {
    ImajnetUserMessages.functionNotImplemented("addMarkerLayerToMap")
  }, setLayerZIndex: function (a, b) {
    ImajnetUserMessages.functionNotImplemented("setLayerZIndex")
  }, addMarker: function (a, b) {
    ImajnetUserMessages.functionNotImplemented("addMarker")
  },
  removeMarker: function (a, b) {
    ImajnetUserMessages.functionNotImplemented("removeMarker")
  }, removeAllMarkersFromLayer: function (a) {
    ImajnetUserMessages.functionNotImplemented("removeAllMarkersFromLayer")
  }, selectMarker: function (a, b) {
    ImajnetUserMessages.functionNotImplemented("selectMarker")
  }, unselectMarker: function (a, b) {
    ImajnetUserMessages.functionNotImplemented("unselectMarker")
  }, setFeatureColor: function (a, b, c) {
  }, setFeatureStrokeColor: function (a, b, c) {
  }, addImajnetLayerToMap: function () {
    ImajnetUserMessages.functionNotImplemented("addImajnetLayerToMap")
  },
  onImageChange: function (a) {
    ImajnetUserMessages.functionNotImplemented("onImageChange")
  }, registerMapEvents: function () {
    ImajnetUserMessages.functionNotImplemented("registerMapEvents")
  }, unregisterMapEvents: function () {
    ImajnetUserMessages.functionNotImplemented("unregisterMapEvents")
  }, getProjectionCandidates: function (a) {
    ImajnetUserMessages.functionNotImplemented("getProjetionCandidates");
    return jQuery.Deferred().resolve(null).promise()
  }, drawUserProjections: function () {
    ImajnetUserMessages.functionNotImplemented("drawUserProjections");
    return jQuery.Deferred().resolve(null).promise()
  }, highlightFeatureOnImage: function (a) {
    ImageControler.currentGraphic.highlightFeatureOnImage(a)
  }, unHighlightFeatureOnImage: function (a) {
    ImageControler.currentGraphic.unHighlightFeatureOnImage(a)
  }, positionImageOnFeature: function (a) {
    ImageControler.currentPhotogrammetry.ImajnetClipboardItemClick(a.getId())
  }, onFeatureMouseOver: function (a, b, c) {
    ImajnetUserMessages.functionNotImplemented("onFeatureMouseOver")
  }, onFeatureMouseOut: function (a) {
    ImajnetUserMessages.functionNotImplemented("onFeatureMouseOut")
  },
  onFeatureClick: function (a) {
    ImajnetUserMessages.functionNotImplemented("onFeatureClick")
  }, onMeasurementCreated: function (a) {
    ImajnetUserMessages.functionNotImplemented("onMeasurementCreated")
  }, onPinPointCreated: function (a) {
    ImajnetUserMessages.functionNotImplemented("onPinPointCreated")
  }, onPolyligneCreated: function (a) {
    ImajnetUserMessages.functionNotImplemented("onPolyligneCreated")
  }, onImajnetActivated: function () {
    ImajnetUserMessages.functionNotImplemented("onImajnetActivated")
  }, onImajnetDeactivated: function () {
    ImajnetUserMessages.functionNotImplemented("onImajnetDeactivated")
  },
  deletePhotogrammetryItem: function (a) {
    ImageControler.currentPhotogrammetry.deletePhotogrammetryItem(a)
  }, deleteLastPhotogrammetryItem: function (a) {
    ImageControler.currentPhotogrammetry.deleteLastPhotogrammetryItem(a)
  }, afterImajnetLayersAddedToMap: function () {
    ImajnetUserMessages.functionNotImplemented("afterImajnetLayersAddedToMap")
  }, getMapSize: function () {
    ImajnetUserMessages.functionNotImplemented("getMapSize")
  }, showImajnetItem: function (a) {
    ImajnetUserMessages.functionNotImplemented("showImajnetItem")
  },
  hideImajnetItem: function (a) {
    ImajnetUserMessages.functionNotImplemented("hideImajnetItem")
  }, addActiveState: function (a) {
    ImajnetUserMessages.functionNotImplemented("addActiveState")
  }, removeActiveState: function (a) {
    ImajnetUserMessages.functionNotImplemented("addActiveState")
  }, imajnetLoginError: function (a) {
    ImajnetUserMessages.functionNotImplemented("imajnetLoginError")
  }, imajnetLoginSuccess: function () {
    ImajnetUserMessages.functionNotImplemented("imajnetLoginSuccess")
  }, imajnetLogoutComplete: function () {
    Nigsys.hideLoading(jQuery(Imajnet.containerId));
    ImajnetUserMessages.functionNotImplemented("imajnetLogoutComplete")
  }, redrawLayer: function (a) {
    ImajnetUserMessages.functionNotImplemented("redrawLayer")
  }
};