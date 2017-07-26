function FeatureWrapper () {
  this.type = this.id = "";
  this.feature = null;
  this.layerName = ""
}
FeatureWrapper.prototype.getFeatureId = function () {
  return 0
};
FeatureWrapper.prototype.getFeatureWKTGeometry = function () {
  return null
};
FeatureWrapper.prototype.getId = function () {
  return this.id
};
FeatureWrapper.prototype.setId = function (a) {
  this.id = a
};
FeatureWrapper.prototype.getType = function () {
  return this.type
};
FeatureWrapper.prototype.setType = function (a) {
  this.type = a
};
FeatureWrapper.prototype.getFeature = function () {
  return this.feature
};
FeatureWrapper.prototype.setFeature = function (a) {
  this.feature = a
};
FeatureWrapper.prototype.setStyle = function (a) {
  this.style = a
};
FeatureWrapper.prototype.getStyle = function (a) {
  return this.style
};
FeatureWrapper.prototype.setLayerName = function (a) {
  this.layerName = a
};
FeatureWrapper.prototype.getLayerName = function () {
  return this.layerName
};
FeatureWrapper.prototype.setStyleName = function (a) {
  this.layerStyle = a
};
FeatureWrapper.prototype.getStyleName = function () {
  return this.layerStyle
};