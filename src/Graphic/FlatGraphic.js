/**
 * Created by FDD on 2017/7/26.
 */
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