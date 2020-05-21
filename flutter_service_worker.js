'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "e217a00b6e311f3bd7b458d8864088b3",
"/": "e217a00b6e311f3bd7b458d8864088b3",
"main.dart.js": "671ba658d7e7444d354ca00474141805",
"assets/LICENSE": "8e877eff43c93dd8ff3206296e2289dd",
"assets/AssetManifest.json": "31b267d9809875953ea9e5fdfd98cace",
"assets/FontManifest.json": "08792490555b179235543cfffa3ed5ec",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/assets/lobby.png": "5371a354b68b497f18a30046e4bb1f65",
"assets/assets/flut.png": "c1651f598d212acdfe551f103548e495",
"assets/assets/zero.jpeg": "a438ec951cb86e442dfd5b8054a39509",
"assets/assets/about.html": "cca535e84bb3f1ad20cd1423638d0253",
"assets/assets/instagram.png": "26631a4043b14dff84180bdf51c3cacb",
"assets/assets/ffsi.png": "f99dd33258fab0d837b014e700782e8a",
"assets/assets/github.png": "d22ee3727a7216019c3848df6eafa024",
"assets/assets/fuelround.png": "dfd8482a14ee4e49df701bb07ab45eeb",
"assets/assets/lucy.png": "c6d760080185bd9ca2c8740202c1931c",
"assets/assets/gathrrlogo.png": "860eeb2461bc5f52560fc2b0083b1b58",
"assets/assets/medium_light.png": "bd516690c99267a778885736015befe8",
"assets/assets/medium.png": "fb86f4060325caef8ea1f0fad0d25f40",
"assets/assets/moon.png": "a270b8a10d1a9a52441bf5a322dd1b86",
"assets/assets/avatar.jpg": "bebd4fa9cbcf6c252b4636773c6f07d5",
"assets/assets/graph.png": "6adad281bd8736c706fe0d7be60f6879",
"assets/assets/fuelblue.png": "e2bf3548922547e8bf27821f9009eb13",
"assets/assets/GoogleSansRegular.ttf": "b5c77a6aed75cdad9489effd0d5ea411",
"assets/assets/FontManifest.json": "59c37979205b4b43589051e92e27cbcd",
"assets/assets/twitter.png": "8f35a40403a84631c4125c4f1859c7a6",
"assets/assets/linkedin.png": "926e2dcf5ab4220a359867614556df68",
"assets/assets/nike_logo_grey.png": "6488a3235986555314d922f9a9b987ea",
"assets/assets/vanstop.png": "6cca16cec98227208a102e368f0144b8",
"assets/assets/facebook.png": "021ada146ffb7c1753557ff29618d04c"
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
