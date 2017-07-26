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