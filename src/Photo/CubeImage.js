var CubeImage = Nigsys.cloneObject(ImageControl);
CubeImage.loadImage = function (a) {
  var b = a.position;
  if (b) {
    ImajnetAPI.imageLoadQueue.push(b.id);
    if (CubePlugin.cubeMesh) CubePlugin.loadCubeImages(); else {
      CubePlugin.init();
      animate();
      var c = Array(6), d = [];
      for (a = 0; a < CubePlugin.cubeFacesArray.length; a++)d.push(CubePlugin.getMaterialFromUrlDeferred(ImajnetAPI.buildImageURL(b, null, CubePlugin.cubeFacesArray[a]), {position: a}).done(function (a, b) {
        c[b.position] = a
      }))
    }
    d ? jQuery.when.apply(jQuery, d).then(function () {
        ImageControler.currentImageControl.doOnLoadImage(b, {materials: c})
      },
      function (a) {
        console.log("error")
      }) : this.doOnLoadImage(b)
  } else ImajnetAPI.loadDefaultImage(null)
};
CubeImage.doOnLoadImage = function (a, b) {
  ImageControl.doOnLoadImage(a, b).done(function (c) {
    c && (CubePlugin.setRotationLimit(a), FlatImage.hideImageSliderContainer(), CubeImage.showcubeContainer(), ImageControler.currentImageControl.setCurrentImage(a, b))
  })
};
CubeImage.getNext = function () {
  90 >= CubePlugin.yow && -90 <= CubePlugin.yow ? ImajnetAPI.getByOrder(this.NEXT, !1) : ImajnetAPI.getByOrder(this.PREVIOUS, !1)
};
CubeImage.getPrevious = function () {
  90 < CubePlugin.yow || -90 > CubePlugin.yow ? ImajnetAPI.getByOrder(this.NEXT, !1) : ImajnetAPI.getByOrder(this.PREVIOUS, !1)
};
CubeImage.showcubeContainer = function () {
  CubePlugin.cubeContainer.show()
};
CubeImage.hidecubeContainer = function () {
  CubePlugin.cubeContainer && CubePlugin.cubeContainer.hide()
};