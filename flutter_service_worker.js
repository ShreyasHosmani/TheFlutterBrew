'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "e217a00b6e311f3bd7b458d8864088b3",
"/": "e217a00b6e311f3bd7b458d8864088b3",
"main.dart.js": "d8436e7afed3054b594f0a3e39443557",
"favicon.png": "e837c052a054519814e6c3d1f8288128",
"assets/LICENSE": "8e877eff43c93dd8ff3206296e2289dd",
"assets/AssetManifest.json": "8826248a9e627ad5c40216edb3390b8a",
"assets/FontManifest.json": "08792490555b179235543cfffa3ed5ec",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/assets/audioweb.jpg": "25edd4ac2468555b1de2d91a35472faf",
"assets/assets/lobby.png": "5371a354b68b497f18a30046e4bb1f65",
"assets/assets/dartlogo.jpg": "959367d324ba10f64db6b8b3768fb649",
"assets/assets/flut.png": "c1651f598d212acdfe551f103548e495",
"assets/assets/zero.jpeg": "a438ec951cb86e442dfd5b8054a39509",
"assets/assets/loginpage.jpg": "ee461e06cbb4f63387499afa681c8e55",
"assets/assets/neuphormism.png": "aa30120687668fa42b9b8b085b9585b0",
"assets/assets/about.html": "cca535e84bb3f1ad20cd1423638d0253",
"assets/assets/instagram.png": "26631a4043b14dff84180bdf51c3cacb",
"assets/assets/ffsi.png": "f99dd33258fab0d837b014e700782e8a",
"assets/assets/github.png": "d22ee3727a7216019c3848df6eafa024",
"assets/assets/fuelround.png": "dfd8482a14ee4e49df701bb07ab45eeb",
"assets/assets/lucy.png": "c6d760080185bd9ca2c8740202c1931c",
"assets/assets/gathrrlogo.png": "860eeb2461bc5f52560fc2b0083b1b58",
"assets/assets/charts.jpg": "154b510609473e16e4c39184d7046849",
"assets/assets/medium_light.png": "bd516690c99267a778885736015befe8",
"assets/assets/particleanim.jpg": "93892f9f4bad4a9d94f7a23246c49856",
"assets/assets/medium.png": "fb86f4060325caef8ea1f0fad0d25f40",
"assets/assets/moon.png": "a270b8a10d1a9a52441bf5a322dd1b86",
"assets/assets/avatar.jpg": "bebd4fa9cbcf6c252b4636773c6f07d5",
"assets/assets/graph.png": "6adad281bd8736c706fe0d7be60f6879",
"assets/assets/fuelblue.png": "e2bf3548922547e8bf27821f9009eb13",
"assets/assets/GoogleSansRegular.ttf": "b5c77a6aed75cdad9489effd0d5ea411",
"assets/assets/FontManifest.json": "59c37979205b4b43589051e92e27cbcd",
"assets/assets/bgg.png": "72deeca983d5c618ea444daa0389404d",
"assets/assets/twitter.png": "8f35a40403a84631c4125c4f1859c7a6",
"assets/assets/linkedin.png": "926e2dcf5ab4220a359867614556df68",
"assets/assets/nike_logo_grey.png": "6488a3235986555314d922f9a9b987ea",
"assets/assets/vanstop.png": "6cca16cec98227208a102e368f0144b8",
"assets/assets/experiments.jpg": "c522770e64b35a835bced0f931131b58",
"assets/assets/beats.png": "dd16d1606e9653a3223f8159c7b272bc",
"assets/assets/flutterwebui.png": "6a033dc7c7f217f285d12578e7dcbc1b",
"assets/assets/pngwave.png": "94b8139a9f1f2c226184af4106495c66",
"assets/assets/flutgallery.png": "511f0a462843f1829152650d181b19a6",
"assets/assets/facebook.png": "021ada146ffb7c1753557ff29618d04c",
"assets/assets/visionchallenge.png": "d73a76bbb807961a89aa5d1399a02f79",
"assets/assets/slide.jpg": "713ef1deb356c14e0993d191c6f421ef",
"assets/assets/bg.jpg": "196bc67d221668fa4da09c6c0a67bef1"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
