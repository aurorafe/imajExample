/**
 * Created by FDD on 2017/7/26.
 */
var ImajnetProjection = {
  imajnetProjections: null, userProjections: null, draw: function () {
    if (!ImajnetMap.currentPosition || Nigsys.isPositionMode() || Nigsys.isMeasurementMode())return jQuery.Deferred().resolve().promise();
    var a = jQuery.Deferred();
    position = ImajnetMap.currentPosition;
    ImajnetPlugin.getProjectionCandidates(position).done(function (c) {
      ImajnetProjection.projectUserData(position, c).done(function () {
        a.resolve()
      })
    });
    return a.promise()
  }, getAllProjections: function (a) {
    if (!ImajnetMap.currentPosition || a &&
      a.parameter.pointOfView.id != ImajnetMap.currentPosition.id)return null;
    var c = ImageControler.currentPhotogrammetry.getImageIndexInCacheArrayByImageId(ImajnetMap.currentPosition.id);
    if (!a)return c ? {parameter: {pointOfView: {id: c.parameter.pointOfView.id}}, projection: c.projection} : null;
    if (a.projection.pointProjections) {
      for (var b = 0; b < a.projection.pointProjections.length; b++)a.projection.pointProjections[b] || (a.projection.pointProjections.splice(b, 1), b--);
      a.projection.pointProjections.length || delete a.projection.pointProjections
    }
    if (a.projection.shapeProjections) {
      for (b =
             0; b < a.projection.shapeProjections.length; b++)a.projection.shapeProjections[b] || (a.projection.shapeProjections.splice(b, 1), b--);
      a.projection.shapeProjections.length || delete a.projection.shapeProjections
    }
    if (c) {
      var d = [], e = [];
      if ((!Nigsys.isPolyligneMode() || 1 != ImageControler.currentPhotogrammetry.currentStep % 2) && a.projection.pointProjections)if (c.projection.pointProjections)for (b = 0; b < a.projection.pointProjections.length; b++)if (f = ImageControler.currentPhotogrammetry.getObjectById(a.projection.pointProjections[b].id)) {
        for (var f =
          !1, g = 0; g < c.projection.pointProjections.length; g++)if (c.projection.pointProjections[g] && c.projection.pointProjections[g].id == a.projection.pointProjections[b].id) {
          f = !0;
          break
        }
        f || (c.projection.pointProjections || (c.projection.pointProjections = []), c.projection.pointProjections.push(a.projection.pointProjections[b]))
      } else d.push(a.projection.pointProjections[b]); else for (b = 0; b < a.projection.pointProjections.length; b++)(f = ImageControler.currentPhotogrammetry.getObjectById(a.projection.pointProjections[b].id)) ?
        (c.projection.pointProjections || (c.projection.pointProjections = []), c.projection.pointProjections.push(a.projection.pointProjections[b])) : d.push(a.projection.pointProjections[b]);
      if (a.projection.shapeProjections)if (c.projection.shapeProjections)for (b = 0; b < a.projection.shapeProjections.length; b++)if (a.projection.shapeProjections[b]) {
        if (f = ImageControler.currentPhotogrammetry.getObjectById(a.projection.shapeProjections[b].id)) {
          f = !1;
          for (g = 0; g < c.projection.shapeProjections.length; g++)if (c.projection.shapeProjections[g] &&
            c.projection.shapeProjections[g].id == a.projection.shapeProjections[b].id && (f = !0, !Nigsys.isPolyligneMode() || c.projection.shapeProjections[g].id == ImajnetPolyligne.currentAddObjectId)) {
            var h = ImajnetMap.getFeatureWrapperById(a.projection.shapeProjections[b].id);
            if (h && h.getType() == ImajnetMap.FEATURE_TYPE_PROJECTION) c.projection.shapeProjections[g] = a.projection.shapeProjections[b]; else if (c.projection.shapeProjections[g].projections && a.projection.shapeProjections[b].projections) {
              for (var h = [], k = 0; k < a.projection.shapeProjections[b].projections.length; k++) {
                for (var m =
                  !1, l = 0; l < c.projection.shapeProjections[g].projections.length; l++)if (c.projection.shapeProjections[g].projections[l].id == a.projection.shapeProjections[b].projections[k].id) {
                  m = !0;
                  break
                }
                m || h.push(a.projection.shapeProjections[b].projections[k])
              }
              c.projection.shapeProjections[g].projections = c.projection.shapeProjections[g].projections.concat(h)
            }
            break
          }
          f || (c.projection.shapeProjections || (c.projection.shapeProjections = []), c.projection.shapeProjections.push(a.projection.shapeProjections[b]))
        }
      } else e.push(a.projection.shapeProjections[b]);
      else for (b = 0; b < a.projection.shapeProjections.length; b++)(f = ImageControler.currentPhotogrammetry.getObjectById(a.projection.shapeProjections[b].id)) ? (c.projection.shapeProjections || (c.projection.shapeProjections = []), c.projection.shapeProjections.push(a.projection.shapeProjections[b])) : e.push(a.projection.shapeProjections[b]);
      c.projection.pointProjections && (c.projection.pointProjections = c.projection.pointProjections.concat(d));
      c.projection.shapeProjections && (c.projection.shapeProjections = c.projection.shapeProjections.concat(e));
      return {parameter: a.parameter, projection: c.projection}
    }
    if (!a.projection.pointProjections && !a.projection.shapeProjections)return null;
    c = {parameter: {pointOfView: {id: a.parameter.pointOfView.id}}, projection: {}};
    a.projection.pointProjections && (c.projection.pointProjections = a.projection.pointProjections);
    a.projection.shapeProjections && (c.projection.shapeProjections = a.projection.shapeProjections);
    if (!Nigsys.isPolyligneMode()) {
      a = Nigsys.cloneObject(c);
      if (a.projection.pointProjections) {
        for (b = 0; b < a.projection.pointProjections.length; b++) {
          var f =
            ImageControler.currentPhotogrammetry.getObjectById(a.projection.pointProjections[b].id);
          f || (a.projection.pointProjections.splice(b, 1), b--)
        }
        a.projection.pointProjections.length || delete a.projection.pointProjections
      }
      if (a.projection.shapeProjections) {
        for (b = 0; b < a.projection.shapeProjections.length; b++)f = ImageControler.currentPhotogrammetry.getObjectById(a.projection.shapeProjections[b].id), f || (a.projection.shapeProjections.splice(b, 1), b--);
        a.projection.shapeProjections.length || delete a.projection.shapeProjections
      }
      (a.projection.pointProjections ||
      a.projection.shapeProjections) && ImageControler.currentPhotogrammetry.existingProjections.push(c)
    }
    return c
  }, projectionReceived: function (a) {
    if ((a = ImajnetProjection.getAllProjections(a)) && !Nigsys.isPositionMode() && !Nigsys.isMeasurementMode() && ImajnetMap.currentPosition && ImajnetMap.currentPosition.id == a.parameter.pointOfView.id && void 0 !== a.projection) {
      if (a.projection.pointProjections && !Nigsys.isPolyligneMode()) {
        var c = a.projection.pointProjections;
        c.sort(function (b, a) {
          return Nigsys.compareAscending(b,
            a, "id")
        });
        for (var b = 0; b < c.length; b++)if (c[b]) {
          var d = parseInt(c[b].id);
          isNaN(d) || (c[b].id = d);
          if ((d = ImajnetMap.getFeatureWrapperById(c[b].id)) && 0 <= c[b].coordinates.z)if (0 == c[b].id) ImageControler.currentPhotogrammetry.appendMapMarker(c[b].id, c[b].coordinates); else {
            if (d.type == ImajnetMap.MARKER_TYPE_POSITION || d.type == ImajnetMap.MARKER_TYPE_POLYLIGNE_POSITION) {
              var e = c[b].linkToNext, f = ImageControler.currentPhotogrammetry.getObjectById(c[b].id);
              e && (e = ImageControler.currentPhotogrammetry.getImageNextObject(c[b].id)) &&
              c[b].featureWrapper && e.type != f.type && (e = !1)
            }
            ImageControler.currentGraphic.appendPinPoint(c[b].coordinates, d)
          }
        }
      }
      if (a.projection.shapeProjections)for (b = 0; b < a.projection.shapeProjections.length; b++)!a.projection.shapeProjections[b] || Nigsys.isPolyligneMode() && a.projection.shapeProjections[b].id != ImajnetPolyligne.currentAddObjectId || Nigsys.isPolyligneMode() && (-1 == ImajnetPolyligne.currentAddObjectId || a.projection.shapeProjections[b].id < ImajnetPolyligne.currentAddObjectId) || (d = parseInt(a.projection.shapeProjections[b].id),
      isNaN(d) || (a.projection.shapeProjections[b].id = d), d = ImajnetMap.getFeatureWrapperById(a.projection.shapeProjections[b].id), c = ImageControler.currentPhotogrammetry.getObjectById(a.projection.shapeProjections[b].id), !c || (c.parameter.imagePoint1 ? c.parameter.imagePoint1.img1 : c.parameter.imagePoint.img1).traceId == ImajnetMap.currentPosition.traceId || d.type != ImajnetMap.FEATURE_TYPE_MEASUREMENT && d.type != ImajnetMap.MARKER_TYPE_POSITION && d.type != ImajnetMap.MARKER_TYPE_POLYLIGNE_POSITION && -1 === jQuery.inArray(d.type.replace("Feature",
        ""), ImajnetPolyligne.typesArray) ? a.projection.shapeProjections[b] && void 0 !== a.projection.shapeProjections[b].projections && 0 <= a.projection.shapeProjections[b].projections[0].coordinates.z && ImageControler.currentPhotogrammetry.drawLine(d, a.projection.shapeProjections[b].projections) : (ImageControler.currentPhotogrammetry.objectIsMeasurement(a.projection.shapeProjections[b].id), a.projection.shapeProjections[b].projections[0] && a.projection.shapeProjections[b].projections[1] && ImageControler.currentPhotogrammetry.drawLine(ImajnetMap.getFeatureWrapperById(a.projection.shapeProjections[b].id),
        [a.projection.shapeProjections[b].projections[0], a.projection.shapeProjections[b].projections[1]]), a.projection.shapeProjections[b].projections[2] && a.projection.shapeProjections[b].projections[3] && ImageControler.currentPhotogrammetry.drawLine(ImajnetMap.getFeatureWrapperById(a.projection.shapeProjections[b].id), [a.projection.shapeProjections[b].projections[2], a.projection.shapeProjections[b].projections[3]])))
    }
  }, projectUserData: function (a, c) {
    if (!c || !c.length)return ImajnetProjection.projectDataRequest(null);
    if (Nigsys.isPositionMode() || Nigsys.isMeasurementMode() || Nigsys.isPolyligneMode())return jQuery.Deferred().resolve().promise();
    for (var b = [], d = [], e = 0; e < c.length; e++)if (c[e].geometry) {
      if (1 == c[e].geometry.length) b.push({
        coordinates: c[e].geometry[0],
        linkToNext: !1,
        objectId: "PointProjection_" + (e + 1)
      }); else {
        for (var f = [], g = 0; g < c[e].geometry.length; g++)f.push({
          coordinates: c[e].geometry[g],
          linkToNext: g < c[e].geometry.length - 1 ? !0 : !1,
          objectId: "PointProjection_" + (e + 1).toString() + g.toString()
        });
        d.push({
          id: "LineProjection_" +
          (e + 1), points: f
        })
      }
      ImajnetMap.addToFeatureWrappers({
        feature: c[e].feature,
        id: 1 == c[e].geometry.length ? "PointProjection_" + (e + 1) : "LineProjection_" + (e + 1),
        style: c[e].style,
        type: ImajnetMap.FEATURE_TYPE_PROJECTION
      })
    }
    e = [];
    if (0 < b.length || 0 < d.length) f = {
      groundProjection: !0,
      heightOffset: 0
    }, 0 < b.length && (f.points = b), 0 < d.length && (f.shapes = d), e.push(f);
    return ImajnetProjection.projectDataRequest({projectionData: e, pointOfView: a})
  }, projectImajnetDataRequest: function (a) {
    ImajnetProjection.imajnetProjections = null;
    var c =
      jQuery.Deferred();
    if (!a)return c.resolve(), c.promise();
    ImajnetAPI.doImajnetRequestDeferred("POST", "/api/photogrammetry/projection/", a, null, null, null).done(function (b) {
      b && (ImajnetProjection.imajnetProjections = JSON.parse(b));
      c.resolve()
    }).fail(function (b) {
      c.reject(b)
    });
    return c.promise()
  }, projectUserDataRequest: function () {
    var a = jQuery.Deferred();
    ImajnetProjection.userProjections = null;
    ImajnetPlugin.drawUserProjections(ImajnetMap.currentPosition.id).done(function (c, b) {
      b && jQuery.each(b, function (b, a) {
        if (ImajnetMap.getFeatureWrapperById(a.id))for (var c =
          0; c < ImajnetMap.featureWrappers.length; c++)if (ImajnetMap.featureWrappers[c].id == a.id) {
          ImajnetMap.featureWrappers.splice(c, 1);
          break
        }
        ImajnetMap.addToFeatureWrappers({
          feature: a.feature,
          id: a.id,
          style: a.style,
          type: ImajnetMap.FEATURE_TYPE_PROJECTION
        })
      });
      c && (ImajnetProjection.userProjections = c);
      a.resolve()
    }).fail(function (c) {
      a.reject(c)
    });
    return a.promise()
  }, projectDataRequest: function (a) {
    var c = jQuery.Deferred();
    ImageControler.currentPhotogrammetry.imajnetProjectionsDataObject && (a ? a.projectionData = ImageControler.currentPhotogrammetry.imajnetProjectionsDataObject.projectionData.concat(a.projectionData) :
      a = ImageControler.currentPhotogrammetry.imajnetProjectionsDataObject);
    jQuery.when(this.projectImajnetDataRequest(a), this.projectUserDataRequest()).always(function () {
      var a = ImajnetProjection.imajnetProjections, d = ImajnetProjection.userProjections;
      if (!a) a = ImajnetProjection.userProjections; else if (d && (d.projection.pointProjections || d.projection.shapeProjections)) {
        var e = a.projection, d = d.projection;
        a.projection.pointProjections = e.pointProjections ? e.pointProjections.concat(d.pointProjections) : d.pointProjections;
        a.projection.shapeProjections = e.shapeProjections ? e.shapeProjections.concat(d.shapeProjections) : d.shapeProjections
      }
      ImajnetProjection.projectionReceived(a);
      c.resolve()
    });
    return c.promise()
  }
};