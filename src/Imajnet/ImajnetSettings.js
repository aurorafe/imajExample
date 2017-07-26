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