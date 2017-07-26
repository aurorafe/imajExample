/**
 * Created by FDD on 2017/7/26.
 */
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