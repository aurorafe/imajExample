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