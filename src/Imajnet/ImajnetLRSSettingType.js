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