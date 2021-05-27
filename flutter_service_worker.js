'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "76f12858a440ee31fb6e13b9d2189744",
".git/config": "37b7f13444a8c3a23b2828833c0f6fe2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "2901249b97d7285dc88c5a7901a8beb4",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "4cce568174cfc6741f4e4fe4a6f8cbeb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "078d839423908210e132d30074c334cb",
".git/logs/refs/heads/main": "7c3334231f5cb4b4bed14a34843ccff9",
".git/logs/refs/remotes/origin/main": "8a7353073b4971e67b6e65013da322fc",
".git/logs/refs/remotes/origin/master": "7fab9b9b511156ad350833514b463542",
".git/objects/02/761e718783cc43ed1be2917ae1f75013c25c1b": "5335884d5d83437f9874260cbdb246f3",
".git/objects/0a/6e70adb753a08bc2779d129d7dbf1d2d38cd34": "965fe54fe86f3b7439ca26e4b1f46b19",
".git/objects/0b/8a72763cbab466fa83b82e91654f06bc5dd429": "a2ccb7e7fa54711429fb6aa0e962d8f7",
".git/objects/0e/28bd8be543b6cb0b8468168bcd4af558c4e33a": "0c2b6530f3a98c27911b9cee4223f844",
".git/objects/0e/29a5aba433a24c8244ff38c3274fbf15ca0a13": "96bb60e84a6fe73d5189216801fa2495",
".git/objects/0e/d0738136d92cc04b8c4c77118d46e85b8bd934": "7335dd363e39f0147047dd74f7a8c901",
".git/objects/10/ace43fc6279a4ea769ec77a7e389a0d65c1fac": "3029140d6332b71c5b5e3c3f743ea795",
".git/objects/16/10cb034f5b7dcbf9657409310f3efaa8e6e9f6": "c4aecd78f67e1e257a851a9654f5cfaf",
".git/objects/1c/19e6c54fe30833c4b5a88a7bd240322f648e50": "dbaa6619c75efe1b7734ced07e5ca48d",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/21/0c955788fd2961c477d237e90ce77ebd3c7372": "71d8b707777b1581a3f517b7b742d401",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/2b/72e4777978b627d19b2193596dfce67a82cd37": "4ea110e1dd09063bf8eab23d80ae8b0f",
".git/objects/2b/b24f5d5c226dc97ebc9c5edd280bcde4987232": "211af9d30c55a77b61fc49356e8255fd",
".git/objects/2d/7e17ba8b5e0131e098f6e2c767b4ac33e7000d": "3169f80a518fbb8e775cf462c7d0f9a8",
".git/objects/32/161d3edfe5f21dac42e6c354ab774d77ebf90b": "aa9fe7ccfb7b5153259c2351dc93290a",
".git/objects/34/7e67c83be6adeb5d37497445c54e9c286f2d53": "57799bb465555c8a5ff1bbfc6ff79cb0",
".git/objects/34/8803276a5fbb6b387a908016c97a4fa84f6a5f": "b240102fa8d2f981a054de832af1cbf3",
".git/objects/3e/6a5d980a2c79db9033962be37f1987ddeea117": "5b80b2fb07943e73e7bcb785dda93cc8",
".git/objects/41/375325cb3555f35deb69e8dfd896502f2f3238": "d1ecfe6ec8eb0ccf039f925320f98730",
".git/objects/41/7c90941429a8bb25882a7d2add0837ccd24215": "74857e24f5d15abc20c20728e673afa6",
".git/objects/42/4160d45a6ea2ca800e11f11a5c04925ca90e8c": "566b39da12bdd707bae9ae980a98e5a3",
".git/objects/43/46e2d9e671bf7a5a3287a3ddacf5f915a35d4f": "41b3d0d418188d18de1ec7daf79f5299",
".git/objects/45/676befc581c8f64153d7ce4a0509d99d1244a3": "1b7d7ad45943cdda432652fd96a5c8df",
".git/objects/45/f6a11ae2994af8ab77fbb078c316a2aeb84c63": "d8ac3fd5835f7198ba61af0c18e66a6a",
".git/objects/49/133379e7f803c60e4360a97bb3b2fcc041475c": "baa6f01df91de3b5ac0ab28b72385653",
".git/objects/4c/57a4c8755373a911bfc4296483ed3f137dca6a": "adb5cff767672600c9b821d24845bf97",
".git/objects/50/ed0c9aaa5b3e3e11fcfaa5648926a010e41c58": "79285f617e19ad4fa8940212a1d3147d",
".git/objects/55/cf170cb0ceaca7c5dc8c11fc90bdd230e883c1": "5165247c5cf8e9f2bf6d6f6280c4a0b4",
".git/objects/5b/54def9016371dd97259ead62eaf74960d1ebf4": "5b1bc4b726500425828e3272c7fe07e9",
".git/objects/5d/046d129555e35b91555d09e41cdba2434bd586": "a154672ee49137585db86867e1a2457b",
".git/objects/5e/2dddd68f733f4eeacdf6b784ee1c01ea6cda9c": "fcbe9adb0c12610b6da756b3a8acd0ee",
".git/objects/64/8413a5e3a93ee18fae86132fa489936b1bb5ea": "d8d910982ec98706a2687cbcba123986",
".git/objects/6f/55454426848a869dd419eea98a51937293bca8": "03fdc691618a5e2e38bafaee908c5e34",
".git/objects/74/b7fe876e1c62a8b822975e2ccb53e273371b79": "42f898b2ed50241e203986fdb413baf4",
".git/objects/75/6663965bd669c6d16e873610a0b7db039884f2": "8d3c5e439b46e061a997e29896e058fd",
".git/objects/76/15e44b78f8e1c5d6cfcc453b0650e8215a5b95": "b25163bfc27d31d09e000d072757678a",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/bcd52f77faf6aba988f1f81bf6ccd377dc9de2": "00f5dd9540beab9e1207fd4ddf278ace",
".git/objects/7f/199716eb6c6691bd558c70f9df73eef06aed32": "3fc26e626fb529344d8efbf57e775edd",
".git/objects/7f/27be56e2dfc566b69823c26fa5c612c9e6f20c": "c11714a0ce89c969dd629d7e73bafbce",
".git/objects/81/05b141e5113d70f1fb450e23de0c10027072b6": "625e2ab3a4800197f8721def61451446",
".git/objects/84/164778c70d72e00966f0f86466dfcfebea6d99": "ad23d46c96f2ab3d4e1550717bb4543b",
".git/objects/87/ec937bbb5901769d648ab26e6d9c644e5afa65": "3cb1545637342e68ae690bd671f5d5dc",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/928cbbe84d86cb35547f6c3ce103249d533d8f": "c4724b99bf991c441ef0158a5eaa97d1",
".git/objects/8f/1762909f806cc8c4c94bfd7f0fcbb81ab7a23f": "4c021477661709fa84d74e7cc1f2800d",
".git/objects/8f/7ea42fd7b4cb408e9a34b6a2c4516dac057559": "9312e80af6ad392e3d336838517112a1",
".git/objects/8f/9644886b327cb79844229087c648b1ea80c28d": "b9f7df7b45aace86c0d65d5898d081c3",
".git/objects/93/2df4ae2c3cb34a716e21b478590eecaa2ae295": "e299ba2e68d97d0f661cc8ddccf9787a",
".git/objects/93/9c1d80a6c9c4762242347d3d20ad81c3e8a636": "e219a2962d27869100b01c1e947be613",
".git/objects/9f/25792be4d99d545542678c8d5f30b700cf0596": "9e8f4caa0b2075a78929722833768af9",
".git/objects/9f/dc22d05052eaf7ec4436fad2827a0d278063d6": "ee0dd973694cfdc1de459d40effb0123",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a6/965ed511e9b634c6d0a438c4afbb85e65a6eaa": "8b07d72a94d7577f8009cf9368aca755",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/a43b4b5d623e8e10cc386b55917361e7831493": "e4de7cd9e1282e9f18646d4c21dc9dea",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/5b154ed94aadb1d8ad44329ac9555af65edc01": "29b3321675a665c8b5e18b93ba5a02d4",
".git/objects/bd/09670bd35b0957324201a8f89aaeadce533cc4": "f23773ee71f4554864012b46467adcae",
".git/objects/be/df0d7ea2fbbe6c984c238d7f141169bb6d3a67": "d2d253c49883adffbf086d195de59894",
".git/objects/c0/82c83335931128f972c3f05dc6efb4e28482f7": "8d12323e5841a4e0bccef158f20dc87a",
".git/objects/c2/a728121cc94290e0e8dbde82b1e5125d5465a6": "f2989bf1405fb660305820683b8ee53c",
".git/objects/c3/0518aae032547e8ccf384dff7b8b048486b299": "08328b854f0c2cc1843a018a81fcf847",
".git/objects/c8/9245a691aa00e5509233baf521670e44d37763": "493bb9695a3795dd911a21186ec5cabb",
".git/objects/cc/b2f0774643fb8559a435bd057ddb59b049a5d8": "51a9f0e94447c5d489d99a32551465de",
".git/objects/cf/d8e609a9a7d6ff18805187f2796956ca396f5f": "c2d1d45d1a56f0b35cc840595ce0c635",
".git/objects/d0/523abced2fbc0d8702c37a802aaf260e65ee0d": "dce10ab4b5d85aea202d765b97fed654",
".git/objects/d1/5761418fba48f82bab945abdabddac2dc4149e": "91f51efbecf428e0f8574fd2247d9932",
".git/objects/d9/35c9580eeb5a686a65cc9a67d526ae839ab7ef": "9a57214ee636b73545a15e7460c7cace",
".git/objects/dd/43db65edcbfd810943d4270e20d3703447c26d": "b41f2c4cbaf5f3425cc1445d4e1e098e",
".git/objects/de/57d8980125b7aea573566c275885f4f9355d58": "fe0d0e859a4738d2109bd6a3ab6580eb",
".git/objects/df/04b43ef978e8e19f980f09be4e2d1200ef086a": "874cbe5f4f943823cb04236dc2a8969f",
".git/objects/df/efa87e8f9a6bdb9ccb1aacb402c479615a4fa2": "c01daf7e990e8af3f80db25f5aaf045a",
".git/objects/e3/0fca5c1556cb5124a1d1400803bff204cec85d": "fcdc7a47daad64277faa9b34d77bd77a",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/9a5efcf39c292b3a27ff874f073c4f71a06e60": "66fe80a1844bfb33fb1c6db446de9651",
".git/objects/e8/bd3912f49e8c1a9c75da9dfe6e7e5deb43f175": "3134f32d0e5d001a7f3e1fdcec5f53ab",
".git/objects/f1/7d5a5014e4ae9c7d9d5f8de26fec398f65e44c": "e8f04124372d550cb6c2b42e572f972f",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/fa/5236c8d05d69759a242eb238e5eade2685ea3b": "b2df152e42b91e4708aec8f4d806f23b",
".git/objects/fd/78836773f8c6585b756653c4c060216a078a19": "9c18c02b3edc583840cef8563c85922a",
".git/ORIG_HEAD": "28a3dbee5482085c2e81bf382cba86dd",
".git/refs/heads/main": "5a29913b2dac87683cedd3187228753a",
".git/refs/remotes/origin/main": "5a29913b2dac87683cedd3187228753a",
".git/refs/remotes/origin/master": "28a3dbee5482085c2e81bf382cba86dd",
"assets/AssetManifest.json": "ea3b0931396a51875153fb2bdc52a47e",
"assets/assets/images/photo_home_background.jpg": "f14f1b0d9776f331c410d97645549128",
"assets/assets/images/photo_home_small.jpg": "ddd482fb8998fb7082c5d643f3ab7e01",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "8e7d442dcb444a9c6e076d02b83c7048",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "00bb2b684be61e89d1bc7d75dee30b58",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "4b6a9b7c20913279a3ad3dd9c96e155b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dffd9504fcb1894620fa41c700172994",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "878ab63fa83a93d5ef52858df70d7ec3",
"/": "878ab63fa83a93d5ef52858df70d7ec3",
"main.dart.js": "98bde01c772c5760ea41e44ba6a94291",
"manifest.json": "5385795da698ad74a5c90b98540fce45",
"version.json": "edbffd8e71140d71563c86e4c3c5c246"
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
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
