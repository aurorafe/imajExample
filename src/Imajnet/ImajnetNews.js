/**
 * Created by FDD on 2017/7/26.
 */
var ImajnetNews = {
  newsData: null, compareDates: function (a, b) {
    return ImajnetNews.formatServerDate(a.created) < ImajnetNews.formatServerDate(b.created) ? -1 : ImajnetNews.formatServerDate(a.created) > ImajnetNews.formatServerDate(b.created) ? 1 : 0
  }, showTooltip: function (a, b) {
    for (var c = 0; c < ImajnetNews.newsData.length; c++)if (ImajnetNews.newsData[c].id == b) {
      Nigsys.showTooltip(a, ImajnetNews.getNewsItemHTML(ImajnetNews.newsData[c], !0, !1));
      break
    }
  }, getNewsItemHTML: function (a, b, c, d) {
    return '\x3cdiv class\x3d"newsItemMainContainer' +
      (c ? " oldNewsItem" : "") + (0 !== d % 2 ? " itemOdd" : "") + '"' + (b ? "" : " onmouseover\x3d\"ImajnetNews.showTooltip(event, '" + a.id + '\');" onmouseout\x3d"Nigsys.hideTooltip();"') + '\x3e\x3cdiv class\x3d"left newsImageContainer"\x3e\x3cimg src\x3d"' + Imajnet.imajnetPath + "img/news/" + a.type + ".png?" + Imajnet.version + '" class\x3d"newsImage" /\x3e\x3c/div\x3e\x3cdiv class\x3d"left newsItemContainer"\x3e\x3cdiv class\x3d"newsTitle' + (b ? "" : " noOverflow") + '"\x3e' + this.getTitleDate(a.created) + a.title + '\x3c/div\x3e\x3cdiv class\x3d"newsContent' +
      (b ? "" : " noOverflow") + '"\x3e' + a.content + '\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"clearLeft"\x3e\x3c/div\x3e\x3c/div\x3e'
  }, formatServerDate: function (a) {
    if (!a)return new Date(1970);
    a = a.split(" ");
    var b = a[0].split("-"), c = null;
    a[1] && (c = a[1].split(":"));
    return c ? new Date(b[2], parseInt(b[1]) - 1, b[0], c[0], c[1], c[2]) : new Date(b[2], parseInt(b[1]) - 1, b[0])
  }, getTitleDate: function (a) {
    a = this.formatServerDate(a);
    return "[" + a.getDate() + " " + Nigsys.getMonthFromNumber((a.getMonth() + 1).toString()) + " " + a.getFullYear() +
      "] "
  }, onNewsReceived: function (a, b) {
    a = JSON.parse(a);
    var c = "", d = !1;
    if (a.news && a.news.length) {
      ImajnetNews.newsData = a.news.sort(ImajnetNews.compareDates);
      var f = null;
      ImajnetUser.data.lastLogin ? f = ImajnetNews.formatServerDate(ImajnetUser.data.lastLogin) : d = !0;
      for (var e = ImajnetNews.newsData.length - 1; 0 <= e; e--) {
        var g = f ? f > ImajnetNews.formatServerDate(ImajnetNews.newsData[e].created) : !1;
        g || (d = !0);
        c += ImajnetNews.getNewsItemHTML(ImajnetNews.newsData[e], !1, g, e)
      }
    }
    if (!b.isFirstLoad || d) ImajnetUI.newsContainer.html(c ?
      c : jQuery.imajnet.noNews), b.isFirstLoad && Imajnet.activateImajnetControl(jQuery("#newsContainerIdButton"), "showNews"), ImajnetUI.showItem(ImajnetUI.newsContainerId, 530, 500)
  }, checkForNews: function (a) {
    ImajnetAPI.doImajnetRequest("GET", "/api/news/latest.json", null, ImajnetNews.onNewsReceived, null, null, null, null, {isFirstLoad: a})
  }, init: function (a) {
    ImajnetUI.hideItem(ImajnetUI.newsContainerId);
    ImajnetNews.checkForNews(a)
  }, close: function (a) {
    ImajnetUI.hideItem(ImajnetUI.newsContainerId)
  }
};