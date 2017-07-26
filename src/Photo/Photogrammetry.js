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