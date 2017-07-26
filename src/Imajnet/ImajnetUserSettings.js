var ImajnetUserSettings = {
  lrsRoadType: 0, mapExtent: null, onUserSettingsReceived: function (a) {
    a = JSON.parse(a);
    a.options && (ImajnetUserSettings.lrsRoadType = a.options.lrsRoadType, ImajnetUserSettings.mapExtent = a.options.mapExtent)
  }, getUserSettings: function () {
    return ImajnetAPI.doImajnetRequestDeferred("GET", "/api/user/useroptions", null, this.onUserSettingsReceived, null, null)
  }
};