'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "e217a00b6e311f3bd7b458d8864088b3",
"/": "e217a00b6e311f3bd7b458d8864088b3",
"main.dart.js": "2735d229701c546584637f27a580b86f",
"favicon.png": "e837c052a054519814e6c3d1f8288128",
"assets/AssetManifest.json": "693511168e863b9fc406ac83cabe46c1",
"assets/NOTICES": "6d0a906375447eee18645c3163a07f9d",
"assets/FontManifest.json": "08792490555b179235543cfffa3ed5ec",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/assets/dezyshort.png": "4f5de6cb854a0558eabcc7b62db5ac62",
"assets/assets/internet.png": "5f2f210e627afb6134c7e64aa8a742f5",
"assets/assets/audioweb.jpg": "25edd4ac2468555b1de2d91a35472faf",
"assets/assets/lobby.png": "5371a354b68b497f18a30046e4bb1f65",
"assets/assets/dartlogo.jpg": "959367d324ba10f64db6b8b3768fb649",
"assets/assets/flut.png": "c1651f598d212acdfe551f103548e495",
"assets/assets/ball.png": "bf457c55bf9deed34d7ca63c002dbfdf",
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
"assets/assets/beer.png": "ab7d4e3082b29e261d14ec9ae01f9097",
"assets/assets/charts.jpg": "154b510609473e16e4c39184d7046849",
"assets/assets/medium_light.png": "bd516690c99267a778885736015befe8",
"assets/assets/particleanim.jpg": "93892f9f4bad4a9d94f7a23246c49856",
"assets/assets/medium.png": "fb86f4060325caef8ea1f0fad0d25f40",
"assets/assets/moon.png": "a270b8a10d1a9a52441bf5a322dd1b86",
"assets/assets/dezyname.png": "3ea643f9f4b41b4de042aa58f586e40c",
"assets/assets/avatar.jpg": "bebd4fa9cbcf6c252b4636773c6f07d5",
"assets/assets/graph.png": "6adad281bd8736c706fe0d7be60f6879",
"assets/assets/fuelblue.png": "e2bf3548922547e8bf27821f9009eb13",
"assets/assets/shotOnIphone.jpg": "cbf69cfbbc17b194986a9c8ba13d9aba",
"assets/assets/GoogleSansRegular.ttf": "b5c77a6aed75cdad9489effd0d5ea411",
"assets/assets/attral.jpg": "a643fdc0aa342d4bb65d232c7a3dd566",
"assets/assets/FontManifest.json": "59c37979205b4b43589051e92e27cbcd",
"assets/assets/bgg.png": "72deeca983d5c618ea444daa0389404d",
"assets/assets/twitter.png": "8f35a40403a84631c4125c4f1859c7a6",
"assets/assets/linkedin.png": "926e2dcf5ab4220a359867614556df68",
"assets/assets/myimg.jpg": "431719915c55b3f742b520dfa4841821",
"assets/assets/nike_logo_grey.png": "6488a3235986555314d922f9a9b987ea",
"assets/assets/vanstop.png": "9cc1ce87ad8ae2fcb8a3b056c39c38b4",
"assets/assets/experiments.jpg": "c522770e64b35a835bced0f931131b58",
"assets/assets/beats.png": "dd16d1606e9653a3223f8159c7b272bc",
"assets/assets/idea.png": "aac64c2df3d083363b5edda14ccfb784",
"assets/assets/flutterwebui.png": "6a033dc7c7f217f285d12578e7dcbc1b",
"assets/assets/pngwave.png": "94b8139a9f1f2c226184af4106495c66",
"assets/assets/flutgallery.png": "511f0a462843f1829152650d181b19a6",
"assets/assets/jawabylogo.png": "b3491bb796e11f94232a15b41e77f0ee",
"assets/assets/facebook.png": "021ada146ffb7c1753557ff29618d04c",
"assets/assets/visionchallenge.png": "d73a76bbb807961a89aa5d1399a02f79",
"assets/assets/slide.jpg": "713ef1deb356c14e0993d191c6f421ef",
"assets/assets/bg.jpg": "196bc67d221668fa4da09c6c0a67bef1"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a no-cache param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'no-cache'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');

      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }

      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'no-cache'});
        return response || fetch(modifiedRequest).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    return self.skipWaiting();
  }

  if (event.message === 'downloadOffline') {
    downloadOffline();
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
