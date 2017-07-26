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