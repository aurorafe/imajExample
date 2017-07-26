var ImageControler = {
  currentImageControl: null,
  currentImageType: null,
  currentSurveyTrace: null,
  currentPhotogrammetry: null,
  currentGraphic: null,
  getsCurrentImageControlType: function () {
    return ImageControler.currentImageControl.type ? ImageControler.currentImageControl.type : "FLAT"
  },
  initDefaults: function () {
    ImageControler.currentPhotogrammetry = Photogrammetry;
    ImageControler.currentImageControl = ImageControl;
    ImageControler.currentSurveyTrace = SurveyTrace;
    ImageControler.currentGraphic = Graphic
  },
  setCurrentImageControl: function (a) {
    a.type &&
    "FLAT" != a.type ? "CUBE" == a.type && (ImageControler.currentImageType = "CUBE", ImageControler.currentImageControl = CubeImage, ImageControler.currentSurveyTrace = CubeSurveyTrace, ImageControler.currentPhotogrammetry = CubePhotogrammetry, ImageControler.currentGraphic = CubeGraphic) : (ImageControler.currentImageType = "FLAT", ImageControler.currentImageControl = FlatImage, ImageControler.currentSurveyTrace = FlatSurveyTrace, ImageControler.currentPhotogrammetry = FlatPhotogrammetry, ImageControler.currentGraphic = FlatGraphic)
  }
};
function animate () {
  requestAnimationFrame(animate);
  CubePlugin.update()
}
var CubePlugin = {
  container: null,
  camera: null,
  scene: null,
  objectsScene: null,
  FOV: 80,
  renderer: null,
  cubeContainer: null,
  cubeFacesArray: "BACK FRONT UP UP RIGHT LEFT".split(" "),
  yow: 0,
  onMouseDownYow: 0,
  pitch: 0,
  onMouseDownPitch: 0,
  phi: 0,
  theta: 0,
  cubeMesh: null,
  target: null,
  mouse: null,
  raycaster: null,
  pinPointsObject: null,
  offset: null,
  cubeIsHighRes: !1,
  maxRotation: {left: -180, right: 180},
  mouseMoved: !1,
  init: function () {
    this.target = new THREE.Vector3;
    this.mouse = new THREE.Vector2;
    this.raycaster = new THREE.Raycaster;
    this.pinPointsObject =
      new THREE.Object3D;
    this.container = jQuery("#popupImajnet");
    this.offset = this.container.parent().offset();
    this.camera = new THREE.PerspectiveCamera(this.FOV, this.container.innerWidth() / this.container.innerHeight(), 1, 3201);
    this.scene = new THREE.Scene;
    this.objectsScene = new THREE.Scene;
    this.renderer = new THREE.WebGLRenderer({antialias: !0});
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(this.container.innerWidth(), this.container.innerHeight());
    this.renderer.autoClear = !1;
    this.renderer.domElement.id =
      "cubeContainer";
    this.container.append(this.renderer.domElement);
    this.cubeContainer = jQuery("#cubeContainer");
    this.cubeContainer.on("click", this.onDocumentMouseClick);
    this.cubeContainer.on("mousedown", this.onDocumentMouseDown);
    this.cubeContainer.on("mousemove", this.onDocumentMouseMove);
    this.cubeContainer.on("mouseup", this.onDocumentMouseUp);
    this.cubeContainer.on("mouseleave", this.onDocumentMouseUp);
    this.cubeContainer.on("wheel", this.onDocumentMouseWheel);
    var a = document.getElementById("cubeContainer");
    a.addEventListener("touchstart", this.onDocumentTouchStart, !1);
    a.addEventListener("touchmove", this.onDocumentTouchMove, !1);
    jQuery("#cubeContainer").swipe({
      swipe: function (a, b, d, e, f) {
      }, threshold: 10, pinchIn: function (a, b, d, e, f, h, g) {
        b = Nigsys.getPinchCenter(g[0].start, g[1].start);
        a.originalEvent = {offsetX: b.x, offsetY: b.y};
        d = 10 * d / jQuery("#cubeContainer").height();
        for (b = 0; b < d; b++)CubePlugin.onDocumentMouseWheel(a, !0, 1)
      }, pinchOut: function (a, b, d, e, f, h, g) {
        b = Nigsys.getPinchCenter(g[0].start, g[1].start);
        a.originalEvent =
          {offsetX: b.x, offsetY: b.y};
        d = 10 * d / jQuery("#cubeContainer").height();
        for (b = 0; b < d; b++)CubePlugin.onDocumentMouseWheel(a, !0, -1)
      }, fingers: jQuery.fn.swipe.fingers.ALL
    });
    this.objectsScene.add(this.pinPointsObject)
  },
  addCube: function (a) {
    null != this.cubeMesh && this.scene.remove(this.cubeMesh);
    var c = new THREE.CubeGeometry(3200, 3200, 3200, 10, 10, 10);
    this.cubeMesh = new THREE.Mesh(c, new THREE.MeshFaceMaterial(a));
    this.cubeMesh.scale.x = -1;
    this.cubeMesh.material.side = THREE.DoubleSide;
    this.scene.add(this.cubeMesh)
  },
  loadCubeImages: function (a) {
    for (var c =
      this.getFaceOrderFromAngle(), b = 0; b < c.length; b++)this.changeFaceImage(c[b], a)
  },
  changeFaceImage: function (a, c) {
    if (a) {
      var b = this.cubeFacesArray.indexOf(a);
      CubePlugin.getMaterialFromUrlDeferred(ImajnetAPI.buildImageURL(ImajnetMap.currentPosition, c, a)).done(function (a) {
        CubePlugin.cubeMesh.material.materials[b].dispose();
        CubePlugin.cubeMesh.material.materials[b].map.dispose();
        CubePlugin.cubeMesh.material.materials[b] = a
      })
    }
  },
  getMaterialFromUrlDeferred: function (a, c) {
    var b = jQuery.Deferred(), d = new THREE.Texture,
      e = new THREE.MeshBasicMaterial({map: d, overdraw: .5, side: THREE.DoubleSide}), f = new Image;
    f.crossOrigin = "use-credentials";
    f.onload = function () {
      d.image = f;
      d.needsUpdate = !0;
      d.minFilter = THREE.LinearFilter;
      d.dispose();
      e.dispose();
      b.resolve(e, c)
    };
    f.src = a;
    ImajnetUI.imagesLoadQueue.push(f);
    return b.promise()
  },
  getMaterialFromUrl: function (a) {
    var c = new THREE.Texture, b = new THREE.MeshBasicMaterial({map: c, overdraw: .5, side: THREE.DoubleSide}),
      d = new Image;
    d.crossOrigin = "use-credentials";
    d.onload = function () {
      c.image = d;
      c.needsUpdate =
        !0;
      c.minFilter = THREE.LinearFilter;
      c.dispose();
      b.dispose()
    };
    d.src = a;
    ImajnetUI.imagesLoadQueue.push(d);
    return b
  },
  getIntersection: function (a, c, b) {
    var d = new THREE.Vector2;
    d.x = c / CubePlugin.renderer.domElement.width * 2 - 1;
    d.y = 2 * -(b / CubePlugin.renderer.domElement.height) + 1;
    CubePlugin.raycaster.setFromCamera(d, CubePlugin.camera);
    a = CubePlugin.raycaster.intersectObjects(a.children, !0);
    if (0 < a.length)return a[0]
  },
  getRealImageCoordinatesFromCube: function (a, c) {
    if (a && c) {
      var b = Math.round(a.x), d = Math.round(a.y), e = Math.round(a.z);
      if ("FRONT" == c || "BACK" == c)var f = {
        x: Math.abs(e + b / 1600 * 1600),
        y: Math.abs(1600 - d)
      }; else if ("LEFT" == c || "RIGHT" == c) f = {
        x: Math.abs(b - e / 1600 * 1600),
        y: Math.abs(1600 - d)
      }; else if ("UP" == c || "DOWN" == c) f = {x: Math.abs(e + d / 1600 * 1600), y: Math.abs(1600 - b)};
      console.log(f);
      return f
    }
  },
  getRealImageCoordinatesFromEvent: function (a) {
    return CubePlugin.getRealImageCoordinatesFromMousePosition(a.offsetX, a.offsetY)
  },
  getRealImageCoordinatesFromMousePosition: function (a, c) {
    var b = CubePlugin.getIntersection(CubePlugin.scene, a, c), d = CubePlugin.getFaceFromPoint(b),
      b = CubePlugin.getRealImageCoordinatesFromCube(b.point, d);
    return {x: b.x, y: b.y, face: d}
  },
  getCubeCoordinatesFromImageCoordinates: function (a, c) {
    if (a && (c = c ? c : a.face)) {
      var b = Math.round(a.x), d = Math.round(a.y);
      a = new THREE.Vector3;
      switch (c) {
        case "FRONT":
          a.x = 1600;
          a.y = 1600 - d;
          a.z = -1600 + b;
          break;
        case "RIGHT":
          a.x = 1600 - b, a.y = 1600 - d, a.z = 1600;
        case "LEFT":
          a.x = -1600 + b, a.y = 1600 - d, a.z = -1600
      }
      return a
    }
  },
  getCubeCoordinatesFromEvent: function (a) {
    return (a = CubePlugin.getIntersection(CubePlugin.scene, a.originalEvent.offsetX, a.originalEvent.offsetY)) ?
      a.point : null
  },
  getFaceFromPoint: function (a) {
    if (a)return this.cubeFacesArray[a.face.materialIndex]
  },
  getFaceOrderFromAngle: function () {
    var a = Math.ceil(this.yow / 90);
    facesLoadOrder = [];
    switch (a) {
      case 1:
        facesLoadOrder = "FRONT RIGHT LEFT BACK UP UP".split(" ");
        break;
      case -0:
        facesLoadOrder = "FRONT LEFT RIGHT BACK UP UP".split(" ");
        break;
      case 2:
        facesLoadOrder = "RIGHT BACK LEFT FRONT UP UP".split(" ");
        break;
      case -1:
        facesLoadOrder = "LEFT BACK RIGHT FRONT UP UP".split(" ")
    }
    return facesLoadOrder
  },
  setRotationLimit: function (a) {
    a &&
    a.orientation && (a = a.orientation.viewAngle - this.FOV, this.maxRotation.left = -a / 2, this.maxRotation.right = a / 2)
  },
  onDocumentMouseClick: function (a) {
    if (1 == CubePlugin.mouseMoved) CubePlugin.mouseMoved = !1; else {
      var c = CubePlugin.getIntersection(CubePlugin.scene, a.offsetX, a.offsetY), b = c.point,
        d = Math.acos(b.y / Math.hypot(b.x, b.y, b.z)), b = THREE.Math.radToDeg(Math.atan2(b.z, b.x)),
        d = 90 - THREE.Math.radToDeg(d);
      console.log(b, d);
      d = CubePlugin.getFaceFromPoint(c);
      c = CubePlugin.getRealImageCoordinatesFromCube(c.point, d);
      switch (ImajnetUI.activeControlButton) {
        case "imajnetPosition":
          ImajnetPosition.positionObject(c.x,
            c.y, {face: d});
          break;
        case "imajnetMeasurement":
          ImajnetMeasurement.measureObject(c.x, c.y, {face: d});
          break;
        case "imajnetPolyligne":
          ImajnetMeasurement.onClick(c.x, c.y, {face: d})
      }
      ImageControler.currentPhotogrammetry.clearCommentTextarea(a)
    }
  },
  onDocumentMouseDown: function (a) {
    a.preventDefault();
    CubePlugin.isUserInteracting = !0;
    CubePlugin.onPointerDownPointerX = a.offsetX;
    CubePlugin.onPointerDownPointerY = a.offsetY;
    CubePlugin.onPointerDownLon = CubePlugin.yow;
    CubePlugin.onPointerDownLat = CubePlugin.pitch
  },
  onDocumentMouseMove: function (a) {
    if (!0 ===
      CubePlugin.isUserInteracting) {
      CubePlugin.mouseMoved = !0;
      var c = CubePlugin.cubeContainer.width() / CubePlugin.cubeContainer.height(),
        c = 500 / CubePlugin.cubeContainer.width() * c, b = CubePlugin.camera.fov / 4, b = .008 * b + 5E-4 * (b - 1),
        d = (CubePlugin.onPointerDownPointerX - a.offsetX) * b * c + CubePlugin.onPointerDownLon;
      d >= CubePlugin.maxRotation.left && d <= CubePlugin.maxRotation.right && (CubePlugin.yow = d);
      CubePlugin.pitch = (a.offsetY - CubePlugin.onPointerDownPointerY) * b * c + CubePlugin.onPointerDownLat;
      ImajnetImageSwitcher.rotateImageSwitcher(-CubePlugin.yow);
      ImajnetMap.setOrientationMarker(ImajnetMap.currentPosition, ImajnetMap.imajboxTriangleDimension, Nigsys.defaultObjectsColor, -1)
    }
  },
  onDocumentMouseUp: function (a) {
    CubePlugin.isUserInteracting = !1
  },
  onDocumentTouchStart: function (a) {
    1 == a.touches.length && (a.preventDefault(), CubePlugin.onPointerDownPointerX = a.touches[0].pageX, CubePlugin.onPointerDownPointerY = a.touches[0].pageY, CubePlugin.onPointerDownLon = CubePlugin.yow, CubePlugin.onPointerDownLat = CubePlugin.pitch)
  },
  onDocumentTouchMove: function (a) {
    if (1 == a.touches.length) {
      a.preventDefault();
      var c = .1 * (CubePlugin.onPointerDownPointerX - a.touches[0].pageX) + CubePlugin.onPointerDownLon;
      c > CubePlugin.maxRotation.left && c < CubePlugin.maxRotation.right && (CubePlugin.yow = c);
      CubePlugin.pitch = .1 * (a.touches[0].pageY - CubePlugin.onPointerDownPointerY) + CubePlugin.onPointerDownLat;
      ImajnetImageSwitcher.rotateImageSwitcher(-CubePlugin.yow);
      ImajnetMap.setOrientationMarker(ImajnetMap.currentPosition, ImajnetMap.imajboxTriangleDimension, Nigsys.defaultObjectsColor, -1)
    }
  },
  onDocumentMouseWheel: function (a, c, b) {
    b ||
    (b = Nigsys.getDelta(a, b));
    if (!c && !ImajnetZoom.canZoom() && !ImajnetZoom.isZoomMode()) 0 < b ? ImageControler.currentImageControl.getNext(!1) : ImageControler.currentImageControl.getPrevious(!1); else if (b) {
      if (a = CubePlugin.getIntersection(CubePlugin.scene, a.originalEvent.offsetX, a.originalEvent.offsetY)) {
        a = a.point;
        if (0 < b) {
          if (ImajnetZoom.zoomLevel >= ImajnetZoom.maxZoomLevel)return;
          ImajnetZoom.zoomLevel++;
          if (4 == CubePlugin.camera.fov)return;
          ImajnetZoom.firstZoom && (CubePlugin.loadCubeImages("high"), ImajnetZoom.firstZoom =
            !1);
          b = Math.hypot(a.x, a.y, a.z);
          c = Math.acos(a.y / b);
          b = Math.atan2(a.z, a.x);
          b = THREE.Math.radToDeg(b);
          a = 90 - THREE.Math.radToDeg(c);
          c = Math.abs(b - CubePlugin.yow);
          c /= CubePlugin.camera.fov / 2;
          var d = Math.abs(a - CubePlugin.pitch), d = d / (CubePlugin.camera.fov / 2),
            e = .05 * Math.ceil(ImajnetZoom.zoomLevel / 3);
          c = .9 < c ? c * (2.2 - e) : c * (2.3 - e);
          d = .9 < d ? d * (2.2 - e) : d * (2.3 - e);
          CubePlugin.yow = b > CubePlugin.yow ? CubePlugin.yow + c : CubePlugin.yow - c;
          CubePlugin.pitch = a > CubePlugin.pitch ? CubePlugin.pitch + d : CubePlugin.pitch - d;
          CubePlugin.maxRotation.left -=
            2;
          CubePlugin.maxRotation.right += 2;
          CubePlugin.camera.fov -= 4
        } else {
          if (80 == CubePlugin.camera.fov)return;
          ImajnetZoom.zoomLevel--;
          b = Math.hypot(a.x, a.y, a.z);
          c = Math.acos(a.y / b);
          b = Math.atan2(a.z, a.x);
          b = THREE.Math.radToDeg(b);
          a = 90 - THREE.Math.radToDeg(c);
          d = CubePlugin.camera.fov / 2;
          c = Math.abs(b - CubePlugin.yow);
          c /= d;
          d = Math.abs(a - CubePlugin.pitch);
          d /= CubePlugin.camera.fov / 2;
          e = .05 * Math.ceil(ImajnetZoom.zoomLevel / 3);
          c = .9 < c ? c * (2.2 - e) : c * (2.3 - e);
          d *= 2.3 - e;
          CubePlugin.yow = b > CubePlugin.yow ? CubePlugin.yow - c : CubePlugin.yow +
            c;
          CubePlugin.pitch = a > CubePlugin.pitch ? CubePlugin.pitch - d : CubePlugin.pitch + d;
          CubePlugin.camera.fov += 4;
          CubePlugin.maxRotation.left += 2;
          CubePlugin.maxRotation.right -= 2
        }
        ImajnetMap.setOrientationMarker(ImajnetMap.currentPosition, ImajnetMap.imajboxTriangleDimension, Nigsys.defaultObjectsColor, -1)
      }
      CubePlugin.camera.updateProjectionMatrix()
    }
  },
  onWindowResize: function () {
    CubePlugin.camera.aspect = this.container.innerWidth() / this.container.innerHeight();
    CubePlugin.camera.updateProjectionMatrix();
    CubePlugin.renderer.setSize(this.container.innerWidth(),
      this.container.innerHeight())
  },
  update: function () {
    CubePlugin.pitch = Math.max(-85, Math.min(85, CubePlugin.pitch));
    CubePlugin.phi = THREE.Math.degToRad(90 - CubePlugin.pitch);
    CubePlugin.theta = THREE.Math.degToRad(CubePlugin.yow);
    CubePlugin.target.x = 500 * Math.sin(CubePlugin.phi) * Math.cos(CubePlugin.theta);
    CubePlugin.target.y = 500 * Math.cos(CubePlugin.phi);
    CubePlugin.target.z = 500 * Math.sin(CubePlugin.phi) * Math.sin(CubePlugin.theta);
    this.camera.lookAt(this.target);
    this.renderer.clear();
    this.renderer.render(this.scene,
      this.camera);
    this.renderer.clearDepth();
    this.renderer.render(this.objectsScene, this.camera)
  }
};
var ImageControl = {
  loadedImages: {},
  PREVIOUS: "previous",
  NEXT: "next",
  isFastNavigation: !1,
  fastNavigationTimeout: null,
  getNext: function (a) {
    ImajnetAPI.getByOrder(this.NEXT, a)
  },
  getPrevious: function (a) {
    ImajnetAPI.getByOrder(this.PREVIOUS, a)
  },
  doOnLoadImage: function (a, b) {
    var c = jQuery.Deferred();
    ImajnetMap.lastLoadedImagePosition = a;
    if (ImajnetZoom.canZoom())return ImajnetUI.stopSwipeNavigation(!0), c.resolve(!1), c.promise();
    if (!ImajnetAPI.isImageValid(a.id))return c.resolve(!1), c.promise();
    ImajnetZoom.firstZoom =
      !0;
    ImajnetUI.imageSwitcherImage.hide();
    ImajnetUI.imageSwitcherImageContainer.hide();
    a && a.timestamp ? Imajnet.addImageDate(a.timestamp) : ImajnetUI.hideDateContainer();
    c.resolve(!0);
    return c.promise()
  },
  loadImage: function (a) {
  },
  loadDefaultImage: function (a) {
    this.setCurrentImage(a);
    ImajnetUI.appendDefaultImage()
  },
  imageChange: function (a) {
    if (a) ImajnetPlugin.onImageChange(a)
  },
  setFastNavigation: function () {
    ImageControler.currentImageControl.isFastNavigation = !0
  },
  resetFastNavigation: function () {
    ImageControler.currentImageControl.isFastNavigation =
      !1
  },
  doRequests: function (a) {
    ImajnetUI.onImageResize();
    a.lon && a.lat && ImajnetUrl.changeUrlParam(ImajnetUrl.LOCATION_URL_PARAM_NAME, a.lat + "," + a.lon);
    ImageControler.currentSurveyTrace.draw(a);
    Address.getAddressFromCoordinates(a);
    LRS.loadLRS(a);
    Nigsys.isPositionMode() ? (ImageControler.currentPhotogrammetry.firstImagePosition && ImageControler.currentPhotogrammetry.firstImagePosition.traceId != ImajnetMap.currentPosition.traceId ? ImajnetPosition.reload() : ImajnetPosition.showHidePositionDenied(), ImajnetImageSwitcher.initSliderImagesDimension()) :
      Nigsys.isMeasurementMode() ? ImageControler.currentPhotogrammetry.firstImagePosition && ImageControler.currentPhotogrammetry.firstImagePosition.traceId != ImajnetMap.currentPosition.traceId ? ImajnetMeasurement.reload() : ImajnetMeasurement.showHideMeasurementDenied() : Nigsys.isPolyligneMode() ? ImageControler.currentPhotogrammetry.firstImagePosition && ImageControler.currentPhotogrammetry.firstImagePosition.traceId != ImajnetMap.currentPosition.traceId ? ImajnetPolyligne.reload() : ImajnetPolyligne.showHideDenied() :
        ImajnetImageSwitcher.show();
    ImajnetImageSwitcher.loadImageSwitcher(a);
    ImajnetUI.docking.imageButtons && ImajnetUI.docking.imageButtons.mainContainer.show()
  },
  setCurrentImage: function (a, b) {
    a && (lastLoadedImageId = a.id);
    ImajnetAPI.clearHorizontalAngle();
    ImageControler.currentSurveyTrace.clearSurveyTrace();
    ImageControler.currentPhotogrammetry.clear();
    ImajnetMap.hideImageSwitcher();
    ImajnetImageSwitcher.clearImageSwitcher();
    ImajnetAPI.clearHorizontalAngle();
    Nigsys.isPositionMode() || Nigsys.isMeasurementMode() ||
    Nigsys.isPolyligneMode() || ImajnetZoom.deactivateZoom();
    this.imageChange(a);
    a ? (b && (b.requestUrl && ImajnetUI.appendImage(b.requestUrl), b.materials && CubePlugin.addCube(b.materials)), ImajnetUI.showImajnetControls(), ImajnetAPI.orderedImagesId.length && a.id != ImajnetAPI.orderedImagesId[ImajnetAPI.orderedImagesId.length - 1] || ImageControler.currentImageControl.isFastNavigation || ImageControler.currentImageControl.doRequests(a)) : (ImajnetUI.hideImageElements(), ImajnetMap.hideOrientation());
    Nigsys.hideLoading(ImajnetUI.imageContainer);
    ImajnetMap.setImajboxMarkerPosition({position: a}, !0)
  }
};