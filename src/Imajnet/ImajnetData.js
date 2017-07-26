var ImajnetData = {
  coordinates: function (a, c, b) {
    this.lat = a;
    this.lon = c;
    this.height = b
  }, closestPositionParameter: function (a, c, b) {
    this.coordinates = new ImajnetData.coordinates(a, c, 0);
    this.radius = b;
    this.timeframe = ImajnetTimeframe.getTimeframe();
    this.sequenceType = Imajnet.sequenceType
  }, position: function (a) {
    this.id = a
  }, imageParameter: function (a, c, b) {
    this.position = new ImajnetData.position(a);
    this.resolution = c;
    b && (this.face = b)
  }, imageOrderParameter: function (a, c, b) {
    return {
      position: a, order: c, useCameraOrientation: b,
      timeframe: ImajnetTimeframe.getTimeframe()
    }
  }, sequenceDetailsParameter: function (a) {
    return {image: a}
  }
};