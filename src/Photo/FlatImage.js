var FlatImage = Nigsys.cloneObject(ImageControl);
FlatImage.loadImage = function (a) {
  var c = "", b = a.position;
  b ? (c = ImajnetAPI.buildImageURL(b), ImajnetAPI.imageLoadQueue.push(b.id), a = new Image, a.onerror = function (a) {
    b && ImajnetMap.currentPosition && b.id == ImajnetMap.currentPosition.id && FlatImage.loadDefaultImage(b)
  }, a.onload = function () {
    ImageControler.currentImageControl.doOnLoadImage(b, {requestUrl: c})
  }, a.src = c, ImajnetUI.imagesLoadQueue.push(a)) : ImajnetAPI.loadDefaultImage(null)
};
FlatImage.doOnLoadImage = function (a, c) {
  ImageControl.doOnLoadImage(a, c).done(function (b) {
    b && (CubeImage.hidecubeContainer(), FlatImage.showImageSliderContainer(), ImajnetImageSwitcher.rotateImageSwitcher(0), FlatImage.setCurrentImage(a, c))
  })
};
FlatImage.showImageSliderContainer = function () {
  ImajnetUI.imajnetImageSliderContainer.show()
};
FlatImage.hideImageSliderContainer = function () {
  ImajnetUI.imajnetImageSliderContainer.hide()
};