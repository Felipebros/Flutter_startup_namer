'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/NOTICES": "d96c441ba8e270fe7e2eae1a5def692d",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"version.json": "2b9cd6f91a8662e5926af33d0b079325",
"manifest.json": "6768d74834868e9ba34ee5253654eb78",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"index.html": "a6f0518b409d52095840743cf1ec2652",
"/": "a6f0518b409d52095840743cf1ec2652",
".git/logs/refs/remotes/origin/main": "df6146bac8d616bf52df130c1c68dfab",
".git/logs/refs/heads/main": "fb10cca315bb1006d7baf4b8752e5c27",
".git/logs/HEAD": "14364a33baf2a8e40c9c84e61a004094",
".git/index": "05541e64220c575eba96ae35f46a0ea9",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/objects/92/f5c3919aabaccf554678eab03329a122a1b779": "b1b00189bc8300a77aab2f2b2553ae07",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/63/5c55cc705a234d11d977fec47d471ac68d0b59": "45182a8e68752632cb26d59d73e82e0a",
".git/objects/75/af3a9333ebbd37ca099037743b7a9a15138952": "88b3c426fe25df78425930722cd643d0",
".git/objects/ac/ed5272a97d120712a815e1bb86a2a1335f74f1": "8fb7d4eb65433f102bb17fa473f5af85",
".git/objects/65/aa46da56432d548ce70deef8e385a5edfd3cd3": "f8925baaf9cc82ce07df1036d5b04e84",
".git/objects/65/3bf616885e5dc22110a2dd1956e38712d1d7c0": "9e7dff93697cb325e465dad944a33af6",
".git/objects/b0/1d580b4e40c6328e1686b7b17bbcbe04cad6de": "c8f97629f3f054179f5c7d0203a9b503",
".git/objects/b0/3e086c97fef4494e7397e7eb83df5a3b8656f3": "284cd99b35e89e7132d45c85772a5f2a",
".git/objects/3b/4b61a62aac18ac8c230b0d15daff5e72a9fcef": "f63964233c16b33671bece47614a648b",
".git/objects/9b/5915ab6b521f3c31feeca4e909984168bfb917": "7a865ac6072de87fd87c77bcaf4d7a71",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/7c/924edf3b622b7be62f32c160bb2fbe20b33fbf": "b54f44ae93c41dcbdb5ce823de383ae1",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/c5/68e00cc5107eb636a22e7c2a04b658816d4f3e": "a576caee0c2dc33a3507ecba7bbe9443",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/91/ee0155b6d8e26730a239cd4a2d3c36080e1a52": "e6cc973403a668d19612e83459932c69",
".git/objects/64/aaed9f580dd788d8d6a3043fd0e7da2d44ce63": "42fb74899eef669c649ad1ecac9868a6",
".git/objects/37/4ddc46b711b7e54dc7c7aac1fde6b8d558a4d5": "e55117f88abf6ec57f291c008299d0dc",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/0e/3da6b0dd884fe348afe8c2402ae34816bcd787": "577f38b901486228326f93a5533d6ee6",
".git/objects/4e/c422128995c951aa6f982c15adfda5580fa60a": "f70cfae767acda5fae592a7fb6a0d2ab",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ba/e278f6d0678b1c76aaf7ed2b9562f42e709838": "b7c660136649b92753b9a49e16d5afc0",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/a3/07fba25e9a91e9350edc925c78f81d9bb576f8": "3f76f365363843b3b444a368910990f3",
".git/objects/82/c77800a4ba45b86419dcd47e6782b20f3f07a3": "b1c8a9ded5406d97bebf7f4d924fe8c5",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a8/213c05f95b2ed24b3fbb2df71c317fa6b1c004": "013d4554fb603690c695103bd3417d2f",
".git/objects/77/5ea19855d1a660c6c2e7d2bf46cbf41ea897e2": "35ce56b3704f45d7225d12206ac84a60",
".git/objects/fe/b3e487cdf0ce200b95482d1b500a3d296722e0": "29cea7a6e424c997bc01dd323dc01eed",
".git/objects/e8/7db7c6b30fe47890b70f0c50af688860872a30": "217628192b88853b560dbf821c4c92b7",
".git/ORIG_HEAD": "c8de96f66e6b4480af140e2ccfd1a679",
".git/config": "7ae33f70b307493a4252499c64976dbd",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/refs/remotes/origin/main": "8fc887b96cc596c6b8174abb08f774e3",
".git/refs/heads/main": "8fc887b96cc596c6b8174abb08f774e3",
".git/FETCH_HEAD": "36e27b85f6737050202d303b5cee629c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/COMMIT_EDITMSG": "354434b232adefaa709f78bd8e04ae4c",
"README.md": "913192b7212821c287ae6ba3f9fe09b5",
"main.dart.js": "6cd0e901530e16e53502bb3a59c80bd3"
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
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
