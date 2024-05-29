'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "12d32203bc3d5aba84849dd2bb8f9c16",
"assets/AssetManifest.bin.json": "48c51d61f8cf3c9309148ff2635df6e3",
"assets/AssetManifest.json": "6b60800ea35a3c2ea28b6edcb4f9a75b",
"assets/assets/amotive.md": "a829947b9b73cf3519409bc51927753c",
"assets/assets/check.png": "ff6a5a9a4965618a686518ae81094c15",
"assets/assets/checkmark.png": "7b821e2ac153aee0065514caf6242d32",
"assets/assets/cross.png": "0296ad0e8b54df9acf4a0e924d43518f",
"assets/assets/edu.json": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/edu_test.json": "5246f6ec66430bc7b25c59980d5be115",
"assets/assets/edu_test_photo.json": "04a0b993d860d468489c29f19aeae462",
"assets/assets/epileptoid.md": "d1f8a26047479d98a0cee50dacb74b10",
"assets/assets/hyperteam.md": "cb1e6903292ba73c585d534ba95d5a90",
"assets/assets/icons/fltesticon.png": "8d814f16f286dc940fd3c10cf445a6e7",
"assets/assets/img/1.jpg": "7886213261605a82c6eca49352741baf",
"assets/assets/img/10.jpg": "fd0a70af61537c2c6b843843921b0628",
"assets/assets/img/11.jpg": "46c30f343f76f8cc7f221f97ed7949b4",
"assets/assets/img/12.jpg": "50d07abaef4b27c636e0003b281597b9",
"assets/assets/img/13.jpg": "3c1304ce3ac55c1082b7ee6539c4500e",
"assets/assets/img/14.jpg": "e54766195e562155bad95ccbbab1508f",
"assets/assets/img/15.jpg": "053cd435a700194676b37e844e2a50b8",
"assets/assets/img/16.jpg": "bcc1c43dca728e7c920203f79db1dbeb",
"assets/assets/img/17.jpg": "33eda71334f0f272eb3a88da374ab2bd",
"assets/assets/img/18.jpg": "49241f82d865d5e22171a1ea84fbdff9",
"assets/assets/img/19.jpg": "e6c7d9d39c585bc855e8920839ce405b",
"assets/assets/img/2.jpg": "b795b6681a40475444792b928118ab53",
"assets/assets/img/20.jpg": "53c276dbb33dc171d591fd128c3fe0dc",
"assets/assets/img/21.jpg": "c8ef12590b67f0ac24dfc87508e83a31",
"assets/assets/img/22.jpg": "0576d60272652020cbb7d9338c3d11d4",
"assets/assets/img/23.jpg": "bb01336f8388f5839675ac849d5d9000",
"assets/assets/img/24.jpg": "2bd0aa490a3f10541ac56f7148cd50cc",
"assets/assets/img/25.jpg": "b9019133265dbb2cea3535650a49573b",
"assets/assets/img/26.jpg": "34db1cab94fd6f8c44a9058986610acd",
"assets/assets/img/27.jpg": "e62a61205343f4d3432af31aca856130",
"assets/assets/img/3.jpg": "09e4743711066f3ca896b6120054f612",
"assets/assets/img/4.jpg": "ebdeb1785a1b4fdd13d8b92b4a6cae00",
"assets/assets/img/5.jpg": "e002fae125f0a9f61147960696a1b001",
"assets/assets/img/6.jpg": "ac333318241a1f64295e314143288d2a",
"assets/assets/img/7.jpg": "a01fe75511818ca3f8900256ea5d34fc",
"assets/assets/img/8.jpg": "56af5f52093a00feaa4170c2e22038ff",
"assets/assets/img/9.jpg": "41d63a2db56fd8ee5157f17f210855bd",
"assets/assets/impact.json": "c328480fe35332e57ebd4b973489003e",
"assets/assets/isteroid.md": "92530f72b028d26c19a341390fbc8c3b",
"assets/assets/paranoyal.md": "cb36aaee96adf59b29a3f0bf92fffcb0",
"assets/assets/shizoid.md": "974318b088172e148b6f57a9b440f5aa",
"assets/assets/test.json": "6995241a2bc24d64b467797b470969cd",
"assets/assets/trevojniy.md": "9a17506690da9dd7f1d2666ef304b8ac",
"assets/FontManifest.json": "3a6bfb4b73710a3b1fb783faad9e419a",
"assets/fonts/Benzin-Bold.ttf": "e37c5bb24acd803973c692c8c59a6230",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "a83674d45affcadac56798d634305f6d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/packages/iconsax/lib/assets/fonts/iconsax.ttf": "071d77779414a409552e0584dcbfd03d",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "694b406f265ebb7bf2ebf92254da61af",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "ff5debff509251ac3d3dd5cce0072118",
"icons/Icon-192.png": "dce9336ca6cf51ec09a264d650a41fbb",
"icons/Icon-512.png": "cc81264d7ea32ab1698e445cee765129",
"icons/Icon-maskable-192.png": "dce9336ca6cf51ec09a264d650a41fbb",
"icons/Icon-maskable-512.png": "cc81264d7ea32ab1698e445cee765129",
"index.html": "75a2ae29d4a4be449f7ed272f05f2df2",
"/": "75a2ae29d4a4be449f7ed272f05f2df2",
"main.dart.js": "59c79d8453b465c11b3b99ba89559ca6",
"main.dart.mjs": "1808a0a273545ed40439f72b78cba7d3",
"main.dart.wasm": "60ae4dc2599479ec2bacee8b6dd26dcc",
"manifest.json": "04aa78cb20b96af9bc58871830e82004",
"version.json": "553372a661128725545bcddfce43c6c1"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"main.dart.wasm",
"main.dart.mjs",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
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
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
