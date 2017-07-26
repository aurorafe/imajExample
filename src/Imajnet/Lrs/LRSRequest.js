/**
 * Created by FDD on 2017/7/26.
 */
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