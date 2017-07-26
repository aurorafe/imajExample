/**
 * Created by FDD on 2017/7/26.
 */
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