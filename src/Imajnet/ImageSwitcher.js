/**
 * Created by FDD on 2017/7/26.
 */
var ImajnetImageSwitcher = {
  imageSwitcherContainerId: "popupImageSwitcher",
  closestImagesAjaxRequest: null,
  orientedImages: null,
  orderedImages: [],
  orderedImagesLength: 0,
  mouseScrollIndex: 0,
  isMouseWheel: !1,
  ORDERED_IMAGE_WIDTH: 60,
  ORDERED_IMAGE_HEIGHT: 50,
  ORDERED_IMAGE_DATE_HEIGHT: 11,
  ORDERED_IMAGES_NO: 3,
  ARROWS_NO: 8,
  ORDERED_IMAGE_BIG_WIDTH: 0,
  ORDERED_IMAGE_BIG_HEIGHT: 0,
  ORDERED_IMAGE_DATE_BIG_HEIGHT: 21,
  isBigMode: !1,
  orderedImagesMainContainer: null,
  orderedImagesContainer: null,
  initialScrollLeft: 0,
  frontOrientedImages: null,
  dragArrowWidth: 81,
  dragLeftPosition: null,
  dragRightPosition: null,
  getImageItemHtml: function (a) {
    var b = "";
    switch (a) {
      case 0:
        b = "margin-top: 14px; margin-left: 11px;";
        break;
      case 1:
        b = "margin-top: 27px; margin-left: -9px;";
        break;
      case 2:
        b = "margin-top: 14px; margin-left: 5px;";
        break;
      case 3:
        b = "margin-top: -6px; margin-left: -9px;";
        break;
      case 4:
        b = "margin-top: 5px; margin-left: 11px;";
        break;
      case 5:
        b = "margin-top: -6px; margin-left: 29px;";
        break;
      case 6:
        b = "margin-top: 11px; margin-left: 14px;";
        break;
      case 7:
        b = "margin-top: 27px; margin-left: 27px;"
    }
    return '\x3cdiv class\x3d"imageSwitcherItem"\x3e' +
      (this.orientedImages[a] && this.orientedImages[a].length ? '\x3cimg id\x3d"orientedImage_' + a + '" onclick\x3d"ImajnetImageSwitcher.goToImage(' + a + ');" onmouseover\x3d"ImajnetImageSwitcher.imageMouseOver(' + a + ');" onmouseout\x3d"ImajnetImageSwitcher.imageMouseOut();" src\x3d"' + Imajnet.imajnetPath + "img/imageSwitcher/" + a + ".png?" + Imajnet.version + '" class\x3d"imajnetImageSwitcherImageItem" style\x3d"' + b + '" /\x3e' : "\x26nbsp;") + "\x3c/div\x3e"
  },
  getFrontOrientedImageIndex: function (a, b) {
    if (0 != a)return b;
    for (var d =
      0; d < this.orientedImages[a].length; d++)if (this.orientedImages[a][d].id == this.frontOrientedImages[b].id)return d
  },
  imageMouseScroll: function (a, b) {
    b = Nigsys.getDelta(a, b);
    var d = a.data;
    if (!(2 > ImajnetImageSwitcher.orientedImages[d].length)) {
      ImajnetImageSwitcher.isMouseWheel = !0;
      var c = ImajnetImageSwitcher.orientedImages[d].length;
      0 < b ? (ImajnetImageSwitcher.mouseScrollIndex++, ImajnetImageSwitcher.mouseScrollIndex >= c && (ImajnetImageSwitcher.mouseScrollIndex = 0)) : (ImajnetImageSwitcher.mouseScrollIndex--, 0 > ImajnetImageSwitcher.mouseScrollIndex &&
      (ImajnetImageSwitcher.mouseScrollIndex = c - 1));
      ImajnetImageSwitcher.loadImage(d, ImajnetImageSwitcher.getFrontOrientedImageIndex(d, ImajnetImageSwitcher.mouseScrollIndex))
    }
  },
  compareTimestamp: function (a, b) {
    return Nigsys.getDateObject(a.timestamp) - Nigsys.getDateObject(b.timestamp)
  },
  getOneImageFormEachSecquenceTraceTimestampOrdered: function () {
    if (!this.orientedImages || !this.orientedImages[0])return null;
    var a = Nigsys.cloneObject(ImajnetMap.currentPosition);
    a.imageIndex = 0;
    var b = Array(a);
    jQuery.each(this.orientedImages[0],
      function (a, c) {
        for (var e = !1, g = 0; g < b.length; g++)if (b[g].traceId == c.traceId) {
          e = !0;
          break
        }
        e || c.traceId == ImajnetMap.currentPosition.traceId || (e = Nigsys.cloneObject(c), e.imageIndex = a, b.push(e))
      });
    return b.sort(this.compareTimestamp)
  },
  loadImageForSlider: function (a, b) {
    var d = ImajnetAPI.buildImageURL(b), c = new Image;
    jQuery(c).bind("error", function (b) {
      a.parent().addClass("imajnetLayerNoImage")
    });
    jQuery(c).load(function () {
      a.attr("src", d)
    }).attr("src", d)
  },
  loadImage: function (a, b, d) {
    jQuery("body").css("cursor", "progress");
    var c = null, c = d && 0 == a && -1 == b ? ImajnetMap.currentPosition : this.orientedImages[a][b],
      e = ImajnetAPI.buildImageURL(c);
    a = new Image;
    jQuery(a).bind("error", function (a) {
      ImajnetUI.imageSwitcherImage.attr("src", "").hide();
      ImajnetUI.imageSwitcherImageContainer.is(":visible") && ImajnetUI.imageSwitcherImageContainer.addClass("imajnetLayerNoImage");
      ImajnetMap.currentPosition && Imajnet.addImageDate(ImajnetMap.currentPosition.timestamp);
      jQuery("body").css("cursor", "default")
    });
    ImajnetMap.hideImageSwitcher();
    ImajnetMap.setOrientationMarker(c,
      ImajnetMap.imajboxOrientedImagesDimension, "#FF0000", -3);
    ImajnetUI.imageSwitcherImage.show();
    ImajnetUI.imageSwitcherImageContainer.show();
    jQuery(a).load(function () {
      ImajnetUI.imageSwitcherImage.attr("src", e);
      c && Imajnet.addImageDate(c.timestamp);
      jQuery("body").css("cursor", "default")
    }).attr("src", e)
  },
  goToImage: function (a) {
    ImajnetZoom.left = -1;
    var b = this.getFrontOrientedImageIndex(a, this.mouseScrollIndex);
    this.orientedImages[a][b] && (Nigsys.showLoading(ImajnetUI.imageContainer), ImajnetAPI.setImajnetImage({position: this.orientedImages[a][b]}))
  },
  goToOrderedImage: function (a) {
    ImajnetZoom.left = -1;
    ImajnetImageSwitcher.hideBigMode();
    ImajnetImageSwitcher.orderedImagesMainContainer.hide();
    ImajnetImageSwitcher.isBigMode = !1;
    this.orderedImages[a] && (Nigsys.showLoading(ImajnetUI.imageContainer), ImajnetAPI.setImajnetImage({position: this.orderedImages[a]}))
  },
  imageMouseOver: function (a) {
    this.mouseScrollIndex || this.loadImage(a, ImajnetImageSwitcher.getFrontOrientedImageIndex(a, 0))
  },
  imageMouseOut: function () {
    this.isMouseWheel = !1;
    this.mouseScrollIndex = 0;
    ImajnetUI.imageSwitcherImage.attr("src",
      "").hide();
    ImajnetUI.imageSwitcherImageContainer.hide();
    ImajnetMap.currentPosition && Imajnet.addImageDate(ImajnetMap.currentPosition.timestamp);
    ImajnetMap.hideImageSwitcher()
  },
  getOrderedImageHtml: function (a, b, d, c) {
    return '\x3cdiv class\x3d"left imajnetImageSwitcherOrderedImageItem" style\x3d"width: ' + ImajnetImageSwitcher.ORDERED_IMAGE_WIDTH + "px; height: " + (ImajnetImageSwitcher.ORDERED_IMAGE_HEIGHT + ImajnetImageSwitcher.ORDERED_IMAGE_DATE_HEIGHT + 2) + 'px;"\x3e\x3cdiv class\x3d"imageSwitcherImageItemContainer' +
      (-2 < a ? " imajnetLoading" : "") + '" onmouseout\x3d"ImajnetImageSwitcher.imageMouseOut();" style\x3d"height: ' + ImajnetImageSwitcher.ORDERED_IMAGE_HEIGHT + 'px;"\x3e\x3cimg class\x3d"imageSwitcherSmall_' + c + ' imajnetImageSwitcherOrderedImageItemImage" onclick\x3d"ImajnetImageSwitcher.goToOrderedImage(' + c + ');" onmouseover\x3d"ImajnetImageSwitcher.orderedImageMouseOver(' + a + ', jQuery(this));" style\x3d"width: ' + ImajnetImageSwitcher.ORDERED_IMAGE_WIDTH + "px; height: " + ImajnetImageSwitcher.ORDERED_IMAGE_HEIGHT + 'px;" src\x3d"' +
      (-2 == a ? b : "") + '" /\x3e\x3c/div\x3e\x3cdiv id\x3d"orderedImageDate_' + a + '" class\x3d"orderedImageDate" style\x3d"width: ' + ImajnetImageSwitcher.ORDERED_IMAGE_WIDTH + "px; height: " + ImajnetImageSwitcher.ORDERED_IMAGE_DATE_HEIGHT + "px; font-size: " + (ImajnetImageSwitcher.ORDERED_IMAGE_DATE_HEIGHT - 1) + 'px;"\x3e' + d + "\x3c/div\x3e\x3c/div\x3e"
  },
  applySmallStyleToOrderedImages: function () {
    jQuery("#scrollOrderedImagesLeft").width(9).height(ImajnetImageSwitcher.ORDERED_IMAGE_HEIGHT);
    jQuery(".scrollOrderedImagesLeftImage").width(9).height(ImajnetImageSwitcher.ORDERED_IMAGE_HEIGHT).css("background-image",
      'url("' + Imajnet.imajnetPath + "img/imageIcons/imageSwitcherLeftArrow.png?" + Imajnet.version + '")').css("margin-top", ImajnetImageSwitcher.ORDERED_IMAGE_HEIGHT / 2 - 25);
    jQuery(".scrollOrderedImagesRight").width(9).height(ImajnetImageSwitcher.ORDERED_IMAGE_HEIGHT);
    jQuery(".scrollOrderedImagesRightImage").width(9).height(ImajnetImageSwitcher.ORDERED_IMAGE_HEIGHT).css("background-image", 'url("' + Imajnet.imajnetPath + "img/imageIcons/imageSwitcherRightArrow.png?" + Imajnet.version + '")').css("margin-top", ImajnetImageSwitcher.ORDERED_IMAGE_HEIGHT /
      2 - 25);
    var a = 1;
    Nigsys.browserIsIE8() ? a = 2 : Nigsys.browserIsWebkit() && (a = 4);
    jQuery(".imajnetImageSwitcherOrderedImagesInnerContainer").width(ImajnetImageSwitcher.ORDERED_IMAGES_NO * ImajnetImageSwitcher.ORDERED_IMAGE_WIDTH + 2).height(ImajnetImageSwitcher.ORDERED_IMAGE_HEIGHT + ImajnetImageSwitcher.ORDERED_IMAGE_DATE_HEIGHT + a).css("overflow-x", "hidden");
    ImajnetImageSwitcher.orderedImagesMainContainer.width(ImajnetImageSwitcher.ORDERED_IMAGES_NO * ImajnetImageSwitcher.ORDERED_IMAGE_WIDTH + 20).height(ImajnetImageSwitcher.ORDERED_IMAGE_HEIGHT +
      ImajnetImageSwitcher.ORDERED_IMAGE_DATE_HEIGHT + 2);
    ImajnetImageSwitcher.orderedImagesContainer.height(ImajnetImageSwitcher.ORDERED_IMAGE_HEIGHT + ImajnetImageSwitcher.ORDERED_IMAGE_DATE_HEIGHT + 2);
    jQuery(".orderedImageDate").attr("title", jQuery.imajnet.image.switcher.centerButtonTitle)
  },
  centerImageMouseOver: function () {
    ImajnetImageSwitcher.orderedImagesContainer.html("");
    jQuery(".scrollOrderedImagesLeftImage").removeClass("opacity0");
    jQuery(".scrollOrderedImagesRightImage").removeClass("opacity0");
    var a =
      0;
    ImajnetImageSwitcher.initialScrollLeft = 0;
    this.orderedImagesLength = this.orderedImages.length;
    jQuery.each(this.orderedImages, function (b, d) {
      var c = d.imageIndex;
      d.traceId == ImajnetMap.currentPosition.traceId && (a = b, c = -1, 0 == b && ImajnetImageSwitcher.orderedImagesLength < ImajnetImageSwitcher.ORDERED_IMAGES_NO && (ImajnetImageSwitcher.orderedImagesContainer.append(ImajnetImageSwitcher.getOrderedImageHtml(-2, Imajnet.imajnetPath + "img/imageIcons/imageSwitcherNoImageLeft.png?" + Imajnet.version, "")), ImajnetImageSwitcher.orderedImagesLength++));
      ImajnetImageSwitcher.orderedImagesContainer.append(ImajnetImageSwitcher.getOrderedImageHtml(c, "", d.timestamp, b));
      var e = ImajnetAPI.buildImageURL(d), c = new Image;
      jQuery(c).bind("error", {id: b, url: e}, function (a) {
        jQuery(".imageSwitcherSmall_" + a.data.id).parent().addClass("imajnetSwitcherNoImage")
      });
      jQuery(c).load({id: b}, function (a) {
        a = jQuery(".imageSwitcherSmall_" + a.data.id);
        a.attr("src", e);
        a.parent().removeClass("imajnetLayerNoImage")
      }).attr("src", e);
      b == ImajnetImageSwitcher.orderedImages.length - 1 && ImajnetImageSwitcher.orderedImagesLength <
      ImajnetImageSwitcher.ORDERED_IMAGES_NO && (ImajnetImageSwitcher.orderedImagesContainer.append(ImajnetImageSwitcher.getOrderedImageHtml(-2, Imajnet.imajnetPath + "img/imageIcons/imageSwitcherNoImageRight.png?" + Imajnet.version, "")), ImajnetImageSwitcher.orderedImagesLength++)
    });
    ImajnetImageSwitcher.applySmallStyleToOrderedImages();
    (Nigsys.browserIsWebkit() || Nigsys.browserIsIE8()) && jQuery(".orderedImageDate").css("padding-top", "1px");
    jQuery(".orderedImageDate").bind("click", function (a) {
      ImajnetImageSwitcher.centerImageClick(a)
    });
    ImajnetImageSwitcher.orderedImagesContainer.width(this.orderedImagesLength * this.ORDERED_IMAGE_WIDTH);
    a <= (this.ORDERED_IMAGES_NO + 1) / 2 ? jQuery(".scrollOrderedImagesLeftImage").addClass("opacity0") : ImajnetImageSwitcher.initialScrollLeft = (a - (this.ORDERED_IMAGES_NO - 1)) * this.ORDERED_IMAGE_WIDTH;
    this.orderedImagesLength - ImajnetImageSwitcher.initialScrollLeft / this.ORDERED_IMAGE_WIDTH <= this.ORDERED_IMAGES_NO && jQuery(".scrollOrderedImagesRightImage").addClass("opacity0");
    ImajnetImageSwitcher.orderedImagesMainContainer.show();
    jQuery(".imajnetImageSwitcherOrderedImagesInnerContainer").scrollLeft(ImajnetImageSwitcher.initialScrollLeft)
  },
  centerImageMouseOut: function (a) {
    ImajnetImageSwitcher.orderedImagesMainContainer.hide()
  },
  applyBigStyleToOrderedImages: function () {
    jQuery("#scrollOrderedImagesLeft").width(50).height(ImajnetImageSwitcher.ORDERED_IMAGE_BIG_HEIGHT);
    jQuery(".scrollOrderedImagesLeftImage").width(50).height(50).css("background-image", 'url("' + Imajnet.imajnetPath + "img/imageIcons/imageSwitcherLeftArrow.png?" + Imajnet.version +
      '")').css("margin-top", ImajnetImageSwitcher.ORDERED_IMAGE_BIG_HEIGHT / 2 - 25);
    jQuery(".scrollOrderedImagesRight").width(50).height(ImajnetImageSwitcher.ORDERED_IMAGE_BIG_HEIGHT);
    jQuery(".scrollOrderedImagesRightImage").width(50).height(50).css("background-image", 'url("' + Imajnet.imajnetPath + "img/imageIcons/imageSwitcherRightArrow.png?" + Imajnet.version + '")').css("margin-top", ImajnetImageSwitcher.ORDERED_IMAGE_BIG_HEIGHT / 2 - 25);
    jQuery.each(jQuery(".imageSwitcherImageItemContainer"), function (a, b) {
      var e = jQuery(b);
      e.height(ImajnetImageSwitcher.ORDERED_IMAGE_BIG_HEIGHT);
      e.hasClass("imajnetSwitcherNoImage") && e.removeClass("imajnetSwitcherNoImage").addClass("imajnetLayerNoImage")
    });
    jQuery(".imajnetImageSwitcherOrderedImageItemImage").width(ImajnetImageSwitcher.ORDERED_IMAGE_BIG_WIDTH).height(ImajnetImageSwitcher.ORDERED_IMAGE_BIG_HEIGHT);
    var a = jQuery(".orderedImageDate");
    a.removeAttr("title");
    a.width(ImajnetImageSwitcher.ORDERED_IMAGE_BIG_WIDTH).height(ImajnetImageSwitcher.ORDERED_IMAGE_DATE_BIG_HEIGHT).css("font-size",
      ImajnetImageSwitcher.ORDERED_IMAGE_DATE_BIG_HEIGHT - 1);
    for (var b = 0; b < a.length; b++)a[b].innerHTML = Nigsys.formatImajnetImageDate(a[b].innerHTML);
    jQuery(".imajnetImageSwitcherOrderedImageItem").width(ImajnetImageSwitcher.ORDERED_IMAGE_BIG_WIDTH).height(ImajnetImageSwitcher.ORDERED_IMAGE_BIG_HEIGHT + ImajnetImageSwitcher.ORDERED_IMAGE_DATE_BIG_HEIGHT + 2);
    ImajnetImageSwitcher.orderedImagesContainer.width(this.orderedImagesLength * this.ORDERED_IMAGE_BIG_WIDTH).height(ImajnetImageSwitcher.ORDERED_IMAGE_BIG_HEIGHT +
      ImajnetImageSwitcher.ORDERED_IMAGE_DATE_BIG_HEIGHT + 2);
    jQuery(".imajnetImageSwitcherOrderedImagesInnerContainer").width(ImajnetImageSwitcher.ORDERED_IMAGES_NO * ImajnetImageSwitcher.ORDERED_IMAGE_BIG_WIDTH + 2).height(ImajnetImageSwitcher.ORDERED_IMAGE_BIG_HEIGHT + ImajnetImageSwitcher.ORDERED_IMAGE_DATE_BIG_HEIGHT + 4);
    ImajnetImageSwitcher.orderedImagesMainContainer.width(ImajnetImageSwitcher.ORDERED_IMAGES_NO * ImajnetImageSwitcher.ORDERED_IMAGE_BIG_WIDTH + 60).height(ImajnetImageSwitcher.ORDERED_IMAGE_BIG_HEIGHT +
      ImajnetImageSwitcher.ORDERED_IMAGE_DATE_BIG_HEIGHT + 2);
    jQuery(".imajnetImageSwitcherOrderedImagesInnerContainer").height(ImajnetImageSwitcher.ORDERED_IMAGE_BIG_HEIGHT + ImajnetImageSwitcher.ORDERED_IMAGE_DATE_BIG_HEIGHT + 16).css("overflow-x", "auto")
  },
  hideBigMode: function () {
    jQuery.colorbox.close()
  },
  onCenterImagesScroll: function (a) {
    0 >= jQuery(".imajnetImageSwitcherOrderedImagesInnerContainer").scrollLeft() ? jQuery(".scrollOrderedImagesLeftImage").addClass("opacity0") : jQuery(".scrollOrderedImagesLeftImage").removeClass("opacity0");
    jQuery(".imajnetImageSwitcherOrderedImagesInnerContainer").scrollLeft() == ImajnetImageSwitcher.orderedImagesContainer.width() - ImajnetImageSwitcher.ORDERED_IMAGES_NO * ImajnetImageSwitcher.ORDERED_IMAGE_BIG_WIDTH ? jQuery(".scrollOrderedImagesRightImage").addClass("opacity0") : jQuery(".scrollOrderedImagesRightImage").removeClass("opacity0")
  },
  centerImageClick: function (a) {
    a.relatedTarget || (ImajnetImageSwitcher.isBigMode = !0, ImajnetImageSwitcher.applyBigStyleToOrderedImages(), jQuery.colorbox({
      html: ImajnetImageSwitcher.orderedImagesMainContainer.html(),
      open: !0, onLoad: function () {
        jQuery("#cboxClose").remove();
        jQuery("#cboxBottomLeft").height(9).css("background-position", "0 -66px");
        jQuery("#cboxBottomCenter").height(9);
        jQuery("#cboxBottomRight").height(9).css("background-position", "-36px -66px")
      }, onComplete: function () {
        ImajnetImageSwitcher.orderedImagesMainContainer.show();
        jQuery(".imajnetImageSwitcherOrderedImagesInnerContainer").scrollLeft(ImajnetImageSwitcher.initialScrollLeft / ImajnetImageSwitcher.ORDERED_IMAGE_WIDTH * ImajnetImageSwitcher.ORDERED_IMAGE_BIG_WIDTH)
      },
      onCleanup: function () {
        ImajnetImageSwitcher.orderedImagesMainContainer.hide();
        jQuery("#cboxLoadedContent").html("");
        ImajnetImageSwitcher.isBigMode = !1
      }
    }))
  },
  orderedImageMouseOver: function (a, b) {
    jQuery(".imajnetImageSwitcherOrderedImageItemImage").removeClass("opacity80");
    jQuery(".imajnetImageSwitcherOrderedImageItemImage").removeClass("selectedImageBorder");
    jQuery(".orderedImageDate").css("font-weight", "normal");
    jQuery(".orderedImageDate").removeClass("orderedImageDateBorder");
    b.parent().removeClass("imajnetLoading");
    b.addClass("opacity80");
    b.addClass("selectedImageBorder");
    jQuery("#orderedImageDate_" + a).css("font-weight", "bold");
    jQuery("#orderedImageDate_" + a).addClass("orderedImageDateBorder");
    -1 > a || (ImajnetImageSwitcher.orderedImagesMainContainer.show(), this.loadImage(0, a, !0))
  },
  orderedImagesMouseOut: function (a, b) {
    ImajnetImageSwitcher.orderedImagesMainContainer.hide()
  },
  getImageWidth: function () {
    return ImajnetImageSwitcher.isBigMode ? ImajnetImageSwitcher.ORDERED_IMAGE_BIG_WIDTH : ImajnetImageSwitcher.ORDERED_IMAGE_WIDTH
  },
  scrollOrderedImages: function (a) {
    var b = ImajnetImageSwitcher.getImageWidth();
    if (!(ImajnetImageSwitcher.orderedImagesContainer.width() <= ImajnetImageSwitcher.ORDERED_IMAGES_NO * b)) {
      var d = jQuery(".imajnetImageSwitcherOrderedImagesInnerContainer"), c = d.scrollLeft();
      a == ImajnetAPI.PREVIOUS ? (c -= b, 0 >= c && jQuery(".scrollOrderedImagesLeftImage").addClass("opacity0"), jQuery(".scrollOrderedImagesRightImage").removeClass("opacity0")) : (c += b, c >= ImajnetImageSwitcher.orderedImagesContainer.width() - ImajnetImageSwitcher.ORDERED_IMAGES_NO *
      b && jQuery(".scrollOrderedImagesRightImage").addClass("opacity0"), jQuery(".scrollOrderedImagesLeftImage").removeClass("opacity0"));
      d.scrollLeft(c)
    }
  },
  compareImageId: function (a, b) {
    return parseInt(a.id) - parseInt(b.id)
  },
  initSliderImagesDimension: function () {
    ImajnetUI.setSlidersWidth(ImajnetUI.imajnetImageContainerSize.width);
    ImajnetUI.setSliderDraggableContainment()
  },
  dragSliderLeft: function () {
    ImajnetImageSwitcher.dragLeftPosition && (ImajnetZoom.left = -1, ImajnetUI.imajnetImageSliderInnerContainer.css("left",
      0), Nigsys.showLoading(ImajnetUI.imageContainer), ImajnetAPI.setImajnetImage({position: ImajnetImageSwitcher.dragLeftPosition}))
  },
  dragSliderRight: function () {
    ImajnetImageSwitcher.dragRightPosition && (ImajnetZoom.left = -1, ImajnetUI.imajnetImageSliderInnerContainer.css("left", -2 * (ImajnetUI.imageContainer.width() + ImajnetImageSwitcher.dragArrowWidth)), Nigsys.showLoading(ImajnetUI.imageContainer), ImajnetAPI.setImajnetImage({position: ImajnetImageSwitcher.dragRightPosition}))
  },
  getImageSwitcherHtml: function (a) {
    if (ImajnetMap.currentPosition) {
      ImajnetImageSwitcher.orientedImages =
        [];
      ImajnetImageSwitcher.frontOrientedImages = [];
      var b = [], d = [], c = null, e = null, g = null, k = null;
      jQuery.each(a, function (a, f) {
        if (f.id != ImajnetMap.currentPosition.id) {
          var h = ImageControler.currentSurveyTrace.calculateOrientationIndex(ImajnetMap.currentPosition.orientation.yaw, f.orientation.yaw);
          ImajnetImageSwitcher.orientedImages[h] || (ImajnetImageSwitcher.orientedImages[h] = []);
          ImajnetImageSwitcher.orientedImages[h].push(f);
          0 == h ? f.traceId == ImajnetMap.currentPosition.traceId ? parseInt(f.id) < parseInt(ImajnetMap.currentPosition.id) ?
            b.push(f) : ImajnetImageSwitcher.frontOrientedImages.push(f) : d.push(f) : 1 != h || g ? 2 != h || k ? 6 != h || e ? 7 != h || c || (c = f) : e = f : k = f : g = f
        }
      });
      c ? (ImajnetImageSwitcher.dragLeftPosition = c, jQuery("#imajnetLayerLeftArrowImage").attr("src", Imajnet.imajnetPath + "img/imageSwitcher/7.png?" + Imajnet.version)) : (ImajnetImageSwitcher.dragLeftPosition = e, jQuery("#imajnetLayerLeftArrowImage").attr("src", Imajnet.imajnetPath + "img/imageSwitcher/6.png?" + Imajnet.version));
      g ? (ImajnetImageSwitcher.dragRightPosition = g, jQuery("#imajnetLayerRightArrowImage").attr("src",
        Imajnet.imajnetPath + "img/imageSwitcher/1.png?" + Imajnet.version)) : (ImajnetImageSwitcher.dragRightPosition = k, jQuery("#imajnetLayerRightArrowImage").attr("src", Imajnet.imajnetPath + "img/imageSwitcher/2.png?" + Imajnet.version));
      ImajnetImageSwitcher.initSliderImagesDimension();
      ImajnetImageSwitcher.frontOrientedImages.sort(ImajnetImageSwitcher.compareImageId);
      for (a = 0; a < d.length; a++)ImajnetImageSwitcher.frontOrientedImages.push(d[a]);
      b.sort(ImajnetImageSwitcher.compareImageId);
      for (a = 0; a < b.length; a++)ImajnetImageSwitcher.frontOrientedImages.push(b[a]);
      a = "";
      0 < this.orientedImages.length && (a += this.getImageItemHtml(7) + this.getImageItemHtml(0) + this.getImageItemHtml(1) + this.getImageItemHtml(6) + '\x3cdiv class\x3d"imageSwitcherItem"\x3e\x3cimg id\x3d"imajnetImageSwitcherCenterImage" src\x3d"' + Imajnet.imajnetPath + "img/imageSwitcher/arrowsPointOfView.png?" + Imajnet.version + '" width\x3d"63" height\x3d"42" class\x3d"opacity30" /\x3e\x3c/div\x3e' + this.getImageItemHtml(2) + this.getImageItemHtml(5) + this.getImageItemHtml(4) + this.getImageItemHtml(3));
      return a + '\x3cdiv class\x3d"clearLeft"\x3e\x3c/div\x3e'
    }
  },
  onClosestImagesReceived: function (a) {
    ImajnetUI.disableDraggable(ImajnetUI.imajnetImageSliderInnerContainer);
    ImajnetUI.enableImageDrag();
    if (a && (a = JSON.parse(a), a.parameter && a.positions && ImajnetMap.currentPosition && a.parameter.coordinates.id == ImajnetMap.currentPosition.id)) {
      jQuery("#imajnetImageSwitcher").html(ImajnetImageSwitcher.getImageSwitcherHtml(a.positions));
      for (a = 0; 8 > a; a++)jQuery("#orientedImage_" + a).on("mousewheel DOMMouseScroll", a, function (a, d) {
        ImajnetImageSwitcher.imageMouseScroll(a, d)
      });
      ImajnetImageSwitcher.orderedImages = ImajnetImageSwitcher.getOneImageFormEachSecquenceTraceTimestampOrdered();
      ImajnetImageSwitcher.orientedImages[0] && ImajnetImageSwitcher.orderedImages && 1 < ImajnetImageSwitcher.orderedImages.length ? jQuery("#imajnetImageSwitcherCenterImage").bind({
        mouseover: function (a) {
          a.relatedTarget && Nigsys.stringContains(a.relatedTarget.className, "orderedImageDate") || ImajnetImageSwitcher.centerImageMouseOver()
        }, mouseout: function (a) {
          a.relatedTarget && Nigsys.stringContains(a.relatedTarget.className,
            "orderedImageDate") || ImajnetImageSwitcher.centerImageMouseOut()
        }, click: ImajnetImageSwitcher.centerImageClick
      }).prop("title", jQuery.imajnet.image.switcher.centerButtonTitle).removeClass("opacity30") : jQuery("#imajnetImageSwitcherCenterImage").prop("title", ImajnetUI.imageDate);
      ImajnetUI.imageContainer.append('\x3cdiv id\x3d"imajnetImageSwitcherOrderedImagesContainer" style\x3d"width: ' + (ImajnetImageSwitcher.ORDERED_IMAGES_NO * ImajnetImageSwitcher.ORDERED_IMAGE_WIDTH + 20) + "px; height: " + (ImajnetImageSwitcher.ORDERED_IMAGE_HEIGHT +
        ImajnetImageSwitcher.ORDERED_IMAGE_DATE_HEIGHT + 2) + 'px;"\x3e\x3cdiv id\x3d"scrollOrderedImagesLeft" class\x3d"left" onmouseout\x3d"ImajnetImageSwitcher.orderedImagesMainContainer.hide();"\x3e\x3cdiv class\x3d"scrollOrderedImagesLeftImage" onclick\x3d"ImajnetImageSwitcher.scrollOrderedImages(\'' + ImajnetAPI.PREVIOUS + '\');" onmouseover\x3d"ImajnetImageSwitcher.scrollButtonMouseOver(jQuery(this));" onmouseout\x3d"ImajnetImageSwitcher.scrollButtonMouseOut(jQuery(this));"\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"imajnetImageSwitcherOrderedImagesInnerContainer" style\x3d"height: ' +
        (ImajnetImageSwitcher.ORDERED_IMAGE_HEIGHT + ImajnetImageSwitcher.ORDERED_IMAGE_DATE_HEIGHT + 1) + 'px;"\x3e\x3cdiv id\x3d"imajnetImageSwitcherOrderedImages" style\x3d"width: ' + (ImajnetImageSwitcher.ORDERED_IMAGES_NO * ImajnetImageSwitcher.ORDERED_IMAGE_WIDTH - 2) + "px; height: " + (ImajnetImageSwitcher.ORDERED_IMAGE_HEIGHT + ImajnetImageSwitcher.ORDERED_IMAGE_DATE_HEIGHT + 2) + 'px"\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv id\x3d"scrollOrderedImagesRight" class\x3d"left" onmouseout\x3d"ImajnetImageSwitcher.orderedImagesMainContainer.hide();"\x3e\x3cdiv class\x3d"scrollOrderedImagesRightImage" onclick\x3d"ImajnetImageSwitcher.scrollOrderedImages(\'' +
        this.NEXT + '\');" onmouseover\x3d"ImajnetImageSwitcher.scrollButtonMouseOver(jQuery(this));" onmouseout\x3d"ImajnetImageSwitcher.scrollButtonMouseOut(jQuery(this));"\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"clearLeft"\x3e\x3c/div\x3e\x3c/div\x3e');
      ImajnetImageSwitcher.orderedImagesMainContainer = jQuery("#imajnetImageSwitcherOrderedImagesContainer");
      ImajnetImageSwitcher.orderedImagesContainer = jQuery("#imajnetImageSwitcherOrderedImages");
      ImajnetImageSwitcher.orderedImagesMainContainer.mouseout(function (a) {
        a.relatedTarget &&
        Nigsys.stringContains(a.relatedTarget.className, "imageSwitcherItem") && ImajnetImageSwitcher.orderedImagesMouseOut(a)
      });
      (ImajnetImageSwitcher.dragLeftPosition || ImajnetImageSwitcher.dragRightPosition) && ImajnetUI.enableDraggable(ImajnetUI.imajnetImageSliderInnerContainer);
      Nigsys.getElementWidth(ImajnetUI.imajnetImage[0]) == Nigsys.getElementWidth(ImajnetUI.imajnetImageContainer[0]) && ImajnetUI.disableImageDrag()
    }
  },
  onClosestImagesError: function () {
    ImajnetImageSwitcher.initSliderImagesDimension();
    ImajnetUI.disableDraggable(ImajnetUI.imajnetImageSliderInnerContainer);
    ImajnetUI.enableImageDrag()
  },
  loadImageSwitcher: function (a) {
    ImajnetAPI.mustAbortRequests && this.closestImagesAjaxRequest && this.closestImagesAjaxRequest.abort();
    a = {
      coordinates: a,
      radius: ImajnetSettings.imajnetSettings.imageSwitcher,
      limit: ImajnetSettings.limitImageSwitcher,
      timeframe: ImajnetTimeframe.getTimeframe(),
      sequenceType: Imajnet.sequenceType
    };
    this.closestImagesAjaxRequest = ImajnetAPI.doImajnetRequest("GET", "/api/positions/proximity/", a, this.onClosestImagesReceived, this.onClosestImagesError, null, null,
      !0, null, null)
  },
  clearSlider: function () {
    ImajnetUI.sliderLeftImage && (ImajnetUI.sliderLeftImage.remove(), ImajnetUI.sliderLeftImage = null);
    ImajnetUI.sliderRightImage && (ImajnetUI.sliderRightImage.remove(), ImajnetUI.sliderRightImage = null);
    ImajnetImageSwitcher.dragLeftPosition = null;
    ImajnetImageSwitcher.dragRightPosition = null
  },
  clearImageSwitcher: function () {
    ImajnetImageSwitcher.orientedImages = [];
    ImajnetImageSwitcher.frontOrientedImages = [];
    jQuery("#imajnetImageSwitcher").html("");
    ImajnetUI.imageSwitcherImage &&
    ImajnetUI.imageSwitcherImage.attr("src", "");
    ImajnetUI.imageSwitcherImageContainer && (ImajnetUI.imageSwitcherImageContainer.hide(), ImajnetUI.imageSwitcherImageContainer.removeClass("imajnetLayerNoImage"));
    ImajnetImageSwitcher.clearSlider();
    this.clearFrontOrderedImages()
  },
  clearFrontOrderedImages: function () {
    ImajnetImageSwitcher.orderedImagesMainContainer && ImajnetImageSwitcher.orderedImagesMainContainer.remove()
  },
  scrollButtonMouseOver: function (a) {
    a.parent().addClass("opacity80")
  },
  scrollButtonMouseOut: function (a) {
    a.parent().removeClass("opacity80")
  },
  show: function () {
    ImajnetMap.currentPosition ? jQuery("#imajnetImageSwitcher").show() : this.hide()
  },
  hide: function () {
    jQuery("#imajnetImageSwitcher").hide();
    ImajnetUI.imageSwitcherImageContainer.removeClass("imajnetLayerNoImage");
    ImajnetUI.imageSwitcherImage.hide();
    ImajnetUI.imageSwitcherImageContainer.hide();
    ImajnetMap.currentPosition && Imajnet.addImageDate(ImajnetMap.currentPosition.timestamp);
    ImajnetMap.hideImageSwitcher()
  },
  rotateImageSwitcher: function (a) {
    "undefined" != typeof a && jQuery("#imajnetImageSwitcher").css({
      "-webkit-transform": "rotate(" +
      a + "deg)",
      "-moz-transform": "rotate(" + a + "deg)",
      "-ms-transform": "rotate(" + a + "deg)",
      transform: "rotate(" + a + "deg)"
    })
  }
};