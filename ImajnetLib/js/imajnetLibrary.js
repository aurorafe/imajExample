var ImajnetUserMessages = {
  functionNotImplemented: function (a) {
    console.warn(a + " function not implemented!")
  }
};
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
function FeatureWrapper () {
  this.type = this.id = "";
  this.feature = null;
  this.layerName = ""
}
FeatureWrapper.prototype.getFeatureId = function () {
  return 0
};
FeatureWrapper.prototype.getFeatureWKTGeometry = function () {
  return null
};
FeatureWrapper.prototype.getId = function () {
  return this.id
};
FeatureWrapper.prototype.setId = function (a) {
  this.id = a
};
FeatureWrapper.prototype.getType = function () {
  return this.type
};
FeatureWrapper.prototype.setType = function (a) {
  this.type = a
};
FeatureWrapper.prototype.getFeature = function () {
  return this.feature
};
FeatureWrapper.prototype.setFeature = function (a) {
  this.feature = a
};
FeatureWrapper.prototype.setStyle = function (a) {
  this.style = a
};
FeatureWrapper.prototype.getStyle = function (a) {
  return this.style
};
FeatureWrapper.prototype.setLayerName = function (a) {
  this.layerName = a
};
FeatureWrapper.prototype.getLayerName = function () {
  return this.layerName
};
FeatureWrapper.prototype.setStyleName = function (a) {
  this.layerStyle = a
};
FeatureWrapper.prototype.getStyleName = function () {
  return this.layerStyle
};
var Imajnet = {
  options: {},
  sequenceType: "ANY",
  imajnetPath: "",
  serverUrl: "",
  cartographicServerUrl: "",
  metadata: "",
  containerId: "",
  unit: "",
  searchRadius: {
    0: 2E4,
    1: 2E4,
    2: 2E4,
    3: 2E4,
    4: 2E4,
    5: 2E4,
    6: 15E3,
    7: 1E4,
    8: 4E3,
    9: 3E3,
    10: 2E3,
    11: 1500,
    12: 750,
    13: 400,
    14: 250,
    15: 150,
    16: 100,
    17: 75,
    18: 50,
    19: 50,
    20: 50,
    21: 50,
    22: 50,
    23: 50,
    24: 50,
    25: 50
  },
  IMAJNET_DATA_FORMAT: "JSON",
  clickMode: null,
  CLICK_MODE_CLOSEST_IMAGE: "closestImage",
  CLICK_MODE_ORIENTED_IMAGES: "orientedImages",
  imageWidthChange: 0,
  imageHeightChange: 0,
  imajnetIsActiveBoolean: !1,
  locale: "",
  appendImajnetHTMLElements: function (a) {
    ImajnetUI.imageContainer && ImajnetUI.imageContainer.length || jQuery("#" + a).append('\x3cdiv id\x3d"' + ImajnetUI.imageContainerId + '" class\x3d"imajnetItem"\x3e\x3c/div\x3e\x3cdiv id\x3d"' + ImajnetUI.helpContainerId + '" class\x3d"imajnetItem"\x3e\x3c/div\x3e\x3cdiv id\x3d"' + ImajnetUI.aboutImajnetContainerId + '" class\x3d"imajnetItem"\x3e\x3c/div\x3e\x3cdiv id\x3d"' + ImajnetUI.settingsContainerId + '" class\x3d"imajnetItem"\x3e\x3c/div\x3e\x3cdiv id\x3d"' + ImajnetUI.settingsLRSContainerId +
      '" class\x3d"imajnetItem"\x3e\x3c/div\x3e\x3cdiv id\x3d"' + ImajnetUI.sequenceDetailsId + '" class\x3d"imajnetItem"\x3e\x3c/div\x3e\x3cdiv id\x3d"' + ImajnetUI.imageDetailsId + '" class\x3d"imajnetItem"\x3e\x3c/div\x3e\x3cdiv id\x3d"' + ImajnetUI.groundPlaneDetailsId + '" class\x3d"imajnetItem"\x3e\x3c/div\x3e')
  },
  setImajnetPath: function () {
    var a = this.imajnetPath.lastIndexOf("/");
    if (-1 === a || a !== this.imajnetPath.length - 1) this.imajnetPath += "/"
  },
  setLanguage: function (a) {
    this.setImajnetPath();
    this.locale = a;
    return jQuery.getScript(Imajnet.imajnetPath +
      "js/i18n/locale-" + (a ? a : "en") + ".js")
  },
  init: function (a) {
    this.options = a;
    var b = jQuery.Deferred();
    if (!a)return alert("No options supplied"), ImajnetPlugin.imajnetLoginError(), b.reject(), b.promise();
    var d = "";
    a.serverUrl ? (this.serverUrl = a.serverUrl, -1 == this.serverUrl.indexOf("http") && (this.serverUrl = window.location.protocol + "//" + window.location.hostname + this.serverUrl), this.serverUrl.lastIndexOf("/") === this.serverUrl.length - 1 && this.serverUrl.substring(0, this.serverUrl.length - 2)) : d += "Parameter not supplied: serverUrl!\x3cbr/\x3e";
    this.cartographicServerUrl = a.cartographicServerUrl;
    "undefined" !== typeof ImajnetMap && ImajnetMap && (-1 !== a.serverUrl.indexOf("test.imajnet.net") ? ("undefined" !== typeof ImajnetMap && (ImajnetMap.cartographicServerDomains = [Nigsys.getProtocolString() + "//testcarto1.imajnet.net", Nigsys.getProtocolString() + "//testcarto2.imajnet.net", Nigsys.getProtocolString() + "//testcarto3.imajnet.net", Nigsys.getProtocolString() + "//testcarto4.imajnet.net", Nigsys.getProtocolString() + "//testcarto5.imajnet.net"]), ImajnetAPI.imageServerDomains =
      [Nigsys.getProtocolString() + "//testimage1.imajnet.net", Nigsys.getProtocolString() + "//testimage2.imajnet.net", Nigsys.getProtocolString() + "//testimage3.imajnet.net", Nigsys.getProtocolString() + "//testimage4.imajnet.net", Nigsys.getProtocolString() + "//testimage5.imajnet.net"], ImajnetAPI.apiServerDomains = [Nigsys.getProtocolString() + "//testapi1.imajnet.net", Nigsys.getProtocolString() + "//testapi2.imajnet.net", Nigsys.getProtocolString() + "//testapi3.imajnet.net", Nigsys.getProtocolString() + "//testapi4.imajnet.net",
      Nigsys.getProtocolString() + "//testapi5.imajnet.net"]) : -1 !== a.serverUrl.indexOf("web.imajnet.net") || -1 !== a.serverUrl.indexOf("app.imajnet.net") || a.useProductionServerDomains ? ("undefined" !== typeof ImajnetMap && (ImajnetMap.cartographicServerDomains = [Nigsys.getProtocolString() + "//carto1.imajnet.net", Nigsys.getProtocolString() + "//carto2.imajnet.net", Nigsys.getProtocolString() + "//carto3.imajnet.net", Nigsys.getProtocolString() + "//carto4.imajnet.net", Nigsys.getProtocolString() + "//carto5.imajnet.net"]), ImajnetAPI.imageServerDomains =
      [Nigsys.getProtocolString() + "//image1.imajnet.net", Nigsys.getProtocolString() + "//image2.imajnet.net", Nigsys.getProtocolString() + "//image3.imajnet.net", Nigsys.getProtocolString() + "//image4.imajnet.net", Nigsys.getProtocolString() + "//image5.imajnet.net"]) : -1 !== a.serverUrl.indexOf("immergis.fr") ? ("undefined" !== typeof ImajnetMap && (ImajnetMap.cartographicServerDomains = [Nigsys.getProtocolString() + "//carto1.immergis.fr", Nigsys.getProtocolString() + "//carto2.immergis.fr", Nigsys.getProtocolString() + "//carto3.immergis.fr",
      Nigsys.getProtocolString() + "//carto4.immergis.fr", Nigsys.getProtocolString() + "//carto5.immergis.fr"]), ImajnetAPI.imageServerDomains = [Nigsys.getProtocolString() + "//image1.immergis.fr", Nigsys.getProtocolString() + "//image2.immergis.fr", Nigsys.getProtocolString() + "//image3.immergis.fr", Nigsys.getProtocolString() + "//image4.immergis.fr", Nigsys.getProtocolString() + "//image5.immergis.fr"], ImajnetAPI.apiServerDomains = [Nigsys.getProtocolString() + "//api1.immergis.fr", Nigsys.getProtocolString() + "//api2.immergis.fr",
      Nigsys.getProtocolString() + "//api3.immergis.fr", Nigsys.getProtocolString() + "//api4.immergis.fr", Nigsys.getProtocolString() + "//api5.immergis.fr"]) : ImajnetMap.cartographicServerDomains = [Nigsys.getProtocolString() + "//" + window.location.hostname, Nigsys.getProtocolString() + "//" + window.location.hostname, Nigsys.getProtocolString() + "//" + window.location.hostname, Nigsys.getProtocolString() + "//" + window.location.hostname, Nigsys.getProtocolString() + "//" + window.location.hostname]);
    if (ImajnetUser.data && this.imajnetIsActive())return ImajnetPlugin.imajnetLoginSuccess(),
      ImajnetProtocol.imajnetLoginSuccess(activateImajnet), b.resolve(), b.promise();
    if (d)return alert(d), ImajnetPlugin.imajnetLoginError(), b.reject(), b.promise();
    a.imajnetPath && (this.imajnetPath = a.imajnetPath);
    a.loginRememberMe && (ImajnetProtocol.loginRememberMe = a.loginRememberMe);
    a.language ? this.setLanguage(a.language) : jQuery.imajnet || this.setLanguage("en");
    a.containerId && (this.containerId = a.containerId);
    a.unit && (this.unit = a.unit);
    a.searchLRSContainerId && (ImajnetUI.searchLRSContainerId = a.searchLRSContainerId);
    a.searchAddressContainerId && (ImajnetUI.searchAddressContainerId = a.searchAddressContainerId);
    a.clipboardContainerId && (ImajnetUI.clipboardContainerId = a.clipboardContainerId);
    a.clipboardExportContainerId && (ImajnetUI.clipboardExportContainerId = a.clipboardExportContainerId);
    a.newsContainerId && (ImajnetUI.newsContainerId = a.newsContainerId);
    Nigsys.initNotification();
    try {
      a.map && (ImajnetMap.map = a.map), ImajnetMap.key = "cartographicKey"
    } catch (c) {
    }
    a.metadata ? Imajnet.metadata = a.metadata : Imajnet.metadata || (Imajnet.metadata =
        document.domain);
    Nigsys.bindOnHashChange();
    "object" === typeof ImajnetProtocol ? ImajnetProtocol.imajnetLogin(a.username, a.password, a.activateImajnet).done(function () {
      b.resolve()
    }).fail(function () {
      b.reject()
    }) : (ImajnetPlugin.imajnetLoginError(), b.reject());
    a.clipboardActive || Photogrammetry.disableClipboard();
    return b.promise()
  },
  imajnetClosestPositionIsActive: function () {
    return Imajnet.clickMode == Imajnet.CLICK_MODE_CLOSEST_IMAGE
  },
  imajnetOrientedImagesIsActive: function () {
    return Imajnet.clickMode == Imajnet.CLICK_MODE_ORIENTED_IMAGES
  },
  imajnetIsActive: function () {
    return this.imajnetIsActiveBoolean
  },
  activateImajnetControl: function (a, b) {
    Imajnet.imajnetIsActive() || "searchLRS" === b || Imajnet.activateImajnet();
    for (var d = !1, c = 0, e = ImajnetUI.controlActivatorContainers.length; c < e; ++c)ImajnetUI.controlActivatorContainers[c].controlName == b && (d = !0);
    "closestImage" == b ? (ImajnetUI.disableToolControls(), Imajnet.clickMode = Imajnet.CLICK_MODE_CLOSEST_IMAGE, ImajnetClickMode.hideOrientedImages()) : "clickMode" == b ? (ImajnetUI.disableToolControls(), Imajnet.clickMode =
      Imajnet.CLICK_MODE_ORIENTED_IMAGES, 12 > ImajnetPlugin.getCurrentZoomLevel() && (ImajnetPlugin.zoomMapTo(12), ImajnetMap.currentPosition && ImajnetPlugin.centerMapToPosition(ImajnetMap.currentPosition))) : "showClipboard" == b ? (ImajnetUI.showItem(ImajnetUI.clipboardContainerId, Nigsys.browserIsIE7() ? 350 : null), ImajnetUI.addActiveState(a)) : "searchLRS" == b ? LRS.openLRSDialog() : "searchAddress" == b ? Address.openSearchDialog() : "showNews" == b && ImajnetNews.init(!1);
    ImajnetUI.addActiveState(a);
    d || ImajnetUI.controlActivatorContainers.push({
      buttonElement: a,
      controlName: b
    })
  },
  deactivateImajnetControl: function (a, b) {
    if (!Imajnet.imajnetIsActive())return !1;
    "closestImage" == b ? Imajnet.clickMode = null : "clickMode" == b ? (ImajnetClickMode.hideOrientedImages(), Imajnet.clickMode = null) : "showClipboard" == b ? (ImajnetUI.hideItem(ImajnetUI.clipboardExportContainerId), ImajnetUI.hideItem(ImajnetUI.clipboardContainerId)) : "searchLRS" == b ? LRS.closeLRSDialog() : "searchAddress" == b ? Address.hideAddress() : "showNews" == b && ImajnetNews.close();
    ImajnetUI.removeActiveState(a)
  },
  deactivateImajnetControls: function () {
    for (var a =
      0, b = ImajnetUI.controlActivatorContainers.length; a < b; ++a)this.deactivateImajnetControl(ImajnetUI.controlActivatorContainers[a].buttonElement, ImajnetUI.controlActivatorContainers[a].controlName);
    ImajnetUI.disableToolControls()
  },
  activateImajnet: function () {
    if (!Imajnet.imajnetIsActive() && (Imajnet.imajnetIsActiveBoolean = !0, "undefined" !== typeof ImajnetUI && ImajnetUI && ImajnetUI.addToolControls(), this.enableImajnetExtension(), "undefined" !== typeof ImajnetNews && ImajnetNews.init(!0), "undefined" !== typeof ImajnetPlugin)) ImajnetPlugin.onImajnetActivated()
  },
  addImageDate: function (a) {
    a ? ImajnetUI.imajnetAddImageDate(a) : ImajnetUI.hideDateContainer()
  },
  enableImajnetExtension: function () {
    "undefined" !== typeof ImajnetZoom && ImajnetZoom && jQuery(document).bind("vmouseup", ImajnetZoom.shiftZoomEnd);
    "undefined" !== typeof ImajnetMap && ImajnetMap && ImajnetMap.registerToMap();
    Imajnet.clickMode = null
  },
  deactivateImajnet: function (a, b, d) {
    var c = jQuery.Deferred();
    this.deactivateImajnetControls();
    if (!a && !Imajnet.imajnetIsActive())return ImajnetPlugin.onImajnetDeactivated(), c.resolve(),
      c.promise();
    Imajnet.imajnetIsActiveBoolean = !1;
    Imajnet.clickMode = null;
    jQuery(document).unbind("vmouseup", ImajnetZoom.shiftZoomEnd);
    d && (ImajnetUrl.changeUrlParam(ImajnetUrl.LOCATION_URL_PARAM_NAME, "", !0), ImajnetUrl.changeUrlParam(ImajnetUrl.SURVEY_TRACE_URL_PARAM_NAME, "", !0));
    ImajnetMap.unregisterFromMap();
    ImageControler.currentGraphic && (ImageControler.currentGraphic.svg = null);
    ImageControler.currentPhotogrammetry && (ImageControler.currentPhotogrammetry.objects = []);
    ImajnetAPI.setImajnetImage(null);
    ImajnetUI.hideImageElements();
    ImajnetUI.removeImageElements();
    Address.addressContainer = null;
    LRS.LRSContainer = null;
    ImajnetUI.docking.imageButtons && ImajnetUI.docking.imageButtons.remove();
    ImajnetUI.docking.imageLRSGUI && ImajnetUI.docking.imageLRSGUI.remove();
    ImajnetUI.LRSGUI && (ImajnetUI.LRSGUI.redrawRoad = !0);
    ImajnetUI.hideItem(ImajnetUI.imageContainerId);
    ImajnetUI.hideItem(ImajnetUI.clipboardContainerId);
    ImajnetUI.hideItem(ImajnetUI.clipboardExportContainerId);
    Nigsys.notification && Nigsys.notification.hide();
    ImajnetProtocol.imajnetLogout(!1).done(function () {
      ImajnetPlugin.onImajnetDeactivated();
      c.resolve()
    }).fail(function () {
      ImajnetPlugin.onImajnetDeactivated();
      CommonCore.deactivateImajnetButton();
      c.reject()
    });
    return c.promise()
  }
};
jQuery(function () {
  "undefined" !== typeof Combobox && "function" === typeof Combobox.init && Combobox.init()
});
Imajnet.version = "1.0.0";
Imajnet.buildDate = "2017-07-24T14:54:55Z";
var ApplicationStorage = {
  writeObject: function (d, b, a, c) {
    try {
      window.localStorage.setItem((a ? a + "_" : "") + (c ? c + "_" : "") + d, JSON.stringify(b))
    } catch (e) {
      console.error("LocalStorage - Unable to serialize json: - " + e)
    }
  }, readObject: function (d, b, a) {
    try {
      return JSON.parse(window.localStorage.getItem((b ? b + "_" : "") + (a ? a + "_" : "") + d))
    } catch (c) {
      return console.error("LocalStorage - Unable to parse json: " + c), null
    }
  }, writeSessionObject: function (d, b, a, c) {
    try {
      window.sessionStorage.setItem((a ? a + "_" : "") + (c ? c + "_" : "") + d, JSON.stringify(b))
    } catch (e) {
      console.error("SesisonStorage - Unable to serialize json: - " +
        e)
    }
  }, readSessionObject: function (d, b, a) {
    try {
      return JSON.parse(window.sessionStorage.getItem((b ? b + "_" : "") + (a ? a + "_" : "") + d))
    } catch (c) {
      return console.error("SessionStorage - Unable to parse json: " + c), null
    }
  }, writeObjectInCookie: function (d, b, a, c) {
    try {
      window.localStorage.setItem((a ? a + "_" : "") + (c ? c + "_" : "") + d, JSON.stringify(b))
    } catch (e) {
      console.error("LocalStorage - Unable to serialize json: - " + e)
    }
  }, readObjectFromCookie: function (d, b, a) {
    try {
      return JSON.parse(window.localStorage.getItem((b ? b + "_" : "") + (a ? a + "_" :
          "") + d))
    } catch (c) {
      return console.error("LocalStorage - Unable to parse json: " + c), null
    }
  }
};
var ImajnetUrl = {
  WORKSPACE_URL_PARAM_NAME: "wid",
  GROUP_URL_PARAM_NAME: "tgid",
  POSITION_URL_PARAM_NAME: "pos",
  LOCALE_URL_PARAM_NAME: "locale",
  IMAGE_URL_PARAM_NAME: "image",
  LOCATION_URL_PARAM_NAME: "loc",
  TIME_URL_PARAM_NAME: "time",
  MAP_URL_PARAM_NAME: "map",
  ZOOM_URL_PARAM_NAME: "zoom",
  SURVEY_TRACE_URL_PARAM_NAME: "trace",
  OSM_LAYER_PARAM_NAME: "OSM",
  OSMMAPNIK_LAYER_PARAM_NAME: "OSMMAPNIK",
  OCM_LAYER_PARAM_NAME: "OCM",
  OTM_LAYER_PARAM_NAME: "OTM",
  BING_ROAD_LAYER_PARAM_NAME: "B_MAP",
  BING_SATELLITE_LAYER_PARAM_NAME: "B_SAT",
  BING_HYBRID_LAYER_PARAM_NAME: "B_HYBRID",
  GOOGLE_ROAD_LAYER_PARAM_NAME: "G_MAP",
  GOOGLE_SATELLITE_LAYER_PARAM_NAME: "G_SAT",
  GOOGLE_HYBRID_LAYER_PARAM_NAME: "G_HYBRID",
  DEFAULT_ZOOM_LEVEL: 10,
  SURVEY_TRACE_ACTIVE_PARAM_VALUE: "yes",
  urlParams: {},
  paramsSeparator: ";",
  paramsAssign: "\x3d",
  getUrlParamValue: function (b) {
    var a = "";
    try {
      a = jQuery.url().fparam(b)
    } catch (c) {
    }
    return a
  },
  readUrl: function (b) {
    var a = {};
    a[this.WORKSPACE_URL_PARAM_NAME] = this.getUrlParamValue(this.WORKSPACE_URL_PARAM_NAME);
    a[this.GROUP_URL_PARAM_NAME] =
      this.getUrlParamValue(this.GROUP_URL_PARAM_NAME);
    a[this.POSITION_URL_PARAM_NAME] = this.getUrlParamValue(this.POSITION_URL_PARAM_NAME);
    a[this.LOCALE_URL_PARAM_NAME] = this.getUrlParamValue(this.LOCALE_URL_PARAM_NAME);
    a[this.IMAGE_URL_PARAM_NAME] = this.getUrlParamValue(this.IMAGE_URL_PARAM_NAME);
    a[this.LOCATION_URL_PARAM_NAME] = this.getUrlParamValue(this.LOCATION_URL_PARAM_NAME);
    a[this.TIME_URL_PARAM_NAME] = this.getUrlParamValue(this.TIME_URL_PARAM_NAME);
    var c = this.getUrlParamValue(this.MAP_URL_PARAM_NAME);
    c == this.GOOGLE_ROAD_LAYER_PARAM_NAME ? c = this.BING_ROAD_LAYER_PARAM_NAME : c == this.GOOGLE_SATELLITE_LAYER_PARAM_NAME ? c = this.BING_SATELLITE_LAYER_PARAM_NAME : c == this.GOOGLE_HYBRID_LAYER_PARAM_NAME && (c = this.BING_HYBRID_LAYER_PARAM_NAME);
    a[this.MAP_URL_PARAM_NAME] = c;
    a[this.ZOOM_URL_PARAM_NAME] = this.getUrlParamValue(this.ZOOM_URL_PARAM_NAME);
    if (a[this.ZOOM_URL_PARAM_NAME]) {
      if (c = parseInt(a[this.ZOOM_URL_PARAM_NAME]), 0 > c || 24 < c) a[this.ZOOM_URL_PARAM_NAME] = this.urlParams[this.ZOOM_URL_PARAM_NAME], b && this.changeUrlParam(this.ZOOM_URL_PARAM_NAME,
        a[this.ZOOM_URL_PARAM_NAME], !0)
    } else a[this.ZOOM_URL_PARAM_NAME] = this.DEFAULT_ZOOM_LEVEL;
    a[this.SURVEY_TRACE_URL_PARAM_NAME] = this.getUrlParamValue(this.SURVEY_TRACE_URL_PARAM_NAME);
    a[this.SURVEY_TRACE_URL_PARAM_NAME] && a[this.SURVEY_TRACE_URL_PARAM_NAME] != this.SURVEY_TRACE_ACTIVE_PARAM_VALUE && (a[this.SURVEY_TRACE_URL_PARAM_NAME] = this.urlParams[this.SURVEY_TRACE_URL_PARAM_NAME], b && this.changeUrlParam(this.SURVEY_TRACE_URL_PARAM_NAME, a[this.SURVEY_TRACE_URL_PARAM_NAME], !0));
    return a
  },
  applyCenterFromUrl: function (b) {
    var a =
      this.getUrlParamValue(this.POSITION_URL_PARAM_NAME).split(",");
    ImajnetPlugin.centerMapToPosition({lon: a[1], lat: a[0]});
    b && ImajnetPlugin.zoomMapTo(b)
  },
  onGoToLocation: function (b) {
    b = b.split(",");
    ImajnetAPI.getClosestPosition(b[0], b[1], ImajnetSettings.rangeClosestPositionUrl);
    ImajnetUrl.getUrlParamValue(this.POSITION_URL_PARAM_NAME) || ImajnetPlugin.centerMapToPosition({
      lon: b[1],
      lat: b[0]
    })
  },
  goToLocation: function (b) {
    this.onGoToLocation(b)
  },
  changeLocale: function (b) {
    this.urlParams[this.LOCALE_URL_PARAM_NAME] =
      b;
    b = "";
    var a = window.location.search;
    if (-1 === a.indexOf(this.LOCALE_URL_PARAM_NAME)) b = (a ? b + (a + "\x26") : b + "?") + (this.LOCALE_URL_PARAM_NAME + "\x3d" + this.urlParams[this.LOCALE_URL_PARAM_NAME] + "\x26"); else for (var a = a.split("\x26"), c = 0; c < a.length; c++)-1 !== a[c].indexOf(this.LOCALE_URL_PARAM_NAME) ? (0 == c && (b += "?"), b += this.LOCALE_URL_PARAM_NAME + "\x3d" + this.urlParams[this.LOCALE_URL_PARAM_NAME] + "\x26") : b += a[c] + "\x26";
    window.location.search = CommonCore.deleteLastChar(b)
  },
  applyImajnetLocation: function (b) {
    this.goToLocation(b)
  },
  applyUrlParams: function (b) {
    try {
      var a = ImajnetUrl.readUrl(b);
      a[this.LOCALE_URL_PARAM_NAME] && a[this.LOCALE_URL_PARAM_NAME] != this.urlParams[this.LOCALE_URL_PARAM_NAME] && ImajnetUrl.changeLocale(a[this.LOCALE_URL_PARAM_NAME]);
      if (a[this.MAP_URL_PARAM_NAME] != this.urlParams[this.MAP_URL_PARAM_NAME]) {
        this.urlParams[this.MAP_URL_PARAM_NAME] = a[this.MAP_URL_PARAM_NAME];
        try {
          window["set" + this.urlParams[this.MAP_URL_PARAM_NAME] + "BaseLayer"]()
        } catch (e) {
        }
        this.changeUrlParam(this.MAP_URL_PARAM_NAME, this.urlParams[this.MAP_URL_PARAM_NAME])
      }
      if (a[this.ZOOM_URL_PARAM_NAME] !=
        this.urlParams[this.ZOOM_URL_PARAM_NAME]) {
        this.urlParams[this.ZOOM_URL_PARAM_NAME] = a[this.ZOOM_URL_PARAM_NAME];
        var c = parseInt(this.urlParams[this.ZOOM_URL_PARAM_NAME]);
        ImajnetPlugin.zoomMapTo(c)
      }
      a[this.SURVEY_TRACE_URL_PARAM_NAME] != this.urlParams[this.SURVEY_TRACE_URL_PARAM_NAME] && (this.urlParams[this.SURVEY_TRACE_URL_PARAM_NAME] = a[this.SURVEY_TRACE_URL_PARAM_NAME], a[this.SURVEY_TRACE_URL_PARAM_NAME] == this.SURVEY_TRACE_ACTIVE_PARAM_VALUE ? SurveyTrace.surveyTraceIsActive = !0 : b && (SurveyTrace.surveyTraceIsActive =
          !1, ImageControler.currentSurveyTrace.hideTrace()));
      if (a[this.IMAGE_URL_PARAM_NAME]) {
        this.urlParams[this.IMAGE_URL_PARAM_NAME] = a[this.IMAGE_URL_PARAM_NAME];
        var d = {id: this.urlParams[this.IMAGE_URL_PARAM_NAME]};
        ImajnetZoom.left = -1;
        Nigsys.showLoading(ImajnetUI.imageContainer);
        ImajnetAPI.setImajnetImage({position: d});
        ImajnetUrl.changeUrlParam(this.IMAGE_URL_PARAM_NAME, "")
      } else a[this.LOCATION_URL_PARAM_NAME] && a[this.LOCATION_URL_PARAM_NAME] != this.urlParams[this.LOCATION_URL_PARAM_NAME] && (this.urlParams[this.LOCATION_URL_PARAM_NAME] =
        a[this.LOCATION_URL_PARAM_NAME], this.applyImajnetLocation(this.urlParams[this.LOCATION_URL_PARAM_NAME]))
    } catch (e) {
      console.error(e)
    }
  },
  changeUrlParam: function (b, a) {
    this.urlParams[b] = a;
    var c = this.readUrl(!1);
    c[b] = a;
    this.writeUrl(c)
  },
  getUrlHash: function () {
    return window.location.hash
  },
  setUrlHash: function (b) {
    window.location.hash = b
  },
  deleteUrlParams: function () {
    this.setUrlHash("")
  },
  writeUrl: function (b) {
    var a = "";
    b[this.WORKSPACE_URL_PARAM_NAME] && (a += this.WORKSPACE_URL_PARAM_NAME + this.paramsAssign + b[this.WORKSPACE_URL_PARAM_NAME] +
      this.paramsSeparator);
    b[this.GROUP_URL_PARAM_NAME] && (a += this.GROUP_URL_PARAM_NAME + this.paramsAssign + b[this.GROUP_URL_PARAM_NAME] + this.paramsSeparator);
    b[this.POSITION_URL_PARAM_NAME] && (a += this.POSITION_URL_PARAM_NAME + this.paramsAssign + b[this.POSITION_URL_PARAM_NAME] + this.paramsSeparator);
    b[this.LOCATION_URL_PARAM_NAME] && (a += this.LOCATION_URL_PARAM_NAME + this.paramsAssign + b[this.LOCATION_URL_PARAM_NAME] + this.paramsSeparator);
    b[this.TIME_URL_PARAM_NAME] && (a += this.TIME_URL_PARAM_NAME + this.paramsAssign +
      b[this.TIME_URL_PARAM_NAME] + this.paramsSeparator);
    b[this.MAP_URL_PARAM_NAME] && (a += this.MAP_URL_PARAM_NAME + this.paramsAssign + b[this.MAP_URL_PARAM_NAME] + this.paramsSeparator);
    if (b[this.ZOOM_URL_PARAM_NAME] || 0 == b[this.ZOOM_URL_PARAM_NAME]) a += this.ZOOM_URL_PARAM_NAME + this.paramsAssign + b[this.ZOOM_URL_PARAM_NAME] + this.paramsSeparator;
    b[this.SURVEY_TRACE_URL_PARAM_NAME] && (a += this.SURVEY_TRACE_URL_PARAM_NAME + this.paramsAssign + b[this.SURVEY_TRACE_URL_PARAM_NAME] + this.paramsSeparator);
    var c = this.getUrlHash();
    b = "";
    if (c && "#" != c)for (var c = c.replace("#", "").split(this.paramsSeparator), d = 0; d < c.length; d++)c[d] && -1 === c[d].indexOf(this.IMAGE_URL_PARAM_NAME + this.paramsAssign) && -1 === c[d].indexOf(this.WORKSPACE_URL_PARAM_NAME + this.paramsAssign) && -1 === c[d].indexOf(this.GROUP_URL_PARAM_NAME + this.paramsAssign) && -1 === c[d].indexOf(this.POSITION_URL_PARAM_NAME + this.paramsAssign) && -1 === c[d].indexOf(this.LOCATION_URL_PARAM_NAME + this.paramsAssign) && -1 === c[d].indexOf(this.TIME_URL_PARAM_NAME + this.paramsAssign) && -1 === c[d].indexOf(this.MAP_URL_PARAM_NAME +
      this.paramsAssign) && -1 === c[d].indexOf(this.ZOOM_URL_PARAM_NAME + this.paramsAssign) && -1 === c[d].indexOf(this.SURVEY_TRACE_URL_PARAM_NAME + this.paramsAssign) && (b += c[d] + this.paramsSeparator);
    this.setUrlHash("#" + a + b)
  }
};
var ImajnetResponse = {
  NO_INTERNET_CONNECTION: 0,
  ACCEPTED: 202,
  BAD_GATEWAY: 502,
  BAD_REQUEST: 400,
  CONFLICT: 409,
  CONTINUE: 100,
  CREATED: 201,
  EXPECTATION_FAILED: 417,
  FORBIDDEN: 403,
  GATEWAY_TIMEOUT: 405,
  GONE: 410,
  HTTP_VERSION_NOT_SUPPORTED: 505,
  INTERNAL_SERVER_ERROR: 500,
  LENGTH_REQUIRED: 411,
  METHOD_NOT_ALLOWED: 405,
  MOVED_PERMANENTLY: 301,
  MOVED_TEMPORARILY: 302,
  MULTIPLE_CHOICES: 300,
  NO_CONTENT: 204,
  NON_AUTHORITATIVE_INFORMATION: 203,
  NOT_ACCEPTABLE: 406,
  NOT_FOUND: 404,
  NOT_IMPLEMENTED: 501,
  NOT_MODIFIED: 304,
  OK: 200,
  PARTIAL_CONTENT: 206,
  PAYMENT_REQUIRED: 402,
  PRECONDITION_FAILED: 412,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  REQUEST_ENTITY_TOO_LARGE: 413,
  REQUESTED_RANGE_NOT_SATISFIABLE: 416,
  RESET_CONTENT: 205,
  SEE_OTHER: 303,
  SERVICE_UNAVAILABLE: 503,
  SC_SWITCHING_PROTOCOLS: 101,
  TEMPORARY_REDIRECT: 307,
  UNAUTHORIZED: 401,
  UNSUPPORTED_MEDIA_TYPE: 415,
  USE_PROXY: 305,
  header: {
    AUTHENTICATED: "AUTHENTICATED",
    UNAUTHETICATED: "UNAUTHETICATED",
    UNAUTHORISED: "UNAUTHORISED",
    ACCOUNT_LOCKED: "ACCOUNT_LOCKED",
    ACCOUNT_DISABLED: "ACCOUNT_DISABLED",
    ACCOUNT_EXPIRED: "ACCOUNT_EXPIRED",
    CREDENTIALS_EXPIRED: "CREDENTIALS_EXPIRED"
  }
};
window.console || (window.console = {
  log: function () {
  }, warn: function () {
  }, debug: function () {
  }, error: function () {
  }
});
var Nigsys = {
  dateZ: "Z",
  dateT: "T",
  confirmDialog: null,
  logoOverlayDiv: '\x3cdiv id\x3d"logoOverlay"\x3e\x3c/div\x3e',
  logoOverlay: null,
  modalOverlayDiv: '\x3cdiv id\x3d"modalOverlay" class\x3d"modalOverlay opacity80"\x3e\x3c/div\x3e',
  modalOverlay: null,
  sessionExpired: !1,
  notification: null,
  errorNotification: null,
  sessionExpiredNotification: null,
  requestsTimeout: 3E3,
  scrollbarSize: 0,
  SVGNamespace: "http://www.w3.org/2000/svg",
  timeFormat: "HH:mm",
  defaultObjectsColor: "#00FF00",
  defaultPolygonObjectsColor: "#FF0000",
  hoverObjectsColor: "#EE9900",
  differentTracePinPointColor: "#00AA00",
  differentTracePinPointHoverColor: "#EE9911",
  base64Header: "data:image/png;base64,",
  sessionTimeout: 1795,
  zoomMap: {
    1: 50,
    2: 70,
    3: 100,
    4: 120,
    5: 150,
    6: 170,
    7: 200,
    8: 250,
    9: 300,
    10: 350,
    11: 430,
    12: 520,
    13: 620,
    14: 750,
    15: 900,
    16: 1070,
    17: 1290,
    18: 1550,
    19: 1850,
    20: 2200,
    21: 2670,
    22: 3200,
    23: 3800,
    24: 4600,
    25: 5500,
    26: 6600
  },
  isValidImajnetAddress: function (a) {
    "/" != a.substr(-1) && (a += "/");
    return /(https|http):\/\/+(.*).imajnet.net\/+?(.*)/.test(a) || /(https|http):\/\/+(.*).imajbox.com\/+?(.*)/.test(a)
  },
  getHighestUnit: function (a, c) {
    if ("m" == c) {
      if (1E3 < a)return (a / 1E3).toFixed(3) + " km"
    } else if ("feet" == c && a > LRS.feetInAMile)return (a / LRS.feetInAMile).toFixed(3) + " mile";
    return a.toFixed(3) + " " + Nigsys.getUnitText(c)
  },
  getMeasurementUnitFromImajnet: function () {
    return ImajnetSettings.imajnetSettings && ImajnetSettings.imajnetSettings.unit ? ImajnetSettings.imajnetSettings.unit : ImajnetUser.data.unit
  },
  getMeasurementUnit: function () {
    return Imajnet.unit ? Imajnet.unit : "undefined" !== typeof isImajnetMode && isImajnetMode() ?
      Nigsys.getMeasurementUnitFromImajnet() : "undefined" !== typeof CommonCore && CommonCore.userInfo && CommonCore.userInfo.customer && CommonCore.userInfo.customer.unit ? CommonCore.userInfo.customer.unit : Nigsys.getMeasurementUnitFromImajnet()
  },
  getHighestSquareUnit: function (a, c) {
    if ("m" == c) {
      if (1E6 < a)return (a / 1E6).toFixed(3) + " km\x3csup\x3e2\x3c/sup\x3e"
    } else if ("feet" == c) {
      var d = Math.pow(LRS.feetInAMile, 2);
      if (a > d)return (a / d).toFixed(3) + " mile\x3csup\x3e2\x3c/sup\x3e"
    }
    return a.toFixed(3) + " " + Nigsys.getUnitText(c) +
      "\x3csup\x3e2\x3c/sup\x3e"
  },
  lonLatToXY: function (a) {
    return {x: a.lon, y: a.lat}
  },
  waitForAllDeferred: function (a, c) {
    jQuery.when.apply(jQuery, jQuery.map(a, function (a) {
      var c = jQuery.Deferred();
      a.always(function () {
        c.resolve()
      });
      return c.promise()
    })).done(function () {
      c()
    })
  },
  getDegreeFromMeters: function (a) {
    return parseFloat(a) / 111111
  },
  getElementWidth: function (a) {
    return a.style.width ? parseInt(a.style.width.replace("px", "")) : 0
  },
  graphicIsFont: function (a) {
    return a && -1 !== a.indexOf("ttf://")
  },
  endsWith: function (a, c) {
    return -1 !==
      a.indexOf(c, a.length - c.length)
  },
  getDelta: function (a, c) {
    Nigsys.browserIsMozilla() ? c = -40 * (0 != a.originalEvent.detail ? a.originalEvent.detail : a.originalEvent.deltaY) : c || (c = a.originalEvent.wheelDelta);
    if (0 > c)return -window.devicePixelRatio;
    if (0 <= c)return window.devicePixelRatio
  },
  scrollDeltaIsValid: function (a) {
    return -1 == a || 1 == a || a == -window.devicePixelRatio || a == window.devicePixelRatio
  },
  degreeToRadians: function (a) {
    return a * Math.PI / 180
  },
  getProtocolString: function () {
    return "undefined" !== typeof Imajnet ? OpenLayersForProjection.String.startsWith(Imajnet.serverUrl,
      "https:") ? "https:" : "http:" : !CommonCore.isMobile || MainCore.isWeb ? window.location.protocol : "http:"
  },
  isNumber: function (a) {
    return a - 0 == a && 0 < ("" + a).trim().length
  },
  getCheckboxHTML: function (a, c, d, e, f, h) {
    c || (c = "");
    d || (d = "");
    e || (e = "");
    return "undefined" !== typeof CommonCore && CommonCore.isMobile ? '\x3cdiv class\x3d"left"\x3e\x3cinput type\x3d"checkbox" name\x3d"' + a + '" id\x3d"' + a + '" class\x3d"' + c + '" ' + e + (f ? ' checked\x3d"checked"' : "") + (h ? ' disabled\x3d"disabled"' : "") + ' /\x3e\x3c/div\x3e\x3cdiv class\x3d"left" style\x3d"height: 20px; line-height: 20px;"\x3e\x3clabel for\x3d"' +
      a + '"' + (d ? "" : 'class\x3d"noTextCheckbox"') + "\x3e" + d + '\x3c/label\x3e\x3c/div\x3e\x3cdiv class\x3d"clearLeft"\x3e\x3c/div\x3e' : '\x3cinput type\x3d"checkbox" id\x3d"' + a + '" class\x3d"' + c + '" ' + e + (f ? ' checked\x3d"checked"' : "") + (h ? ' disabled\x3d"disabled"' : "") + " /\x3e"
  },
  bindClickEvent: function (a, c, d) {
    var e = "click";
    if ("undefined" !== typeof CommonCore && CommonCore.isMobile || Nigsys.onMobile()) e = "tap";
    a.on(e, d, function (a) {
      Nigsys.disableEventPropagation(a);
      c(a)
    });
    if (Nigsys.isTouchDevice() && "tap" !== e) a.on("tap", d,
      function (a) {
        Nigsys.disableEventPropagation(a);
        c(a)
      })
  },
  unbindClickEvent: function (a) {
    var c = "click";
    if ("undefined" !== typeof CommonCore && CommonCore.isMobile || Nigsys.onMobile()) c = "tap";
    a.off(c)
  },
  bindEnterEvent: function (a) {
    jQuery(document).bind("keydown", function (c) {
      13 == c.keyCode && a(c)
    })
  },
  getStatusErrorText: function (a) {
    return a == ImajnetResponse.UNAUTHORIZED ? jQuery.imajnet.login.error.header.unauthorized : a == ImajnetResponse.FORBIDDEN ? jQuery.imajnet.login.error.header.unauthenticated : a == ImajnetResponse.MOVED_TEMPORARILY ?
      jQuery.imajnet.login.error.movedTemporarily : a == ImajnetResponse.SERVICE_UNAVAILABLE ? "undefined" === typeof isImajnetMode || isImajnetMode() ? jQuery.imajnet.login.error.serviceUnavailable : jQuery.app.login.serviceUnavailable : a == ImajnetResponse.NO_INTERNET_CONNECTION ? "undefined" !== typeof CommonCore && CommonCore.isMobile ? jQuery.imajnet.login.error.noInternetConnection : jQuery.imajnet.login.error.unableToConnect : jQuery.imajnet.login.error.unknown
  },
  initLogoOverlay: function () {
    "undefined" === typeof isImajnetMode ||
    isImajnetMode() || (jQuery("body").append(Nigsys.logoOverlayDiv), Nigsys.logoOverlay = jQuery("#logoOverlay"))
  },
  getCookieWarningNotificationInfoOkHTML: function () {
    return '\x3cdiv id\x3d"cookieWarningNotification"\x3e' + jQuery.app.cookieWarning + '\x3cinput type\x3d"button" id\x3d"cookieWarningNotificationOk" value\x3d"' + jQuery.imajnet.button.ok + '" /\x3e\x3c/div\x3e'
  },
  getNotificationInfoOkHTML: function (a) {
    return '\x3cdiv id\x3d"' + a + '"\x3e\x3cinput type\x3d"hidden" value\x3d"notificationInfoOk" /\x3e\x3ca class\x3d"ui-notify-cross ui-notify-close" href\x3d"javascript: void(0);"\x3ex\x3c/a\x3e\x3ch1\x3e#{title}\x3c/h1\x3e\x3cdiv\x3e\x3cimg src\x3d"' +
      Imajnet.imajnetPath + 'img/warningNotify.png" class\x3d"notificationImage" align\x3d"top"/\x3e\x26nbsp;#{text}\x3c/div\x3e\x3cdiv style\x3d"text-align: center;"\x3e\x3cinput type\x3d"button" value\x3d"' + jQuery.imajnet.button.ok + '" /\x3e\x3c/div\x3e\x3c/div\x3e'
  },
  getNotificationHTML: function () {
    return '\x3cdiv id\x3d"notification" class\x3d"notification"\x3e\x3cdiv id\x3d"notificationInfo"\x3e\x3cinput type\x3d"hidden" value\x3d"notificationInfo" /\x3e\x3ca class\x3d"ui-notify-cross ui-notify-close" href\x3d"javascript: void(0);"\x3ex\x3c/a\x3e\x3ch1\x3e#{title}\x3c/h1\x3e\x3cdiv\x3e\x3cimg src\x3d"' +
      Imajnet.imajnetPath + 'img/warningNotify.png" class\x3d"notificationImage" align\x3d"top"/\x3e\x26nbsp;#{text}\x3c/div\x3e\x3c/div\x3e' + Nigsys.getNotificationInfoOkHTML("notificationInfoOk") + '\x3cdiv id\x3d"notificationSessionExpired"\x3e\x3cinput type\x3d"hidden" value\x3d"notificationSessionExpired" /\x3e\x3cdiv\x3e\x3cimg src\x3d"' + Imajnet.imajnetPath + 'img/warningNotify.png" class\x3d"notificationImage" align\x3d"top"/\x3e\x26nbsp;#{text}\x3c/div\x3e\x3cdiv style\x3d"text-align: center;"\x3e\x3cinput id\x3d"confirmYes_#{type}" type\x3d"button" value\x3d"' +
      jQuery.imajnet.button.ok + '" onclick\x3d"Nigsys.closeConfirmDialog();" /\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv id\x3d"notificationError"\x3e\x3cinput type\x3d"hidden" value\x3d"notificationError" /\x3e\x3ca class\x3d"ui-notify-cross ui-notify-close" href\x3d"javascript: void(0);"\x3ex\x3c/a\x3e\x3ch1\x3e#{title}\x3c/h1\x3e\x3cdiv\x3e\x3cimg src\x3d"' + Imajnet.imajnetPath + 'img/warningNotify.png" class\x3d"notificationImage" align\x3d"top"/\x3e\x26nbsp;#{text}\x3c/div\x3e\x3cdiv style\x3d"text-align: center;"\x3e\x3cinput type\x3d"button" value\x3d"' +
      jQuery.imajnet.button.ok + '" /\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv id\x3d"persistentNotificationError"\x3e\x3cinput type\x3d"hidden" value\x3d"notificationError" /\x3e\x3ch1\x3e#{title}\x3c/h1\x3e\x3cdiv\x3e\x3cimg src\x3d"' + Imajnet.imajnetPath + 'img/warningNotify.png" class\x3d"notificationImage" align\x3d"top"/\x3e\x26nbsp;#{text}\x3c/div\x3e\x3cdiv style\x3d"text-align: center;"\x3e\x3cinput type\x3d"button" value\x3d"' + jQuery.imajnet.button.ok + '" /\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv id\x3d"notificationImageSwitcherBigMode"\x3e#{text}\x3c/div\x3e\x3cdiv id\x3d"notificationOkConfirm"\x3e\x3cinput type\x3d"hidden" value\x3d"notificationOkConfirm" /\x3e\x3ch1\x3e#{title}\x3c/h1\x3e\x3cdiv\x3e\x3cimg src\x3d"' +
      Imajnet.imajnetPath + 'img/warningNotify.png" class\x3d"notificationImage" align\x3d"top"/\x3e\x26nbsp;#{text}\x3c/div\x3e\x3cdiv style\x3d"text-align: center;"\x3e\x3cinput id\x3d"confirmOk_#{type}" type\x3d"button" value\x3d"' + jQuery.imajnet.button.ok + '" onclick\x3d"Nigsys.closeConfirmDialog();" /\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv id\x3d"notificationConfirm"\x3e\x3cinput type\x3d"hidden" value\x3d"notificationConfirm" /\x3e\x3ch1\x3e#{title}\x3c/h1\x3e\x3cdiv\x3e\x3cimg src\x3d"' + Imajnet.imajnetPath +
      'img/warningNotify.png" class\x3d"notificationImage" align\x3d"top"/\x3e\x26nbsp;#{text}\x3c/div\x3e\x3cdiv style\x3d"text-align: center;"\x3e\x3cinput id\x3d"confirmYes_#{type}" type\x3d"button" value\x3d"' + jQuery.imajnet.button.yes + '" onclick\x3d"Nigsys.closeConfirmDialog();" /\x3e\x3cinput id\x3d"confirmNo_#{type}" type\x3d"button" value\x3d"' + jQuery.imajnet.button.no + '" onclick\x3d"Nigsys.closeConfirmDialog();" /\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e'
  },
  initNotification: function () {
    Nigsys.notification ||
    ("undefined" !== typeof CommonCore && CommonCore.isMobile || jQuery("body").append(this.getNotificationHTML()), Nigsys.notification = jQuery("#notification").notify({
      click: function (a, c) {
        c.close()
      }
    }))
  },
  showNotificationError: function (a, c, d, e, f, h) {
    Nigsys.notification.html("");
    return Nigsys.notification.notify("create", "notificationError", {title: a, text: c}, {
      beforeopen: function (a, c) {
        Nigsys.positionNotification(d);
        "function" === typeof e && e(a, c)
      }, open: function (a, c) {
        "function" === typeof f && f(a, c)
      }, click: function (a, c) {
        "function" ===
        typeof h && h(a, c)
      }
    })
  },
  showLoginError: function (a) {
    a && ("undefined" === typeof isImajnetMode || isImajnetMode() ? jQuery(Nigsys.loginNotification.element).show() : Login.hideLoginLoading(), Nigsys.errorNotification = Nigsys.showNotificationError("", a, "centerLoginError", function (a, d) {
      var e = jQuery(".olControlImajnetPluginItemInactive").offset();
      e && jQuery("#notification").offset(e)
    }, null, function (a, d) {
      d.close()
    }))
  },
  appendColorPicker: function (a, c) {
    jQuery("#" + a).css("background-color", c).ColorPicker({
      color: c, onChange: function (c,
                                    e, f) {
        jQuery("#" + a).css("background-color", "#" + e);
        jQuery("#" + a).val("#" + e)
      }
    }).ColorPickerSetColor(c)
  },
  showLoading: function (a) {
    a && a.length && a.mask("\x26nbsp;")
  },
  hideLoading: function (a) {
    a && a.length && a.unmask()
  },
  initModalOverlay: function (a) {
    Nigsys.modalOverlay && Nigsys.modalOverlay.remove();
    jQuery(a).append(Nigsys.modalOverlayDiv);
    Nigsys.modalOverlay = jQuery("#modalOverlay")
  },
  initLoginContainers: function () {
    "undefined" !== typeof CommonCore && CommonCore.isMobile ? Nigsys.initModalOverlay("#content") : Nigsys.initModalOverlay("body");
    Nigsys.initLogoOverlay();
    Nigsys.notificationLoginContainer = jQuery("#notificationLoginContainer").notify({
      click: function (a, c) {
        c.close()
      }
    })
  },
  getLoginContent: function () {
    return '\x3cdiv\x3e\x3cdiv class\x3d"imajnetLoginItem"\x3e\x3cdiv class\x3d"left imajnetLoginLeft"\x3e\x3clabel for\x3d"username"\x3e' + jQuery.imajnet.login.username + ':\x3c/label\x3e\x3c/div\x3e\x3cdiv class\x3d"left"\x3e\x3cinput type\x3d"text" name\x3d"username" id\x3d"username" class\x3d"loginInput" autocapitalize\x3d"none" /\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"clearLeft"\x3e\x3c/div\x3e\x3cdiv class\x3d"imajnetLoginItem"\x3e\x3cdiv class\x3d"left imajnetLoginLeft"\x3e\x3clabel for\x3d"password"\x3e' +
      jQuery.imajnet.login.password + ':\x3c/label\x3e\x3c/div\x3e\x3cdiv class\x3d"left"\x3e\x3cinput type\x3d"password" name\x3d"password" id\x3d"password" class\x3d"loginInput" autocapitalize\x3d"none" /\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"clearLeft"\x3e\x3c/div\x3e\x3cdiv style\x3d"margin-top: 10px;' + ("undefined" !== typeof CommonCore && CommonCore.isMobile ? " display: none;" : "") + '"\x3e\x3cdiv class\x3d"left" style\x3d"height: 30px; line-height: 30px;"\x3e\x3cinput type\x3d"checkbox" name\x3d"remember-me" id\x3d"rememberMe" class\x3d"loginInput" style\x3d"margin-top: 0; padding: 0;"' +
      ("undefined" !== typeof CommonCore && CommonCore.isMobile ? 'checked\x3d"checked"' : "") + ' /\x3e\x3c/div\x3e\x3cdiv id\x3d"rememberMeLabel" class\x3d"left"\x3e' + jQuery.imajnet.login.rememberMe + '\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"clearLeft"\x3e\x3c/div\x3e\x3c/div\x3e'
  },
  getLoginWithHTML: function () {
    return '\x3cdiv id\x3d"notificationLoginInnerContainer"\x3e\x3cdiv class\x3d"imajnetLoginTitle"\x3e\x3ch1\x3e' + jQuery.imajnet.login.title + "\x3c/h1\x3e\x3c/div\x3e\x3cdiv\x3e" + Nigsys.getLoginContent() + '\x3cdiv style\x3d"margin-top: 10px;"\x3e\x3cinput type\x3d"button" id\x3d"imajnetLoginButton" value\x3d"' +
      jQuery.imajnet.login.button + '" /\x3e\x26nbsp;\x3cinput type\x3d"button" id\x3d"imajnetLoginRequestAccess" onclick\x3d"ImajnetProtocol.requestAccess();" value\x3d"' + jQuery.imajnet.login.requestAccess.title + '" /\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e'
  },
  showImajnetLoading: function () {
    var a = Nigsys.getWindowSize();
    jQuery("body").append('\x3cdiv id\x3d"imajnetLoadingImageContainer"\x3e\x3cdiv class\x3d"imajnetLoadingImage" style\x3d"padding-top: ' + (a.height / 2 - 27) + 'px;"\x3e\x3cimg src\x3d"' + ImajnetUI.getImagesPath() +
      'img/loading.gif" id\x3d"imajnetLoadingImage" class\x3d"imajnetLoadingImage" width\x3d"54" height\x3d"55" /\x3e\x3c/div\x3e\x3c/div\x3e')
  },
  hideImajnetLoading: function () {
    jQuery("#imajnetLoadingImageContainer").remove()
  },
  transform: function (a, c, d, e) {
    a = CommonCore.projHash[a];
    c = CommonCore.projHash[c];
    d = new Proj4js.Point(d + "," + e);
    return Proj4js.transform(a, c, d)
  },
  transformBetweenProjections: function (a, c, d, e, f, h) {
    d = Nigsys.transform(a, c, d, e);
    a = Nigsys.transform(a, c, f, h);
    return {
      left: d.x, bottom: d.y, right: a.x,
      top: a.y
    }
  },
  boundsToPolygon: function (a) {
    return new OpenLayers.Geometry.Polygon([new OpenLayers.Geometry.LinearRing([new OpenLayers.Geometry.Point(a.left, a.top), new OpenLayers.Geometry.Point(a.right, a.top), new OpenLayers.Geometry.Point(a.right, a.bottom), new OpenLayers.Geometry.Point(a.left, a.bottom), new OpenLayers.Geometry.Point(a.left, a.top)])])
  },
  positionLoginNotification: function () {
    var a = 430;
    "undefined" !== typeof CommonCore && CommonCore.isMobile && 1600 <= Nigsys.getWindowSize().width && (a = 1100);
    jQuery("#notificationLoginContainer").width(a);
    Nigsys.positionLoginNotificationCenter(a)
  },
  showLoginNotification: function (a) {
    Nigsys.loginNotification && jQuery(Nigsys.loginNotification.element).is(":visible") || (Nigsys.initLoginContainers(), "undefined" !== typeof isImajnetMode && !isImajnetMode() && Nigsys.logoOverlay && Nigsys.logoOverlay.show(), "undefined" !== typeof CommonCore && CommonCore.isMobile && Nigsys.initModalOverlay("#content"), Nigsys.modalOverlay.show(), Nigsys.loginNotification ? jQuery(Nigsys.loginNotification.element).show() : Nigsys.loginNotification =
      Nigsys.notificationLoginContainer.notify("create", "notificationLogin", {text: a}, {
        expires: !1, beforeopen: function (a, d) {
          Nigsys.positionLoginNotification()
        }, open: function (a, d) {
          try {
            jQuery("#rememberMe").checkboxradio().checkboxradio("refresh")
          } catch (f) {
          }
          var e = jQuery("#imajnetLoginButton");
          "undefined" === typeof isImajnetMode || isImajnetMode() ? Nigsys.bindClickEvent(e, ImajnetProtocol.doLogin) : ("undefined" === typeof isImajnetMode || isImajnetMode() || (Nigsys.bindClickEvent(e, Login.doLogin), Nigsys.bindEnterEvent(Login.doLogin)),
          "undefined" !== typeof CommonCore && CommonCore.isMobile && e.button().button("refresh"))
        }, click: function (a, d) {
          return !1
        }
      }))
  },
  getPinchCenter: function (a, c) {
    var d = {x: 0, y: 0};
    d.x = a.x < c.x ? a.x + (c.x - a.x) / 2 : c.x + (a.x - c.x) / 2;
    d.y = a.y < c.y ? a.y + (c.y - a.y) / 2 : c.y + (a.y - c.y) / 2;
    return d
  },
  isTouchDevice: function () {
    return "ontouchstart" in window
  },
  disableEventPropagation: function (a) {
    a && (a.stopPropagation ? a.stopPropagation() : window.event && (window.event.cancelBubble = !0))
  },
  disableEventPropagationFull: function (a) {
    a && (a.stopPropagation ?
      (a.stopPropagation(), a.stopImmediatePropagation(), a.preventDefault()) : window.event && (window.event.cancelBubble = !0))
  },
  getRad: function (a) {
    return a * Math.PI / 180
  },
  distanceBetweenPoints: function (a, c) {
    if (a.lat == c.lat && a.lon == c.lon)return 0;
    for (var d = Object({
        a: 6378137,
        b: 6356752.3142,
        f: .0033528106647474805
      }), e = d.a, f = d.b, d = d.f, h = this.getRad(c.lon - a.lon), k = Math.atan((1 - d) * Math.tan(this.getRad(a.lat))), l = Math.atan((1 - d) * Math.tan(this.getRad(c.lat))), m = Math.sin(k), k = Math.cos(k), n = Math.sin(l), l = Math.cos(l), p = h,
           y = 2 * Math.PI, z = 20; 1E-12 < Math.abs(p - y) && 0 < --z;) {
      var q = Math.sin(p), t = Math.cos(p), u = Math.sqrt(l * q * l * q + (k * n - m * l * t) * (k * n - m * l * t));
      if (0 == u)return 0;
      var t = m * n + k * l * t, A = Math.atan2(u, t), w = Math.asin(k * l * q / u), v = Math.cos(w) * Math.cos(w),
        q = t - 2 * m * n / v, x = d / 16 * v * (4 + d * (4 - 3 * v)), y = p,
        p = h + (1 - x) * d * Math.sin(w) * (A + x * u * (q + x * t * (-1 + 2 * q * q)))
    }
    if (0 == z)return NaN;
    e = v * (e * e - f * f) / (f * f);
    d = e / 1024 * (256 + e * (-128 + e * (74 - 47 * e)));
    return 1E3 * ((f * (1 + e / 16384 * (4096 + e * (-768 + e * (320 - 175 * e)))) * (A - d * u * (q + d / 4 * (t * (-1 + 2 * q * q) - d / 6 * q * (-3 + 4 * u * u) * (-3 + 4 * q * q))))).toFixed(3) /
      1E3)
  },
  distanceBetweenPointsOL: function (a, c) {
    return a.lat == c.lat && a.lon == c.lon ? 0 : Nigsys.distanceTo({x: a.lon, y: a.lat}, {x: c.lon, y: c.lat})
  },
  getUnitText: function (a) {
    return " " + jQuery.imajnet.units[a]
  },
  getClosestPoint: function (a, c, d) {
    var e = Nigsys.distanceBetweenPoints(c, a);
    a = Nigsys.distanceBetweenPoints(d, a);
    return e < a ? c : d
  },
  isWindows: function () {
    return -1 != navigator.appVersion.indexOf("Win")
  },
  isIOS: function () {
    return /iPad|iPhone|iPod/.test(navigator.platform)
  },
  browserIsChrome: function () {
    return -1 < navigator.userAgent.toLowerCase().indexOf("chrome")
  },
  browserIsIE: function () {
    return -1 !== navigator.appVersion.indexOf("MSIE")
  },
  browserIsIE7: function () {
    return -1 !== navigator.appVersion.indexOf("MSIE 7.")
  },
  browserIsIE8: function () {
    return -1 !== navigator.appVersion.indexOf("MSIE 8.")
  },
  browserIsIE9: function () {
    return -1 !== navigator.appVersion.indexOf("MSIE 9.")
  },
  browserIsWebkit: function () {
    return "WebkitAppearance" in document.documentElement.style
  },
  browserIsMozilla: function () {
    return null != window.mozInnerScreenX
  },
  browserIsOpera: function () {
    return /Opera/.test(navigator.userAgent)
  },
  isPositionMode: function () {
    return "undefined" !== typeof ImajnetUI && "imajnetPosition" == ImajnetUI.activeControlButton
  },
  isMeasurementMode: function () {
    return "undefined" !== typeof ImajnetUI && "imajnetMeasurement" == ImajnetUI.activeControlButton
  },
  isPolyligneMode: function () {
    return "undefined" !== typeof ImajnetUI && "imajnetPolyligne" == ImajnetUI.activeControlButton
  },
  cloneObject: function (a) {
    var c = {};
    0 <= a.length && (c = []);
    return jQuery.extend(!0, c, a)
  },
  getEventRelativeCoordinates: function (a) {
    return a.xy ? {x: a.xy.x, y: a.xy.y} :
      a.layerX && a.layerY ? {x: a.layerX, y: a.layerY} : a.x && a.y ? {x: a.x, y: a.y} : {x: 0, y: 0}
  },
  getSVGChildElementSize: function (a) {
    var c = a[0].getAttribute("width");
    a = a[0].getAttribute("height");
    return c && a ? {width: parseInt(c), height: parseInt(a)} : {
      width: LRSSchematic.featurePointSize,
      height: LRSSchematic.featurePointSize
    }
  },
  positionExistingElement: function (a, c, d, e) {
    var f = !1, h = a.clientY ? a.clientY : a.target ? a.target.offsetTop : 0, k = 0,
      k = ("undefined" === typeof isImajnetMode || isImajnetMode() || "undefined" !== typeof MapMethodsCore &&
      MapMethodsCore.layoutData) && ("map" == d || d.selector && -1 !== d.selector.indexOf("LRSSchematicItemLayerData")) ? a.offsetX : a.clientX ? a.clientX : a.target ? a.target.offsetLeft : 0;
    if ("map" != d) {
      var l = null;
      "string" === typeof d ? l = "popupImajnetControlsLayer" == d ? jQuery("#imajnetImageLayer") : jQuery("#" + d) : (0 === d.prop("id").indexOf("LRSSchematic") && (f = !0, "portrait" == LRSSchematic.orientation ? (h = a.offsetY + LRSSchematic.titleHeight, k = a.offsetX) : h = a.offsetY), l = d);
      f || (h -= l.offset().top, k -= l.offset().left)
    }
    a = h - 10;
    var m = l = 10;
    c && (a = c.position(), l = c.width(), m = c.height(), l && m || (m = Nigsys.getSVGChildElementSize(c), l = m.width, m = m.height), a = a.top);
    var h = h + m, k = k + l, n = c = 0, p = null;
    if ("string" === typeof d) p = jQuery("#" + d); else {
      if (f) {
        isLRSItem = !0;
        n = jQuery(".LRSSchematicItemLayerData");
        for (c = p = 0; c < n.length && d.prop("id") != n[c].id; c++)p++;
        "landscape" == LRSSchematic.orientation ? (c = d.parent().parent().parent().width(), n = ImajnetLRSGUIWidth * n.length, h += p * ImajnetLRSGUIWidth) : (c = ImajnetLRSGUIWidth * n.length, n = d.parent().parent().parent().height(),
          k += p * ImajnetLRSGUIWidth)
      }
      p = d
    }
    d = (c ? c : p.width()) - 10;
    c = (n ? n : p.height()) - 10;
    n = e.width();
    p = e.height();
    f ? (h + p > c ? h = "landscape" == LRSSchematic.orientation ? LRSSchematic.container.scrollTop() : h - (p + m + 30) : h + p > LRSSchematic.container.scrollTop() + LRSSchematic.container.height() && (h = LRSSchematic.container.scrollTop()), k + n > d || k ? k = "portrait" == LRSSchematic.orientation ? LRSSchematic.container.scrollLeft() : k - n - l - 30 : n > LRSSchematic.container.scrollLeft() + LRSSchematic.container.width() && (k = LRSSchematic.container.scrollLeft()),
      e.css({
        top: 0 < h ? h : 0,
        left: 0 < k ? k : 0
      })) : (c < h + p && (h -= p + m + 30), d < k + n && (k = k - n - l - 30), h > a && h < a + m && (h = a - p - 20, 0 > h && (h = a + m + 10)), 0 > h && (h = 0), e.css("max-height", c), e.css("top", 0 < h ? h : 0), e.css("max-width", d), e.css("left", 0 < k ? k : 0), Nigsys.browserIsIE8() || Nigsys.browserIsIE7() || e.corner())
  },
  addElement: function (a, c, d, e) {
    Nigsys.positionExistingElement(a, c, d, jQuery(e).appendTo("#" + d))
  },
  formatServerDate: function (a) {
    a = a.split("-");
    return a[0] + " " + Nigsys.getMonthFromNumber(a[1]) + " " + a[2]
  },
  stringContains: function (a, c) {
    return "string" ==
      typeof a && -1 !== a.indexOf(c)
  },
  getAllCookiesArray: function () {
    var a = {}, c = 0;
    if (document.cookie && "" != document.cookie)for (var d = document.cookie.split(";"), e = 0; e < d.length; e++) {
      var f = d[e].split("\x3d");
      f[0] = f[0].replace(/^ /, "");
      a[decodeURIComponent(f[0])] = decodeURIComponent(f[1]);
      c++
    }
    return {cookies: a, length: c}
  },
  deleteCookie: function (a) {
    jQuery.cookie(a, null)
  },
  deleteCookies: function (a) {
    var c = "";
    if (c = "undefined" !== typeof ImajnetUser ? ImajnetUser.getUsername() : CommonCore.userInfo ? CommonCore.userInfo.username :
        null) {
      var d = Nigsys.getAllCookiesArray();
      if (d && !(11 > d.length))for (var e in d.cookies)if (0 === e.indexOf(a + "_") && e != a + "_" + c && (Nigsys.deleteCookie(e), d.length--, 11 > d.length))break
    }
  },
  getUserCookies: function (a, c) {
    a = ImajnetUser.getUsername();
    if (!a)return null;
    var d = jQuery.cookie(c + "_" + a);
    return d ? JSON.parse(d) : null
  },
  getCookie: function (a, c) {
    var d = ImajnetUser.getUsername();
    if (!d)return null;
    if ("undefined" !== typeof Storage)return ApplicationStorage.readObject(c, d, a);
    d = jQuery.cookie(a + "_" + d);
    if (!d)return null;
    var d = JSON.parse(d), e;
    for (e in d)if (e == c)return d[e];
    return null
  },
  setCookie: function (a, c, d) {
    var e = ImajnetUser.getUsername();
    if (e)if ("undefined" !== typeof Storage) ApplicationStorage.writeObject(c, d, e, a); else {
      var f = Nigsys.getUserCookies(e, a);
      f || (f = {});
      f[c] = d;
      jQuery.cookie(a + "_" + e, JSON.stringify(f), {expires: 30})
    }
  },
  getIPLocationsCookie: function () {
    return jQuery.cookie("IMAJNET_IP_LOCATIONS")
  },
  setIPLocationCookie: function (a, c) {
    var d = {}, e = jQuery.cookie("IMAJNET_IP_LOCATIONS");
    e && (d = JSON.parse(e));
    d[a] = c;
    jQuery.cookie("IMAJNET_IP_LOCATIONS", JSON.stringify(d), {expires: 30})
  },
  getCurrentYear: function () {
    return (new Date).getFullYear()
  },
  getViewportSize: function () {
    var a, c;
    "undefined" != typeof window.innerWidth ? (a = window.innerWidth, c = window.innerHeight) : "undefined" != typeof document.documentElement && "undefined" != typeof document.documentElement.clientWidth && 0 != document.documentElement.clientWidth ? (a = document.documentElement.clientWidth, c = document.documentElement.clientHeight) : (a = document.getElementsByTagName("body")[0].clientWidth,
      c = document.getElementsByTagName("body")[0].clientHeight);
    return {w: a, h: c}
  },
  getWindowSize: function () {
    var a = 0, c = 0;
    1 != (window.devicePixelRatio || 1) ? (c = Nigsys.getViewportSize(), a = c.w, c = c.h) : window.innerWidth ? (a = window.innerWidth, c = window.innerHeight) : 0 != document.documentElement.clientWidth ? (a = document.documentElement.clientWidth, c = document.documentElement.clientHeight) : (a = document.body.clientWidth, c = document.body.clientHeight);
    return {width: a, height: c}
  },
  setSliderValues: function (a, c, d) {
    a && "undefined" !== typeof c &&
    c && (a.slider("option", {
      min: c.min,
      max: c.max
    }), a.slider("values", 0, parseInt(c.min)), a.slider("values", 1, parseInt(c.max)), d.html(c.min + " - " + c.max))
  },
  getUserPositionError: function () {
    Nigsys.showLoading(ImajnetUI.imageContainer);
    ImajnetZoom.left = -1;
    ImajnetMap.POIArray && ImajnetMap.POIArray[0] ? (ImajnetAPI.setImajnetImage({position: ImajnetMap.POIArray[0].position}), ImajnetPlugin.centerMapToPosition(ImajnetMap.POIArray[0].position)) : ImajnetUrl.goToLocation("43.59936957234748,1.43908554574678")
  },
  goToClosestPOI: function (a) {
    if (!ImajnetMap.POIArray)return !1;
    for (var c = -1, d = -1, e = 0; e < ImajnetMap.POIArray.length; e++) {
      var f = Nigsys.distanceBetweenPoints(a, ImajnetMap.POIArray[e].position);
      if (f < c || -1 == c) c = f, d = e
    }
    if (-1 != d)return ImajnetZoom.left = -1, Nigsys.showLoading(ImajnetUI.imageContainer), ImajnetAPI.setImajnetImage({position: ImajnetMap.POIArray[d].position}), ImajnetPlugin.centerMapToPosition(ImajnetMap.POIArray[d].position), !0;
    Nigsys.getUserPositionError();
    return !1
  },
  getUserPositionSuccess: function (a, c) {
    if ("undefined" === typeof OpenLayersForProjection)return null;
    var d = (new OpenLayersForProjection.Format.KML).read(a.responseText), e = null, f;
    for (f in d)if ("OpenLayers.Geometry.Point" == d[f].geometry.CLASS_NAME) {
      e = Object({lon: d[f].geometry.x, lat: d[f].geometry.y});
      Nigsys.setIPLocationCookie(c, e);
      break
    }
    return e ? Nigsys.goToClosestPOI(e) : (Nigsys.getUserPositionError(), !1)
  },
  getUserPositionAjaxRequest: function (a) {
    var c = !1, d = Imajnet.serverUrl.substring(0, Imajnet.serverUrl.lastIndexOf("/service"));
    jQuery.ajax({
      type: "GET", url: d + "/geomaplookup?ip\x3d" + a + "\x26kml\x3dtrue",
      timeout: 5E3, async: !1, success: function (d, f, h) {
        c = Nigsys.getUserPositionSuccess(h, a)
      }, error: function () {
        Nigsys.setIPLocationCookie(a, null)
      }
    });
    return c
  },
  getUserPosition: function () {
    "undefined" === typeof remoteAddress && (remoteAddress = "client");
    var a = remoteAddress.split(","), c = Nigsys.getIPLocationsCookie();
    if (c)for (var c = JSON.parse(c), d = a.length - 1; 0 <= d; d--)if (void 0 !== c[a[d]]) {
      if (c[a[d]] && Nigsys.goToClosestPOI(c[a[d]]))return;
      a.splice(d, 1)
    }
    for (d = a.length - 1; 0 <= d; d--)if (Nigsys.getUserPositionAjaxRequest(a[d]))return;
    Nigsys.getUserPositionError()
  },
  getRadioValue: function (a) {
    return jQuery("input:radio[name\x3d" + a + "]:checked").val()
  },
  setRadioValue: function (a, c) {
    for (var d = jQuery("input:radio[name\x3d" + a + "]"), e = 0; e < d.length; e++)d[e].checked = d[e].value == c, CommonCore.updateCustomCheckbox(jQuery(d[e]))
  },
  positionNotificationInCenter: function (a, c, d, e) {
    d = Nigsys.getWindowSize();
    e.width() > d.width - 10 && (a = d.width - 10, e.width(a));
    a || (a = e.width());
    c || (c = e.height());
    a = parseInt((d.width - a) / 2);
    5 > a && (a = 5);
    c = parseInt((d.height - c) / 2);
    5 > c && (c = 5);
    e.offset({left: a, top: c})
  },
  positionNotificationCenter: function (a, c) {
    Nigsys.positionNotificationInCenter(a, c, container, jQuery("#notification"))
  },
  positionLoginNotificationErrorCenter: function (a, c) {
    Nigsys.positionNotificationInCenter(a, c, jQuery(document), jQuery("#notification"))
  },
  positionLoginNotificationCenter: function (a) {
    if ("undefined" !== typeof CommonCore && CommonCore.isMobile) {
      var c = Nigsys.getWindowSize();
      a = (c.width - a) / 2;
      5 > a && (a = 5);
      c = (c.height - 206) / 2;
      5 > c && (c = 5);
      jQuery("#notificationLoginContainer").offset({
        left: a,
        top: c
      })
    } else Nigsys.positionNotificationInCenter(a, 206, jQuery(document), jQuery("#notificationLoginContainer"))
  },
  positionNotification: function (a) {
    if (a && "center" != a)if ("centerLoginError" == a)if ("undefined" !== typeof CommonCore && CommonCore.isMobile) {
      a = jQuery("#notification");
      var c = Nigsys.getWindowSize();
      a.offset({top: 420, left: (c.width - a.width()) / 2})
    } else Nigsys.positionLoginNotificationErrorCenter(null, -220); else"rightBottom" == a && (a = jQuery("#notification"), c = Nigsys.getWindowSize(), a.offset({
      top: c.height -
      a.height() - 10, left: c.width - a.width() - 10
    })); else Nigsys.positionNotificationCenter()
  },
  showConfirmDialog: function (a, c, d, e, f) {
    var h = jQuery.Deferred();
    "undefined" !== typeof CommonCore && CommonCore.isMobile && Nigsys.initModalOverlay("#content");
    Nigsys.modalOverlay.show();
    Nigsys.notification.html("");
    jQuery("#notification").show();
    Nigsys.confirmDialog = Nigsys.notification.notify("create", "notificationConfirm", {text: a, type: c}, {
      expires: !1, beforeopen: function (a, c) {
        Nigsys.positionNotification(d)
      }, click: function (a,
                          c) {
        return !1
      }, close: function (a, c) {
        -1 !== Nigsys.notification.html().indexOf("Nigsys.closeConfirmDialog") && Nigsys.notification.height() || Nigsys.modalOverlay.hide()
      }
    });
    jQuery("#confirmYes_" + c).bind("click", function (a) {
      "function" === typeof e && e();
      Nigsys.confirmDialog.close();
      h.resolve()
    });
    jQuery("#confirmNo_" + c).bind("click", function (a) {
      "function" === typeof f && f();
      Nigsys.confirmDialog.close();
      h.reject()
    });
    return h.promise()
  },
  showNotificationOkConfirm: function (a, c, d, e, f, h, k) {
    "undefined" !== typeof CommonCore &&
    CommonCore.isMobile && Nigsys.initModalOverlay("#content");
    Nigsys.modalOverlay.show();
    Nigsys.notification.html("");
    Nigsys.confirmDialog = Nigsys.notification.notify("create", "notificationOkConfirm", {
      title: a,
      text: c,
      type: d
    }, {
      expires: !1, beforeopen: function (a, c) {
        jQuery("#notification").width(310);
        Nigsys.positionNotification(e)
      }, click: function (a, c) {
        return !1
      }, close: function (a, c) {
        Nigsys.modalOverlay.hide()
      }
    });
    jQuery("#confirmOk_" + d).bind("click", function (a) {
      k()
    })
  },
  closeConfirmDialog: function () {
    try {
      Nigsys.confirmDialog.close(),
        Nigsys.modalOverlay.hide()
    } catch (a) {
    }
  },
  showSessionExpiredNotification: function (a, c, d, e, f) {
    Nigsys.sessionExpired || ("undefined" !== typeof CommonCore && CommonCore.isMobile && Nigsys.initModalOverlay("#content"), Nigsys.modalOverlay.show(), Nigsys.notification.html(""), Nigsys.sessionExpiredNotification = Nigsys.notification.notify("create", "notificationSessionExpired", {
      text: a,
      type: c
    }, {
      expires: !1, beforeopen: function (a, c) {
        jQuery("#notification").width(310).show();
        Nigsys.positionNotification(d)
      }, click: function (a,
                          c) {
        return !1
      }
    }), jQuery("#confirmYes_" + c).bind("click", function (a) {
      e()
    }))
  },
  reloadAfterSessionExpires: function () {
    location.reload()
  },
  onIddle: function (a) {
    if (map)try {
      map.destroy()
    } catch (c) {
    }
    Nigsys.showSessionExpiredNotification(jQuery.imajnet.security.sessionExpired, "sessionExpired", "center", Nigsys.reloadAfterSessionExpires);
    Nigsys.sessionExpired = !0;
    return !1
  },
  addIddleTimeout: function () {
    try {
      jQuery.idleTimeout(document, null, {idleAfter: Nigsys.sessionTimeout, titleMessage: "", onIdle: Nigsys.onIddle})
    } catch (a) {
    }
  },
  positionExistingElementBackEnd: function (a, c, d) {
    var e = a.clientY + 20;
    a = a.clientX + 20;
    var f = c.width() - 20;
    c = c.height() - 20;
    var h = d.width(), k = d.height();
    c < e + k && (e = e - k - 60);
    f < a + h && (a = a - h - 60);
    d.css("max-height", c);
    d.css("top", 0 < e ? e : 0);
    d.css("max-width", f);
    d.css("left", 0 < a ? a : 0);
    Nigsys.browserIsIE8() || Nigsys.browserIsIE7() || d.corner()
  },
  getMonthDigit: function (a) {
    switch (a) {
      case jQuery.imajnet.dateTime.month1:
        return "01";
      case jQuery.imajnet.dateTime.month2:
        return "02";
      case jQuery.imajnet.dateTime.month3:
        return "03";
      case jQuery.imajnet.dateTime.month4:
        return "04";
      case jQuery.imajnet.dateTime.month5:
        return "05";
      case jQuery.imajnet.dateTime.month6:
        return "06";
      case jQuery.imajnet.dateTime.month7:
        return "07";
      case jQuery.imajnet.dateTime.month8:
        return "08";
      case jQuery.imajnet.dateTime.month9:
        return "09";
      case jQuery.imajnet.dateTime.month10:
        return "10";
      case jQuery.imajnet.dateTime.month11:
        return "11";
      case jQuery.imajnet.dateTime.month12:
        return "12"
    }
  },
  addYearsToJavaFormattedDate: function (a, c) {
    if (!a)return "";
    var d = a.indexOf("-");
    return (parseInt(a.substring(0, d)) + parseInt(c)).toString() + a.substring(d, a.length)
  },
  formatGeoserverDateTime: function (a, c) {
    return "xsd:date" == c ? Nigsys.formatGeoserverDate(a) : "xsd:dateTime" == c ? Nigsys.formatGeoserverDateAndTime(a) : a
  },
  formatGeoserverDateAndTime: function (a) {
    if (!a)return "";
    if (-1 === a.indexOf(Nigsys.dateT))return Nigsys.formatGeoserverDate(a);
    var c = a.split(Nigsys.dateT)[0].split("-"), c = c[2] + " " + Nigsys.getMonthFromNumber(c[1]) + " " + c[0],
      d = a.split(Nigsys.dateT);
    if (!d[1])return a;
    d = d[1].split(":");
    return c + " " + d[0] + Nigsys.timeFormat.charAt(2) + d[1]
  },
  formatGeoserverDate: function (a) {
    if (!a)return "";
    if (-1 === a.indexOf("-"))return a;
    a = a.replace(Nigsys.dateZ, "");
    a = a.split(Nigsys.dateT)[0].split("-");
    return a[2] + " " + Nigsys.getMonthFromNumber(a[1]) + " " + a[0]
  },
  formatJavascriptDateToFormat: function (a, c) {
    if (!a)return "";
    if ("undefined" !== typeof CommonCore && CommonCore.isMobile) {
      var d = a.split("-");
      return d[2] + c + d[1] + c + d[0]
    }
    var d = a.split(" "), e = Nigsys.getMonthDigit(d[1]);
    return d[0] + c + e + c + d[2]
  },
  formatJavascriptDateToJava: function (a) {
    if (!a)return "";
    a = a.split(" ");
    var c = Nigsys.getMonthDigit(a[1]);
    return a[2] + "-" + c + "-" + a[0] + Nigsys.dateZ
  },
  formatJavascriptDateAndTimeToJava: function (a) {
    if (!a)return "";
    a = a.split(" ");
    var c = Nigsys.getMonthDigit(a[1]), d = ":";
    Nigsys.timeFormat && (d = Nigsys.timeFormat.charAt(2));
    d = a[3].split(d);
    return a[2] + "-" + c + "-" + a[0] + Nigsys.dateT + d[0] + ":" + d[1] + ":00" + Nigsys.dateZ
  },
  formatJavascriptDateObjectToJava: function (a) {
    return a ? a.getFullYear() + "-" + Nigsys.addZero(a.getMonth() + 1) + "-" + Nigsys.addZero(a.getDate()) + Nigsys.dateT + Nigsys.addZero(a.getHours()) +
      ":" + Nigsys.addZero(a.getMinutes()) + ":00" + Nigsys.dateZ : ""
  },
  addZero: function (a) {
    return 10 > a ? "0" + a : a
  },
  getDateObject: function (a) {
    a = a.split("-");
    return new Date(parseInt(a[0], 10), parseInt(a[1], 10) - 1, parseInt(a[2], 10))
  },
  getDateNormalObject: function (a, c) {
    var d = Object({day: 0, month: 0, year: 0, time: 0});
    try {
      var e = a.split(c), d = Object({year: parseInt(e[0]), month: parseInt(e[1]), day: parseInt(e[2]), time: e[3]})
    } catch (f) {
    }
    return d
  },
  valueIsValidDateTimepicker: function (a) {
    var c = !1;
    try {
      var d = a.split(" "), e = parseInt(d[0]),
        f = parseInt(Nigsys.getMonthDigit(d[1])), h = parseInt(d[2]), k = d[3];
      a = !0;
      if (k) {
        var l = k.split(Nigsys.timeFormat.charAt(2)), m = parseInt(l[0]), n = parseInt(l[1]);
        a = 0 <= m && 24 >= m && 0 <= n && 59 >= n
      }
      c = 1 <= e && 31 >= e && 1 <= f && 12 >= f && 0 <= h && a
    } catch (p) {
    }
    return c
  },
  endDateIsBeforeStartDate: function (a, c) {
    var d = !1;
    try {
      var e = Nigsys.getDateNormalObject(a, "-"), f = Nigsys.getDateNormalObject(c, "-"),
        d = f.year < e.year || f.year == e.year && (f.month < e.month || f.month == e.month && f.day < e.day)
    } catch (h) {
    }
    return d
  },
  getCurrentDateFormattedForInput: function () {
    var a =
      new Date;
    return a.getDate() + " " + Nigsys.getMonthFromNumber((a.getMonth() + 1).toString()) + " " + a.getFullYear()
  },
  formattedDateToInput: function (a) {
    if (!a)return "";
    a = a.split(" ");
    var c = Nigsys.getMonthDigit(a[1]);
    return a[2] + "-" + c + "-" + a[0]
  },
  appendDateTimePickerToElement: function (a, c, d, e, f) {
    a = jQuery(a);
    if (a.length) {
      var h = a.prop("id");
      -1 === h.indexOf("_created") && -1 === h.indexOf("_modified") && (!d && a.val() && (d = a.val()), "xsd:date" == c || "xsd:dateTime" == c ? "undefined" === typeof CommonCore || !CommonCore.isMobile || "xsd:date" !=
      c && "xsd:dateTime" != c ? (f = jQuery.extend(Object({
          dateFormat: "dd MM yy",
          timeFormat: Nigsys.timeFormat,
          showOn: "focus",
          useLocalTimezone: !0,
          constrainInputType: !0,
          autoOpen: !1,
          changeMonth: !0,
          changeYear: !0,
          monthNames: [jQuery.imajnet.dateTime.month1, jQuery.imajnet.dateTime.month2, jQuery.imajnet.dateTime.month3, jQuery.imajnet.dateTime.month4, jQuery.imajnet.dateTime.month5, jQuery.imajnet.dateTime.month6, jQuery.imajnet.dateTime.month7, jQuery.imajnet.dateTime.month8, jQuery.imajnet.dateTime.month9, jQuery.imajnet.dateTime.month10,
            jQuery.imajnet.dateTime.month11, jQuery.imajnet.dateTime.month12],
          dayNamesMin: [jQuery.imajnet.dateTime.day1Min, jQuery.imajnet.dateTime.day2Min, jQuery.imajnet.dateTime.day3Min, jQuery.imajnet.dateTime.day4Min, jQuery.imajnet.dateTime.day5Min, jQuery.imajnet.dateTime.day6Min, jQuery.imajnet.dateTime.day7Min],
          timeText: jQuery.imajnet.dateTime.timeText,
          hourText: jQuery.imajnet.dateTime.hourText,
          minuteText: jQuery.imajnet.dateTime.minuteText,
          currentText: jQuery.imajnet.dateTime.currentText,
          closeText: jQuery.imajnet.dateTime.closeText
        }),
        f), "xsd:date" == c && (f.showTimepicker = !1), a.datetimepicker(f), e || (d = Nigsys.formatGeoserverDateTime(d, c)), Nigsys.valueIsValidDateTimepicker(d) ? a.datetimepicker("setDate", d) : a.val(""), a.keypress(function (a) {
        return !1
      }), a.click(function (a) {
        jQuery(a.target).datepicker("show")
      })) : (d && (d = d.replace(Nigsys.dateZ, "")), e = a.attr("onchange"), a.parent().html('\x3cinput type\x3d"date" data-clear-btn\x3d"false" id\x3d"' + h + '" class\x3d"' + ("xsd:date" == c ? "datePicker" : "") + ("xsd:dateTime" == c ? " dateTimePicker" : "") + '" size\x3d"39" value\x3d"' +
        Nigsys.formattedDateToInput(d) + '"' + (e ? ' onchange\x3d"' + e + '"' : "") + "\x3e")) : (a.unbind("keypress"), a.unbind("click"), "undefined" !== typeof CommonCore && CommonCore.isMobile || a.datetimepicker("destroy")))
    }
  },
  formatImajnetImageDate: function (a) {
    if (!a)return "";
    a = a.split("-");
    return a[2] + " " + Nigsys.getMonthFromNumber(a[1]) + " " + a[0]
  },
  getMonthFromNumber: function (a) {
    switch (a) {
      case "1":
      case "01":
        return jQuery.imajnet.dateTime.month1;
      case "2":
      case "02":
        return jQuery.imajnet.dateTime.month2;
      case "3":
      case "03":
        return jQuery.imajnet.dateTime.month3;
      case "4":
      case "04":
        return jQuery.imajnet.dateTime.month4;
      case "5":
      case "05":
        return jQuery.imajnet.dateTime.month5;
      case "6":
      case "06":
        return jQuery.imajnet.dateTime.month6;
      case "7":
      case "07":
        return jQuery.imajnet.dateTime.month7;
      case "8":
      case "08":
        return jQuery.imajnet.dateTime.month8;
      case "9":
      case "09":
        return jQuery.imajnet.dateTime.month9;
      case "10":
        return jQuery.imajnet.dateTime.month10;
      case "11":
        return jQuery.imajnet.dateTime.month11;
      case "12":
        return jQuery.imajnet.dateTime.month12
    }
  },
  distanceTo: function (a,
                        c) {
    return Math.sqrt(Math.pow(c.x - a.x, 2) + Math.pow(c.y - a.y, 2))
  },
  rotatePoint: function (a, c, d) {
    a *= Math.PI / 180;
    var e = this.distanceTo(c, d);
    a += Math.atan2(d.y - c.y, d.x - c.x);
    d.x = c.x + e * Math.cos(a);
    d.y = c.y + e * Math.sin(a)
  },
  transformImajnetOrientationPoint: function (a, c, d) {
    return Proj4js.transform(c, d, a)
  },
  getEmptyCombobox: function () {
    return {
      val: function () {
        return ""
      }
    }
  },
  disableCombobox: function (a) {
    a.parent().find("input.ui-autocomplete-input").autocomplete("option", "disabled", !0).prop("disabled", !0);
    a.parent().find("a.ui-button").button("disable")
  },
  getComboboxInputContainer: function (a) {
    a = a.parent();
    if (!a || !a[0] || !a[0].children)return Nigsys.getEmptyCombobox();
    for (var c = 0; c < a[0].children.length; c++)if (a[0].children[c].children[0] && -1 !== a[0].children[c].children[0].className.indexOf("ui-combobox-input"))return jQuery(a[0].children[c].children[0]);
    return Nigsys.getEmptyCombobox()
  },
  setComboboxInputValue: function (a, c) {
    var d = Nigsys.getComboboxInputContainer(a);
    d && d.val(c)
  },
  refreshComboboxContainer: function (a, c) {
    var d = Nigsys.getComboboxInputContainer(a);
    d && d.val(c ? c : a.find("option:selected").text())
  },
  changeComboboxDisabledState: function (a, c) {
    c ? (a.parent().find("input.ui-autocomplete-input").autocomplete("option", "disabled", !0).prop("disabled", !0), a.parent().find("a.ui-button").button("disable")) : (a.parent().find("input.ui-autocomplete-input").autocomplete("option", "disabled", !1).prop("disabled", !1), a.parent().find("a.ui-button").button("enable"))
  },
  bindComboboxToSelect: function (a, c, d) {
    a.combobox({
      permisive: d && d.permisive ? !0 : !1, selected: function (a,
                                                                 f) {
        "function" === typeof c && (d.selectedValue = f.item.value, c(a, d))
      }
    })
  },
  bindMultipleSelectToSelect: function (a, c, d) {
    a.multipleSelect({
      placeholder: "Select a value",
      width: d.width,
      selectAll: d.hideSelectAll ? !1 : !0,
      onClick: function (a) {
        "function" === typeof c && c(a, d)
      }
    });
    d.uncheckAll && a.multipleSelect("uncheckAll")
  },
  showTooltip: function (a, c) {
    var d = jQuery(".popup");
    d.html(c.substring(0, c.length - 6));
    Nigsys.positionExistingElementBackEnd(a, jQuery(window), d);
    d.show()
  },
  hideTooltip: function () {
    var a = jQuery(".popup");
    a.hide();
    a.html("")
  },
  enableContainer: function (a) {
    try {
      jQuery("#" + a + " :input").prop("disabled", !1)
    } catch (c) {
    }
    try {
      jQuery("#" + a).prop("disabled", !1)
    } catch (c) {
      console.error("Id in wrong format: enable container")
    }
  },
  disableContainer: function (a) {
    try {
      jQuery("#" + a + " :input").prop("disabled", !0)
    } catch (c) {
    }
    try {
      jQuery("#" + a).prop("disabled", !0)
    } catch (c) {
      console.error("Id in wrong format: disable container")
    }
  },
  confirmAction: function (a, c, d, e) {
    confirm(d) && c(a, e);
    Nigsys.disableEventPropagation(a)
  },
  removeFirstCharacter: function (a) {
    return a.substring(1,
      a.length)
  },
  getLastCharacter: function (a) {
    return a.substr(-1)
  },
  removeLastCharacter: function (a) {
    return a.substring(0, a.length - 1)
  },
  showDialogError: function (a, c) {
    jQuery("#" + a + "Errors").html(c);
    jQuery("#" + a + "DialogErrorsContainer").show()
  },
  hideDialogError: function (a) {
    jQuery("#" + a + "Errors").html("");
    jQuery("#" + a + "DialogErrorsContainer").hide()
  },
  addStringToArray: function (a, c) {
    for (var d = 0; d < a.length; d++)if (a[d] == c)return !1;
    a.push(c)
  },
  addObjectToArray: function (a, c) {
    for (var d = 0; d < a.length; d++)if (a[d].id == c.id)return !1;
    a.push(c)
  },
  onComboboxDestroy: function (a, c) {
    Feature.onComboboxDestroy(a, c)
  },
  escapeHtml: function (a) {
    return "string" !== typeof a ? a : a.replace(/&/g, "\x26amp;").replace(/</g, "\x26lt;").replace(/>/g, "\x26gt;").replace(/"/g, "\x26quot;").replace(/'/g, "\x26#039;")
  },
  getScrollbarSize: function () {
    if ("undefined" !== typeof CommonCore && CommonCore.isMobile)return 14;
    if (this.scrollbarSize)return this.scrollbarSize;
    var a = jQuery("\x3cdiv\x3e").css({visibility: "hidden", width: 100, overflow: "scroll"}).appendTo("body"),
      c = jQuery("\x3cdiv\x3e").css({width: "100%"}).appendTo(a).outerWidth();
    a.remove();
    return this.scrollbarSize = 100 - c
  },
  bindOnHashChange: function () {
    "undefined" !== typeof CommonCore && (CommonCore.isMobile || "computeDiag" == CommonCore.page) || window.onhashchange || (window.onhashchange = function () {
      "undefined" === typeof isImajnetMode || isImajnetMode() ? ImajnetUrl.applyUrlParams(!0) : MainMethodsCore.allWorkspacesDeferred.done(function () {
        ImajnetUrl.applyUrlParams(!0)
      }).fail(function () {
        ImajnetUrl.applyUrlParams(!0)
      })
    })
  },
  isDeferred: function (a) {
    return "undefined" !== typeof a && a ? "function" === typeof a.state :
      !1
  },
  tabActiveIndex: function (a) {
    return a.tabs("option", "active")
  },
  activateTabIndex: function (a, c) {
    a.tabs("option", "selected", c);
    if (CommonCore.isMobile)try {
      jQuery(a.find(".ui-tabs-nav")[0].childNodes[c].childNodes[0]).trigger("click")
    } catch (d) {
    }
  },
  replaceAll: function (a, c, d) {
    return a.replace(new RegExp(c, "g"), d)
  },
  getFunctionNameAndArguments: function (a) {
    a = a.split("(");
    var c = a[1].replace(")", "");
    return {name: a[0], arguments: Nigsys.replaceAll(Nigsys.replaceAll(c, ", ", ","), "'", "").split(",")}
  },
  callFunctionFromString: function (a) {
    a =
      Nigsys.getFunctionNameAndArguments(a);
    var c = a.name.split(".");
    if (1 == c.length)return window[c[0]].apply(this, a.arguments);
    if (2 == c.length)return window[c[0]][c[1]].apply(this, a.arguments)
  },
  prepareSelectorString: function (a) {
    return a.replace(/[!"#$%&'()*+,.\/:;<=>?@[\\\]^{|}~]/g, "\\$\x26")
  },
  compareAscending: function (a, c, d) {
    return a[d] - c[d]
  },
  onMobile: function () {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  },
  isSafari: function () {
    var a = navigator.userAgent.toLowerCase();
    if (-1 != a.indexOf("safari"))return -1 < a.indexOf("chrome") ? !1 : !0
  },
  SVGToXML: function (a) {
    return (new XMLSerializer).serializeToString(document.querySelector("#" + a))
  },
  encodeXMLToBase64: function (a) {
    return "base64," + btoa(unescape(encodeURIComponent(a)))
  },
  SVGToBase64XML: function (a) {
    return "data:image/svg+xml;" + Nigsys.encodeXMLToBase64(Nigsys.SVGToXML(a))
  },
  convertToHexFromRgba: function (a, c) {
    if (a)return c || (c = 1), a = a.replace("#", ""), r = parseInt(a.substring(0, 2), 16), g = parseInt(a.substring(2, 4), 16), b = parseInt(a.substring(4,
      6), 16), result = "rgba(" + r + "," + g + "," + b + "," + c + ")"
  },
  ajaxMustAppendDataToUrl: function (a) {
    return "post" != a.toLowerCase() && "put" != a.toLowerCase()
  },
  doAjaxRequest: function (a, c, d, e, f, h, k) {
    d = "string" == typeof d ? d : void 0 !== d && null !== d ? JSON.stringify(d) : "";
    var l = "", l = !Nigsys.ajaxMustAppendDataToUrl(a) || k && k.postData ? c : c + d;
    -1 === l.indexOf("http") && (l = applicationUrl + l);
    return jQuery.ajax({
      type: a,
      url: l,
      contentType: "application/json",
      Accept: "application/json",
      dataType: "json",
      cache: "undefined" !== typeof k && k && k && k.cache ?
        k.cache : !1,
      data: !Nigsys.ajaxMustAppendDataToUrl(a) || k && k.postData ? d : "",
      complete: function (a, c) {
        void 0 !== h && null !== h && h(a, k);
        200 == a.status || 201 == a.status || 204 == a.status ? void 0 !== e && null !== e && e(a.responseText, k) : void 0 !== f && null !== f && f(a, k)
      }
    })
  },
  doAjaxRequestDeferred: function (a, c, d, e, f, h, k) {
    var l = jQuery.Deferred();
    d = void 0 !== d && null !== d ? JSON.stringify(d) : "";
    var m = "", m = !Nigsys.ajaxMustAppendDataToUrl(a) || k && k.postData ? c : c + d;
    -1 === m.indexOf("http") && (m = applicationUrl + m);
    c = k && k.filePath ? k.filePath : !1;
    CommonCore.isMobile &&
    c && !MainCore.isWeb ? appCache.loadFileContent(null, c, m, k && k.forceServerReload ? k.forceServerReload : !1).done(function (a) {
      a = MainMethodsCore.parseResponse(k.responseType, a);
      "function" === typeof h && h(a, k);
      "function" === typeof e && e(a, k);
      l.resolve(a)
    }).fail(function () {
      "function" === typeof f && f(null, k);
      l.reject()
    }) : jQuery.ajax({
      type: a,
      url: m,
      contentType: "application/json",
      Accept: "application/json",
      dataType: "json",
      cache: k && k.cache ? k.cache : !1,
      data: !Nigsys.ajaxMustAppendDataToUrl(a) || k && k.postData ? d : "",
      complete: function (a,
                          c) {
        var d = a.responseText;
        k && k.responseType && (d = MainMethodsCore.parseResponse(k.responseType, d));
        "function" === typeof h && h(a, k);
        200 == a.status || 201 == a.status || 204 == a.status ? ("function" === typeof e && e(d, k), l.resolve(d, k)) : ("function" === typeof f && f(a, k), l.reject(a, k))
      }
    });
    return l.promise()
  },
  getAjaxRequest: function (a, c, d, e, f) {
    var h = jQuery.Deferred();
    jQuery.ajax({
      type: "GET", url: applicationUrl + a, cache: !1, success: function (a) {
        if ("function" != typeof c) h.resolve(a, f); else try {
          c(a, f).done(function () {
            h.resolve(a,
              f)
          }).fail(function () {
            h.reject(a, f)
          })
        } catch (d) {
          h.resolve(a, f)
        }
      }, complete: function (a) {
        "function" == typeof d && d(a, f)
      }, error: function (a) {
        if ("function" != typeof e) h.reject(a, f); else try {
          e(a, f).done(function () {
            h.resolve(a, f)
          }).fail(function () {
            h.reject(a, f)
          })
        } catch (c) {
          h.reject(a, f)
        }
      }
    });
    return h.promise()
  },
  getHostName: function () {
    return location & location.hostname ? location.hostname : ""
  },
  getArea: function (a) {
    var c = 0;
    if (a && 2 < a.length) {
      for (var d = c = 0, e = a.length; d < e - 1; d++)var f = a[d], h = a[d + 1], c = c + (f.x + h.x) * (h.y - f.y);
      c = -c / 2
    }
    return c
  },
  getGeodesicArea: function (a) {
    return ""
  },
  getGeodesicAreaNotFinished: function (a) {
    for (var c = 0, d = 0, e = a.length; e--;)c += a.lat[e], d += a.lon[e];
    for (var c = c / a.length, e = d / a.length, d = Array(a.length), f = a.length; f--;)a.lat[f] -= c, a.lon[f] -= e, 0 <= lons[f] && 0 <= a.lat[f] ? d[f] = Math.abs(180 * Math.atan(lat[f] / lons[f]) / Math.PI) : 0 > lons[f] && 0 <= lat[f] ? d[f] = 90 + Math.abs(180 * Math.atan(lat[f] / lons[f]) / Math.PI) : 0 > lons[f] && 0 > lats[f] ? d[f] = 180 + Math.abs(180 * Math.atan(lat[f] / lons[f]) / Math.PI) : 0 <= lons[f] && 0 > lats[f] && (d[f] =
        270 + Math.abs(180 * Math.atan(lat[f] / lons[f]) / Math.PI));
    for (f = 0; f < d.length; f++)for (var h = 0; h < d.length - 1; h++)a = d[h], c = lat[h], e = lon[h], a < d[h + 1] && (d[h] = d[h + 1], lat[h] = lat[h + 1], lons[h] = lons[h + 1], d[h + 1] = a, lat[h + 1] = c, lon[h + 1] = e);
    for (c = a = d = 0; c < lats.length; c++)c != lats.length - 1 ? (d += lats[c] * lons[c + 1], a += lons[c] * lats[c + 1]) : (d += lats[c] * lons[0], a += lons[c] * lats[0]);
    console.log("Area: " + (d - a) / 2)
  },
  signedArea: function (a) {
    for (var c = 0, d = a[0].x, e = 1; e < a.length - 1; e++)c += (a[e].x - d) * (a[e - 1].y - a[e + 1].y);
    return c / 2
  },
  computeLonLatPointsArea: function (a) {
    for (var c =
      new jsts.geom.GeometryFactory, d = [], e = 0; e < a.length; e++)d.push(new jsts.geom.Coordinate(a[e].lon, a[e].lat));
    a = c.createLinearRing(d);
    return 1E6 * c.createPolygon(a).getArea()
  },
  addRandomToUrl: function (a) {
    var c = "", c = -1 === a.indexOf("?") ? "?" : "\x26";
    return a + c + "_\x3d" + MainMethodsCore.getRandomString()
  },
  downloadFromURL: function (a) {
    var c = document.createElement("A");
    c.href = a;
    c.download = a.substr(a.lastIndexOf("/") + 1);
    document.body.appendChild(c);
    c.click();
    document.body.removeChild(c)
  },
  getGeometryLength: function (a) {
    a =
      (new jsts.io.WKTReader).read(a);
    return a.getLength()
  },
  getOLGeometryFromWKTString: function (a) {
    return (new jsts.io.WKTReader).read(a)
  }
};
var ImajnetUser = {
  data: null, resetUserData: function (a) {
    ImajnetUser.data = null
  }, setData: function (a) {
    ImajnetUser.data = a
  }, getUsername: function () {
    return ImajnetUser.data ? ImajnetUser.data.login : ""
  }, getEmail: function () {
    return ImajnetUser.data ? ImajnetUser.data.email : ""
  }
};
var dockingLeftContainerSize = 20, dockingRightContainerSize = 36, ImajnetDocking = function (b, d, e, g, c) {
  onParentScroll = null;
  var k = Nigsys.getCookie("IMAJNET", "DOCKING_" + g + "_position");
  k && (delete c.left, delete c.top, delete c.right, delete c.bottom, "undefined" !== typeof k.left && (c.left = k.left), "undefined" !== typeof k.top && (c.top = k.top), "undefined" !== typeof k.right && (c.right = k.right), "undefined" !== typeof k.bottom && (c.bottom = k.bottom), 0 == c.left ? e = "Left" : 0 == c.top ? e = "Top" : 0 == c.right ? e = "Right" : 0 == c.bottom && (e = "Bottom"));
  this.container = b;
  this.previousCss = c;
  this.direction = e;
  this.type = g;
  this.css = c;
  b = '\x3cdiv id\x3d"imajnetDockingLeftContainer_' + g + '" class\x3d"' + (this.css.notResizable ? "" : e) + '"\x3e' + ("header" != g ? '\x3cdiv id\x3d"imajnetDockingButton_' + g + '" class\x3d"imageDockingButton left"\x3e\x3c/div\x3e' : "") + '\x3cdiv id\x3d"imajnetDockingLeftTitleContainer_' + g + '" class\x3d"imajnetDockingLeftTitleContainer left"\x3e\x3c/div\x3e\x3c/div\x3e';
  d = '\x3cdiv id\x3d"imajnetDockingRightContainer_' + g + '" class\x3d"' + (this.css.notResizable ?
      "" : e) + '"\x3e' + d + "\x3c/div\x3e";
  k = "";
  k = "Bottom" == this.direction ? d + b : b + d;
  this.container.append('\x3cdiv id\x3d"imajnetDockingMainContainer_' + g + '" class\x3d"imajnetDockingMainContainer imajnetDockingMainContainer_' + this.direction + '" style\x3d"' + (c.left || 0 == c.left ? "left: " + c.left + "px;" : "") + (c.right || 0 == c.right ? "right: " + c.right + "px;" : "") + (c.top || 0 == c.top ? "top: " + c.top + "px;" : "") + (c.bottom || 0 == c.bottom ? "bottom: " + c.bottom + "px;" : "") + '"\x3e' + k + '\x3cdiv class\x3d"clear' + e + '"\x3e\x3c/div\x3e\x3c/div\x3e');
  resizeChildElements(this);
  this.positionOnTop = function (f) {
    this.mainContainer.css("top", f)
  };
  this.setPinCollapsedImageUrl = function (f) {
    f.css("background-image", "url('" + ImajnetUI.getImagesPath() + "img/imageIcons/toolbarPinPointCollapsed.png')")
  };
  this.setPinExpandedImageUrl = function (f) {
    f.css("background-image", "url('" + ImajnetUI.getImagesPath() + "img/imageIcons/toolbarPinPointExpanded.png')")
  };
  this.onDockingButtonDisabled = function (f, h) {
    Nigsys.setCookie("IMAJNET", "DOCKING_" + this.type, "false");
    this.setPinCollapsedImageUrl(f);
    this.css.notResizable ? this.collapseContainer({data: {type: h}}) : Nigsys.onMobile() || ("header" == this.type ? (this.rightContainer.removeClass("overflowVisible"), this.mainContainer.bind("mouseenter", {type: this.type}, this.expandTopContainer), this.mainContainer.bind("mouseleave", {type: this.type}, this.collapseTopContainer), CommonCore.applyContainerDimension(0, !0)) : (this.mainContainer.bind("mouseenter", {type: this.type}, this.expandContainer), this.mainContainer.bind("mouseleave", {type: this.type}, this.collapseContainer)))
  };
  this.onDockingButtonEnabled = function (f, h) {
    Nigsys.setCookie("IMAJNET", "DOCKING_" + this.type, "true");
    this.setPinExpandedImageUrl(f);
    this.css.notResizable ? this.expandContainer({data: {type: h}}) : "header" == this.type ? (this.rightContainer.addClass("overflowVisible"), this.mainContainer.unbind({
      mouseenter: this.expandTopContainer,
      mouseleave: this.collapseTopContainer
    }), CommonCore.applyContainerDimension(this.css.width, !0)) : this.mainContainer.unbind({
      mouseenter: this.expandContainer,
      mouseleave: this.collapseContainer
    })
  };
  this.dockingButtonIsEnabled = function (f) {
    return -1 !== f.css("background-image").indexOf("Expanded")
  };
  this.onDockingButtonPressed = function (f) {
    var h = jQuery(f.target), a = h.attr("id").replace("imajnetDockingButton_", ""), l = ImajnetUI.docking[a];
    l.dockingButtonIsEnabled(h) ? (l.onDockingButtonDisabled(h, a), Nigsys.onMobile() && (f.preventDefault(), l.collapseContainer({data: {type: a}}))) : (l.onDockingButtonEnabled(h, a), Nigsys.onMobile() && (f.preventDefault(), l.expandContainer({data: {type: a}})))
  };
  Nigsys.bindClickEvent(jQuery("#imajnetDockingButton_" +
    g), this.onDockingButtonPressed);
  this.mainContainer = jQuery("#imajnetDockingMainContainer_" + g);
  this.leftContainer = jQuery("#imajnetDockingLeftContainer_" + g);
  this.rightContainer = jQuery("#imajnetDockingRightContainer_" + g);
  this.leftContainer.addClass("imajnetDockingLeftContainer");
  this.rightContainer.addClass("imajnetDockingRightContainer");
  "header" != this.type && (this.getDirectionData = function (f) {
    var h = {direction: "", css: null}, a = this.mainContainer.parent(), l = a.width(), a = a.height(),
      b = f.position.left - this.mainContainer.parent().scrollLeft(),
      c = f.position.top - this.mainContainer.parent().scrollTop();
    this.rightContainer.width() && this.rightContainer.height() && (this.leftContainer.hasClass("Left") || this.leftContainer.hasClass("Right") ? (b += this.css.width / 2, c += this.css.height / 2) : (b += this.css.height / 2, c += this.css.width / 2));
    b <= l / 2 && c <= a / 2 ? b < c ? (h.direction = "Left", h.css = {
      left: 0,
      top: f.position.top
    }) : (h.direction = "Top", h.css = {
      left: f.position.left,
      top: 0
    }) : b >= l / 2 && c <= a / 2 ? l - b < c ? (h.direction = "Right", h.css = {
      right: 0,
      top: f.position.top
    }) : (h.direction = "Top",
      h.css = {
        left: f.position.left,
        top: 0
      }) : b <= l / 2 && c >= a / 2 ? b < a - c ? (h.direction = "Left", h.css = {
      left: 0,
      top: f.position.top
    }) : (h.direction = "Bottom", h.css = {
      left: f.position.left,
      bottom: 0
    }) : b >= l / 2 && c >= a / 2 && (l - b < a - c ? (h.direction = "Right", h.css = {
        right: 0,
        top: f.position.top
      }) : (h.direction = "Bottom", h.css = {left: f.position.left, bottom: 0}));
    return h
  }, this.mainContainer.draggable({
    delay: 400,
    containment: "parent",
    snap: "#" + this.mainContainer.parent().attr("id"),
    scroll: !1,
    start: function (f, h) {
      var a = ImajnetUI.docking[jQuery(f.target).attr("id").replace("imajnetDockingMainContainer_",
        "")];
      if (f.originalEvent.target.id != a.leftContainer.attr("id"))return !1;
      jQuery(f.target).css("right", "auto")
    },
    stop: function (f, h) {
      var a = ImajnetUI.docking[jQuery(f.target).attr("id").replace("imajnetDockingMainContainer_", "")],
        b = a.getDirectionData(h);
      if (b.direction && b.css) {
        var c = a.direction;
        a.direction = b.direction;
        if ("imageLRSGUI" == a.type) {
          var d = a.getOrientation();
          ImajnetUI.LRSGUI.orientation != d && (ImajnetUI.LRSGUI.orientation = d, ImajnetUI.LRSGUI.redraw())
        }
        a.css.left = b.css.left;
        a.css.top = b.css.top;
        a.css.right =
          b.css.right;
        a.css.bottom = b.css.bottom;
        ("Bottom" == c && "Bottom" != a.direction || "Bottom" != c && "Bottom" == a.direction) && a.mainContainer.children().each(function () {
          jQuery(this).prependTo(a.mainContainer)
        });
        c = b = 0;
        "Left" != a.direction && "Right" != a.direction || a.css.notResizable ? (b = a.css.height, c = a.css.width) : (b = a.css.width, c = a.css.height);
        resizeChildElements(a);
        var e = a.mainContainer.parent(), d = e.width(), g = e.height(), e = {};
        "undefined" === typeof a.css.left ? a.mainContainer.css("left", "auto") : (a.css.left + b > d && (a.css.left =
          d - b), a.mainContainer.css("left", a.css.left), e.left = a.css.left);
        "undefined" === typeof a.css.top ? a.mainContainer.css("top", "auto") : (a.css.top + c > g && (a.css.top = g - c), a.mainContainer.css("top", a.css.top), e.top = a.css.top);
        "undefined" === typeof a.css.right ? a.mainContainer.css("right", "auto") : (a.css.right + b > d && (a.css.right = d - b), a.mainContainer.css("right", a.css.right), e.right = a.css.right);
        "undefined" === typeof a.css.bottom ? a.mainContainer.css("bottom", "auto") : (a.css.bottom + c > g && (a.css.bottom = g - c), a.mainContainer.css("bottom",
          a.css.bottom), e.bottom = a.css.bottom);
        a.previousCss = a.css;
        b = jQuery("#imajnetDockingButton_" + a.type);
        -1 !== b.prop("style").background.indexOf("Collapsed") ? a.setPinCollapsedImageUrl(b) : a.setPinExpandedImageUrl(b);
        Nigsys.setCookie("IMAJNET", "DOCKING_" + a.type + "_position", e);
        if (a.css.notResizable) b = 0 < a.rightContainer.height(), a.cornerTitle(b), "Left" != a.direction && "Right" != a.direction || b ? removeVertically(a) : setVertically(a); else if (a.leftContainer.uncorner(), a.rightContainer.uncorner(), a.corner(), a.rightContainer.height() ?
            (a.leftContainer.uncorner(), b = null, c = !1, "Left" == a.direction || "Right" == a.direction ? (c = a.leftContainer.hasClass("Top") || a.leftContainer.hasClass("Bottom"), onExpandComplete(a)) : (b = onExpandComplete, c = a.leftContainer.hasClass("Left") || a.leftContainer.hasClass("Right")), c && a.expandContainer({data: {type: a.type}}, b)) : onExpandComplete(a), a.mainContainer.removeClass("imajnetDockingMainContainer_Left").removeClass("imajnetDockingMainContainer_Right").removeClass("imajnetDockingMainContainer_Top").removeClass("imajnetDockingMainContainer_Bottom").addClass("imajnetDockingMainContainer_" +
            a.direction), a.onParentScroll) a.onParentScroll()
      }
    }
  }));
  this.corner = function () {
    Nigsys.browserIsIE7() || Nigsys.browserIsIE8() || "header" == this.type || ("Left" == this.direction ? (this.leftContainer.corner("right"), this.rightContainer.corner("right")) : "Top" == this.direction ? (this.leftContainer.corner("bottom"), this.rightContainer.corner("bottom")) : "Right" == this.direction ? (this.leftContainer.corner("left"), this.rightContainer.corner("left")) : "Bottom" == this.direction && (this.leftContainer.corner("top"), this.rightContainer.corner("top")))
  };
  this.cornerTitle = function (b) {
    Nigsys.browserIsIE7() || Nigsys.browserIsIE8() || "header" == this.type || (this.leftContainer.uncorner(), this.rightContainer.uncorner(), "Left" == this.direction ? (this.leftContainer.corner("tr"), b || this.leftContainer.corner("br"), this.rightContainer.corner("br")) : "Top" == this.direction ? b ? this.rightContainer.corner("bottom") : this.leftContainer.corner("bottom") : "Right" == this.direction ? (this.leftContainer.corner("tl"), b || this.leftContainer.corner("bl"), this.rightContainer.corner("bl")) :
      "Bottom" == this.direction && (b ? this.rightContainer.corner("top") : this.leftContainer.corner("top")))
  };
  this.corner();
  this.resize = function (b) {
    var c = ImajnetUI.docking[this.type], a;
    for (a in b)c.css[a] = b[a];
    thisObject.expandContainer({data: {type: thisObject.type}})
  };
  this.getOrientation = function () {
    return "Left" == this.direction || "Right" == this.direction ? "portrait" : "landscape"
  };
  this.expandContainer = function (b, c) {
    if (b.data.type) {
      var a = ImajnetUI.docking[b.data.type];
      Nigsys.browserIsIE7() || Nigsys.browserIsIE8() ||
      a.leftContainer.uncorner();
      a.leftContainer.stop(1);
      a.rightContainer.stop(1);
      var d = 0, e = 0, g = 0, k = 0;
      a.css.notResizable ? (a.cornerTitle(!0), removeVertically(a), d = a.css.height, a.leftContainer.animate({width: d}, 0), e = dockingLeftContainerSize, g = a.css.height, k = a.css.width) : "Left" == a.direction || "Right" == a.direction ? (e = a.css.height, g = a.css.width, k = a.css.height) : (e = dockingLeftContainerSize, g = a.css.height, k = a.css.width);
      d = d ? d : a.leftContainer.width();
      0 >= d && ("imageButtons" == a.type || "imageLRSGUI" == a.type) && (d = dockingLeftContainerSize);
      a.leftContainer.animate({height: e}, getAnimateTime(a), function () {
        "Right" == a.direction && ("imajnetTimeframe" == a.type ? a.mainContainer.width(g) : a.mainContainer.width(d + g))
      });
      e = Object({height: k});
      "header" != a.type && jQuery.extend(e, Object({width: g}));
      a.rightContainer.animate(e, getAnimateTime(a), function () {
        "mapControls" == b.data.type && jQuery("#mapControlsContainer").css("position", "absolute");
        "function" === typeof c && c(a)
      });
      "Right" != a.direction && a.mainContainer.css("width", "auto")
    }
  };
  this.collapseContainer = function (b) {
    if (b.data.type) {
      var c =
        ImajnetUI.docking[b.data.type];
      c.rightContainer.stop(1);
      c.leftContainer.stop(1);
      if ("mapControls" == b.data.type) jQuery("#mapControlsContainer").css("position", "static"); else if (c.css.notResizable) {
        b = c.leftContainer.children(".imajnetDockingLeftTitleContainer");
        var a = b.html();
        a && (-1 === a.indexOf("\x26nbsp;") && b.html(a + "\x26nbsp;"), c.leftContainer.css("width", "auto"))
      }
      c.css.notResizable ? (c.cornerTitle(!1), "Left" == c.direction || "Right" == c.direction ? setVertically(c) : removeVertically(c)) : c.leftContainer.animate({height: dockingLeftContainerSize},
        null, function () {
          c.corner()
        });
      b = Object({height: 0});
      "header" != c.type && jQuery.extend(b, Object({width: 0}));
      c.rightContainer.animate(b)
    }
  };
  this.expandTopContainer = function (b) {
    0 != b.pageY && (jQuery("#imajnetSettingsMenu li div select").show(), b = ImajnetUI.docking[b.data.type], b.rightContainer.stop(1), b.rightContainer.animate({height: "Left" == b.direction || "Right" == b.direction ? b.css.height : b.css.width}))
  };
  this.collapseTopContainer = function (b) {
    b = ImajnetUI.docking[b.data.type];
    b.leftContainer.stop(1);
    b.rightContainer.animate({height: 0},
      null, function () {
        jQuery("#imajnetSettingsMenu li ul.menuItem").hide();
        jQuery("#imajnetSettingsMenu li div select").hide()
      })
  };
  this.remove = function () {
    this.mainContainer.remove();
    ImajnetUI.docking[this.type] = null
  };
  return this
};
function keepDockingInsideParent () {
  for (var b in ImajnetUI.docking)if (ImajnetUI.docking[b]) {
    var d = ImajnetUI.docking[b], e = d.container.width();
    if (e) {
      var g = d.css.height;
      if (("Top" == d.direction || "Bottom" == d.direction) && d.css.left + g > e) {
        var c = e - g;
        -1 < c && d.mainContainer.css("left", e - g)
      }
    }
    if (e = d.container.height() - ("imageLRSGUI" == d.type ? 55 : 0)) g = d.css.height, ("Left" == d.direction || "Right" == d.direction) && d.css.top + g > e && (c = e - g, -1 < c && d.mainContainer.css("top", c))
  }
}
function resizeChildElements (b) {
  "mapEditButtons" == b.type && ("Left" != b.direction && "Right" != b.direction || b.css.notResizable ? jQuery(".mustResize").css("width", "auto") : jQuery(".mustResize").width(b.css.width - 5))
}
function onExpandComplete (b) {
  b.leftContainer.removeClass("Left").removeClass("Top").removeClass("Right").removeClass("Bottom").addClass(b.direction);
  b.rightContainer.removeClass("Left").removeClass("Top").removeClass("Right").removeClass("Bottom").addClass(b.direction)
}
function getAnimateTime (b) {
  return b.css.notResizable ? 0 : 400
}
function setVertically (b) {
  var d = b.leftContainer.children(".imajnetDockingLeftTitleContainer"), e = 15 * d.html().length;
  d.height(e).addClass("textVertically");
  b.leftContainer.addClass("textVertically");
  b.leftContainer.animate({height: e + dockingLeftContainerSize}, null, function () {
    b.corner()
  })
}
function removeVertically (b) {
  b.leftContainer.children(".imajnetDockingLeftTitleContainer").height(dockingLeftContainerSize).removeClass("textVertically");
  b.leftContainer.height(dockingLeftContainerSize).removeClass("textVertically")
}
CheckDockingCookie = function (b) {
  var d = ImajnetUI.docking[b];
  if (d) {
    var e = Nigsys.getCookie("IMAJNET", "DOCKING_" + b);
    if ("true" == e || null === e && !d.css.notResizable) d.expandContainer({data: {type: b}}), d.onDockingButtonEnabled(jQuery("#imajnetDockingButton_" + b), b); else d.onDockingButtonDisabled(jQuery("#imajnetDockingButton_" + b), b);
    keepDockingInsideParent()
  }
};
var ImajnetTimeframe = {
  setTimeframeFrom: function (a) {
    a = jQuery("#imajnetTimeframeFromDate");
    var b = jQuery("#imajnetTimeframeToDate");
    Nigsys.endDateIsBeforeStartDate(Nigsys.formatJavascriptDateToJava(a.val()).replace(Nigsys.dateZ, ""), Nigsys.formatJavascriptDateToJava(b.val()).replace(Nigsys.dateZ, "")) && b.val(a.val())
  }, setTimeframeTo: function (a) {
    a = jQuery("#imajnetTimeframeFromDate");
    var b = jQuery("#imajnetTimeframeToDate");
    Nigsys.endDateIsBeforeStartDate(Nigsys.formatJavascriptDateToJava(a.val()).replace(Nigsys.dateZ,
      ""), Nigsys.formatJavascriptDateToJava(b.val()).replace(Nigsys.dateZ, "")) && a.val(b.val())
  }, getTimeframeText: function (a) {
    return a ? Nigsys.formatGeoserverDate(a.from) + " - " + Nigsys.formatGeoserverDate(a.to) : jQuery.imajnet.timeframe.title
  }, setTimeframeText: function (a) {
    jQuery("#imajnetDockingLeftTitleContainer_imajnetTimeframe").html(this.getTimeframeText(a))
  }, getNextDayDate: function (a) {
    a = a.split("-");
    a = new Date(a[0], a[1] - 1, a[2]);
    a = new Date(a.setDate(a.getDate() + 1));
    var b = a.getMonth() + 1;
    10 > b && (b = "0" + b);
    return a.getFullYear() + "-" + b + "-" + a.getDate()
  }, getTimeframe: function () {
    return ImajnetSettings.timeframe ? Object({
      from: ImajnetSettings.timeframe.from,
      to: this.getNextDayDate(ImajnetSettings.timeframe.to)
    }) : null
  }, getTimeframeFromInput: function () {
    var a = jQuery("#imajnetTimeframeFromDate").val(), b = jQuery("#imajnetTimeframeToDate").val();
    return a && b ? Object({
      from: Nigsys.formatJavascriptDateToJava(a).replace(Nigsys.dateZ, ""),
      to: Nigsys.formatJavascriptDateToJava(b).replace(Nigsys.dateZ, "")
    }) : null
  }, setTimeframe: function (a) {
    this.setTimeframeText(a);
    ImajnetSettings.timeframe = a;
    a && a.from && a.to ? ImajnetMap.currentPosition && (ImajnetZoom.left = -1, Nigsys.showLoading(ImajnetUI.imageContainer), ImajnetAPI.setImajnetImage({position: ImajnetMap.currentPosition}), ImajnetPlugin.redrawLayer(ImajnetMap.imajnetLayer)) : ImajnetPlugin.redrawLayer(ImajnetMap.imajnetLayer)
  }
};
var ImajnetEvents = {
  mappingObject: {},
  positionChangeEventName: "POI_IMAGE_CHANGE",
  languageChanageEventName: "LANGUAGE_CANGE"
};
var ImajnetUI = {
  imageContainer: null,
  imageSwitcherContainer: null,
  helpContainer: null,
  aboutImajnetContainer: null,
  settingsContainer: null,
  sequenceDetails: null,
  imageDetails: null,
  groundPlaneDetails: null,
  LRSGUI: null,
  imajnetImageContainer: null,
  imajnetImageContainerSize: {width: 480, height: 400},
  imajnetImageContainerInitialSize: {width: 480, height: 400},
  imageAspectRatio: 1,
  imajnetImage: null,
  previewImageContainer: null,
  previewImage: null,
  imajnetZoomOnShiftBox: null,
  imajnetZoomOnShiftBoxOffset: {x: 0, y: 0},
  imajnetToolbarButtons: null,
  btnImajnetPlugin: null,
  activeControlButton: null,
  btnClosestImage: null,
  btnClosestImageDiv: null,
  btnClickMode: null,
  btnClickModeDiv: null,
  btnEnableClipboard: null,
  btnEnableClipboardDiv: null,
  btnLayoutImageSmall: null,
  btnLayoutImageSmallDiv: null,
  btnLayoutImageHalf: null,
  btnLayoutImageHalfDiv: null,
  btnLayoutImageBig: null,
  btnLayoutImageBigDiv: null,
  btnLayoutNoImage: null,
  btnLayoutNoImageDiv: null,
  btnLayoutCustom: null,
  btnLayoutCustomDiv: null,
  btnLayoutResetToDefault: null,
  btnLayoutResetToDefaultDiv: null,
  imageContainerId: "popupImajnet",
  searchLRSContainer: null,
  searchLRSContainerId: null,
  searchLRSContainerIdDefault: "searchLRSContainerId",
  searchAddressContainer: null,
  searchAddressContainerId: null,
  searchAddressContainerIdDefault: "searchAddressContainerId",
  clipboardContainer: null,
  clipboardContainerId: null,
  clipboardContainerIdDefault: "clipboardContainerId",
  clipboardExportContainer: null,
  clipboardExportContainerId: null,
  clipboardExportContainerIdDefault: "clipboardExportContainerId",
  newsContainer: null,
  newsContainerId: null,
  newsContainerIdDefault: "newsContainerId",
  helpContainerId: "popupHelp",
  aboutImajnetContainerId: "popupAboutImajnet",
  settingsContainerId: "popupImajnetSettings",
  settingsLRSContainerId: "popupImajnetLRSSettings",
  sequenceDetailsId: "popupSequenceDetails",
  imageDetailsId: "popupImageDetails",
  groundPlaneDetailsId: "popupGroundPlaneDetails",
  popupImajnetControlsLayer: null,
  imageSwitcherImageContainer: null,
  imageSwitcherImage: null,
  imajnetImageSliderContainer: null,
  imajnetImageSliderInnerContainer: null,
  sliderLeftImageContainer: null,
  sliderRightImageContainer: null,
  sliderLeftImage: null,
  sliderRightImage: null,
  allowKeyUp: !0,
  zoomCancel: !1,
  controlActivatorContainers: [],
  LRSGUIcontainerHTML: '\x3cdiv id\x3d"imajnetLRSGUI" class\x3d"imajnetLRSGUI"\x3e\x3c/div\x3e\x3cdiv id\x3d"imajnetLRSDragGUI" class\x3d"imajnetLRSGUI opacity0"\x3e\x3c/div\x3e',
  imageDate: "",
  imageDateContainer: null,
  imageNavigationTimer: null,
  swipeImageTimeout: 100,
  dragImageSliderPrevX: -1,
  lastMouseCoordinates: null,
  imagesLoadQueue: [],
  docking: {
    header: null, imageButtons: null, imageLRSGUI: null, imajnetButtons: null,
    imajnetMapButtons: null, imajnetTimeframe: null, mapToolsButtons: null, mapEditButtons: null
  },
  getImagesPath: function () {
    return Imajnet.imajnetPath
  },
  initContainer: function (a) {
    ImajnetUI[a + "Id"] || (ImajnetUI[a + "Id"] = ImajnetUI[a + "IdDefault"], jQuery("body").append('\x3cdiv id\x3d"' + ImajnetUI[a + "Id"] + '"\x3e\x3c/div\x3e'));
    ImajnetUI[a] = jQuery("#" + ImajnetUI[a + "Id"]);
    ImajnetUI[a].addClass("imajnetItem")
  },
  addMobileCss: function () {
    var a = Nigsys.getWindowSize().width;
    1150 < a || (jQuery("#imajnetSettingsMenu").width(930 < a ?
      a : 930), jQuery("#imajnetDockingRightContainer_header").css({
      "overflow-x": "auto",
      "overflow-y": "hidden"
    }), jQuery("#imajnetPOI").width(80), jQuery("#logoutButton").css("margin-top", -1))
  },
  init: function () {
    ImajnetUI.imageContainer && (Photogrammetry.exportToItemContent = '\x3cdiv class\x3d"leftLabel left"\x3e' + jQuery.imajnet.map.clipboard.popupExport.to + ':\x26nbsp;\x3c/div\x3e\x3cdiv class\x3d"left"\x3e\x3cinput type\x3d"text" class\x3d"imajnetExportTo" /\x3e\x3c/div\x3e', FlatPhotogrammetry.exportToItemContent =
      Photogrammetry.exportToItemContent, CubePhotogrammetry.exportToItemContent = Photogrammetry.exportToItemContent, this.createImageContainer(), this.initLRSGUIDocking(ImajnetLRSGUIWidth, ImajnetLRSGUIHeight), this.LRSGUI = ImajnetLRSGUI({
      id: "imajnetLRSGUI",
      dragId: "imajnetLRSDragGUI",
      orientation: ImajnetUI.docking.imageLRSGUI.getOrientation()
    }))
  },
  initAddressContainer: function () {
    ImajnetUI.initContainer("searchAddressContainer")
  },
  initLRSContainer: function () {
    ImajnetUI.initContainer("searchLRSContainer");
    LRS.addLRSDialog()
  },
  initContainers: function () {
    ImajnetUI.imageContainer || (CubePlugin && CubePlugin.cubeGeometry && (CubePlugin.cubeGeometry = null), ImajnetUI.imageContainer = jQuery("#" + ImajnetUI.imageContainerId), ImajnetUI.imageContainer.hide(), ImajnetUI.imageContainer.addClass("imajnetImageContainer").css("position", "relative"), ImajnetUI.initContainer("clipboardContainer"), ImajnetUI.initContainer("clipboardExportContainer"), ImajnetUI.initAddressContainer(), ImajnetUI.initLRSContainer(), ImajnetUI.clipboardExportContainer.hide(),
      ImajnetUI.initContainer("newsContainer"), ImajnetUI.clipboardContainer.hide(), ImajnetUI.helpContainer = jQuery("#" + ImajnetUI.helpContainerId), ImajnetUI.helpContainer.hide(), ImajnetUI.aboutImajnetContainer = jQuery("#" + ImajnetUI.aboutImajnetContainerId), ImajnetUI.aboutImajnetContainer.hide(), ImajnetUI.settingsContainer = jQuery("#" + ImajnetUI.settingsContainerId), ImajnetUI.settingsContainer.addClass("popupImajnetSettings"), ImajnetUI.settingsContainer.hide(), ImajnetUI.settingsLRSContainer = jQuery("#" + ImajnetUI.settingsLRSContainerId),
      ImajnetUI.settingsLRSContainer.hide(), ImajnetUI.sequenceDetails = jQuery("#" + ImajnetUI.sequenceDetailsId), ImajnetUI.sequenceDetails.hide(), ImajnetUI.imageDetails = jQuery("#" + ImajnetUI.imageDetailsId), ImajnetUI.imageDetails.hide(), ImajnetUI.groundPlaneDetails = jQuery("#" + ImajnetUI.groundPlaneDetailsId), ImajnetUI.groundPlaneDetails.hide(), ImajnetUI.appendClipboarContainerHTML(), "function" === typeof ImajnetUI.imageContainer.disableSelection && (ImajnetUI.imageContainer.disableSelection(), ImajnetUI.imageContainer.parent().disableSelection()))
  },
  initLRSGUIDocking: function (a, b) {
    ImajnetUI.docking.imageLRSGUI && ImajnetUI.docking.imageLRSGUI.remove();
    ImajnetUI.docking.imageLRSGUI = new ImajnetDocking(ImajnetUI.imageContainer, this.LRSGUIcontainerHTML, "Left", "imageLRSGUI", {
      width: a,
      height: b,
      left: 0,
      top: 40
    });
    CheckDockingCookie("imageLRSGUI");
    this.LRSGUI && this.LRSGUI.positionTop()
  },
  showNotificationInfo: function (a, b, c, d, e, f) {
    b || (b = "");
    this.showNotificationInfoOk(a, b, c, d, e, f)
  },
  showNotificationInfoOk: function (a, b, c, d, e, f) {
    Nigsys.notification.html("");
    a =
      Nigsys.notification.notify("create", "notificationInfoOk", {title: a, text: b}, {
        expires: !1,
        beforeopen: function (a, b) {
          Nigsys.positionNotification(c);
          "function" === typeof d && d(a, b)
        },
        open: function (a, b) {
          Nigsys.positionNotification(c);
          "function" === typeof e && e(a, b)
        },
        click: function (a, b) {
          b.close();
          "function" === typeof f && f(a, b)
        }
      });
    Nigsys.notification.show();
    return a
  },
  hideNotificationInfoOk: function () {
    Nigsys.notification && Nigsys.notification.hide()
  },
  highlightContainer: function (a) {
    a && (a.removeClass("opacity100"), a.addClass("opacity60"))
  },
  unHighlightContainer: function (a) {
    a && (a.removeClass("opacity60"), a.addClass("opacity100"))
  },
  getSequenceDeatilsHTML: function () {
    return '\x3cdiv\x3e\x3cdiv class\x3d"left sequenceDetailsLeft"\x3e' + jQuery.imajnet[ImajnetUI.sequenceDetailsId].name + '\x3c/div\x3e\x3cdiv class\x3d"left"\x3e\x3cinput type\x3d"text" id\x3d"sequenceDetailsName" size\x3d"45" /\x3e\x3c/div\x3e\x3cdiv class\x3d" clear"\x3e\x3c/div\x3e\x3cdiv class\x3d"left sequenceDetailsLeft"\x3e' + jQuery.imajnet[ImajnetUI.sequenceDetailsId].project +
      '\x3c/div\x3e\x3cdiv class\x3d"left"\x3e\x3cinput type\x3d"text" id\x3d"sequenceDetailsProject" size\x3d"45" /\x3e\x3c/div\x3e\x3cdiv class\x3d" clear"\x3e\x3c/div\x3e\x3cdiv class\x3d"left sequenceDetailsLeft"\x3e' + jQuery.imajnet[ImajnetUI.sequenceDetailsId].operator + '\x3c/div\x3e\x3cdiv class\x3d"left"\x3e\x3cinput type\x3d"text" id\x3d"sequenceDetailsOperator" size\x3d"45" /\x3e\x3c/div\x3e\x3cdiv class\x3d" clear"\x3e\x3c/div\x3e\x3cdiv class\x3d"left sequenceDetailsLeft"\x3e' + jQuery.imajnet[ImajnetUI.sequenceDetailsId].repository +
      '\x3c/div\x3e\x3cdiv class\x3d"left"\x3e\x3cinput type\x3d"text" id\x3d"sequenceDetailsRepository" size\x3d"45" /\x3e\x3c/div\x3e\x3cdiv class\x3d" clear"\x3e\x3c/div\x3e\x3cdiv class\x3d"left sequenceDetailsLeft"\x3e' + jQuery.imajnet[ImajnetUI.sequenceDetailsId].location + '\x3c/div\x3e\x3cdiv class\x3d"left"\x3e\x3cinput type\x3d"text" id\x3d"sequenceDetailsLocation" size\x3d"45" /\x3e\x3c/div\x3e\x3cdiv class\x3d" clear"\x3e\x3c/div\x3e\x3cdiv style\x3d"width: 100%; text-align: center"\x3e\x3cinput type\x3d"button" value\x3d"' +
      jQuery.imajnet.button.close + '" onclick\x3d"ImajnetUI.hideItem(ImajnetUI.sequenceDetailsId);" /\x3e\x3c/div\x3e\x3c/div\x3e'
  },
  sequenceDetailsReceived: function (a) {
    ImajnetUI.sequenceDetails.html(ImajnetUI.getSequenceDeatilsHTML());
    a = JSON.parse(a);
    jQuery("#sequenceDetailsName").val(a.sequence.name);
    jQuery("#sequenceDetailsProject").val(a.sequence.projectInfo);
    jQuery("#sequenceDetailsOperator").val(a.sequence.operator);
    jQuery("#sequenceDetailsRepository").val(a.sequence.repositoryLocation);
    jQuery("#sequenceDetailsLocation").val(a.sequence.location);
    ImajnetUI.showItem(ImajnetUI.sequenceDetailsId)
  },
  showSequenceDetails: function () {
    ImajnetUI.closeAllMenus();
    ImajnetMap.currentPosition ? ImajnetAPI.doImajnetRequest("GET", "/api/sequence/details?image\x3d" + ImajnetMap.currentPosition.id, null, ImajnetUI.sequenceDetailsReceived) : (jQuery("#sequenceDetailsName").val(""), jQuery("#sequenceDetailsProject").val(""), jQuery("#sequenceDetailsOperator").val(""), jQuery("#sequenceDetailsRepository").val(""), jQuery("#sequenceDetailsLocation").val(""))
  },
  showReimportSequence: function () {
    ImajnetUI.closeAllMenus();
    ImajnetMap.currentPosition && ImajnetAPI.doImajnetRequest("GET", "/api/sequence/details?image\x3d" + ImajnetMap.currentPosition.id, null, function (a) {
      window.open(ImajnetUI.getManagerUrl() + "app/data/sequence?operation\x3dreimport\x26sequenceid\x3d" + JSON.parse(a).sequence.id, "_blank")
    })
  },
  showDeleteSequence: function () {
    ImajnetUI.closeAllMenus();
    ImajnetMap.currentPosition && ImajnetAPI.doImajnetRequest("GET", "/api/sequence/details?image\x3d" + ImajnetMap.currentPosition.id, null, function (a) {
      window.open(ImajnetUI.getManagerUrl() +
        "app/data/sequence?operation\x3ddelete\x26sequenceid\x3d" + JSON.parse(a).sequence.id, "_blank")
    })
  },
  showCreatePOI: function () {
    ImajnetUI.closeAllMenus();
    ImajnetMap.currentPosition && window.open(ImajnetUI.getManagerUrl() + "app/poi?imageid\x3d" + ImajnetMap.currentPosition.id, "_blank")
  },
  getManagerUrl: function () {
    return -1 != applicationDomain.indexOf("test.imajnet.net") ? "https://testmanager.imajnet.net/" : -1 != applicationDomain.indexOf("web.imajnet.net") ? "https://management.imajnet.net/" : applicationDomain + "imajnet-manager/"
  },
  closeAllMenus: function () {
    jQuery(".menu").menu("collapseAll", null, !0)
  },
  showHelp: function () {
    ImajnetUI.showItem(ImajnetUI.helpContainerId, 500, 450);
    ImajnetUI.helpContainer.html('\x3cdiv style\x3d"text-align: center;"\x3e\x3ca href\x3d"http://imajnet.net/userguide/UG_IMAJNET_' + Imajnet.locale.toUpperCase() + '.pdf" target\x3d"_blank" class\x3d"imajnetLink"\x3e' + jQuery.imajnet.downloadDocument + "\x3c/a\x3e\x3c/div\x3e" + jQuery.imajnet.help);
    jQuery("#helpImajnetTraceImage").attr("src", Imajnet.imajnetPath + "img/imageIcons/imajnetTrace.png?" +
      Imajnet.version);
    jQuery("#helpImajnetClosestModeImage").attr("src", Imajnet.imajnetPath + "img/imageIcons/closestImageMode.png?" + Imajnet.version);
    jQuery("#helpImajnetClickModeImage").attr("src", Imajnet.imajnetPath + "img/imageIcons/clickMode.png?" + Imajnet.version);
    ImajnetUI.closeAllMenus()
  },
  showAboutImajnet: function () {
    var a = '\x3cdiv style\x3d"width: 200px; height: 60px; margin: auto;"\x3e\x3cimg src\x3d"' + Imajnet.imajnetPath + "img/imajnetLogoMediumBlue.png?" + Imajnet.version + '" width\x3d"200" height\x3d"60" /\x3e\x3c/div\x3e\x3cdiv\x3e' +
      jQuery.imajnet.aboutImajnet + '\x3c/div\x3e\x3cdiv style\x3d"text-align: center; font-size: 15px; font-weight: bold; margin: 10px 0 0 0;"\x3e\x3cspan\x3e' + jQuery.imajnet.productOf + '\x26nbsp;\x3c/span\x3e\x3c/div\x3e\x3cdiv style\x3d"text-align: center;"\x3e\x3ca href\x3d"http://' + jQuery.imajnet.link + '" target\x3d"_blank" class\x3d"imajnetLink"\x3e\x3cimg src\x3d"' + Imajnet.imajnetPath + "img/imajingLogo.png?" + Imajnet.version + '" align\x3d"top" /\x3e\x3c/a\x3e\x3c/div\x3e\x3cdiv style\x3d"text-align: center;"\x3e\x3ca href\x3d"http://' +
      jQuery.imajnet.link + '" target\x3d"_blank" class\x3d"imajnetLink"\x3e' + jQuery.imajnet.link + '\x3c/a\x3e\x3c/div\x3e\x3cdiv style\x3d"font-size: 14px; height: 40px; margin-top: 5px;"\x3e' + jQuery.imajnet.version + ":\x26nbsp;\x3cb\x3e" + VERSION + "\x3c/b\x3e\x3cbr/\x3e" + jQuery.imajnet.buildDate + ":\x26nbsp;\x3cb\x3e" + BUILD_DATE + "\x3c/b\x3e\x3c/div\x3e";
    ImajnetUI.showItem(ImajnetUI.aboutImajnetContainerId, 500, 380);
    ImajnetUI.aboutImajnetContainer.html(a);
    ImajnetUI.closeAllMenus()
  },
  getPreviewImageResolution: function () {
    var a =
        ImajnetSettings.imajnetImageResolutions[ImajnetSettings.imajnetSettings.imageQuality],
      b = ImajnetUI.imajnetImage.attr("src"), c;
    for (c in ImajnetSettings.imajnetImageResolutions)if (-1 != b.indexOf(ImajnetSettings.imajnetImageResolutions[c])) {
      a = ImajnetSettings.imajnetImageResolutions[c];
      break
    }
    return a
  },
  getImageAspectRatio: function () {
    return ImajnetUI.imageAspectRatio
  },
  updateElementsWithAspectRatio: function () {
    ImajnetImageSwitcher.ORDERED_IMAGE_BIG_WIDTH = Math.round((jQuery("body").width() - 150) / ImajnetImageSwitcher.ORDERED_IMAGES_NO);
    ImajnetImageSwitcher.ORDERED_IMAGE_BIG_HEIGHT = Math.round(ImajnetImageSwitcher.ORDERED_IMAGE_BIG_WIDTH * (1 / ImajnetUI.getImageAspectRatio()));
    ImajnetImageSwitcher.isBigMode && ImajnetImageSwitcher.hideBigMode()
  },
  computeImageAspectRatio: function () {
    var a = ImajnetSettings.getImageResolution();
    if (a) {
      var a = a.toUpperCase(), b = ImajnetZoom[a + "_RESOLUTION_WIDTH"], a = ImajnetZoom[a + "_RESOLUTION_HEIGHT"];
      if (b && a) {
        ImajnetUI.imageAspectRatio = b / a;
        if (1.2 < ImajnetUI.imageAspectRatio || "CUBE" == ImageControler.currentImageType) ImajnetUI.imageAspectRatio =
          1.1941463414634146;
        ImajnetUI.updateElementsWithAspectRatio()
      }
    }
  },
  getImageDimensions: function (a, b) {
    var c = a / ImajnetUI.getImageAspectRatio();
    c > b && (c = b, a = c * ImajnetUI.getImageAspectRatio());
    return Object({width: parseInt(a), height: parseInt(c)})
  },
  getImageContainerDimesions: function () {
    var a = this.imajnetImageContainerSize, b = ImajnetPlugin.getMapSize();
    if (b && b.h) {
      var c = ImajnetUI.getImageAspectRatio();
      c && (a.height = b.h - 150, a.width = a.height ? parseInt(a.height * c) - 2 : Nigsys.browserIsIE7() ? 480 : null)
    }
    a.height < this.imajnetImageContainerInitialSize.height &&
    (a.height = this.imajnetImageContainerInitialSize.height);
    a.width < this.imajnetImageContainerInitialSize.width && (a.width = this.imajnetImageContainerInitialSize.width);
    return a
  },
  setSliderScrollLeft: function (a) {
    this.imajnetImageSliderInnerContainer.css("left", -(ImajnetUI.imajnetImageContainerSize.width + ImajnetImageSwitcher.dragArrowWidth))
  },
  setSliderDraggableContainment: function () {
    if (ImajnetUI.imajnetImageContainer) {
      var a = ImajnetUI.imajnetImageContainer.offset(), b = ImajnetUI.imajnetImageContainerSize.width +
        ImajnetImageSwitcher.dragArrowWidth, c = a.left - b, d = c;
      ImajnetImageSwitcher.dragLeftPosition && (d += b);
      ImajnetImageSwitcher.dragRightPosition && (c -= b);
      this.imajnetImageSliderInnerContainer.draggable("option", "containment", [c, a.top, d, a.top])
    }
  },
  getSliderLeftImage: function (a) {
    return '\x3cimg id\x3d"imajnetLayerLeftImage" src\x3d"' + a + '" class\x3d"imajnetLayerSliderImage" /\x3e'
  },
  getSliderRightImage: function (a) {
    return '\x3cimg id\x3d"imajnetLayerRightImage" src\x3d"' + a + '" class\x3d"imajnetLayerSliderImage" /\x3e'
  },
  onImageMouseDown: function () {
    if (!(Nigsys.isPositionMode() || Nigsys.isMeasurementMode() || Nigsys.isPolyligneMode())) {
      ImajnetUI.stopSwipeNavigation(!0);
      for (var a = 0; a < ImajnetUI.imagesLoadQueue.length;)ImajnetUI.imagesLoadQueue[a].onload = null, a++;
      ImajnetUI.imagesLoadQueue = [];
      ImajnetMap.lastLoadedImagePosition && (ImajnetMap.setCurrentPosition(ImajnetMap.lastLoadedImagePosition), ImajnetMap.setImajboxMarkerPosition({position: ImajnetMap.lastLoadedImagePosition}, !0), ImageControler.currentImageControl.doRequests(ImajnetMap.currentPosition))
    }
  },
  onImageClick: function (a) {
    Nigsys.disableEventPropagationFull(a);
    if (ImajnetUI.zoomCancel) ImajnetUI.zoomCancel = !1; else if (ImajnetZoom.imageWasDragged && Nigsys.browserIsIE7()) ImajnetZoom.imageWasDragged = !1; else if (!(Nigsys.isPolyligneMode() && "path" == a.target.nodeName && "constraintLine" != a.target.id || "imajnetErrorsPopupOKButton" == a.target.id || a.shiftKey)) {
      var b = ImajnetUI.imajnetImageContainer.offset(), c = a.pageX - b.left, b = a.pageY - b.top;
      switch (ImajnetUI.activeControlButton) {
        case "imajnetPosition":
          ImajnetPosition.positionObject(c,
            b);
          break;
        case "imajnetMeasurement":
          ImajnetMeasurement.measureObject(c, b);
          break;
        case "imajnetPolyligne":
          ImajnetPolyligne.positionObject(c, b)
      }
      ImajnetZoom.imageWasDragged = !1;
      ImageControler.currentPhotogrammetry.clearCommentTextarea(a)
    }
  },
  onImageDblClick: function (a) {
    if (a.target && ("popupImajnetImage" == a.target.id || "svg" == a.target.nodeName.toLowerCase()) && !Nigsys.isPositionMode() && !Nigsys.isMeasurementMode())if (1 == ImageControler.currentSurveyTrace.moveImageToClickPosition) ImageControler.currentSurveyTrace.onImageDbClick(a);
    else ImageControler.currentPhotogrammetry.addImageTag(a)
  },
  imajnetImageLayerMouseOver: function (a) {
    ImajnetUI.registerKeyboardEvents(a);
    LRS.onImageLRSMouseOut()
  },
  imajnetImageLayerMouseOut: function (a) {
    Nigsys.browserIsIE()
  },
  mouseMoveTimeout: null,
  imageContainerMouseMove: function (a) {
    ImajnetAPI.horizontalAngleRequest && ImajnetAPI.horizontalAngleRequest.abort();
    clearTimeout(ImajnetUI.mouseMoveTimeout);
    ImajnetUI.mouseMoveTimeout = null;
    ImajnetAPI.clearHorizontalAngle();
    ImajnetUI.mouseMoveTimeout = setTimeout(function () {
      var b =
        a.target.parentNode.getBoundingClientRect();
      ImajnetAPI.lastMouseCoordinates = {x: a.pageX - b.left, y: a.pageY - b.top};
      ImajnetAPI.getHorizontalAngle(ImajnetAPI.lastMouseCoordinates, ImajnetMap.currentPosition)
    }, 150)
  },
  imageContainerMouseLeave: function () {
    clearTimeout(ImajnetUI.mouseMoveTimeout);
    ImajnetAPI.clearHorizontalAngle();
    ImajnetAPI.lastMouseCoordinates = null;
    ImajnetImageSwitcher.orderedImagesMainContainer && ImajnetImageSwitcher.orderedImagesMainContainer.hide()
  },
  onDragEnd: function (a, b, c) {
    a = parseInt(a);
    b = parseInt(b);
    a >= b || (a == b - 1 && ImageControler.currentImageControl.resetFastNavigation(), window.ImageControler.currentImageControl[c](!1), a++, ImajnetUI.imageNavigationTimer = setTimeout("ImajnetUI.onDragEnd('" + a + "', '" + b + "', '" + c + "')", ImajnetUI.swipeImageTimeout))
  },
  stopSwipeNavigation: function (a) {
    ImajnetUI.imageNavigationTimer && (ImajnetUI.imajnetImageContainer.off("vmousedown", ImajnetUI.onImageMouseDown), clearTimeout(ImajnetUI.imageNavigationTimer), ImajnetUI.imageNavigationTimer = null, ImajnetAPI.imajnetOrderRequest &&
    (ImajnetAPI.imajnetOrderRequest.abort(), ImajnetAPI.imajnetOrderRequest = null), ImajnetAPI.lastNavigationPositionImageId = "")
  },
  enableSwipeHandlers: function () {
    ImajnetUI.imajnetImageContainer.swipe("enable")
  },
  disableSwipeHandlers: function () {
    Nigsys.onMobile() || ImajnetUI.imajnetImageContainer.swipe("disable")
  },
  navigateOnSwipe: function (a, b, c, d, e) {
    if (1 < e)return !0;
    ImajnetUI.imageNavigationTimer && (clearTimeout(ImajnetUI.imageNavigationTimer), ImajnetUI.imageNavigationTimer = null);
    if ("up" !== b && "down" !== b || 0 < ImajnetZoom.zoomLevel ||
      ImajnetUI.imajnetZoomOnShiftBox.is(":visible"))return !0;
    a = 1;
    c *= 1E3 / window.screen.availHeight;
    100 < c && (d = (c / d).toFixed(4), a = Math.floor(30 * d + .5), 1 > a && (a = 1));
    1 < a && (ImageControler.currentImageControl.setFastNavigation(), ImajnetUI.imajnetImageContainer.on("vmousedown", ImajnetUI.onImageMouseDown));
    if ("down" == b) ImajnetUI.onDragEnd(0, a, "getNext"); else if ("up" == b) ImajnetUI.onDragEnd(0, a, "getPrevious")
  },
  addSwipeHandlers: function () {
    if (Nigsys.onMobile() || Nigsys.isTouchDevice())if (ImajnetUI.imajnetImageContainer.swipe({
        swipe: function (a,
                         b, c, d, e) {
          ImajnetUI.navigateOnSwipe(a, b, c, d, e)
        }, threshold: 10, pinchIn: function (a, b, c, d, e, f, g) {
          ImajnetZoom.zoomOnPinch(a, g, 1, c)
        }, pinchOut: function (a, b, c, d, e, f, g) {
          ImajnetZoom.zoomOnPinch(a, g, -1, c)
        }, fingers: jQuery.fn.swipe.fingers.ALL
      }), Nigsys.onMobile())return;
    ImajnetUI.imajnetImageSliderContainer.on({
      vmousedown: function (a) {
        if ("svg" == a.target.nodeName || "popupImajnetImage" == a.target.id) ImajnetUI.swipeDragXStartPosition = a.offsetY, ImajnetUI.swipeDragXStartTime = new Date, a.preventDefault()
      }, vmouseup: function (a) {
        if ("svg" ==
          a.target.nodeName || "popupImajnetImage" == a.target.id) {
          var b = Math.abs(a.offsetY - ImajnetUI.swipeDragXStartPosition);
          40 < b && ImajnetUI.navigateOnSwipe(a, a.offsetY < ImajnetUI.swipeDragXStartPosition ? "up" : "down", b, new Date - ImajnetUI.swipeDragXStartTime, 1)
        }
      }
    })
  },
  createImageContainer: function () {
    if (this.imageContainer) {
      this.imageContainer.bind("mouseleave", this.imageContainerMouseLeave);
      this.imageContainer.html('\x3cdiv id\x3d"imajnetImageSliderContainer"\x3e\x3cdiv id\x3d"imajnetImageSliderInnerContainer"\x3e\x3cdiv id\x3d"imajnetLayerLeft" class\x3d"left imajnetImageSliderItem imajnetLoading"\x3e' +
        ImajnetUI.getSliderLeftImage("") + '\x3c/div\x3e\x3cdiv id\x3d"imajnetLayerLeftArrow" class\x3d"left imajnetImageSliderArrowContainer"\x3e\x3cimg id\x3d"imajnetLayerLeftArrowImage" class\x3d"imajnetImageSliderArrow" src\x3d"" class\x3d"popupImajnetImage" /\x3e\x3c/div\x3e\x3cdiv id\x3d"imajnetImageLayer" class\x3d"left" data-ythreshold\x3d"15"\x3e\x3c/div\x3e\x3cdiv id\x3d"imajnetLayerRightArrow" class\x3d"left imajnetImageSliderArrowContainer"\x3e\x3cimg id\x3d"imajnetLayerRightArrowImage" class\x3d"imajnetImageSliderArrow" src\x3d"" class\x3d"popupImajnetImage" /\x3e\x3c/div\x3e\x3cdiv id\x3d"imajnetLayerRight" class\x3d"left imajnetImageSliderItem imajnetLoading"\x3e' +
        ImajnetUI.getSliderRightImage("") + "\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e");
      this.imajnetImageSliderContainer = jQuery("#imajnetImageSliderContainer");
      this.imajnetImageSliderInnerContainer = jQuery("#imajnetImageSliderInnerContainer");
      this.sliderLeftImageContainer = jQuery("#imajnetLayerLeft");
      this.sliderRightImageContainer = jQuery("#imajnetLayerRight");
      this.sliderLeftImage = jQuery("#imajnetLayerLeftImage");
      this.sliderRightImage = jQuery("#imajnetLayerRightImage");
      this.imajnetImageContainer = jQuery("#imajnetImageLayer");
      this.imajnetImageContainer.on({
        vclick: this.onImageClick,
        dblclick: this.onImageDblClick,
        vmouseover: this.imajnetImageLayerMouseOver,
        vmouseup: ImajnetZoom.shiftZoomEnd,
        vmouseout: this.imajnetImageLayerMouseOut
      });
      this.imajnetImageContainer.on("contextmenu", function (a) {
        ImajnetPosition.reload();
        ImajnetMeasurement.reload();
        ImajnetPolyligne.reload();
        return !1
      });
      this.imajnetImageContainer.append('\x3cdiv id\x3d"imajnetSurveyTraceLayer"\x3e\x3c/div\x3e');
      this.imajnetSurveyTraceContainer = jQuery("#imajnetSurveyTraceLayer");
      this.imajnetImageContainer.append('\x3cimg id\x3d"popupImajnetImage" src\x3d"" class\x3d"popupImajnetImage" /\x3e');
      this.imajnetImageContainer.append('\x3cdiv id\x3d"imajnetZoomOnShiftBox"\x3e\x3c/div\x3e');
      this.imajnetZoomOnShiftBox = jQuery("#imajnetZoomOnShiftBox");
      this.imajnetImage = jQuery("#popupImajnetImage");
      try {
        this.imajnetImageSliderInnerContainer.draggable({
          disabled: !0, start: function (a, c) {
            ImajnetZoom.imageWasDragged = !0;
            ImajnetUI.dragImageSliderCount = 0
          }, drag: function (a, c) {
            if (-1 != ImajnetUI.dragImageSliderPrevX) {
              var d =
                "";
              ImajnetUI.dragImageSliderPrevX > a.pageX ? d = "left" : ImajnetUI.dragImageSliderPrevX < a.pageX && (d = "right");
              ImajnetUI.dragImageSliderPrevX = a.pageX;
              if (ImajnetUI.imajnetImage.width() > ImajnetUI.imajnetImageContainerSize.width && 1 == ImajnetUI.dragImageSliderCount && ("left" == d && 0 == ImajnetUI.imajnetImage.position().left || "right" == d && ImajnetZoom.imageDragRightReachEnd()))return ImajnetUI.disableDraggable(ImajnetUI.imajnetImageSliderInnerContainer), ImajnetUI.enableImageDrag(), ImajnetUI.dragImageSliderPrevX = -1, jQuery(document).trigger("mouseup"),
                !0
            }
            ImajnetUI.dragImageSliderPrevX = a.pageX;
            ImajnetUI.dragImageSliderCount++;
            ImajnetUI.imajnetImage.removeClass("opacity30");
            d = c.position.left - c.originalPosition.left;
            if (0 < d && ImajnetImageSwitcher.dragLeftPosition) ImajnetUI.sliderLeftImage && ImajnetUI.sliderLeftImage.attr("src") || ImajnetUI.sliderLeftImageContainer.hasClass("imajnetLayerNoImage") || (ImajnetUI.sliderLeftImageContainer.html(ImajnetUI.getSliderLeftImage("")), ImajnetUI.sliderLeftImage = jQuery("#imajnetLayerLeftImage"), ImajnetImageSwitcher.loadImageForSlider(ImajnetUI.sliderLeftImage,
              ImajnetImageSwitcher.dragLeftPosition)), d > ImajnetUI.imajnetImageContainerSize.width / 3 && ImajnetUI.imajnetImage.addClass("opacity30"); else if (0 > d && ImajnetImageSwitcher.dragRightPosition)return ImajnetUI.sliderRightImage && ImajnetUI.sliderRightImage.attr("src") || ImajnetUI.sliderLeftImageContainer.hasClass("imajnetLayerNoImage") || (ImajnetUI.sliderRightImageContainer.html(ImajnetUI.getSliderRightImage("")), ImajnetUI.sliderRightImage = jQuery("#imajnetLayerRightImage"), ImajnetImageSwitcher.loadImageForSlider(ImajnetUI.sliderRightImage,
              ImajnetImageSwitcher.dragRightPosition)), -1 * d > ImajnetUI.imajnetImageContainerSize.width / 3 && ImajnetUI.imajnetImage.addClass("opacity30"), !0
          }, stop: function (a, c) {
            ImajnetUI.imajnetImage.removeClass("opacity30");
            var d = !1, e = c.position.left - c.originalPosition.left;
            e > ImajnetUI.imajnetImageContainerSize.width / 3 ? (ImajnetImageSwitcher.dragSliderLeft(), d = !0) : -1 * e > ImajnetUI.imajnetImageContainerSize.width / 3 && (ImajnetImageSwitcher.dragSliderRight(), d = !0);
            d ? ImajnetZoom.imageWasDragged = !1 : ImajnetUI.setSliderScrollLeft(ImajnetUI.imajnetImageContainerSize.width);
            Nigsys.getElementWidth(ImajnetUI.imajnetImage[0]) > Nigsys.getElementWidth(ImajnetUI.imajnetImageContainer[0]) && ImajnetUI.enableImageDrag();
            return !0
          }
        })
      } catch (b) {
      }
      Nigsys.isIOS() && (ImajnetUI.swipeImageTimeout = 600);
      ImajnetUI.addSwipeHandlers();
      this.imajnetImageContainer.append('\x3cdiv id\x3d"popupImajnetControlsLayer"\x3e\x3c/div\x3e');
      this.popupImajnetControlsLayer = jQuery("#popupImajnetControlsLayer");
      this.imajnetImageContainer.append('\x3cdiv id\x3d"imajnetErrorsPopup" onclick\x3d"ImajnetUI.hideError();"\x3e\x3cdiv id\x3d"imajnetErrorsPopupText"\x3e\x3c/div\x3e\x3cbr/\x3e\x3cinput type\x3d"button" id\x3d"imajnetErrorsPopupOKButton" value\x3d"' +
        jQuery.imajnet.button.ok + '" onclick\x3d"jQuery(\'ImajnetErrorsPopup\').hide();"/\x3e\x3c/div\x3e');
      try {
        this.imajnetImage.draggable({
          disabled: !0, start: function (a, c) {
            ImajnetZoom.imageDragStart(a, c)
          }, drag: function (a, c) {
            ImajnetZoom.imageDrag(a, c)
          }, stop: function (a, c) {
            ImajnetZoom.imageDragStop(a, c)
          }
        }), this.popupImajnetControlsLayer.draggable({
          disabled: !0, start: function (a, c) {
            ImajnetZoom.imageDragStart(a, c)
          }, drag: function (a, c) {
            ImajnetZoom.imageDrag(a, c)
          }, stop: function (a, c) {
            ImageControler.currentGraphic.constraintSVG ||
            (ImajnetZoom.imageWasDragged = !0, ImajnetZoom.onImageDragStop(a, c))
          }
        })
      } catch (b) {
      }
      var a = this.getImageContainerDimesions();
      this.resizeImageElements(a.width, a.height, !0);
      ImajnetZoom.init(a.width, a.height);
      this.imajnetImageContainer.addClass("scrollable");
      ImajnetUI.appendControls();
      this.imajnetImage.attr("alt", "")
    }
  },
  donwloadImajnetImage: function () {
    ImajnetMap.currentPosition && window.open(ImajnetAPI.buildImageURLWithResolution(ImajnetMap.currentPosition, ImajnetSettings.imajnetImageResolutions[3]))
  },
  appendControls: function () {
    ImajnetUI.popupImajnetControlsLayer.append('\x3cdiv id\x3d"imajnetImageSwitcherImageContainer"\x3e\x3cimg id\x3d"imajnetImageSwitcherImage" /\x3e\x3c/div\x3e');
    this.imageSwitcherImageContainer = jQuery("#imajnetImageSwitcherImageContainer");
    this.imageSwitcherImage = jQuery("#imajnetImageSwitcherImage");
    ImajnetUI.docking.imageButtons && ImajnetUI.docking.imageButtons.mainContainer.remove();
    ImajnetUI.docking.imageButtons = new ImajnetDocking(ImajnetUI.imageContainer, '\x3cdiv class\x3d"imajnetControlsLayerButtonsItem" id\x3d"imajnetPositionButtonContainer"\x3e\x3cimg src\x3d"' + Imajnet.imajnetPath + "img/imageIcons/imajnet3dPosition.png?" + Imajnet.version + '" onclick\x3d"ImajnetPosition.showHidePosition(); Nigsys.disableEventPropagation(event);"  title\x3d"' +
      jQuery.imajnet.map.position.title + '" /\x3e\x3c/div\x3e\x3cdiv class\x3d"imajnetControlsLayerButtonsItem" id\x3d"imajnetMeasurementButtonContainer"\x3e\x3cimg src\x3d"' + Imajnet.imajnetPath + "img/imageIcons/imajnetRuler.png?" + Imajnet.version + '" onclick\x3d"ImajnetMeasurement.showHideMeasurement(); Nigsys.disableEventPropagation(event);" title\x3d"' + jQuery.imajnet.map.measurement.title + '" /\x3e\x3c/div\x3e\x3cdiv class\x3d"imajnetControlsLayerButtonsItem" id\x3d"imajnetPolyligneButtonContainerpolyligne"\x3e\x3cimg src\x3d"' +
      Imajnet.imajnetPath + "img/imageIcons/imajnetPolyligne.png?" + Imajnet.version + '" onclick\x3d"ImajnetPolyligne.showHide(\'polyligne\'); Nigsys.disableEventPropagation(event);" title\x3d"' + jQuery.imajnet.map.polyligne.title + '" /\x3e\x3c/div\x3e\x3cdiv class\x3d"imajnetControlsLayerButtonsItem" id\x3d"imajnetPolyligneButtonContainerpolygon"\x3e\x3cimg src\x3d"' + Imajnet.imajnetPath + "img/imageIcons/imajnetPolygon.png?" + Imajnet.version + '" onclick\x3d"ImajnetPolyligne.showHide(\'polygon\'); Nigsys.disableEventPropagation(event);" title\x3d"' +
      jQuery.imajnet.map.polygon.title + '" /\x3e\x3c/div\x3e\x3cdiv class\x3d"imajnetControlsLayerButtonsItem" id\x3d"imajnetTraceSurveyButtonContainer" onclick\x3d"Nigsys.disableEventPropagation(event);" title\x3d"' + jQuery.imajnet.settings.surveyTrace + '"\x3e\x3cimg src\x3d"' + Imajnet.imajnetPath + "img/imageIcons/imajnetTrace.png?" + Imajnet.version + '" onclick\x3d"ImageControler.currentSurveyTrace.showHideSurveyTrace(); Nigsys.disableEventPropagation(event);" /\x3e\x3c/div\x3e\x3cdiv class\x3d"imajnetControlsLayerButtonsItem" id\x3d"imajnetZoomButtonContainer"\x3e\x3cimg src\x3d"' +
      Imajnet.imajnetPath + "img/imageIcons/imajnetZoom.png?" + Imajnet.version + '" onclick\x3d"ImajnetZoom.activateDeactivateZoom(); Nigsys.disableEventPropagation(event);" title\x3d"' + jQuery.imajnet.image.zoomButton + '" /\x3e\x3c/div\x3e\x3cdiv class\x3d"imajnetControlsLayerButtonsItem" id\x3d"imajnetSaveImage" style\x3d"margin-bottom: 4px;"\x3e\x3cimg src\x3d"' + Imajnet.imajnetPath + "img/imageIcons/imajnetSnapshot.png?" + Imajnet.version + '"  onclick\x3d"ImajnetUI.donwloadImajnetImage(); Nigsys.disableEventPropagation(event);"  title\x3d"' +
      jQuery.imajnet.image.save + '" /\x3e\x3c/div\x3e', "Right", "imageButtons", {
      width: 32,
      height: 200,
      right: 0,
      top: 10
    });
    CheckDockingCookie("imageButtons");
    ImajnetUI.imageContainer.append('\x3cdiv id\x3d"imajnetPreviewPanel"\x3e\x3c/div\x3e\x3cdiv class\x3d"clear"\x3e\x3c/div\x3e');
    ImajnetUI.imageContainer.append('\x3cdiv id\x3d"imajnetImageSwitcher"\x3e\x3c/div\x3e');
    ImajnetUI.popupImajnetControlsLayer.append('\x3cdiv id\x3d"imajnetPhotogrammetryZoomedImageContainer"\x3e\x3cimg id\x3d"imajnetPhotogrammetryZoomedImage" src\x3d"" onmouseover\x3d"ImageControler.currentPhotogrammetry.previewPanelMouseOver();" /\x3e\x3c/div\x3e');
    ImajnetUI.previewImageContainer = jQuery("#imajnetPhotogrammetryZoomedImageContainer");
    ImajnetUI.previewImage = jQuery("#imajnetPhotogrammetryZoomedImage");
    Address.map = ImajnetMap.map;
    Address.init();
    LRS.init()
  },
  showImajnetControls: function () {
    ImajnetUI.popupImajnetControlsLayer && ImajnetUI.popupImajnetControlsLayer.show()
  },
  hideImajnetControls: function () {
    ImajnetUI.popupImajnetControlsLayer && ImajnetUI.popupImajnetControlsLayer.hide()
  },
  showImage: function () {
    this.imajnetImage.css("display", "block");
    ImajnetZoom.imageIsZoomed() ?
      (this.setImageContainerSize(this.imajnetImageContainer.width(), this.imajnetImageContainer.height()), ImajnetZoom.resetZoom()) : ImajnetZoom.setDraggableContainment()
  },
  hideImage: function () {
    this.imajnetImage.hide()
  },
  appendDefaultImage: function () {
    this.appendImage(Imajnet.imajnetPath + "img/noVideo.png?" + Imajnet.version);
    this.imajnetImage.addClass("popupImajnetDefaultImage");
    this.imajnetImage.css("margin-top", (this.imageContainer.height() - 445) / 2);
    this.imajnetImageContainer.addClass("imajnetDefaultImageLayer")
  },
  appendImage: function (a) {
    this.imajnetImage.removeClass("popupImajnetDefaultImage");
    this.imajnetImageContainer.removeClass("imajnetDefaultImageLayer");
    this.imajnetImage.attr("src", a);
    this.imajnetImage.css("margin-top", 0);
    ImajnetUI.imageContainer.show();
    ImajnetUI.showItem(ImajnetUI.imageContainerId);
    this.showImage()
  },
  showError: function (a, b) {
    b ? jQuery("#imajnetErrorsPopupOKButton").show() : jQuery("#imajnetErrorsPopupOKButton").hide();
    jQuery("#imajnetErrorsPopupText").html(a);
    jQuery("#imajnetErrorsPopup").show()
  },
  hideError: function () {
    jQuery("#imajnetErrorsPopupText").html("");
    jQuery("#imajnetErrorsPopup").hide()
  },
  setImageContainerSize: function (a, b) {
    this.imajnetImageContainerSize.width = a;
    this.imajnetImageContainerSize.height = b;
    ImajnetUI.imageContainer.width(a);
    ImajnetUI.imageContainer.height(b)
  },
  setSlidersWidth: function (a) {
    this.imajnetImageSliderInnerContainer.css("width", Math.floor(3 * a + 2 * ImajnetImageSwitcher.dragArrowWidth + 1));
    ImajnetUI.imajnetImageSliderContainer.css("width", a);
    jQuery(".imajnetImageSliderItem").css("width",
      a);
    jQuery(".imajnetLayerSliderImage").css("width", a);
    ImajnetUI.setSliderScrollLeft(a)
  },
  resizeSliders: function (a, b) {
    this.imajnetImageSliderInnerContainer.css("height", b);
    ImajnetUI.imajnetImageSliderContainer.css("height", b);
    jQuery(".imajnetImageSliderItem").css("height", b);
    jQuery(".imajnetLayerSliderImage").css("height", b);
    jQuery(".imajnetImageSliderArrowContainer").css("height", b);
    jQuery(".imajnetImageSliderArrow").css("margin-top", b / 2 - 23);
    ImajnetUI.setSlidersWidth(a)
  },
  getLargeImageWidthOverflow: function () {
    return !ImajnetUI.fullSizeAspectRatio ||
    1.2 > ImajnetUI.fullSizeAspectRatio ? 0 : ImajnetZoom.HIGH_RESOLUTION_WIDTH / ImajnetZoom.HIGH_RESOLUTION_HEIGHT - ImajnetUI.imageAspectRatio
  },
  onImageResize: function () {
    if (ImajnetUI.imageContainer) {
      var a = ImajnetUI.imageContainer.parent().width(), b = ImajnetUI.imageContainer.parent().height();
      jQuery(".imajnetPopupTitleBar").length && (b -= jQuery(".imajnetPopupTitleBar").height());
      a && b || (a = ImajnetUI.imajnetImageContainerSize.width, b = ImajnetUI.imajnetImageContainerSize.height);
      ImajnetUI.resizeImageElements(a, b, !1)
    }
  },
  moveSurveyTraceContainerToLeft: function (a) {
    ImajnetUI.imajnetSurveyTraceContainer.css("left", parseInt(a))
  },
  resizeImageElement: function (a, b) {
    if (ImajnetUI.fullSizeAspectRatio) {
      var c = a * this.getLargeImageWidthOverflow();
      a = parseInt(a + c);
      this.imajnetImage.css("width", a);
      var d = -(c / 2);
      ImajnetUI.getLargeImageWidthOverflow() && (-1 == ImajnetZoom.left || ImajnetZoom.left < 2 * d) && (ImajnetZoom.left = d);
      -0 == ImajnetZoom.left && (ImajnetZoom.left = 0);
      ImajnetZoom.left && -1 != ImajnetZoom.left ? ImajnetZoom.moveToLeft(ImajnetZoom.left) :
        c || ImajnetZoom.moveToLeft(0);
      this.imajnetImage.css("height", b);
      this.imajnetSurveyTraceContainer.css("width", a);
      this.imajnetSurveyTraceContainer.css("height", b);
      this.imajnetImageContainerInitialSize = {width: a, height: b}
    }
  },
  resizeImageElements: function (a, b, c) {
    this.imajnetImageContainer.css("width", a);
    this.imajnetImageContainer.css("height", b);
    this.setImageContainerSize(a, b);
    ImajnetUI.resizeImageElement(a, b);
    this.imajnetImage.hasClass("popupImajnetDefaultImage") && this.imajnetImage.css("margin-top", (b - 445) /
      2);
    ImajnetZoom.imageIsZoomed() ? ImajnetZoom.left < -(a * this.getLargeImageWidthOverflow()) ? (ImajnetZoom.resetZoom(), ImajnetZoom.left = -(a * this.getLargeImageWidthOverflow())) : ImajnetZoom.resetZoom() : (ImajnetZoom.width = ImajnetUI.imajnetImageContainerInitialSize.width, ImajnetZoom.height = ImajnetUI.imajnetImageContainerInitialSize.height);
    ImajnetUI.resizeSliders(a, b);
    SurveyTrace.onImageResize(ImajnetUI.imajnetImageContainerInitialSize.width, ImajnetUI.imajnetImageContainerInitialSize.height);
    ImageControler.currentPhotogrammetry.onResize(a,
      b);
    ImajnetZoom.setDraggableContainment();
    if (this.LRSGUI) this.LRSGUI.onResize();
    if ("CUBE" == ImageControler.currentImageType) CubePlugin.onWindowResize()
  },
  buttonIsActive: function (a) {
    return a ? a.hasClass("opacity60") : !1
  },
  addActiveState: function (a) {
    a ? ImajnetPlugin.addActiveState(a) : console.warn("Add active state to null")
  },
  removeActiveState: function (a) {
    a ? ImajnetPlugin.removeActiveState(a) : console.warn("Remove active state to null")
  },
  showAndPositionInside: function (a, b) {
    var c = a.position();
    c.top + b.height() >
    CommonCore.mapContainer.height() ? b.css("top", -(b.height() - 20)) : b.css("top", 0);
    c.left < b.width() ? b.css("left", 20 + (Nigsys.onMobile() ? 10 : 0)) : b.css("left", -(b.width() - 5 + (Nigsys.onMobile() ? 15 : 0)));
    b.show()
  },
  showAndPositionInsideNear: function (a, b, c) {
    b.top + c.height() + b.height > a.height() ? c.css("top", b.top - c.height() - 10) : c.css("top", b.top + b.height + 5);
    b.left + c.width() > a.width() ? c.css("left", a.width() - c.width() - 20) : c.css("left", b.left);
    c.show()
  },
  activateImajnetToolbarButtons: function () {
    jQuery(this.btnClosestImageDiv).removeClass("opacity30");
    jQuery(this.btnClickModeDiv).removeClass("opacity30");
    jQuery(this.btnEnableClipboardDiv).removeClass("opacity30");
    jQuery("#imajnetSettingsButton").removeClass("opacity30");
    jQuery("#imajnetHelpButton").removeClass("opacity30")
  },
  deactivateImajnetToolbarButtons: function () {
    jQuery(this.btnClosestImageDiv).removeClass("opacity60").addClass("opacity30");
    jQuery(this.btnClickModeDiv).removeClass("opacity60").addClass("opacity30");
    jQuery(this.btnEnableClipboardDiv).removeClass("opacity60").addClass("opacity30");
    jQuery("#imajnetSettingsButton").removeClass("opacity60").addClass("opacity30");
    jQuery("#imajnetHelpButton").removeClass("opacity60").addClass("opacity30")
  },
  addToolControls: function () {
    this.activateImajnetToolbarButtons()
  },
  disableToolControls: function () {
    for (var a = 0, b = this.controlActivatorContainers.length; a < b; ++a)"showClipboard" != this.controlActivatorContainers[a].controlName && "showLRS" != this.controlActivatorContainers[a].controlName && this.removeActiveState(this.controlActivatorContainers[a].buttonElement)
  },
  hideShiftBox: function () {
    ImajnetUI.imajnetZoomOnShiftBox && (ImajnetUI.imajnetZoomOnShiftBox.width(0), ImajnetUI.imajnetZoomOnShiftBox.height(0), ImajnetUI.imajnetZoomOnShiftBox.hide())
  },
  showItem: function (a, b, c) {
    ImajnetPlugin.showImajnetItem(a, b, c)
  },
  hideItem: function (a) {
    ImajnetPlugin.hideImajnetItem(a)
  },
  hideImageElements: function () {
    jQuery("#popupImajnetDate").html("");
    ImageControler.currentSurveyTrace && ImageControler.currentSurveyTrace.hideTrace();
    "undefined" !== typeof ImajnetPosition && ImajnetPosition.hidePosition(!0);
    "undefined" !== typeof ImajnetMeasurement && ImajnetMeasurement.hideMeasurement(!0);
    "undefined" !== typeof ImajnetPolyligne && ImajnetPolyligne.hide(!0);
    Address.hideAddress();
    LRS.removeLRS();
    ImajnetUI.docking.imageButtons && ImajnetUI.docking.imageButtons.mainContainer.hide();
    ImajnetUI.hideImajnetControls()
  },
  removeImageElements: function () {
    jQuery("#" + ImajnetUI.imageContainerId).remove();
    ImajnetUI.imageContainer = null;
    jQuery("#" + ImajnetUI.clipboardContainerId).remove();
    ImajnetUI.clipboardContainer = null;
    ImajnetUI[ImajnetUI.clipboardContainerId] =
      null;
    jQuery("#" + ImajnetUI.clipboardExportContainerId).remove();
    ImajnetUI.clipboardExportContainer = null;
    ImajnetUI[ImajnetUI.clipboardExportContainerId] = null;
    jQuery("#" + ImajnetUI.helpContainerId).remove();
    ImajnetUI.helpContainer = null;
    jQuery("#" + ImajnetUI.aboutImajnetContainerId).remove();
    ImajnetUI.aboutImajnetContainer = null;
    jQuery("#" + ImajnetUI.settingsContainerId).remove();
    ImajnetUI.settingsContainer = null;
    jQuery("#" + ImajnetUI.settingsLRSContainerId).remove();
    ImajnetUI.settingsLRSContainer = null;
    jQuery("#" +
      ImajnetUI.sequenceDetailsId).remove();
    ImajnetUI.sequenceDetails = null;
    jQuery("#" + ImajnetUI.imageDetailsId).remove();
    ImajnetUI.imageDetails = null;
    jQuery("#" + ImajnetUI.groundPlaneDetailsId).remove();
    ImajnetUI.groundPlaneDetails = null
  },
  enableDraggable: function (a) {
    try {
      a.draggable("enable")
    } catch (b) {
      console.error("Error enable draggable: " + a.attr("id"))
    }
  },
  disableDraggable: function (a) {
    try {
      a.draggable("disable").removeClass("ui-state-disabled")
    } catch (b) {
    }
  },
  enableImageDrag: function () {
    ImajnetUI.enableDraggable(ImajnetUI.imajnetImage);
    ImajnetUI.enableDraggable(ImajnetUI.popupImajnetControlsLayer)
  },
  enableImageAllDrag: function () {
    ImajnetZoom.zKeyPressed = !1;
    ImajnetZoom.shiftKeyPressed = !1;
    ImajnetUI.hideShiftBox();
    ImajnetUI.enableImageDrag()
  },
  disableImageDrag: function () {
    ImajnetUI.disableDraggable(ImajnetUI.imajnetImage);
    ImajnetUI.disableDraggable(ImajnetUI.popupImajnetControlsLayer)
  },
  disableImageAllDrag: function () {
    ImajnetUI.disableImageDrag();
    ImajnetUI.disableDraggable(ImajnetUI.imajnetImageSliderInnerContainer)
  },
  imajnetKeydownHandler: function (a) {
    try {
      "textareaEditComment" !=
      a.target.className && (ImajnetUI.allowKeyUp = !0, 90 == a.keyCode ? (ImajnetUI.imajnetImageContainer.off("vclick", ImajnetUI.onImageClick), ImajnetZoom.isZoomMode() || (ImajnetAPI.lastNavigationPositionImageId = "", ImajnetZoom.zKeyPressed = !0, ImajnetZoom.doWhenActivateZoom())) : 16 == a.keyCode && (ImajnetUI.imajnetImageContainer.off("vclick", ImajnetUI.onImageClick), ImajnetZoom.isZoomMode() || (ImajnetAPI.lastNavigationPositionImageId = "", ImajnetZoom.shiftKeyPressed = !0, ImajnetZoom.doWhenActivateZoom())))
    } catch (b) {
    }
  },
  imajnetKeyupHandler: function (a) {
    try {
      ImageControler.currentImageControl.isFastNavigation &&
      (ImageControler.currentImageControl.resetFastNavigation(), ImageControler.currentImageControl.doRequests(ImajnetMap.currentPosition)), ImajnetZoom.zKeyPressed = !1, ImajnetZoom.shiftKeyPressed = !1, !ImajnetUI.allowKeyUp || 16 != a.keyCode && 90 != a.keyCode || (ImajnetUI.allowKeyUp = !1, ImajnetUI.imajnetZoomOnShiftBox.is(":visible") && (ImajnetUI.zoomCancel = !0), ImajnetUI.imajnetImageContainer.off("vclick").on("vclick", ImajnetUI.onImageClick), ImajnetZoom.isZoomMode() || (jQuery(".popupImajnetImage").removeClass("zoomCursor"),
        ImajnetZoom.doWhenDeactivateZoom(), ImajnetUI.imajnetImageContainer.off("vmousedown", ImajnetZoom.onShiftZoomStart), ImajnetUI.imajnetImageContainer.off("vmousemove", ImajnetZoom.shiftZoomMouseMove), 0 == ImajnetZoom.zoomLevel ? ImajnetUI.enableDraggable(ImajnetUI.imajnetImageSliderInnerContainer) : (ImajnetUI.enableImageAllDrag(), jQuery(".popupImajnetImage").removeClass("zoomCursor"), ImajnetZoom.imageWasDragged = !1)))
    } catch (b) {
    }
  },
  clickLogin: function (a) {
    13 == a.keyCode && (Nigsys.errorNotification && Nigsys.errorNotification.close(),
      jQuery("#imajnetLoginButton").click())
  },
  registerKeyboardEvents: function (a) {
    jQuery("select").blur();
    jQuery("input").blur();
    jQuery("textarea").blur()
  },
  showDateContainer: function () {
    ImajnetUI.imageContainer && ImajnetUI.imageContainer.length && ImajnetUI.imageDateContainer.show()
  },
  hideDateContainer: function () {
    ImajnetUI.imageContainer && ImajnetUI.imageContainer.length && ImajnetUI.imageDateContainer && ImajnetUI.imageDateContainer.hide()
  },
  imajnetAddImageDate: function (a) {
    if (ImajnetUI.imageContainer && ImajnetUI.imageContainer.length) {
      this.imageDateContainer ||
      (ImajnetUI.imageContainer.append('\x3cdiv id\x3d"imageDateContainer" class\x3d"addressAndLRS"\x3e\x3c/div\x3e'), this.imageDateContainer = jQuery("#imageDateContainer"));
      a = Nigsys.formatImajnetImageDate(a);
      if (!jQuery("#imajnetImageLRSInTitle").length) {
        var b = ImajnetUI.imageContainer.parent().children(":first"), c = b.attr("class");
        c && -1 !== c.indexOf("ui-dialog-titlebar") && (b.append('\x3cspan id\x3d"imajnetImageLRSInTitle"\x3e\x3c/span\x3e'), Nigsys.browserIsIE7() && jQuery("#imajnetImageLRSInTitle").css("margin-top",
          7))
      }
      b = jQuery("#popupImajnetDate");
      b.length ? b.html(a) : (b = ImajnetUI.imageContainer.parent().children(":first").children(":first"), (c = b.attr("class")) && -1 !== c.indexOf("ui-dialog-title") && b.html(b.html() + '\x3cspan id\x3d"popupImajnetDate" class\x3d"left"\x3e' + a + "\x3c/span\x3e"));
      a ? (this.imageDateContainer.html(a), this.showDateContainer()) : this.hideDateContainer();
      ImajnetUI.imageDate = a
    } else this.hideDateContainer()
  },
  appendClipboarContainerHTML: function () {
    ImajnetUI.clipboardContainer.append('\x3cdiv id\x3d"' +
      ImajnetUI.clipboardContainerId + 'Content" class\x3d"scrollable"\x3e\x3cdiv style\x3d"width: 100%; text-align: center; margin-top: 10px;"\x3e' + jQuery.imajnet.map.clipboard.noItems + '\x3c/div\x3e\x3c/div\x3e\x3cdiv id\x3d"popupImajnetClipboardButtonsContainer"\x3e\x3cinput type\x3d"button" id\x3d"popupImajnetClipboardClearButton" value\x3d"' + jQuery.imajnet.map.clipboard.clearButton + '" onclick\x3d"ImageControler.currentPhotogrammetry.deletePhotogrammetryObjects();" disabled\x3d"disabled" class\x3d"dialogButton buttonDelete" /\x3e\x3cinput type\x3d"button" id\x3d"popupImajnetClipboardExportButton" value\x3d"' +
      jQuery.imajnet.map.clipboard.exportButton + '" onclick\x3d"ImageControler.currentPhotogrammetry.showExport();" disabled\x3d"disabled" class\x3d"dialogButton" /\x3e\x3c/div\x3e')
  },
  doOnKeyDown: function (a) {
    "imajnetPOI" == a.target.id && (a.preventDefault(), a.stopImmediatePropagation(), a.stopPropagation());
    38 == a.keyCode ? (ImageControler.currentImageControl.setFastNavigation(), ImageControler.currentImageControl.getNext(!1), a = jQuery(".menu"), a.length && a.menu("collapseAll", null, !0)) : 40 == a.keyCode ? (ImageControler.currentImageControl.setFastNavigation(),
      ImageControler.currentImageControl.getPrevious(!1), a = jQuery(".menu"), a.length && a.menu("collapseAll", null, !0)) : 37 == a.keyCode ? ImajnetImageSwitcher.dragSliderLeft() : 39 == a.keyCode && ImajnetImageSwitcher.dragSliderRight()
  },
  onKeyDown: function (a) {
    ImajnetUI.doOnKeyDown(a)
  }
};
jQuery(function () {
  jQuery(document).bind("keydown", function (a) {
    ImajnetUI.onKeyDown(a)
  });
  jQuery(document).on("keydown", ImajnetUI.imajnetKeydownHandler);
  jQuery(document).on("keyup", ImajnetUI.imajnetKeyupHandler)
});
var ImajnetLRSGUIWidth = 100, ImajnetLRSGUIHeight = 400, ImajnetLRSGUICommon = {
  roadsPRData: {}, getContainerSize: function (c, a, b) {
    return "portrait" == c ? {width: a, height: b} : {width: b, height: a}
  }, onImajnetImageRoadChange: function (c) {
    if (c === ImajnetUI.LRSGUI) {
      if ("undefined" !== typeof LRSSchematic && LRSSchematic.LRSGUI) {
        var a = ImajnetLRSGUICommon.roadsPRData[c.currentRoadId].roadId, b = jQuery("#LRSSchematicRoads");
        b.val(a);
        c.linearPosition && (LRSSchematic.LRSGUI.linearPosition = Nigsys.cloneObject(c.linearPosition));
        LRSSchematic.onRoadChange(a,
          LRSSchematic.LRSGUI.linearPosition);
        (c = Nigsys.getComboboxInputContainer(b)) && c.val(b.find("option:selected").attr("title"))
      }
    } else c.computetMiddlePRIfNotDefined()
  }
}, ImajnetLRSGUI = function (c) {
  c = {
    LRSGUISVG: null,
    linearPosition: null,
    container: null,
    canvasId: c.canvasId ? c.canvasId : "",
    dragContainer: null,
    containerId: c.id,
    dragContainerId: c.dragId,
    orientation: c.orientation ? c.orientation : "portrait",
    containerOffset: 0,
    currentRoadId: -1,
    lastRoadId: -2,
    minBound: null,
    maxBound: null,
    minBoundOffset: 0,
    maxBoundOffset: 0,
    isZoomMode: !1,
    zoomBoxIndex: 0,
    zoomRatio: 1.2,
    defaultZoomLevel: 9,
    lastZoomLevel: 9,
    startZoomLevel: 0,
    currentZoomLevel: 0,
    zeroBasedMaxZoomLevel: 25,
    isFirstDraw: !0,
    prLength: 0,
    sign: 0,
    lastSign: 0,
    centerLinearPosition: 0,
    zoolLevelOnSamePosition: 0,
    zoomPositionOffset: 0,
    lastZoomPositionOffset: 0,
    lastZoomOffset: 0,
    lastZoomDelta: 0,
    zoomOffset: 0,
    roadRedraw: !0,
    isDragMode: !1,
    isAfterDrag: !1,
    dragZoomLevel: 0,
    dragPositionOffset: 0,
    lastDragPositionOffset: 0,
    dragOffset: 0,
    touchTracks: [],
    containerWidth: c.width ? c.width : ImajnetLRSGUIWidth,
    containerHeight: c.height ? c.height : ImajnetLRSGUIHeight,
    containerMinHeight: 270,
    roadStrokeWidth: 6,
    trainStrokeWidth: 5,
    roadXOffset: 30,
    prSize: 19,
    positionCircleRadius: 8,
    orientationSize: 15,
    PRLineLineIndicatorWidth: 60,
    PRTextLineIndicatorWidth: 30,
    PRTextOffset: 8,
    PRFontSize: 9,
    PRDivisionWidth: 8,
    PRDivisionOffset: 40,
    PRDivisionsFontSize: 9,
    lineIndicatorStrokeWidth: 2,
    redrawRoad: !1,
    roadType: 1,
    LRSResponse: null,
    PRStart: 0,
    PREnd: 0,
    unit: "m",
    onDrawRoadEnd: function () {
      return jQuery.Deferred().resolve().promise()
    },
    onGoToClickedPoint: function (a) {
      LRSRequest.search(Object({
        roadIdentifier: this.linearPosition.road.id,
        prNumber: a.prNumber, relativeAbscisa: a.relativeAbscisa
      }), !0)
    },
    goToClickedPoint: function (a) {
      if (a = this.getClickedPosition(a, !0)) this.onGoToClickedPoint(a)
    },
    mouseDownHandler: function (a) {
      Nigsys.disableEventPropagation(a);
      this.isDragMode = !0;
      this.lastDragPositionOffset = "portrait" == this.orientation ? a.clientY : a.clientX
    },
    mouseMoveHandler: function (a) {
      this.isDragMode && this.drag(a)
    },
    disableDragHandler: function (a) {
      this.isDragMode = !1
    },
    clickHandler: function (a) {
      if (this.isAfterDrag && !Nigsys.browserIsOpera()) this.isAfterDrag =
        !1; else {
        var b = 0, b = "portrait" == this.orientation ? a.offsetY : a.offsetX;
        this.goToClickedPoint(b);
        Nigsys.disableEventPropagation(a);
        return !1
      }
    },
    mouseWheelHandler: function (a, b) {
      if (!Nigsys.scrollDeltaIsValid(b))return !1;
      b = Nigsys.getDelta(a, b);
      this.resetZoom();
      this.zoom(a, b);
      "function" === typeof a.preventDefault && a.preventDefault()
    },
    positionTop: function () {
      if (ImajnetUI.docking.imageLRSGUI && !Nigsys.getCookie("IMAJNET", "DOCKING_imageLRSGUI_position")) {
        var a = (ImajnetUI.imageContainer.height() - this.containerHeight -
          55) / 2;
        0 > a && (a = 0);
        ImajnetUI.docking.imageLRSGUI.positionOnTop(a)
      }
    },
    resizeHeight: function () {
      var a = parseInt(.6 * ImajnetUI.imageContainer.height());
      a < this.containerMinHeight && (a = this.containerMinHeight);
      return this.containerHeight != a ? (this.containerHeight = a, this.positionTop(), !0) : !1
    },
    redraw: function () {
      ImageControler.currentGraphic.clearLRSGUI(this);
      this.container && (this.container.html(""), this.LRSGUISVG = null);
      this.init();
      this.redrawRoad = !0;
      this.LRSResponse && this.draw(this.LRSResponse)
    },
    onResize: function () {
      "undefined" ===
      typeof keepDockingInsideParent || this.resizeHeight() ? ("object" === typeof ImajnetUI && "object" === typeof ImajnetUI.LRSGUI && this === ImajnetUI.LRSGUI && ImajnetUI.initLRSGUIDocking(this.containerWidth, this.containerHeight), this.redraw()) : keepDockingInsideParent()
    },
    firstTouch: null,
    lastTouch: null,
    getTouchPosition: function (a) {
      return [a.originalEvent.touches[0].pageY, a.originalEvent.touches[1].pageY]
    },
    initSize: function (a) {
      this.container && (this.isZoomMode = this.isDragMode = !1, this.container.width(a.width), this.dragContainer.width(a.width),
        this.container.height(a.height), this.dragContainer.height(a.height), "imajnetLRSGUI" == this.containerId && this.dragContainer.css("top", -a.height), a = this.containerHeight, this.roadStrokeWidth = a / 66, 10 < this.roadStrokeWidth && (this.roadStrokeWidth = 10), this.roadXOffset = parseInt(this.containerWidth / 3), this.orientationSize = a / 26, this.PRLineLineIndicatorWidth = a / 9, this.PRTextLineIndicatorWidth = a / 20, this.PRDivisionOffset = parseInt(this.containerWidth / 4), this.PRDivisionsFontSize = this.PRFontSize)
    },
    removeLRSGUI: function () {
      this.LRSGUISVG &&
      (this.LRSGUISVG.remove(), this.LRSGUISVG = null)
    },
    init: function () {
      this.container = jQuery('div[id\x3d"' + this.containerId + '"]');
      this.dragContainer = jQuery('div[id\x3d"' + this.dragContainerId + '"]');
      this.dragContainer.css("background-color", "transparent");
      this.dragContainer.css("z-index", 3);
      this.dragContainer.css("position", "relative");
      this.dragContainer.css("left", 0);
      this.initSize(ImajnetLRSGUICommon.getContainerSize(this.orientation, this.containerWidth, this.containerHeight));
      Graphic.initLRSGUI(this);
      var a =
        this, b = this.container;
      this.dragContainer && this.dragContainer.length && (b = this.dragContainer);
      if (Nigsys.onMobile()) b.off().on({
        tap: function (b) {
          a.isAfterDrag = !1;
          var f = jQuery(b.target).offset();
          b.offsetX = b.clientX - f.left;
          b.offsetY = b.clientY - f.top;
          a.clickHandler(b, {LRSObject: a})
        }
      }), b.swipe({
        swipe: function (b, f, c, d, g) {
          Nigsys.disableEventPropagationFull(b);
          1 < g || (a.isDragMode = !0, b.clientX = b.changedTouches[0].clientX, b.clientY = b.changedTouches[0].clientY, d = 1, "down" == f && (d = -1), a.lastDragPositionOffset = "portrait" ==
          a.orientation ? b.clientY + d * c : b.clientX + d * c, a.mouseMoveHandler(b))
        }, threshold: 10, pinchIn: function (b, c, h, d, g, e, k) {
          a.isDragMode = !1;
          b.clientX = b.changedTouches[0].clientX;
          b.clientY = b.changedTouches[0].clientY;
          b.originalEvent = {clientX: b.changedTouches[0].screenX, clientY: b.changedTouches[0].screenY};
          a.mouseWheelHandler(b, 1)
        }, pinchOut: function (b, c, h, d, g, e, k) {
          a.isDragMode = !1;
          b.clientX = b.changedTouches[0].clientX;
          b.clientY = b.changedTouches[0].clientY;
          b.originalEvent = {clientX: b.changedTouches[0].screenX, clientY: b.changedTouches[0].screenY};
          a.mouseWheelHandler(b, -1)
        }, fingers: jQuery.fn.swipe.fingers.ALL
      }); else b.off().on({
        vmousedown: function (b) {
          a.mouseDownHandler(b)
        }, vmousemove: function (b) {
          a.mouseMoveHandler(b)
        }, vmouseup: function (b) {
          a.disableDragHandler(b)
        }, vmouseout: function (b) {
          a.disableDragHandler(b)
        }, click: function (b) {
          a.clickHandler(b, {LRSObject: a})
        }, "mousewheel DOMMouseScroll": function (b, c) {
          c = Nigsys.getDelta(b, c);
          if (!Nigsys.scrollDeltaIsValid(c))return !1;
          a.mouseWheelHandler(b, c)
        }
      })
    },
    drag: function (a) {
      Nigsys.disableEventPropagationFull(a);
      this.resetZoom();
      this.isAfterDrag = !0;
      this.dragZoomLevel = this.currentZoomLevel;
      var b = 0;
      this.dragPositionOffset = b = "portrait" == this.orientation ? a.clientY : a.clientX;
      a = this.dragPositionOffset - this.lastDragPositionOffset;
      5 < a ? this.getPROffset(0) >= this.minBound + this.prSize || (this.dragOffset += a, this.drawRoad(-a), this.lastDragPositionOffset = this.dragPositionOffset) : -5 > a && !(this.getPROffset(this.prLength - 1) <= this.maxBound - 5) && (this.dragOffset += a, this.drawRoad(-a), this.lastDragPositionOffset = this.dragPositionOffset)
    },
    getZoomRatio: function () {
      return this.currentZoomLevel < this.lastZoomLevel ? Nigsys.zoomMap[this.lastZoomLevel] / Nigsys.zoomMap[this.currentZoomLevel] : Nigsys.zoomMap[this.currentZoomLevel] / Nigsys.zoomMap[this.lastZoomLevel]
    },
    getCurrentZoomFactor: function () {
      return Math.pow(this.getZoomRatio(), this.currentZoomLevel)
    },
    getCurrentZoomFactorOnSamePosition: function () {
      return Math.pow(this.getZoomRatio(), this.zoolLevelOnSamePosition)
    },
    getMinZoomLevel: function (a) {
      a = null;
      for (var b in Nigsys.zoomMap)if (Nigsys.zoomMap[b] *
        (this.prLength - 1) > this.containerHeight) {
        a = b;
        break
      }
      return parseInt(a)
    },
    resetZoom: function () {
      this.zoolLevelOnSamePosition = 0;
      this.lastSign = this.sign;
      this.lastZoomOffset = 0;
      this.roadRedraw || (this.lastZoomOffset = this.zoomOffset * this.getCurrentZoomFactorOnSamePosition());
      this.currentZoomLevel != this.dragZoomLevel && (this.maxBoundOffset = this.minBoundOffset = this.dragOffset = 0)
    },
    zoom: function (a, b) {
      var c = this.currentZoomLevel - 1;
      if (!(0 > b && 0 > this.containerHeight * (Math.pow(this.getZoomRatio(), c) * (1 - 1 / this.prLength) -
        1) + this.prSize + 5)) {
        this.isZoomMode = !0;
        var f = c = 0;
        "portrait" == this.orientation ? (c = a.originalEvent.clientY, f = this.container.offset().top) : (c = a.originalEvent.clientX, f = this.container.offset().left);
        this.zoomPositionOffset = c - f;
        this.zoomPositionOffset < this.prSize && this.getPROffset(0) >= this.minBound + this.prSize && (this.zoomPositionOffset = this.prSize, this.resetZoom());
        this.zoomPositionOffset > this.containerHeight - 5 && this.getPROffset(this.prLength - 1) <= this.maxBound - 5 && (this.zoomPositionOffset = this.containerHeight -
          5, this.resetZoom());
        this.lastZoomPositionOffset == this.zoomPositionOffset && lastZoomDelta != b && this.resetZoom();
        this.lastZoomPositionOffset = this.zoomPositionOffset;
        lastZoomDelta = b;
        this.zoolLevelOnSamePosition++;
        0 > b ? this.zoomOut() : this.zoomIn();
        this.isZoomMode = !1;
        "undefined" !== typeof LRSSchematic && Nigsys.refreshComboboxContainer(jQuery("#LRSSchematicZoomSelect"), LRSSchematic.LRSGUI.currentZoomLevel + " (" + (1E3 / Nigsys.zoomMap[LRSSchematic.LRSGUI.currentZoomLevel] * 10 / 10).toFixed(2) + "m/px)")
      }
    },
    zoomIn: function () {
      this.currentZoomLevel >=
      this.maxZoomLevel || (this.lastZoomLevel = this.currentZoomLevel, this.currentZoomLevel++, this.zoomPositionOffset > this.containerHeight / 2 ? (this.zoomPositionOffset = this.containerHeight - this.zoomPositionOffset, this.sign = 1) : this.sign = -1, 0 < this.zoolLevelOnSamePosition && (this.zoomOffset = this.lastSign ? this.sign * this.lastSign * this.lastZoomOffset * this.getCurrentZoomFactorOnSamePosition() : this.lastZoomOffset * this.getCurrentZoomFactorOnSamePosition()), this.zoomOffset += (this.getCurrentZoomFactorOnSamePosition() - 1) *
        (this.containerHeight / 2 - this.zoomPositionOffset) - this.sign * (this.dragOffset - this.minBoundOffset + this.maxBoundOffset) * this.getCurrentZoomFactorOnSamePosition(), this.drawRoad(this.sign * this.zoomOffset))
    },
    zoomOut: function () {
      this.currentZoomLevel <= this.maxZoomLevel - this.zeroBasedMaxZoomLevel || this.currentZoomLevel <= this.getMinZoomLevel(0) || (this.lastZoomLevel = this.currentZoomLevel, this.currentZoomLevel--, this.zoomPositionOffset > this.containerHeight / 2 ? (this.zoomPositionOffset = this.containerHeight - this.zoomPositionOffset,
        this.sign = -1) : this.sign = 1, 0 != this.zoolLevelOnSamePosition && (this.zoomOffset = this.lastSign ? this.sign * this.lastSign * this.lastZoomOffset / this.getCurrentZoomFactorOnSamePosition() : this.lastZoomOffset / this.getCurrentZoomFactorOnSamePosition()), this.zoomOffset += (1 - 1 / this.getCurrentZoomFactorOnSamePosition()) * (this.containerHeight / 2 - this.zoomPositionOffset) - this.sign * (this.dragOffset - this.minBoundOffset + this.maxBoundOffset) / this.getCurrentZoomFactorOnSamePosition(), this.drawRoad(this.sign * this.zoomOffset))
    },
    getFirstLRS: function (a, b) {
      if (a) {
        var c = null, c = a[0] ? a[0] : a;
        return b ? jQuery.extend(b, c) : c
      }
      return null
    },
    getZoomedDimension: function () {
      return this.containerHeight * this.getCurrentZoomFactor()
    },
    KMToPixelZoom: function () {
      return Nigsys.zoomMap[this.currentZoomLevel]
    },
    getCurrentZoomFactorByZoom: function (a) {
      return Math.pow(this.getZoomRatio(), a)
    },
    getZoomedDimensionByZoom: function (a) {
      return this.containerHeight * this.getCurrentZoomFactorByZoom(a)
    },
    KMToPixelZoomByZoom: function (a) {
      return this.getZoomedDimensionByZoom(a) /
        this.prLength
    },
    KMToPixel: function () {
      return this.containerHeight / this.prLength
    },
    noOfPixelsInKM: function () {
      return Nigsys.zoomMap[this.currentZoomLevel]
    },
    getPROffset: function (a) {
      return a * this.KMToPixelZoom()
    },
    getClickedPosition: function (a, b) {
      if (!ImajnetLRSGUICommon.roadsPRData[this.currentRoadId])return null;
      for (var c = Object({
        x: 0,
        y: a
      }), f = this.KMToPixelZoom(), h = -1, d = -1, g = LRS.getRoadUnitType(this.linearPosition.road.unit), e = 0; e < this.prLength; e++) {
        var k = this.getPROffset(e),
          l = this.getPRNumberCumulatedFromPreviousIndex(this.linearPosition.keyPoint.prNumber,
            g);
        if (k >= this.minBound && k <= this.maxBound)if (d = k - this.minBound, d >= c.y) {
          h = ImajnetLRSGUICommon.roadsPRData[this.currentRoadId].pr[e - 1] ? ImajnetLRSGUICommon.roadsPRData[this.currentRoadId].pr[e - 1].prNumber : -1;
          d = l * (1 - (d - c.y) / f);
          break
        } else h = ImajnetLRSGUICommon.roadsPRData[this.currentRoadId].pr[e].prNumber, d = l * (c.y - d) / f; else if (k >= this.minBound) {
          k = this.getPROffset(e - 1);
          h = ImajnetLRSGUICommon.roadsPRData[this.currentRoadId].pr[e - 1] ? ImajnetLRSGUICommon.roadsPRData[this.currentRoadId].pr[e - 1].prNumber : -1;
          d =
            l * (this.minBound + c.y - k) / f;
          break
        }
      }
      return -1 == h || h == ImajnetLRSGUICommon.roadsPRData[this.currentRoadId].pr[this.prLength - 1].prNumber || 0 > d ? null : {
        prNumber: h,
        relativeAbscisa: b ? LRS.transformToMeters(d, g) : d
      }
    },
    getPRNumberIndex: function (a) {
      for (var b = 0; b < this.prLength; b++)if (ImajnetLRSGUICommon.roadsPRData[this.currentRoadId].pr[b].prNumber == a)return b;
      return -1
    },
    getPRNumberCumulatedFromPreviousIndex: function (a, b) {
      for (var c = 0; c < this.prLength; c++)if (ImajnetLRSGUICommon.roadsPRData[this.currentRoadId].pr[c].prNumber ==
        a) {
        if (ImajnetLRSGUICommon.roadsPRData[this.currentRoadId].pr[c + 1] && ImajnetLRSGUICommon.roadsPRData[this.currentRoadId].pr[c + 1].relativeDistance)return LRS.transformFromMeters(ImajnetLRSGUICommon.roadsPRData[this.currentRoadId].pr[c + 1].relativeDistance, b);
        break
      }
      return LRS.transformFromMeters("feet" == b ? LRS.metersInAMile : 1E3, b)
    },
    computeStartEndPR: function (a) {
      if (!this.PRStart || this.PRStart > a) this.PRStart = a;
      this.PREnd < a && (this.PREnd = a)
    },
    drawRoad: function (a) {
      var b = jQuery.Deferred();
      if (!ImajnetLRSGUICommon.roadsPRData[this.currentRoadId])return this.hide(),
        b.reject(), b;
      this.show();
      this.hideOrientation();
      ImageControler.currentGraphic.initLRSGUI(this);
      var c = LRS.getRoadUnitType(this.linearPosition.road.unit),
        f = this.getPRNumberCumulatedFromPreviousIndex(this.linearPosition.keyPoint.prNumber, c),
        h = this.getPRNumberIndex(this.linearPosition.keyPoint.prNumber);
      if (-1 == h)return this.hide(), b.reject(), b;
      var d = this.KMToPixelZoom(), g = this.getPROffset(h) + d * this.PRStart / f;
      this.roadRedraw = !1;
      if (this.redrawRoad || !this.minBound || !this.maxBound || g < this.minBound + 10 || g >
        this.maxBound - 10 || this.isZoomMode || this.isDragMode) {
        this.redrawRoad = !1;
        this.isDragMode ? this.minBound += a : this.isZoomMode ? this.minBound = this.getPROffset(this.zoomBoxIndex) + d * this.centerLinearPosition.relativeAbscisa / f - this.containerHeight / 2 + a : (this.roadRedraw = !0, this.dragOffset = 0, this.minBound = g - this.containerHeight / 2, this.centerLinearPosition = Nigsys.cloneObject(this.linearPosition), this.zoomBoxIndex = h, this.zoomOffset = 0);
        this.maxBound = this.minBound + this.containerHeight;
        a = this.getPROffset(0);
        a > this.minBound +
        this.prSize && (a = a - this.minBound - this.prSize, this.isDragMode ? this.dragOffset -= a : (this.isZoomMode && (this.dragOffset = 0), this.minBoundOffset = a, this.maxBoundOffset = 0), this.dragZoomLevel = this.currentZoomLevel, this.minBound += a, this.maxBound = this.minBound + this.containerHeight);
        a = this.getPROffset(this.prLength - 1);
        a < this.maxBound - 5 && (a = this.maxBound - a - 5, this.isDragMode ? this.dragOffset += a : (this.isZoomMode && (this.dragOffset = 0), this.maxBoundOffset = a, this.minBoundOffset = 0), this.dragZoomLevel = this.currentZoomLevel,
          this.minBound -= a, this.maxBound = this.minBound + this.containerHeight);
        a = 4;
        if (Nigsys.browserIsOpera() || Nigsys.isWindows())if (a = 6, this.PRTextOffset = 9, Nigsys.browserIsIE8() || Nigsys.browserIsIE7()) this.PRTextOffset = 6;
        ImageControler.currentGraphic.clearLRSGUI(this);
        ImageControler.currentGraphic.drawLRSGUILine(this);
        for (g = this.PREnd = this.PRStart = 0; g < this.prLength; g++) {
          var e = this.getPROffset(g) - this.minBound,
            k = ImajnetLRSGUICommon.roadsPRData[this.currentRoadId].pr[g].prNumber,
            f = this.getPRNumberCumulatedFromPreviousIndex(g,
              c);
          0 > e && 0 < e + d ? (this.computeStartEndPR(k), ImageControler.currentGraphic.drawPRDivisions(this, {
            x: this.roadXOffset + this.PRDivisionOffset,
            y: e
          }, d, f)) : 0 <= e && e <= this.containerHeight + this.prSize && (this.computeStartEndPR(k), ImageControler.currentGraphic.drawPR(this, {
              x: this.roadXOffset - this.prSize / 2,
              y: e
            }, k, a), e <= this.containerHeight && ImageControler.currentGraphic.drawPRDivisions(this, {
              x: this.roadXOffset + this.PRDivisionOffset,
              y: e
            }, d, f))
        }
        this.PRStart--;
        this.PREnd++;
        "undefined" !== typeof LRSSchematic && LRSSchematic &&
        LRSSchematic.LRSGUI && !LRSSchematic.exportRatio && (LRSSchematic.LRSGUI.linearPosition.keyPoint || (LRSSchematic.LRSGUI.linearPosition.keyPoint = {}), LRSSchematic.LRSGUI.linearPosition.keyPoint.prNumber = Math.ceil(this.PRStart + (this.PREnd - this.PRStart) / 2), LRSSchematic.LRSGUI.linearPosition.relativeAbscisa = 0);
        this.isFirstDraw && (Nigsys.browserIsOpera() || jQuery("svg text tspan:first-child").attr("dy", 3), this.isFirstDraw = !1);
        this.onDrawRoadEnd().done(function () {
          b.resolve()
        }).fail(function () {
          b.reject()
        })
      } else b.resolve();
      c = this.getPROffset(h) + d * this.linearPosition.relativeAbscisa / f - this.minBound;
      ImageControler.currentGraphic.drawLRSGUIImageOrientation(this, {x: this.roadXOffset, y: c}, h);
      return b.promise()
    },
    computetMiddlePRIfNotDefined: function () {
      this.linearPosition.keyPoint.prNumber || (ImajnetUI.LRSGUI && ImajnetUI.LRSGUI.linearPosition && ImajnetUI.LRSGUI.linearPosition.road.id == this.linearPosition.road.id ? (this.linearPosition.keyPoint.prNumber = ImajnetUI.LRSGUI.linearPosition.keyPoint.prNumber, this.linearPosition.relativeAbscisa =
        ImajnetUI.LRSGUI.linearPosition.relativeAbscisa) : (this.linearPosition.keyPoint.prNumber = ImajnetLRSGUICommon.roadsPRData[this.currentRoadId].pr[parseInt(ImajnetLRSGUICommon.roadsPRData[this.currentRoadId].pr.length / 2)].prNumber, this.linearPosition.relativeAbscisa = 0))
    },
    onGetRoadSuccess: function (a, b) {
      if (a.pr) b && b.LRSObject && b.LRSObject.resetData(a.pr.length), a.roadId && a.roadId == b.LRSObject.currentRoadId && (ImajnetLRSGUICommon.roadsPRData[b.LRSObject.currentRoadId] = a, ImajnetLRSGUICommon.onImajnetImageRoadChange(b.LRSObject),
        b.LRSObject.resetZoom(), b.LRSObject.drawRoad(null)); else if (b && b.LRSObject) b.LRSObject.onGetRoadError(a, b)
    },
    onGetRoadError: function (a, b) {
      b && b.LRSObject && b.LRSObject.hide()
    },
    resetData: function (a) {
      this.currentRoadId != this.lastRoadId && (this.lastRoadId = this.currentRoadId, this.maxBoundOffset = this.minBoundOffset = this.maxBound = this.minBound = 0, this.prLength = a, this.maxZoomLevel = this.zeroBasedMaxZoomLevel, this.startZoomLevel = this.defaultZoomLevel, this.startZoomLevel < this.getMinZoomLevel() && (this.startZoomLevel =
        this.getMinZoomLevel()), this.dragZoomLevel = this.currentZoomLevel = this.startZoomLevel, "undefined" !== typeof LRSSchematic && LRSSchematic.setZoomLevelsSelectHTML())
    },
    draw: function (a) {
      var b = jQuery.Deferred();
      this.LRSResponse = a;
      this.linearPosition = this.getFirstLRS(this.LRSResponse.linearPosition, this.linearPosition);
      if (!this.linearPosition || !this.linearPosition.road || !this.linearPosition.road.id)return b.resolve(), b.promise();
      this.linearPosition.keyPoint || (this.linearPosition.keyPoint = {});
      this.isFirstDraw =
        !0;
      this.roadType = this.linearPosition.road.type ? this.linearPosition.road.type : "1";
      this.currentRoadId = this.linearPosition.road.id;
      return ImajnetLRSGUICommon.roadsPRData[this.currentRoadId] ? (this.resetData(ImajnetLRSGUICommon.roadsPRData[this.currentRoadId].pr.length), this.resetZoom(), ImajnetLRSGUICommon.onImajnetImageRoadChange(this), this.drawRoad(null), b.resolve(), b.promise()) : LRSRequest.getRoad(this.linearPosition.road.id, this.onGetRoadSuccess, this.onGetRoadError, {LRSObject: this})
    },
    show: function () {
      Nigsys.isPositionMode() ||
      Nigsys.isMeasurementMode() || Nigsys.isPolyligneMode() || (this.container && this.container.show(), this.dragContainer && this.dragContainer.show(), "undefined" !== typeof ImajnetUI && ImajnetUI.docking.imageLRSGUI && this === ImajnetUI.LRSGUI && ImajnetUI.docking.imageLRSGUI.mainContainer.show())
    },
    hide: function () {
      this.LRSResponse = null;
      this.container && this.container.hide();
      this.dragContainer && this.dragContainer.hide();
      "undefined" !== typeof ImajnetUI && ImajnetUI.docking.imageLRSGUI && this === ImajnetUI.LRSGUI && ImajnetUI.docking.imageLRSGUI.mainContainer.hide()
    },
    hideOrientation: function () {
      ImageControler.currentGraphic.clearLRSGUIImageOrientation(this)
    }
  };
  c.init();
  return c
};
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
var lastLoadedImageId = "", ImajnetAPI = {
  imageServerDomains: null,
  apiServerDomains: null,
  mustAbortRequests: !1,
  imageLoadQueue: [],
  imajnetOrderRequest: null,
  imajnetClosestPositionRequest: null,
  PREVIOUS: "previous",
  NEXT: "next",
  nextPositionCache: [],
  previousPositionCache: [],
  lastNavigationPositionImageId: "",
  angleWrapper: null,
  MAX_CACHE_IMAGE_POSITIONS: 1E3,
  imajnetImage: null,
  horizontalAngleRequest: null,
  lastOrderType: "",
  orderedImagesId: [],
  getPreviousImageFromCache: function (a) {
    for (var b = 0; b < ImajnetAPI.previousPositionCache.length; b++)if (ImajnetAPI.previousPositionCache[b].imageId ==
      a)return ImajnetAPI.previousPositionCache[b].orderImagePosition;
    return null
  },
  getNextImageFromCache: function (a) {
    for (var b = 0; b < ImajnetAPI.nextPositionCache.length; b++)if (ImajnetAPI.nextPositionCache[b].imageId == a)return ImajnetAPI.nextPositionCache[b].orderImagePosition;
    return null
  },
  buildImageURLWithResolution: function (a, b, c) {
    if (a && b)return a = new ImajnetData.imageParameter(a.id, b, c), a = JSON.stringify(a), a = encodeURI(a), null !== ImajnetAPI.imageServerDomains ? (a = "/service/api/image/" + a, ImajnetMap.selectUrl(a,
      ImajnetAPI.imageServerDomains) + a) : Imajnet.serverUrl + "/api/image/" + a
  },
  buildImageURL: function (a, b, c) {
    b = b ? b : ImajnetSettings.getImageResolution();
    return ImajnetAPI.buildImageURLWithResolution(a, b, c)
  },
  shouldNavigate: function () {
    if (!ImajnetMap.currentPosition)return !0;
    if (ImajnetAPI.lastNavigationPositionImageId == ImajnetMap.currentPosition.id)return !1;
    ImajnetAPI.lastNavigationPositionImageId = ImajnetMap.currentPosition.id;
    return !0
  },
  loadDefaultImage: function (a) {
    ImageControler.currentImageControl.setCurrentImage(a);
    ImajnetUI.appendDefaultImage()
  },
  preloadImage: function (a, b, c, d) {
    a.bind({error: d(a, b), load: c(a, b)}).attr("src", b)
  },
  loadImageType: function (a) {
    var b = jQuery.Deferred();
    if (ImajnetZoom.canZoom())return ImajnetUI.stopSwipeNavigation(!0), b.resolve(null), b.promise();
    ImajnetAPI.doImajnetRequestDeferred("GET", "/api/sequence/photogrammetryInfo?traceId\x3d" + a.traceId, null, null, null, null, null, !0, null).done(function (a, d) {
      var f = JSON.parse(a);
      ImageControler.setCurrentImageControl(f);
      b.resolve(f)
    }).fail(function (a,
                      d) {
      ImageControler.setCurrentImageControl({imageType: "flat"});
      b.resolve(null)
    });
    return b.promise()
  },
  onSetImajnetImage: function (a, b) {
    if (ImajnetUI) {
      try {
        ImajnetUI.LRSGUI.hideOrientation()
      } catch (d) {
      }
      LRS.hideLRS();
      "undefined" !== typeof ImajnetUI && ImajnetUI.hideError();
      "undefined" !== typeof ImajnetZoom && (ImajnetZoom.zoomBigImageLoaded = !1);
      if (a)if (Imajnet.activateImajnet(), a.position) ImajnetMap.setCurrentPosition(a.position), ImageControler.currentPhotogrammetry.init(), ImageControler.currentImageControl.loadImage(a);
      else {
        a.parameter && a.parameter.coordinates && ImajnetPlugin.centerMapToPosition(a.parameter.coordinates, !0);
        ImajnetMap.setCurrentPosition(a && a.parameter && a.parameter.order ? ImajnetMap.currentPosition : null);
        var c = "";
        a.parameter && a.parameter.order ? (Nigsys.isPositionMode() ? ImajnetPosition.showHidePositionDenied() : Nigsys.isMeasurementMode() ? ImajnetMeasurement.showHideMeasurementDenied() : Nigsys.isPolyligneMode() && ImajnetPolyligne.showHideDenied(), c = jQuery.imajnet.map.errors.unableToNavigate) : (ImajnetUI.showItem(ImajnetUI.imageContainerId),
          ImageControler.currentImageControl.loadImage({position: null}), c = jQuery.imajnet.map.errors.noImajnetImageAtPosition);
        Nigsys.hideLoading(ImajnetUI.imageContainer);
        ImajnetUI.showError(c, !1);
        setTimeout("ImajnetUI.hideError()", 3E3)
      } else ImajnetMap.setCurrentPosition(null), ImajnetMap.setCurrentPosition(a && a.parameter && a.parameter.order ? ImajnetMap.currentPosition : null);
      ImajnetUI.showItem(ImajnetUI.imageContainerId);
      jQuery(ImajnetEvents.mappingObject).trigger({type: ImajnetEvents.positionChangeEventName})
    }
  },
  isImageValid: function (a) {
    if (!ImajnetAPI.lastOrderType)return !0;
    for (var b = 0; b < ImajnetAPI.orderedImagesId.length; b++)if (ImajnetAPI.orderedImagesId[b] == a)return ImajnetAPI.orderedImagesId.splice(0, b + 1), !0;
    return !1
  },
  canLoadImageRequests: function (a) {
    return !ImajnetAPI.orderedImagesId.length || position.id == ImajnetAPI.orderedImagesId[ImajnetAPI.orderedImagesId.length - 1]
  },
  setImajnetImage: function (a, b) {
    var c = jQuery.Deferred();
    if (!a || !a.position)return ImajnetAPI.orderedImagesId = [], ImageControler.currentImageControl &&
    (ImageControler.setCurrentImageControl({imageType: "flat"}), ImajnetAPI.onSetImajnetImage(a, b)), c.resolve(), c.promise();
    a.parameter && a.parameter.order && ImajnetAPI.lastOrderType == a.parameter.order ? ImajnetAPI.orderedImagesId.push(a.position.id) : (ImajnetAPI.lastOrderType = "", ImajnetAPI.orderedImagesId = []);
    ImajnetAPI.loadImageType(a.position).done(function (d) {
      d && (ImajnetZoom.HIGH_RESOLUTION_WIDTH = d.nativeImageSize.width, ImajnetZoom.HIGH_RESOLUTION_HEIGHT = d.nativeImageSize.height, ImajnetUI.fullSizeAspectRatio =
        ImajnetZoom.HIGH_RESOLUTION_WIDTH / ImajnetZoom.HIGH_RESOLUTION_HEIGHT, ImajnetZoom.LOW_RESOLUTION_WIDTH = d.lowRezolutionImageSize.width, ImajnetZoom.LOW_RESOLUTION_HEIGHT = d.lowRezolutionImageSize.height, ImajnetZoom.MEDIUM_RESOLUTION_WIDTH = d.mediumRezolutionImageSize.width, ImajnetZoom.MEDIUM_RESOLUTION_HEIGHT = d.mediumRezolutionImageSize.height);
      ImajnetAPI.onSetImajnetImage(a, b);
      c.resolve()
    });
    return c.promise()
  },
  onClosestPositionReceived: function (a, b) {
    var c = JSON.parse(a);
    ImajnetAPI.setImajnetImage(c, b)
  },
  getClosestPosition: function (a, b, c, d, f, h) {
    ImajnetUI.stopSwipeNavigation(!0);
    ImajnetZoom.left = -1;
    ImajnetAPI.mustAbortRequests && null !== ImajnetAPI.imajnetClosestPositionRequest && ImajnetAPI.imajnetClosestPositionRequest.abort();
    "undefined" !== typeof ImajnetUI && Nigsys.showLoading(ImajnetUI.imageContainer);
    "undefined" !== typeof ImajnetClickMode && ImajnetClickMode.hideOrientedImages();
    a = new ImajnetData.closestPositionParameter(a, b, c);
    ImajnetAPI.imajnetClosestPositionRequest = ImajnetAPI.doImajnetRequest("GET",
      "/api/positions/closest/", a, function (a, b) {
        ImajnetAPI.onClosestPositionReceived(a, b);
        "function" === typeof d && d(a, b)
      }, function (a, b) {
        ImajnetUI.showItem(ImajnetUI.imageContainerId);
        ImajnetAPI.onError(a, b);
        "function" === typeof f && f(a, b)
      }, null, null, null, h)
  },
  onError: function (a, b) {
    try {
      if (ImajnetZoom.left = -1, a && a.responseText) {
        var c = JSON.parse(a.responseText);
        c && c.radius && !c.position && !c.parameter && (c.parameter = Nigsys.cloneObject(c));
        ImajnetAPI.setImajnetImage(c, b)
      } else"abort" != a.statusText && ImajnetAPI.setImajnetImage(null,
        b)
    } catch (d) {
      try {
        "abort" != a.statusText && ImajnetAPI.setImajnetImage(null, b)
      } catch (f) {
      }
    }
  },
  doOnPositionOrderReceived: function (a) {
    if (ImajnetZoom.canZoom()) ImajnetUI.stopSwipeNavigation(!0); else try {
      var b = JSON.parse(a);
      b && b.position && b.parameter && b.parameter.order && !b.parameter.useCameraOrientation && (ImajnetAPI.previousPositionCache.length >= ImajnetAPI.MAX_CACHE_IMAGE_POSITIONS && (ImajnetAPI.previousPositionCache = []), ImajnetAPI.nextPositionCache.length >= ImajnetAPI.MAX_CACHE_IMAGE_POSITIONS && (ImajnetAPI.nextPositionCache =
        []), b.parameter.order == ImajnetAPI.NEXT ? (ImajnetAPI.nextPositionCache.push({
        imageId: b.parameter.position.id,
        orderImagePosition: b.position
      }), ImajnetAPI.previousPositionCache.push({
        imageId: b.position.id,
        orderImagePosition: b.parameter.position
      })) : b.parameter.order == ImajnetAPI.PREVIOUS && (ImajnetAPI.previousPositionCache.push({
          imageId: b.parameter.position.id,
          orderImagePosition: b.position
        }), ImajnetAPI.nextPositionCache.push({imageId: b.position.id, orderImagePosition: b.parameter.position})));
      ImajnetAPI.setImajnetImage(b)
    } catch (c) {
    }
  },
  positionOrderReceived: function (a) {
    ImajnetAPI.doOnPositionOrderReceived(a)
  },
  getByOrder: function (a, b) {
    ImajnetAPI.mustAbortRequests && ImajnetAPI.imajnetOrderRequest && ImajnetAPI.imajnetOrderRequest.abort();
    if (ImajnetZoom.canZoom()) ImajnetUI.stopSwipeNavigation(!0); else if (ImajnetMap.currentPosition && ImajnetAPI.shouldNavigate()) {
      "onDragEnd" != arguments.callee.caller.arguments.callee.caller.name && ImajnetUI.stopSwipeNavigation(!1);
      ImajnetAPI.lastOrderType = a;
      if (!b) {
        var c = null;
        a == this.NEXT ? c = ImajnetAPI.getNextImageFromCache(ImajnetMap.currentPosition.id) :
          a == this.PREVIOUS && (c = ImajnetAPI.getPreviousImageFromCache(ImajnetMap.currentPosition.id));
        if (c) {
          ImajnetAPI.setImajnetImage({position: c, parameter: {order: a}});
          return
        }
      }
      c = new ImajnetData.imageOrderParameter(ImajnetMap.currentPosition, a, b);
      ImajnetAPI.imajnetOrderRequest = ImajnetAPI.doImajnetRequest("GET", "/api/positions/order/", c, this.positionOrderReceived, this.onError)
    }
  },
  getHorizontalAngle: function (a, b) {
    if (a) {
      var c = null,
        c = "CUBE" == ImageControler.currentImageType ? CubePlugin.getRealImageCoordinatesFromMousePosition(a.x,
          a.y) : ImajnetZoom.getRealImageCoordinates(a.x, a.y), d = {};
      d.imagePoint = {img: b, imgCoord: c};
      c = "/api/photogrammetry/horizontalAngle/" + encodeURIComponent(JSON.stringify(d));
      ImajnetAPI.horizontalAngleRequest = ImajnetAPI.doImajnetRequest("GET", c, null, this.horizontalAngleReceived, this.horizontalAngleError)
    }
  },
  horizontalAngleReceived: function (a) {
    if (a = JSON.parse(a)) {
      var b = a.parameter.imagePoint.img, c = b.orientation.yaw,
        b = Nigsys.transformImajnetOrientationPoint(Object({x: b.lon, y: b.lat}), new Proj4js.Proj("EPSG:4326"),
          new Proj4js.Proj("EPSG:900913")), d = ImajnetMap.imajboxTriangleDimension,
        d = ImajnetPlugin.getMapScale() / d * 3, d = ImajnetAPI.getHorizontalAngleCoordinates(b, d);
      Nigsys.rotatePoint(c - a.angle, b, d[1]);
      for (a = 0; a < d.length; ++a)d[a] = Nigsys.transformImajnetOrientationPoint(d[a], new Proj4js.Proj("EPSG:900913"), new Proj4js.Proj("EPSG:4326"));
      ImajnetAPI.clearHorizontalAngle();
      ImajnetAPI.angleWrapper = ImajnetPlugin.addFeature(ImajnetMap.imajnetDragFeaturesLayer, d, {
        type: "LineString", strokeWidth: 2, strokeColor: "#00ff00",
        zIndex: 2
      })
    }
  },
  horizontalAngleError: function () {
    ImajnetAPI.clearHorizontalAngle()
  },
  clearHorizontalAngle: function () {
    ImajnetAPI.angleWrapper && (ImajnetPlugin.removeFeatures(ImajnetMap.imajnetDragFeaturesLayer, [ImajnetAPI.angleWrapper]), ImajnetAPI.angleWrapper = null)
  },
  getHorizontalAngleCoordinates: function (a, b) {
    var c = [];
    c.push(a);
    c.push({x: a.x, y: a.y + b});
    return c
  },
  getImajnetRequestUrl: function (a) {
    null !== ImajnetAPI.apiServerDomains && 0 !== ImajnetAPI.apiServerDomains.length ? (a = "/service" + a, requestUrl = ImajnetMap.selectUrl(a,
        ImajnetAPI.apiServerDomains) + a) : requestUrl = Imajnet.serverUrl + a;
    if (a = window.location.hostname) requestUrl = -1 === requestUrl.indexOf("?") ? requestUrl + "?" : requestUrl + "\x26", requestUrl += "param\x3d" + a;
    return requestUrl
  },
  getImajnetRequestParams: function (a, b, c, d, f, h, k, g, e) {
    var l = "", m = "";
    c && (l = JSON.stringify(c), m = encodeURIComponent(l));
    c = b;
    "post" != a.toLowerCase() && (c += m);
    return {
      type: a,
      url: ImajnetAPI.getImajnetRequestUrl(c),
      dataType: "json",
      cache: 1 == k,
      crossDomain: {crossDomain: !0},
      xhrFields: {withCredentials: !0},
      beforeSend: ImajnetProtocol.buildHeaders,
      data: "post" == a.toLowerCase() ? l : "",
      timeout: 2E5,
      complete: function (a) {
        void 0 !== h && null !== h && h(a, g);
        if (200 == a.status)if ("function" === typeof d) {
          var c = d(a.responseText, g);
          e && (c && jQuery.isFunction(c.promise) ? c.done(function () {
            e.resolve(a.responseText, g)
          }).fail(function () {
            e.reject(null, g)
          }) : e.resolve(a.responseText, g))
        } else e && e.resolve(a.responseText, g); else {
          if (401 != a.status)if (403 == a.status) ImajnetAPI.onError(a, g), "function" === typeof f && f(a, g); else if ("function" ===
            typeof f) {
            if ("/api/positions/closest/" == b) ImajnetAPI.onError(a, g);
            f(a, g)
          }
          e && e.reject(null, g)
        }
      }
    }
  },
  doImajnetRequest: function (a, b, c, d, f, h, k, g, e) {
    a = ImajnetAPI.getImajnetRequestParams(a, b, c, d, f, h, g, e);
    e && e.params && jQuery.extend(a, e.params);
    return jQuery.ajax(a)
  },
  doImajnetRequestDeferred: function (a, b, c, d, f, h, k, g, e) {
    k = jQuery.Deferred();
    a = ImajnetAPI.getImajnetRequestParams(a, b, c, d, f, h, g, e, k);
    e && e.params && jQuery.extend(a, e.params);
    jQuery.ajax(a);
    return k.promise()
  }
};
var ImajnetData = {
  coordinates: function (a, c, b) {
    this.lat = a;
    this.lon = c;
    this.height = b
  }, closestPositionParameter: function (a, c, b) {
    this.coordinates = new ImajnetData.coordinates(a, c, 0);
    this.radius = b;
    this.timeframe = ImajnetTimeframe.getTimeframe();
    this.sequenceType = Imajnet.sequenceType
  }, position: function (a) {
    this.id = a
  }, imageParameter: function (a, c, b) {
    this.position = new ImajnetData.position(a);
    this.resolution = c;
    b && (this.face = b)
  }, imageOrderParameter: function (a, c, b) {
    return {
      position: a, order: c, useCameraOrientation: b,
      timeframe: ImajnetTimeframe.getTimeframe()
    }
  }, sequenceDetailsParameter: function (a) {
    return {image: a}
  }
};
var ImajnetProtocol = {
  firstLoginTry: !0,
  loginRememberMe: "notSet",
  user: null,
  requestAccessNotificationContainer: null,
  loginStatus: -1,
  getUsernameForUrl: function (a) {
    var b = ImajnetUser.getUsername();
    if (!b)return "";
    var c = -1 == a.indexOf("?") ? "?" : "\x26";
    return a + c + "client\x3d" + b
  },
  getDataFormat: function () {
    var a = "application/json";
    "XML" == Imajnet.IMAJNET_DATA_FORMAT && (a = "application/xml");
    return a
  },
  buildHeaders: function (a, b, c, d) {
    var e = ImajnetProtocol.getDataFormat();
    a.setRequestHeader("Content-Type", e);
    a.setRequestHeader("Accept",
      e);
    a.setRequestHeader("metadata", Imajnet.metadata);
    b && c && a.setRequestHeader("Authorization", "Basic " + Base64.encode(b + ":" + c));
    d && Imajnet.options.sessionType && a.setRequestHeader("sessionType", Imajnet.options.sessionType)
  },
  buildImageHeaders: function (a) {
    a.setRequestHeader("metadata", Imajnet.metadata)
  },
  loginTimeout: function () {
    Nigsys.loginNotification && Nigsys.loginNotification.isOpen && (Nigsys.showLoginError(jQuery.imajnet.login.error.unknown), jQuery("#imajnetLoginButton").prop("disabled", !1), jQuery("#imajnetLoginRequestAccess").prop("disabled",
      !1), jQuery(document).bind("keydown", ImajnetUI.clickLogin))
  },
  getErrorMessage: function (a) {
    var b = "";
    return b = (b = a.getResponseHeader("authenticationException")) ? b == ImajnetResponse.header.UNAUTHETICATED ? jQuery.imajnet.login.error.header.unauthenticated : b == ImajnetResponse.header.UNAUTHORISED ? jQuery.imajnet.login.error.header.unauthorized : b == ImajnetResponse.header.ACCOUNT_LOCKED ? jQuery.imajnet.login.error.header.accountLocked : b == ImajnetResponse.header.ACCOUNT_DISABLED ? jQuery.imajnet.login.error.header.accountDisabled :
      b == ImajnetResponse.header.ACCOUNT_EXPIRED ? jQuery.imajnet.login.error.header.accountExpired : b == ImajnetResponse.header.CREDENTIALS_EXPIRED ? jQuery.imajnet.login.error.header.credentialsExpired : jQuery.imajnet.login.error.header.unauthenticated : Nigsys.getStatusErrorText(a.status)
  },
  imajnetLoginSuccess: function (a) {
    LRSRequest.getLRSRoads(0, null, function (b, a) {
      LRS.noRoads = b && b.roads && b.roads.length ? !1 : !0
    });
    Imajnet.containerId && (Imajnet.appendImajnetHTMLElements(Imajnet.containerId), ImajnetUI.initContainers());
    "undefined" !== typeof ImajnetUI && ImajnetUI && jQuery(document).unbind("keydown", ImajnetUI.clickLogin);
    "undefined" !== typeof ImajnetUI && ImajnetUI && ImajnetUI.init();
    Nigsys.loginNotification && Nigsys.loginNotification.close();
    (a || "undefined" !== typeof ImajnetUrl && Imajnet && ImajnetUrl.getUrlParamValue(ImajnetUrl.LOCATION_URL_PARAM_NAME)) && Imajnet.activateImajnet();
    Imajnet.options.goToClosestPointOfInterest && ImajnetMap.loadPOI();
    Nigsys.hideLoading(jQuery(Imajnet.containerId))
  },
  imajnetLogin: function (a, b, c) {
    a = a || {};
    var d = jQuery.Deferred();
    ImajnetUser.resetUserData(!1);
    if (!Imajnet.serverUrl)return console.error("Imajnet server url not defined"), d.reject(), d.promise();
    ImajnetProtocol.loginStatus = a.status;
    jQuery.ajax({
      type: "GET",
      url: './ImajnetLib/json/login.json',
      cache: !1,
      dataType: "json",
      timeout: Nigsys.requestsTimeout,
      crossDomain: {crossDomain: !0},
      xhrFields: {withCredentials: !0},
      beforeSend: function (c) {
        ImajnetProtocol.buildHeaders(c, a, b, !0)
      },
      complete: function (a, b) {
        ImajnetProtocol.loginStatus =
          a.status;
        if (ImajnetProtocol.loginStatus == ImajnetResponse.OK) {
          Nigsys.onMobile() && Nigsys.isSafari() && jQuery("#container").css("position", "fixed");
          var f = JSON.parse(a.responseText);
          ImajnetUser.setData(f.user);
          "undefined" !== typeof ImajnetMap && ImajnetMap && (ImajnetMap.key = ImajnetUser.data.cartographicKey ? ImajnetUser.data.cartographicKey : "imajnet1", ImajnetMap.initLRSUrl());
          "undefined" !== typeof ImajnetSettings && ImajnetSettings && (ImajnetSettings.init(), ImajnetSettings.getSettings().done(function () {
            "undefined" !==
            typeof ImageControler && "function" === typeof ImageControler.initDefaults && ImageControler.initDefaults();
            c && console.log("Imajnet Logged in");
            ImajnetPlugin.imajnetLoginSuccess();
            ImajnetProtocol.imajnetLoginSuccess(c);
            d.resolve()
          }).fail(function () {
            "undefined" !== typeof ImageControler && "function" === typeof ImageControler.initDefaults && ImageControler.initDefaults();
            c && console.log("Imajnet Logged in");
            ImajnetPlugin.imajnetLoginSuccess();
            ImajnetProtocol.imajnetLoginSuccess(c);
            d.resolve()
          }))
        } else ImajnetPlugin.imajnetLoginError(a),
          d.reject();
        Nigsys.deleteCookies("IMAJNET")
      },
      error: function () {
        d.reject()
      }
    });
    return d.promise()
  },
  imajnetLogout: function (a) {
    var b = jQuery.Deferred();
    if ("undefined" !== typeof ImajnetPolyligne) ImajnetPolyligne.onFinish();
    if (!Imajnet.serverUrl)return console.error("Imajnet server url not defined"), b.reject(), b.promise();
    Nigsys.onMobile() && Nigsys.isSafari() && jQuery("#container").css("position", "static");
    ImajnetUser.resetUserData(!0);
    jQuery.ajax({
      type: "GET", url: Imajnet.serverUrl + "/logout", cache: !1, async: !1,
      complete: function () {
        console.log("Imajnet Logged out");
        ImajnetPlugin.imajnetLogoutComplete();
        b.resolve()
      }
    });
    a && "undefined" !== typeof ImajnetUrl && (ImajnetUrl.deleteUrlParams(), ImajnetUrl.applyUrlParams(!0));
    ImajnetProtocol.loginStatus != ImajnetResponse.OK && b.resolve();
    return b.promise()
  },
  requestAccess: function () {
    -1 != applicationDomain.indexOf("test.imajnet.net") || -1 != applicationDomain.indexOf("web.imajnet.net") ? window.open("https://imajnet.net/registration") : window.open("http://" + window.location.hostname +
      "/registration")
  },
  doLogin: function () {
    jQuery(Nigsys.loginNotification.element).hide();
    jQuery("#imajnetLoginButton").prop("disabled", !0);
    jQuery("#imajnetLoginRequestAccess").prop("disabled", !0);
    "undefined" !== typeof ImajnetUI && jQuery(document).unbind("keydown", ImajnetUI.clickLogin);
    Nigsys.errorNotification && Nigsys.errorNotification.close();
    Nigsys.showImajnetLoading();
    if ("notSet" == ImajnetProtocol.loginRememberMe) {
      var a = jQuery("#rememberMe");
      a.length && (ImajnetProtocol.loginRememberMe = a.is(":checked"))
    }
    return ImajnetProtocol.imajnetLogin(jQuery("#username").val(),
      jQuery("#password").val(), !Imajnet.options || Imajnet.options.activateImajnet)
  }
};
var ImajnetSettings = {
  rangeAddress: 3E3,
  rangeLRS: 30,
  rangeClosestPositionUrl: 50,
  limitImageSwitcher: 30,
  limitSurveyTrace: 30,
  limitOrientedImages: 30,
  IMAJNET_GIS: "IMAJNET_GIS",
  IMAJNET: "IMAJNET",
  IMAJNET_LIB: "IMAJNET_LIB",
  imajnetMode: null,
  timeframe: null,
  imajnetImageResolutions: {0: "thumbnail", 1: "low", 2: "medium", 3: "high"},
  imajnetLanguages: {0: "en", 1: "fr", 2: "es"},
  imageRetrievalOptions: {CLOSEST: "CLOSEST", NEWEST: "NEWEST", BEST: "BEST"},
  defaultImajnetSettings: {
    imageQuality: 2, surveyTrace: 30, imageSwitcher: 10, imageRetrievalOptions: "CLOSEST",
    orientedImages: 50, projection: 50
  },
  imajnetSettings: null,
  rangeImajnetSettings: {
    imageQuality: {low: 1, high: 3},
    surveyTrace: {low: 10, high: 100},
    imageSwitcher: {low: 0, high: 20},
    orientedImages: {low: 10, high: 150},
    projection: {low: 10, high: 100}
  },
  sliders: {imageQuality: null, surveyTrace: null, imageSwitcher: null, orientedImages: null, projection: null},
  init: function () {
    var a = Address.OPTIONS_OSM;
    a && "undefined" !== typeof Address && Address && (Address.currentSearchOption = a)
  },
  getImageResolution: function () {
    return ImajnetMap.currentPosition &&
    -1 !== ImajnetZoom.zoomedImagesCache.indexOf(ImajnetMap.currentPosition.id) ? this.imajnetImageResolutions[3] : this.imajnetSettings ? this.imajnetImageResolutions[this.imajnetSettings.imageQuality] : null
  },
  getImajnetSettingsPopupHTML: function () {
    var a = "", b;
    for (b in ImajnetSettings.imageRetrievalOptions)a += '\x3cdiv\x3e\x3cinput type\x3d"radio" name\x3d"imageRetrievalOptions" value\x3d"' + ImajnetSettings.imageRetrievalOptions[b] + '" /\x3e\x26nbsp;' + jQuery.imajnet.settings.imageOptions[ImajnetSettings.imageRetrievalOptions[b]] +
      "\x3c/div\x3e";
    return '\x3cdiv class\x3d"optionsGroup"\x3e\x3cspan class\x3d"popupContentContainerTitle"\x3e' + jQuery.imajnet.settings.imageSectionTitle + '\x3c/span\x3e\x3cdiv style\x3d"margin-top: -10px;"\x3e\x3cdiv class\x3d"left"\x3e\x3cdiv id\x3d"popupContentContainer"\x3e\x3cdiv class\x3d"left settingsSearchLeft"\x3e' + jQuery.imajnet.settings.imageQuality + '\x3c/div\x3e\x3cdiv class\x3d"left"\x3e\x3cdiv class\x3d"sliderTopTitleSmall"\x3e\x3cdiv class\x3d"left" style\x3d"width: 30px; margin-left: -10px; text-align: center;"\x3e' +
      jQuery.imajnet.settings.imageQualityLow + '\x3c/div\x3e\x3cdiv class\x3d"left" style\x3d"width: 190px; text-align: center;"\x3e' + jQuery.imajnet.settings.imageQualityMedium + '\x3c/div\x3e\x3cdiv class\x3d"left" style\x3d"width: 40px; text-align: center;"\x3e' + jQuery.imajnet.settings.imageQualityHigh + '\x3c/div\x3e\x3cdiv class\x3d"clearLeft"\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv id\x3d"imajnetSettingsImageQualitySlider" style\x3d"width: 240px;"\x3e\x3cdiv class\x3d"ui-slider-handle"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"clearLeft" style\x3d"height: 5px;"\x3e\x3c/div\x3e\x3cdiv class\x3d"left settingsSearchLeft"\x3e' +
      jQuery.imajnet.settings.surveyTrace + '\x3c/div\x3e\x3cdiv class\x3d"left"\x3e\x3cdiv class\x3d"sliderTopTitleSmall"\x3e\x3cdiv class\x3d"left" style\x3d"width: 30px; margin-left: -10px; text-align: center;"\x3e' + jQuery.imajnet.settings.surveyTraceLow + '\x3c/div\x3e\x3cdiv class\x3d"left" style\x3d"width: 185px; text-align: center;"\x3e\x26nbsp;\x3c/div\x3e\x3cdiv class\x3d"left" style\x3d"width: 50px; text-align: center;"\x3e' + jQuery.imajnet.settings.surveyTraceHight + '\x3c/div\x3e\x3cdiv class\x3d"clearLeft"\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv id\x3d"imajnetSettingsVisibleImagesSlider" style\x3d"width: 240px;"\x3e\x3cdiv class\x3d"ui-slider-handle"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"clearLeft" style\x3d"height: 5px;"\x3e\x3c/div\x3e\x3cdiv class\x3d"left settingsSearchLeft"\x3e' +
      jQuery.imajnet.settings.imageSwitcher + '\x3c/div\x3e\x3cdiv class\x3d"left"\x3e\x3cdiv class\x3d"sliderTopTitleSmall"\x3e\x3cdiv class\x3d"left" style\x3d"width: 30px; margin-left: -10px; text-align: center;"\x3e' + jQuery.imajnet.settings.imageSwitcherLow + '\x3c/div\x3e\x3cdiv class\x3d"left" style\x3d"width: 185px; text-align: center;"\x3e\x26nbsp;\x3c/div\x3e\x3cdiv class\x3d"left" style\x3d"width: 50px; text-align: center;"\x3e' + jQuery.imajnet.settings.imageSwitcherHight + '\x3c/div\x3e\x3cdiv class\x3d"clearLeft"\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv id\x3d"imajnetSettingsImageSwitcherSlider" style\x3d"width: 240px;"\x3e\x3cdiv class\x3d"ui-slider-handle"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"clearLeft" style\x3d"height: 10px;"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"left optionsGroupRight" style\x3d"display: none;"\x3e\x3cdiv style\x3d"text-decoration: underline; margin-bottom: 5px;"\x3e' +
      jQuery.imajnet.settings.imageOptions.title + "\x3c/div\x3e" + a + '\x3c/div\x3e\x3cdiv class\x3d"clearLeft"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"optionsGroup"\x3e\x3cspan class\x3d"popupContentContainerTitle"\x3e' + jQuery.imajnet.settings.mapSectionTitle + '\x3c/span\x3e\x3cdiv id\x3d"popupContentContainer" style\x3d"margin-top: -10px;"\x3e\x3cdiv class\x3d"left settingsSearchLeft"\x3e' + jQuery.imajnet.settings.orientedImages + '\x3c/div\x3e\x3cdiv class\x3d"left"\x3e\x3cdiv class\x3d"sliderTopTitle"\x3e\x3cdiv class\x3d"left" style\x3d"width: 30px; margin-left: -10px; text-align: center;"\x3e' +
      jQuery.imajnet.settings.orientedImagesLow + '\x3c/div\x3e\x3cdiv class\x3d"left" style\x3d"width: 355px; text-align: center;"\x3e\x26nbsp;\x3c/div\x3e\x3cdiv class\x3d"left" style\x3d"width: 50px; text-align: center;"\x3e' + jQuery.imajnet.settings.orientedImagesHight + '\x3c/div\x3e\x3cdiv class\x3d"clearLeft"\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv id\x3d"imajnetSettingsOrientedImagesSlider" style\x3d"width: 410px;"\x3e\x3cdiv class\x3d"ui-slider-handle"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"clearLeft" style\x3d"height: 10px;"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"optionsGroup"\x3e\x3cspan class\x3d"popupContentContainerTitle"\x3e' +
      jQuery.imajnet.settings.projectionSectionTitle + '\x3c/span\x3e\x3cdiv id\x3d"popupContentContainer" style\x3d"margin-top: -10px;"\x3e\x3cdiv class\x3d"left settingsSearchLeft"\x3e' + jQuery.imajnet.settings.projection + '\x3c/div\x3e\x3cdiv class\x3d"left"\x3e\x3cdiv class\x3d"sliderTopTitle"\x3e\x3cdiv class\x3d"left" style\x3d"width: 30px; margin-left: -10px; text-align: center;"\x3e' + jQuery.imajnet.settings.projectionLow + '\x3c/div\x3e\x3cdiv class\x3d"left" style\x3d"width: 355px; text-align: center;"\x3e\x26nbsp;\x3c/div\x3e\x3cdiv class\x3d"left" style\x3d"width: 50px; text-align: center;"\x3e' +
      jQuery.imajnet.settings.projectionHigh + '\x3c/div\x3e\x3cdiv class\x3d"clearLeft"\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv id\x3d"imajnetSettingsProjectionSlider" style\x3d"width: 410px;"\x3e\x3cdiv class\x3d"ui-slider-handle"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"clearLeft" style\x3d"height: 10px;"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"optionsGroup"\x3e\x3cspan class\x3d"popupContentContainerTitle"\x3e' + jQuery.imajnet.settings.units.title + '\x3c/span\x3e\x3cdiv id\x3d"popupContentContainer" style\x3d"margin-top: -10px;"\x3e\x3cdiv class\x3d"left settingsSearchLeft"\x3e' +
      jQuery.imajnet.settings.units.unit + '\x3c/div\x3e\x3cdiv class\x3d"left"\x3e\x3cselect id\x3d"imajnetSettingsUnit" style\x3d"margin-top: 12px;"\x3e\x3coption value\x3d"m" title\x3d"' + jQuery.imajnet.settings.units.m + '"\x3em\x3c/option\x3e\x3coption value\x3d"feet" title\x3d"' + jQuery.imajnet.settings.units.feet + '"\x3efeet\x3c/option\x3e\x3c/select\x3e\x3c/div\x3e\x3cdiv class\x3d"clearLeft" style\x3d"height: 10px;"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv style\x3d"text-align: center; margin-top: 3px;"\x3e\x3cinput type\x3d"button" value\x3d"' +
      jQuery.imajnet.settings.resetDefaultButton + '" onclick\x3d"ImajnetSettings.resetSettingsToDefault();" class\x3d"dialogButton"\x3e\x3cinput type\x3d"button" value\x3d"' + jQuery.imajnet.settings.saveSettingsButton + '" onclick\x3d"ImajnetSettings.saveSettings();" class\x3d"dialogButton dialogButtonSave"\x3e\x3c/div\x3e'
  },
  getSettings: function () {
    this.getSettingsFromCookie();
    ImajnetLRSSettings.getLRSSettingsFromCookie();
    return ImajnetUserSettings.getUserSettings()
  },
  resetSettingsToDefault: function () {
    for (var a in this.defaultImajnetSettings)"imageRetrievalOptions" ==
    a ? Nigsys.setRadioValue(a, this.defaultImajnetSettings[a]) : this.sliders[a].slider("value", this.defaultImajnetSettings[a]);
    jQuery("#imajnetSettingsUnit").val("m")
  },
  getSettingsFromCookie: function () {
    this.imajnetSettings = Nigsys.cloneObject(this.defaultImajnetSettings);
    var a = Nigsys.getCookie("IMAJNET", "SETTINGS");
    if (a)for (var b in a)this.imajnetSettings[b] = "imageRetrievalOptions" == b && this.imageRetrievalOptions[a[b]] || "unit" == b ? a[b] : a[b] >= this.rangeImajnetSettings[b].low && a[b] <= this.rangeImajnetSettings[b].high ?
      a[b] : this.defaultImajnetSettings[b];
    "undefined" !== typeof ImajnetUI && ImajnetUI && ImajnetUI.computeImageAspectRatio()
  },
  getSettingsFromPopup: function () {
    this.imajnetSettings.imageQuality = this.sliders.imageQuality.slider("value");
    ImajnetUI.computeImageAspectRatio();
    this.imajnetSettings.surveyTrace = this.sliders.surveyTrace.slider("value");
    this.imajnetSettings.imageSwitcher = this.sliders.imageSwitcher.slider("value");
    this.imajnetSettings.imageRetrievalOptions = Nigsys.getRadioValue("imageRetrievalOptions");
    this.imajnetSettings.orientedImages = this.sliders.orientedImages.slider("value");
    this.imajnetSettings.projection = this.sliders.projection.slider("value");
    this.imajnetSettings.unit = jQuery("#imajnetSettingsUnit").val()
  },
  saveSettings: function () {
    ImajnetSettings.getSettingsFromPopup();
    Nigsys.setCookie("IMAJNET", "SETTINGS", ImajnetSettings.imajnetSettings);
    ImageControler.currentPhotogrammetry.redrawClipboard();
    ImajnetUI.hideItem(ImajnetUI.settingsContainerId);
    ImajnetUI.hideItem(ImajnetUI.settingsLRSContainerId)
  },
  showImajnetSettings: function () {
    ImajnetUI.settingsContainer.html("");
    ImajnetUI.settingsContainer.append(ImajnetSettings.getImajnetSettingsPopupHTML());
    ImajnetSettings.sliders.imageQuality = jQuery("#imajnetSettingsImageQualitySlider").slider({
      min: ImajnetSettings.rangeImajnetSettings.imageQuality.low,
      max: ImajnetSettings.rangeImajnetSettings.imageQuality.high,
      value: ImajnetSettings.imajnetSettings.imageQuality,
      slide: function (a, b) {
        ImajnetSettings.imageQuality = b.value
      }
    });
    ImajnetUI.closeAllMenus();
    var a = jQuery("\x3cdiv/\x3e").css({
      position: "absolute",
      top: 27, left: 0
    }).text("").hide();
    ImajnetSettings.sliders.surveyTrace = jQuery("#imajnetSettingsVisibleImagesSlider").slider({
      min: ImajnetSettings.rangeImajnetSettings.surveyTrace.low,
      max: ImajnetSettings.rangeImajnetSettings.surveyTrace.high,
      step: 10,
      value: ImajnetSettings.imajnetSettings.surveyTrace,
      slide: function (b, e) {
        a.text(e.value + "m");
        a.show()
      }
    });
    ImajnetSettings.sliders.surveyTrace.find(".ui-slider-handle").append(a).hover(function () {
        a.text(ImajnetSettings.sliders.surveyTrace.slider("value") + "m");
        a.show()
      },
      function () {
        a.hide()
      });
    var b = jQuery("\x3cdiv/\x3e").css({position: "absolute", top: 27, left: 0}).text("").hide();
    ImajnetSettings.sliders.imageSwitcher = jQuery("#imajnetSettingsImageSwitcherSlider").slider({
      min: ImajnetSettings.rangeImajnetSettings.imageSwitcher.low,
      max: ImajnetSettings.rangeImajnetSettings.imageSwitcher.high,
      step: 1,
      value: ImajnetSettings.imajnetSettings.imageSwitcher,
      slide: function (a, e) {
        b.text(e.value + "m");
        b.show()
      }
    });
    ImajnetSettings.sliders.imageSwitcher.find(".ui-slider-handle").append(b).hover(function () {
      b.text(ImajnetSettings.sliders.imageSwitcher.slider("value") +
        "m");
      b.show()
    }, function () {
      a.hide()
    });
    Nigsys.setRadioValue("imageRetrievalOptions", ImajnetSettings.imajnetSettings.imageRetrievalOptions);
    var c = jQuery("\x3cdiv/\x3e").css({position: "absolute", top: 27, left: 0}).text("").hide();
    ImajnetSettings.sliders.orientedImages = jQuery("#imajnetSettingsOrientedImagesSlider").slider({
      min: ImajnetSettings.rangeImajnetSettings.orientedImages.low,
      max: ImajnetSettings.rangeImajnetSettings.orientedImages.high,
      step: 10,
      value: ImajnetSettings.imajnetSettings.orientedImages,
      slide: function (a,
                       b) {
        c.text(b.value + "m");
        c.show()
      }
    });
    ImajnetSettings.sliders.orientedImages.find(".ui-slider-handle").append(c).hover(function () {
      c.text(ImajnetSettings.sliders.orientedImages.slider("value") + "m");
      c.show()
    }, function () {
      c.hide()
    });
    var d = jQuery("\x3cdiv/\x3e").css({position: "absolute", top: 27, left: 0}).text("").hide();
    ImajnetSettings.sliders.projection = jQuery("#imajnetSettingsProjectionSlider").slider({
      min: ImajnetSettings.rangeImajnetSettings.projection.low,
      max: ImajnetSettings.rangeImajnetSettings.projection.high,
      step: 10,
      value: ImajnetSettings.imajnetSettings.projection,
      slide: function (a, b) {
        d.text(b.value + "m");
        d.show()
      }
    });
    ImajnetSettings.sliders.projection.find(".ui-slider-handle").append(d).hover(function () {
      d.text(ImajnetSettings.sliders.projection.slider("value") + "m");
      d.show()
    }, function () {
      d.hide()
    });
    jQuery("#imajnetSettingsUnit").val(Nigsys.getMeasurementUnit());
    ImajnetUI.showItem(ImajnetUI.settingsContainerId, Nigsys.browserIsIE7() ? 530 : null)
  }
};
var ImajnetUserSettings = {
  lrsRoadType: 0, mapExtent: null, onUserSettingsReceived: function (a) {
    a = JSON.parse(a);
    a.options && (ImajnetUserSettings.lrsRoadType = a.options.lrsRoadType, ImajnetUserSettings.mapExtent = a.options.mapExtent)
  }, getUserSettings: function () {
    return ImajnetAPI.doImajnetRequestDeferred("GET", "/api/user/useroptions", null, this.onUserSettingsReceived, null, null)
  }
};
var ImajnetLRSSettings = {
  ADDRESS_MODE: {FULL: "FULL", CITY: "CITY"},
  defaultLRSSettings: {
    display: {
      addressAndLRS: {
        imajnetSettingsLRSShowCumulated: !0,
        imajnetSettingsAddressInLRS: !1,
        imajnetSettingsAddressDisplayType: "FULL"
      }
    },
    search: {
      road: {relativePoint: 1, cumulatedAbscisa: 1, relativeAbscisa: 1},
      train: {relativePoint: 2, cumulatedAbscisa: 1, relativeAbscisa: 2}
    },
    referential: {
      road: {relativePoint: 1, cumulatedAbscisa: 1, relativeAbscisa: 1},
      train: {relativePoint: 2, cumulatedAbscisa: 1, relativeAbscisa: 2}
    }
  },
  LRSSettings: null,
  resetLRSSettingsToDefault: function () {
    for (var a in this.defaultLRSSettings)if ("display" !=
      a)for (var b in this.defaultLRSSettings[a])for (var c in this.defaultLRSSettings[a][b])jQuery("#" + a + "_" + b + "_" + c).val(this.defaultLRSSettings[a][b][c]);
    jQuery("#display_addressAndLRS_imajnetSettingsLRSShowCumulated").prop("checked", this.defaultLRSSettings.display.addressAndLRS.imajnetSettingsLRSShowCumulated);
    CommonCore.updateCustomCheckbox(jQuery("#display_addressAndLRS_imajnetSettingsLRSShowCumulated"));
    jQuery("#display_addressAndLRS_imajnetSettingsAddressInLRS").prop("checked", this.defaultLRSSettings.display.addressAndLRS.imajnetSettingsAddressInLRS);
    CommonCore.updateCustomCheckbox(jQuery("#display_addressAndLRS_imajnetSettingsAddressInLRS"));
    jQuery("#display_addressAndLRS_imajnetSettingsAddressDisplayType").val(this.defaultLRSSettings.display.addressAndLRS.imajnetSettingsAddressDisplayType);
    jQuery("#display_addressAndLRS_showRoads").prop("checked", this.defaultLRSSettings.display.addressAndLRS.showRoads);
    CommonCore.updateCustomCheckbox(jQuery("#display_addressAndLRS_showRoads"));
    jQuery("#display_addressAndLRS_showPR").prop("checked", this.defaultLRSSettings.display.addressAndLRS.showPR);
    CommonCore.updateCustomCheckbox(jQuery("#display_addressAndLRS_showPR"));
    jQuery("#display_addressAndLRS_showLabels").prop("checked", this.defaultLRSSettings.display.addressAndLRS.showLabels);
    CommonCore.updateCustomCheckbox(jQuery("#display_addressAndLRS_showLabels"))
  },
  getLRSSettingsFromCookie: function () {
    this.LRSSettings = Nigsys.cloneObject(this.defaultLRSSettings);
    var a = Nigsys.getCookie("IMAJNET", "LRS_SETTINGS");
    if (a)for (var b in a)for (var c in a[b])for (var d in a[b][c])this.LRSSettings[b][c][d] = a[b][c][d];
    else ImajnetLRSSettings.LRSSettings.display.addressAndLRS.showRoads = !0, ImajnetLRSSettings.LRSSettings.display.addressAndLRS.showPR = !0, ImajnetLRSSettings.LRSSettings.display.addressAndLRS.showLabels = !0
  },
  getLRSSettingsFromPopup: function () {
    for (var a in this.LRSSettings)if ("display" != a)for (var b in this.LRSSettings[a])for (var c in this.LRSSettings[a][b])this.LRSSettings[a][b][c] = jQuery("#" + a + "_" + b + "_" + c).val();
    this.LRSSettings.display.addressAndLRS.imajnetSettingsLRSShowCumulated = jQuery("#display_addressAndLRS_imajnetSettingsLRSShowCumulated").is(":checked");
    this.LRSSettings.display.addressAndLRS.imajnetSettingsAddressInLRS = jQuery("#display_addressAndLRS_imajnetSettingsAddressInLRS").is(":checked");
    this.LRSSettings.display.addressAndLRS.imajnetSettingsAddressDisplayType = jQuery("#display_addressAndLRS_imajnetSettingsAddressDisplayType").val();
    this.LRSSettings.display.addressAndLRS.showRoads = jQuery("#display_addressAndLRS_showRoads").is(":checked");
    this.LRSSettings.display.addressAndLRS.showPR = jQuery("#display_addressAndLRS_showPR").is(":checked");
    this.LRSSettings.display.addressAndLRS.showLabels =
      jQuery("#display_addressAndLRS_showLabels").is(":checked")
  },
  updateSearch: function () {
  },
  updateReferential: function () {
    var a = LRS.getLabelsValueFromSettings(jQuery("#imajnetImageLRSType").val(), "referential");
    if (a) {
      jQuery("#imajnetImageLRSRoadLabel").html("\x3cb\x3e" + a.roadLabel + "\x3c/b\x3e:\x26nbsp;");
      var b = jQuery("#imajnetImageLRSCumulatedAbscisaLabel");
      b.html("\x3cb\x3e" + a.cumulatedAbscisaLabel + "\x3c/b\x3e:\x26nbsp;");
      ImajnetLRSSettings.LRSSettings.display.addressAndLRS.imajnetSettingsLRSShowCumulated ?
        b.parent().show() : b.parent().hide()
    }
  },
  updateLabels: function () {
    "undefined" !== typeof Address && (Address.init(), Address.getAddressFromCoordinates(ImajnetMap.currentPosition));
    LRS.loadLRS(ImajnetMap.currentPosition);
    this.updateSearch();
    this.updateReferential()
  },
  saveLRSSettings: function () {
    ImajnetLRSSettings.getLRSSettingsFromPopup();
    Nigsys.setCookie("IMAJNET", "LRS_SETTINGS", ImajnetLRSSettings.LRSSettings);
    ImajnetLRSSettings.updateLabels();
    "undefined" !== typeof ImajnetUI && ImajnetUI.hideItem(ImajnetUI.settingsLRSContainerId)
  },
  showLayersChanged: function () {
    jQuery("#display_addressAndLRS_showRoads").is(":checked") || jQuery("#display_addressAndLRS_showPR").is(":checked") ? jQuery("#display_addressAndLRS_showLabels").prop("disabled", !1) : jQuery("#display_addressAndLRS_showLabels").prop("checked", !1).prop("disabled", !0)
  },
  getLRSSettingsPopupHTML: function () {
    var a = '\x3cdiv id\x3d"' + ("undefined" === typeof ImajnetUI ? "" : ImajnetUI.settingsLRSContainerId) + '"\x3e\x3cdiv class\x3d"LRSSubtitle"\x3e' + jQuery.imajnet.settings.display.title + '\x3c/div\x3e\x3cdiv class\x3d"optionsGroup left LRSSettingsReferentialItemContainer"\x3e\x3cspan class\x3d"popupContentContainerTitle"\x3e' +
        jQuery.imajnet.settings.display.image + '\x3c/span\x3e\x3cdiv\x3e\x3cdiv class\x3d"left"\x3e' + jQuery.imajnet.settings.display.LRSShowCumulated + ':\x26nbsp;\x3c/div\x3e\x3cdiv class\x3d"left showCumulated"\x3e' + Nigsys.getCheckboxHTML("display_addressAndLRS_imajnetSettingsLRSShowCumulated", null, null, null, ImajnetLRSSettings.LRSSettings.display.addressAndLRS.imajnetSettingsLRSShowCumulated) + '\x3c/div\x3e\x3cdiv class\x3d"clearLeft"\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv id\x3d"ImjnetLRSSettingsSearchAddressContainer" style\x3d"margin-top: 3px;"\x3e\x3cdiv class\x3d"left"\x3e' +
        jQuery.imajnet.settings.display.addressInLRS + ':\x26nbsp;\x3c/div\x3e\x3cdiv class\x3d"left"\x3e\x3cinput type\x3d"checkbox" id\x3d"display_addressAndLRS_imajnetSettingsAddressInLRS"' + (ImajnetLRSSettings.LRSSettings.display.addressAndLRS.imajnetSettingsAddressInLRS ? ' checked\x3d"checked"' : "") + ' /\x3e\x3c/div\x3e\x3cdiv class\x3d"clearLeft"\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv style\x3d"margin-top: 3px;"\x3e\x3cdiv class\x3d"left"\x3e' + jQuery.imajnet.settings.display.addressDisplayType.title + ':\x26nbsp;\x3c/div\x3e\x3cdiv\x3e\x3cselect id\x3d"display_addressAndLRS_imajnetSettingsAddressDisplayType" style\x3d"margin-left: 3px;"\x3e\x3coption value\x3d"FULL"' +
        (ImajnetLRSSettings.LRSSettings.display.addressAndLRS.imajnetSettingsAddressDisplayType == this.ADDRESS_MODE.FULL ? ' selected\x3d"selected"' : "") + "\x3e" + jQuery.imajnet.settings.display.addressDisplayType.full + '\x3c/option\x3e\x3coption value\x3d"CITY"' + (ImajnetLRSSettings.LRSSettings.display.addressAndLRS.imajnetSettingsAddressDisplayType == this.ADDRESS_MODE.CITY ? ' selected\x3d"selected"' : "") + "\x3e" + jQuery.imajnet.settings.display.addressDisplayType.city + '\x3c/option\x3e\x3c/select\x3e\x3c/div\x3e\x3cdiv class\x3d"clearLeft"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv id\x3d"imajnetWebShowRoadsAndPR" class\x3d"optionsGroup left LRSSettingsReferentialItemContainer" style\x3d"margin-left: 5px;"\x3e\x3cspan class\x3d"popupContentContainerTitle"\x3e' +
        jQuery.imajnet.settings.display.carto + '\x3c/span\x3e\x3cdiv\x3e\x3cdiv class\x3d"left"\x3e' + jQuery.imajnet.settings.display.showRoads + ':\x26nbsp;\x3c/div\x3e\x3cdiv class\x3d"left showCumulated"\x3e' + Nigsys.getCheckboxHTML("display_addressAndLRS_showRoads", null, null, ' onchange\x3d"ImajnetLRSSettings.showLayersChanged();"', ImajnetLRSSettings.LRSSettings.display.addressAndLRS.showRoads) + '\x3c/div\x3e\x3cdiv class\x3d"clearLeft"\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv id\x3d"ImjnetLRSSettingsSearchAddressContainer" style\x3d"margin-top: 3px;"\x3e\x3cdiv class\x3d"left"\x3e' +
        jQuery.imajnet.settings.display.showPR + ':\x26nbsp;\x3c/div\x3e\x3cdiv class\x3d"left showCumulated"\x3e' + Nigsys.getCheckboxHTML("display_addressAndLRS_showPR", null, null, ' onchange\x3d"ImajnetLRSSettings.showLayersChanged();"', ImajnetLRSSettings.LRSSettings.display.addressAndLRS.showPR) + '\x3c/div\x3e\x3cdiv class\x3d"clearLeft"\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv style\x3d"margin-top: 3px;"\x3e\x3cdiv class\x3d"left"\x3e' + jQuery.imajnet.settings.display.showLabels + ':\x26nbsp;\x3c/div\x3e\x3cdiv class\x3d"left showCumulated"\x3e' +
        Nigsys.getCheckboxHTML("display_addressAndLRS_showLabels", null, null, null, ImajnetLRSSettings.LRSSettings.display.addressAndLRS.showLabels) + '\x3c/div\x3e\x3cdiv class\x3d"clearLeft"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"clearLeft"\x3e\x3c/div\x3e',
      b = Object.keys(ImajnetLRSSettings.LRSSettings).length, c = 0, d;
    for (d in this.LRSSettings)if ("display" != d)for (var e in this.LRSSettings[d])0 == c % 2 && (0 != c && (a += '\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"clearLeft"\x3e\x3c/div\x3e'), a += '\x3cdiv class\x3d"LRSItemContainer"\x3e\x3cdiv class\x3d"LRSSubtitle"\x3e' +
      jQuery.imajnet.settings.LRS[d] + '\x3c/div\x3e\x3cdiv class\x3d"LRSSettingsReferentialContainer"\x3e'), a += ImajnetLRSSettingType.getSettingHTML(d, e, this.LRSSettings[d][e], c), c == b && (a += '\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"clearLeft"\x3e\x3c/div\x3e'), c++;
    return a + '\x3cdiv id\x3d"ImajnetLRSSettingsSaveButtonsContainer" style\x3d"text-align: center; margin-top: 5px;"\x3e\x3cinput type\x3d"button" value\x3d"' + jQuery.imajnet.settings.resetDefaultButton + '" onclick\x3d"ImajnetLRSSettings.resetLRSSettingsToDefault();" class\x3d"dialogButton"\x3e\x3cinput type\x3d"button" value\x3d"' +
      jQuery.imajnet.settings.saveSettingsButton + '" onclick\x3d"ImajnetLRSSettings.saveLRSSettings();" class\x3d"dialogButton dialogButtonSave"\x3e\x3c/div\x3e\x3c/div\x3e'
  },
  showImajnetLRSSettings: function () {
    ImajnetUI.settingsLRSContainer.html(ImajnetLRSSettings.getLRSSettingsPopupHTML());
    ImajnetLRSSettings.showLayersChanged();
    CommonCore.bindCustomCheckbox(jQuery('#popupImajnetLRSSettings input[type\x3d"checkbox"]'));
    ImajnetUI.showItem(ImajnetUI.settingsLRSContainerId, Nigsys.browserIsIE7() ? 518 : null);
    ImajnetUI.closeAllMenus()
  }
};
var ImajnetLRSSettingType = {
  getSettingHTML: function (c, f, d, b) {
    b = '\x3cdiv class\x3d"optionsGroup left LRSSettingsReferentialItemContainer" style\x3d"' + (1 == b % 2 ? " margin-left: 5px;" : "") + '"\x3e\x3cspan class\x3d"popupContentContainerTitle"\x3e' + jQuery.imajnet.settings.LRS[f] + '\x3c/span\x3e\x3cdiv class\x3d"popupContentContainer"\x3e';
    var e = 0, a;
    for (a in d) {
      if ("referential" != c || 2 != e) b += '\x3cdiv class\x3d"left settingsLeft"\x3e' + jQuery.imajnet.settings.LRS[a].label + '\x3c/div\x3e\x3cdiv class\x3d"left settingsRight"\x3e\x3cselect id\x3d"' +
        c + "_" + f + "_" + a + '"' + ("search" == c && 0 < e ? 'disabled\x3d"disabled"' : "") + ' class\x3d"LRSSettingsSelect"\x3e\x3coption value\x3d"1" ' + (1 == d[a] ? 'selected\x3d"selected"' : "") + "\x3e" + jQuery.imajnet.settings.LRS[a][1] + '\x3c/option\x3e\x3coption value\x3d"2" ' + (2 == d[a] ? 'selected\x3d"selected"' : "") + "\x3e" + jQuery.imajnet.settings.LRS[a][2] + '\x3c/option\x3e\x3c/select\x3e\x3c/div\x3e\x3cdiv class\x3d"clearLeft" style\x3d"height: 5px;"\x3e\x3c/div\x3e';
      e++
    }
    return b + "\x3c/div\x3e\x3c/div\x3e"
  }
};
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
var ImajnetProjection = {
  imajnetProjections: null, userProjections: null, draw: function () {
    if (!ImajnetMap.currentPosition || Nigsys.isPositionMode() || Nigsys.isMeasurementMode())return jQuery.Deferred().resolve().promise();
    var a = jQuery.Deferred();
    position = ImajnetMap.currentPosition;
    ImajnetPlugin.getProjectionCandidates(position).done(function (c) {
      ImajnetProjection.projectUserData(position, c).done(function () {
        a.resolve()
      })
    });
    return a.promise()
  }, getAllProjections: function (a) {
    if (!ImajnetMap.currentPosition || a &&
      a.parameter.pointOfView.id != ImajnetMap.currentPosition.id)return null;
    var c = ImageControler.currentPhotogrammetry.getImageIndexInCacheArrayByImageId(ImajnetMap.currentPosition.id);
    if (!a)return c ? {parameter: {pointOfView: {id: c.parameter.pointOfView.id}}, projection: c.projection} : null;
    if (a.projection.pointProjections) {
      for (var b = 0; b < a.projection.pointProjections.length; b++)a.projection.pointProjections[b] || (a.projection.pointProjections.splice(b, 1), b--);
      a.projection.pointProjections.length || delete a.projection.pointProjections
    }
    if (a.projection.shapeProjections) {
      for (b =
             0; b < a.projection.shapeProjections.length; b++)a.projection.shapeProjections[b] || (a.projection.shapeProjections.splice(b, 1), b--);
      a.projection.shapeProjections.length || delete a.projection.shapeProjections
    }
    if (c) {
      var d = [], e = [];
      if ((!Nigsys.isPolyligneMode() || 1 != ImageControler.currentPhotogrammetry.currentStep % 2) && a.projection.pointProjections)if (c.projection.pointProjections)for (b = 0; b < a.projection.pointProjections.length; b++)if (f = ImageControler.currentPhotogrammetry.getObjectById(a.projection.pointProjections[b].id)) {
        for (var f =
          !1, g = 0; g < c.projection.pointProjections.length; g++)if (c.projection.pointProjections[g] && c.projection.pointProjections[g].id == a.projection.pointProjections[b].id) {
          f = !0;
          break
        }
        f || (c.projection.pointProjections || (c.projection.pointProjections = []), c.projection.pointProjections.push(a.projection.pointProjections[b]))
      } else d.push(a.projection.pointProjections[b]); else for (b = 0; b < a.projection.pointProjections.length; b++)(f = ImageControler.currentPhotogrammetry.getObjectById(a.projection.pointProjections[b].id)) ?
        (c.projection.pointProjections || (c.projection.pointProjections = []), c.projection.pointProjections.push(a.projection.pointProjections[b])) : d.push(a.projection.pointProjections[b]);
      if (a.projection.shapeProjections)if (c.projection.shapeProjections)for (b = 0; b < a.projection.shapeProjections.length; b++)if (a.projection.shapeProjections[b]) {
        if (f = ImageControler.currentPhotogrammetry.getObjectById(a.projection.shapeProjections[b].id)) {
          f = !1;
          for (g = 0; g < c.projection.shapeProjections.length; g++)if (c.projection.shapeProjections[g] &&
            c.projection.shapeProjections[g].id == a.projection.shapeProjections[b].id && (f = !0, !Nigsys.isPolyligneMode() || c.projection.shapeProjections[g].id == ImajnetPolyligne.currentAddObjectId)) {
            var h = ImajnetMap.getFeatureWrapperById(a.projection.shapeProjections[b].id);
            if (h && h.getType() == ImajnetMap.FEATURE_TYPE_PROJECTION) c.projection.shapeProjections[g] = a.projection.shapeProjections[b]; else if (c.projection.shapeProjections[g].projections && a.projection.shapeProjections[b].projections) {
              for (var h = [], k = 0; k < a.projection.shapeProjections[b].projections.length; k++) {
                for (var m =
                  !1, l = 0; l < c.projection.shapeProjections[g].projections.length; l++)if (c.projection.shapeProjections[g].projections[l].id == a.projection.shapeProjections[b].projections[k].id) {
                  m = !0;
                  break
                }
                m || h.push(a.projection.shapeProjections[b].projections[k])
              }
              c.projection.shapeProjections[g].projections = c.projection.shapeProjections[g].projections.concat(h)
            }
            break
          }
          f || (c.projection.shapeProjections || (c.projection.shapeProjections = []), c.projection.shapeProjections.push(a.projection.shapeProjections[b]))
        }
      } else e.push(a.projection.shapeProjections[b]);
      else for (b = 0; b < a.projection.shapeProjections.length; b++)(f = ImageControler.currentPhotogrammetry.getObjectById(a.projection.shapeProjections[b].id)) ? (c.projection.shapeProjections || (c.projection.shapeProjections = []), c.projection.shapeProjections.push(a.projection.shapeProjections[b])) : e.push(a.projection.shapeProjections[b]);
      c.projection.pointProjections && (c.projection.pointProjections = c.projection.pointProjections.concat(d));
      c.projection.shapeProjections && (c.projection.shapeProjections = c.projection.shapeProjections.concat(e));
      return {parameter: a.parameter, projection: c.projection}
    }
    if (!a.projection.pointProjections && !a.projection.shapeProjections)return null;
    c = {parameter: {pointOfView: {id: a.parameter.pointOfView.id}}, projection: {}};
    a.projection.pointProjections && (c.projection.pointProjections = a.projection.pointProjections);
    a.projection.shapeProjections && (c.projection.shapeProjections = a.projection.shapeProjections);
    if (!Nigsys.isPolyligneMode()) {
      a = Nigsys.cloneObject(c);
      if (a.projection.pointProjections) {
        for (b = 0; b < a.projection.pointProjections.length; b++) {
          var f =
            ImageControler.currentPhotogrammetry.getObjectById(a.projection.pointProjections[b].id);
          f || (a.projection.pointProjections.splice(b, 1), b--)
        }
        a.projection.pointProjections.length || delete a.projection.pointProjections
      }
      if (a.projection.shapeProjections) {
        for (b = 0; b < a.projection.shapeProjections.length; b++)f = ImageControler.currentPhotogrammetry.getObjectById(a.projection.shapeProjections[b].id), f || (a.projection.shapeProjections.splice(b, 1), b--);
        a.projection.shapeProjections.length || delete a.projection.shapeProjections
      }
      (a.projection.pointProjections ||
      a.projection.shapeProjections) && ImageControler.currentPhotogrammetry.existingProjections.push(c)
    }
    return c
  }, projectionReceived: function (a) {
    if ((a = ImajnetProjection.getAllProjections(a)) && !Nigsys.isPositionMode() && !Nigsys.isMeasurementMode() && ImajnetMap.currentPosition && ImajnetMap.currentPosition.id == a.parameter.pointOfView.id && void 0 !== a.projection) {
      if (a.projection.pointProjections && !Nigsys.isPolyligneMode()) {
        var c = a.projection.pointProjections;
        c.sort(function (b, a) {
          return Nigsys.compareAscending(b,
            a, "id")
        });
        for (var b = 0; b < c.length; b++)if (c[b]) {
          var d = parseInt(c[b].id);
          isNaN(d) || (c[b].id = d);
          if ((d = ImajnetMap.getFeatureWrapperById(c[b].id)) && 0 <= c[b].coordinates.z)if (0 == c[b].id) ImageControler.currentPhotogrammetry.appendMapMarker(c[b].id, c[b].coordinates); else {
            if (d.type == ImajnetMap.MARKER_TYPE_POSITION || d.type == ImajnetMap.MARKER_TYPE_POLYLIGNE_POSITION) {
              var e = c[b].linkToNext, f = ImageControler.currentPhotogrammetry.getObjectById(c[b].id);
              e && (e = ImageControler.currentPhotogrammetry.getImageNextObject(c[b].id)) &&
              c[b].featureWrapper && e.type != f.type && (e = !1)
            }
            ImageControler.currentGraphic.appendPinPoint(c[b].coordinates, d)
          }
        }
      }
      if (a.projection.shapeProjections)for (b = 0; b < a.projection.shapeProjections.length; b++)!a.projection.shapeProjections[b] || Nigsys.isPolyligneMode() && a.projection.shapeProjections[b].id != ImajnetPolyligne.currentAddObjectId || Nigsys.isPolyligneMode() && (-1 == ImajnetPolyligne.currentAddObjectId || a.projection.shapeProjections[b].id < ImajnetPolyligne.currentAddObjectId) || (d = parseInt(a.projection.shapeProjections[b].id),
      isNaN(d) || (a.projection.shapeProjections[b].id = d), d = ImajnetMap.getFeatureWrapperById(a.projection.shapeProjections[b].id), c = ImageControler.currentPhotogrammetry.getObjectById(a.projection.shapeProjections[b].id), !c || (c.parameter.imagePoint1 ? c.parameter.imagePoint1.img1 : c.parameter.imagePoint.img1).traceId == ImajnetMap.currentPosition.traceId || d.type != ImajnetMap.FEATURE_TYPE_MEASUREMENT && d.type != ImajnetMap.MARKER_TYPE_POSITION && d.type != ImajnetMap.MARKER_TYPE_POLYLIGNE_POSITION && -1 === jQuery.inArray(d.type.replace("Feature",
        ""), ImajnetPolyligne.typesArray) ? a.projection.shapeProjections[b] && void 0 !== a.projection.shapeProjections[b].projections && 0 <= a.projection.shapeProjections[b].projections[0].coordinates.z && ImageControler.currentPhotogrammetry.drawLine(d, a.projection.shapeProjections[b].projections) : (ImageControler.currentPhotogrammetry.objectIsMeasurement(a.projection.shapeProjections[b].id), a.projection.shapeProjections[b].projections[0] && a.projection.shapeProjections[b].projections[1] && ImageControler.currentPhotogrammetry.drawLine(ImajnetMap.getFeatureWrapperById(a.projection.shapeProjections[b].id),
        [a.projection.shapeProjections[b].projections[0], a.projection.shapeProjections[b].projections[1]]), a.projection.shapeProjections[b].projections[2] && a.projection.shapeProjections[b].projections[3] && ImageControler.currentPhotogrammetry.drawLine(ImajnetMap.getFeatureWrapperById(a.projection.shapeProjections[b].id), [a.projection.shapeProjections[b].projections[2], a.projection.shapeProjections[b].projections[3]])))
    }
  }, projectUserData: function (a, c) {
    if (!c || !c.length)return ImajnetProjection.projectDataRequest(null);
    if (Nigsys.isPositionMode() || Nigsys.isMeasurementMode() || Nigsys.isPolyligneMode())return jQuery.Deferred().resolve().promise();
    for (var b = [], d = [], e = 0; e < c.length; e++)if (c[e].geometry) {
      if (1 == c[e].geometry.length) b.push({
        coordinates: c[e].geometry[0],
        linkToNext: !1,
        objectId: "PointProjection_" + (e + 1)
      }); else {
        for (var f = [], g = 0; g < c[e].geometry.length; g++)f.push({
          coordinates: c[e].geometry[g],
          linkToNext: g < c[e].geometry.length - 1 ? !0 : !1,
          objectId: "PointProjection_" + (e + 1).toString() + g.toString()
        });
        d.push({
          id: "LineProjection_" +
          (e + 1), points: f
        })
      }
      ImajnetMap.addToFeatureWrappers({
        feature: c[e].feature,
        id: 1 == c[e].geometry.length ? "PointProjection_" + (e + 1) : "LineProjection_" + (e + 1),
        style: c[e].style,
        type: ImajnetMap.FEATURE_TYPE_PROJECTION
      })
    }
    e = [];
    if (0 < b.length || 0 < d.length) f = {
      groundProjection: !0,
      heightOffset: 0
    }, 0 < b.length && (f.points = b), 0 < d.length && (f.shapes = d), e.push(f);
    return ImajnetProjection.projectDataRequest({projectionData: e, pointOfView: a})
  }, projectImajnetDataRequest: function (a) {
    ImajnetProjection.imajnetProjections = null;
    var c =
      jQuery.Deferred();
    if (!a)return c.resolve(), c.promise();
    ImajnetAPI.doImajnetRequestDeferred("POST", "/api/photogrammetry/projection/", a, null, null, null).done(function (b) {
      b && (ImajnetProjection.imajnetProjections = JSON.parse(b));
      c.resolve()
    }).fail(function (b) {
      c.reject(b)
    });
    return c.promise()
  }, projectUserDataRequest: function () {
    var a = jQuery.Deferred();
    ImajnetProjection.userProjections = null;
    ImajnetPlugin.drawUserProjections(ImajnetMap.currentPosition.id).done(function (c, b) {
      b && jQuery.each(b, function (b, a) {
        if (ImajnetMap.getFeatureWrapperById(a.id))for (var c =
          0; c < ImajnetMap.featureWrappers.length; c++)if (ImajnetMap.featureWrappers[c].id == a.id) {
          ImajnetMap.featureWrappers.splice(c, 1);
          break
        }
        ImajnetMap.addToFeatureWrappers({
          feature: a.feature,
          id: a.id,
          style: a.style,
          type: ImajnetMap.FEATURE_TYPE_PROJECTION
        })
      });
      c && (ImajnetProjection.userProjections = c);
      a.resolve()
    }).fail(function (c) {
      a.reject(c)
    });
    return a.promise()
  }, projectDataRequest: function (a) {
    var c = jQuery.Deferred();
    ImageControler.currentPhotogrammetry.imajnetProjectionsDataObject && (a ? a.projectionData = ImageControler.currentPhotogrammetry.imajnetProjectionsDataObject.projectionData.concat(a.projectionData) :
      a = ImageControler.currentPhotogrammetry.imajnetProjectionsDataObject);
    jQuery.when(this.projectImajnetDataRequest(a), this.projectUserDataRequest()).always(function () {
      var a = ImajnetProjection.imajnetProjections, d = ImajnetProjection.userProjections;
      if (!a) a = ImajnetProjection.userProjections; else if (d && (d.projection.pointProjections || d.projection.shapeProjections)) {
        var e = a.projection, d = d.projection;
        a.projection.pointProjections = e.pointProjections ? e.pointProjections.concat(d.pointProjections) : d.pointProjections;
        a.projection.shapeProjections = e.shapeProjections ? e.shapeProjections.concat(d.shapeProjections) : d.shapeProjections
      }
      ImajnetProjection.projectionReceived(a);
      c.resolve()
    });
    return c.promise()
  }
};
var OpenLayersForProjection = {
  String: {
    startsWith: function (a, b) {
      return 0 == a.indexOf(b)
    }, trim: function (a) {
      return a.replace(/^\s\s*/, "").replace(/\s\s*$/, "")
    }
  }, Util: {
    dotless: /\./g, lastSeqID: 0, createUniqueID: function (a) {
      a = null == a ? "id_" : a.replace(OpenLayersForProjection.Util.dotless, "_");
      OpenLayersForProjection.Util.lastSeqID += 1;
      return a + OpenLayersForProjection.Util.lastSeqID
    }, toFloat: function (a, b) {
      null == b && (b = OpenLayersForProjection.Util.DEFAULT_PRECISION);
      "number" !== typeof a && (a = parseFloat(a));
      return 0 ===
      b ? a : parseFloat(a.toPrecision(b))
    }, isArray: function (a) {
      return "[object Array]" === Object.prototype.toString.call(a)
    }, getElement: function () {
      for (var a = [], b = 0, c = arguments.length; b < c; b++) {
        var d = arguments[b];
        "string" == typeof d && (d = document.getElementById(d));
        if (1 == arguments.length)return d;
        a.push(d)
      }
      return a
    }
  }, Class: function () {
    var a = arguments.length, b = arguments[0], c = arguments[a - 1],
      d = "function" == typeof c.initialize ? c.initialize : function () {
        b.prototype.initialize.apply(this, arguments)
      };
    1 < a ? (a = [d, b].concat(Array.prototype.slice.call(arguments).slice(1,
      a - 1), c), OpenLayersForProjection.inherit.apply(null, a)) : d.prototype = c;
    return d
  }, inherit: function (a, b) {
    var c = function () {
    };
    c.prototype = b.prototype;
    a.prototype = new c;
    var d, e, c = 2;
    for (d = arguments.length; c < d; c++)e = arguments[c], "function" === typeof e && (e = e.prototype), OpenLayersForProjection.Util.extend(a.prototype, e)
  }, Number: {
    decimalSeparator: ".", thousandsSeparator: ",", limitSigDigs: function (a, b) {
      var c = 0;
      0 < b && (c = parseFloat(a.toPrecision(b)));
      return c
    }, format: function (a, b, c, d) {
      b = "undefined" != typeof b ? b : 0;
      c =
        "undefined" != typeof c ? c : OpenLayersForProjection.Number.thousandsSeparator;
      d = "undefined" != typeof d ? d : OpenLayersForProjection.Number.decimalSeparator;
      null != b && (a = parseFloat(a.toFixed(b)));
      var e = a.toString().split(".");
      1 == e.length && null == b && (b = 0);
      a = e[0];
      if (c)for (var f = /(-?[0-9]+)([0-9]{3})/; f.test(a);)a = a.replace(f, "$1" + c + "$2");
      0 == b ? b = a : (c = 1 < e.length ? e[1] : "0", null != b && (c += Array(b - c.length + 1).join("0")), b = a + d + c);
      return b
    }, zeroPad: function (a, b, c) {
      for (a = a.toString(c || 10); a.length < b;)a = "0" + a;
      return a
    }
  }
};
OpenLayersForProjection.Date = {
  dateRegEx: /^(?:(\d{4})(?:-(\d{2})(?:-(\d{2}))?)?)?(?:(?:T(\d{1,2}):(\d{2}):(\d{2}(?:\.\d+)?)(Z|(?:[+-]\d{1,2}(?::(\d{2}))?)))|Z)?$/,
  toISOString: function () {
    return "toISOString" in Date.prototype ? function (a) {
      return a.toISOString()
    } : function (a) {
      return isNaN(a.getTime()) ? "Invalid Date" : a.getUTCFullYear() + "-" + OpenLayersForProjection.Number.zeroPad(a.getUTCMonth() + 1, 2) + "-" + OpenLayersForProjection.Number.zeroPad(a.getUTCDate(), 2) + "T" + OpenLayersForProjection.Number.zeroPad(a.getUTCHours(),
          2) + ":" + OpenLayersForProjection.Number.zeroPad(a.getUTCMinutes(), 2) + ":" + OpenLayersForProjection.Number.zeroPad(a.getUTCSeconds(), 2) + "." + OpenLayersForProjection.Number.zeroPad(a.getUTCMilliseconds(), 3) + "Z"
    }
  }(),
  parse: function (a) {
    var b;
    if ((a = a.match(this.dateRegEx)) && (a[1] || a[7])) {
      b = parseInt(a[1], 10) || 0;
      var c = parseInt(a[2], 10) - 1 || 0, d = parseInt(a[3], 10) || 1;
      b = new Date(Date.UTC(b, c, d));
      if (c = a[7]) {
        var d = parseInt(a[4], 10), e = parseInt(a[5], 10), f = parseFloat(a[6]), g = f | 0;
        b.setUTCHours(d, e, g, Math.round(1E3 * (f - g)));
        "Z" !== c && (c = parseInt(c, 10), a = parseInt(a[8], 10) || 0, a = -1E3 * (3600 * c + 60 * a), b = new Date(b.getTime() + a))
      }
    } else b = new Date("invalid");
    return b
  }
};
OpenLayersForProjection.Util = OpenLayersForProjection.Util || {};
OpenLayersForProjection.Util.extend = function (a, b) {
  a = a || {};
  if (b) {
    for (var c in b) {
      var d = b[c];
      void 0 !== d && (a[c] = d)
    }
    "function" == typeof window.Event && b instanceof window.Event || !b.hasOwnProperty || !b.hasOwnProperty("toString") || (a.toString = b.toString)
  }
  return a
};
OpenLayersForProjection.Util.Try = function () {
  for (var a = null, b = 0, c = arguments.length; b < c; b++) {
    var d = arguments[b];
    try {
      a = d();
      break
    } catch (e) {
    }
  }
  return a
};
OpenLayersForProjection.Util.getXmlNodeValue = function (a) {
  var b = null;
  OpenLayersForProjection.Util.Try(function () {
    b = a.text;
    b || (b = a.textContent);
    b || (b = a.firstChild.nodeValue)
  }, function () {
    b = a.textContent
  });
  return b
};
OpenLayersForProjection.Geometry = OpenLayersForProjection.Class({
  bounds: null, initialize: function () {
    this.id = OpenLayersForProjection.Util.createUniqueID(this.CLASS_NAME + "_")
  }, getBounds: function () {
    null == this.bounds && this.calculateBounds();
    return this.bounds
  }
});
OpenLayersForProjection.Geometry.Point = OpenLayersForProjection.Class(OpenLayersForProjection.Geometry, {
  x: null,
  y: null,
  initialize: function (a, b) {
    OpenLayersForProjection.Geometry.prototype.initialize.apply(this, arguments);
    this.x = parseFloat(a);
    this.y = parseFloat(b)
  },
  calculateBounds: function () {
    this.bounds = new OpenLayersForProjection.Bounds(this.x, this.y, this.x, this.y)
  },
  getCentroid: function () {
    return new OpenLayersForProjection.Geometry.Point(this.x, this.y)
  },
  CLASS_NAME: "OpenLayers.Geometry.Point"
});
OpenLayersForProjection.Bounds = OpenLayersForProjection.Class({
  left: null, bottom: null, right: null, top: null, centerLonLat: null, initialize: function (a, b, c, d) {
    OpenLayersForProjection.Util.isArray(a) && (d = a[3], c = a[2], b = a[1], a = a[0]);
    null != a && (this.left = OpenLayersForProjection.Util.toFloat(a));
    null != b && (this.bottom = OpenLayersForProjection.Util.toFloat(b));
    null != c && (this.right = OpenLayersForProjection.Util.toFloat(c));
    null != d && (this.top = OpenLayersForProjection.Util.toFloat(d))
  }, extend: function (a) {
    if (a)switch (a.CLASS_NAME) {
      case "OpenLayers.LonLat":
        this.extendXY(a.lon,
          a.lat);
        break;
      case "OpenLayers.Geometry.Point":
        this.extendXY(a.x, a.y);
        break;
      case "OpenLayers.Bounds":
        this.centerLonLat = null;
        if (null == this.left || a.left < this.left) this.left = a.left;
        if (null == this.bottom || a.bottom < this.bottom) this.bottom = a.bottom;
        if (null == this.right || a.right > this.right) this.right = a.right;
        if (null == this.top || a.top > this.top) this.top = a.top
    }
  }, clone: function () {
    return new OpenLayersForProjection.Bounds(this.left, this.bottom, this.right, this.top)
  }, intersectsBounds: function (a, b) {
    "boolean" === typeof b &&
    (b = {inclusive: b});
    b = b || {};
    if (b.worldBounds) {
      var c = this.wrapDateLine(b.worldBounds);
      a = a.wrapDateLine(b.worldBounds)
    } else c = this;
    null == b.inclusive && (b.inclusive = !0);
    var d = !1, e = c.left == a.right || c.right == a.left || c.top == a.bottom || c.bottom == a.top;
    if (b.inclusive || !e)var d = a.top >= c.bottom && a.top <= c.top || c.top > a.bottom && c.top < a.top,
      e = a.left >= c.left && a.left <= c.right || c.left >= a.left && c.left <= a.right,
      f = a.right >= c.left && a.right <= c.right || c.right >= a.left && c.right <= a.right,
      d = (a.bottom >= c.bottom && a.bottom <= c.top ||
        c.bottom >= a.bottom && c.bottom <= a.top || d) && (e || f);
    if (b.worldBounds && !d) {
      var g = b.worldBounds, e = g.getWidth(), f = !g.containsBounds(c), g = !g.containsBounds(a);
      f && !g ? (a = a.add(-e, 0), d = c.intersectsBounds(a, {inclusive: b.inclusive})) : g && !f && (c = c.add(-e, 0), d = a.intersectsBounds(c, {inclusive: b.inclusive}))
    }
    return d
  }, wrapDateLine: function (a, b) {
    b = b || {};
    var c = b.leftTolerance || 0, d = b.rightTolerance || 0, e = this.clone();
    if (a) {
      for (var f = a.getWidth(); e.left < a.left && e.right - d <= a.left;)e = e.add(f, 0);
      for (; e.left + c >= a.right && e.right >
      a.right;)e = e.add(-f, 0);
      c = e.left + c;
      c < a.right && c > a.left && e.right - d > a.right && (e = e.add(-f, 0))
    }
    return e
  }, getWidth: function () {
    return this.right - this.left
  }, getHeight: function () {
    return this.top - this.bottom
  }, getCenterLonLat: function () {
    this.centerLonLat || (this.centerLonLat = new OpenLayersForProjection.LonLat((this.left + this.right) / 2, (this.bottom + this.top) / 2));
    return this.centerLonLat
  }, CLASS_NAME: "OpenLayersForProjection.Bounds"
});
OpenLayersForProjection.LonLat = OpenLayersForProjection.Class({
  lon: 0, lat: 0, initialize: function (a, b) {
    OpenLayersForProjection.Util.isArray(a) && (b = a[1], a = a[0]);
    this.lon = OpenLayersForProjection.Util.toFloat(a);
    this.lat = OpenLayersForProjection.Util.toFloat(b)
  }
});
OpenLayersForProjection.Projection = OpenLayersForProjection.Class({
  proj: null, projCode: null, titleRegEx: /\+title=[^\+]*/, initialize: function (a, b) {
    OpenLayersForProjection.Util.extend(this, b);
    this.projCode = a;
    "object" == typeof Proj4js && (this.proj = new Proj4js.Proj(a))
  }, getCode: function () {
    return this.proj ? this.proj.srsCode : this.projCode
  }, getUnits: function () {
    return this.proj ? this.proj.units : null
  }, toString: function () {
    return this.getCode()
  }, equals: function (a) {
    var b = !1;
    a && (a instanceof OpenLayersForProjection.Projection ||
    (a = new OpenLayersForProjection.Projection(a)), "object" == typeof Proj4js && this.proj.defData && a.proj.defData ? b = this.proj.defData.replace(this.titleRegEx, "") == a.proj.defData.replace(this.titleRegEx, "") : a.getCode && (b = this.getCode(), a = a.getCode(), b = b == a || !!OpenLayersForProjection.Projection.transforms[b] && OpenLayersForProjection.Projection.transforms[b][a] === OpenLayersForProjection.Projection.nullTransform));
    return b
  }, transform: function (a, b, c) {
    if (b && c)if (b instanceof OpenLayers.Projection || (b = new OpenLayers.Projection(b)),
      c instanceof OpenLayers.Projection || (c = new OpenLayers.Projection(c)), b.proj && c.proj) a = Proj4js.transform(b.proj, c.proj, a); else {
      b = b.getCode();
      c = c.getCode();
      var d = OpenLayers.Projection.transforms;
      if (d[b] && d[b][c]) d[b][c](a)
    }
    return a
  }, destroy: function () {
    delete this.proj;
    delete this.projCode
  }, CLASS_NAME: "OpenLayers.Projection"
});
OpenLayersForProjection.Console = {
  log: function () {
  }, debug: function () {
  }, info: function () {
  }, warn: function () {
  }, error: function () {
  }, userError: function (a) {
    alert(a)
  }, assert: function () {
  }, dir: function () {
  }, dirxml: function () {
  }, trace: function () {
  }, group: function () {
  }, groupEnd: function () {
  }, time: function () {
  }, timeEnd: function () {
  }, profile: function () {
  }, profileEnd: function () {
  }, count: function () {
  }, CLASS_NAME: "OpenLayers.Console"
};
OpenLayersForProjection.Feature = OpenLayersForProjection.Class({
  layer: null,
  id: null,
  lonlat: null,
  data: null,
  marker: null,
  popupClass: null,
  popup: null,
  initialize: function (a, b, c) {
    this.layer = a;
    this.lonlat = b;
    this.data = null != c ? c : {};
    this.id = OpenLayersForProjection.Util.createUniqueID(this.CLASS_NAME + "_")
  }
});
OpenLayersForProjection.Feature.Vector = OpenLayersForProjection.Class(OpenLayersForProjection.Feature, {
  fid: null,
  geometry: null,
  attributes: null,
  bounds: null,
  state: null,
  style: null,
  url: null,
  renderIntent: "default",
  modified: null,
  initialize: function (a, b, c) {
    OpenLayersForProjection.Feature.prototype.initialize.apply(this, [null, null, b]);
    this.lonlat = null;
    this.geometry = a ? a : null;
    this.state = null;
    this.attributes = {};
    b && (this.attributes = OpenLayersForProjection.Util.extend(this.attributes, b));
    this.style = c ? c : null
  },
  CLASS_NAME: "OpenLayersForProjection.Feature.Vector"
});
OpenLayersForProjection.Size = OpenLayersForProjection.Class({
  w: 0, h: 0, initialize: function (a, b) {
    this.w = parseFloat(a);
    this.h = parseFloat(b)
  }, clone: function () {
    return new OpenLayersForProjection.Size(this.w, this.h)
  }
});
OpenLayersForProjection.Renderer = OpenLayersForProjection.Class({
  container: null,
  root: null,
  extent: null,
  locked: !1,
  size: null,
  resolution: null,
  map: null,
  featureDx: 0,
  initialize: function (a, b) {
    this.container = OpenLayersForProjection.Util.getElement(a);
    OpenLayersForProjection.Util.extend(this, b)
  },
  setExtent: function (a, b) {
    this.extent = a.clone();
    if (this.map.baseLayer && this.map.baseLayer.wrapDateLine) {
      var c = a.getWidth() / this.map.getExtent().getWidth();
      a = a.scale(1 / c);
      this.extent = a.wrapDateLine(this.map.getMaxExtent()).scale(c)
    }
    b &&
    (this.resolution = null);
    return !0
  },
  setSize: function (a) {
    this.size = a.clone();
    this.resolution = null
  },
  getResolution: function () {
    return this.resolution = this.resolution || this.map.getResolution()
  },
  drawFeature: function (a, b) {
    null == b && (b = a.style);
    if (a.geometry) {
      var c = a.geometry.getBounds();
      if (c) {
        var d;
        this.map.baseLayer && this.map.baseLayer.wrapDateLine && (d = this.map.getMaxExtent());
        c.intersectsBounds(this.extent, {worldBounds: d}) ? this.calculateFeatureDx(c, d) : b = {display: "none"};
        c = this.drawGeometry(a.geometry, b, a.id);
        if ("none" != b.display && b.label && !1 !== c) {
          d = a.geometry.getCentroid();
          if (b.labelXOffset || b.labelYOffset) {
            var e = isNaN(b.labelXOffset) ? 0 : b.labelXOffset, f = isNaN(b.labelYOffset) ? 0 : b.labelYOffset,
              g = this.getResolution();
            d.move(e * g, f * g)
          }
          this.drawText(a.id, b, d)
        } else this.removeText(a.id);
        return c
      }
    }
  },
  calculateFeatureDx: function (a, b) {
    this.featureDx = 0;
    if (b) {
      var c = b.getWidth();
      this.featureDx = Math.round(((a.left + a.right) / 2 - (this.extent.left + this.extent.right) / 2) / c) * c
    }
  },
  applyDefaultSymbolizer: function (a) {
    var b = OpenLayersForProjection.Util.extend({},
      OpenLayersForProjection.Renderer.defaultSymbolizer);
    !1 === a.stroke && (delete b.strokeWidth, delete b.strokeColor);
    !1 === a.fill && delete b.fillColor;
    OpenLayersForProjection.Util.extend(b, a);
    return b
  },
  removeText: function (a) {
  }
});
OpenLayersForProjection.Renderer.defaultSymbolizer = {
  fillColor: "#000000",
  strokeColor: "#000000",
  strokeWidth: 2,
  fillOpacity: 1,
  strokeOpacity: 1,
  pointRadius: 0,
  labelAlign: "cm"
};
OpenLayersForProjection.Renderer.symbol = {
  star: [350, 75, 379, 161, 469, 161, 397, 215, 423, 301, 350, 250, 277, 301, 303, 215, 231, 161, 321, 161, 350, 75],
  cross: [4, 0, 6, 0, 6, 4, 10, 4, 10, 6, 6, 6, 6, 10, 4, 10, 4, 6, 0, 6, 0, 4, 4, 4, 4, 0],
  x: [0, 0, 25, 0, 50, 35, 75, 0, 100, 0, 65, 50, 100, 100, 75, 100, 50, 65, 25, 100, 0, 100, 35, 50, 0, 0],
  square: [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
  triangle: [0, 10, 10, 10, 5, 0, 0, 10]
};
OpenLayersForProjection.Renderer.Elements = OpenLayersForProjection.Class(OpenLayersForProjection.Renderer, {
  rendererRoot: null,
  root: null,
  vectorRoot: null,
  textRoot: null,
  xmlns: null,
  xOffset: 0,
  indexer: null,
  BACKGROUND_ID_SUFFIX: "_background",
  LABEL_ID_SUFFIX: "_label",
  LABEL_OUTLINE_SUFFIX: "_outline",
  initialize: function (a, b) {
    OpenLayersForProjection.Renderer.prototype.initialize.apply(this, arguments);
    this.rendererRoot = this.createRenderRoot();
    this.root = this.createRoot("_root");
    this.vectorRoot = this.createRoot("_vroot");
    this.textRoot = this.createRoot("_troot");
    this.root.appendChild(this.vectorRoot);
    this.root.appendChild(this.textRoot);
    this.rendererRoot.appendChild(this.root);
    this.container.appendChild(this.rendererRoot);
    b && (b.zIndexing || b.yOrdering) && (this.indexer = new OpenLayersForProjection.ElementsIndexer(b.yOrdering))
  },
  destroy: function () {
    this.clear();
    this.xmlns = this.root = this.rendererRoot = null;
    OpenLayersForProjection.Renderer.prototype.destroy.apply(this, arguments)
  },
  clear: function () {
    var a, b = this.vectorRoot;
    if (b)for (; a =
                   b.firstChild;)b.removeChild(a);
    if (b = this.textRoot)for (; a = b.firstChild;)b.removeChild(a);
    this.indexer && this.indexer.clear()
  },
  setExtent: function (a, b) {
    var c = OpenLayersForProjection.Renderer.prototype.setExtent.apply(this, arguments), d = this.getResolution();
    if (this.map.baseLayer && this.map.baseLayer.wrapDateLine) {
      var e, f = a.getWidth() / this.map.getExtent().getWidth();
      a = a.scale(1 / f);
      f = this.map.getMaxExtent();
      f.right > a.left && f.right < a.right ? e = !0 : f.left > a.left && f.left < a.right && (e = !1);
      if (e !== this.rightOfDateLine ||
        b) c = !1, this.xOffset = !0 === e ? f.getWidth() / d : 0;
      this.rightOfDateLine = e
    }
    return c
  },
  getNodeType: function (a, b) {
  },
  drawGeometry: function (a, b, c) {
    var d = a.CLASS_NAME, e = !0;
    if ("OpenLayers.Geometry.Collection" == d || "OpenLayers.Geometry.MultiPoint" == d || "OpenLayers.Geometry.MultiLineString" == d || "OpenLayers.Geometry.MultiPolygon" == d) {
      for (var d = 0, f = a.components.length; d < f; d++)e = this.drawGeometry(a.components[d], b, c) && e;
      return e
    }
    d = e = !1;
    "none" != b.display && (b.backgroundGraphic ? this.redrawBackgroundNode(a.id, a, b, c) : d = !0,
      e = this.redrawNode(a.id, a, b, c));
    0 == e && (b = document.getElementById(a.id)) && (b._style.backgroundGraphic && (d = !0), b.parentNode.removeChild(b));
    d && (b = document.getElementById(a.id + this.BACKGROUND_ID_SUFFIX)) && b.parentNode.removeChild(b);
    return e
  },
  redrawNode: function (a, b, c, d) {
    c = this.applyDefaultSymbolizer(c);
    a = this.nodeFactory(a, this.getNodeType(b, c));
    a._featureId = d;
    a._boundsBottom = b.getBounds().bottom;
    a._geometryClass = b.CLASS_NAME;
    a._style = c;
    b = this.drawGeometryNode(a, b, c);
    if (!1 === b)return !1;
    a = b.node;
    this.indexer ?
      (c = this.indexer.insert(a)) ? this.vectorRoot.insertBefore(a, c) : this.vectorRoot.appendChild(a) : a.parentNode !== this.vectorRoot && this.vectorRoot.appendChild(a);
    this.postDraw(a);
    return b.complete
  },
  createNode: function (a, b) {
  },
  nodeFactory: function (a, b) {
    var c = OpenLayersForProjection.Util.getElement(a);
    c ? this.nodeTypeCompare(c, b) || (c.parentNode.removeChild(c), c = this.nodeFactory(a, b)) : c = this.createNode(b, a);
    return c
  },
  drawGeometryNode: function (a, b, c) {
    c = c || a._style;
    var d = {
      isFilled: void 0 === c.fill ? !0 : c.fill, isStroked: void 0 ===
      c.stroke ? !!c.strokeWidth : c.stroke
    }, e;
    switch (b.CLASS_NAME) {
      case "OpenLayers.Geometry.Point":
        !1 === c.graphic && (d.isFilled = !1, d.isStroked = !1);
        e = this.drawPoint(a, b);
        break;
      case "OpenLayers.Geometry.LineString":
        d.isFilled = !1;
        e = this.drawLineString(a, b);
        break;
      case "OpenLayers.Geometry.LinearRing":
        e = this.drawLinearRing(a, b);
        break;
      case "OpenLayers.Geometry.Polygon":
        e = this.drawPolygon(a, b);
        break;
      case "OpenLayers.Geometry.Rectangle":
        e = this.drawRectangle(a, b)
    }
    a._options = d;
    return 0 != e ? {
      node: this.setStyle(a, c, d,
        b), complete: e
    } : !1
  },
  removeText: function (a) {
    var b = document.getElementById(a + this.LABEL_ID_SUFFIX);
    b && this.textRoot.removeChild(b);
    (a = document.getElementById(a + this.LABEL_OUTLINE_SUFFIX)) && this.textRoot.removeChild(a)
  },
  drawPoint: function (a, b) {
  },
  postDraw: function (a) {
  },
  isComplexSymbol: function (a) {
    return "circle" != a && !!a
  },
  CLASS_NAME: "OpenLayersForProjection.Renderer.Elements"
});
OpenLayersForProjection.Renderer.Canvas = OpenLayersForProjection.Class(OpenLayersForProjection.Renderer, {
  hitDetection: !0,
  hitOverflow: 0,
  canvas: null,
  features: null,
  pendingRedraw: !1,
  cachedSymbolBounds: {},
  initialize: function (a, b) {
    OpenLayersForProjection.Renderer.prototype.initialize.apply(this, arguments);
    this.root = document.createElement("canvas");
    this.container.appendChild(this.root);
    this.canvas = this.root.getContext("2d");
    this.features = {};
    this.hitDetection && (this.hitCanvas = document.createElement("canvas"),
      this.hitContext = this.hitCanvas.getContext("2d"))
  },
  setExtent: function () {
    OpenLayersForProjection.Renderer.prototype.setExtent.apply(this, arguments);
    return !1
  },
  eraseGeometry: function (a, b) {
    this.eraseFeatures(this.features[b][0])
  },
  supported: function () {
    return OpenLayersForProjection.CANVAS_SUPPORTED
  },
  setSize: function (a) {
    this.size = a.clone();
    var b = this.root;
    b.style.width = a.w + "px";
    b.style.height = a.h + "px";
    b.width = a.w;
    b.height = a.h;
    this.resolution = null;
    this.hitDetection && (b = this.hitCanvas, b.style.width = a.w + "px",
      b.style.height = a.h + "px", b.width = a.w, b.height = a.h)
  },
  drawFeature: function (a, b) {
    var c;
    if (a.geometry) {
      b = this.applyDefaultSymbolizer(b || a.style);
      c = a.geometry.getBounds();
      var d;
      this.map.baseLayer && this.map.baseLayer.wrapDateLine && (d = this.map.getMaxExtent());
      d = c && c.intersectsBounds(this.extent, {worldBounds: d});
      (c = "none" !== b.display && !!c && d) ? this.features[a.id] = [a, b] : delete this.features[a.id];
      this.pendingRedraw = !0
    }
    this.pendingRedraw && !this.locked && (this.redraw(), this.pendingRedraw = !1);
    return c
  },
  drawGeometry: function (a,
                          b, c) {
    var d = a.CLASS_NAME;
    if ("OpenLayers.Geometry.Collection" == d || "OpenLayers.Geometry.MultiPoint" == d || "OpenLayers.Geometry.MultiLineString" == d || "OpenLayers.Geometry.MultiPolygon" == d)for (d = 0; d < a.components.length; d++)this.drawGeometry(a.components[d], b, c); else switch (a.CLASS_NAME) {
      case "OpenLayers.Geometry.Point":
        this.drawPoint(a, b, c);
        break;
      case "OpenLayers.Geometry.LineString":
        this.drawLineString(a, b, c);
        break;
      case "OpenLayers.Geometry.LinearRing":
        this.drawLinearRing(a, b, c);
        break;
      case "OpenLayers.Geometry.Polygon":
        this.drawPolygon(a,
          b, c)
    }
  },
  drawExternalGraphic: function (a, b, c) {
    var d = new Image, e = b.title || b.graphicTitle;
    e && (d.title = e);
    var f = b.graphicWidth || b.graphicHeight, g = b.graphicHeight || b.graphicWidth, f = f ? f : 2 * b.pointRadius,
      g = g ? g : 2 * b.pointRadius, h = void 0 != b.graphicXOffset ? b.graphicXOffset : -(.5 * f),
      k = void 0 != b.graphicYOffset ? b.graphicYOffset : -(.5 * g), l = b.graphicOpacity || b.fillOpacity;
    d.onload = OpenLayersForProjection.Function.bind(function () {
      if (this.features[c]) {
        var b = this.getLocalXY(a), e = b[0], b = b[1];
        if (!isNaN(e) && !isNaN(b)) {
          var e =
            e + h | 0, b = b + k | 0, p = this.canvas;
          p.globalAlpha = l;
          var q = OpenLayersForProjection.Renderer.Canvas.drawImageScaleFactor || (OpenLayersForProjection.Renderer.Canvas.drawImageScaleFactor = /android 2.1/.test(navigator.userAgent.toLowerCase()) ? 320 / window.screen.width : 1);
          p.drawImage(d, e * q, b * q, f * q, g * q);
          this.hitDetection && (this.setHitContextStyle("fill", c), this.hitContext.fillRect(e, b, f, g))
        }
      }
    }, this);
    d.src = b.externalGraphic
  },
  drawNamedSymbol: function (a, b, c) {
    var d, e, f, g;
    f = Math.PI / 180;
    var h = OpenLayersForProjection.Renderer.symbol[b.graphicName];
    if (!h)throw Error(b.graphicName + " is not a valid symbol name");
    if (!(!h.length || 2 > h.length || (a = this.getLocalXY(a), e = a[0], g = a[1], isNaN(e) || isNaN(g)))) {
      this.canvas.lineCap = "round";
      this.canvas.lineJoin = "round";
      this.hitDetection && (this.hitContext.lineCap = "round", this.hitContext.lineJoin = "round");
      if (b.graphicName in this.cachedSymbolBounds) d = this.cachedSymbolBounds[b.graphicName]; else {
        d = new OpenLayersForProjection.Bounds;
        for (a = 0; a < h.length; a += 2)d.extend(new OpenLayersForProjection.LonLat(h[a], h[a + 1]));
        this.cachedSymbolBounds[b.graphicName] = d
      }
      this.canvas.save();
      this.hitDetection && this.hitContext.save();
      this.canvas.translate(e, g);
      this.hitDetection && this.hitContext.translate(e, g);
      a = f * b.rotation;
      isNaN(a) || (this.canvas.rotate(a), this.hitDetection && this.hitContext.rotate(a));
      f = 2 * b.pointRadius / Math.max(d.getWidth(), d.getHeight());
      this.canvas.scale(f, f);
      this.hitDetection && this.hitContext.scale(f, f);
      a = d.getCenterLonLat().lon;
      d = d.getCenterLonLat().lat;
      this.canvas.translate(-a, -d);
      this.hitDetection && this.hitContext.translate(-a,
        -d);
      g = b.strokeWidth;
      b.strokeWidth = g / f;
      if (!1 !== b.fill) {
        this.setCanvasStyle("fill", b);
        this.canvas.beginPath();
        for (a = 0; a < h.length; a += 2)d = h[a], e = h[a + 1], 0 == a && this.canvas.moveTo(d, e), this.canvas.lineTo(d, e);
        this.canvas.closePath();
        this.canvas.fill();
        if (this.hitDetection) {
          this.setHitContextStyle("fill", c, b);
          this.hitContext.beginPath();
          for (a = 0; a < h.length; a += 2)d = h[a], e = h[a + 1], 0 == a && this.canvas.moveTo(d, e), this.hitContext.lineTo(d, e);
          this.hitContext.closePath();
          this.hitContext.fill()
        }
      }
      if (!1 !== b.stroke) {
        this.setCanvasStyle("stroke",
          b);
        this.canvas.beginPath();
        for (a = 0; a < h.length; a += 2)d = h[a], e = h[a + 1], 0 == a && this.canvas.moveTo(d, e), this.canvas.lineTo(d, e);
        this.canvas.closePath();
        this.canvas.stroke();
        if (this.hitDetection) {
          this.setHitContextStyle("stroke", c, b, f);
          this.hitContext.beginPath();
          for (a = 0; a < h.length; a += 2)d = h[a], e = h[a + 1], 0 == a && this.hitContext.moveTo(d, e), this.hitContext.lineTo(d, e);
          this.hitContext.closePath();
          this.hitContext.stroke()
        }
      }
      b.strokeWidth = g;
      this.canvas.restore();
      this.hitDetection && this.hitContext.restore();
      this.setCanvasStyle("reset")
    }
  },
  setCanvasStyle: function (a, b) {
    "fill" === a ? (this.canvas.globalAlpha = b.fillOpacity, this.canvas.fillStyle = b.fillColor) : "stroke" === a ? (this.canvas.globalAlpha = b.strokeOpacity, this.canvas.strokeStyle = b.strokeColor, this.canvas.lineWidth = b.strokeWidth) : (this.canvas.globalAlpha = 0, this.canvas.lineWidth = 1)
  },
  featureIdToHex: function (a) {
    a = Number(a.split("_").pop()) + 1;
    16777216 <= a && (this.hitOverflow = a - 16777215, a = a % 16777216 + 1);
    a = "000000" + a.toString(16);
    var b = a.length;
    return a = "#" + a.substring(b - 6, b)
  },
  setHitContextStyle: function (a,
                                b, c, d) {
    b = this.featureIdToHex(b);
    "fill" == a ? (this.hitContext.globalAlpha = 1, this.hitContext.fillStyle = b) : "stroke" == a ? (this.hitContext.globalAlpha = 1, this.hitContext.strokeStyle = b, "undefined" === typeof d ? this.hitContext.lineWidth = c.strokeWidth + 2 : isNaN(d) || (this.hitContext.lineWidth = c.strokeWidth + 2 / d)) : (this.hitContext.globalAlpha = 0, this.hitContext.lineWidth = 1)
  },
  drawPoint: function (a, b, c) {
    if (!1 !== b.graphic)if (b.externalGraphic) this.drawExternalGraphic(a, b, c); else if (b.graphicName && "circle" != b.graphicName) this.drawNamedSymbol(a,
      b, c); else {
      var d = this.getLocalXY(a);
      a = d[0];
      d = d[1];
      if (!isNaN(a) && !isNaN(d)) {
        var e = 2 * Math.PI, f = b.pointRadius;
        !1 !== b.fill && (this.setCanvasStyle("fill", b), this.canvas.beginPath(), this.canvas.arc(a, d, f, 0, e, !0), this.canvas.fill(), this.hitDetection && (this.setHitContextStyle("fill", c, b), this.hitContext.beginPath(), this.hitContext.arc(a, d, f, 0, e, !0), this.hitContext.fill()));
        !1 !== b.stroke && (this.setCanvasStyle("stroke", b), this.canvas.beginPath(), this.canvas.arc(a, d, f, 0, e, !0), this.canvas.stroke(), this.hitDetection &&
        (this.setHitContextStyle("stroke", c, b), this.hitContext.beginPath(), this.hitContext.arc(a, d, f, 0, e, !0), this.hitContext.stroke()), this.setCanvasStyle("reset"))
      }
    }
  },
  drawLineString: function (a, b, c) {
    b = OpenLayersForProjection.Util.applyDefaults({fill: !1}, b);
    this.drawLinearRing(a, b, c)
  },
  drawLinearRing: function (a, b, c) {
    !1 !== b.fill && (this.setCanvasStyle("fill", b), this.renderPath(this.canvas, a, b, c, "fill"), this.hitDetection && (this.setHitContextStyle("fill", c, b), this.renderPath(this.hitContext, a, b, c, "fill")));
    !1 !==
    b.stroke && (this.setCanvasStyle("stroke", b), this.renderPath(this.canvas, a, b, c, "stroke"), this.hitDetection && (this.setHitContextStyle("stroke", c, b), this.renderPath(this.hitContext, a, b, c, "stroke")));
    this.setCanvasStyle("reset")
  },
  renderPath: function (a, b, c, d, e) {
    b = b.components;
    c = b.length;
    a.beginPath();
    d = this.getLocalXY(b[0]);
    var f = d[1];
    if (!isNaN(d[0]) && !isNaN(f)) {
      a.moveTo(d[0], d[1]);
      for (d = 1; d < c; ++d)f = this.getLocalXY(b[d]), a.lineTo(f[0], f[1]);
      "fill" === e ? a.fill() : a.stroke()
    }
  },
  drawPolygon: function (a, b, c) {
    a =
      a.components;
    var d = a.length;
    this.drawLinearRing(a[0], b, c);
    for (var e = 1; e < d; ++e)this.canvas.globalCompositeOperation = "destination-out", this.hitDetection && (this.hitContext.globalCompositeOperation = "destination-out"), this.drawLinearRing(a[e], OpenLayersForProjection.Util.applyDefaults({
      stroke: !1,
      fillOpacity: 1
    }, b), c), this.canvas.globalCompositeOperation = "source-over", this.hitDetection && (this.hitContext.globalCompositeOperation = "source-over"), this.drawLinearRing(a[e], OpenLayersForProjection.Util.applyDefaults({fill: !1},
      b), c)
  },
  drawText: function (a, b) {
    var c = this.getLocalXY(a);
    this.setCanvasStyle("reset");
    this.canvas.fillStyle = b.fontColor;
    this.canvas.globalAlpha = b.fontOpacity || 1;
    var d = [b.fontStyle ? b.fontStyle : "normal", "normal", b.fontWeight ? b.fontWeight : "normal", b.fontSize ? b.fontSize : "1em", b.fontFamily ? b.fontFamily : "sans-serif"].join(" "),
      e = b.label.split("\n"), f = e.length;
    if (this.canvas.fillText) {
      this.canvas.font = d;
      this.canvas.textAlign = OpenLayersForProjection.Renderer.Canvas.LABEL_ALIGN[b.labelAlign[0]] || "center";
      this.canvas.textBaseline =
        OpenLayersForProjection.Renderer.Canvas.LABEL_ALIGN[b.labelAlign[1]] || "middle";
      var g = OpenLayersForProjection.Renderer.Canvas.LABEL_FACTOR[b.labelAlign[1]];
      null == g && (g = -.5);
      d = this.canvas.measureText("Mg").height || this.canvas.measureText("xx").width;
      c[1] += d * g * (f - 1);
      for (g = 0; g < f; g++)b.labelOutlineWidth && (this.canvas.save(), this.canvas.globalAlpha = b.labelOutlineOpacity || b.fontOpacity || 1, this.canvas.strokeStyle = b.labelOutlineColor, this.canvas.lineWidth = b.labelOutlineWidth, this.canvas.strokeText(e[g], c[0],
        c[1] + d * g + 1), this.canvas.restore()), this.canvas.fillText(e[g], c[0], c[1] + d * g)
    } else if (this.canvas.mozDrawText) {
      this.canvas.mozTextStyle = d;
      var h = OpenLayersForProjection.Renderer.Canvas.LABEL_FACTOR[b.labelAlign[0]];
      null == h && (h = -.5);
      g = OpenLayersForProjection.Renderer.Canvas.LABEL_FACTOR[b.labelAlign[1]];
      null == g && (g = -.5);
      d = this.canvas.mozMeasureText("xx");
      c[1] += d * (1 + g * f);
      for (g = 0; g < f; g++) {
        var k = c[0] + h * this.canvas.mozMeasureText(e[g]), l = c[1] + g * d;
        this.canvas.translate(k, l);
        this.canvas.mozDrawText(e[g]);
        this.canvas.translate(-k,
          -l)
      }
    }
    this.setCanvasStyle("reset")
  },
  getLocalXY: function (a) {
    var b = this.getResolution(), c = this.extent;
    return [(a.x - this.featureDx) / b + -c.left / b, c.top / b - a.y / b]
  },
  clear: function () {
    var a = this.root.height, b = this.root.width;
    this.canvas.clearRect(0, 0, b, a);
    this.features = {};
    this.hitDetection && this.hitContext.clearRect(0, 0, b, a)
  },
  getFeatureIdFromEvent: function (a) {
    var b;
    if (this.hitDetection && "none" !== this.root.style.display && !this.map.dragging && (a = a.xy, a = this.hitContext.getImageData(a.x | 0, a.y | 0, 1, 1).data, 255 === a[3] &&
      (a = a[2] + 256 * (a[1] + 256 * a[0])))) {
      a = "OpenLayers_Feature_Vector_" + (a - 1 + this.hitOverflow);
      try {
        b = this.features[a][0]
      } catch (c) {
      }
    }
    return b
  },
  eraseFeatures: function (a) {
    OpenLayersForProjection.Util.isArray(a) || (a = [a]);
    for (var b = 0; b < a.length; ++b)delete this.features[a[b].id];
    this.redraw()
  },
  redraw: function () {
    if (!this.locked) {
      var a = this.root.height, b = this.root.width;
      this.canvas.clearRect(0, 0, b, a);
      this.hitDetection && this.hitContext.clearRect(0, 0, b, a);
      var a = [], c, d, e = this.map.baseLayer && this.map.baseLayer.wrapDateLine &&
        this.map.getMaxExtent(), f;
      for (f in this.features)this.features.hasOwnProperty(f) && (b = this.features[f][0], c = b.geometry, this.calculateFeatureDx(c.getBounds(), e), d = this.features[f][1], this.drawGeometry(c, d, b.id), d.label && a.push([b, d]));
      b = 0;
      for (c = a.length; b < c; ++b)f = a[b], this.drawText(f[0].geometry.getCentroid(), f[1])
    }
  },
  CLASS_NAME: "OpenLayersForProjection.Renderer.Canvas"
});
OpenLayersForProjection.Renderer.Canvas.LABEL_ALIGN = {l: "left", r: "right", t: "top", b: "bottom"};
OpenLayersForProjection.Renderer.Canvas.LABEL_FACTOR = {l: 0, r: -1, t: 0, b: -1};
OpenLayersForProjection.Renderer.Canvas.drawImageScaleFactor = null;
OpenLayersForProjection.Renderer.SVG = OpenLayersForProjection.Class(OpenLayersForProjection.Renderer.Elements, {
  xmlns: "http://www.w3.org/2000/svg",
  xlinkns: "http://www.w3.org/1999/xlink",
  MAX_PIXEL: 15E3,
  translationParameters: null,
  symbolMetrics: null,
  initialize: function (a) {
    this.supported() && (OpenLayersForProjection.Renderer.Elements.prototype.initialize.apply(this, arguments), this.translationParameters = {
      x: 0,
      y: 0
    }, this.symbolMetrics = {})
  },
  supported: function () {
    return document.implementation && (document.implementation.hasFeature("org.w3c.svg",
        "1.0") || document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#SVG", "1.1") || document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1"))
  },
  setSize: function (a) {
    OpenLayersForProjection.Renderer.prototype.setSize.apply(this, arguments);
    this.rendererRoot.setAttributeNS(null, "width", this.size.w);
    this.rendererRoot.setAttributeNS(null, "height", this.size.h)
  },
  setExtent: function (a, b) {
    var c = OpenLayersForProjection.Renderer.Elements.prototype.setExtent.apply(this,
      arguments), d = this.getResolution(), e = -a.left / d, d = a.top / d;
    if (b)return this.left = e, this.top = d, this.rendererRoot.setAttributeNS(null, "viewBox", "0 0 " + this.size.w + " " + this.size.h), this.translate(this.xOffset, 0), !0;
    (e = this.translate(e - this.left + this.xOffset, d - this.top)) || this.setExtent(a, !0);
    return c && e
  },
  createRenderRoot: function () {
    var a = this.nodeFactory(this.container.id + "_svgRoot", "svg");
    a.style.display = "block";
    return a
  },
  createNode: function (a, b) {
    var c = document.createElementNS(this.xmlns, a);
    b && c.setAttributeNS(null,
      "id", b);
    return c
  },
  createRoot: function (a) {
    return this.nodeFactory(this.container.id + a, "g")
  },
  translate: function (a, b) {
    if (this.inValidRange(a, b, !0)) {
      var c = "";
      if (a || b) c = "translate(" + a + "," + b + ")";
      this.root.setAttributeNS(null, "transform", c);
      this.translationParameters = {x: a, y: b};
      return !0
    }
    return !1
  },
  inValidRange: function (a, b, c) {
    a += c ? 0 : this.translationParameters.x;
    b += c ? 0 : this.translationParameters.y;
    return a >= -this.MAX_PIXEL && a <= this.MAX_PIXEL && b >= -this.MAX_PIXEL && b <= this.MAX_PIXEL
  },
  createImagePattern: function (a,
                                b, c) {
    if (this.container && this.container.id) {
      var d = this.container.id + "-" + a.externalGraphic + (a.pointRadius ? "-" + a.pointRadius : ""),
        e = OpenLayers.Util.getElement(d);
      if (!e) {
        var f = new Image;
        f.onload = OpenLayers.Function.bind(function () {
          this.defs || (this.defs = this.createDefs());
          e = this.nodeFactory(d, "pattern");
          e.setAttributeNS(null, "x", "0");
          e.setAttributeNS(null, "y", "0");
          e.setAttributeNS(null, "height", c);
          e.setAttributeNS(null, "width", b);
          e.setAttributeNS(null, "patternUnits", "userSpaceOnUse");
          var f = this.nodeFactory(null,
            "image");
          e.appendChild(f);
          f.setAttributeNS(this.xlinkns, "href", a.externalGraphic);
          f.setAttributeNS(null, "height", c);
          f.setAttributeNS(null, "width", b);
          f.setAttributeNS(null, "style", "opacity: " + (a.graphicOpacity || a.fillOpacity || 1));
          if ("undefined" != typeof a.rotation) {
            var h = OpenLayers.String.format("rotate(${0})", [a.rotation]);
            f.setAttributeNS(null, "transform", h)
          }
          this.defs.appendChild(e)
        }, this);
        f.src = a.externalGraphic
      }
      return d
    }
  },
  setStyle: function (a, b, c) {
    "circle" == a.nodeName && (b.pointRadius || (b.pointRadius =
      6), b.pointerEvents || (b.pointerEvents = "visiblePainted"));
    b = b || a._style;
    c = c || a._options;
    var d = b.title || b.graphicTitle;
    if (d) {
      a.setAttributeNS(null, "title", d);
      var e = a.getElementsByTagName("title");
      0 < e.length ? e[0].firstChild.textContent = d : (e = this.nodeFactory(null, "title"), e.textContent = d, a.appendChild(e))
    }
    var e = parseFloat(a.getAttributeNS(null, "r")), d = 1, f;
    if (-1 !== a._geometryClass.indexOf("Geometry.Point") && e) {
      a.style.visibility = "";
      if (!1 === b.graphic) a.style.visibility = "hidden"; else if (b.externalGraphic) {
        f =
          this.getPosition(a);
        b.graphicWidth && b.graphicHeight && a.setAttributeNS(null, "preserveAspectRatio", "none");
        var e = b.graphicWidth || b.size || 30, g = b.graphicHeight || b.size || 30, e = e ? e : 2 * b.pointRadius,
          g = g ? g : 2 * b.pointRadius, h = void 0 != b.graphicYOffset ? b.graphicYOffset : -(.5 * g),
          k = b.graphicOpacity || b.fillOpacity;
        a.setAttributeNS(null, "x", (f.x + (void 0 != b.graphicXOffset ? b.graphicXOffset : -(.5 * e))).toFixed());
        a.setAttributeNS(null, "y", (f.y + h).toFixed());
        a.setAttributeNS(null, "width", e);
        a.setAttributeNS(null, "height",
          g);
        a.setAttributeNS(this.xlinkns, "xlink:href", b.externalGraphic);
        a.setAttributeNS(null, "style", "opacity: " + k);
        a.onclick = OpenLayersForProjection.Event.preventDefault
      } else if (this.isComplexSymbol(b.graphicName)) {
        var e = 3 * b.pointRadius, g = 2 * e, l = null;
        Nigsys.graphicIsFont(b.graphicName) ? (l = StyleEditor.drawRuleFontImageOnWFS(b), d = 1, a.setAttributeNS(null, "viewBox", "-10 -10 30 30"), a.firstChild && a.removeChild(a.firstChild), a.appendChild(l)) : (l = this.importSymbol(b.graphicName), d = 3 * this.symbolMetrics[l.id][0] /
          g, a.setAttributeNS(null, "viewBox", l.getAttributeNS(null, "viewBox")), a.firstChild && a.removeChild(a.firstChild), a.appendChild(l.firstChild.cloneNode(!0)));
        f = this.getPosition(a);
        h = a.parentNode;
        k = a.nextSibling;
        h && h.removeChild(a);
        a.setAttributeNS(null, "width", g);
        a.setAttributeNS(null, "height", g);
        a.setAttributeNS(null, "x", f.x - e);
        a.setAttributeNS(null, "y", f.y - e);
        k ? h.insertBefore(a, k) : h && h.appendChild(a)
      } else a.setAttributeNS(null, "r", b.pointRadius);
      e = b.rotation;
      void 0 === e && void 0 === a._rotation || !f || (a._rotation =
        e, e |= 0, "svg" !== a.nodeName ? a.setAttributeNS(null, "transform", "rotate(" + e + " " + f.x + " " + f.y + ")") : (f = this.symbolMetrics[l.id]) ? a.firstChild.setAttributeNS(null, "transform", "rotate(" + e + " " + f[1] + " " + f[2] + ")") : a.firstChild.setAttributeNS(null, "transform", "rotate(" + e + " 5 5)"))
    }
    c.isFilled ? b.externalGraphic ? (g = b.size ? b.size : b.pointRadius, f = OpenLayersForProjection.Renderer.SVG.prototype.createImagePattern(b, g, g), a.setAttributeNS(null, "fill", "url(#" + f + ")"), a.setAttributeNS(null, "fill-opacity", b.graphicOpacity)) :
      b.graphicName && -1 !== b.graphicName.indexOf("shape://") && "OpenLayers.Geometry.Polygon" === a._geometryClass ? (OpenLayersForProjection.Console.error("WellKnownName is not yet supported as GraphicFill by the SVG renderer!"), b.externalGraphic = applicationUrl + "resources/img/pattern.png?" + Imajnet.version, f = OpenLayersForProjection.Renderer.SVG.prototype.createImagePattern(b, 58, 58), a.setAttributeNS(null, "fill", "url(#" + f + ")"), a.setAttributeNS(null, "fill-opacity", b.patternstrokeOpacity)) : (a.setAttributeNS(null,
        "fill", b.fillColor), a.setAttributeNS(null, "fill-opacity", b.fillOpacity)) : a.setAttributeNS(null, "fill", "none");
    c.isStroked ? (a.setAttributeNS(null, "stroke", b.strokeColor), a.setAttributeNS(null, "stroke-opacity", b.strokeOpacity), a.setAttributeNS(null, "stroke-width", b.strokeWidth * d), a.setAttributeNS(null, "stroke-linecap", b.strokeLinecap || "round"), a.setAttributeNS(null, "stroke-linejoin", "round"), b.strokeDashstyle && a.setAttributeNS(null, "stroke-dasharray", this.dashStyle(b, d))) : a.setAttributeNS(null, "stroke",
      "none");
    b.pointerEvents && a.setAttributeNS(null, "pointer-events", b.pointerEvents);
    null != b.cursor && a.setAttributeNS(null, "cursor", b.cursor);
    return a
  },
  drawPoint: function (a, b) {
    return this.drawCircle(a, b, 1)
  },
  drawCircle: function (a, b, c) {
    var d = this.getResolution(), e = (b.x - this.featureDx) / d + this.left;
    b = this.top - b.y / d;
    return this.inValidRange(e, b) ? (a.setAttributeNS(null, "cx", e), a.setAttributeNS(null, "cy", b), a.setAttributeNS(null, "r", c), a) : !1
  },
  importSymbol: function (a) {
    this.defs || (this.defs = this.createDefs());
    var b = this.container.id + "-" + a, c = document.getElementById(b);
    if (null != c)return c;
    var d = OpenLayersForProjection.Renderer.symbol[a];
    if (!d)throw Error(a + " is not a valid symbol name");
    a = this.nodeFactory(b, "symbol");
    var e = this.nodeFactory(null, "polygon");
    a.appendChild(e);
    for (var c = new OpenLayersForProjection.Bounds(Number.MAX_VALUE, Number.MAX_VALUE, 0, 0), f = [], g, h, k = 0; k < d.length; k += 2)g = d[k], h = d[k + 1], c.left = Math.min(c.left, g), c.bottom = Math.min(c.bottom, h), c.right = Math.max(c.right, g), c.top = Math.max(c.top, h),
      f.push(g, ",", h);
    e.setAttributeNS(null, "points", f.join(" "));
    d = c.getWidth();
    e = c.getHeight();
    a.setAttributeNS(null, "viewBox", [c.left - d, c.bottom - e, 3 * d, 3 * e].join(" "));
    this.symbolMetrics[b] = [Math.max(d, e), c.getCenterLonLat().lon, c.getCenterLonLat().lat];
    this.defs.appendChild(a);
    return a
  },
  createDefs: function () {
    if (!this.container || !this.container.id)return null;
    var a = this.nodeFactory(this.container.id + "_defs", "defs");
    this.rendererRoot.appendChild(a);
    return a
  },
  getPosition: function (a) {
    return {
      x: parseFloat(a.getAttributeNS(null,
        "cx")), y: parseFloat(a.getAttributeNS(null, "cy"))
    }
  },
  getNodeType: function (a, b) {
    var c = null;
    switch (a.CLASS_NAME) {
      case "OpenLayers.Geometry.Point":
        c = b.externalGraphic ? "image" : this.isComplexSymbol(b.graphicName) ? "svg" : "circle";
        break;
      case "OpenLayers.Geometry.Rectangle":
        c = "rect";
        break;
      case "OpenLayers.Geometry.LineString":
        c = "polyline";
        break;
      case "OpenLayers.Geometry.LinearRing":
        c = "polygon";
        break;
      case "OpenLayers.Geometry.Polygon":
      case "OpenLayers.Geometry.Curve":
        c = "path"
    }
    return c
  },
  dashStyle: function (a, b) {
    var c =
      a.strokeWidth * b, d = a.strokeDashstyle;
    switch (d) {
      case "solid":
        return "none";
      case "dot":
        return [1, 4 * c].join();
      case "dash":
        return [4 * c, 4 * c].join();
      case "dashdot":
        return [4 * c, 4 * c, 1, 4 * c].join();
      case "longdash":
        return [8 * c, 4 * c].join();
      case "longdashdot":
        return [8 * c, 4 * c, 1, 4 * c].join();
      default:
        return OpenLayersForProjection.String.trim(d).replace(/\s+/g, ",")
    }
  },
  drawText: function (a, b, c) {
    var d = !!b.labelOutlineWidth;
    if (d) {
      var e = OpenLayersForProjection.Util.extend({}, b);
      e.fontColor = e.labelOutlineColor;
      e.fontStrokeColor =
        e.labelOutlineColor;
      e.fontStrokeWidth = b.labelOutlineWidth;
      b.labelOutlineOpacity && (e.fontOpacity = b.labelOutlineOpacity);
      delete e.labelOutlineWidth;
      this.drawText(a, e, c)
    }
    var f = this.getResolution(), e = (c.x - this.featureDx) / f + this.left, g = c.y / f - this.top,
      d = d ? this.LABEL_OUTLINE_SUFFIX : this.LABEL_ID_SUFFIX, f = this.nodeFactory(a + d, "text");
    f.setAttributeNS(null, "x", e);
    f.setAttributeNS(null, "y", -g);
    b.fontColor && f.setAttributeNS(null, "fill", b.fontColor);
    b.fontStrokeColor && f.setAttributeNS(null, "stroke", b.fontStrokeColor);
    b.fontStrokeWidth && f.setAttributeNS(null, "stroke-width", b.fontStrokeWidth);
    b.fontOpacity && f.setAttributeNS(null, "opacity", b.fontOpacity);
    b.fontFamily && f.setAttributeNS(null, "font-family", b.fontFamily);
    b.fontSize && f.setAttributeNS(null, "font-size", b.fontSize);
    b.fontWeight && f.setAttributeNS(null, "font-weight", b.fontWeight);
    b.fontStyle && f.setAttributeNS(null, "font-style", b.fontStyle);
    !0 === b.labelSelect ? (f.setAttributeNS(null, "pointer-events", "visible"), f._featureId = a) : f.setAttributeNS(null, "pointer-events",
      "none");
    g = b.labelAlign || OpenLayersForProjection.Renderer.defaultSymbolizer.labelAlign;
    f.setAttributeNS(null, "text-anchor", OpenLayersForProjection.Renderer.SVG.LABEL_ALIGN[g[0]] || "middle");
    !0 === OpenLayersForProjection.IS_GECKO && f.setAttributeNS(null, "dominant-baseline", OpenLayersForProjection.Renderer.SVG.LABEL_ALIGN[g[1]] || "central");
    for (var h = b.label.split("\n"), k = h.length; f.childNodes.length > k;)f.removeChild(f.lastChild);
    for (var l = 0; l < k; l++) {
      var m = this.nodeFactory(a + d + "_tspan_" + l, "tspan");
      !0 ===
      b.labelSelect && (m._featureId = a, m._geometry = c, m._geometryClass = c.CLASS_NAME);
      !1 === OpenLayersForProjection.IS_GECKO && m.setAttributeNS(null, "baseline-shift", OpenLayersForProjection.Renderer.SVG.LABEL_VSHIFT[g[1]] || "-35%");
      m.setAttribute("x", e);
      if (0 == l) {
        var n = OpenLayersForProjection.Renderer.SVG.LABEL_VFACTOR[g[1]];
        null == n && (n = -.5);
        m.setAttribute("dy", n * (k - 1) + "em")
      } else m.setAttribute("dy", "1em");
      m.textContent = "" === h[l] ? " " : h[l];
      m.parentNode || f.appendChild(m)
    }
    f.parentNode || this.textRoot.appendChild(f)
  },
  CLASS_NAME: "OpenLayersForProjection.Renderer.SVG"
});
OpenLayersForProjection.Renderer.SVG.LABEL_ALIGN = {l: "start", r: "end", b: "bottom", t: "hanging"};
OpenLayersForProjection.Renderer.SVG.LABEL_VFACTOR = {t: 0, b: -1};
OpenLayersForProjection.Renderer.VML = OpenLayersForProjection.Class(OpenLayersForProjection.Renderer.Elements, {
  xmlns: "urn:schemas-microsoft-com:vml", symbolCache: {}, offset: null, initialize: function (a) {
    if (this.supported()) {
      if (!document.namespaces.olv) {
        document.namespaces.add("olv", this.xmlns);
        for (var b = document.createStyleSheet(), c = "shape rect oval fill stroke imagedata group textbox".split(" "), d = 0, e = c.length; d < e; d++)b.addRule("olv\\:" + c[d], "behavior: url(#default#VML); position: absolute; display: inline-block;")
      }
      OpenLayersForProjection.Renderer.Elements.prototype.initialize.apply(this,
        arguments)
    }
  }, supported: function () {
    return !!document.namespaces
  }, setExtent: function (a, b) {
    var c = OpenLayersForProjection.Renderer.Elements.prototype.setExtent.apply(this, arguments),
      d = this.getResolution(), e = a.left / d | 0, d = a.top / d - this.size.h | 0;
    b || !this.offset ? (this.offset = {x: e, y: d}, d = e = 0) : (e -= this.offset.x, d -= this.offset.y);
    this.root.coordorigin = e - this.xOffset + " " + d;
    for (var e = [this.root, this.vectorRoot, this.textRoot], f = 0, g = e.length; f < g; ++f)d = e[f], d.coordsize = this.size.w + " " + this.size.h;
    this.root.style.flip =
      "y";
    return c
  }, setSize: function (a) {
    OpenLayersForProjection.Renderer.prototype.setSize.apply(this, arguments);
    for (var b = [this.rendererRoot, this.root, this.vectorRoot, this.textRoot], c = this.size.w + "px", d = this.size.h + "px", e, f = 0, g = b.length; f < g; ++f)e = b[f], e.style.width = c, e.style.height = d
  }, createRenderRoot: function () {
    return this.nodeFactory(this.container.id + "_vmlRoot", "div")
  }, createNode: function (a, b) {
    var c = document.createElement(a);
    b && (c.id = b);
    c.unselectable = "on";
    c.onselectstart = OpenLayersForProjection.Function.False;
    return c
  }, createRoot: function (a) {
    return this.nodeFactory(this.container.id + a, "olv:group")
  }, setStyle: function (a, b, c, d) {
    b = b || a._style;
    c = c || a._options;
    var e = b.fillColor, f = b.title || b.graphicTitle;
    f && (a.title = f);
    if ("OpenLayers.Geometry.Point" === a._geometryClass)if (b.externalGraphic) {
      c.isFilled = !0;
      var e = b.graphicWidth || b.graphicHeight, f = b.graphicHeight || b.graphicWidth, e = e ? e : 2 * b.pointRadius,
        f = f ? f : 2 * b.pointRadius, g = this.getResolution(),
        h = void 0 != b.graphicXOffset ? b.graphicXOffset : -(.5 * e), k = void 0 != b.graphicYOffset ?
          b.graphicYOffset : -(.5 * f);
      a.style.left = ((d.x - this.featureDx) / g - this.offset.x + h | 0) + "px";
      a.style.top = (d.y / g - this.offset.y - (k + f) | 0) + "px";
      a.style.width = e + "px";
      a.style.height = f + "px";
      a.style.flip = "y";
      e = "none";
      c.isStroked = !1
    } else this.isComplexSymbol(b.graphicName) ? (f = this.importSymbol(b.graphicName), a.path = f.path, a.coordorigin = f.left + "," + f.bottom, f = f.size, a.coordsize = f + "," + f, this.drawCircle(a, d, b.pointRadius), a.style.flip = "y") : this.drawCircle(a, d, b.pointRadius);
    c.isFilled ? a.fillcolor = e : a.filled = "false";
    d = a.getElementsByTagName("fill");
    d = 0 == d.length ? null : d[0];
    c.isFilled ? (d || (d = this.createNode("olv:fill", a.id + "_fill")), d.opacity = b.fillOpacity, "OpenLayers.Geometry.Point" === a._geometryClass && b.externalGraphic && (b.graphicOpacity && (d.opacity = b.graphicOpacity), d.src = b.externalGraphic, d.type = "frame", b.graphicWidth && b.graphicHeight || (d.aspect = "atmost")), d.parentNode != a && a.appendChild(d)) : d && a.removeChild(d);
    e = b.rotation;
    if (void 0 !== e || void 0 !== a._rotation) a._rotation = e, b.externalGraphic ? (this.graphicRotate(a,
      h, k, b), d.opacity = 0) : "OpenLayers.Geometry.Point" === a._geometryClass && (a.style.rotation = e || 0);
    h = a.getElementsByTagName("stroke");
    h = 0 == h.length ? null : h[0];
    c.isStroked ? (h || (h = this.createNode("olv:stroke", a.id + "_stroke"), a.appendChild(h)), h.on = !0, h.color = b.strokeColor, h.weight = b.strokeWidth + "px", h.opacity = b.strokeOpacity, h.endcap = "butt" == b.strokeLinecap ? "flat" : b.strokeLinecap || "round", b.strokeDashstyle && (h.dashstyle = this.dashStyle(b))) : (a.stroked = !1, h && (h.on = !1));
    "inherit" != b.cursor && null != b.cursor && (a.style.cursor =
      b.cursor);
    return a
  }, postDraw: function (a) {
    a.style.visibility = "visible";
    var b = a._style.fillColor, c = a._style.strokeColor;
    "none" == b && a.fillcolor != b && (a.fillcolor = b);
    "none" == c && a.strokecolor != c && (a.strokecolor = c)
  }, drawPoint: function (a, b) {
    return this.drawCircle(a, b, 1)
  }, drawCircle: function (a, b, c) {
    if (!isNaN(b.x) && !isNaN(b.y)) {
      var d = this.getResolution();
      a.style.left = ((b.x - this.featureDx) / d - this.offset.x | 0) - c + "px";
      a.style.top = (b.y / d - this.offset.y | 0) - c + "px";
      b = 2 * c;
      a.style.width = b + "px";
      a.style.height = b + "px";
      return a
    }
    return !1
  },
  importSymbol: function (a) {
    var b = this.container.id + "-" + a, c = this.symbolCache[b];
    if (c)return c;
    c = OpenLayersForProjection.Renderer.symbol[a];
    if (!c)throw Error(a + " is not a valid symbol name");
    a = new OpenLayersForProjection.Bounds(Number.MAX_VALUE, Number.MAX_VALUE, 0, 0);
    for (var d = ["m"], e = 0; e < c.length; e += 2) {
      var f = c[e], g = c[e + 1];
      a.left = Math.min(a.left, f);
      a.bottom = Math.min(a.bottom, g);
      a.right = Math.max(a.right, f);
      a.top = Math.max(a.top, g);
      d.push(f);
      d.push(g);
      0 == e && d.push("l")
    }
    d.push("x e");
    c = d.join(" ");
    d = (a.getWidth() -
      a.getHeight()) / 2;
    0 < d ? (a.bottom -= d, a.top += d) : (a.left += d, a.right -= d);
    c = {path: c, size: a.getWidth(), left: a.left, bottom: a.bottom};
    return this.symbolCache[b] = c
  }, getNodeType: function (a, b) {
    var c = null;
    switch (a.CLASS_NAME) {
      case "OpenLayers.Geometry.Point":
        c = b.externalGraphic ? "olv:rect" : this.isComplexSymbol(b.graphicName) ? "olv:shape" : "olv:oval";
        break;
      case "OpenLayers.Geometry.Rectangle":
        c = "olv:rect";
        break;
      case "OpenLayers.Geometry.LineString":
      case "OpenLayers.Geometry.LinearRing":
      case "OpenLayers.Geometry.Polygon":
      case "OpenLayers.Geometry.Curve":
        c =
          "olv:shape"
    }
    return c
  }, CLASS_NAME: "OpenLayersForProjection.Renderer.VML"
});
OpenLayersForProjection.Event = {
  observers: !1,
  KEY_SPACE: 32,
  KEY_BACKSPACE: 8,
  KEY_TAB: 9,
  KEY_RETURN: 13,
  KEY_ESC: 27,
  KEY_LEFT: 37,
  KEY_UP: 38,
  KEY_RIGHT: 39,
  KEY_DOWN: 40,
  KEY_DELETE: 46,
  element: function (a) {
    return a.target || a.srcElement
  },
  isSingleTouch: function (a) {
    return a.touches && 1 == a.touches.length
  },
  isMultiTouch: function (a) {
    return a.touches && 1 < a.touches.length
  },
  isLeftClick: function (a) {
    return a.which && 1 == a.which || a.button && 1 == a.button
  },
  isRightClick: function (a) {
    return a.which && 3 == a.which || a.button && 2 == a.button
  },
  stop: function (a,
                  b) {
    b || OpenLayersForProjection.Event.preventDefault(a);
    a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0
  },
  preventDefault: function (a) {
    a.preventDefault ? a.preventDefault() : a.returnValue = !1
  },
  findElement: function (a, b) {
    for (var c = OpenLayersForProjection.Event.element(a); c.parentNode && (!c.tagName || c.tagName.toUpperCase() != b.toUpperCase());)c = c.parentNode;
    return c
  },
  observe: function (a, b, c, d) {
    a = OpenLayersForProjection.Util.getElement(a);
    d = d || !1;
    "keypress" == b && (navigator.appVersion.match(/Konqueror|Safari|KHTML/) ||
    a.attachEvent) && (b = "keydown");
    this.observers || (this.observers = {});
    a || (a = {});
    if (!a._eventCacheID) {
      var e = "eventCacheID_";
      a.id && (e = a.id + "_" + e);
      a._eventCacheID = OpenLayersForProjection.Util.createUniqueID(e)
    }
    e = a._eventCacheID;
    this.observers[e] || (this.observers[e] = []);
    this.observers[e].push({element: a, name: b, observer: c, useCapture: d});
    a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c)
  },
  stopObservingElement: function (a) {
    (a = OpenLayersForProjection.Util.getElement(a)) && this._removeElementObservers(OpenLayersForProjection.Event.observers[a._eventCacheID])
  },
  _removeElementObservers: function (a) {
    if (a)for (var b = a.length - 1; 0 <= b; b--) {
      var c = a[b];
      OpenLayersForProjection.Event.stopObserving.apply(this, [c.element, c.name, c.observer, c.useCapture])
    }
  },
  stopObserving: function (a, b, c, d) {
    d = d || !1;
    a = OpenLayersForProjection.Util.getElement(a);
    var e = a._eventCacheID;
    "keypress" == b && (navigator.appVersion.match(/Konqueror|Safari|KHTML/) || a.detachEvent) && (b = "keydown");
    var f = !1, g = OpenLayersForProjection.Event.observers[e];
    if (g)for (var h = 0; !f && h < g.length;) {
      var k = g[h];
      if (k.name ==
        b && k.observer == c && k.useCapture == d) {
        g.splice(h, 1);
        0 == g.length && delete OpenLayersForProjection.Event.observers[e];
        f = !0;
        break
      }
      h++
    }
    f && (a.removeEventListener ? a.removeEventListener(b, c, d) : a && a.detachEvent && a.detachEvent("on" + b, c));
    return f
  },
  unloadCache: function () {
    if (OpenLayersForProjection.Event && OpenLayersForProjection.Event.observers) {
      for (var a in OpenLayersForProjection.Event.observers)OpenLayersForProjection.Event._removeElementObservers.apply(this, [OpenLayersForProjection.Event.observers[a]]);
      OpenLayersForProjection.Event.observers =
        !1
    }
  },
  CLASS_NAME: "OpenLayersForProjection.Event"
};
OpenLayersForProjection.Event.observe(window, "unload", OpenLayersForProjection.Event.unloadCache, !1);
OpenLayersForProjection.Events = OpenLayersForProjection.Class({
  BROWSER_EVENTS: "mouseover mouseout mousedown mouseup mousemove click dblclick rightclick dblrightclick resize focus blur touchstart touchmove touchend keydown".split(" "),
  listeners: null,
  object: null,
  element: null,
  eventHandler: null,
  fallThrough: null,
  includeXY: !1,
  extensions: null,
  extensionCount: null,
  clearMouseListener: null,
  initialize: function (a, b, c, d, e) {
    OpenLayersForProjection.Util.extend(this, e);
    this.object = a;
    this.fallThrough = d;
    this.listeners =
      {};
    this.extensions = {};
    this.extensionCount = {};
    this._msTouches = [];
    null != b && this.attachToElement(b)
  },
  destroy: function () {
    for (var a in this.extensions)"boolean" !== typeof this.extensions[a] && this.extensions[a].destroy();
    this.extensions = null;
    this.element && (OpenLayersForProjection.Event.stopObservingElement(this.element), this.element.hasScrollEvent && OpenLayersForProjection.Event.stopObserving(window, "scroll", this.clearMouseListener));
    this.eventHandler = this.fallThrough = this.object = this.listeners = this.element =
      null
  },
  addEventType: function (a) {
  },
  attachToElement: function (a) {
    this.element ? OpenLayersForProjection.Event.stopObservingElement(this.element) : (this.eventHandler = OpenLayersForProjection.Function.bindAsEventListener(this.handleBrowserEvent, this), this.clearMouseListener = OpenLayersForProjection.Function.bind(this.clearMouseCache, this));
    this.element = a;
    for (var b = !!window.navigator.msMaxTouchPoints, c, d = 0, e = this.BROWSER_EVENTS.length; d < e; d++)c = this.BROWSER_EVENTS[d], OpenLayersForProjection.Event.observe(a, c,
      this.eventHandler), b && 0 === c.indexOf("touch") && this.addMsTouchListener(a, c, this.eventHandler);
    OpenLayersForProjection.Event.observe(a, "dragstart", OpenLayersForProjection.Event.stop)
  },
  on: function (a) {
    for (var b in a)"scope" != b && a.hasOwnProperty(b) && this.register(b, a.scope, a[b])
  },
  register: function (a, b, c, d) {
    a in OpenLayersForProjection.Events && !this.extensions[a] && (this.extensions[a] = new OpenLayersForProjection.Events[a](this));
    if (null != c) {
      null == b && (b = this.object);
      var e = this.listeners[a];
      e || (e = [], this.listeners[a] =
        e, this.extensionCount[a] = 0);
      b = {obj: b, func: c};
      d ? (e.splice(this.extensionCount[a], 0, b), "object" === typeof d && d.extension && this.extensionCount[a]++) : e.push(b)
    }
  },
  registerPriority: function (a, b, c) {
    this.register(a, b, c, !0)
  },
  un: function (a) {
    for (var b in a)"scope" != b && a.hasOwnProperty(b) && this.unregister(b, a.scope, a[b])
  },
  unregister: function (a, b, c) {
    null == b && (b = this.object);
    a = this.listeners[a];
    if (null != a)for (var d = 0, e = a.length; d < e; d++)if (a[d].obj == b && a[d].func == c) {
      a.splice(d, 1);
      break
    }
  },
  remove: function (a) {
    null !=
    this.listeners[a] && (this.listeners[a] = [])
  },
  triggerEvent: function (a, b) {
    var c = this.listeners[a];
    if (c && 0 != c.length) {
      null == b && (b = {});
      b.object = this.object;
      b.element = this.element;
      b.type || (b.type = a);
      for (var c = c.slice(), d, e = 0, f = c.length; e < f && (d = c[e], d = d.func.apply(d.obj, [b]), void 0 == d || 0 != d); e++);
      this.fallThrough || OpenLayersForProjection.Event.stop(b, !0);
      return d
    }
  },
  handleBrowserEvent: function (a) {
    var b = a.type, c = this.listeners[b];
    if (c && 0 != c.length) {
      if ((c = a.touches) && c[0]) {
        for (var d = 0, e = 0, f = c.length, g, h = 0; h <
        f; ++h)g = this.getTouchClientXY(c[h]), d += g.clientX, e += g.clientY;
        a.clientX = d / f;
        a.clientY = e / f
      }
      this.includeXY && (a.xy = this.getMousePosition(a));
      this.triggerEvent(b, a)
    }
  },
  getTouchClientXY: function (a) {
    var b = window.olMockWin || window, c = b.pageXOffset, b = b.pageYOffset, d = a.clientX, e = a.clientY;
    if (0 === a.pageY && Math.floor(e) > Math.floor(a.pageY) || 0 === a.pageX && Math.floor(d) > Math.floor(a.pageX)) d -= c, e -= b; else if (e < a.pageY - b || d < a.pageX - c) d = a.pageX - c, e = a.pageY - b;
    a.olClientX = d;
    a.olClientY = e;
    return {clientX: d, clientY: e}
  },
  clearMouseCache: function () {
    this.element.scrolls = null;
    this.element.lefttop = null;
    this.element.offsets = null
  },
  getMousePosition: function (a) {
    this.includeXY ? this.element.hasScrollEvent || (OpenLayersForProjection.Event.observe(window, "scroll", this.clearMouseListener), this.element.hasScrollEvent = !0) : this.clearMouseCache();
    if (!this.element.scrolls) {
      var b = OpenLayersForProjection.Util.getViewportElement();
      this.element.scrolls = [window.pageXOffset || b.scrollLeft, window.pageYOffset || b.scrollTop]
    }
    this.element.lefttop ||
    (this.element.lefttop = [document.documentElement.clientLeft || 0, document.documentElement.clientTop || 0]);
    this.element.offsets || (this.element.offsets = OpenLayersForProjection.Util.pagePosition(this.element));
    return new OpenLayersForProjection.Pixel(a.clientX + this.element.scrolls[0] - this.element.offsets[0] - this.element.lefttop[0], a.clientY + this.element.scrolls[1] - this.element.offsets[1] - this.element.lefttop[1])
  },
  addMsTouchListener: function (a, b, c) {
    function d (a) {
      c(OpenLayersForProjection.Util.applyDefaults({
        stopPropagation: function () {
          for (var a =
            e.length - 1; 0 <= a; --a)e[a].stopPropagation()
        }, preventDefault: function () {
          for (var a = e.length - 1; 0 <= a; --a)e[a].preventDefault()
        }, type: b
      }, a))
    }

    var e = this._msTouches;
    switch (b) {
      case "touchstart":
        return this.addMsTouchListenerStart(a, b, d);
      case "touchend":
        return this.addMsTouchListenerEnd(a, b, d);
      case "touchmove":
        return this.addMsTouchListenerMove(a, b, d);
      default:
        throw"Unknown touch event type";
    }
  },
  addMsTouchListenerStart: function (a, b, c) {
    var d = this._msTouches;
    OpenLayersForProjection.Event.observe(a, "MSPointerDown",
      function (a) {
        for (var b = !1, g = 0, h = d.length; g < h; ++g)if (d[g].pointerId == a.pointerId) {
          b = !0;
          break
        }
        b || d.push(a);
        a.touches = d.slice();
        c(a)
      });
    OpenLayersForProjection.Event.observe(a, "MSPointerUp", function (a) {
      for (var b = 0, c = d.length; b < c; ++b)if (d[b].pointerId == a.pointerId) {
        d.splice(b, 1);
        break
      }
    })
  },
  addMsTouchListenerMove: function (a, b, c) {
    var d = this._msTouches;
    OpenLayersForProjection.Event.observe(a, "MSPointerMove", function (a) {
      if (a.pointerType != a.MSPOINTER_TYPE_MOUSE || 0 != a.buttons)if (1 != d.length || d[0].pageX != a.pageX ||
        d[0].pageY != a.pageY) {
        for (var b = 0, g = d.length; b < g; ++b)if (d[b].pointerId == a.pointerId) {
          d[b] = a;
          break
        }
        a.touches = d.slice();
        c(a)
      }
    })
  },
  addMsTouchListenerEnd: function (a, b, c) {
    var d = this._msTouches;
    OpenLayersForProjection.Event.observe(a, "MSPointerUp", function (a) {
      for (var b = 0, g = d.length; b < g; ++b)if (d[b].pointerId == a.pointerId) {
        d.splice(b, 1);
        break
      }
      a.touches = d.slice();
      c(a)
    })
  },
  CLASS_NAME: "OpenLayersForProjection.Events"
});
OpenLayersForProjection.Function = {
  bind: function (a, b) {
    var c = Array.prototype.slice.apply(arguments, [2]);
    return function () {
      var d = c.concat(Array.prototype.slice.apply(arguments, [0]));
      return a.apply(b, d)
    }
  }, bindAsEventListener: function (a, b) {
    return function (c) {
      return a.call(b, c || window.event)
    }
  }, False: function () {
    return !1
  }, True: function () {
    return !0
  }, Void: function () {
  }
};
OpenLayersForProjection.Format = OpenLayersForProjection.Class({
  options: null,
  externalProjection: null,
  internalProjection: null,
  data: null,
  keepData: !1,
  initialize: function (a) {
    OpenLayersForProjection.Util.extend(this, a);
    this.options = a
  },
  destroy: function () {
  },
  read: function (a) {
    throw Error("Read not implemented.");
  },
  write: function (a) {
    throw Error("Write not implemented.");
  },
  CLASS_NAME: "OpenLayers.Format"
});
OpenLayersForProjection.Format.XML = OpenLayersForProjection.Class(OpenLayersForProjection.Format, {
  namespaces: null,
  namespaceAlias: null,
  defaultPrefix: null,
  readers: {},
  writers: {},
  xmldom: null,
  initialize: function (a) {
    window.ActiveXObject && (this.xmldom = new ActiveXObject("Microsoft.XMLDOM"));
    OpenLayersForProjection.Format.prototype.initialize.apply(this, [a]);
    this.namespaces = OpenLayersForProjection.Util.extend({}, this.namespaces);
    this.namespaceAlias = {};
    for (var b in this.namespaces)this.namespaceAlias[this.namespaces[b]] =
      b
  },
  destroy: function () {
    this.xmldom = null;
    OpenLayersForProjection.Format.prototype.destroy.apply(this, arguments)
  },
  setNamespace: function (a, b) {
    this.namespaces[a] = b;
    this.namespaceAlias[b] = a
  },
  read: function (a) {
    var b = a.indexOf("\x3c");
    0 < b && (a = a.substring(b));
    b = OpenLayersForProjection.Util.Try(OpenLayersForProjection.Function.bind(function () {
      var b;
      b = window.ActiveXObject && !this.xmldom ? new ActiveXObject("Microsoft.XMLDOM") : this.xmldom;
      b.loadXML(a);
      return b
    }, this), function () {
      return (new DOMParser).parseFromString(a,
        "text/xml")
    }, function () {
      var b = new XMLHttpRequest;
      b.open("GET", "data:text/xml;charset\x3dutf-8," + encodeURIComponent(a), !1);
      b.overrideMimeType && b.overrideMimeType("text/xml");
      b.send(null);
      return b.responseXML
    });
    this.keepData && (this.data = b);
    return b
  },
  write: function (a) {
    if (this.xmldom) a = a.xml; else {
      var b = new XMLSerializer;
      if (1 == a.nodeType) {
        var c = document.implementation.createDocument("", "", null);
        c.importNode && (a = c.importNode(a, !0));
        c.appendChild(a);
        a = b.serializeToString(c)
      } else a = b.serializeToString(a)
    }
    return a
  },
  createElementNS: function (a, b) {
    return this.xmldom ? "string" == typeof a ? this.xmldom.createNode(1, b, a) : this.xmldom.createNode(1, b, "") : document.createElementNS(a, b)
  },
  createDocumentFragment: function () {
    return this.xmldom ? this.xmldom.createDocumentFragment() : document.createDocumentFragment()
  },
  createTextNode: function (a) {
    "string" !== typeof a && (a = String(a));
    return this.xmldom ? this.xmldom.createTextNode(a) : document.createTextNode(a)
  },
  getElementsByTagNameNS: function (a, b, c) {
    var d = [];
    if (a.getElementsByTagNameNS) d =
      a.getElementsByTagNameNS(b, c); else {
      a = a.getElementsByTagName("*");
      for (var e, f, g = 0, h = a.length; g < h; ++g)if (e = a[g], f = e.prefix ? e.prefix + ":" + c : c, "*" == c || f == e.nodeName) "*" != b && b != e.namespaceURI || d.push(e)
    }
    return d
  },
  getAttributeNodeNS: function (a, b, c) {
    var d = null;
    if (a.getAttributeNodeNS) d = a.getAttributeNodeNS(b, c); else {
      a = a.attributes;
      for (var e, f, g = 0, h = a.length; g < h; ++g)if (e = a[g], e.namespaceURI == b && (f = e.prefix ? e.prefix + ":" + c : c, f == e.nodeName)) {
        d = e;
        break
      }
    }
    return d
  },
  getAttributeNS: function (a, b, c) {
    var d = "";
    if (a.getAttributeNS) d =
      a.getAttributeNS(b, c) || ""; else if (a = this.getAttributeNodeNS(a, b, c)) d = a.nodeValue;
    return d
  },
  getChildValue: function (a, b) {
    var c = b || "";
    if (a)for (var d = a.firstChild; d; d = d.nextSibling)switch (d.nodeType) {
      case 3:
      case 4:
        c += d.nodeValue
    }
    return c
  },
  isSimpleContent: function (a) {
    var b = !0;
    for (a = a.firstChild; a; a = a.nextSibling)if (1 === a.nodeType) {
      b = !1;
      break
    }
    return b
  },
  contentType: function (a) {
    var b = !1, c = !1, d = OpenLayersForProjection.Format.XML.CONTENT_TYPE.EMPTY;
    for (a = a.firstChild; a; a = a.nextSibling) {
      switch (a.nodeType) {
        case 1:
          c =
            !0;
          break;
        case 8:
          break;
        default:
          b = !0
      }
      if (c && b)break
    }
    if (c && b) d = OpenLayersForProjection.Format.XML.CONTENT_TYPE.MIXED; else {
      if (c)return OpenLayersForProjection.Format.XML.CONTENT_TYPE.COMPLEX;
      if (b)return OpenLayersForProjection.Format.XML.CONTENT_TYPE.SIMPLE
    }
    return d
  },
  hasAttributeNS: function (a, b, c) {
    var d = !1;
    return d = a.hasAttributeNS ? a.hasAttributeNS(b, c) : !!this.getAttributeNodeNS(a, b, c)
  },
  setAttributeNS: function (a, b, c, d) {
    if (a.setAttributeNS) a.setAttributeNS(b, c, d); else if (this.xmldom) b ? (b = a.ownerDocument.createNode(2,
      c, b), b.nodeValue = d, a.setAttributeNode(b)) : a.setAttribute(c, d); else throw"setAttributeNS not implemented";
  },
  createElementNSPlus: function (a, b) {
    b = b || {};
    var c = b.uri || this.namespaces[b.prefix];
    c || (c = a.indexOf(":"), c = this.namespaces[a.substring(0, c)]);
    c || (c = this.namespaces[this.defaultPrefix]);
    c = this.createElementNS(c, a);
    b.attributes && this.setAttributes(c, b.attributes);
    var d = b.value;
    null != d && c.appendChild(this.createTextNode(d));
    return c
  },
  setAttributes: function (a, b) {
    var c, d, e;
    for (e in b)null != b[e] && b[e].toString &&
    (c = b[e].toString(), d = this.namespaces[e.substring(0, e.indexOf(":"))] || null, this.setAttributeNS(a, d, e, c))
  },
  readNode: function (a, b) {
    b || (b = {});
    var c = this.readers[a.namespaceURI ? this.namespaceAlias[a.namespaceURI] : this.defaultPrefix];
    if (c) {
      var d = a.localName || a.nodeName.split(":").pop();
      (c = c[d] || c["*"]) && c.apply(this, [a, b])
    }
    return b
  },
  readChildNodes: function (a, b) {
    b || (b = {});
    for (var c = a.childNodes, d, e = 0, f = c.length; e < f; ++e)d = c[e], 1 == d.nodeType && this.readNode(d, b);
    return b
  },
  writeNode: function (a, b, c) {
    var d, e =
      a.indexOf(":");
    0 < e ? (d = a.substring(0, e), a = a.substring(e + 1)) : d = c ? this.namespaceAlias[c.namespaceURI] : this.defaultPrefix;
    b = this.writers[d][a].apply(this, [b]);
    c && c.appendChild(b);
    return b
  },
  getChildEl: function (a, b, c) {
    return a && this.getThisOrNextEl(a.firstChild, b, c)
  },
  getNextEl: function (a, b, c) {
    return a && this.getThisOrNextEl(a.nextSibling, b, c)
  },
  getThisOrNextEl: function (a, b, c) {
    a:for (; a; a = a.nextSibling)switch (a.nodeType) {
      case 1:
        if (!(b && b !== (a.localName || a.nodeName.split(":").pop()) || c && c !== a.namespaceURI))break a;
        a = null;
        break a;
      case 3:
        if (/^\s*$/.test(a.nodeValue))break;
      case 4:
      case 6:
      case 12:
      case 10:
      case 11:
        a = null;
        break a
    }
    return a || null
  },
  lookupNamespaceURI: function (a, b) {
    var c = null;
    if (a)if (a.lookupNamespaceURI) c = a.lookupNamespaceURI(b); else a:switch (a.nodeType) {
      case 1:
        if (null !== a.namespaceURI && a.prefix === b) {
          c = a.namespaceURI;
          break a
        }
        if (c = a.attributes.length)for (var d, e = 0; e < c; ++e)if (d = a.attributes[e], "xmlns" === d.prefix && d.name === "xmlns:" + b) {
          c = d.value || null;
          break a
        } else if ("xmlns" === d.name && null === b) {
          c = d.value ||
            null;
          break a
        }
        c = this.lookupNamespaceURI(a.parentNode, b);
        break a;
      case 2:
        c = this.lookupNamespaceURI(a.ownerElement, b);
        break a;
      case 9:
        c = this.lookupNamespaceURI(a.documentElement, b);
        break a;
      case 6:
      case 12:
      case 10:
      case 11:
        break a;
      default:
        c = this.lookupNamespaceURI(a.parentNode, b)
    }
    return c
  },
  getXMLDoc: function () {
    OpenLayersForProjection.Format.XML.document || this.xmldom || (document.implementation && document.implementation.createDocument ? OpenLayersForProjection.Format.XML.document = document.implementation.createDocument("",
      "", null) : !this.xmldom && window.ActiveXObject && (this.xmldom = new ActiveXObject("Microsoft.XMLDOM")));
    return OpenLayersForProjection.Format.XML.document || this.xmldom
  },
  CLASS_NAME: "OpenLayers.Format.XML"
});
OpenLayersForProjection.Format.KML = OpenLayersForProjection.Class(OpenLayersForProjection.Format.XML, {
  namespaces: {kml: "http://www.opengis.net/kml/2.2", gx: "http://www.google.com/kml/ext/2.2"},
  kmlns: "http://earth.google.com/kml/2.0",
  placemarksDesc: "No description available",
  foldersName: "OpenLayers export",
  foldersDesc: "Exported on " + new Date,
  extractAttributes: !0,
  kvpAttributes: !1,
  extractStyles: !1,
  extractTracks: !1,
  trackAttributes: null,
  internalns: null,
  features: null,
  styles: null,
  styleBaseUrl: "",
  fetched: null,
  maxDepth: 0,
  initialize: function (a) {
    this.regExes = {
      trimSpace: /^\s*|\s*$/g,
      removeSpace: /\s*/g,
      splitSpace: /\s+/,
      trimComma: /\s*,\s*/g,
      kmlColor: /(\w{2})(\w{2})(\w{2})(\w{2})/,
      kmlIconPalette: /root:\/\/icons\/palette-(\d+)(\.\w+)/,
      straightBracket: /\$\[(.*?)\]/g
    };
    this.externalProjection = new OpenLayersForProjection.Projection("EPSG:4326");
    OpenLayersForProjection.Format.XML.prototype.initialize.apply(this, [a])
  },
  read: function (a) {
    this.features = [];
    this.styles = {};
    this.fetched = {};
    return this.parseData(a, {
      depth: 0,
      styleBaseUrl: this.styleBaseUrl
    })
  },
  parseData: function (a, b) {
    "string" == typeof a && (a = OpenLayersForProjection.Format.XML.prototype.read.apply(this, [a]));
    for (var c = ["Link", "NetworkLink", "Style", "StyleMap", "Placemark"], d = 0, e = c.length; d < e; ++d) {
      var f = c[d], g = this.getElementsByTagNameNS(a, "*", f);
      if (0 != g.length)switch (f.toLowerCase()) {
        case "link":
        case "networklink":
          this.parseLinks(g, b);
          break;
        case "style":
          this.extractStyles && this.parseStyles(g, b);
          break;
        case "stylemap":
          this.extractStyles && this.parseStyleMaps(g,
            b);
          break;
        case "placemark":
          this.parseFeatures(g, b)
      }
    }
    return this.features
  },
  parseLinks: function (a, b) {
    if (b.depth >= this.maxDepth)return !1;
    var c = OpenLayersForProjection.Util.extend({}, b);
    c.depth++;
    for (var d = 0, e = a.length; d < e; d++) {
      var f = this.parseProperty(a[d], "*", "href");
      f && !this.fetched[f] && (this.fetched[f] = !0, (f = this.fetchLink(f)) && this.parseData(f, c))
    }
  },
  fetchLink: function (a) {
    if (a = OpenLayers.Request.GET({url: a, async: !1}))return a.responseText
  },
  parseStyles: function (a, b) {
    for (var c = 0, d = a.length; c < d; c++) {
      var e =
        this.parseStyle(a[c]);
      e && (this.styles[(b.styleBaseUrl || "") + "#" + e.id] = e)
    }
  },
  parseKmlColor: function (a) {
    var b = null;
    a && (a = a.match(this.regExes.kmlColor)) && (b = {
      color: "#" + a[4] + a[3] + a[2],
      opacity: parseInt(a[1], 16) / 255
    });
    return b
  },
  parseStyle: function (a) {
    for (var b = {}, c = ["LineStyle", "PolyStyle", "IconStyle", "BalloonStyle", "LabelStyle"], d, e, f = 0, g = c.length; f < g; ++f)if (d = c[f], e = this.getElementsByTagNameNS(a, "*", d)[0])switch (d.toLowerCase()) {
      case "linestyle":
        d = this.parseProperty(e, "*", "color");
        if (d = this.parseKmlColor(d)) b.strokeColor =
          d.color, b.strokeOpacity = d.opacity;
        (d = this.parseProperty(e, "*", "width")) && (b.strokeWidth = d);
        break;
      case "polystyle":
        d = this.parseProperty(e, "*", "color");
        if (d = this.parseKmlColor(d)) b.fillOpacity = d.opacity, b.fillColor = d.color;
        "0" == this.parseProperty(e, "*", "fill") && (b.fillColor = "none");
        "0" == this.parseProperty(e, "*", "outline") && (b.strokeWidth = "0");
        break;
      case "iconstyle":
        var h = parseFloat(this.parseProperty(e, "*", "scale") || 1);
        d = 32 * h;
        var k = 32 * h, l = this.getElementsByTagNameNS(e, "*", "Icon")[0];
        if (l) {
          var m = this.parseProperty(l,
            "*", "href");
          if (m) {
            var n = this.parseProperty(l, "*", "w"), p = this.parseProperty(l, "*", "h");
            !OpenLayersForProjection.String.startsWith(m, "http://maps.google.com/mapfiles/kml") || n || p || (p = n = 64, h /= 2);
            n = n || p;
            p = p || n;
            n && (d = parseInt(n) * h);
            p && (k = parseInt(p) * h);
            if (p = m.match(this.regExes.kmlIconPalette)) n = p[1], p = p[2], m = this.parseProperty(l, "*", "x"), l = this.parseProperty(l, "*", "y"), m = "http://maps.google.com/mapfiles/kml/pal" + n + "/icon" + (8 * (l ? 7 - l / 32 : 7) + (m ? m / 32 : 0)) + p;
            b.graphicOpacity = 1;
            b.externalGraphic = m
          }
        }
        if (e = this.getElementsByTagNameNS(e,
            "*", "hotSpot")[0]) m = parseFloat(e.getAttribute("x")), l = parseFloat(e.getAttribute("y")), n = e.getAttribute("xunits"), "pixels" == n ? b.graphicXOffset = -m * h : "insetPixels" == n ? b.graphicXOffset = -d + m * h : "fraction" == n && (b.graphicXOffset = -d * m), e = e.getAttribute("yunits"), "pixels" == e ? b.graphicYOffset = -k + l * h + 1 : "insetPixels" == e ? b.graphicYOffset = -(l * h) + 1 : "fraction" == e && (b.graphicYOffset = -k * (1 - l) + 1);
        b.graphicWidth = d;
        b.graphicHeight = k;
        break;
      case "balloonstyle":
        (e = OpenLayersForProjection.Util.getXmlNodeValue(e)) && (b.balloonStyle =
          e.replace(this.regExes.straightBracket, "${$1}"));
        break;
      case "labelstyle":
        if (d = this.parseProperty(e, "*", "color"), d = this.parseKmlColor(d)) b.fontColor = d.color, b.fontOpacity = d.opacity
    }
    !b.strokeColor && b.fillColor && (b.strokeColor = b.fillColor);
    (a = a.getAttribute("id")) && b && (b.id = a);
    return b
  },
  parseStyleMaps: function (a, b) {
    for (var c = 0, d = a.length; c < d; c++)for (var e = a[c], f = this.getElementsByTagNameNS(e, "*", "Pair"), e = e.getAttribute("id"), g = 0, h = f.length; g < h; g++) {
      var k = f[g], l = this.parseProperty(k, "*", "key");
      (k = this.parseProperty(k,
        "*", "styleUrl")) && "normal" == l && (this.styles[(b.styleBaseUrl || "") + "#" + e] = this.styles[(b.styleBaseUrl || "") + k])
    }
  },
  parseFeatures: function (a, b) {
    for (var c = [], d = 0, e = a.length; d < e; d++) {
      var f = a[d], g = this.parseFeature.apply(this, [f]);
      if (g) {
        this.extractStyles && g.attributes && g.attributes.styleUrl && (g.style = this.getStyle(g.attributes.styleUrl, b));
        if (this.extractStyles) {
          var h = this.getElementsByTagNameNS(f, "*", "Style")[0];
          h && (h = this.parseStyle(h)) && (g.style = OpenLayersForProjection.Util.extend(g.style, h))
        }
        this.extractTracks ?
          (f = this.getElementsByTagNameNS(f, this.namespaces.gx, "Track")) && 0 < f.length && (g = {
            features: [],
            feature: g
          }, this.readNode(f[0], g), 0 < g.features.length && c.push.apply(c, g.features)) : c.push(g)
      } else throw"Bad Placemark: " + d;
    }
    this.features = this.features.concat(c)
  },
  readers: {
    kml: {
      when: function (a, b) {
        b.whens.push(OpenLayersForProjection.Date.parse(this.getChildValue(a)))
      }, _trackPointAttribute: function (a, b) {
        var c = a.nodeName.split(":").pop();
        b.attributes[c].push(this.getChildValue(a))
      }
    }, gx: {
      Track: function (a, b) {
        var c =
          {whens: [], points: [], angles: []};
        if (this.trackAttributes) {
          var d;
          c.attributes = {};
          for (var e = 0, f = this.trackAttributes.length; e < f; ++e)d = this.trackAttributes[e], c.attributes[d] = [], d in this.readers.kml || (this.readers.kml[d] = this.readers.kml._trackPointAttribute)
        }
        this.readChildNodes(a, c);
        if (c.whens.length !== c.points.length)throw Error("gx:Track with unequal number of when (" + c.whens.length + ") and gx:coord (" + c.points.length + ") elements.");
        var g = 0 < c.angles.length;
        if (g && c.whens.length !== c.angles.length)throw Error("gx:Track with unequal number of when (" +
          c.whens.length + ") and gx:angles (" + c.angles.length + ") elements.");
        for (var h, e = 0, f = c.whens.length; e < f; ++e) {
          h = b.feature.clone();
          h.fid = b.feature.fid || b.feature.id;
          d = c.points[e];
          h.geometry = d;
          "z" in d && (h.attributes.altitude = d.z);
          this.internalProjection && this.externalProjection && h.geometry.transform(this.externalProjection, this.internalProjection);
          if (this.trackAttributes)for (var k = 0, l = this.trackAttributes.length; k < l; ++k)d = this.trackAttributes[k], h.attributes[d] = c.attributes[d][e];
          h.attributes.when = c.whens[e];
          h.attributes.trackId = b.feature.id;
          g && (d = c.angles[e], h.attributes.heading = parseFloat(d[0]), h.attributes.tilt = parseFloat(d[1]), h.attributes.roll = parseFloat(d[2]));
          b.features.push(h)
        }
      }, coord: function (a, b) {
        var c = this.getChildValue(a).replace(this.regExes.trimSpace, "").split(/\s+/),
          d = new OpenLayersForProjection.Geometry.Point(c[0], c[1]);
        2 < c.length && (d.z = parseFloat(c[2]));
        b.points.push(d)
      }, angles: function (a, b) {
        var c = this.getChildValue(a).replace(this.regExes.trimSpace, "").split(/\s+/);
        b.angles.push(c)
      }
    }
  },
  parseFeature: function (a) {
    for (var b = ["MultiGeometry", "Polygon", "LineString", "Point"], c, d, e, f = 0, g = b.length; f < g; ++f)if (c = b[f], this.internalns = a.namespaceURI ? a.namespaceURI : this.kmlns, d = this.getElementsByTagNameNS(a, this.internalns, c), 0 < d.length) {
      if (b = this.parseGeometry[c.toLowerCase()]) e = b.apply(this, [d[0]]), this.internalProjection && this.externalProjection && e.transform(this.externalProjection, this.internalProjection); else throw new TypeError("Unsupported geometry type: " + c);
      break
    }
    var h;
    this.extractAttributes &&
    (h = this.parseAttributes(a));
    c = new OpenLayersForProjection.Feature.Vector(e, h);
    a = a.getAttribute("id") || a.getAttribute("name");
    null != a && (c.fid = a);
    return c
  },
  getStyle: function (a, b) {
    var c = OpenLayersForProjection.Util.removeTail(a), d = OpenLayersForProjection.Util.extend({}, b);
    d.depth++;
    d.styleBaseUrl = c;
    !this.styles[a] && !OpenLayersForProjection.String.startsWith(a, "#") && d.depth <= this.maxDepth && !this.fetched[c] && (c = this.fetchLink(c)) && this.parseData(c, d);
    return OpenLayersForProjection.Util.extend({}, this.styles[a])
  },
  parseGeometry: {
    point: function (a) {
      var b = this.getElementsByTagNameNS(a, this.internalns, "coordinates");
      a = [];
      if (0 < b.length) {
        var c = b[0].firstChild.nodeValue, c = c.replace(this.regExes.removeSpace, "");
        a = c.split(",")
      }
      b = null;
      if (1 < a.length) 2 == a.length && (a[2] = null), b = new OpenLayersForProjection.Geometry.Point(a[0], a[1], a[2]); else throw"Bad coordinate string: " + c;
      return b
    }, linestring: function (a, b) {
      var c = this.getElementsByTagNameNS(a, this.internalns, "coordinates"), d = null;
      if (0 < c.length) {
        for (var c = this.getChildValue(c[0]),
               c = c.replace(this.regExes.trimSpace, ""), c = c.replace(this.regExes.trimComma, ","), d = c.split(this.regExes.splitSpace), e = d.length, f = Array(e), g, h, k = 0; k < e; ++k)if (g = d[k].split(","), h = g.length, 1 < h) 2 == g.length && (g[2] = null), f[k] = new OpenLayersForProjection.Geometry.Point(g[0], g[1], g[2]); else throw"Bad LineString point coordinates: " + d[k];
        if (e) d = b ? new OpenLayersForProjection.Geometry.LinearRing(f) : new OpenLayersForProjection.Geometry.LineString(f); else throw"Bad LineString coordinates: " + c;
      }
      return d
    }, polygon: function (a) {
      a =
        this.getElementsByTagNameNS(a, this.internalns, "LinearRing");
      var b = a.length, c = Array(b);
      if (0 < b)for (var d = 0, e = a.length; d < e; ++d)if (b = this.parseGeometry.linestring.apply(this, [a[d], !0])) c[d] = b; else throw"Bad LinearRing geometry: " + d;
      return new OpenLayersForProjection.Geometry.Polygon(c)
    }, multigeometry: function (a) {
      for (var b, c = [], d = a.childNodes, e = 0, f = d.length; e < f; ++e)a = d[e], 1 == a.nodeType && (b = a.prefix ? a.nodeName.split(":")[1] : a.nodeName, (b = this.parseGeometry[b.toLowerCase()]) && c.push(b.apply(this, [a])));
      return new OpenLayersForProjection.Geometry.Collection(c)
    }
  },
  parseAttributes: function (a) {
    var b = {}, c = a.getElementsByTagName("ExtendedData");
    c.length && (b = this.parseExtendedData(c[0]));
    var d, e, f;
    a = a.childNodes;
    for (var c = 0, g = a.length; c < g; ++c)if (d = a[c], 1 == d.nodeType && (e = d.childNodes, 1 <= e.length && 3 >= e.length)) {
      switch (e.length) {
        case 1:
          f = e[0];
          break;
        case 2:
          f = e[0];
          e = e[1];
          f = 3 == f.nodeType || 4 == f.nodeType ? f : e;
          break;
        default:
          f = e[1]
      }
      if (3 == f.nodeType || 4 == f.nodeType)if (d = d.prefix ? d.nodeName.split(":")[1] : d.nodeName,
          f = OpenLayersForProjection.Util.getXmlNodeValue(f)) f = f.replace(this.regExes.trimSpace, ""), b[d] = f
    }
    return b
  },
  parseExtendedData: function (a) {
    var b = {}, c, d, e, f, g = a.getElementsByTagName("Data");
    c = 0;
    for (d = g.length; c < d; c++) {
      e = g[c];
      f = e.getAttribute("name");
      var h = {}, k = e.getElementsByTagName("value");
      k.length && (h.value = this.getChildValue(k[0]));
      this.kvpAttributes ? b[f] = h.value : (e = e.getElementsByTagName("displayName"), e.length && (h.displayName = this.getChildValue(e[0])), b[f] = h)
    }
    a = a.getElementsByTagName("SimpleData");
    c = 0;
    for (d = a.length; c < d; c++)h = {}, e = a[c], f = e.getAttribute("name"), h.value = this.getChildValue(e), this.kvpAttributes ? b[f] = h.value : (h.displayName = f, b[f] = h);
    return b
  },
  parseProperty: function (a, b, c) {
    var d;
    a = this.getElementsByTagNameNS(a, b, c);
    try {
      d = OpenLayersForProjection.Util.getXmlNodeValue(a[0])
    } catch (e) {
      d = null
    }
    return d
  },
  write: function (a) {
    OpenLayersForProjection.Util.isArray(a) || (a = [a]);
    for (var b = this.createElementNS(this.kmlns, "kml"), c = this.createFolderXML(), d = 0, e = a.length; d < e; ++d)c.appendChild(this.createPlacemarkXML(a[d]));
    b.appendChild(c);
    return OpenLayersForProjection.Format.XML.prototype.write.apply(this, [b])
  },
  createFolderXML: function () {
    var a = this.createElementNS(this.kmlns, "Folder");
    if (this.foldersName) {
      var b = this.createElementNS(this.kmlns, "name"), c = this.createTextNode(this.foldersName);
      b.appendChild(c);
      a.appendChild(b)
    }
    this.foldersDesc && (b = this.createElementNS(this.kmlns, "description"), c = this.createTextNode(this.foldersDesc), b.appendChild(c), a.appendChild(b));
    return a
  },
  createPlacemarkXML: function (a) {
    var b = this.createElementNS(this.kmlns,
      "name"), c = a.style && a.style.label ? a.style.label : a.id;
    b.appendChild(this.createTextNode(a.attributes.name || c));
    var d = this.createElementNS(this.kmlns, "description");
    d.appendChild(this.createTextNode(a.attributes.description || this.placemarksDesc));
    c = this.createElementNS(this.kmlns, "Placemark");
    null != a.fid && c.setAttribute("id", a.fid);
    c.appendChild(b);
    c.appendChild(d);
    b = this.buildGeometryNode(a.geometry);
    c.appendChild(b);
    a.attributes && (a = this.buildExtendedData(a.attributes)) && c.appendChild(a);
    return c
  },
  buildGeometryNode: function (a) {
    var b = a.CLASS_NAME, b = b.substring(b.lastIndexOf(".") + 1), b = this.buildGeometry[b.toLowerCase()], c = null;
    b && (c = b.apply(this, [a]));
    return c
  },
  buildGeometry: {
    point: function (a) {
      var b = this.createElementNS(this.kmlns, "Point");
      b.appendChild(this.buildCoordinatesNode(a));
      return b
    }, multipoint: function (a) {
      return this.buildGeometry.collection.apply(this, [a])
    }, linestring: function (a) {
      var b = this.createElementNS(this.kmlns, "LineString");
      b.appendChild(this.buildCoordinatesNode(a));
      return b
    },
    multilinestring: function (a) {
      return this.buildGeometry.collection.apply(this, [a])
    }, linearring: function (a) {
      var b = this.createElementNS(this.kmlns, "LinearRing");
      b.appendChild(this.buildCoordinatesNode(a));
      return b
    }, polygon: function (a) {
      var b = this.createElementNS(this.kmlns, "Polygon");
      a = a.components;
      for (var c, d, e = 0, f = a.length; e < f; ++e)c = 0 == e ? "outerBoundaryIs" : "innerBoundaryIs", c = this.createElementNS(this.kmlns, c), d = this.buildGeometry.linearring.apply(this, [a[e]]), c.appendChild(d), b.appendChild(c);
      return b
    },
    multipolygon: function (a) {
      return this.buildGeometry.collection.apply(this, [a])
    }, collection: function (a) {
      for (var b = this.createElementNS(this.kmlns, "MultiGeometry"), c, d = 0, e = a.components.length; d < e; ++d)(c = this.buildGeometryNode.apply(this, [a.components[d]])) && b.appendChild(c);
      return b
    }
  },
  buildCoordinatesNode: function (a) {
    var b = this.createElementNS(this.kmlns, "coordinates"), c;
    if (c = a.components) {
      for (var d = c.length, e = Array(d), f = 0; f < d; ++f)a = c[f], e[f] = this.buildCoordinates(a);
      c = e.join(" ")
    } else c = this.buildCoordinates(a);
    c = this.createTextNode(c);
    b.appendChild(c);
    return b
  },
  buildCoordinates: function (a) {
    this.internalProjection && this.externalProjection && (a = a.clone(), a.transform(this.internalProjection, this.externalProjection));
    return a.x + "," + a.y
  },
  buildExtendedData: function (a) {
    var b = this.createElementNS(this.kmlns, "ExtendedData"), c;
    for (c in a)if (a[c] && "name" != c && "description" != c && "styleUrl" != c) {
      var d = this.createElementNS(this.kmlns, "Data");
      d.setAttribute("name", c);
      var e = this.createElementNS(this.kmlns, "value");
      if ("object" ==
        typeof a[c]) {
        if (a[c].value && e.appendChild(this.createTextNode(a[c].value)), a[c].displayName) {
          var f = this.createElementNS(this.kmlns, "displayName");
          f.appendChild(this.getXMLDoc().createCDATASection(a[c].displayName));
          d.appendChild(f)
        }
      } else e.appendChild(this.createTextNode(a[c]));
      d.appendChild(e);
      b.appendChild(d)
    }
    return this.isSimpleContent(b) ? null : b
  },
  CLASS_NAME: "OpenLayers.Format.KML"
});
var ImageControler = {
  currentImageControl: null,
  currentImageType: null,
  currentSurveyTrace: null,
  currentPhotogrammetry: null,
  currentGraphic: null,
  getsCurrentImageControlType: function () {
    return ImageControler.currentImageControl.type ? ImageControler.currentImageControl.type : "FLAT"
  },
  initDefaults: function () {
    ImageControler.currentPhotogrammetry = Photogrammetry;
    ImageControler.currentImageControl = ImageControl;
    ImageControler.currentSurveyTrace = SurveyTrace;
    ImageControler.currentGraphic = Graphic
  },
  setCurrentImageControl: function (a) {
    a.type &&
    "FLAT" != a.type ? "CUBE" == a.type && (ImageControler.currentImageType = "CUBE", ImageControler.currentImageControl = CubeImage, ImageControler.currentSurveyTrace = CubeSurveyTrace, ImageControler.currentPhotogrammetry = CubePhotogrammetry, ImageControler.currentGraphic = CubeGraphic) : (ImageControler.currentImageType = "FLAT", ImageControler.currentImageControl = FlatImage, ImageControler.currentSurveyTrace = FlatSurveyTrace, ImageControler.currentPhotogrammetry = FlatPhotogrammetry, ImageControler.currentGraphic = FlatGraphic)
  }
};
function animate () {
  requestAnimationFrame(animate);
  CubePlugin.update()
}
var CubePlugin = {
  container: null,
  camera: null,
  scene: null,
  objectsScene: null,
  FOV: 80,
  renderer: null,
  cubeContainer: null,
  cubeFacesArray: "BACK FRONT UP UP RIGHT LEFT".split(" "),
  yow: 0,
  onMouseDownYow: 0,
  pitch: 0,
  onMouseDownPitch: 0,
  phi: 0,
  theta: 0,
  cubeMesh: null,
  target: null,
  mouse: null,
  raycaster: null,
  pinPointsObject: null,
  offset: null,
  cubeIsHighRes: !1,
  maxRotation: {left: -180, right: 180},
  mouseMoved: !1,
  init: function () {
    this.target = new THREE.Vector3;
    this.mouse = new THREE.Vector2;
    this.raycaster = new THREE.Raycaster;
    this.pinPointsObject =
      new THREE.Object3D;
    this.container = jQuery("#popupImajnet");
    this.offset = this.container.parent().offset();
    this.camera = new THREE.PerspectiveCamera(this.FOV, this.container.innerWidth() / this.container.innerHeight(), 1, 3201);
    this.scene = new THREE.Scene;
    this.objectsScene = new THREE.Scene;
    this.renderer = new THREE.WebGLRenderer({antialias: !0});
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(this.container.innerWidth(), this.container.innerHeight());
    this.renderer.autoClear = !1;
    this.renderer.domElement.id =
      "cubeContainer";
    this.container.append(this.renderer.domElement);
    this.cubeContainer = jQuery("#cubeContainer");
    this.cubeContainer.on("click", this.onDocumentMouseClick);
    this.cubeContainer.on("mousedown", this.onDocumentMouseDown);
    this.cubeContainer.on("mousemove", this.onDocumentMouseMove);
    this.cubeContainer.on("mouseup", this.onDocumentMouseUp);
    this.cubeContainer.on("mouseleave", this.onDocumentMouseUp);
    this.cubeContainer.on("wheel", this.onDocumentMouseWheel);
    var a = document.getElementById("cubeContainer");
    a.addEventListener("touchstart", this.onDocumentTouchStart, !1);
    a.addEventListener("touchmove", this.onDocumentTouchMove, !1);
    jQuery("#cubeContainer").swipe({
      swipe: function (a, b, d, e, f) {
      }, threshold: 10, pinchIn: function (a, b, d, e, f, h, g) {
        b = Nigsys.getPinchCenter(g[0].start, g[1].start);
        a.originalEvent = {offsetX: b.x, offsetY: b.y};
        d = 10 * d / jQuery("#cubeContainer").height();
        for (b = 0; b < d; b++)CubePlugin.onDocumentMouseWheel(a, !0, 1)
      }, pinchOut: function (a, b, d, e, f, h, g) {
        b = Nigsys.getPinchCenter(g[0].start, g[1].start);
        a.originalEvent =
          {offsetX: b.x, offsetY: b.y};
        d = 10 * d / jQuery("#cubeContainer").height();
        for (b = 0; b < d; b++)CubePlugin.onDocumentMouseWheel(a, !0, -1)
      }, fingers: jQuery.fn.swipe.fingers.ALL
    });
    this.objectsScene.add(this.pinPointsObject)
  },
  addCube: function (a) {
    null != this.cubeMesh && this.scene.remove(this.cubeMesh);
    var c = new THREE.CubeGeometry(3200, 3200, 3200, 10, 10, 10);
    this.cubeMesh = new THREE.Mesh(c, new THREE.MeshFaceMaterial(a));
    this.cubeMesh.scale.x = -1;
    this.cubeMesh.material.side = THREE.DoubleSide;
    this.scene.add(this.cubeMesh)
  },
  loadCubeImages: function (a) {
    for (var c =
      this.getFaceOrderFromAngle(), b = 0; b < c.length; b++)this.changeFaceImage(c[b], a)
  },
  changeFaceImage: function (a, c) {
    if (a) {
      var b = this.cubeFacesArray.indexOf(a);
      CubePlugin.getMaterialFromUrlDeferred(ImajnetAPI.buildImageURL(ImajnetMap.currentPosition, c, a)).done(function (a) {
        CubePlugin.cubeMesh.material.materials[b].dispose();
        CubePlugin.cubeMesh.material.materials[b].map.dispose();
        CubePlugin.cubeMesh.material.materials[b] = a
      })
    }
  },
  getMaterialFromUrlDeferred: function (a, c) {
    var b = jQuery.Deferred(), d = new THREE.Texture,
      e = new THREE.MeshBasicMaterial({map: d, overdraw: .5, side: THREE.DoubleSide}), f = new Image;
    f.crossOrigin = "use-credentials";
    f.onload = function () {
      d.image = f;
      d.needsUpdate = !0;
      d.minFilter = THREE.LinearFilter;
      d.dispose();
      e.dispose();
      b.resolve(e, c)
    };
    f.src = a;
    ImajnetUI.imagesLoadQueue.push(f);
    return b.promise()
  },
  getMaterialFromUrl: function (a) {
    var c = new THREE.Texture, b = new THREE.MeshBasicMaterial({map: c, overdraw: .5, side: THREE.DoubleSide}),
      d = new Image;
    d.crossOrigin = "use-credentials";
    d.onload = function () {
      c.image = d;
      c.needsUpdate =
        !0;
      c.minFilter = THREE.LinearFilter;
      c.dispose();
      b.dispose()
    };
    d.src = a;
    ImajnetUI.imagesLoadQueue.push(d);
    return b
  },
  getIntersection: function (a, c, b) {
    var d = new THREE.Vector2;
    d.x = c / CubePlugin.renderer.domElement.width * 2 - 1;
    d.y = 2 * -(b / CubePlugin.renderer.domElement.height) + 1;
    CubePlugin.raycaster.setFromCamera(d, CubePlugin.camera);
    a = CubePlugin.raycaster.intersectObjects(a.children, !0);
    if (0 < a.length)return a[0]
  },
  getRealImageCoordinatesFromCube: function (a, c) {
    if (a && c) {
      var b = Math.round(a.x), d = Math.round(a.y), e = Math.round(a.z);
      if ("FRONT" == c || "BACK" == c)var f = {
        x: Math.abs(e + b / 1600 * 1600),
        y: Math.abs(1600 - d)
      }; else if ("LEFT" == c || "RIGHT" == c) f = {
        x: Math.abs(b - e / 1600 * 1600),
        y: Math.abs(1600 - d)
      }; else if ("UP" == c || "DOWN" == c) f = {x: Math.abs(e + d / 1600 * 1600), y: Math.abs(1600 - b)};
      console.log(f);
      return f
    }
  },
  getRealImageCoordinatesFromEvent: function (a) {
    return CubePlugin.getRealImageCoordinatesFromMousePosition(a.offsetX, a.offsetY)
  },
  getRealImageCoordinatesFromMousePosition: function (a, c) {
    var b = CubePlugin.getIntersection(CubePlugin.scene, a, c), d = CubePlugin.getFaceFromPoint(b),
      b = CubePlugin.getRealImageCoordinatesFromCube(b.point, d);
    return {x: b.x, y: b.y, face: d}
  },
  getCubeCoordinatesFromImageCoordinates: function (a, c) {
    if (a && (c = c ? c : a.face)) {
      var b = Math.round(a.x), d = Math.round(a.y);
      a = new THREE.Vector3;
      switch (c) {
        case "FRONT":
          a.x = 1600;
          a.y = 1600 - d;
          a.z = -1600 + b;
          break;
        case "RIGHT":
          a.x = 1600 - b, a.y = 1600 - d, a.z = 1600;
        case "LEFT":
          a.x = -1600 + b, a.y = 1600 - d, a.z = -1600
      }
      return a
    }
  },
  getCubeCoordinatesFromEvent: function (a) {
    return (a = CubePlugin.getIntersection(CubePlugin.scene, a.originalEvent.offsetX, a.originalEvent.offsetY)) ?
      a.point : null
  },
  getFaceFromPoint: function (a) {
    if (a)return this.cubeFacesArray[a.face.materialIndex]
  },
  getFaceOrderFromAngle: function () {
    var a = Math.ceil(this.yow / 90);
    facesLoadOrder = [];
    switch (a) {
      case 1:
        facesLoadOrder = "FRONT RIGHT LEFT BACK UP UP".split(" ");
        break;
      case -0:
        facesLoadOrder = "FRONT LEFT RIGHT BACK UP UP".split(" ");
        break;
      case 2:
        facesLoadOrder = "RIGHT BACK LEFT FRONT UP UP".split(" ");
        break;
      case -1:
        facesLoadOrder = "LEFT BACK RIGHT FRONT UP UP".split(" ")
    }
    return facesLoadOrder
  },
  setRotationLimit: function (a) {
    a &&
    a.orientation && (a = a.orientation.viewAngle - this.FOV, this.maxRotation.left = -a / 2, this.maxRotation.right = a / 2)
  },
  onDocumentMouseClick: function (a) {
    if (1 == CubePlugin.mouseMoved) CubePlugin.mouseMoved = !1; else {
      var c = CubePlugin.getIntersection(CubePlugin.scene, a.offsetX, a.offsetY), b = c.point,
        d = Math.acos(b.y / Math.hypot(b.x, b.y, b.z)), b = THREE.Math.radToDeg(Math.atan2(b.z, b.x)),
        d = 90 - THREE.Math.radToDeg(d);
      console.log(b, d);
      d = CubePlugin.getFaceFromPoint(c);
      c = CubePlugin.getRealImageCoordinatesFromCube(c.point, d);
      switch (ImajnetUI.activeControlButton) {
        case "imajnetPosition":
          ImajnetPosition.positionObject(c.x,
            c.y, {face: d});
          break;
        case "imajnetMeasurement":
          ImajnetMeasurement.measureObject(c.x, c.y, {face: d});
          break;
        case "imajnetPolyligne":
          ImajnetMeasurement.onClick(c.x, c.y, {face: d})
      }
      ImageControler.currentPhotogrammetry.clearCommentTextarea(a)
    }
  },
  onDocumentMouseDown: function (a) {
    a.preventDefault();
    CubePlugin.isUserInteracting = !0;
    CubePlugin.onPointerDownPointerX = a.offsetX;
    CubePlugin.onPointerDownPointerY = a.offsetY;
    CubePlugin.onPointerDownLon = CubePlugin.yow;
    CubePlugin.onPointerDownLat = CubePlugin.pitch
  },
  onDocumentMouseMove: function (a) {
    if (!0 ===
      CubePlugin.isUserInteracting) {
      CubePlugin.mouseMoved = !0;
      var c = CubePlugin.cubeContainer.width() / CubePlugin.cubeContainer.height(),
        c = 500 / CubePlugin.cubeContainer.width() * c, b = CubePlugin.camera.fov / 4, b = .008 * b + 5E-4 * (b - 1),
        d = (CubePlugin.onPointerDownPointerX - a.offsetX) * b * c + CubePlugin.onPointerDownLon;
      d >= CubePlugin.maxRotation.left && d <= CubePlugin.maxRotation.right && (CubePlugin.yow = d);
      CubePlugin.pitch = (a.offsetY - CubePlugin.onPointerDownPointerY) * b * c + CubePlugin.onPointerDownLat;
      ImajnetImageSwitcher.rotateImageSwitcher(-CubePlugin.yow);
      ImajnetMap.setOrientationMarker(ImajnetMap.currentPosition, ImajnetMap.imajboxTriangleDimension, Nigsys.defaultObjectsColor, -1)
    }
  },
  onDocumentMouseUp: function (a) {
    CubePlugin.isUserInteracting = !1
  },
  onDocumentTouchStart: function (a) {
    1 == a.touches.length && (a.preventDefault(), CubePlugin.onPointerDownPointerX = a.touches[0].pageX, CubePlugin.onPointerDownPointerY = a.touches[0].pageY, CubePlugin.onPointerDownLon = CubePlugin.yow, CubePlugin.onPointerDownLat = CubePlugin.pitch)
  },
  onDocumentTouchMove: function (a) {
    if (1 == a.touches.length) {
      a.preventDefault();
      var c = .1 * (CubePlugin.onPointerDownPointerX - a.touches[0].pageX) + CubePlugin.onPointerDownLon;
      c > CubePlugin.maxRotation.left && c < CubePlugin.maxRotation.right && (CubePlugin.yow = c);
      CubePlugin.pitch = .1 * (a.touches[0].pageY - CubePlugin.onPointerDownPointerY) + CubePlugin.onPointerDownLat;
      ImajnetImageSwitcher.rotateImageSwitcher(-CubePlugin.yow);
      ImajnetMap.setOrientationMarker(ImajnetMap.currentPosition, ImajnetMap.imajboxTriangleDimension, Nigsys.defaultObjectsColor, -1)
    }
  },
  onDocumentMouseWheel: function (a, c, b) {
    b ||
    (b = Nigsys.getDelta(a, b));
    if (!c && !ImajnetZoom.canZoom() && !ImajnetZoom.isZoomMode()) 0 < b ? ImageControler.currentImageControl.getNext(!1) : ImageControler.currentImageControl.getPrevious(!1); else if (b) {
      if (a = CubePlugin.getIntersection(CubePlugin.scene, a.originalEvent.offsetX, a.originalEvent.offsetY)) {
        a = a.point;
        if (0 < b) {
          if (ImajnetZoom.zoomLevel >= ImajnetZoom.maxZoomLevel)return;
          ImajnetZoom.zoomLevel++;
          if (4 == CubePlugin.camera.fov)return;
          ImajnetZoom.firstZoom && (CubePlugin.loadCubeImages("high"), ImajnetZoom.firstZoom =
            !1);
          b = Math.hypot(a.x, a.y, a.z);
          c = Math.acos(a.y / b);
          b = Math.atan2(a.z, a.x);
          b = THREE.Math.radToDeg(b);
          a = 90 - THREE.Math.radToDeg(c);
          c = Math.abs(b - CubePlugin.yow);
          c /= CubePlugin.camera.fov / 2;
          var d = Math.abs(a - CubePlugin.pitch), d = d / (CubePlugin.camera.fov / 2),
            e = .05 * Math.ceil(ImajnetZoom.zoomLevel / 3);
          c = .9 < c ? c * (2.2 - e) : c * (2.3 - e);
          d = .9 < d ? d * (2.2 - e) : d * (2.3 - e);
          CubePlugin.yow = b > CubePlugin.yow ? CubePlugin.yow + c : CubePlugin.yow - c;
          CubePlugin.pitch = a > CubePlugin.pitch ? CubePlugin.pitch + d : CubePlugin.pitch - d;
          CubePlugin.maxRotation.left -=
            2;
          CubePlugin.maxRotation.right += 2;
          CubePlugin.camera.fov -= 4
        } else {
          if (80 == CubePlugin.camera.fov)return;
          ImajnetZoom.zoomLevel--;
          b = Math.hypot(a.x, a.y, a.z);
          c = Math.acos(a.y / b);
          b = Math.atan2(a.z, a.x);
          b = THREE.Math.radToDeg(b);
          a = 90 - THREE.Math.radToDeg(c);
          d = CubePlugin.camera.fov / 2;
          c = Math.abs(b - CubePlugin.yow);
          c /= d;
          d = Math.abs(a - CubePlugin.pitch);
          d /= CubePlugin.camera.fov / 2;
          e = .05 * Math.ceil(ImajnetZoom.zoomLevel / 3);
          c = .9 < c ? c * (2.2 - e) : c * (2.3 - e);
          d *= 2.3 - e;
          CubePlugin.yow = b > CubePlugin.yow ? CubePlugin.yow - c : CubePlugin.yow +
            c;
          CubePlugin.pitch = a > CubePlugin.pitch ? CubePlugin.pitch - d : CubePlugin.pitch + d;
          CubePlugin.camera.fov += 4;
          CubePlugin.maxRotation.left += 2;
          CubePlugin.maxRotation.right -= 2
        }
        ImajnetMap.setOrientationMarker(ImajnetMap.currentPosition, ImajnetMap.imajboxTriangleDimension, Nigsys.defaultObjectsColor, -1)
      }
      CubePlugin.camera.updateProjectionMatrix()
    }
  },
  onWindowResize: function () {
    CubePlugin.camera.aspect = this.container.innerWidth() / this.container.innerHeight();
    CubePlugin.camera.updateProjectionMatrix();
    CubePlugin.renderer.setSize(this.container.innerWidth(),
      this.container.innerHeight())
  },
  update: function () {
    CubePlugin.pitch = Math.max(-85, Math.min(85, CubePlugin.pitch));
    CubePlugin.phi = THREE.Math.degToRad(90 - CubePlugin.pitch);
    CubePlugin.theta = THREE.Math.degToRad(CubePlugin.yow);
    CubePlugin.target.x = 500 * Math.sin(CubePlugin.phi) * Math.cos(CubePlugin.theta);
    CubePlugin.target.y = 500 * Math.cos(CubePlugin.phi);
    CubePlugin.target.z = 500 * Math.sin(CubePlugin.phi) * Math.sin(CubePlugin.theta);
    this.camera.lookAt(this.target);
    this.renderer.clear();
    this.renderer.render(this.scene,
      this.camera);
    this.renderer.clearDepth();
    this.renderer.render(this.objectsScene, this.camera)
  }
};
var ImageControl = {
  loadedImages: {},
  PREVIOUS: "previous",
  NEXT: "next",
  isFastNavigation: !1,
  fastNavigationTimeout: null,
  getNext: function (a) {
    ImajnetAPI.getByOrder(this.NEXT, a)
  },
  getPrevious: function (a) {
    ImajnetAPI.getByOrder(this.PREVIOUS, a)
  },
  doOnLoadImage: function (a, b) {
    var c = jQuery.Deferred();
    ImajnetMap.lastLoadedImagePosition = a;
    if (ImajnetZoom.canZoom())return ImajnetUI.stopSwipeNavigation(!0), c.resolve(!1), c.promise();
    if (!ImajnetAPI.isImageValid(a.id))return c.resolve(!1), c.promise();
    ImajnetZoom.firstZoom =
      !0;
    ImajnetUI.imageSwitcherImage.hide();
    ImajnetUI.imageSwitcherImageContainer.hide();
    a && a.timestamp ? Imajnet.addImageDate(a.timestamp) : ImajnetUI.hideDateContainer();
    c.resolve(!0);
    return c.promise()
  },
  loadImage: function (a) {
  },
  loadDefaultImage: function (a) {
    this.setCurrentImage(a);
    ImajnetUI.appendDefaultImage()
  },
  imageChange: function (a) {
    if (a) ImajnetPlugin.onImageChange(a)
  },
  setFastNavigation: function () {
    ImageControler.currentImageControl.isFastNavigation = !0
  },
  resetFastNavigation: function () {
    ImageControler.currentImageControl.isFastNavigation =
      !1
  },
  doRequests: function (a) {
    ImajnetUI.onImageResize();
    a.lon && a.lat && ImajnetUrl.changeUrlParam(ImajnetUrl.LOCATION_URL_PARAM_NAME, a.lat + "," + a.lon);
    ImageControler.currentSurveyTrace.draw(a);
    Address.getAddressFromCoordinates(a);
    LRS.loadLRS(a);
    Nigsys.isPositionMode() ? (ImageControler.currentPhotogrammetry.firstImagePosition && ImageControler.currentPhotogrammetry.firstImagePosition.traceId != ImajnetMap.currentPosition.traceId ? ImajnetPosition.reload() : ImajnetPosition.showHidePositionDenied(), ImajnetImageSwitcher.initSliderImagesDimension()) :
      Nigsys.isMeasurementMode() ? ImageControler.currentPhotogrammetry.firstImagePosition && ImageControler.currentPhotogrammetry.firstImagePosition.traceId != ImajnetMap.currentPosition.traceId ? ImajnetMeasurement.reload() : ImajnetMeasurement.showHideMeasurementDenied() : Nigsys.isPolyligneMode() ? ImageControler.currentPhotogrammetry.firstImagePosition && ImageControler.currentPhotogrammetry.firstImagePosition.traceId != ImajnetMap.currentPosition.traceId ? ImajnetPolyligne.reload() : ImajnetPolyligne.showHideDenied() :
        ImajnetImageSwitcher.show();
    ImajnetImageSwitcher.loadImageSwitcher(a);
    ImajnetUI.docking.imageButtons && ImajnetUI.docking.imageButtons.mainContainer.show()
  },
  setCurrentImage: function (a, b) {
    a && (lastLoadedImageId = a.id);
    ImajnetAPI.clearHorizontalAngle();
    ImageControler.currentSurveyTrace.clearSurveyTrace();
    ImageControler.currentPhotogrammetry.clear();
    ImajnetMap.hideImageSwitcher();
    ImajnetImageSwitcher.clearImageSwitcher();
    ImajnetAPI.clearHorizontalAngle();
    Nigsys.isPositionMode() || Nigsys.isMeasurementMode() ||
    Nigsys.isPolyligneMode() || ImajnetZoom.deactivateZoom();
    this.imageChange(a);
    a ? (b && (b.requestUrl && ImajnetUI.appendImage(b.requestUrl), b.materials && CubePlugin.addCube(b.materials)), ImajnetUI.showImajnetControls(), ImajnetAPI.orderedImagesId.length && a.id != ImajnetAPI.orderedImagesId[ImajnetAPI.orderedImagesId.length - 1] || ImageControler.currentImageControl.isFastNavigation || ImageControler.currentImageControl.doRequests(a)) : (ImajnetUI.hideImageElements(), ImajnetMap.hideOrientation());
    Nigsys.hideLoading(ImajnetUI.imageContainer);
    ImajnetMap.setImajboxMarkerPosition({position: a}, !0)
  }
};
var FlatImage = Nigsys.cloneObject(ImageControl);
FlatImage.loadImage = function (a) {
  var c = "", b = a.position;
  b ? (c = ImajnetAPI.buildImageURL(b), ImajnetAPI.imageLoadQueue.push(b.id), a = new Image, a.onerror = function (a) {
    b && ImajnetMap.currentPosition && b.id == ImajnetMap.currentPosition.id && FlatImage.loadDefaultImage(b)
  }, a.onload = function () {
    ImageControler.currentImageControl.doOnLoadImage(b, {requestUrl: c})
  }, a.src = c, ImajnetUI.imagesLoadQueue.push(a)) : ImajnetAPI.loadDefaultImage(null)
};
FlatImage.doOnLoadImage = function (a, c) {
  ImageControl.doOnLoadImage(a, c).done(function (b) {
    b && (CubeImage.hidecubeContainer(), FlatImage.showImageSliderContainer(), ImajnetImageSwitcher.rotateImageSwitcher(0), FlatImage.setCurrentImage(a, c))
  })
};
FlatImage.showImageSliderContainer = function () {
  ImajnetUI.imajnetImageSliderContainer.show()
};
FlatImage.hideImageSliderContainer = function () {
  ImajnetUI.imajnetImageSliderContainer.hide()
};
var CubeImage = Nigsys.cloneObject(ImageControl);
CubeImage.loadImage = function (a) {
  var b = a.position;
  if (b) {
    ImajnetAPI.imageLoadQueue.push(b.id);
    if (CubePlugin.cubeMesh) CubePlugin.loadCubeImages(); else {
      CubePlugin.init();
      animate();
      var c = Array(6), d = [];
      for (a = 0; a < CubePlugin.cubeFacesArray.length; a++)d.push(CubePlugin.getMaterialFromUrlDeferred(ImajnetAPI.buildImageURL(b, null, CubePlugin.cubeFacesArray[a]), {position: a}).done(function (a, b) {
        c[b.position] = a
      }))
    }
    d ? jQuery.when.apply(jQuery, d).then(function () {
        ImageControler.currentImageControl.doOnLoadImage(b, {materials: c})
      },
      function (a) {
        console.log("error")
      }) : this.doOnLoadImage(b)
  } else ImajnetAPI.loadDefaultImage(null)
};
CubeImage.doOnLoadImage = function (a, b) {
  ImageControl.doOnLoadImage(a, b).done(function (c) {
    c && (CubePlugin.setRotationLimit(a), FlatImage.hideImageSliderContainer(), CubeImage.showcubeContainer(), ImageControler.currentImageControl.setCurrentImage(a, b))
  })
};
CubeImage.getNext = function () {
  90 >= CubePlugin.yow && -90 <= CubePlugin.yow ? ImajnetAPI.getByOrder(this.NEXT, !1) : ImajnetAPI.getByOrder(this.PREVIOUS, !1)
};
CubeImage.getPrevious = function () {
  90 < CubePlugin.yow || -90 > CubePlugin.yow ? ImajnetAPI.getByOrder(this.NEXT, !1) : ImajnetAPI.getByOrder(this.PREVIOUS, !1)
};
CubeImage.showcubeContainer = function () {
  CubePlugin.cubeContainer.show()
};
CubeImage.hidecubeContainer = function () {
  CubePlugin.cubeContainer && CubePlugin.cubeContainer.hide()
};
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
var Photogrammetry = {
  objects: [],
  currentStep: 1,
  firstImagePosition: null,
  existingProjections: [],
  projectionAjaxRequest: null,
  timerItemClipboardClick: null,
  currentConstraintData: null,
  constraintParameter: null,
  constraintAjaxRequest: null,
  clipboardActive: !0,
  imajnetProjectionsDataObject: null,
  exportToItemContent: "",
  onFeatureMouseOver: function (a, b, c) {
    var d = ImajnetPolyligne.isPolyligneObject(a.getId());
    d && (a = ImajnetMap.getPolyligneFeatureWrapper(a));
    d || a.getType() != ImajnetMap.MARKER_TYPE_POSITION && a.getType() != ImajnetMap.MARKER_TYPE_POLYLIGNE_POSITION &&
    a.getType() != ImajnetMap.MARKER_TYPE_TARGET_POINT ? (ImajnetPlugin.selectFeature(ImajnetMap.imajnetDragFeaturesLayer, a), ImajnetPlugin.selectPolygonFeature(ImajnetMap.imajnetDragFeaturesLayer, a), ImajnetPlugin.setFeatureColor(ImajnetMap.imajnetDragFeaturesLayer, a, Nigsys.hoverObjectsColor), ImajnetPlugin.setFeatureStrokeColor(ImajnetMap.imajnetDragFeaturesLayer, a, Nigsys.hoverObjectsColor)) : ImajnetPlugin.selectMarker(ImajnetMap.photogrammetryPositionsLayer, a);
    ImajnetPlugin.onFeatureMouseOver(a, b, c)
  },
  onFeatureMouseOut: function (a) {
    var b =
      ImajnetPolyligne.isPolyligneObject(a.getId());
    b && (a = ImajnetMap.getPolyligneFeatureWrapper(a));
    b || a.getType() != ImajnetMap.MARKER_TYPE_POSITION && a.getType() != ImajnetMap.MARKER_TYPE_POLYLIGNE_POSITION && a.getType() != ImajnetMap.MARKER_TYPE_TARGET_POINT ? (ImajnetPlugin.unselectFeature(ImajnetMap.imajnetDragFeaturesLayer, a), ImajnetPlugin.unselectPolygonFeature(ImajnetMap.imajnetDragFeaturesLayer, a), ImajnetPlugin.setFeatureColor(ImajnetMap.imajnetDragFeaturesLayer, a, Nigsys.defaultObjectsColor), ImajnetPlugin.setFeatureStrokeColor(ImajnetMap.imajnetDragFeaturesLayer,
      a, Nigsys.defaultObjectsColor)) : ImajnetPlugin.unselectMarker(ImajnetMap.photogrammetryPositionsLayer, a);
    ImajnetPlugin.onFeatureMouseOut(a)
  },
  onImageTagMouseOver: function (a, b, c, d) {
    ImageControler.currentPhotogrammetry.showLRS(b, d, a, c)
  },
  onImageTagMouseOut: function (a) {
    jQuery("#imajnetPhotogrammetryLRS_" + a).hide()
  },
  onPhotogrammetryItemMouseOver: function (a, b, c, d) {
    var e = ImajnetMap.getFeatureWrapperById(a);
    e && (ImageControler.currentPhotogrammetry.showLRS(b, d, a, c), ImajnetPlugin.highlightFeatureOnImage(e), ImageControler.currentPhotogrammetry.onFeatureMouseOver(e,
      b, d))
  },
  onPhotogrammetryItemMouseOut: function (a) {
    var b = ImajnetMap.getFeatureWrapperById(a);
    b && (jQuery("#imajnetPhotogrammetryLRS_" + a).hide(), ImajnetPlugin.unHighlightFeatureOnImage(b), ImageControler.currentPhotogrammetry.onFeatureMouseOut(b))
  },
  onPhotogrammetryItemClick: function (a) {
    ImageControler.currentPhotogrammetry.zoomToObject(a)
  },
  init: function () {
    if (!this.objects.length && (this.clipboardEmpty(), Photogrammetry.clipboardActive)) {
      var a = Nigsys.getCookie("IMAJNET", "CLIPBOARD");
      Nigsys.setCookie("IMAJNET",
        "CLIPBOARD", null);
      if (a)for (var b = 0; b < a.length; b++)for (var c = 0; c < a[b].data.length; c++) {
        if (a[b].data[c].objectId) {
          if (-1 !== jQuery.inArray(a[b].data[c].type, ImajnetPolyligne.typesArray)) {
            a[b].data.splice(c, 1);
            c--;
            continue
          }
          a[b].data[c].id = a[b].data[c].objectId
        }
        ImageControler.currentPhotogrammetry.addObject(ImageControler.currentPhotogrammetry.getPositionFromObject(a[b].data[c]), a[b].data[c], !1, !1, !0);
        ImageControler.currentPhotogrammetry.getObjectLRS(a[b].data[c])
      }
    }
  },
  enableClipboard: function () {
    Photogrammetry.clipboardActive =
      !0
  },
  disableClipboard: function () {
    Photogrammetry.clipboardActive = !1;
    ImageControler.currentPhotogrammetry && ImageControler.currentPhotogrammetry.deletePhotogrammetryObjects()
  },
  getExportContent: function () {
    return '\x3cdiv\x3e\x3cdiv class\x3d"popupContentContainer optionsGroup"\x3e\x3cdiv class\x3d"popupContentContainerTitle"\x3e' + jQuery.imajnet.map.clipboard.popupExport.email + '\x3c/div\x3e\x3cdiv\x3e\x3cdiv class\x3d"leftLabel left"\x3e' + jQuery.imajnet.map.clipboard.popupExport.from + ':\x26nbsp;\x3c/div\x3e\x3cdiv class\x3d"left"\x3e\x3cinput type\x3d"text" id\x3d"imajnetExportFrom" value\x3d"' +
      ImajnetUser.getEmail() + '" /\x3e\x3c/div\x3e\x3cdiv class\x3d"clearLeft"\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv id\x3d"imajnetExportToContainer"\x3e\x3cb\x3e' + this.exportToItemContent + '\x3c/b\x3e\x3cdiv class\x3d"left"\x3e\x3cinput type\x3d"button" value\x3d"+" onclick\x3d"ImageControler.currentPhotogrammetry.exportAddToItem();" /\x3e\x3c/div\x3e\x3cdiv class\x3d"clearLeft"\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"popupContentContainerTitle"\x3e' + jQuery.imajnet.map.clipboard.popupExport.message + '\x3c/div\x3e\x3cdiv\x3e\x3ctextarea id\x3d"imajnetExportMessage" rows\x3d"5" cols\x3d"45"\x3e\x3c/textarea\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"popupContentContainer optionsGroup"\x3e\x3cdiv class\x3d"popupContentContainerTitle" style\x3d"top: -13px;"\x3e' +
      jQuery.imajnet.map.clipboard.popupExport.fileType + '\x3c/div\x3e\x3cinput type\x3d"radio" name\x3d"imajnetExportType" value\x3d"kml" /\x3eKML\x26nbsp;\x3cinput type\x3d"radio" name\x3d"imajnetExportType" value\x3d"kmz" checked\x3d"checked" /\x3eKMZ\x26nbsp;\x3c/div\x3e\x3cdiv class\x3d"popupContentContainer optionsGroup"\x3e\x3cdiv class\x3d"popupContentContainerTitle" style\x3d"top: -11px;"\x3e' + jQuery.imajnet.map.clipboard.popupExport.exportStatus + '\x3c/div\x3e\x3cdiv id\x3d"imajnetExportStatus"\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv id\x3d"imajnetExportButtons"\x3e\x3cinput type\x3d"button" value\x3d"' +
      jQuery.imajnet.map.clipboard.popupExport.send + '" onclick\x3d"ImageControler.currentPhotogrammetry.exportObjects(true);" class\x3d"dialogButton" /\x3e\x26nbsp;\x3cinput type\x3d"button" value\x3d"' + jQuery.imajnet.map.clipboard.popupExport.download + '" onclick\x3d"ImageControler.currentPhotogrammetry.exportObjects(false);" class\x3d"dialogButton" /\x3e\x3c/div\x3e\x3c/div\x3e'
  },
  getImageObjectList: function (a) {
    for (var b = 0; b < ImageControler.currentPhotogrammetry.objects.length; b++)if (void 0 !== a && ImageControler.currentPhotogrammetry.objects[b].positionId ==
      a.id)return ImageControler.currentPhotogrammetry.objects[b].data;
    return null
  },
  getImagePreviousObject: function (a) {
    for (var b = 0; b < ImageControler.currentPhotogrammetry.objects.length; b++)for (var c = 0; c < ImageControler.currentPhotogrammetry.objects[b].data.length; c++)if (-1 !== jQuery.inArray(ImageControler.currentPhotogrammetry.objects[b].data[c].type, ImajnetPolyligne.typesArray) && ImageControler.currentPhotogrammetry.objects[b].data[c].id == a - 1)return ImageControler.currentPhotogrammetry.objects[b].data[c];
    return null
  },
  getImageNextObject: function (a) {
    for (var b = 0; b < ImageControler.currentPhotogrammetry.objects.length; b++)for (var c = 0; c < ImageControler.currentPhotogrammetry.objects[b].data.length; c++)if (-1 !== jQuery.inArray(ImageControler.currentPhotogrammetry.objects[b].data[c].type, ImajnetPolyligne.typesArray) && ImageControler.currentPhotogrammetry.objects[b].data[c].id == a + 1)return ImageControler.currentPhotogrammetry.objects[b].data[c];
    return null
  },
  getImageObjectLinkToNext: function (a, b) {
    for (var c = [], d = 0; d <
    ImageControler.currentPhotogrammetry.objects.length; d++)for (var e = 0; e < ImageControler.currentPhotogrammetry.objects[d].data.length; e++)-1 !== jQuery.inArray(ImageControler.currentPhotogrammetry.objects[d].data[e].type, ImajnetPolyligne.typesArray) && ImageControler.currentPhotogrammetry.objects[d].data[e].type == b && (ImageControler.currentPhotogrammetry.objects[d].data[e].id == a + 1 ? c.push(ImageControler.currentPhotogrammetry.objects[d].data[e]) : ImageControler.currentPhotogrammetry.objects[d].data[e].id == a -
      1 && c.push(ImageControler.currentPhotogrammetry.objects[d].data[e]));
    return c
  },
  getMesurementValueById: function (a) {
    for (var b = 0; b < this.objects.length; b++)for (var c = 0; c < this.objects[b].data.length; c++)if (this.objects[b].data[c].id == a && this.objects[b].data[c].measurementResult && this.objects[b].data[c].measurementResult.measurement)return this.objects[b].data[c].measurementResult.measurement;
    return ""
  },
  objectIsMeasurement: function (a) {
    for (var b = 0; b < this.objects.length; b++)for (var c = 0; c < this.objects[b].data.length; c++)if (this.objects[b].data[c].id ==
      a && this.objects[b].data[c].photogrammetryPosition3D)return !0;
    return !1
  },
  objectIsDifferentTracePinPointProjection: function (a) {
    if (ImajnetMap.currentPosition) {
      for (var b = 0; b < this.existingProjections.length; b++)if (this.existingProjections[b].parameter.pointOfView.id == ImajnetMap.currentPosition.id && this.existingProjections[b].projection.shapeProjections)for (var c = 0; c < this.existingProjections[b].projection.shapeProjections.length; c++)if (this.existingProjections[b].projection.shapeProjections[c] && this.existingProjections[b].projection.shapeProjections[c].id ==
        a && this.existingProjections[b].projection.shapeProjections[c].projections)return !0;
      return !1
    }
  },
  getPanelCoordinatesFromHighCoordinates: function (a) {
    var b = ImajnetUI.previewImageContainer.width(), c = ImajnetUI.previewImageContainer.height();
    return {x: a.x / (ImajnetZoom.HIGH_RESOLUTION_WIDTH / b), y: a.y / (ImajnetZoom.HIGH_RESOLUTION_HEIGHT / c)}
  },
  getPreviewPanelPoint: function (a, b, c) {
    a = ImajnetZoom.getCoordinatesAtCurrentZoom(this.getPanelCoordinatesFromHighCoordinates(a), b);
    return {x: a.x - Math.abs(c.left), y: a.y - Math.abs(c.top)}
  },
  getImageIndexInCacheArrayByImageId: function (a) {
    for (var b = 0; b < ImageControler.currentPhotogrammetry.existingProjections.length; b++)if (ImageControler.currentPhotogrammetry.existingProjections[b].parameter.pointOfView.id == a)return ImageControler.currentPhotogrammetry.existingProjections[b];
    return null
  },
  getPinPoints: function () {
    var a = null;
    jQuery.each(ImageControler.currentPhotogrammetry.objects, function (b, c) {
      void 0 != c.photogrammetryPosition3D && (a = c.data)
    });
    return a
  },
  getMeasurements: function () {
    var a = null;
    jQuery.each(ImageControler.currentPhotogrammetry.objects, function (b, c) {
      void 0 != c.photogrammetryPosition3D && (a = c.data)
    });
    return a
  },
  getMeasurementTextPosition: function (a, b) {
    var c = (a.x + b.x) / 2, d = (a.y + b.y) / 2;
    if (a.x == b.x)return {x: c + 3, y: d - 3};
    var e = (b.y - a.y) / (b.x - a.x);
    0 < e && (30 < Math.abs(a.y - b.y) ? (c -= 35, d -= 5) : (c -= 10, d -= 20));
    0 > e && (c += 2);
    0 == e && (c -= 5, d += 2);
    return {x: Math.round(c), y: Math.round(d)}
  },
  getPositionFromObject: function (a) {
    return 0 == a.id || void 0 !== a.coordinates ? a.position : a.parameter.imagePoint ? a.parameter.imagePoint.img1 :
      a.parameter.imagePoint1.img1
  },
  getObjectById: function (a) {
    for (var b = 0; b < this.objects.length; b++)for (var c = 0; c < this.objects[b].data.length; c++)if (this.objects[b].data[c].id == a)return this.objects[b].data[c];
    return null
  },
  setRedStep: function (a) {
    for (var b = 1; 3 >= b; b++)b == a ? (jQuery("#imajnetPreviewPanelItem" + b).addClass("redStep"), jQuery("#imajnetPreviewPanelItemArrow" + b).css("background-image", "url('" + Imajnet.imajnetPath + "img/imageIcons/arrowRight.png')")) : (jQuery("#imajnetPreviewPanelItem" + b).removeClass("redStep"),
      jQuery("#imajnetPreviewPanelItemArrow" + b).css("background-image", "url('" + Imajnet.imajnetPath + "img/imageIcons/arrowRightTransparent.png')"))
  },
  setIdByPosition: function (a) {
    var b = "", c = ImageControler.currentPhotogrammetry.getImageObjectList(a);
    if (null !== c)for (var d = c.length - 1; -1 < d; d--) {
      var e = null;
      void 0 !== c[d].photogrammetryPosition3D ? e = c[d].photogrammetryPosition3D.coordinates : void 0 !== c[d].measurementResult ? e = Nigsys.getClosestPoint(ImajnetMap.currentPosition, c[d].measurementResult.firstPoint, c[d].measurementResult.secondPoint) :
        void 0 !== c[d].position && (e = c[d].position);
      if (null !== e && e.lon == a.lon && e.lat == a.lat && e.height == a.height) {
        b = c[d].id;
        break
      }
    }
    return b
  },
  setPreviewPanelVisibleRegion: function (a, b) {
    var c = ImajnetUI.previewImageContainer.width(), d = ImajnetUI.previewImageContainer.height(), e = c * b, f = d * b,
      h = this.getPanelCoordinatesFromHighCoordinates(a), h = ImajnetZoom.getCoordinatesAtCurrentZoom(h, b),
      g = h.x - c / 2;
    e - Math.abs(g) < c && (g = e - c);
    var k = h.y - d / 2;
    f - Math.abs(k) < d && (k = f - d);
    k = -1 * Math.abs(Math.round(k));
    g = -1 * Math.abs(Math.round(g));
    h.x < c / 2 && (g = 0);
    h.y < d / 2 && (k = 0);
    ImajnetUI.previewImage.css("width", Math.round(e) + "px");
    ImajnetUI.previewImage.css("height", Math.round(f) + "px");
    ImajnetUI.previewImage.css("top", k + "px");
    ImajnetUI.previewImage.css("left", g + "px");
    return {top: k, left: g}
  },
  photogrammetryIsDenied: function () {
    return this.firstImagePosition && ImajnetMap.currentPosition.id == this.firstImagePosition.id && (!Nigsys.isPolyligneMode() && 3 != this.currentStep || 0 == this.currentStep % 2)
  },
  onResize: function (a, b) {
    var c = Math.round(b / 2) - 50, d = Math.round(a /
        2) - 50;
    jQuery("#positionDenied").css("top", c);
    jQuery("#positionDenied").css("left", d);
    jQuery("#measurementDenied").css("top", c);
    jQuery("#measurementDenied").css("left", d);
    jQuery("#polyligneDenied").css("top", c);
    jQuery("#polyligneDenied").css("left", d);
    Nigsys.isMeasurementMode() ? (ImajnetMeasurement.onImageResize(), this.drawConstraints()) : Nigsys.isPositionMode() ? this.drawConstraints() : this.redraw(!1)
  },
  showLRS: function (a, b, c, d) {
    var e = jQuery("#imajnetPhotogrammetryLRS_" + c);
    if (!e.length || "" != e.html())if (d ==
      ImajnetUI.clipboardContainerId) {
      var f = jQuery("#LRSClipboard_" + c);
      0 != f.length ? (Nigsys.positionExistingElement(a, b, d, f), f.show()) : (c = '\x3cdiv id\x3d"LRSClipboard_' + c + '" class\x3d"photogrammetryClipboardPopup"\x3e' + e.html() + "\x3c/div\x3e", Nigsys.addElement(a, b, ImajnetUI.clipboardContainerId, c))
    } else Nigsys.positionExistingElement(a, b, d, e), e.show()
  },
  addImageTag: function (a) {
    var b = ImajnetUI.imajnetImageContainer.offset();
    a = {
      position: ImajnetMap.currentPosition, coordinates: ImajnetZoom.getRealImageCoordinates(a.clientX -
        b.left, a.clientY - b.top), type: ImajnetMap.MARKER_TYPE_IMAGE_TAG, linkToNext: !1
    };
    b = this.addObject(ImajnetMap.currentPosition, a, !1, !0, !0);
    this.getObjectLRS({id: b.id, photogrammetryPosition3D: {coordinates: ImajnetMap.currentPosition}});
    ImageControler.currentPhotogrammetry.appendImageTag(b.id, a.coordinates)
  },
  showComment: function (a, b, c, d, e) {
    if (0 != c) {
      var f = jQuery("#LRSDoubleClickComment_" + c), f = 0 != f.length ? f.html() : "";
      Nigsys.addElement(a, b, d, '\x3ctextarea id\x3d"' + e + c + '" class\x3d"textareaEditComment" onkeydown\x3d"ImageControler.currentPhotogrammetry.saveComment(event, \'' +
        c + "', '" + e + '\');" cols\x3d"25" style\x3d"height: 28px;"\x3e' + f + "\x3c/textarea\x3e");
      jQuery("textarea#" + e + c).focus().enableSelection();
      Nigsys.disableEventPropagation(a)
    }
  },
  showCommentInClipboard: function (a, b) {
    jQuery(".imajnetClipboardTextareaComment").hide();
    jQuery(".imajnetClipboardCommentContainer").show();
    jQuery("#imajnetClipboardComment_" + b).hide();
    var c = jQuery("#LRSDoubleClickComment_" + b), c = 0 != c.length ? c.html() : "",
      d = jQuery("textarea#textAreaEditClipboardComment_" + b);
    d.val(c);
    jQuery("#imajnetClipboardTextareaComment_" +
      b).show();
    d.focus()
  },
  appendCommentOnPhotogrammetryItemContainer: function (a, b) {
    if (b) {
      ImageControler.currentPhotogrammetry.getObjectById(a).comment = b;
      jQuery(".LRSDoubleClickMessage_" + a).html('\x3cdiv id\x3d"LRSDoubleClickComment_' + a + '" class\x3d"LRSDoubleClickComment"\x3e' + b + "\x3c/div\x3e" + jQuery.imajnet.map.clipboard.doubleClick);
      jQuery("#imajnetClipboardCommentContainer_" + a).html(b);
      var c = jQuery("#imajnetPhotogrammetryLRS_" + a).html();
      jQuery("#LRSClipboard_" + a).html(c ? c : "")
    }
  },
  saveComment: function (a,
                         b, c) {
    var d = a.keyCode ? a.keyCode : a.which;
    13 == d ? (ImageControler.currentPhotogrammetry.appendCommentOnPhotogrammetryItemContainer(b, jQuery("textarea#" + c + b).val()), ImageControler.currentPhotogrammetry.updateCache(), "textareaEditComment_" == c ? jQuery("#" + c + b).remove() : ImageControler.currentPhotogrammetry.closeTextarea(b)) : 27 == d && (ImageControler.currentPhotogrammetry.closeTextarea(b), Nigsys.disableEventPropagation(a))
  },
  imageMouseMovePreviewPanel: function (a) {
    var b = ImajnetUI.imajnetImageContainer.offset();
    !(Nigsys.isPositionMode() &&
    2 == ImageControler.currentPhotogrammetry.currentStep || Nigsys.isMeasurementMode() && 2 == ImageControler.currentPhotogrammetry.currentStep || Nigsys.isPolyligneMode() && 0 == ImageControler.currentPhotogrammetry.currentStep % 2) || a.clientX - b.left >= ImajnetUI.imajnetImageContainerSize.width - ImajnetUI.previewImageContainer.width() && a.clientY - b.top >= ImajnetUI.imajnetImageContainerSize.height - ImajnetUI.previewImageContainer.height() ? ImajnetUI.previewImageContainer.hide() : ImageControler.currentPhotogrammetry.showPreviewPanel()
  },
  previewPanelMouseOver: function () {
    ImajnetUI.previewImageContainer.hide()
  },
  clearCommentTextarea: function (a) {
    a && Nigsys.stringContains(a.target.className, "textareaEditComment") || jQuery(".textareaEditComment").remove()
  },
  closeTextarea: function (a) {
    jQuery("#imajnetClipboardTextareaComment_" + a).hide();
    jQuery("#imajnetClipboardComment_" + a).show()
  },
  updateCache: function () {
    if (Photogrammetry.clipboardActive) {
      for (var a = [], b = 0; b < this.objects.length; b++) {
        for (var c = {positionId: this.objects[b].positionId, data: []}, d =
          0; d < this.objects[b].data.length; d++)this.objects[b].data[d].type != ImajnetMap.MARKER_TYPE_CLICKED_POINT && c.data.push(this.objects[b].data[d]);
        c.data.length && a.push(c)
      }
      Nigsys.setCookie("IMAJNET", "CLIPBOARD", a)
    } else Nigsys.setCookie("IMAJNET", "CLIPBOARD", null)
  },
  deletePrevObjects: function () {
    Photogrammetry.clipboardActive || ImageControler.currentPhotogrammetry.deletePhotogrammetryObjects()
  },
  getLastObjectId: function () {
    for (var a = 1, b = 0; b < this.objects.length; b++)for (var c = 0; c < this.objects[b].data.length; c++)if (this.objects[b].data[c].id >=
      a && (a = this.objects[b].data[c].id + 1), this.objects[b].data[c].points)for (var d = 0; d < this.objects[b].data[c].points.length; d++)this.objects[b].data[c].points[d].id >= a && (a = this.objects[b].data[c].points[d].id + 1);
    return a
  },
  addObject: function (a, b, c, d, e) {
    b.id || 0 == b.id || (b.id = this.getLastObjectId());
    ImajnetPolyligne.isPolyligneObject(b.id) || (b.measurement = ImageControler.currentPhotogrammetry.getMeasurement(b));
    0 != b.id || b.photogrammetryPosition3D.coordinates.height || (b.photogrammetryPosition3D.coordinates.height =
      0);
    var f = this.getImageObjectList(a);
    null === f ? this.objects.push({
      positionId: b.position && b.position.id ? b.position.id : a.id,
      data: Array(b)
    }) : f.push(b);
    0 < b.id && this.updateCache();
    c || this.drawObjectClipboard(b, d);
    e && ImajnetMap.drawPhotogrammetryObjects();
    return b
  },
  appendLRSContainer: function (a, b) {
    var c = 0 == b ? 0 : this.setIdByPosition(a);
    c || (c = b);
    jQuery("#popupImajnetControlsLayer").append('\x3cdiv id\x3d"imajnetPhotogrammetryLRS_' + c + '" class\x3d"photogrammetryPopup"\x3e' + (0 == c ? "" : '\x3cdiv class\x3d"LRSDoubleClickMessage LRSDoubleClickMessage_' +
        c + '"\x3e' + jQuery.imajnet.map.clipboard.doubleClick + "\x3c/div\x3e") + "\x3c/div\x3e");
    LRS.getLRSForPosition(a, b);
    Nigsys.browserIsIE7() || Nigsys.browserIsIE8() || jQuery("#imajnetPhotogrammetryLRS_" + c).corner();
    return c
  },
  getObjectLRS: function (a) {
    if (a.coordinates || a.photogrammetryPosition3D && a.photogrammetryPosition3D.coordinates) {
      var b = "",
        b = a.position ? a.position.id : a.parameter ? a.parameter.imagePoint.img1.id : a.photogrammetryPosition3D.coordinates.id,
        b = {
          id: b,
          traceId: ImajnetMap.currentPosition.traceId,
          height: a.position ?
            a.position.height : a.photogrammetryPosition3D.coordinates.height,
          lat: a.position ? a.position.lat : a.photogrammetryPosition3D.coordinates.lat,
          lon: a.position ? a.position.lon : a.photogrammetryPosition3D.coordinates.lon
        };
      this.appendLRSContainer(b, a.id)
    } else if (void 0 !== a.measurementResult && void 0 !== a.measurementResult.firstPoint && void 0 !== a.measurementResult.secondPoint) {
      if (!a.parameter)return;
      b = Nigsys.getClosestPoint(a.parameter.imagePoint1.img1, a.measurementResult.firstPoint, a.measurementResult.secondPoint);
      b = {
        id: a.parameter.imagePoint1.img1.id,
        traceId: ImajnetMap.currentPosition.traceId,
        height: b.height,
        lat: b.lat,
        lon: b.lon
      };
      this.appendLRSContainer(b, a.id)
    } else"polyligne" == a.type ? (b = ImajnetPolyligne.getCurrentObjectMiddlePoint(a), this.appendLRSContainer({
      id: b.id,
      traceId: b.traceId,
      height: b.height,
      lat: b.lat,
      lon: b.lon
    }, a.id)) : "polygon" == a.type && (b = ImajnetPolyligne.getCurrentObjectMiddlePoint(a), this.appendLRSContainer({
        id: b.id,
        traceId: b.traceId,
        height: b.height,
        lat: b.lat,
        lon: b.lon
      }, a.id));
    ImageControler.currentPhotogrammetry.appendCommentOnPhotogrammetryItemContainer(a.id,
      a.comment)
  },
  draw: function () {
    jQuery(".photogrammetryPopup").hide();
    Nigsys.isPositionMode() || Nigsys.isMeasurementMode() || (this.drawPhotogrammetryObjects(), this.getImajnetObjectsToProject())
  },
  redraw: function (a) {
    if (Nigsys.isPositionMode() || Nigsys.isMeasurementMode())return this.drawConstraints(), jQuery.Deferred().resolve().promise();
    Nigsys.isPolyligneMode() && this.drawConstraints();
    this.clear();
    this.draw();
    a && ImajnetMap.drawPhotogrammetryObjects();
    ImajnetProjection.draw();
    return jQuery.Deferred().resolve().promise()
  },
  appendMapMarker: function (a, b) {
    ImajnetUI.popupImajnetControlsLayer.append(marker)
  },
  appendImageTag: function (a, b) {
  },
  drawLine: function (a, b, c, d, e) {
  },
  openImageWithPhotogrammetryObject: function (a) {
    ImageControler.currentPhotogrammetry.goToImage(a)
  },
  zoomToObject: function (a) {
    if (a = ImajnetMap.getFeatureWrapperById(a)) ImajnetPlugin.zoomMapToFeatureWrapper(a), ImajnetPlugin.onFeatureClick(a)
  },
  drawConstraints: function () {
    ImageControler.currentGraphic.clearConstraints();
    if (this.currentConstraintData && jQuery.isArray(this.currentConstraintData) &&
      this.firstImagePosition && !this.photogrammetryIsDenied() && (!Nigsys.isPolyligneMode() || 1 != ImageControler.currentPhotogrammetry.currentStep % 2))for (var a = 0; a < this.currentConstraintData.length; a++)ImageControler.currentGraphic.drawConstraint(this.currentConstraintData[a])
  },
  constraintReceived: function (a) {
    try {
      if ((a = JSON.parse(a)) && a.parameter && a.parameter.targetImage && a.parameter.targetImage.id == ImajnetMap.currentPosition.id && a.constraints && jQuery.isArray(a.constraints)) {
        ImageControler.currentPhotogrammetry.currentConstraintData =
          [];
        for (var b = 0; b < a.constraints.length; b++)ImageControler.currentPhotogrammetry.currentConstraintData.push(a.constraints[b]), ImageControler.currentGraphic.drawConstraint(a.constraints[b])
      }
    } catch (c) {
    }
  },
  getConstraint: function () {
    ImageControler.currentGraphic.clearConstraints();
    this.constraintAjaxRequest && this.constraintAjaxRequest.abort();
    this.constraintParameter && this.firstImagePosition.id != ImajnetMap.currentPosition.id && (this.constraintParameter.density = 1, this.constraintParameter.sourceImage = this.firstImagePosition,
      this.constraintParameter.targetImage = ImajnetMap.currentPosition, this.constraintAjaxRequest = ImajnetAPI.doImajnetRequest("GET", "/api/photogrammetry/constraint/", this.constraintParameter, this.constraintReceived, null, null, null, !0))
  },
  computeDistanceBetweenPoints: function (a, b) {
    return Math.sqrt(Math.pow(Nigsys.distanceBetweenPoints(a, b), 2) + Math.pow(Math.abs(b.height - a.height), 2))
  },
  getMeasurementInUnitsByObjectId: function (a, b) {
    var c = ImageControler.currentPhotogrammetry.getObjectById(a);
    if (!c || !c.measurement)return "";
    var d = 0;
    return d = c.type == ImajnetMap.FEATURE_TYPE_POLYGON ? ImageControler.currentPhotogrammetry.getMeasurementInUnits(c.measurement, !0) : ImageControler.currentPhotogrammetry.getMeasurementInUnits(c.measurement, !1)
  },
  getMeasurementArray: function (a) {
    if (a.measurementResult)return a.measurementResult.measurement;
    if (a.points) {
      if ("polygon" == a.type) {
        for (var b = [], c = 0; c < a.points.length; c++)b.push({
          x: a.points[c].photogrammetryPosition3D.coordinates.lon,
          y: a.points[c].photogrammetryPosition3D.coordinates.lat,
          z: a.points[c].photogrammetryPosition3D.coordinates.height
        });
        b.push({
          x: a.points[a.points.length - 1].photogrammetryPosition3D.coordinates.lon,
          y: a.points[a.points.length - 1].photogrammetryPosition3D.coordinates.lat,
          z: a.points[a.points.length - 1].photogrammetryPosition3D.coordinates.height
        });
        return b
      }
      return ImajnetPolyligne.getTotalDistance(a)
    }
    return null
  },
  getMeasurement: function (a) {
    return "polygon" == a.type ? Nigsys.getGeodesicArea(ImageControler.currentPhotogrammetry.getMeasurementArray(a)) : ImageControler.currentPhotogrammetry.getMeasurementArray(a)
  },
  getMeasurementInUnits: function (a,
                                   b) {
    return a ? b ? Nigsys.getHighestSquareUnit(LRS.transformFromSquareMeters(a, Nigsys.getMeasurementUnit()), Nigsys.getMeasurementUnit()) : LRS.transformFromMeters(a, Nigsys.getMeasurementUnit()) + Nigsys.getUnitText(Nigsys.getMeasurementUnit()) : ""
  },
  drawPhotogrammetryObjects: function () {
    if (null !== ImajnetMap.currentPosition) {
      Nigsys.isPolyligneMode() || ImajnetImageSwitcher.show();
      var a = ImageControler.currentPhotogrammetry.getImageObjectList(ImajnetMap.currentPosition);
      if (null != a && (!Nigsys.isPolyligneMode() || -1 !=
        ImajnetPolyligne.currentAddObjectId)) {
        var b = 0;
        a:for (; b < a.length; b++) {
          var c = ImajnetMap.getFeatureWrapperById(a[b].id);
          if (a[b].coordinates) Nigsys.isPolyligneMode() || ImageControler.currentPhotogrammetry.appendImageTag(a[b].id, a[b].coordinates); else if (void 0 !== a[b].photogrammetryPosition3D) Nigsys.isPolyligneMode() || 0 != a[b].id && ImageControler.currentGraphic.appendPinPoint(a[b].parameter.imagePoint.imgCoord1, c); else if (ImajnetPolyligne.objectIsPolyligneOrPolygon(a[b].id)) {
            if ((!Nigsys.isPolyligneMode() ||
              a[b].id == ImajnetPolyligne.currentAddObjectId) && a[b].points) {
              for (var d = [], e = 0; e < a[b].points.length; e++) {
                if (a[b].points[e].parameter.imagePoint.img1.id !== ImajnetMap.currentPosition.id)continue a;
                d.push({id: a[b].points[e].id, coordinates: a[b].points[e].parameter.imagePoint.imgCoord1})
              }
              ImageControler.currentPhotogrammetry.drawLine(c, d)
            }
          } else Nigsys.isPolyligneMode() || (ImageControler.currentGraphic.init(), ImageControler.currentPhotogrammetry.drawLine(ImajnetMap.getFeatureWrapperById(a[b].id), [{coordinates: a[b].parameter.imagePoint1.imgCoord1},
            {coordinates: a[b].parameter.imagePoint2.imgCoord1}]))
        }
      }
    }
  },
  objectFromCurrentImage: function (a, b) {
    if (this.objects[a].positionId != ImajnetMap.currentPosition.id)return !1;
    if (!ImajnetPolyligne.isPolyligneOrPolygon(this.objects[a].data[b].type))return !0;
    for (var c = 0; c < this.objects[a].data[b].points.length; c++)if (this.objects[a].data[b].points[c].parameter.imagePoint.img1.id != ImajnetMap.currentPosition.id)return !1;
    return !0
  },
  getDifferentTracePointObject: function (a, b) {
    return [{
      objectId: a.toString(), linkToNext: !0,
      coordinates: {lon: b.lon, lat: b.lat, height: b.height - 1}
    }, {objectId: a.toString(), linkToNext: !1, coordinates: {lon: b.lon, lat: b.lat, height: b.height + 1}}]
  },
  getImajnetObjectsToProject: function () {
    ImajnetAPI.mustAbortRequests && null !== this.projectionAjaxRequest && this.projectionAjaxRequest.abort();
    if (null != ImajnetMap.currentPosition && 0 < this.objects.length) {
      for (var a = [], b = [], c = [], d = ImageControler.currentPhotogrammetry.getImageIndexInCacheArrayByImageId(ImajnetMap.currentPosition.id), e = 0; e < this.objects.length; e++)for (var f =
        0; f < this.objects[e].data.length; f++)if (!this.objectFromCurrentImage(e, f)) {
        var h = !1;
        if (this.objects[e].data[f].photogrammetryPosition3D && -1 === jQuery.inArray(this.objects[e].data[f].type, ImajnetPolyligne.typesArray)) {
          if (d)if (d.projection && d.projection.pointProjections)for (var g = 0; g < d.projection.pointProjections.length; g++) {
            if (d.projection.pointProjections[g] && d.projection.pointProjections[g].id == this.objects[e].data[f].id) {
              h = !0;
              break
            }
          } else if (d.projection && d.projection.shapeProjections)for (g = 0; g < d.projection.shapeProjections.length; g++)if (d.projection.shapeProjections[g] &&
            d.projection.shapeProjections[g].projections && d.projection.shapeProjections[g].id == this.objects[e].data[f].id && 0 <= d.projection.shapeProjections[g].projections[0].coordinates.z) {
            h = !0;
            break
          }
          !h && void 0 !== this.objects[e].data[f].photogrammetryPosition3D.coordinates && Nigsys.distanceBetweenPoints(ImajnetMap.currentPosition, this.objects[e].data[f].photogrammetryPosition3D.coordinates) <= ImajnetSettings.imajnetSettings.projection && (0 == this.objects[e].data[f].id ? c.push({
            objectId: this.objects[e].data[f].id.toString(),
            linkToNext: !1, coordinates: this.objects[e].data[f].photogrammetryPosition3D.coordinates
          }) : this.objects[e].data[f].parameter.imagePoint.img1.traceId != ImajnetMap.currentPosition.traceId ? b.push({
            id: this.objects[e].data[f].id.toString(),
            points: this.getDifferentTracePointObject(this.objects[e].data[f].id, this.objects[e].data[f].photogrammetryPosition3D.coordinates)
          }) : a.push({
            objectId: this.objects[e].data[f].id.toString(),
            linkToNext: this.objects[e].data[f].linkToNext ? this.objects[e].data[f].linkToNext : !1,
            coordinates: this.objects[e].data[f].photogrammetryPosition3D.coordinates,
            imagePointReference: {
              image: {id: this.objects[e].data[f].parameter.imagePoint.img1.id},
              imageCoordinates: {
                x: this.objects[e].data[f].parameter.imagePoint.imgCoord1.x,
                y: this.objects[e].data[f].parameter.imagePoint.imgCoord1.y
              }
            }
          }))
        } else if (this.objects[e].data[f].measurementResult) {
          if (d && d.projection && d.projection.shapeProjections)for (g = 0; g < d.projection.shapeProjections.length; g++)if (d.projection.shapeProjections[g] && d.projection.shapeProjections[g].projections &&
            d.projection.shapeProjections[g].id == this.objects[e].data[f].id && 0 <= d.projection.shapeProjections[g].projections[0].coordinates.z) {
            h = !0;
            break
          }
          h || Nigsys.distanceBetweenPoints(ImajnetMap.currentPosition, this.objects[e].data[f].measurementResult.firstPoint) > ImajnetSettings.imajnetSettings.projection || (h = [], this.objects[e].data[f].parameter.imagePoint1.img1.traceId != ImajnetMap.currentPosition.traceId ? (g = this.getDifferentTracePointObject(this.objects[e].data[f].id, this.objects[e].data[f].measurementResult.firstPoint),
            h.push(g[0]), h.push(g[1]), g = this.getDifferentTracePointObject(this.objects[e].data[f].id, this.objects[e].data[f].measurementResult.secondPoint), h.push(g[0]), h.push(g[1])) : (h.push({
            linkToNext: !0,
            coordinates: this.objects[e].data[f].measurementResult.firstPoint,
            imagePointReference: {
              image: {id: this.objects[e].data[f].parameter.imagePoint1.img1.id},
              imageCoordinates: {
                x: this.objects[e].data[f].parameter.imagePoint1.imgCoord1.x,
                y: this.objects[e].data[f].parameter.imagePoint1.imgCoord1.y
              }
            }
          }), h.push({
            linkToNext: !1,
            coordinates: this.objects[e].data[f].measurementResult.secondPoint,
            imagePointReference: {
              image: {id: this.objects[e].data[f].parameter.imagePoint2.img1.id},
              imageCoordinates: {
                x: this.objects[e].data[f].parameter.imagePoint2.imgCoord1.x,
                y: this.objects[e].data[f].parameter.imagePoint2.imgCoord1.y
              }
            }
          })), b.push({id: this.objects[e].data[f].id.toString(), points: h}))
        } else if (-1 !== jQuery.inArray(this.objects[e].data[f].type, ImajnetPolyligne.typesArray)) {
          if (d && d.projection && d.projection.shapeProjections && d.projection.shapeProjections.length) {
            for (var k =
              null, g = 0; g < d.projection.shapeProjections.length; g++)if (d.projection.shapeProjections[g].id == this.objects[e].data[f].id) {
              k = d.projection.shapeProjections[g].projections;
              break
            }
            h = !0;
            for (g = 0; g < this.objects[e].data[f].points.length; g++)if (!(Nigsys.distanceBetweenPoints(ImajnetMap.currentPosition, this.objects[e].data[f].points[g].parameter.imagePoint.img1) > ImajnetSettings.imajnetSettings.projection)) {
              var m = !1;
              if (k)for (var l = 0; l < k.length; l++)if (k[l].id == this.objects[e].data[f].points[g].id) {
                m = !0;
                break
              }
              if (!m) {
                h =
                  !1;
                break
              }
            }
          }
          if (!h) {
            h = [];
            for (k = 0; k < this.objects[e].data[f].points.length; k++)Nigsys.distanceBetweenPoints(ImajnetMap.currentPosition, this.objects[e].data[f].points[k].parameter.imagePoint.img1) > ImajnetSettings.imajnetSettings.projection || (this.objects[e].data[f].parameter.imagePoint.img1.traceId != ImajnetMap.currentPosition.traceId ? (g = this.getDifferentTracePointObject(this.objects[e].data[f].points[k].id, this.objects[e].data[f].points[k].photogrammetryPosition3D.coordinates), h.push(g[0]), h.push(g[1])) :
              h.push({
                objectId: this.objects[e].data[f].points[k].id.toString(),
                linkToNext: k < this.objects[e].data[f].points.length - 1 || "polygon" == this.objects[e].data[f].points[k].type,
                coordinates: this.objects[e].data[f].points[k].photogrammetryPosition3D.coordinates,
                imagePointReference: {
                  image: {id: this.objects[e].data[f].points[k].parameter.imagePoint.img1.id},
                  imageCoordinates: {
                    x: this.objects[e].data[f].points[k].parameter.imagePoint.imgCoord1.x,
                    y: this.objects[e].data[f].points[k].parameter.imagePoint.imgCoord1.y
                  }
                }
              }));
            h.length && b.push({id: this.objects[e].data[f].id.toString(), points: h})
          }
        }
      }
      d = [];
      0 < c.length && d.push({groundProjection: !0, heightOffset: 0, points: c});
      if (0 < a.length || 0 < b.length) c = {
        groundProjection: !1,
        heightOffset: 0
      }, 0 < a.length && (c.points = a), 0 < b.length && (c.shapes = b), d.push(c);
      0 < d.length ? this.imajnetProjectionsDataObject = c = {
        projectionData: d,
        pointOfView: ImajnetMap.currentPosition
      } : ImajnetProjection.projectionReceived(null)
    }
  },
  ImajnetClipboardItemClick: function (a, b) {
    this.timerItemClipboardClick && clearTimeout(this.timerItemClipboardClick);
    this.timerItemClipboardClick = setTimeout(function () {
      ImageControler.currentPhotogrammetry.goToImage(a)
    }, 250)
  },
  goToImage: function (a) {
    for (var b = 0; b < this.objects.length; b++)for (var c = 0; c < this.objects[b].data.length; c++)if (this.objects[b].data[c].id == a) {
      ImajnetZoom.left = -1;
      ImajnetAPI.setImajnetImage({position: ImageControler.currentPhotogrammetry.getPositionFromObject(this.objects[b].data[c])});
      return
    }
  },
  deleteItemAtIndex: function (a, b, c, d) {
    a && (a[c] && (1 == a[c][b].length ? a.splice(c, 1) : a[c][b].splice(d, 1)), "data" ==
    b && 1 == a.length && 1 == a[0][b].length && 0 == a[0][b][0].id && this.clipboardEmpty())
  },
  deleteProjectionItem: function (a) {
    for (var b = 0; b < ImageControler.currentPhotogrammetry.existingProjections.length; b++)if (ImageControler.currentPhotogrammetry.existingProjections[b].projection) {
      var c = !1;
      if (ImageControler.currentPhotogrammetry.existingProjections[b].projection.pointProjections)for (var d = 0; d < ImageControler.currentPhotogrammetry.existingProjections[b].projection.pointProjections.length; d++)if (ImageControler.currentPhotogrammetry.existingProjections[b].projection.pointProjections[d] &&
        ImageControler.currentPhotogrammetry.existingProjections[b].projection.pointProjections[d].id == a) {
        ImageControler.currentPhotogrammetry.existingProjections[b].projection.pointProjections.splice(d, 1);
        c = !0;
        break
      }
      if (!c && ImageControler.currentPhotogrammetry.existingProjections[b].projection.shapeProjections)for (d = 0; d < ImageControler.currentPhotogrammetry.existingProjections[b].projection.shapeProjections.length; d++)if (ImageControler.currentPhotogrammetry.existingProjections[b].projection.shapeProjections[d] &&
        ImageControler.currentPhotogrammetry.existingProjections[b].projection.shapeProjections[d].id == a) {
        ImageControler.currentPhotogrammetry.existingProjections[b].projection.shapeProjections.splice(d, 1);
        break
      }
    }
  },
  onDeletePhotogrammetryItem: function (a, b, c) {
    ImageControler.currentPhotogrammetry.clearItem(a.id);
    ImajnetMap.clearPhotogrammetryObject(a.id);
    this.deleteProjectionItem(a.id);
    this.deleteItemAtIndex(this.objects, "data", b, c);
    this.updateCache()
  },
  deletePhotogrammetryItem: function (a) {
    if (this.objects && this.objects.length)for (var b =
      0; b < this.objects.length; b++)for (var c = 0; c < this.objects[b].data.length; c++)if (this.objects[b].data[c].id == a) {
      this.onDeletePhotogrammetryItem(this.objects[b].data[c], b, c);
      this.redraw(!0);
      return
    }
  },
  deleteLastPhotogrammetryItem: function () {
    this.objects && this.objects.length && this.deletePhotogrammetryItem(this.objects[this.objects.length - 1].data[this.objects[this.objects.length - 1].data.length - 1].id)
  },
  getClipboardEmptyContent: function () {
    return '\x3cdiv style\x3d"width: 100%; text-align: center; margin-top: 10px;"\x3e' +
      jQuery.imajnet.map.clipboard.noItems + "\x3c/div\x3e"
  },
  clipboardEmpty: function () {
    ImajnetUI.hideItem(ImajnetUI.clipboardExportContainerId);
    jQuery("#" + ImajnetUI.clipboardContainerId + "Content").html(this.getClipboardEmptyContent());
    jQuery("#popupImajnetClipboardClearButton").prop("disabled", !0);
    jQuery("#popupImajnetClipboardExportButton").prop("disabled", !0)
  },
  deletePhotogrammetryObjects: function (a) {
    a = jQuery(".deleteClipboardItem");
    for (var b = 0; b < a.length; b++)jQuery(a[b]).trigger("click")
  },
  exportAddToItem: function () {
    jQuery("#imajnetExportToContainer").append(this.exportToItemContent +
      '\x3cdiv class\x3d"clearLeft"\x3e\x3c/div\x3e')
  },
  showExport: function () {
    ImajnetUI.clipboardExportContainer.html(this.getExportContent());
    ImajnetUI.showItem(ImajnetUI.clipboardExportContainerId, Nigsys.browserIsIE7() ? 460 : null)
  },
  onExportSuccess: function (a) {
    a = JSON.parse(a);
    var b = jQuery.imajnet.map.clipboard.popupExport.exportComplete;
    a && a.exportResult && a.exportResult.link && "ok" != a.exportResult.link.toString().toLowerCase() && (b += ':\x26nbsp;\x3cb\x3e\x3ca href\x3d"' + Imajnet.serverUrl + a.exportResult.link +
      '" target\x3d"_blank"\x3e' + jQuery.imajnet.map.clipboard.popupExport.donwloadFile + "\x3c/a\x3e\x3c/b\x3e");
    jQuery("#imajnetExportStatus").html(b)
  },
  onExportError: function () {
    jQuery("#imajnetExportStatus").html('\x3cdiv class\x3d"errors"\x3e' + jQuery.imajnet.map.clipboard.popupExport.exportError + "\x3c/div\x3e")
  },
  getDataToExport: function () {
    var a = [], b = [], c = [], d = [];
    jQuery.each(this.objects, function (e, h) {
      jQuery.each(h.data, function (e, f) {
        if (void 0 !== f.coordinates) a.push(f); else if (f.photogrammetryPosition3D) 0 !=
        f.id && b.push({
          position: f.parameter.imagePoint.img1,
          imageCoordinates: f.parameter.imagePoint.imgCoord1,
          coordinates: f.photogrammetryPosition3D.coordinates,
          precision: f.photogrammetryPosition3D.precision,
          comment: f.comment
        }); else if (f.measurementResult) c.push({
          position: f.parameter.imagePoint1.img1,
          firstPoint: {
            position: f.parameter.imagePoint1.img1,
            coordinates: f.measurementResult.firstPoint,
            imageCoordinates: f.parameter.imagePoint1.imgCoord1,
            precision: f.measurementResult.firstPoint.precision
          },
          secondPoint: {
            position: f.parameter.imagePoint1.img1,
            coordinates: f.measurementResult.secondPoint,
            imageCoordinates: f.parameter.imagePoint2.imgCoord1,
            precision: f.measurementResult.secondPoint.precision
          },
          measurement: f.measurementResult.measurement,
          precision: f.measurementResult.precision,
          comment: f.comment
        }); else if (-1 !== jQuery.inArray(f.type, ImajnetPolyligne.typesArray)) {
          for (var h = [], l = 0; l < f.points.length; l++)h.push({
            position: f.points[l].parameter.imagePoint.img1,
            imageCoordinates: f.points[l].parameter.imagePoint.imgCoord1,
            coordinates: f.points[l].photogrammetryPosition3D.coordinates,
            precision: f.points[l].photogrammetryPosition3D.precision
          });
          h = {
            comment: f.comment,
            position: f.points[0].parameter.imagePoint.img1,
            isPolygone: "polygon" == f.type ? !0 : !1,
            points: h
          };
          f.measurement && ("polygon" == f.type ? h.surface = f.measurement : h.length = f.measurement);
          d.push(h)
        }
      })
    });
    var e = {};
    0 < a.length && (e.imagetag = a);
    0 < b.length && (e.pinpoint = b);
    0 < c.length && (e.freemeasurement = c);
    0 < d.length && (e.shape = d);
    return e
  },
  exportObjects: function (a) {
    jQuery("#imajnetExportStatus").html(jQuery.imajnet.map.clipboard.popupExport.exportProgress);
    var b = "", c = null, d = "", e = jQuery('input[name\x3d"imajnetExportType"]:checked').val();
    void 0 !== a && null !== a && a && (b = jQuery("#imajnetExportFrom").val(), c = [], jQuery.each(jQuery(".imajnetExportTo"), function (a, b) {
      var d = b.value;
      "" != d && c.push(d)
    }), d = jQuery("textarea#imajnetExportMessage").val());
    a = {
      exportData: this.getDataToExport(),
      fromEmail: b,
      recipients: c,
      message: d,
      locale: Imajnet.locale,
      unit: Nigsys.getMeasurementUnit()
    };
    ImajnetAPI.doImajnetRequest("POST", "/api/export/" + e + "/", a, this.onExportSuccess, this.onExportError,
      null, "data")
  },
  redrawClipboard: function () {
    this.clipboardEmpty();
    if (Photogrammetry.clipboardActive)for (var a = 0; a < ImageControler.currentPhotogrammetry.objects.length; a++)for (var b = 0; b < ImageControler.currentPhotogrammetry.objects[a].data.length; b++)ImageControler.currentPhotogrammetry.objects[a].data[b].objectId && (ImageControler.currentPhotogrammetry.objects[a].data[b].id = ImageControler.currentPhotogrammetry.objects[a].data[b].objectId), ImageControler.currentPhotogrammetry.drawObjectClipboard(ImageControler.currentPhotogrammetry.objects[a].data[b],
      !1)
  },
  drawObjectClipboard: function (a, b) {
    if (Photogrammetry.clipboardActive && void 0 !== a && null !== a && 0 != a.id) {
      var c = "", d = "";
      if (a.photogrammetryPosition3D || a.measurementResult) {
        var e = void 0 !== a.photogrammetryPosition3D ? a.photogrammetryPosition3D.precision : void 0 !== a.measurementResult ? a.measurementResult.precision : -1;
        if (0 > e || 1 < e) d = '\x3cdiv title\x3d"' + jQuery.imajnet.map.clipboard.precisionUnknown + '"\x3e?\x3c/div\x3e'; else for (var e = Math.round(5 * e), f = 0; 5 > f; f++)d += "\x3cdiv style\x3d\"background-image: url('" +
          Imajnet.imajnetPath + "img/" + (f < e ? "ratingFullStar" : "ratingEmptyStar") + '.png\');" class\x3d"left imajnetClipboardStarImage" title\x3d"' + jQuery.imajnet.map.clipboard.precisionRating + '"\x3e\x3c/div\x3e'
      }
      e = "";
      e = ImajnetPolyligne.objectIsPolyligneOrPolygon(a.id) ? jQuery.imajnet.map.clipboard.titleItem[a.type] + " (" + ImageControler.currentPhotogrammetry.getMeasurementInUnitsByObjectId(a.id, "measurementClipboardText_") + ")" : void 0 !== a.coordinates ? jQuery.imajnet.map.clipboard.imageTag : void 0 !== a.photogrammetryPosition3D ?
        jQuery.imajnet.map.clipboard.position3D : ImageControler.currentPhotogrammetry.getMeasurementInUnitsByObjectId(a.id, "measurementClipboardText_");
      f = void 0 !== a.comment ? a.comment : "";
      c += '\x3cdiv id\x3d"imajnetClipboardItem_' + a.id + '" class\x3d"imajnetClipboardItem' + (1 == a.id % 2 ? " imajnetClipboardItemEven" : "") + '" onclick\x3d"ImageControler.currentPhotogrammetry.ImajnetClipboardItemClick(' + a.id + ', event);"\x3e\x3cdiv onmousemove\x3d"ImageControler.currentPhotogrammetry.showLRS(event, null, ' + a.id + ", '" + ImajnetUI.clipboardContainerId +
        "');\" onmouseout\x3d\"jQuery('#LRSClipboard_" + a.id + '\').hide();"\x3e\x3cdiv class\x3d"imajnetClipboardItemImage left"\x3e\x3cimg src\x3d"' + ImajnetAPI.buildImageURL(ImageControler.currentPhotogrammetry.getPositionFromObject(a)) + '" width\x3d"35" height\x3d"32" /\x3e\x3c/div\x3e\x3cdiv class\x3d"left imajnetClipboardComment"\x3e\x3cdiv id\x3d"imajnetClipboardComment_' + a.id + '" class\x3d"imajnetClipboardCommentContainer" style\x3d"width: ' + (void 0 === a.coordinates ? 180 : 270) + 'px;" ondblclick\x3d"ImageControler.currentPhotogrammetry.showCommentInClipboard(event, ' +
        a.id + ');"\x3e\x3cdiv id\x3d"measurementClipboardText_' + a.id + '"\x3e\x3cb\x3e' + e + '\x3c/b\x3e\x3c/div\x3e\x3cdiv\x3e\x3cdiv class\x3d"left"\x3e\x3cb\x3e' + jQuery.imajnet.map.clipboard.comment + '\x3c/b\x3e:\x26nbsp;\x3c/div\x3e\x3cdiv id\x3d"imajnetClipboardCommentContainer_' + a.id + '" class\x3d"left imajnetClipboardCommentContainer" style\x3d"width: ' + (void 0 === a.coordinates ? 95 : 180) + 'px;"\x3e' + f + '\x3c/div\x3e\x3cdiv class\x3d"clearLeft"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv id\x3d"imajnetClipboardTextareaComment_' +
        a.id + '" class\x3d"imajnetClipboardTextareaComment" style\x3d"display: none;"\x3e\x3ctextarea id\x3d"textAreaEditClipboardComment_' + a.id + '" class\x3d"textAreaEditClipboardComment" onkeydown\x3d"ImageControler.currentPhotogrammetry.saveComment(event, ' + a.id + ", 'textAreaEditClipboardComment_');\" cols\x3d\"" + (void 0 === a.coordinates ? 21 : 34) + '"\x3e\x3c/textarea\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"right imajnetClipboardDelete"\x3e\x3cimage src\x3d"' + Imajnet.imajnetPath + "img/deleteClipboardItem.png?" +
        Imajnet.version + '" class\x3d"deleteClipboardItem" onclick\x3d"ImageControler.currentPhotogrammetry.deletePhotogrammetryItem(' + a.id + ');" width\x3d"20" height\x3d"20" style\x3d"margin-top: 5px;" title\x3d"' + jQuery.imajnet.map.clipboard.deleteItem + '" /\x3e\x3c/div\x3e' + (void 0 === a.coordinates ? '\x3cdiv class\x3d"right imajnetClipboardPrecision"\x3e' + d + '\x3cdiv class\x3d"clearLeft"\x3e\x3c/div\x3e\x3c/div\x3e' : "") + '\x3cdiv class\x3d"clearLeft"\x3e\x3c/div\x3e\x3c/div\x3e';
      jQuery("#" + ImajnetUI.clipboardContainerId +
        "Content").click(function (a, b) {
        Nigsys.stringContains(a.target.className, "textAreaEditClipboardComment") || (jQuery(".imajnetClipboardTextareaComment").hide(), jQuery(".imajnetClipboardCommentContainer").show())
      });
      jQuery("#" + ImajnetUI.clipboardContainerId + "Content").html() == this.getClipboardEmptyContent() && jQuery("#" + ImajnetUI.clipboardContainerId + "Content").html("");
      b && (ImajnetUI.showNotificationInfo(jQuery.imajnet.map.clipboard.notify.title, jQuery.imajnet.map.clipboard.notify.text, "rightBottom", null,
        null, function () {
          ImajnetUI.showItem(ImajnetUI.clipboardContainerId, Nigsys.browserIsIE7() ? 350 : null)
        }), setTimeout("ImajnetUI.hideNotificationInfoOk()", 3E3));
      jQuery("#" + ImajnetUI.clipboardContainerId + "Content").append(c);
      jQuery("#popupImajnetClipboardClearButton").prop("disabled", !1);
      jQuery("#popupImajnetClipboardExportButton").prop("disabled", !1)
    }
  },
  clearClipboard: function () {
    jQuery("#" + ImajnetUI.clipboardContainerId + "Content").html("");
    ImajnetUI.hideItem(ImajnetUI.clipboardExportContainerId);
    ImajnetUI.hideItem(ImajnetUI.clipboardContainerId)
  },
  removeMapClickedPoint: function () {
    this.deletePhotogrammetryItem(0)
  },
  clearItem: function (a) {
  },
  clearImageObjects: function () {
  },
  clear: function () {
    this.imajnetProjectionsDataObject = null;
    ImajnetProjection.userProjections = null;
    ImageControler.currentGraphic ? (ImageControler.currentGraphic.firstClickCoordinates = null, ImageControler.currentGraphic.lastClickCoordinates = null) : (Graphic.firstClickCoordinates = null, Graphic.lastClickCoordinates = null);
    Nigsys.isPositionMode() || Nigsys.isMeasurementMode() || Nigsys.isPolyligneMode() ||
    this.hidePreviewPanel();
    this.clearCommentTextarea(null);
    this.clearImageObjects();
    ImageControler.currentGraphic.clearGraphicObjects()
  },
  showPreviewPanel: function () {
    Address.hideAddress();
    ImajnetUI.previewImageContainer.show()
  },
  hidePreviewPanel: function () {
    ImageControler.currentGraphic ? (ImageControler.currentGraphic.clearConstraints(), ImageControler.currentGraphic.clearPreviewPanel()) : (Graphic.clearConstraints(), Graphic.clearPreviewPanel());
    jQuery(".zoomImageClickedPoint").remove();
    ImajnetUI.previewImage &&
    (ImajnetUI.previewImage.attr("src", ""), ImajnetUI.previewImageContainer.hide());
    ImajnetMap.currentPosition && Address.showAddress()
  },
  getProjectionConstraint: function (a) {
    if (ImajnetMap.currentPosition)return ImajnetMap.getTriangle(a, ImajnetSettings.imajnetSettings.projection, ImajnetMap.currentPosition.orientation.viewAngle, ImajnetMap.currentPosition.orientation.yaw)
  }
};
var FlatPhotogrammetry = Nigsys.cloneObject(Photogrammetry);
FlatPhotogrammetry.appendImageTag = function (a, b) {
  var e = ImajnetZoom.getCoordinatesFromRealAtCurrentZoom(b);
  ImajnetUI.popupImajnetControlsLayer.append('\x3cdiv id\x3d"photogrammetryItem_' + a + '" class\x3d"photogrammetryItem" style\x3d"top: ' + Math.round(e.y - 16) + "px; left: " + Math.round(e.x - 20) + 'px; width: 20px; height: 16px; position: absolute; z-index: 1;" onmouseover\x3d"ImageControler.currentPhotogrammetry.onImageTagMouseOver(\'' + a + "', event, 'imajnetImageLayer', jQuery(this))\" onmouseout\x3d\"ImageControler.currentPhotogrammetry.onImageTagMouseOut('" + a +
    '\');"\x3e\x3cimg src\x3d"' + Imajnet.imajnetPath + "img/imageTag.png?" + Imajnet.version + '" width\x3d"20" height\x3d"16" /\x3e\x3c/div\x3e');
  jQuery("#photogrammetryItem_" + a).dblclick({id: a}, function (a) {
    ImageControler.currentPhotogrammetry.showComment(a, jQuery(this), a.data.id, "popupImajnetControlsLayer", "textareaEditComment_")
  })
};
FlatPhotogrammetry.drawLine = function (a, b) {
  b = Nigsys.cloneObject(b);
  a && a.type == ImajnetMap.FEATURE_TYPE_POLYGON && b.push(b[0]);
  for (var e = "", d = [], c = 0; c < b.length; c++) {
    if (!b[c].virtual && (!a || ImajnetPolyligne.isPolyligneOrPolygon(a.type.replace("Feature", "")))) {
      var f = ImajnetMap.getFeatureWrapperById(b[c].id);
      ImageControler.currentGraphic.appendPinPoint(b[c].coordinates, f)
    }
    var f = "", g = ImajnetZoom.getCoordinatesFromRealAtCurrentZoom(b[c].coordinates);
    d.push(g);
    f = 0 == c ? " M" : " L";
    e += f + g.x + " " + g.y
  }
  a && (a.style ||
  (a.style = Array({strokeColor: Nigsys.defaultObjectsColor})), a.getType() == ImajnetMap.FEATURE_TYPE_POLYGON ? jQuery.each(a.style, function (b, c) {
    ImageControler.currentGraphic.drawPolygon(e, a, c)
  }) : jQuery.each(a.style, function (b, c) {
    ImageControler.currentGraphic.drawLine(e, a, c)
  }), c = ImageControler.currentPhotogrammetry.getMeasurementInUnitsByObjectId(a.getId(), "measurementText_")) && (d = ImageControler.currentPhotogrammetry.getMeasurementTextPosition({
    x: d[0].x,
    y: d[0].y
  }, {x: d[1].x, y: d[1].y}), ImajnetUI.popupImajnetControlsLayer.append('\x3cdiv id\x3d"measurementText_' +
    a.getId() + '" class\x3d"measurementText" style\x3d"top: ' + d.y + "px; left:" + d.x + 'px;" onclick\x3d"ImageControler.currentPhotogrammetry.onPhotogrammetryItemClick(\'' + a.getId() + "');\" onmouseover\x3d\"ImageControler.currentPhotogrammetry.onPhotogrammetryItemMouseOver('" + a.getId() + "', event, 'imajnetImageLayer', jQuery(this));\" onmouseout\x3d\"ImageControler.currentPhotogrammetry.onPhotogrammetryItemMouseOut('" + a.getId() + "');\" ondblclick\x3d\"ImageControler.currentPhotogrammetry.showComment(event, jQuery(this), '" +
    a.getId() + "', 'popupImajnetControlsLayer', 'textareaEditComment_');\"\x3e" + c + "\x3c/div\x3e"))
};
FlatPhotogrammetry.clearItem = function (a) {
  var b = ImajnetMap.getFeatureWrapperById(a);
  if (b)if (-1 !== jQuery.inArray(b.getType().replace("Feature", ""), ImajnetPolyligne.typesArray)) {
    if (a = ImajnetMap.getPolyligneFeatureWrappers(a))for (b = 0; b < a.length; b++)ImageControler.currentGraphic.clearItem(a[b].getId())
  } else ImageControler.currentGraphic.clearItem(a); else ImageControler.currentGraphic.clearItem(a)
};
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
var FlatGraphic = Nigsys.cloneObject(Graphic);
FlatGraphic.init = function () {
  this.svg = this.initSVG("popupImajnetControlsLayer", this.svg)
};
FlatGraphic.showPreviewPanelSVG = function () {
  null !== this.previewPanelSVG && jQuery(this.previewPanelSVG.canvas).show()
};
FlatGraphic.drawPreviewPanelLine = function (a, b) {
  this.previewPanelSVG.path("M " + a.x + " " + a.y + " L " + b.x + " " + b.y).attr({
    stroke: Nigsys.defaultObjectsColor,
    "stroke-width": 2
  })
};
FlatGraphic.drawLineBetweenPoints = function (a, b, c, d, g) {
  this.init();
  this.svg.path("M " + a + " " + b + " L " + c + " " + d).attr({
    stroke: g ? g : Nigsys.defaultObjectsColor,
    "stroke-width": 1
  })
};
FlatGraphic.drawIntermediateLine = function (a, b, c, d) {
  this.init();
  a = this.svg.path("M " + a + " " + b + " L " + c + " " + d);
  a.attr({stroke: Nigsys.defaultObjectsColor, "stroke-width": 2}).data("id", -1);
  Nigsys.browserIsIE7() && a.mouseover(function (a) {
    ImajnetZoom.imageWasDragged = !1
  })
};
FlatGraphic.drawConstraintLine = function (a, b) {
  this.constraintSVG.path(a).attr({stroke: b, "stroke-width": 1}).node.setAttribute("id", "constraintLine")
};
FlatGraphic.drawConstraint = function (a, b) {
  this.initConstraint();
  for (var c = ImajnetZoom.getCoordinatesFromRealAtCurrentZoom(a.point[0]), d = "M " + c.x + " " + c.y, g = 1; g < a.point.length - 1; g++)c = ImajnetZoom.getCoordinatesFromRealAtCurrentZoom(a.point[g]), d += " L " + c.x + " " + c.y;
  this.drawConstraintLine(d, this.getConstraintColor(a.precision))
};
FlatGraphic.highlightFeatureOnImage = function (a) {
  a && (a.getType() == ImajnetMap.MARKER_TYPE_POSITION || a.getType() == ImajnetMap.MARKER_TYPE_POLYLIGNE_POSITION || a.getType() == ImajnetMap.MARKER_TYPE_TARGET_POINT ? jQuery('div[id\x3d"photogrammetryItem_' + a.getId() + '"]').removeClass("opacity100").addClass("opacity60") : (a.getType() == ImajnetMap.FEATURE_TYPE_PROJECTION && jQuery('div[id\x3d"photogrammetryItem_' + a.getId() + '"]').removeClass("opacity100").addClass("opacity60"), null !== this.svg && this.svg.forEach(function (b) {
    var c =
      ImajnetMap.getFeatureWrapperById(b.data("object").id);
    c && c.getId() == a.getId() && b.attr("stroke-opacity", .4)
  })))
};
FlatGraphic.unHighlightFeatureOnImage = function (a) {
  a && (a.getType() == ImajnetMap.MARKER_TYPE_POSITION || a.getType() == ImajnetMap.MARKER_TYPE_POLYLIGNE_POSITION || a.getType() == ImajnetMap.MARKER_TYPE_TARGET_POINT ? jQuery('div[id\x3d"photogrammetryItem_' + a.getId() + '"]').removeClass("opacity60").addClass("opacity100") : (a.getType() == ImajnetMap.FEATURE_TYPE_PROJECTION && jQuery('div[id\x3d"photogrammetryItem_' + a.getId() + '"]').removeClass("opacity60").addClass("opacity100"), null !== this.svg && this.svg.forEach(function (b) {
    var c =
      ImajnetMap.getFeatureWrapperById(b.data("object").id);
    c && c.getId() == a.getId() && b.attr("stroke-opacity", 1)
  })))
};
FlatGraphic.drawLine = function (a, b, c) {
  this.init();
  var d = {
    stroke: c.strokeColor ? c.strokeColor : Nigsys.defaultObjectsColor,
    "stroke-width": c.strokeWidth || 0 == c.strokeWidth ? c.strokeWidth : 2
  };
  c.strokeDashstyle && (d["stroke-dasharray"] = "-");
  c.fillColor && (d.fill = c.fillColor);
  this.svg.path(a).attr(d).data("object", {id: b.getId()}).mouseover(function (a) {
    ImageControler.currentPhotogrammetry.onPhotogrammetryItemMouseOver(this.data("object").id, a, "imajnetImageLayer", null)
  }).mouseout(function () {
    ImageControler.currentPhotogrammetry.onPhotogrammetryItemMouseOut(this.data("object").id)
  }).mousedown(function () {
    ImageControler.currentPhotogrammetry.zoomToObject(this.data("object").id)
  }).dblclick(function (a) {
    ImageControler.currentPhotogrammetry.showComment(a,
      null, this.data("object").id, "popupImajnetControlsLayer", "textareaEditComment_")
  })
};
FlatGraphic.drawPolygon = function (a, b, c) {
  c.fillColor || (c.fillColor = Nigsys.defaultPolygonObjectsColor);
  this.drawLine(a, b, c)
};
FlatGraphic.clearConstraints = function () {
  null !== this.constraintSVG && (this.constraintSVG.remove(), this.constraintSVG = null)
};
FlatGraphic.clearItem = function (a) {
  jQuery("#photogrammetryItem" + a).parent().remove();
  jQuery("#photogrammetryItem" + a).remove();
  jQuery("#textareaEditComment_" + a).remove();
  jQuery("#imajnetPhotogrammetryLRS_" + a).remove();
  jQuery("#LRSClipboard_" + a).remove();
  jQuery("#imajnetClipboardItem_" + a).remove();
  jQuery("#measurementText_" + a).remove();
  if (this.svg) {
    var b = [];
    this.svg.forEach(function (c) {
      var d = c.data("object");
      d && d.id == a && b.push(c)
    });
    jQuery.each(b, function (a, b) {
      b.remove()
    })
  }
};
FlatPhotogrammetry.clearImageObjects = function () {
  jQuery(".photogrammetryItem").remove()
};
FlatGraphic.clearGraphicObjects = function () {
  jQuery(".measurementText").remove();
  if (this.svg) {
    var a = [];
    this.svg.forEach(function (b) {
      a.push(b)
    });
    jQuery.each(a, function (a, c) {
      c.remove()
    })
  }
};
FlatGraphic.hideAllLayersProjections = function () {
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
FlatGraphic.showAllLayersProjections = function () {
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
FlatGraphic.mouseMove = function (a) {
  if (a && ImageControler.currentGraphic.firstClickCoordinates) {
    ImageControler.currentGraphic.clearGraphicObjects();
    var b = ImajnetUI.imajnetImageContainer.offset();
    ImageControler.currentGraphic.lastClickCoordinates = {
      x: a.originalEvent.pageX - b.left,
      y: a.originalEvent.pageY - b.top
    };
    a = ImajnetZoom.getCoordinatesFromRealAtCurrentZoom(ImageControler.currentGraphic.firstClickCoordinates);
    ImageControler.currentGraphic.drawIntermediateLine(a.x, a.y, ImageControler.currentGraphic.lastClickCoordinates.x,
      ImageControler.currentGraphic.lastClickCoordinates.y)
  }
};
FlatGraphic.onDrawFeatureImage = function (a, b, c) {
  if (b.style) {
    var d = Nigsys.cloneObject(b.style), g = 0, f = !1;
    jQuery.each(d, function (a, c) {
      style = c;
      style.externalGraphic && (style.strokeWidth = 0, f = !0, delete style.graphicXOffset, delete style.graphicYOffset);
      if (style && "none" != style.display) {
        style.strokeWidth && (style.stroke = !0);
        if (!style.stroke || style.stroke && !style.strokeWidth) style.strokeWidth = 0;
        var d = (2 * parseFloat(style.pointRadius) + (style.strokeWidth ? parseFloat(style.strokeWidth) : 0)) / b.featureSize;
        d > g && (g = d)
      }
    });
    var k = this.createRenderer("photogrammetryItem_" + b.featureId, {
      width: b.featureSize,
      height: b.featureSize
    }, f && (Nigsys.browserIsWebkit() || Nigsys.browserIsIE9()) ? "Canvas" : "");
    k && jQuery.each(d, function (d, f) {
      var e = b.featureOL;
      if ("application/chart" == f.graphicFormat)return !0;
      if (f.label && c) {
        var n = jQuery('div[id\x3d"labelOnFeature_' + b.featureId + '"]');
        jQuery.each(f, function (a, b) {
          if ("label" != a && "fill" != a) {
            var c = a, d = b;
            "fontSize" == c ? (c = "font-size", d = "10px") : "fillColor" == c ? c = "color" : "fontWeight" == c ? c = "font-weight" :
              "fontStyle" == c && (c = "font-style");
            n.css(c, d)
          }
        });
        e = f.label.replace("${", "").replace("}", "").trim();
        n.attr("title", e);
        n.html(c[e]);
        return !0
      }
      e = new OpenLayersForProjection.Geometry.Point(0, 0);
      e = new OpenLayersForProjection.Feature.Vector(e, c, null);
      e.style = f;
      if (1 >= g) {
        e.style.pointRadius = parseFloat(e.style.pointRadius);
        e.style.strokeWidth = parseFloat(e.style.strokeWidth);
        var h = 2 * e.style.pointRadius / b.featureSize, l = 2 * e.style.strokeWidth / b.featureSize, p = (h + l) / g,
          m = 0 < l ? h / l : h;
        l > h && (m = l / h);
        h = (1 - g) * b.featureSize /
          (2 * (0 == e.style.strokeWidth ? m : m + 1));
        e.style.pointRadius = e.style.pointRadius + p * h * m - 2;
        isNaN(e.style.pointRadius) && (e.style.pointRadius = 0);
        e.style.strokeWidth && (e.style.strokeWidth += p * h)
      } else e.style.pointRadius /= g, e.style.strokeWidth && (e.style.strokeWidth /= g);
      ImageControler.currentGraphic.recalculateInCaseOfRotation(e.style);
      if (Nigsys.graphicIsFont(e.style.graphicName))return a.children(0).append(StyleEditor.drawRuleFontImageOnImajnetImage(e.style)), !0;
      k.drawFeature(e)
    })
  }
};
FlatGraphic.drawFeatureImage = function (a) {
  var b = jQuery('div[id\x3d"photogrammetryItem_' + a.featureId + '"]');
  if (a && 0 != b.length) this.onDrawFeatureImage(b, a, null)
};
FlatGraphic.recalculateWithRotation = function (a) {
  return Math.sqrt(2 * Math.pow(a, 2)) - a
};
FlatGraphic.recalculateInCaseOfRotation = function (a) {
  var b = a.rotation;
  b && 0 !== b % 90 && (b = parseInt(b) / 90, .5 < b && (b = 1 - b), a.pointRadius -= b * this.recalculateWithRotation(a.pointRadius) + 2, a.strokeWidth && (a.strokeWidth -= 2 * b * this.recalculateWithRotation(a.strokeWidth)))
};
FlatPhotogrammetry.appendMapMarker = function (a, b) {
  var c = b.z ? 40 - b.z / 2.5 : 40, c = 12 < c ? c : 12, d = void 0 === b.z ? 120 + b.z / 4 : 120,
    g = ImajnetZoom.getCoordinatesFromRealAtCurrentZoom(b);
  ImajnetUI.popupImajnetControlsLayer.append('\x3cdiv id\x3d"photogrammetryItem_' + a + '" class\x3d"photogrammetryItem" style\x3d"position: absolute; top: ' + Math.round(g.y - d) + "px; left: " + Math.round(g.x - c / 2) + 'px;" onclick\x3d"ImageControler.currentPhotogrammetry.onPhotogrammetryItemClick(\'' + a + "');\" onmouseover\x3d\"ImageControler.currentPhotogrammetry.onPhotogrammetryItemMouseOver('" +
    a + "',event,  'imajnetImageLayer', jQuery(this));\" onmouseout\x3d\"ImageControler.currentPhotogrammetry.onPhotogrammetryItemMouseOut('" + a + "', jQuery(this));\" ondblclick\x3d\"ImageControler.currentPhotogrammetry.showComment(event, jQuery(this), '" + a + "', 'popupImajnetControlsLayer', 'textareaEditComment_');\"\x3e\x3cimg src\x3d\"" + Imajnet.imajnetPath + "img/targetIconMarker16x36.png?" + Imajnet.version + '" width\x3d"' + c + '" height\x3d"' + d + '" /\x3e\x3c/div\x3e')
};
FlatGraphic.appendPinPoint = function (a, b) {
  if (b) {
    var c = b.getId(), d = ImajnetZoom.getCoordinatesFromRealAtCurrentZoom(a), g = 0, f = 0;
    b.getType() != ImajnetMap.FEATURE_TYPE_PROJECTION ? b.getType() == ImajnetMap.MARKER_TYPE_POSITION ? (f = a.z ? 32 - Math.round(a.z / 3) : 32, g = d.y - f) : (f = 5, g = d.y - 2 * f) : (f = 52, a.z && (f = a.z / 1.5 > f - 6 ? 6 : Math.round(f - a.z / 1.5)), g = d.y - f / 2);
    var k = '\x3cdiv id\x3d"photogrammetryItem_' + c + '" class\x3d"left" style\x3d"width: ' + f + "px; height: " + f + 'px;"\x3e' + (b.getType() != ImajnetMap.FEATURE_TYPE_PROJECTION ? '\x3cimg src\x3d"' +
          Imajnet.imajnetPath + "img/" + (b.getType() == ImajnetMap.MARKER_TYPE_POSITION ? "pinpoint" : "polyligne") + ".png?" + Imajnet.version + '" width\x3d"' + f + '" height\x3d"' + f + '" align\x3d"center" /\x3e' : "") + "\x3c/div\x3e",
      q = '\x3cdiv id\x3d"labelOnFeature_' + c + '" class\x3d"left" style\x3d"padding-top: ' + f / 3 + 'px;"\x3e\x3c/div\x3e';
    ImajnetUI.popupImajnetControlsLayer.append("\x3cdiv onmouseover\x3d\"ImageControler.currentPhotogrammetry.onPhotogrammetryItemMouseOver('" + b.id + "', event, 'imajnetImageLayer', jQuery(this));\" onmouseout\x3d\"ImageControler.currentPhotogrammetry.onPhotogrammetryItemMouseOut('" +
      b.id + "');\" onclick\x3d\"ImageControler.currentPhotogrammetry.onPhotogrammetryItemClick('" + b.id + '\');" class\x3d"photogrammetryItem" style\x3d"position: absolute; width: ' + f + "px; height: " + f + "px; top: " + Math.round(g) + "px; left: " + Math.round(d.x - f / 2) + "px; z-index: " + (b.getType() == ImajnetMap.FEATURE_TYPE_PROJECTION ? Math.round(2 * ImajnetSettings.imajnetSettings.projection - a.z) : 1) + ';"\x3e' + k + q + "\x3c/div\x3e");
    b.getType() != ImajnetMap.FEATURE_TYPE_PROJECTION ? jQuery("#photogrammetryItem_" + c).dblclick({id: c},
      function (a) {
        ImageControler.currentPhotogrammetry.showComment(a, jQuery(this), a.data.id, "popupImajnetControlsLayer", "textareaEditComment_")
      }) : (b.featureSize = f, b.zIndex = a.z, b.featureId = c, this.drawFeatureImage(b))
  } else console.error("Null featureWrapper: ")
};
FlatGraphic.createRenderer = function (a, b, c) {
  var d = null;
  c && (c = OpenLayersForProjection.Renderer[c]) && c.prototype.supported() && (d = new c(a));
  if (!d)for (var g = 0, f = this.renderers.length; g < f; ++g)if ((c = OpenLayersForProjection.Renderer[this.renderers[g]]) && c.prototype.supported()) {
    try {
      d = new c(a)
    } catch (k) {
      return null
    }
    break
  }
  d.map = {
    getResolution: function () {
      return 1
    }
  };
  b && (d.setSize(new OpenLayersForProjection.Size(b.width, b.height)), d.setExtent(new OpenLayersForProjection.Bounds(-b.width / 2, -b.height / 2, b.width / 2,
    b.height / 2), !0));
  return d
};
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
};
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
var ImajnetImageSwitcher = {
  imageSwitcherContainerId: "popupImageSwitcher",
  closestImagesAjaxRequest: null,
  orientedImages: null,
  orderedImages: [],
  orderedImagesLength: 0,
  mouseScrollIndex: 0,
  isMouseWheel: !1,
  ORDERED_IMAGE_WIDTH: 60,
  ORDERED_IMAGE_HEIGHT: 50,
  ORDERED_IMAGE_DATE_HEIGHT: 11,
  ORDERED_IMAGES_NO: 3,
  ARROWS_NO: 8,
  ORDERED_IMAGE_BIG_WIDTH: 0,
  ORDERED_IMAGE_BIG_HEIGHT: 0,
  ORDERED_IMAGE_DATE_BIG_HEIGHT: 21,
  isBigMode: !1,
  orderedImagesMainContainer: null,
  orderedImagesContainer: null,
  initialScrollLeft: 0,
  frontOrientedImages: null,
  dragArrowWidth: 81,
  dragLeftPosition: null,
  dragRightPosition: null,
  getImageItemHtml: function (a) {
    var b = "";
    switch (a) {
      case 0:
        b = "margin-top: 14px; margin-left: 11px;";
        break;
      case 1:
        b = "margin-top: 27px; margin-left: -9px;";
        break;
      case 2:
        b = "margin-top: 14px; margin-left: 5px;";
        break;
      case 3:
        b = "margin-top: -6px; margin-left: -9px;";
        break;
      case 4:
        b = "margin-top: 5px; margin-left: 11px;";
        break;
      case 5:
        b = "margin-top: -6px; margin-left: 29px;";
        break;
      case 6:
        b = "margin-top: 11px; margin-left: 14px;";
        break;
      case 7:
        b = "margin-top: 27px; margin-left: 27px;"
    }
    return '\x3cdiv class\x3d"imageSwitcherItem"\x3e' +
      (this.orientedImages[a] && this.orientedImages[a].length ? '\x3cimg id\x3d"orientedImage_' + a + '" onclick\x3d"ImajnetImageSwitcher.goToImage(' + a + ');" onmouseover\x3d"ImajnetImageSwitcher.imageMouseOver(' + a + ');" onmouseout\x3d"ImajnetImageSwitcher.imageMouseOut();" src\x3d"' + Imajnet.imajnetPath + "img/imageSwitcher/" + a + ".png?" + Imajnet.version + '" class\x3d"imajnetImageSwitcherImageItem" style\x3d"' + b + '" /\x3e' : "\x26nbsp;") + "\x3c/div\x3e"
  },
  getFrontOrientedImageIndex: function (a, b) {
    if (0 != a)return b;
    for (var d =
      0; d < this.orientedImages[a].length; d++)if (this.orientedImages[a][d].id == this.frontOrientedImages[b].id)return d
  },
  imageMouseScroll: function (a, b) {
    b = Nigsys.getDelta(a, b);
    var d = a.data;
    if (!(2 > ImajnetImageSwitcher.orientedImages[d].length)) {
      ImajnetImageSwitcher.isMouseWheel = !0;
      var c = ImajnetImageSwitcher.orientedImages[d].length;
      0 < b ? (ImajnetImageSwitcher.mouseScrollIndex++, ImajnetImageSwitcher.mouseScrollIndex >= c && (ImajnetImageSwitcher.mouseScrollIndex = 0)) : (ImajnetImageSwitcher.mouseScrollIndex--, 0 > ImajnetImageSwitcher.mouseScrollIndex &&
      (ImajnetImageSwitcher.mouseScrollIndex = c - 1));
      ImajnetImageSwitcher.loadImage(d, ImajnetImageSwitcher.getFrontOrientedImageIndex(d, ImajnetImageSwitcher.mouseScrollIndex))
    }
  },
  compareTimestamp: function (a, b) {
    return Nigsys.getDateObject(a.timestamp) - Nigsys.getDateObject(b.timestamp)
  },
  getOneImageFormEachSecquenceTraceTimestampOrdered: function () {
    if (!this.orientedImages || !this.orientedImages[0])return null;
    var a = Nigsys.cloneObject(ImajnetMap.currentPosition);
    a.imageIndex = 0;
    var b = Array(a);
    jQuery.each(this.orientedImages[0],
      function (a, c) {
        for (var e = !1, g = 0; g < b.length; g++)if (b[g].traceId == c.traceId) {
          e = !0;
          break
        }
        e || c.traceId == ImajnetMap.currentPosition.traceId || (e = Nigsys.cloneObject(c), e.imageIndex = a, b.push(e))
      });
    return b.sort(this.compareTimestamp)
  },
  loadImageForSlider: function (a, b) {
    var d = ImajnetAPI.buildImageURL(b), c = new Image;
    jQuery(c).bind("error", function (b) {
      a.parent().addClass("imajnetLayerNoImage")
    });
    jQuery(c).load(function () {
      a.attr("src", d)
    }).attr("src", d)
  },
  loadImage: function (a, b, d) {
    jQuery("body").css("cursor", "progress");
    var c = null, c = d && 0 == a && -1 == b ? ImajnetMap.currentPosition : this.orientedImages[a][b],
      e = ImajnetAPI.buildImageURL(c);
    a = new Image;
    jQuery(a).bind("error", function (a) {
      ImajnetUI.imageSwitcherImage.attr("src", "").hide();
      ImajnetUI.imageSwitcherImageContainer.is(":visible") && ImajnetUI.imageSwitcherImageContainer.addClass("imajnetLayerNoImage");
      ImajnetMap.currentPosition && Imajnet.addImageDate(ImajnetMap.currentPosition.timestamp);
      jQuery("body").css("cursor", "default")
    });
    ImajnetMap.hideImageSwitcher();
    ImajnetMap.setOrientationMarker(c,
      ImajnetMap.imajboxOrientedImagesDimension, "#FF0000", -3);
    ImajnetUI.imageSwitcherImage.show();
    ImajnetUI.imageSwitcherImageContainer.show();
    jQuery(a).load(function () {
      ImajnetUI.imageSwitcherImage.attr("src", e);
      c && Imajnet.addImageDate(c.timestamp);
      jQuery("body").css("cursor", "default")
    }).attr("src", e)
  },
  goToImage: function (a) {
    ImajnetZoom.left = -1;
    var b = this.getFrontOrientedImageIndex(a, this.mouseScrollIndex);
    this.orientedImages[a][b] && (Nigsys.showLoading(ImajnetUI.imageContainer), ImajnetAPI.setImajnetImage({position: this.orientedImages[a][b]}))
  },
  goToOrderedImage: function (a) {
    ImajnetZoom.left = -1;
    ImajnetImageSwitcher.hideBigMode();
    ImajnetImageSwitcher.orderedImagesMainContainer.hide();
    ImajnetImageSwitcher.isBigMode = !1;
    this.orderedImages[a] && (Nigsys.showLoading(ImajnetUI.imageContainer), ImajnetAPI.setImajnetImage({position: this.orderedImages[a]}))
  },
  imageMouseOver: function (a) {
    this.mouseScrollIndex || this.loadImage(a, ImajnetImageSwitcher.getFrontOrientedImageIndex(a, 0))
  },
  imageMouseOut: function () {
    this.isMouseWheel = !1;
    this.mouseScrollIndex = 0;
    ImajnetUI.imageSwitcherImage.attr("src",
      "").hide();
    ImajnetUI.imageSwitcherImageContainer.hide();
    ImajnetMap.currentPosition && Imajnet.addImageDate(ImajnetMap.currentPosition.timestamp);
    ImajnetMap.hideImageSwitcher()
  },
  getOrderedImageHtml: function (a, b, d, c) {
    return '\x3cdiv class\x3d"left imajnetImageSwitcherOrderedImageItem" style\x3d"width: ' + ImajnetImageSwitcher.ORDERED_IMAGE_WIDTH + "px; height: " + (ImajnetImageSwitcher.ORDERED_IMAGE_HEIGHT + ImajnetImageSwitcher.ORDERED_IMAGE_DATE_HEIGHT + 2) + 'px;"\x3e\x3cdiv class\x3d"imageSwitcherImageItemContainer' +
      (-2 < a ? " imajnetLoading" : "") + '" onmouseout\x3d"ImajnetImageSwitcher.imageMouseOut();" style\x3d"height: ' + ImajnetImageSwitcher.ORDERED_IMAGE_HEIGHT + 'px;"\x3e\x3cimg class\x3d"imageSwitcherSmall_' + c + ' imajnetImageSwitcherOrderedImageItemImage" onclick\x3d"ImajnetImageSwitcher.goToOrderedImage(' + c + ');" onmouseover\x3d"ImajnetImageSwitcher.orderedImageMouseOver(' + a + ', jQuery(this));" style\x3d"width: ' + ImajnetImageSwitcher.ORDERED_IMAGE_WIDTH + "px; height: " + ImajnetImageSwitcher.ORDERED_IMAGE_HEIGHT + 'px;" src\x3d"' +
      (-2 == a ? b : "") + '" /\x3e\x3c/div\x3e\x3cdiv id\x3d"orderedImageDate_' + a + '" class\x3d"orderedImageDate" style\x3d"width: ' + ImajnetImageSwitcher.ORDERED_IMAGE_WIDTH + "px; height: " + ImajnetImageSwitcher.ORDERED_IMAGE_DATE_HEIGHT + "px; font-size: " + (ImajnetImageSwitcher.ORDERED_IMAGE_DATE_HEIGHT - 1) + 'px;"\x3e' + d + "\x3c/div\x3e\x3c/div\x3e"
  },
  applySmallStyleToOrderedImages: function () {
    jQuery("#scrollOrderedImagesLeft").width(9).height(ImajnetImageSwitcher.ORDERED_IMAGE_HEIGHT);
    jQuery(".scrollOrderedImagesLeftImage").width(9).height(ImajnetImageSwitcher.ORDERED_IMAGE_HEIGHT).css("background-image",
      'url("' + Imajnet.imajnetPath + "img/imageIcons/imageSwitcherLeftArrow.png?" + Imajnet.version + '")').css("margin-top", ImajnetImageSwitcher.ORDERED_IMAGE_HEIGHT / 2 - 25);
    jQuery(".scrollOrderedImagesRight").width(9).height(ImajnetImageSwitcher.ORDERED_IMAGE_HEIGHT);
    jQuery(".scrollOrderedImagesRightImage").width(9).height(ImajnetImageSwitcher.ORDERED_IMAGE_HEIGHT).css("background-image", 'url("' + Imajnet.imajnetPath + "img/imageIcons/imageSwitcherRightArrow.png?" + Imajnet.version + '")').css("margin-top", ImajnetImageSwitcher.ORDERED_IMAGE_HEIGHT /
      2 - 25);
    var a = 1;
    Nigsys.browserIsIE8() ? a = 2 : Nigsys.browserIsWebkit() && (a = 4);
    jQuery(".imajnetImageSwitcherOrderedImagesInnerContainer").width(ImajnetImageSwitcher.ORDERED_IMAGES_NO * ImajnetImageSwitcher.ORDERED_IMAGE_WIDTH + 2).height(ImajnetImageSwitcher.ORDERED_IMAGE_HEIGHT + ImajnetImageSwitcher.ORDERED_IMAGE_DATE_HEIGHT + a).css("overflow-x", "hidden");
    ImajnetImageSwitcher.orderedImagesMainContainer.width(ImajnetImageSwitcher.ORDERED_IMAGES_NO * ImajnetImageSwitcher.ORDERED_IMAGE_WIDTH + 20).height(ImajnetImageSwitcher.ORDERED_IMAGE_HEIGHT +
      ImajnetImageSwitcher.ORDERED_IMAGE_DATE_HEIGHT + 2);
    ImajnetImageSwitcher.orderedImagesContainer.height(ImajnetImageSwitcher.ORDERED_IMAGE_HEIGHT + ImajnetImageSwitcher.ORDERED_IMAGE_DATE_HEIGHT + 2);
    jQuery(".orderedImageDate").attr("title", jQuery.imajnet.image.switcher.centerButtonTitle)
  },
  centerImageMouseOver: function () {
    ImajnetImageSwitcher.orderedImagesContainer.html("");
    jQuery(".scrollOrderedImagesLeftImage").removeClass("opacity0");
    jQuery(".scrollOrderedImagesRightImage").removeClass("opacity0");
    var a =
      0;
    ImajnetImageSwitcher.initialScrollLeft = 0;
    this.orderedImagesLength = this.orderedImages.length;
    jQuery.each(this.orderedImages, function (b, d) {
      var c = d.imageIndex;
      d.traceId == ImajnetMap.currentPosition.traceId && (a = b, c = -1, 0 == b && ImajnetImageSwitcher.orderedImagesLength < ImajnetImageSwitcher.ORDERED_IMAGES_NO && (ImajnetImageSwitcher.orderedImagesContainer.append(ImajnetImageSwitcher.getOrderedImageHtml(-2, Imajnet.imajnetPath + "img/imageIcons/imageSwitcherNoImageLeft.png?" + Imajnet.version, "")), ImajnetImageSwitcher.orderedImagesLength++));
      ImajnetImageSwitcher.orderedImagesContainer.append(ImajnetImageSwitcher.getOrderedImageHtml(c, "", d.timestamp, b));
      var e = ImajnetAPI.buildImageURL(d), c = new Image;
      jQuery(c).bind("error", {id: b, url: e}, function (a) {
        jQuery(".imageSwitcherSmall_" + a.data.id).parent().addClass("imajnetSwitcherNoImage")
      });
      jQuery(c).load({id: b}, function (a) {
        a = jQuery(".imageSwitcherSmall_" + a.data.id);
        a.attr("src", e);
        a.parent().removeClass("imajnetLayerNoImage")
      }).attr("src", e);
      b == ImajnetImageSwitcher.orderedImages.length - 1 && ImajnetImageSwitcher.orderedImagesLength <
      ImajnetImageSwitcher.ORDERED_IMAGES_NO && (ImajnetImageSwitcher.orderedImagesContainer.append(ImajnetImageSwitcher.getOrderedImageHtml(-2, Imajnet.imajnetPath + "img/imageIcons/imageSwitcherNoImageRight.png?" + Imajnet.version, "")), ImajnetImageSwitcher.orderedImagesLength++)
    });
    ImajnetImageSwitcher.applySmallStyleToOrderedImages();
    (Nigsys.browserIsWebkit() || Nigsys.browserIsIE8()) && jQuery(".orderedImageDate").css("padding-top", "1px");
    jQuery(".orderedImageDate").bind("click", function (a) {
      ImajnetImageSwitcher.centerImageClick(a)
    });
    ImajnetImageSwitcher.orderedImagesContainer.width(this.orderedImagesLength * this.ORDERED_IMAGE_WIDTH);
    a <= (this.ORDERED_IMAGES_NO + 1) / 2 ? jQuery(".scrollOrderedImagesLeftImage").addClass("opacity0") : ImajnetImageSwitcher.initialScrollLeft = (a - (this.ORDERED_IMAGES_NO - 1)) * this.ORDERED_IMAGE_WIDTH;
    this.orderedImagesLength - ImajnetImageSwitcher.initialScrollLeft / this.ORDERED_IMAGE_WIDTH <= this.ORDERED_IMAGES_NO && jQuery(".scrollOrderedImagesRightImage").addClass("opacity0");
    ImajnetImageSwitcher.orderedImagesMainContainer.show();
    jQuery(".imajnetImageSwitcherOrderedImagesInnerContainer").scrollLeft(ImajnetImageSwitcher.initialScrollLeft)
  },
  centerImageMouseOut: function (a) {
    ImajnetImageSwitcher.orderedImagesMainContainer.hide()
  },
  applyBigStyleToOrderedImages: function () {
    jQuery("#scrollOrderedImagesLeft").width(50).height(ImajnetImageSwitcher.ORDERED_IMAGE_BIG_HEIGHT);
    jQuery(".scrollOrderedImagesLeftImage").width(50).height(50).css("background-image", 'url("' + Imajnet.imajnetPath + "img/imageIcons/imageSwitcherLeftArrow.png?" + Imajnet.version +
      '")').css("margin-top", ImajnetImageSwitcher.ORDERED_IMAGE_BIG_HEIGHT / 2 - 25);
    jQuery(".scrollOrderedImagesRight").width(50).height(ImajnetImageSwitcher.ORDERED_IMAGE_BIG_HEIGHT);
    jQuery(".scrollOrderedImagesRightImage").width(50).height(50).css("background-image", 'url("' + Imajnet.imajnetPath + "img/imageIcons/imageSwitcherRightArrow.png?" + Imajnet.version + '")').css("margin-top", ImajnetImageSwitcher.ORDERED_IMAGE_BIG_HEIGHT / 2 - 25);
    jQuery.each(jQuery(".imageSwitcherImageItemContainer"), function (a, b) {
      var e = jQuery(b);
      e.height(ImajnetImageSwitcher.ORDERED_IMAGE_BIG_HEIGHT);
      e.hasClass("imajnetSwitcherNoImage") && e.removeClass("imajnetSwitcherNoImage").addClass("imajnetLayerNoImage")
    });
    jQuery(".imajnetImageSwitcherOrderedImageItemImage").width(ImajnetImageSwitcher.ORDERED_IMAGE_BIG_WIDTH).height(ImajnetImageSwitcher.ORDERED_IMAGE_BIG_HEIGHT);
    var a = jQuery(".orderedImageDate");
    a.removeAttr("title");
    a.width(ImajnetImageSwitcher.ORDERED_IMAGE_BIG_WIDTH).height(ImajnetImageSwitcher.ORDERED_IMAGE_DATE_BIG_HEIGHT).css("font-size",
      ImajnetImageSwitcher.ORDERED_IMAGE_DATE_BIG_HEIGHT - 1);
    for (var b = 0; b < a.length; b++)a[b].innerHTML = Nigsys.formatImajnetImageDate(a[b].innerHTML);
    jQuery(".imajnetImageSwitcherOrderedImageItem").width(ImajnetImageSwitcher.ORDERED_IMAGE_BIG_WIDTH).height(ImajnetImageSwitcher.ORDERED_IMAGE_BIG_HEIGHT + ImajnetImageSwitcher.ORDERED_IMAGE_DATE_BIG_HEIGHT + 2);
    ImajnetImageSwitcher.orderedImagesContainer.width(this.orderedImagesLength * this.ORDERED_IMAGE_BIG_WIDTH).height(ImajnetImageSwitcher.ORDERED_IMAGE_BIG_HEIGHT +
      ImajnetImageSwitcher.ORDERED_IMAGE_DATE_BIG_HEIGHT + 2);
    jQuery(".imajnetImageSwitcherOrderedImagesInnerContainer").width(ImajnetImageSwitcher.ORDERED_IMAGES_NO * ImajnetImageSwitcher.ORDERED_IMAGE_BIG_WIDTH + 2).height(ImajnetImageSwitcher.ORDERED_IMAGE_BIG_HEIGHT + ImajnetImageSwitcher.ORDERED_IMAGE_DATE_BIG_HEIGHT + 4);
    ImajnetImageSwitcher.orderedImagesMainContainer.width(ImajnetImageSwitcher.ORDERED_IMAGES_NO * ImajnetImageSwitcher.ORDERED_IMAGE_BIG_WIDTH + 60).height(ImajnetImageSwitcher.ORDERED_IMAGE_BIG_HEIGHT +
      ImajnetImageSwitcher.ORDERED_IMAGE_DATE_BIG_HEIGHT + 2);
    jQuery(".imajnetImageSwitcherOrderedImagesInnerContainer").height(ImajnetImageSwitcher.ORDERED_IMAGE_BIG_HEIGHT + ImajnetImageSwitcher.ORDERED_IMAGE_DATE_BIG_HEIGHT + 16).css("overflow-x", "auto")
  },
  hideBigMode: function () {
    jQuery.colorbox.close()
  },
  onCenterImagesScroll: function (a) {
    0 >= jQuery(".imajnetImageSwitcherOrderedImagesInnerContainer").scrollLeft() ? jQuery(".scrollOrderedImagesLeftImage").addClass("opacity0") : jQuery(".scrollOrderedImagesLeftImage").removeClass("opacity0");
    jQuery(".imajnetImageSwitcherOrderedImagesInnerContainer").scrollLeft() == ImajnetImageSwitcher.orderedImagesContainer.width() - ImajnetImageSwitcher.ORDERED_IMAGES_NO * ImajnetImageSwitcher.ORDERED_IMAGE_BIG_WIDTH ? jQuery(".scrollOrderedImagesRightImage").addClass("opacity0") : jQuery(".scrollOrderedImagesRightImage").removeClass("opacity0")
  },
  centerImageClick: function (a) {
    a.relatedTarget || (ImajnetImageSwitcher.isBigMode = !0, ImajnetImageSwitcher.applyBigStyleToOrderedImages(), jQuery.colorbox({
      html: ImajnetImageSwitcher.orderedImagesMainContainer.html(),
      open: !0, onLoad: function () {
        jQuery("#cboxClose").remove();
        jQuery("#cboxBottomLeft").height(9).css("background-position", "0 -66px");
        jQuery("#cboxBottomCenter").height(9);
        jQuery("#cboxBottomRight").height(9).css("background-position", "-36px -66px")
      }, onComplete: function () {
        ImajnetImageSwitcher.orderedImagesMainContainer.show();
        jQuery(".imajnetImageSwitcherOrderedImagesInnerContainer").scrollLeft(ImajnetImageSwitcher.initialScrollLeft / ImajnetImageSwitcher.ORDERED_IMAGE_WIDTH * ImajnetImageSwitcher.ORDERED_IMAGE_BIG_WIDTH)
      },
      onCleanup: function () {
        ImajnetImageSwitcher.orderedImagesMainContainer.hide();
        jQuery("#cboxLoadedContent").html("");
        ImajnetImageSwitcher.isBigMode = !1
      }
    }))
  },
  orderedImageMouseOver: function (a, b) {
    jQuery(".imajnetImageSwitcherOrderedImageItemImage").removeClass("opacity80");
    jQuery(".imajnetImageSwitcherOrderedImageItemImage").removeClass("selectedImageBorder");
    jQuery(".orderedImageDate").css("font-weight", "normal");
    jQuery(".orderedImageDate").removeClass("orderedImageDateBorder");
    b.parent().removeClass("imajnetLoading");
    b.addClass("opacity80");
    b.addClass("selectedImageBorder");
    jQuery("#orderedImageDate_" + a).css("font-weight", "bold");
    jQuery("#orderedImageDate_" + a).addClass("orderedImageDateBorder");
    -1 > a || (ImajnetImageSwitcher.orderedImagesMainContainer.show(), this.loadImage(0, a, !0))
  },
  orderedImagesMouseOut: function (a, b) {
    ImajnetImageSwitcher.orderedImagesMainContainer.hide()
  },
  getImageWidth: function () {
    return ImajnetImageSwitcher.isBigMode ? ImajnetImageSwitcher.ORDERED_IMAGE_BIG_WIDTH : ImajnetImageSwitcher.ORDERED_IMAGE_WIDTH
  },
  scrollOrderedImages: function (a) {
    var b = ImajnetImageSwitcher.getImageWidth();
    if (!(ImajnetImageSwitcher.orderedImagesContainer.width() <= ImajnetImageSwitcher.ORDERED_IMAGES_NO * b)) {
      var d = jQuery(".imajnetImageSwitcherOrderedImagesInnerContainer"), c = d.scrollLeft();
      a == ImajnetAPI.PREVIOUS ? (c -= b, 0 >= c && jQuery(".scrollOrderedImagesLeftImage").addClass("opacity0"), jQuery(".scrollOrderedImagesRightImage").removeClass("opacity0")) : (c += b, c >= ImajnetImageSwitcher.orderedImagesContainer.width() - ImajnetImageSwitcher.ORDERED_IMAGES_NO *
      b && jQuery(".scrollOrderedImagesRightImage").addClass("opacity0"), jQuery(".scrollOrderedImagesLeftImage").removeClass("opacity0"));
      d.scrollLeft(c)
    }
  },
  compareImageId: function (a, b) {
    return parseInt(a.id) - parseInt(b.id)
  },
  initSliderImagesDimension: function () {
    ImajnetUI.setSlidersWidth(ImajnetUI.imajnetImageContainerSize.width);
    ImajnetUI.setSliderDraggableContainment()
  },
  dragSliderLeft: function () {
    ImajnetImageSwitcher.dragLeftPosition && (ImajnetZoom.left = -1, ImajnetUI.imajnetImageSliderInnerContainer.css("left",
      0), Nigsys.showLoading(ImajnetUI.imageContainer), ImajnetAPI.setImajnetImage({position: ImajnetImageSwitcher.dragLeftPosition}))
  },
  dragSliderRight: function () {
    ImajnetImageSwitcher.dragRightPosition && (ImajnetZoom.left = -1, ImajnetUI.imajnetImageSliderInnerContainer.css("left", -2 * (ImajnetUI.imageContainer.width() + ImajnetImageSwitcher.dragArrowWidth)), Nigsys.showLoading(ImajnetUI.imageContainer), ImajnetAPI.setImajnetImage({position: ImajnetImageSwitcher.dragRightPosition}))
  },
  getImageSwitcherHtml: function (a) {
    if (ImajnetMap.currentPosition) {
      ImajnetImageSwitcher.orientedImages =
        [];
      ImajnetImageSwitcher.frontOrientedImages = [];
      var b = [], d = [], c = null, e = null, g = null, k = null;
      jQuery.each(a, function (a, f) {
        if (f.id != ImajnetMap.currentPosition.id) {
          var h = ImageControler.currentSurveyTrace.calculateOrientationIndex(ImajnetMap.currentPosition.orientation.yaw, f.orientation.yaw);
          ImajnetImageSwitcher.orientedImages[h] || (ImajnetImageSwitcher.orientedImages[h] = []);
          ImajnetImageSwitcher.orientedImages[h].push(f);
          0 == h ? f.traceId == ImajnetMap.currentPosition.traceId ? parseInt(f.id) < parseInt(ImajnetMap.currentPosition.id) ?
            b.push(f) : ImajnetImageSwitcher.frontOrientedImages.push(f) : d.push(f) : 1 != h || g ? 2 != h || k ? 6 != h || e ? 7 != h || c || (c = f) : e = f : k = f : g = f
        }
      });
      c ? (ImajnetImageSwitcher.dragLeftPosition = c, jQuery("#imajnetLayerLeftArrowImage").attr("src", Imajnet.imajnetPath + "img/imageSwitcher/7.png?" + Imajnet.version)) : (ImajnetImageSwitcher.dragLeftPosition = e, jQuery("#imajnetLayerLeftArrowImage").attr("src", Imajnet.imajnetPath + "img/imageSwitcher/6.png?" + Imajnet.version));
      g ? (ImajnetImageSwitcher.dragRightPosition = g, jQuery("#imajnetLayerRightArrowImage").attr("src",
        Imajnet.imajnetPath + "img/imageSwitcher/1.png?" + Imajnet.version)) : (ImajnetImageSwitcher.dragRightPosition = k, jQuery("#imajnetLayerRightArrowImage").attr("src", Imajnet.imajnetPath + "img/imageSwitcher/2.png?" + Imajnet.version));
      ImajnetImageSwitcher.initSliderImagesDimension();
      ImajnetImageSwitcher.frontOrientedImages.sort(ImajnetImageSwitcher.compareImageId);
      for (a = 0; a < d.length; a++)ImajnetImageSwitcher.frontOrientedImages.push(d[a]);
      b.sort(ImajnetImageSwitcher.compareImageId);
      for (a = 0; a < b.length; a++)ImajnetImageSwitcher.frontOrientedImages.push(b[a]);
      a = "";
      0 < this.orientedImages.length && (a += this.getImageItemHtml(7) + this.getImageItemHtml(0) + this.getImageItemHtml(1) + this.getImageItemHtml(6) + '\x3cdiv class\x3d"imageSwitcherItem"\x3e\x3cimg id\x3d"imajnetImageSwitcherCenterImage" src\x3d"' + Imajnet.imajnetPath + "img/imageSwitcher/arrowsPointOfView.png?" + Imajnet.version + '" width\x3d"63" height\x3d"42" class\x3d"opacity30" /\x3e\x3c/div\x3e' + this.getImageItemHtml(2) + this.getImageItemHtml(5) + this.getImageItemHtml(4) + this.getImageItemHtml(3));
      return a + '\x3cdiv class\x3d"clearLeft"\x3e\x3c/div\x3e'
    }
  },
  onClosestImagesReceived: function (a) {
    ImajnetUI.disableDraggable(ImajnetUI.imajnetImageSliderInnerContainer);
    ImajnetUI.enableImageDrag();
    if (a && (a = JSON.parse(a), a.parameter && a.positions && ImajnetMap.currentPosition && a.parameter.coordinates.id == ImajnetMap.currentPosition.id)) {
      jQuery("#imajnetImageSwitcher").html(ImajnetImageSwitcher.getImageSwitcherHtml(a.positions));
      for (a = 0; 8 > a; a++)jQuery("#orientedImage_" + a).on("mousewheel DOMMouseScroll", a, function (a, d) {
        ImajnetImageSwitcher.imageMouseScroll(a, d)
      });
      ImajnetImageSwitcher.orderedImages = ImajnetImageSwitcher.getOneImageFormEachSecquenceTraceTimestampOrdered();
      ImajnetImageSwitcher.orientedImages[0] && ImajnetImageSwitcher.orderedImages && 1 < ImajnetImageSwitcher.orderedImages.length ? jQuery("#imajnetImageSwitcherCenterImage").bind({
        mouseover: function (a) {
          a.relatedTarget && Nigsys.stringContains(a.relatedTarget.className, "orderedImageDate") || ImajnetImageSwitcher.centerImageMouseOver()
        }, mouseout: function (a) {
          a.relatedTarget && Nigsys.stringContains(a.relatedTarget.className,
            "orderedImageDate") || ImajnetImageSwitcher.centerImageMouseOut()
        }, click: ImajnetImageSwitcher.centerImageClick
      }).prop("title", jQuery.imajnet.image.switcher.centerButtonTitle).removeClass("opacity30") : jQuery("#imajnetImageSwitcherCenterImage").prop("title", ImajnetUI.imageDate);
      ImajnetUI.imageContainer.append('\x3cdiv id\x3d"imajnetImageSwitcherOrderedImagesContainer" style\x3d"width: ' + (ImajnetImageSwitcher.ORDERED_IMAGES_NO * ImajnetImageSwitcher.ORDERED_IMAGE_WIDTH + 20) + "px; height: " + (ImajnetImageSwitcher.ORDERED_IMAGE_HEIGHT +
        ImajnetImageSwitcher.ORDERED_IMAGE_DATE_HEIGHT + 2) + 'px;"\x3e\x3cdiv id\x3d"scrollOrderedImagesLeft" class\x3d"left" onmouseout\x3d"ImajnetImageSwitcher.orderedImagesMainContainer.hide();"\x3e\x3cdiv class\x3d"scrollOrderedImagesLeftImage" onclick\x3d"ImajnetImageSwitcher.scrollOrderedImages(\'' + ImajnetAPI.PREVIOUS + '\');" onmouseover\x3d"ImajnetImageSwitcher.scrollButtonMouseOver(jQuery(this));" onmouseout\x3d"ImajnetImageSwitcher.scrollButtonMouseOut(jQuery(this));"\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"imajnetImageSwitcherOrderedImagesInnerContainer" style\x3d"height: ' +
        (ImajnetImageSwitcher.ORDERED_IMAGE_HEIGHT + ImajnetImageSwitcher.ORDERED_IMAGE_DATE_HEIGHT + 1) + 'px;"\x3e\x3cdiv id\x3d"imajnetImageSwitcherOrderedImages" style\x3d"width: ' + (ImajnetImageSwitcher.ORDERED_IMAGES_NO * ImajnetImageSwitcher.ORDERED_IMAGE_WIDTH - 2) + "px; height: " + (ImajnetImageSwitcher.ORDERED_IMAGE_HEIGHT + ImajnetImageSwitcher.ORDERED_IMAGE_DATE_HEIGHT + 2) + 'px"\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv id\x3d"scrollOrderedImagesRight" class\x3d"left" onmouseout\x3d"ImajnetImageSwitcher.orderedImagesMainContainer.hide();"\x3e\x3cdiv class\x3d"scrollOrderedImagesRightImage" onclick\x3d"ImajnetImageSwitcher.scrollOrderedImages(\'' +
        this.NEXT + '\');" onmouseover\x3d"ImajnetImageSwitcher.scrollButtonMouseOver(jQuery(this));" onmouseout\x3d"ImajnetImageSwitcher.scrollButtonMouseOut(jQuery(this));"\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"clearLeft"\x3e\x3c/div\x3e\x3c/div\x3e');
      ImajnetImageSwitcher.orderedImagesMainContainer = jQuery("#imajnetImageSwitcherOrderedImagesContainer");
      ImajnetImageSwitcher.orderedImagesContainer = jQuery("#imajnetImageSwitcherOrderedImages");
      ImajnetImageSwitcher.orderedImagesMainContainer.mouseout(function (a) {
        a.relatedTarget &&
        Nigsys.stringContains(a.relatedTarget.className, "imageSwitcherItem") && ImajnetImageSwitcher.orderedImagesMouseOut(a)
      });
      (ImajnetImageSwitcher.dragLeftPosition || ImajnetImageSwitcher.dragRightPosition) && ImajnetUI.enableDraggable(ImajnetUI.imajnetImageSliderInnerContainer);
      Nigsys.getElementWidth(ImajnetUI.imajnetImage[0]) == Nigsys.getElementWidth(ImajnetUI.imajnetImageContainer[0]) && ImajnetUI.disableImageDrag()
    }
  },
  onClosestImagesError: function () {
    ImajnetImageSwitcher.initSliderImagesDimension();
    ImajnetUI.disableDraggable(ImajnetUI.imajnetImageSliderInnerContainer);
    ImajnetUI.enableImageDrag()
  },
  loadImageSwitcher: function (a) {
    ImajnetAPI.mustAbortRequests && this.closestImagesAjaxRequest && this.closestImagesAjaxRequest.abort();
    a = {
      coordinates: a,
      radius: ImajnetSettings.imajnetSettings.imageSwitcher,
      limit: ImajnetSettings.limitImageSwitcher,
      timeframe: ImajnetTimeframe.getTimeframe(),
      sequenceType: Imajnet.sequenceType
    };
    this.closestImagesAjaxRequest = ImajnetAPI.doImajnetRequest("GET", "/api/positions/proximity/", a, this.onClosestImagesReceived, this.onClosestImagesError, null, null,
      !0, null, null)
  },
  clearSlider: function () {
    ImajnetUI.sliderLeftImage && (ImajnetUI.sliderLeftImage.remove(), ImajnetUI.sliderLeftImage = null);
    ImajnetUI.sliderRightImage && (ImajnetUI.sliderRightImage.remove(), ImajnetUI.sliderRightImage = null);
    ImajnetImageSwitcher.dragLeftPosition = null;
    ImajnetImageSwitcher.dragRightPosition = null
  },
  clearImageSwitcher: function () {
    ImajnetImageSwitcher.orientedImages = [];
    ImajnetImageSwitcher.frontOrientedImages = [];
    jQuery("#imajnetImageSwitcher").html("");
    ImajnetUI.imageSwitcherImage &&
    ImajnetUI.imageSwitcherImage.attr("src", "");
    ImajnetUI.imageSwitcherImageContainer && (ImajnetUI.imageSwitcherImageContainer.hide(), ImajnetUI.imageSwitcherImageContainer.removeClass("imajnetLayerNoImage"));
    ImajnetImageSwitcher.clearSlider();
    this.clearFrontOrderedImages()
  },
  clearFrontOrderedImages: function () {
    ImajnetImageSwitcher.orderedImagesMainContainer && ImajnetImageSwitcher.orderedImagesMainContainer.remove()
  },
  scrollButtonMouseOver: function (a) {
    a.parent().addClass("opacity80")
  },
  scrollButtonMouseOut: function (a) {
    a.parent().removeClass("opacity80")
  },
  show: function () {
    ImajnetMap.currentPosition ? jQuery("#imajnetImageSwitcher").show() : this.hide()
  },
  hide: function () {
    jQuery("#imajnetImageSwitcher").hide();
    ImajnetUI.imageSwitcherImageContainer.removeClass("imajnetLayerNoImage");
    ImajnetUI.imageSwitcherImage.hide();
    ImajnetUI.imageSwitcherImageContainer.hide();
    ImajnetMap.currentPosition && Imajnet.addImageDate(ImajnetMap.currentPosition.timestamp);
    ImajnetMap.hideImageSwitcher()
  },
  rotateImageSwitcher: function (a) {
    "undefined" != typeof a && jQuery("#imajnetImageSwitcher").css({
      "-webkit-transform": "rotate(" +
      a + "deg)",
      "-moz-transform": "rotate(" + a + "deg)",
      "-ms-transform": "rotate(" + a + "deg)",
      transform: "rotate(" + a + "deg)"
    })
  }
};
var Base64 = {
  _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\x3d", encode: function (c) {
    var a = "", d, b, f, g, h, e, k = 0;
    for (c = Base64._utf8_encode(c); k < c.length;)d = c.charCodeAt(k++), b = c.charCodeAt(k++), f = c.charCodeAt(k++), g = d >> 2, d = (d & 3) << 4 | b >> 4, h = (b & 15) << 2 | f >> 6, e = f & 63, isNaN(b) ? h = e = 64 : isNaN(f) && (e = 64), a = a + this._keyStr.charAt(g) + this._keyStr.charAt(d) + this._keyStr.charAt(h) + this._keyStr.charAt(e);
    return a
  }, decode: function (c) {
    var a = "", d, b, f, g, h, e = 0;
    for (c = c.replace(/[^A-Za-z0-9\+\/\=]/g,
      ""); e < c.length;)d = this._keyStr.indexOf(c.charAt(e++)), b = this._keyStr.indexOf(c.charAt(e++)), g = this._keyStr.indexOf(c.charAt(e++)), h = this._keyStr.indexOf(c.charAt(e++)), d = d << 2 | b >> 4, b = (b & 15) << 4 | g >> 2, f = (g & 3) << 6 | h, a += String.fromCharCode(d), 64 != g && (a += String.fromCharCode(b)), 64 != h && (a += String.fromCharCode(f));
    return a = Base64._utf8_decode(a)
  }, _utf8_encode: function (c) {
    c = c.replace(/\r\n/g, "\n");
    for (var a = "", d = 0; d < c.length; d++) {
      var b = c.charCodeAt(d);
      128 > b ? a += String.fromCharCode(b) : (127 < b && 2048 > b ? a += String.fromCharCode(b >>
        6 | 192) : (a += String.fromCharCode(b >> 12 | 224), a += String.fromCharCode(b >> 6 & 63 | 128)), a += String.fromCharCode(b & 63 | 128))
    }
    return a
  }, _utf8_decode: function (c) {
    for (var a = "", d = 0, b = c1 = c2 = 0; d < c.length;)b = c.charCodeAt(d), 128 > b ? (a += String.fromCharCode(b), d++) : 191 < b && 224 > b ? (c2 = c.charCodeAt(d + 1), a += String.fromCharCode((b & 31) << 6 | c2 & 63), d += 2) : (c2 = c.charCodeAt(d + 1), c3 = c.charCodeAt(d + 2), a += String.fromCharCode((b & 15) << 12 | (c2 & 63) << 6 | c3 & 63), d += 3);
    return a
  }
};
var ImajnetNews = {
  newsData: null, compareDates: function (a, b) {
    return ImajnetNews.formatServerDate(a.created) < ImajnetNews.formatServerDate(b.created) ? -1 : ImajnetNews.formatServerDate(a.created) > ImajnetNews.formatServerDate(b.created) ? 1 : 0
  }, showTooltip: function (a, b) {
    for (var c = 0; c < ImajnetNews.newsData.length; c++)if (ImajnetNews.newsData[c].id == b) {
      Nigsys.showTooltip(a, ImajnetNews.getNewsItemHTML(ImajnetNews.newsData[c], !0, !1));
      break
    }
  }, getNewsItemHTML: function (a, b, c, d) {
    return '\x3cdiv class\x3d"newsItemMainContainer' +
      (c ? " oldNewsItem" : "") + (0 !== d % 2 ? " itemOdd" : "") + '"' + (b ? "" : " onmouseover\x3d\"ImajnetNews.showTooltip(event, '" + a.id + '\');" onmouseout\x3d"Nigsys.hideTooltip();"') + '\x3e\x3cdiv class\x3d"left newsImageContainer"\x3e\x3cimg src\x3d"' + Imajnet.imajnetPath + "img/news/" + a.type + ".png?" + Imajnet.version + '" class\x3d"newsImage" /\x3e\x3c/div\x3e\x3cdiv class\x3d"left newsItemContainer"\x3e\x3cdiv class\x3d"newsTitle' + (b ? "" : " noOverflow") + '"\x3e' + this.getTitleDate(a.created) + a.title + '\x3c/div\x3e\x3cdiv class\x3d"newsContent' +
      (b ? "" : " noOverflow") + '"\x3e' + a.content + '\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"clearLeft"\x3e\x3c/div\x3e\x3c/div\x3e'
  }, formatServerDate: function (a) {
    if (!a)return new Date(1970);
    a = a.split(" ");
    var b = a[0].split("-"), c = null;
    a[1] && (c = a[1].split(":"));
    return c ? new Date(b[2], parseInt(b[1]) - 1, b[0], c[0], c[1], c[2]) : new Date(b[2], parseInt(b[1]) - 1, b[0])
  }, getTitleDate: function (a) {
    a = this.formatServerDate(a);
    return "[" + a.getDate() + " " + Nigsys.getMonthFromNumber((a.getMonth() + 1).toString()) + " " + a.getFullYear() +
      "] "
  }, onNewsReceived: function (a, b) {
    a = JSON.parse(a);
    var c = "", d = !1;
    if (a.news && a.news.length) {
      ImajnetNews.newsData = a.news.sort(ImajnetNews.compareDates);
      var f = null;
      ImajnetUser.data.lastLogin ? f = ImajnetNews.formatServerDate(ImajnetUser.data.lastLogin) : d = !0;
      for (var e = ImajnetNews.newsData.length - 1; 0 <= e; e--) {
        var g = f ? f > ImajnetNews.formatServerDate(ImajnetNews.newsData[e].created) : !1;
        g || (d = !0);
        c += ImajnetNews.getNewsItemHTML(ImajnetNews.newsData[e], !1, g, e)
      }
    }
    if (!b.isFirstLoad || d) ImajnetUI.newsContainer.html(c ?
      c : jQuery.imajnet.noNews), b.isFirstLoad && Imajnet.activateImajnetControl(jQuery("#newsContainerIdButton"), "showNews"), ImajnetUI.showItem(ImajnetUI.newsContainerId, 530, 500)
  }, checkForNews: function (a) {
    ImajnetAPI.doImajnetRequest("GET", "/api/news/latest.json", null, ImajnetNews.onNewsReceived, null, null, null, null, {isFirstLoad: a})
  }, init: function (a) {
    ImajnetUI.hideItem(ImajnetUI.newsContainerId);
    ImajnetNews.checkForNews(a)
  }, close: function (a) {
    ImajnetUI.hideItem(ImajnetUI.newsContainerId)
  }
};
Address = {
  OPTIONS_OSM: "optionsOSM",
  OPTIONS_SPECTRUM: "optionsSpectrum",
  addressRequest: null,
  currentSearchOption: "",
  map: null,
  wgs84Crs: "EPSG:4326",
  zoomLevelOnCenter: 20,
  addressContainer: null,
  initContainers: function () {
    this.currentSearchOption || (this.currentSearchOption = this.OPTIONS_OSM)
  },
  init: function () {
    if (ImajnetUI.imageContainer) {
      this.initContainers();
      this.addressContainer || (ImajnetUI.imageContainer.append('\x3cdiv id\x3d"addressContainerDiv" class\x3d"address addressAndLRS"\x3e\x3c/div\x3e'), this.addressContainer =
        jQuery("#addressContainerDiv"));
      var a = "";
      ImajnetLRSSettings.LRSSettings.display.addressAndLRS.imajnetSettingsAddressDisplayType == ImajnetLRSSettings.ADDRESS_MODE.FULL ? this.addressContainer.removeClass("addressSmall").width(190) : this.addressContainer.addClass("addressSmall").width("auto");
      ImajnetLRSSettings.LRSSettings.display.addressAndLRS.imajnetSettingsAddressInLRS ? (this.addressContainer.removeClass("addressLeft"), this.addressContainer.addClass("addressRight").width(190), LRS.LRSContainer && LRS.LRSContainer.is(":visible") &&
      (a = "bottom")) : (this.addressContainer.removeClass("addressRight"), this.addressContainer.addClass("addressLeft"));
      Nigsys.browserIsIE7() || Nigsys.browserIsIE8() || this.addressContainer.uncorner().corner(a)
    }
  },
  initSearchAddress: function () {
    this.initContainers();
    var a = '\x3cdiv class\x3d"searchAddressDiv"\x3e\x3cdiv class\x3d"searchAddressTopDiv"\x3e';
    this.currentSearchOption == this.OPTIONS_OSM ? a += '\x3cdiv class\x3d"left" style\x3d"margin: 0 30px 0 10px;"\x3e\x3cinput type\x3d"text" id\x3d"searchAddressInput" size\x3d"37" style\x3d"padding-left: 10px;" /\x3e\x3c/div\x3e' :
      this.currentSearchOption == this.OPTIONS_SPECTRUM && (a += '\x3cdiv\x3e\x3cdiv class\x3d"left" style\x3d"width: 100px;"\x3e' + jQuery.imajnet.map.popupSearchAddress.spectrumStreet + '\x3c/div\x3e\x3cdiv class\x3d"left"\x3e\x3cinput type\x3d"text" id\x3d"searchAddressStreetInput" size\x3d"29" /\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"clearLeft"\x3e\x3c/div\x3e\x3cdiv\x3e\x3cdiv class\x3d"left" style\x3d"width: 100px;"\x3e' + jQuery.imajnet.map.popupSearchAddress.spectrumCity + '\x3c/div\x3e\x3cdiv class\x3d"left"\x3e\x3cinput type\x3d"text" id\x3d"searchAddressCityInput" size\x3d"29" /\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"clearLeft"\x3e\x3c/div\x3e\x3cdiv\x3e\x3cdiv class\x3d"left" style\x3d"width: 100px;"\x3e' +
        jQuery.imajnet.map.popupSearchAddress.spectrumCountry + '\x3c/div\x3e\x3cdiv class\x3d"left"\x3e\x3cinput type\x3d"text" id\x3d"searchAddressCountryInput" size\x3d"29" value\x3d"France" /\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"clearLeft"\x3e\x3c/div\x3e');
    a += '\x3cdiv class\x3d"left" style\x3d"margin-bottom: 10px;"\x3e\x3cinput type\x3d"button" value\x3d"' + jQuery.app.button.cancel + '" onclick\x3d"Dialog.hideDialog(\'' + ImajnetUI.searchAddressContainerId + '\');" class\x3d"dialogButton dialogButtonCancel"\x3e\x3cinput type\x3d"button" id\x3d"searchAddress" value\x3d"' +
      jQuery.imajnet.map.popupSearchAddress.buttonSearchName + '" onclick\x3d"Address.getAddressFromString();" class\x3d"dialogButton buttonSearch" /\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv id\x3d"searchResultsDiv" class\x3d"clearLeft light14Blue"\x3e\x3c/div\x3e\x3c/div\x3e';
    ImajnetUI.searchAddressContainer.html(a);
    jQuery("#searchAddressInput").keyup(function (a) {
      13 == a.keyCode && jQuery("#searchAddress").click()
    });
    jQuery("#searchAddressCityInput").keyup(function (a) {
      13 == a.keyCode && jQuery("#searchAddress").click()
    })
  },
  showAddress: function () {
    Address.addressContainer && "" != Address.addressContainer.html() && Address.addressContainer.html() != jQuery.imajnet.loading && Address.addressContainer.show()
  },
  setAddress: function (a, c) {
    a && "" != jQuery.trim(a) ? this.addressContainer && (this.addressContainer.html(a), this.addressContainer.attr("title", c ? c : a), Nigsys.isPositionMode() || Nigsys.isMeasurementMode() || Nigsys.isPolyligneMode() || jQuery("#imajnetPhotogrammetryZoomedImageContainer").is(":visible") || (this.addressContainer.show(), this.init(),
        LRS.loadLRS(ImajnetMap.currentPosition))) : Address.hideAddress()
  },
  getOSMAddress: function (a) {
  },
  getSpectrumAddress: function (a) {
    Address.addressContainer.html(jQuery.imajnet.loading);
    ImajnetAPI.mustAbortRequests && null !== this.addressRequest && this.addressRequest.abort();
    this.addressRequest = jQuery.ajax({
      type: "POST",
      url: applicationDomain + "spectrum-services/ReverseGeocodeGlobal.TOMTOM",
      dataType: "xml",
      data: '\x3csoapenv:Envelope xmlns:soapenv\x3d"http://schemas.xmlsoap.org/soap/envelope/" xmlns:rev\x3d"http://www.g1.com/services/ReverseGeocodeGlobal.TOMTOM"\x3e\x3csoapenv:Header/\x3e\x3csoapenv:Body\x3e\x3crev:ReverseGeocodeGlobal_TOMTOMRequest\x3e\x3crev:context\x3e\x3crev:account.id\x3evlecamus\x3c/rev:account.id\x3e\x3crev:account.password\x3evlecamus\x3c/rev:account.password\x3e\x3c/rev:context\x3e\x3crev:options\x3e\x3crev:FRA.KeepMultimatch\x3etrue\x3c/rev:FRA.KeepMultimatch\x3e\x3c/rev:options\x3e\x3crev:rows\x3e\x3crev:row\x3e\x3crev:Latitude\x3e' +
      a.lat + "\x3c/rev:Latitude\x3e\x3crev:Longitude\x3e" + a.lon + "\x3c/rev:Longitude\x3e\x3crev:Country\x3eFRA\x3c/rev:Country\x3e\x3crev:user_fields\x3e\x3c/rev:user_fields\x3e\x3c/rev:row\x3e\x3c/rev:rows\x3e\x3c/rev:ReverseGeocodeGlobal_TOMTOMRequest\x3e\x3c/soapenv:Body\x3e\x3c/soapenv:Envelope\x3e",
      contentType: "application/xml",
      success: function (a, b, e) {
        a = jQuery.xml2json(e.responseText);
        b = null;
        b = Nigsys.browserIsIE() ? a["soap:Body"].ReverseGeocodeGlobal_TOMTOMResponse.rows.row : a.Body.ReverseGeocodeGlobal_TOMTOMResponse.rows.row;
        null !== b ? (a = (void 0 !== b.AddressLine1 ? b.AddressLine1 + ", " : "") + (void 0 !== b.City ? b.City + ", " : "") + (void 0 !== b.County ? b.County + ", " : "") + (void 0 !== b.StateProvince ? b.StateProvince + ", " : "") + "France", "France" != a ? Address.setAddress(a) : Address.hideAddress()) : Address.hideAddress()
      },
      error: function (a, b, e) {
        Address.hideAddress()
      }
    })
  },
  getAddressFromCoordinates: function (a, c) {
    this.currentSearchOption == this.OPTIONS_OSM ? Address.getOSMAddress(a) : this.currentSearchOption == this.OPTIONS_SPECTRUM && Address.getSpectrumAddress(a)
  },
  zoomToCoordinates: function (a, c) {
    ImajnetPlugin.zoomMapTo(this.zoomLevelOnCenter);
    ImajnetPlugin.centerMapToPosition({lon: a, lat: c})
  },
  onAddressClick: function (a, c) {
    Address.zoomToCoordinates(a, c);
    ImajnetAPI.getClosestPosition(c, a, ImajnetSettings.rangeAddress, null, null, null)
  },
  hideAddressContainer: function () {
    this.addressContainer && this.addressContainer.hide()
  },
  hideAddress: function () {
    this.hideAddressContainer();
    !LRS.LRSContainer || Nigsys.browserIsIE7() || Nigsys.browserIsIE8() || LRS.LRSContainer.corner()
  },
  getAddressOSMForString: function (a) {
    ImajnetAPI.mustAbortRequests &&
    null !== this.addressRequest && this.addressRequest.abort();
    this.addressRequest = jQuery.ajax({
      type: "GET",
      url: Nigsys.browserIsMozilla() || Nigsys.browserIsWebkit() ? Nigsys.getProtocolString() + "//nominatim.openstreetmap.org/search?q\x3d" + a + "\x26format\x3djson\x26polygon\x3d1\x26addressdetails\x3d1" : applicationDomain + "osm/search?q\x3d" + a + "\x26format\x3djson\x26polygon\x3d1\x26addressdetails\x3d1",
      dataType: "json",
      success: function (a) {
        jQuery("#searchResultsDiv").html("");
        if (!jQuery.isEmptyObject(a) && jQuery.isArray(a)) {
          var b =
            0;
          jQuery.each(a, function (a, d) {
            "" != d.lon && "" != d.lat && jQuery("#searchResultsDiv").append("\x3cdiv onclick\x3d\"Address.onAddressClick('" + d.lon + "','" + d.lat + "');\"" + (0 == b % 2 ? ' class\x3d"searchAddressItemContainer itemOdd"' : ' class\x3d"searchAddressItemContainer itemEven"') + '\x3e\x3cdiv class\x3d"searchAddressItemImageContainer left"\x3e\x3cimg src\x3d"' + applicationUrl + "resources/img/buttons/BTN-FF1.PNG?" + Imajnet.version + '" class\x3d"searchAddressItemImage" /\x3e\x3c/div\x3e\x3cdiv class\x3d"left searchAddressItemDescriptionContainer"\x3e' +
              (void 0 !== d.display_name && "" != jQuery.trim(d.display_name) ? '\x3cdiv style\x3d"font-weight: bold;"\x3e' + d.display_name + "\x3c/div\x3e" : "") + "\x3cdiv\x3e" + jQuery.imajnet.map.popupSearchAddress.longitude + ": " + d.lon + "\x3c/div\x3e\x3cdiv\x3e" + jQuery.imajnet.map.popupSearchAddress.latitude + ": " + d.lat + '\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"clearLeft"\x3e\x3c/div\x3e\x3c/div\x3e');
            b++
          });
          1 == b && (Address.onAddressClick(a[0].lon, a[0].lat), Address.closeSearchDialog())
        } else jQuery("#searchResultsDiv").html('\x3cdiv class\x3d"error"\x3e' +
          jQuery.imajnet.map.popupSearchAddress.noResultsFound + "\x3c/div\x3e");
        Nigsys.hideLoading(jQuery("#searchResultsDiv"))
      },
      error: function (a, b, e) {
        jQuery("#searchResultsDiv").html('\x3cdiv class\x3d"error"\x3e' + jQuery.imajnet.map.popupSearchAddress.error + "\x3c/div\x3e");
        Nigsys.hideLoading(jQuery("#searchResultsDiv"))
      }
    })
  },
  getAddressSpectrumForString: function (a, c, b) {
    ImajnetAPI.mustAbortRequests && null !== this.addressRequest && this.addressRequest.abort();
    this.addressRequest = jQuery.ajax({
      type: "POST",
      url: applicationDomain +
      "spectrum-services/GeocodeAddressGlobal.TOMTOM",
      dataType: "xml",
      data: '\x3csoapenv:Envelope xmlns:soapenv\x3d"http://schemas.xmlsoap.org/soap/envelope/" xmlns:geoc\x3d"http://www.g1.com/services/GeocodeAddressGlobal.TOMTOM"\x3e\x3csoapenv:Header/\x3e\x3csoapenv:Body\x3e\x3cgeoc:GeocodeAddressGlobal_TOMTOMRequest\x3e\x3cgeoc:context\x3e\x3cgeoc:account.id\x3evlecamus\x3c/geoc:account.id\x3e\x3cgeoc:account.password\x3evlecamus\x3c/geoc:account.password\x3e\x3c/geoc:context\x3e\x3cgeoc:options\x3e\x3c/geoc:options\x3e\x3cgeoc:rows\x3e\x3cgeoc:row\x3e\x3cgeoc:AddressLine1\x3e' +
      a + "\x3c/geoc:AddressLine1\x3e\x3cgeoc:City\x3e" + c + "\x3c/geoc:City\x3e\x3cgeoc:Country\x3e" + b + "\x3c/geoc:Country\x3e\x3c/geoc:row\x3e\x3c/geoc:rows\x3e\x3c/geoc:GeocodeAddressGlobal_TOMTOMRequest\x3e\x3c/soapenv:Body\x3e\x3c/soapenv:Envelope\x3e",
      contentType: "application/xml",
      success: function (a, b, c) {
        jQuery("#searchResultsDiv").html("");
        a = jQuery.xml2json(c.responseText);
        if (jQuery.isEmptyObject(a)) jQuery("#searchResultsDiv").html('\x3cdiv class\x3d"error"\x3e' + jQuery.imajnet.map.popupSearchAddress.noResultsFound +
          "\x3c/div\x3e"); else {
          var f = 0, k = !1;
          b = null;
          b = Nigsys.browserIsIE() ? a["soap:Body"].GeocodeAddressGlobal_TOMTOMResponse.rows : a.Body.GeocodeAddressGlobal_TOMTOMResponse.rows;
          if (null !== b) {
            var g = "", h = "";
            jQuery.each(b, function (a, b) {
              if (void 0 != b.Latitude && "" != b.Longitude && void 0 != b.Latitude && "" != b.Latitude) {
                var c = (void 0 !== b.AddressLine1 && "" !== b.AddressLine1 ? b.AddressLine1 + ", " : "") + (void 0 !== b.City && "" !== b.City ? b.City + ", " : "") + (void 0 !== b.County && "" !== b.County ? b.County + ", " : "") + (void 0 !== b.StateProvince && "" !==
                  b.StateProvince ? b.StateProvince + ", " : "") + (void 0 !== b.Country && "" !== b.Country ? b.Country + ", " : "");
                jQuery("#searchResultsDiv").append("\x3cdiv onclick\x3d\"Address.onAddressClick('" + b.Longitude + "','" + b.Latitude + "');\"" + (0 == f % 2 ? ' class\x3d"itemOdd"' : ' class\x3d"itemEven"') + "\x3e" + ("" != jQuery.trim(c) ? '\x3cdiv style\x3d"font-weight: bold;"\x3e' + c + "\x3c/div\x3e" : "") + "\x3cdiv\x3e" + jQuery.imajnet.map.popupSearchAddress.longitude + ": " + b.Longitude + "\x3c/div\x3e\x3cdiv\x3e" + jQuery.imajnet.map.popupSearchAddress.latitude +
                  ": " + b.Latitude + "\x3c/div\x3e\x3c/div\x3e");
                k = !0
              }
              0 == f && (g = b.Longitude, h = b.Latitude);
              f++
            });
            k ? g && h && (Address.onAddressClick(g, h), Address.closeSearchDialog()) : jQuery("#searchResultsDiv").html('\x3cdiv class\x3d"error"\x3e' + jQuery.imajnet.map.popupSearchAddress.noResultsFound + "\x3c/div\x3e")
          } else jQuery("#searchResultsDiv").html('\x3cdiv class\x3d"error"\x3e' + jQuery.imajnet.map.popupSearchAddress.error + "\x3c/div\x3e")
        }
        Nigsys.hideLoading(jQuery("#searchResultsDiv"))
      },
      error: function (a, b, c) {
        jQuery("#searchResultsDiv").html('\x3cdiv class\x3d"error"\x3e' +
          jQuery.imajnet.map.popupSearchAddress.error + "\x3c/div\x3e");
        Nigsys.hideLoading(jQuery("#searchResultsDiv"))
      }
    })
  },
  getAddressFromString: function (a) {
    Nigsys.showLoading(jQuery("#searchResultsDiv"));
    if (this.currentSearchOption == this.OPTIONS_OSM) a = jQuery.trim(jQuery("#searchAddressInput").val()), "" !== a ? this.getAddressOSMForString(a) : jQuery("#searchResultsDiv").html('\x3cdiv class\x3d"error"\x3e' + jQuery.imajnet.map.popupSearchAddress.noResultsFound + "\x3c/div\x3e"); else if (this.currentSearchOption == this.OPTIONS_SPECTRUM) {
      a =
        jQuery.trim(jQuery("#searchAddressStreetInput").val());
      var c = jQuery.trim(jQuery("#searchAddressCityInput").val()),
        b = jQuery.trim(jQuery("#searchAddressCountryInput").val());
      "" == a && "" == c && "" == b ? jQuery("#searchResultsDiv").html('\x3cdiv class\x3d"error"\x3e' + jQuery.imajnet.map.popupSearchAddress.noResultsFound + "\x3c/div\x3e") : this.getAddressSpectrumForString(a, c, b)
    }
  },
  openSearchDialog: function () {
    Address.closeSearchDialog();
    Address.initSearchAddress();
    ImajnetUI.showItem(ImajnetUI.searchAddressContainerId,
      Nigsys.browserIsIE7() ? 425 : null)
  },
  closeSearchDialog: function () {
    ImajnetUI.hideItem(ImajnetUI.searchAddressContainerId)
  }
};
LRS = {
  roadsData: null,
  currentImageLRS: null,
  isSearchRelative: !0,
  cachedPoints: {},
  LRSContainer: null,
  roadNameToIdMapping: null,
  noRoads: !1,
  metersInAMile: 1609.344,
  feetInAMile: 5280,
  defaultUnit: "m",
  metersUnits: {m: 1, feet: 3.2808399},
  transformFromMeters: function (a, b) {
    return parseFloat((a * LRS.metersUnits[b]).toFixed(2))
  },
  transformFromSquareMeters: function (a, b) {
    return parseFloat((a * Math.pow(LRS.metersUnits[b], 2)).toFixed(2))
  },
  transformToMeters: function (a, b) {
    return a / LRS.metersUnits[b]
  },
  transformToSquareMeters: function (a,
                                     b) {
    return a / Math.pow(LRS.metersUnits[b], 2)
  },
  getRoadUnitType: function (a) {
    return a ? a : LRS.defaultUnit
  },
  getRoadType: function (a) {
    if (!LRS.roadsData || !LRS.roadsData.roads)return LRS.defaultUnit;
    for (var b = 0; b < LRS.roadsData.roads.length; b++)if (LRS.roadsData.roads[b].id == a)return LRS.roadsData.roads[b].unit;
    return LRS.defaultUnit
  },
  getCachedLRSByObjectId: function (a) {
    for (var b in LRS.cachedPoints)if (LRS.cachedPoints[b].id == a)return LRS.cachedPoints[b];
    return null
  },
  transformReceivedLinearPositionItem: function (a) {
    a &&
    a.road && !a.road.unit && (a.road.unit = LRS.defaultUnit);
    a && a.road && a.road.unit && (a.lateralOffset = LRS.transformFromMeters(a.lateralOffset, LRS.getRoadUnitType(a.road.unit)), a.relativeAbscisa = LRS.transformFromMeters(a.relativeAbscisa, LRS.getRoadUnitType(a.road.unit)), a.cumulatedAbscisa = LRS.transformFromMeters(a.cumulatedAbscisa, LRS.getRoadUnitType(a.road.unit)))
  },
  transformReceivedLinearPosition: function (a) {
    if (jQuery.isArray(a))for (var b = 0; b < a.length; b++)LRS.transformReceivedLinearPositionItem(a[b]); else LRS.transformReceivedLinearPositionItem(a)
  },
  getTopologyRequestData: function (a) {
    var b = {prNumber: a.startPR, relativeAbscisa: a.startAbscisa ? a.startAbscisa : 0},
      c = {prNumber: a.endPR, relativeAbscisa: a.endAbscisa ? a.endAbscisa : 0};
    if (b.prNumber > c.prNumber || b.prNumber == c.prNumber && b.relativeAbscisa > c.relativeAbscisa)var d = b, b = c,
      c = d;
    return {
      roadTopologyDescriptor: Array({
        enable3D: !1,
        lateralOffset: parseFloat(a.lateralOffset),
        roadName: a.roadName,
        start: b,
        end: c
      })
    }
  },
  getSelectedLRSType: function () {
    var a = ImajnetUserSettings.lrsRoadType;
    jQuery.each(jQuery("input:image[name\x3dLRSType]"),
      function (b, c) {
        if (-1 !== c.className.indexOf("opacity60"))return a = c.value, !1
      });
    return a
  },
  init: function () {
    this.LRSContainer && this.LRSContainer.remove();
    ImajnetUI.imageContainer.append('\x3cdiv id\x3d"LRSContainerDiv" class\x3d"LRS addressAndLRS"\x3e\x3c/div\x3e');
    this.LRSContainer = jQuery("#LRSContainerDiv");
    this.LRSContainer.on("vmouseover", LRS.onImageLRSMouseHover);
    this.LRSContainer.on("vmouseout", LRS.onImageLRSMouseOut);
    var a = "5", b = "";
    ImajnetLRSSettings.LRSSettings.display.addressAndLRS.imajnetSettingsAddressInLRS &&
    Address.addressContainer && Address.addressContainer.is(":visible") && (b = "top", a = ImajnetLRSSettings.LRSSettings.display.addressAndLRS.imajnetSettingsAddressDisplayType == ImajnetLRSSettings.ADDRESS_MODE.FULL ? 47 : 22);
    this.LRSContainer.height(40);
    this.LRSContainer.css("bottom", a + "px");
    Nigsys.browserIsIE7() || Nigsys.browserIsIE8() || this.LRSContainer.uncorner().corner(b)
  },
  initSearchLRS: function () {
    ImajnetUI.searchLRSContainer.hide()
  },
  showLRS: function () {
    "" != LRS.LRSContainer.html() && LRS.LRSContainer.html() != jQuery.imajnet.loading &&
    LRS.LRSContainer.show()
  },
  setImajnetImageLRS: function (a) {
    this.init();
    var b = LRSRequest.fillLRSContent(a, !0);
    this.LRSContainer.html(b.HTML);
    Nigsys.isPositionMode() || Nigsys.isMeasurementMode() || Nigsys.isPolyligneMode() || (ImajnetUI.LRSGUI.draw(a), this.LRSContainer.show(), "undefined" !== typeof Address && Address.init())
  },
  onImageLRSMouseHover: function (a) {
    Nigsys.disableEventPropagationFull(a);
    LRS.currentImageLRS && LRS.LRSContainer.html() != jQuery.imajnet.loading && LRS.LRSContainer.html(LRSRequest.getLRSFields(LRS.currentImageLRS).HTML)
  },
  onImageLRSMouseOut: function (a) {
    Nigsys.disableEventPropagationFull(a);
    LRS.currentImageLRS && LRS.LRSContainer.html() != jQuery.imajnet.loading && LRS.LRSContainer.html(LRSRequest.getLRSFieldsCondensed(LRS.currentImageLRS).HTML)
  },
  onGetLRSSuccess: function (a, b) {
    if (a && a.linearPosition) ImajnetUI.LRSGUI.isDragMode = !1, ImajnetUI.LRSGUI.isZoomMode = !1, a.parameter && a.parameter.position ? (ImajnetMap.currentPosition && (a.parameter.position.id = ImajnetMap.currentPosition.id), LRS.cachedPoints[a.parameter.position.lat + ":" +
    a.parameter.position.lon + ":" + a.parameter.position.height] = a, ("undefined" === typeof ImajnetMap || ImajnetMap.currentPosition && ImajnetMap.currentPosition.lon == a.parameter.position.lon && ImajnetMap.currentPosition.lat == a.parameter.position.lat && ImajnetMap.currentPosition.height == a.parameter.position.height) && LRS.setImajnetImageLRS(a)) : LRS.hideLRS(); else LRS.onGetLRSError()
  },
  onGetLRSError: function (a) {
    LRS.removeLRS()
  },
  loadLRS: function (a) {
    if (a) LRS.getLRS(a, LRS.onGetLRSSuccess, LRS.onGetLRSError, {LRSObject: ImajnetUI.LRSGUI});
    else if ("function" == typeof LRS.onGetLRSError) LRS.onGetLRSError()
  },
  onBeforeGetLRS: function () {
    this.LRSContainer && this.LRSContainer.html(jQuery.imajnet.loading)
  },
  getLRS: function (a, b, c, d) {
    this.onBeforeGetLRS();
    var e = LRS.cachedPoints[a.lat + ":" + a.lon + ":" + a.height];
    void 0 !== e && e ? b(e, d) : (e = {}, e.position = a, e.range = ImajnetSettings.rangeLRS, LRSRequest.getLRS(JSON.stringify(e), b, c, d))
  },
  getLRSForGPS: function (a, b, c) {
    this.onBeforeGetLRS();
    var d = LRS.cachedPoints[a.lat + ":" + a.lon + ":" + a.height];
    void 0 !== d && d ? b(d) : (d =
      {}, d.position = a, d.range = ImajnetSettings.rangeLRS, LRSRequest.getLRSForGPS(JSON.stringify(d), b, c))
  },
  getLRSForPosition: function (a, b) {
    void 0 === LRS.cachedPoints[a.lat + ":" + a.lon + ":" + a.height] ? LRSRequest.getLRSForPosition(JSON.stringify({
      position: a,
      range: ImajnetSettings.rangeLRS
    }), b) : LRSRequest.appendLRSForPosition(LRS.cachedPoints[a.lat + ":" + a.lon + ":" + a.height], b)
  },
  hideLRS: function () {
    jQuery("#imajnetImageLRSInTitle").hide();
    this.LRSContainer && this.LRSContainer.html(jQuery.imajnet.loading)
  },
  hideLRSContainer: function () {
    this.LRSContainer &&
    (LRS.currentImageLRS = null, this.LRSContainer.hide())
  },
  removeLRS: function () {
    jQuery("#imajnetImageLRSInTitle").hide();
    this.hideLRSContainer();
    Nigsys.browserIsIE7() || Nigsys.browserIsIE8() || "undefined" === typeof Address || !Address.addressContainer || Address.addressContainer.corner();
    ImajnetUI.LRSGUI && ImajnetUI.LRSGUI.hide()
  },
  searchLRSError: function () {
    Nigsys.showDialogError(ImajnetUI.searchLRSContainerId, jQuery.app.error)
  },
  search: function () {
    var a = {};
    a.roadIdentifier = jQuery("#LRSRoadSelect").val();
    if (a.roadIdentifier) {
      a.prNumber =
        jQuery("#LRSPRSelect").val();
      a.prNumber || (a.prNumber = 0);
      var b = LRS.getRoadUnitType(LRS.getRoadType(a.roadIdentifier));
      a.relativeAbscisa = LRS.transformToMeters(jQuery("#LRSSearchRelative").val(), b);
      a.relativeAbscisa || (a.relativeAbscisa = 0);
      a.cumulatedAbscisa = LRS.transformToMeters(jQuery("#LRSSearchCumulated").val(), b);
      LRS.getCoordinatesFromLRS(a).done(function (a) {
        "undefined" === typeof initImajnet ? ImajnetAPI.getClosestPosition(a.position.lat, a.position.lon, ImajnetSettings.rangeLRS) : initImajnet(!0).done(function () {
          ImajnetAPI.getClosestPosition(a.position.lat,
            a.position.lon, ImajnetSettings.rangeLRS)
        })
      }).fail(function () {
        LRS.searchLRSError()
      })
    } else LRS.searchLRSError()
  },
  onGetRoadSuccess: function (a) {
    var b = jQuery("#LRSPRSelect"), c = '\x3coption value\x3d""\x3e\x3c/option\x3e';
    if (a && a.pr) {
      for (var d = "", e = "", f = 0; f < a.pr.length; f++)0 == f ? (d = ' selected\x3d"selected"', e = a.pr[f].prNumber, LRS.changeLRSPR(a.pr[f].prNumber)) : d = "", c += '\x3coption value\x3d"' + a.pr[f].prNumber + '"' + d + "\x3e" + a.pr[f].prNumber + "\x3c/option\x3e";
      Nigsys.getComboboxInputContainer(b).val(e)
    } else LRS.onGetRoadError();
    b.html(c)
  },
  onGetRoadError: function () {
    var a = jQuery("#LRSPRSelect");
    Nigsys.getComboboxInputContainer(a).val("");
    a.html('\x3coption value\x3d""\x3e\x3c/option\x3e');
    LRS.isSearchRelative = !1;
    jQuery("#LRSSearchRelative").prop("disabled", !0);
    jQuery("#LRSSearchCumulated").val(0);
    jQuery("#searchLRSSubmit").prop("disabled", !1)
  },
  changeLRSRoad: function (a) {
    var b = jQuery("#LRSPRSelect");
    "" !== a.val() ? (Nigsys.getComboboxInputContainer(b).val(""), b.html('\x3coption value\x3d""\x3e\x3c/option\x3e'), LRSRequest.getRoad(a.val(),
      this.onGetRoadSuccess, this.onGetRoadError), Nigsys.changeComboboxDisabledState(b, !1), b.prop("disabled", !1), jQuery("#LRSSearchCumulated").prop("disabled", !1)) : (Nigsys.changeComboboxDisabledState(b, !0), b.prop("disabled", !0), jQuery("#LRSSearchRelative").prop("disabled", !0), jQuery("#LRSSearchCumulated").prop("disabled", !0));
    jQuery("#LRSSearchRelative").val("");
    jQuery("#LRSSearchCumulated").val("");
    jQuery("#searchLRSSubmit").prop("disabled", !0)
  },
  changeLRSPR: function (a) {
    "" !== a ? (LRS.isSearchRelative = !0, jQuery("#LRSSearchRelative").val("0"),
      jQuery("#LRSSearchRelative").prop("disabled", !1), jQuery("#LRSSearchCumulated").val("")) : (jQuery("#LRSSearchRelative").val(""), jQuery("#LRSSearchCumulated").val(""), jQuery("#LRSSearchRelative").prop("disabled", !0));
    jQuery("#searchLRSSubmit").prop("disabled", !0);
    "" !== jQuery("#LRSSearchRelative").val() && jQuery("#searchLRSSubmit").prop("disabled", !1)
  },
  numbersOnly: function (a, b) {
    jQuery("#searchLRSSubmit").prop("disabled", !1);
    if ("searchRelative" == b) LRS.isSearchRelative = !0; else if ("searchCumulated" == b) {
      LRS.isSearchRelative =
        !1;
      var c = jQuery("#LRSPRSelect");
      Nigsys.getComboboxInputContainer(c).val("");
      c.val("");
      jQuery("#LRSSearchRelative").val("");
      jQuery("#LRSSearchRelative").prop("disabled", !0)
    }
    c = a.charCode ? a.charCode : a.keyCode;
    return 8 != c && (48 > c || 57 < c) ? !1 : !0
  },
  getLabelsValueFromSettings: function (a, b) {
    if (!ImajnetLRSSettings.LRSSettings)return null;
    var c = jQuery.imajnet.settings.LRS.road, d = "road";
    2 == a && (c = jQuery.imajnet.settings.LRS.train, d = "train");
    return {
      roadLabel: c,
      relativePointLabel: jQuery.imajnet.settings.LRS.relativePoint[ImajnetLRSSettings.LRSSettings[b][d].relativePoint],
      relativeAbscisaLabel: jQuery.imajnet.settings.LRS.relativeAbscisa[ImajnetLRSSettings.LRSSettings[b][d].relativeAbscisa],
      cumulatedAbscisaLabel: jQuery.imajnet.settings.LRS.cumulatedAbscisa[ImajnetLRSSettings.LRSSettings[b][d].cumulatedAbscisa]
    }
  },
  changeLRSType: function (a, b) {
    jQuery(".searchLRSType").removeClass("opacity60");
    b.addClass("opacity60");
    var c = this.getLabelsValueFromSettings(a, "search");
    jQuery("#LRSRoadLabel").html(c.roadLabel);
    jQuery("#LRSRelativePointLabel").html(c.relativePointLabel);
    jQuery("#LRSRelativeAbscisaLabel").html(c.relativeAbscisaLabel);
    jQuery("#LRSCumulatedAbscisaLabel").html(c.cumulatedAbscisaLabel);
    LRSRequest.getLRSRoads(a, null, LRSRequest.onGetLRSRoadsSuccess, LRSRequest.onGetLRSRoadsError);
    c = jQuery("#LRSPRSelect");
    Nigsys.getComboboxInputContainer(c).val("");
    Nigsys.changeComboboxDisabledState(c, !0);
    c.val("").prop("disabled", !0);
    jQuery("#LRSSearchRelative").val("");
    jQuery("#LRSSearchCumulated").val("");
    jQuery("#LRSSearchRelative").prop("disabled", !0);
    jQuery("#LRSSearchCumulated").prop("disabled", !0);
    jQuery("#searchLRSSubmit").prop("disabled",
      !0)
  },
  addLRSDialog: function () {
    var a = this.getSelectedLRSType(), b = this.getLabelsValueFromSettings(a, "search");
    ImajnetUI.searchLRSContainer.append('\x3cdiv class\x3d"searchLRSDiv"\x3e\x3cdiv class\x3d"searchLRSDialogContentHeader dialogBorder"\x3e\x3cdiv class\x3d"dialogContentTitle searchLRSDialogContentHeaderTitle left"\x3e' + jQuery.imajnet.map.popupSearchLRS.type + '\x3c/div\x3e\x3cdiv class\x3d"left"\x3e\x3cdiv class\x3d"left" style\x3d"margin-right: 20px;"\x3e\x3cinput type\x3d"image" src\x3d"' + Imajnet.imajnetPath +
      'img/surveyAll32.png" name\x3d"LRSType" value\x3d"0" onclick\x3d"LRS.changeLRSType(0, jQuery(this));" class\x3d"searchLRSType' + (0 == a ? " opacity60" : "") + '" title\x3d"' + jQuery.imajnet.map.popupSearchLRS.typeAny + '" /\x3e\x3c/div\x3e\x3cdiv class\x3d"left LRSTypeItem"\x3e\x3cinput type\x3d"image" src\x3d"' + Imajnet.imajnetPath + 'img/surveyCar32.png" name\x3d"LRSType" value\x3d"1" onclick\x3d"LRS.changeLRSType(1, jQuery(this));" class\x3d"searchLRSType' + (1 == a ? " opacity60" : "") + '" title\x3d"' + jQuery.imajnet.map.popupSearchLRS.typeRoad +
      '"/\x3e\x3c/div\x3e\x3cdiv class\x3d"left LRSTypeItem"\x3e\x3cinput type\x3d"image" src\x3d"' + Imajnet.imajnetPath + 'img/surveyTrain32.png" name\x3d"LRSType" value\x3d"2" onclick\x3d"LRS.changeLRSType(2, jQuery(this));" class\x3d"searchLRSType' + (2 == a ? " opacity60" : "") + '" title\x3d"' + jQuery.imajnet.map.popupSearchLRS.typeTrain + '" /\x3e\x3c/div\x3e\x3cdiv class\x3d"left LRSTypeItem"\x3e\x3cinput type\x3d"image" src\x3d"' + Imajnet.imajnetPath + 'img/surveyBoat32.png" name\x3d"LRSType" value\x3d"3" onclick\x3d"LRS.changeLRSType(3, jQuery(this));" class\x3d"searchLRSType' +
      (3 == a ? " opacity60" : "") + '" title\x3d"' + jQuery.imajnet.map.popupSearchLRS.typeBoat + '" /\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"clearLeft"\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"searchLRSDialogContentBody"\x3e\x3cdiv class\x3d"dialogContentTitle"\x3e' + jQuery.imajnet.map.popupSearchLRS.search + '\x3c/div\x3e\x3cdiv class\x3d"searchLRSDialogContentBodyBorder dialogWhite50"\x3e\x3cdiv\x3e\x3cdiv class\x3d"left searchLRSItemName" id\x3d"LRSRoadLabel"\x3e' + b.roadLabel + ':\x3c/div\x3e\x3cdiv class\x3d"left"\x3e\x3cselect id\x3d"LRSRoadSelect" class\x3d"LRSSelect" \x3e\x3coption value\x3d""\x3e\x3c/option\x3e\x3c/select\x3e\x3c/div\x3e\x3cdiv class\x3d"clearLeft"\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"LRSSearchItem"\x3e\x3cdiv class\x3d"left searchLRSItemName" id\x3d"LRSRelativePointLabel"\x3e' +
      b.relativePointLabel + ':\x3c/div\x3e\x3cdiv class\x3d"left"\x3e\x3cselect id\x3d"LRSPRSelect" class\x3d"LRSSelect" disabled\x3d"disabled"\x3e\x3coption value\x3d""\x3e\x3c/option\x3e\x3c/select\x3e\x3c/div\x3e\x3cdiv class\x3d"clearLeft"\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"LRSSearchItem"\x3e\x3cdiv class\x3d"left searchLRSItemName" id\x3d"LRSRelativeAbscisaLabel"\x3e' + b.relativeAbscisaLabel + ':\x3c/div\x3e\x3cdiv class\x3d"left"\x3e\x3cinput type\x3d"text" id\x3d"LRSSearchRelative" onkeypress\x3d"return LRS.numbersOnly(event, \'searchRelative\');" disabled\x3d"disabled" /\x3e\x3c/div\x3e\x3cdiv class\x3d"clearLeft"\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"LRSSearchItem"\x3e\x3cdiv class\x3d"left searchLRSItemName" id\x3d"LRSCumulatedAbscisaLabel"\x3e' +
      b.cumulatedAbscisaLabel + ':\x3c/div\x3e\x3cdiv class\x3d"left"\x3e\x3cinput type\x3d"text" id\x3d"LRSSearchCumulated" onkeypress\x3d"return LRS.numbersOnly(event, \'searchCumulated\');" disabled\x3d"disabled" /\x3e\x3c/div\x3e\x3cdiv class\x3d"clearLeft"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"dialogButtonsContainer dialogBorder"\x3e\x3cinput type\x3d"button" id\x3d"searchLRSCancel" value\x3d"' + jQuery.imajnet.button.cancel + '" onclick\x3d"Dialog.hideDialog(\'searchLRSContainer\');" class\x3d"dialogButton dialogLRSButtonCancel dialogButtonCancel" /\x3e\x3cinput type\x3d"button" id\x3d"searchLRSSubmit" value\x3d"' +
      jQuery.imajnet.button.search + '" onclick\x3d"LRS.search();" class\x3d"dialogButton buttonSearch" disabled\x3d"disabled" /\x3e\x3cdiv class\x3d"clearRight"\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv id\x3d"searchLRSContainerDialogErrorsContainer" class\x3d"dialogErrorsContainer"\x3e\x3cdiv class\x3d"dialogErrorsInnerContainer"\x3e\x3cdiv class\x3d"left dialogErrorsCloseContainer"\x3e\x3cimg id\x3d"searchLRSContainerDialogErrorsClose" class\x3d"dialogErrorsClose" src\x3d"' + Imajnet.imajnetPath + 'img/buttons/BTN-FF7.PNG"\x3e\x3c/div\x3e\x3cdiv id\x3d"searchLRSContainerErrors" class\x3d"errors errorsText left"\x3e\x3c/div\x3e\x3cdiv class\x3d"clearLeft"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e');
    ImajnetUI.searchLRSContainer.hide();
    Nigsys.bindClickEvent(jQuery("#searchLRSContainerDialogErrorsClose"), function (a) {
      Nigsys.hideDialogError(ImajnetUI.searchLRSContainerId)
    });
    jQuery("#LRSRoadSelect").combobox({
      selected: function (a, b) {
        LRS.changeLRSRoad(jQuery(this))
      }
    });
    jQuery("#LRSPRSelect").combobox({
      selected: function (a, b) {
        LRS.changeLRSPR(jQuery(this).val())
      }
    });
    LRSRequest.getLRSRoads(a, null, LRSRequest.onGetLRSRoadsSuccess, LRSRequest.onGetLRSRoadsError);
    jQuery("#LRSSearchRelative").keyup(function (a) {
      13 ==
      a.keyCode && jQuery("#searchLRSSubmit").click()
    });
    jQuery("#LRSSearchCumulated").keyup(function (a) {
      13 == a.keyCode && jQuery("#searchLRSSubmit").click()
    })
  },
  openLRSDialog: function () {
    this.closeLRSDialog();
    this.initSearchLRS();
    ImajnetUI.showItem(ImajnetUI.searchLRSContainerId, Nigsys.browserIsIE7() ? 460 : 450, 385)
  },
  closeLRSDialog: function () {
    ImajnetUI.hideItem(ImajnetUI.searchLRSContainerId)
  },
  getFirstLRS: function (a) {
    if (!a.linearPosition)return null;
    var b = a.linearPosition;
    a.linearPosition && a.linearPosition[0] && (b =
      a.linearPosition[0]);
    return b
  },
  getGeometryFromLRS: function (a, b, c, d) {
    var e = jQuery.Deferred();
    ImajnetAPI.doImajnetRequestDeferred("POST", "/api/lrs/road/topology", LRS.getTopologyRequestData(a), null, null, null, null, null, d).done(function (a, c) {
      a = JSON.parse(a);
      "function" == typeof b && b(a, c);
      e.resolve(a, c)
    }).fail(function (a, b) {
      "function" == typeof c && c(a, b);
      e.reject(a, b)
    });
    return e.promise()
  },
  getLRSForPointsHTML: function (a, b, c) {
    var d = '\x3cdiv class\x3d"popupContentContainer optionsGroup LRSFeatures"\x3e\x3cdiv class\x3d"popupContentContainerTitle"\x3e' +
      jQuery.imajnet.settings.LRS.title + '\x3c/div\x3e\x3cdiv class\x3d"featureLRSContentContainer"\x3e';
    "addFeature" != a.type || a.featureData || (a.featureData = {});
    if (!b)return "addFeature" == a.type || "editFeature" == a.type ? d : jQuery.app.notifications.noLRS;
    Feature.imajnetLRSObjectToFeatureObject(a.featureData, b, c);
    "addFeature" == a.type && (Feature.addNewFeatureFirstLRS = jQuery.extend(Feature.addNewFeatureFirstLRS, a.featureData));
    a = LRS.getLabelsValueFromSettings(b.road.type, "referential");
    b.road.name && (d += '\x3cdiv class\x3d"left LRSFeatureItemName featureLRSRoadLabel"\x3e\x3cb\x3e' +
      a.roadLabel + '\x3c/b\x3e:\x26nbsp;\x3c/div\x3e\x3cdiv class\x3d"left"\x3e' + b.road.name + '\x3c/div\x3e\x3cdiv class\x3d"clearLeft"\x3e\x3c/div\x3e');
    LRS.getRoadUnitType(b.road.unit);
    b.cumulatedAbscisa && (d += '\x3cdiv class\x3d"featureLRSCumulatedAbscisaLabel"' + (ImajnetLRSSettings.LRSSettings.display.addressAndLRS.imajnetSettingsLRSShowCumulated ? "" : ' style\x3d"display: none;"') + '\x3e\x3cdiv class\x3d"left LRSFeatureItemName"\x3e\x3cb\x3e' + a.cumulatedAbscisaLabel + '\x3c/b\x3e:\x26nbsp;\x3c/div\x3e\x3cdiv class\x3d"left"\x3e' +
      Math.round(b.cumulatedAbscisa) + '\x3c/div\x3e\x3cdiv class\x3d"clearLeft"\x3e\x3c/div\x3e\x3c/div\x3e');
    b.relativeAbscisa || (b.relativeAbscisa = 0);
    b.keyPoint && (b.keyPoint.prNumber || 0 == b.keyPoint.prNumber) && (d += '\x3cdiv class\x3d"left LRSFeatureItemName featureLRSRelativePointLabel"\x3e\x3cb\x3e' + a.relativePointLabel + '\x3c/b\x3e:\x26nbsp;\x3c/div\x3e\x3cdiv class\x3d"left"\x3e(' + b.keyPoint.prNumber + "+" + Math.round(b.relativeAbscisa) + ')\x3c/div\x3e\x3cdiv class\x3d"clearLeft"\x3e\x3c/div\x3e');
    return d
  },
  getLRSFromCoordinates: function (a, b, c) {
    var d = jQuery.Deferred();
    if (!a || !b)return d.resolve(), d.promise();
    LRSRequest.getLRSForPoints(Array({lon: a, lat: b, height: c}), !0, !0).done(function (a) {
      a.linearPosition ? d.resolve(a.linearPosition) : d.reject()
    }).fail(function () {
      d.reject()
    });
    return d.promise()
  },
  getCoordinatesFromRelativeLRS: function (a, b, c) {
    var d = jQuery.Deferred();
    a && b || d.reject();
    a = "/api/lrs/relative/" + encodeURIComponent(JSON.stringify({
        roadIdentifier: a,
        prNumber: b,
        relativeAbscisa: c ? c : 0
      }));
    ImajnetAPI.doImajnetRequest("GET",
      a, null, null, null, null, null, null, null).done(function (a) {
      a.position ? d.resolve(a.position) : d.reject()
    }).fail(function () {
      d.reject()
    });
    return d.promise()
  },
  getCoordinatesFromAbsoluteLRS: function (a, b) {
    var c = jQuery.Deferred();
    if (!a)return c.resolve(), c.promise();
    url += encodeURIComponent(JSON.stringify({roadIdentifier: a, cumulatedAbscisa: b}));
    ImajnetAPI.doImajnetRequest("GET", url, null, null, null, null, null, null, null).done(function (a) {
      a.position ? c.resolve(a.position) : c.reject()
    }).fail(function () {
      c.reject()
    });
    return c.promise()
  },
  getCoordinatesFromLRS: function (a, b) {
    var c = jQuery.Deferred();
    if (!a || !a.roadIdentifier && !a.roadName)return c.reject();
    var d = "/api/lrs/", e = {};
    a.roadIdentifier && (e.roadIdentifier = a.roadIdentifier);
    e.roadName = a.roadName;
    LRS.isSearchRelative || b ? (e.prNumber = a.prNumber ? a.prNumber : 0, e.relativeAbscisa = a.relativeAbscisa ? a.relativeAbscisa : 0, d += "relative/") : (e.cumulatedAbscisa = a.cumulatedAbscisa ? a.cumulatedAbscisa : 0, d += "absolute/");
    d += encodeURIComponent(JSON.stringify(e));
    searchLRSAjaxRequest = ImajnetAPI.doImajnetRequest("GET",
      d, null, null, null, null, null, null, null).done(function (a) {
      a && a.position ? c.resolve(a) : c.reject()
    }).fail(function () {
      c.reject()
    });
    return c.promise()
  },
  getLRSToGeometrySearchObject: function (a, b, c, d, e, f, g) {
    b = parseInt(b);
    c = parseFloat(c);
    e = parseFloat(e);
    d = parseInt(d);
    g && b == d && c == e && (e += .1);
    return {roadName: a, startPR: b, startAbscisa: c, endPR: d, endAbscisa: e, lateralOffset: parseFloat(f)}
  },
  getLRSByRoadId: function (a, b) {
    for (var c = 0; c < a.length; c++)if (a[c].road.id == b)return a[c];
    return null
  }
};
LRSRequest = {
  LRSAjaxRequest: null,
  LRSPhotogrammetryAjaxRequest: null,
  LRSFeatureAjaxRequest: null,
  abortedLRSForGPSRequests: 0,
  abortLRSForGPSRequest: !0,
  getLRSFieldsCondensed: function (a, d) {
    d && (LRS.currentImageLRS = a);
    if (!a)return {roadName: "", HTML: jQuery.imajnet.map.errors.noLRS};
    d && jQuery("#imajnetImageLRSInTitle").html(a.road.name + " " + a.keyPoint.prNumber + "+" + Math.round(a.relativeAbscisa)).show();
    LRS.getLabelsValueFromSettings(a.road.type, "referential");
    LRS.getRoadUnitType(a.road.unit);
    var c = "";
    a.road.name &&
    (c += '\x3cdiv class\x3d"LRSImageItemRoad"\x3e' + a.road.name + "\x3c/div\x3e");
    a.relativeAbscisa && (c += '\x3cdiv class\x3d"LRSImageItemPRABS"\x3e' + a.keyPoint.prNumber + "+" + Math.floor(a.relativeAbscisa + .5) + "\x3c/div\x3e");
    c += '\x3cinput type\x3d"hidden" id\x3d"imajnetImageLRSType" value\x3d"' + a.road.type + '" /\x3e\x3cdiv class\x3d"clearLeft"\x3e\x3c/div\x3e';
    return {roadName: a.road.name, HTML: c}
  },
  getLRSFields: function (a, d) {
    if (!a)return {roadName: "", HTML: jQuery.imajnet.map.errors.noLRS};
    d && jQuery("#imajnetImageLRSInTitle").html(a.road.name +
      " " + a.keyPoint.prNumber + "+" + Math.round(a.relativeAbscisa)).show();
    var c = LRS.getLabelsValueFromSettings(a.road.type, "referential");
    LRS.getRoadUnitType(a.road.unit);
    var b = "";
    a.road.name && (b += '\x3cdiv class\x3d"LRSImageItem"\x3e\x3cdiv id\x3d"imajnetImageLRSRoadLabel" class\x3d"left LRSItemName"\x3e\x3cb\x3e' + c.roadLabel + '\x3c/b\x3e:\x26nbsp;\x3c/div\x3e\x3cdiv class\x3d"left LRSItemValue"\x3e' + a.road.name + '\x3c/div\x3e\x3cdiv class\x3d"clearLeft"\x3e\x3c/div\x3e\x3c/div\x3e');
    a.cumulatedAbscisa && (b +=
      '\x3cdiv class\x3d"LRSImageItem"' + (ImajnetLRSSettings.LRSSettings.display.addressAndLRS.imajnetSettingsLRSShowCumulated ? "" : ' style\x3d"display: none;"') + '\x3e\x3cdiv id\x3d"imajnetImageLRSCumulatedAbscisaLabel" class\x3d"left LRSItemName"\x3e\x3cb\x3e' + c.cumulatedAbscisaLabel + '\x3c/b\x3e:\x26nbsp;\x3c/div\x3e\x3cdiv class\x3d"left LRSItemValue"\x3e' + Math.floor(a.cumulatedAbscisa + .5) + '\x3c/div\x3e\x3cdiv class\x3d"clearLeft"\x3e\x3c/div\x3e\x3c/div\x3e');
    a.relativeAbscisa && (b += '\x3cdiv class\x3d"LRSImageItem"\x3e\x3cdiv class\x3d"left LRSItemName"\x3e\x3cb\x3e' +
      c.relativePointLabel + '\x3c/b\x3e:\x26nbsp;\x3c/div\x3e\x3cdiv class\x3d"left LRSItemValue"\x3e(' + a.keyPoint.prNumber + "+" + Math.floor(a.relativeAbscisa + .5) + ")\x3c/div\x3e\x3c/div\x3e");
    return {roadName: a.road.name, HTML: b}
  },
  getLinearPositionObject: function (a) {
    return a && a.linearPosition && a.linearPosition[0] ? a.linearPosition[0] : a.linearPosition
  },
  getFirstRoadObjectFromLRSResponse: function (a) {
    return a.linearPosition ? a.linearPosition[0] ? a.linearPosition[0].road : a.linearPosition : null
  },
  fillLRSContent: function (a,
                            d) {
    var c = null;
    a.linearPosition && (a.linearPosition[0] ? jQuery.each(a.linearPosition, function (a, e) {
      c = LRSRequest.getLRSFieldsCondensed(e, d);
      return !1
    }) : c = this.getLRSFieldsCondensed(a.linearPosition, d));
    return c
  },
  doLinearPositionRequest: function (a, d, c, b) {
    if (LRS.noRoads) "function" === typeof c && c(null); else return ImajnetAPI.doImajnetRequest("GET", "/api/lrs/linearposition/" + encodeURIComponent(a), null, function (a, c) {
      "function" === typeof d && (a = JSON.parse(a), LRS.transformReceivedLinearPosition(a.linearPosition),
        d(a, c))
    }, function (a, b) {
      "function" === typeof c && c(a, status, b)
    }, null, null, !0, b)
  },
  getLRS: function (a, d, c, b) {
    var e = jQuery.Deferred();
    this.LRSAjaxRequest && this.LRSAjaxRequest.abort();
    b || (b = {});
    b.timeout = Nigsys.requestsTimeout;
    this.LRSAjaxRequest = LRSRequest.doLinearPositionRequest(a, function (a, c) {
      "function" !== typeof d ? e.resolve() : (d(a, c), e.resolve(a, c))
    }, function (a, b) {
      "function" !== typeof c ? e.reject() : (c(a, status, b), e.reject(a, b))
    }, b);
    return e.promise()
  },
  getLRSForGPS: function (a, d, c) {
    this.abortLRSForGPSRequest &&
    this.LRSAjaxRequest && this.LRSAjaxRequest.abort();
    this.LRSAjaxRequest = LRSRequest.doLinearPositionRequest(a, function (a, c) {
      LRSRequest.abortedLRSForGPSRequests = 0;
      LRSRequest.abortLRSForGPSRequest = !0;
      "function" === typeof d && d(a)
    }, function (a, d) {
      "abort" == a.statusText || "timeout" == a.statusText ? (LRSRequest.abortedLRSForGPSRequests++, 5 < LRSRequest.abortedLRSForGPSRequests && (LRSRequest.abortLRSForGPSRequest = !1)) : "function" === typeof c && c(a, a.status)
    }, {timeout: Nigsys.requestsTimeout})
  },
  appendLRSForPosition: function (a,
                                  d) {
    if (a.parameter && a.parameter.position) {
      var c = LRSRequest.fillLRSContent(a, !1),
        b = ImageControler.currentPhotogrammetry.setIdByPosition(a.parameter.position);
      b || (b = d);
      0 != b && "" == jQuery("#LRSDoubleClickMessage_" + b).html() && (c.HTML += '\x3cdiv class\x3d"LRSDoubleClickMessage LRSDoubleClickMessage_' + b + '" style\x3d"margin-top: 5px;"\x3e' + jQuery.imajnet.map.clipboard.doubleClick + "\x3c/div\x3e");
      jQuery("#imajnetPhotogrammetryLRS_" + b).append(c.HTML)
    }
  },
  getLRSForPosition: function (a, d) {
    ImajnetAPI.mustAbortRequests &&
    null !== this.LRSPhotogrammetryAjaxRequest && this.LRSPhotogrammetryAjaxRequest.abort();
    this.LRSPhotogrammetryAjaxRequest = LRSRequest.doLinearPositionRequest(a, function (a, b) {
      a.linearPosition && (a.parameter.position.id = d, a.id = d, LRS.cachedPoints[a.parameter.position.lat + ":" + a.parameter.position.lon + ":" + a.parameter.position.height] = a, LRSRequest.appendLRSForPosition(a, d))
    }, null, null)
  },
  getLRSForPointsError: function () {
    jQuery(".LRSLineFeature").hide();
    jQuery(".loadingLRS").hide()
  },
  getLRSForPointRequest: function (a,
                                   d, c) {
    var b = jQuery.Deferred();
    if (LRS.noRoads)return b.reject(), b.promise();
    this.LRSFeatureAjaxRequest = ImajnetAPI.doImajnetRequestDeferred("POST", "/api/lrs/linearposition/batch/", null, null, null, null, null, !1, {
      params: {
        data: JSON.stringify({
          positions: a,
          range: 200
        })
      }
    }).done(function (a, g) {
      a = JSON.parse(a);
      if (!a.linearPosition)return b.reject(), !1;
      if (c)for (var f = 0; f < a.linearPosition.length; f++)LRS.transformReceivedLinearPosition(a.linearPosition[f].linearPosition);
      d && a.linearPosition[0] ? b.resolve(a.linearPosition[0]) :
        b.resolve(a.linearPosition)
    }).fail(function (a, c) {
      b.reject()
    });
    return b.promise()
  },
  getLRSForPoints: function (a, d, c) {
    return LRSRequest.getLRSForPointRequest(a, d, c)
  },
  onGetLRSRoadsSuccess: function (a) {
    var d = jQuery("#LRSRoadSelect");
    Nigsys.getComboboxInputContainer(d).val("");
    d.html('\x3coption value\x3d""\x3e\x3c/option\x3e');
    if (void 0 !== LRS.roadsData && null !== LRS.roadsData && void 0 != LRS.roadsData.roads && null !== LRS.roadsData.roads) jQuery.each(LRS.roadsData.roads, function (a, b) {
      d.append('\x3coption value\x3d"' +
        b.id + '"\x3e' + b.name + "\x3c/option\x3e")
    }); else LRSRequest.onGetLRSRoadsError()
  },
  onGetLRSRoadsError: function (a) {
    a = jQuery("#LRSRoadSelect");
    (a = Nigsys.getComboboxInputContainer(a.parent())) && a.val("");
    jQuery("#LRSRoadSelect").html('\x3coption value\x3d""\x3e\x3c/option\x3e')
  },
  onGetLRSRoads: function (a, d, c, b) {
    var e = jQuery.Deferred();
    LRSRoadsAjaxRequest = ImajnetAPI.doImajnetRequest("GET", ImajnetProtocol.getUsernameForUrl("/api/lrs/roads/?lrsType\x3d" + a), null, function (a, b) {
      a = JSON.parse(a);
      LRS.roadsData = a;
      if ("function" === typeof c) {
        var d = c(a, b);
        if (Nigsys.isDeferred(d)) {
          d.done(function () {
            e.resolve(a, b)
          }).fail(function () {
            e.resolve(a, b)
          });
          return
        }
      }
      e.resolve(a, b)
    }, function (a, c) {
      "function" === typeof b && b(a, c);
      e.reject()
    }, null, null, !0, d);
    return e.promise()
  },
  getLRSRoads: function (a, d, c, b) {
    return LRSRequest.onGetLRSRoads(a, d, c, b)
  },
  onGetRoad: function (a, d, c, b) {
    var e = jQuery.Deferred();
    ImajnetAPI.doImajnetRequest("GET", "/api/lrs/road/pr?roadid\x3d" + a, null, function (a, b) {
      a = JSON.parse(a);
      "function" === typeof d && d(a, b);
      e.resolve(a, b)
    }, function (a, b) {
      "function" === typeof c && c(a, b);
      e.reject(a, b)
    }, null, null, !1, b);
    return e.promise()
  },
  getRoad: function (a, d, c, b) {
    return LRSRequest.onGetRoad(a, d, c, b)
  },
  search: function (a, d) {
    var c = "/api/lrs/", b = {};
    LRS.isSearchRelative || d ? (b.roadIdentifier = a.roadIdentifier, b.prNumber = a.prNumber, b.relativeAbscisa = a.relativeAbscisa, c += "relative/" + encodeURIComponent(JSON.stringify(b))) : (b.roadIdentifier = a.roadIdentifier, b.cumulatedAbscisa = a.cumulatedAbscisa, c += "absolute/" + encodeURIComponent(JSON.stringify(b)));
    searchLRSAjaxRequest = ImajnetAPI.doImajnetRequest("GET", c, null, function (a, b) {
      (a = JSON.parse(a)) && a.position ? "undefined" === typeof initImajnet ? ImajnetAPI.getClosestPosition(a.position.lat, a.position.lon, ImajnetSettings.rangeLRS) : initImajnet(!0).done(function () {
        ImajnetAPI.getClosestPosition(a.position.lat, a.position.lon, ImajnetSettings.rangeLRS)
      }) : LRS.searchLRSError()
    }, function (a, b) {
      LRS.searchLRSError()
    }, null, null, !1, null)
  }
};
