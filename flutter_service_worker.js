'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "da11f1f59d58b11932cc1be032430888",
".git/config": "e23f5daa312db8b9fd0ac18678eb43a7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "24e35793e580785b5569184bb0c04f39",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "65782408fb549efde1766e4f7370584b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9f255a4c838debe75876f1fafbeb52c3",
".git/logs/refs/heads/gh-pages": "e58c2bd7476597e0a191b67405f73735",
".git/logs/refs/remotes/origin/gh-pages": "5d6d4f09d7661cc5c7419d64830cad97",
".git/objects/01/1842b856d2844c35f671e492a3793c1dea487f": "9a7fa59443b8925d7b787ea6939b9d2f",
".git/objects/03/538ded7b1ee31dbf9d13af0a72ed2a755fcec0": "b1db07ffe14e1035eda3d5a357ca860c",
".git/objects/04/1abaf63fe66dabcf428d8c18f278ff3e02f744": "030a452079fbb40abd7ae110f00903d4",
".git/objects/05/a9c09613574de9b77071261d4429ad6457f4f3": "ac4627b63d6bbc4a63e59c613b45193e",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/09/f3db757c02bb2aeca01fe8380e832ad7cc41ab": "7322e9364d7a2b26b62d50fe5283fdf3",
".git/objects/0b/342b32ddb82ff9c708c08180a006ddc2336e44": "6e589c285d73bdf795b94206393691fd",
".git/objects/0c/6774080dcf4ceebf69c0fa25772d4d41e5ed94": "2da2be714566c7e63ae6126894359a22",
".git/objects/0d/209dbbea6bb55412c595b65f0fb4c83d9e9dfd": "034dc141670f4b9717ea4046925b5eff",
".git/objects/0d/6e6cc453221e9551e070886acf4a41f7ff1506": "b29cb5888cbc11641b53f4e26078086a",
".git/objects/11/1767900a04573070eec3f1c7ba8d71b6469c61": "e91e2faef0e25a5d86d2970b962dbdd9",
".git/objects/14/032b01409ec209fd9210b06f542f7aa8974628": "14e625927abc621c2f3a2ff7ec2c81e5",
".git/objects/1a/074f5b40b62748205e03b9a1561902ab0926d5": "c943c8e49a5dfa1750bc309b4eaad797",
".git/objects/1e/54a86f80eec9b3da9d72d436cef5639fa8dc66": "3ec681bd76761614c211bd24c8cc4cee",
".git/objects/23/f2f1f3bf3e50e87b3e84a5e20b96aab9e33716": "4aaf9028e7cdae8ced6e8e69bf380eb9",
".git/objects/28/22f7abcd39b8610e7b424fe45eedf2c7e34ca8": "dc02f39a633dc1e7e215694cedff2e65",
".git/objects/28/6a48c5a453d73fb5ce555f9a0656a923e22e96": "99f80d4c240a77ee916c880b7fc4f03d",
".git/objects/30/6942dc5bda024438722d4da845f397d2b10e14": "682a06660c7a1bece06811374e7444ab",
".git/objects/36/ac46bf8fe6447e722988bf72e830de286ed043": "1bd31accf71b41950faa55cf9ea05575",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/3d/d2ba6f4b0b9a70cb93aa70d83e94f6271957c2": "2dd7bc25578afb59e577d336b8d76404",
".git/objects/41/288ba496cfb2724d8d64c132218cdbde8836a9": "fb1a38feb05735cfe33e93cd78b1b48f",
".git/objects/43/74e992c4dacf1de65598fe310135023eda41a1": "fcbbf1cce9fbad7c28b5f94a7d1eea31",
".git/objects/46/64bc4c4d6b92aa4d9eb70c5163c8d157159643": "27a797159c60ccd954e9fab7246b57bf",
".git/objects/49/f7d4b3c7f11575c18da76baf6126af5dc50fd4": "b1f4803b23aff24fe4dfc22efcea9738",
".git/objects/4d/7d56f80d8bc00100e64cb37b4c43652288e630": "770eba680b539aeac9361ab8feaa8dcb",
".git/objects/4e/0d9f8efb86f69fce020088c7bb426809057e80": "f37c92205b1ebd3f3903b5632beaf235",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/53/e225ee8f69609dab29dc01fdcc9547dc2fa2e4": "27318afb8b3fa87dff16489932ee69a4",
".git/objects/55/d70ceb50a1689f72798e1ff0cd2c64da67373b": "b11bf934803e83207d1d935b32766fea",
".git/objects/5a/17383c86b7ac909c4bfb518d05e2dc51b19355": "032866a001e04ab9b9d243a8d808218c",
".git/objects/5e/8448cfdd8ff56e1090bdec7886e124dc40e632": "bb77138b3a7314f7a73f388f2a84d9ad",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6d/f2b253603094de7f39886aae03181c686e375b": "4e432986780adf1da707b08f0bc71809",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/71/043b819a6d0ce35fb3e5280afc1318d067c7e4": "eccfb8e20cf9cfd9765fb64fd01328b2",
".git/objects/71/0cae25da4237cc5a93f1361e1172d284f5add3": "7953a027a9dc30e502f685649720df6d",
".git/objects/73/5fe05d2d9072b1c725a7c5304bd56445371b1e": "60897b768b1848dede52743f3835bccd",
".git/objects/78/9b7d7af7854ae58f6ed0e95dc17bd857c9fa32": "3e3d40fcb78baa61a2face37c396f5e7",
".git/objects/79/a55263dd48a3bc10fca2e972654f49bf01c0c9": "c7cd37c444608ce56828cffdfa83b725",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/86/34a97c911ebed728ca5d3ca1ecbd526e7e6533": "a19c71a985a50a082c95d30c9c7ade17",
".git/objects/88/fd1e1ccfa5ff6d7da7e8dcf75b5071b1e87594": "f86226c0eea637c4f800324c9c87332e",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/92/d227ce2912388d3831e3d3e31fccd7d4bac67a": "44290818178c631f19d98661c774f46b",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/98/87d2a9dfd78865d4abf3bb7a2d338e3fb1e11a": "8e4fabcf72d9b818b9fd127bf878c042",
".git/objects/a3/a350396b45aa0d20d2f4b6f879726b34a65e27": "ab3662654a36f100d430b59a41782b4c",
".git/objects/a5/eed47458c8a5dc9eae35fda13132f7c69716ae": "6006052b25156a3c7ebf04eb773b5a0c",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/ad/e828a6f4fb96d72b1cdcbe078888128a4a661f": "072ed87c786c561e28e54c73787fb934",
".git/objects/af/af6ac8acd93d84edd651d0c0c608c387dd43a6": "6c7aa3cb3e515ee834e1ee48f9ab9630",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/b9/f6c33b4fb182e0c4a374ba098e2e9e99a06004": "c253e5a619620e28b0fd22f38ea43a94",
".git/objects/be/fce6af890a4edf6d3c858878b30c1c2e2cd803": "a6c70daafc28408c562234b3d09e0578",
".git/objects/c3/0c57767264794b771473c7677fe062b9362419": "9de6a5ed5154796102b806e82224dfed",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/d0/231281ab48a7b32a709e43dd935b9c0f29aa2e": "fad245023a4dae50a800f9f79f7c8817",
".git/objects/d1/1399cd20df0e28a4bc74f252737b7f14d5109e": "ac2628cf890fcc99b01f8adb7fd840b0",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/84d708064fa9e1aa620d6c4942ac80ab09e91e": "dc75e5de2c5bf1cf81cfc47445780857",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/df/12ebc4264fc83fe5f2ed976c36927829fb63c3": "101f9a938896f3b5123b98154c3ff03b",
".git/objects/e5/744ace54bf866f425ceac7487273f8a9bb2cc0": "8e815f4b768460d2a2b2f31d33c53b07",
".git/objects/e6/2450a1f2c465ee824ddda3c2c92188128c9cce": "7c11de59fc6b99c62b1c1af596fff0ee",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e9/d60273e65410c6b41affb412ddd81a2f5a709f": "ef9769887030be92681dfbbbb8613e4f",
".git/objects/ef/665ca5a3d8049a3d97a8c212dadcac2bc1357f": "ebb6914e89c34b861db03c4c78277f59",
".git/objects/f2/c9ebab0d53e1f95e6b4943880321d0dc187ade": "88908e835f3a41103cb8bf0c6848b093",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f4/02e9d495d77feb148397941302708a242e175e": "16049579a1f8b7d6b0167b995b56909e",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/f7/c1005ed0482669ae841adf2fc3f482167f80f8": "3be0de823d32555878f4ada4cc3fb879",
".git/objects/f9/a98102e95128480747f03641b7a0894eca260f": "123171988f8d841b8bcf047927467c40",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/objects/fe/ef09b635e13007ef4f68f76f8608bcea16c859": "262aa35037792cc3bec7860142f1acf1",
".git/objects/pack/pack-749b4df71aed727aefddce66b28b6dfc20047c91.idx": "37d13efdd4f38e67b177bc2a022acace",
".git/objects/pack/pack-749b4df71aed727aefddce66b28b6dfc20047c91.pack": "f372978bcde91aa5f46d79167f63b5bf",
".git/objects/pack/pack-749b4df71aed727aefddce66b28b6dfc20047c91.rev": "c05edf78a9fca18a4e0345f4be1f604f",
".git/ORIG_HEAD": "2dd094c9f8b3165c1d197d470d9f71ee",
".git/rebase-merge/author-script": "b93239546e843ac37c14f51332617e8e",
".git/rebase-merge/done": "91dd6f1e54b0cb0a7d8f06d98176d53e",
".git/rebase-merge/drop_redundant_commits": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/end": "b026324c6904b2a9cb4b88d6d61c81d1",
".git/rebase-merge/git-rebase-todo": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/git-rebase-todo.backup": "4d37f62444c6e87235488aa493671ad4",
".git/rebase-merge/head-name": "94c9c9456879429265789469ea97e92a",
".git/rebase-merge/interactive": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/message": "a82ff8107bc2d233a00da64b048a765e",
".git/rebase-merge/msgnum": "b026324c6904b2a9cb4b88d6d61c81d1",
".git/rebase-merge/no-reschedule-failed-exec": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/onto": "4295dd1202b535a4bc01d0772362ab74",
".git/rebase-merge/orig-head": "2dd094c9f8b3165c1d197d470d9f71ee",
".git/rebase-merge/patch": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/stopped-sha": "2dd094c9f8b3165c1d197d470d9f71ee",
".git/REBASE_HEAD": "2dd094c9f8b3165c1d197d470d9f71ee",
".git/refs/heads/gh-pages": "93ee5c259c7ff50c8f7fbcc6e2c79622",
".git/refs/remotes/origin/gh-pages": "93ee5c259c7ff50c8f7fbcc6e2c79622",
"assets/AssetManifest.bin": "1b9a7ec9045198658268948973c8c87f",
"assets/AssetManifest.bin.json": "16fa2efc146f7b878bc124154a5a96df",
"assets/assets/fonts/Cairo-Bold.ttf": "08f051a1822e014b22374926f1406d01",
"assets/assets/fonts/Cairo-Regular.ttf": "5dacd3d88fa294c5c6263d4041a34935",
"assets/FontManifest.json": "b5e5026ec2e31c19e26aa68e2f8144eb",
"assets/fonts/MaterialIcons-Regular.otf": "61681a75202d53249c0d4082b0d8ce3f",
"assets/NOTICES": "1c1e08a7a34a88187f070beb6cc7ea55",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/syncfusion_flutter_pdfviewer/assets/fonts/RobotoMono-Regular.ttf": "5b04fdfec4c8c36e8ca574e40b7148bb",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/highlight.png": "2aecc31aaa39ad43c978f209962a985c",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/squiggly.png": "68960bf4e16479abb83841e54e1ae6f4",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/strikethrough.png": "72e2d23b4cdd8a9e5e9cadadf0f05a3f",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/underline.png": "59886133294dd6587b0beeac054b2ca3",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/highlight.png": "2fbda47037f7c99871891ca5e57e030b",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/squiggly.png": "9894ce549037670d25d2c786036b810b",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/strikethrough.png": "26f6729eee851adb4b598e3470e73983",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/underline.png": "a98ff6a28215341f764f96d627a5d0f5",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"CNAME": "654b80a2e00c38341e2aa86e44af546f",
"favicon.png": "3982eb04e41fa93f6c0141f00c003449",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "d958a3bd2f7d3d17aa09c67abc7e75f8",
"icons/Icon-192.png": "9907863f1df0e811c0872ae8b94ea2ca",
"icons/Icon-512.png": "6b8a6962e43441b67fbf2185cf185843",
"icons/Icon-maskable-192.png": "9907863f1df0e811c0872ae8b94ea2ca",
"icons/Icon-maskable-512.png": "6b8a6962e43441b67fbf2185cf185843",
"index.html": "18b0ce3eab5724fd1751003df356258b",
"/": "18b0ce3eab5724fd1751003df356258b",
"main.dart.js": "e5e8825fa85e31eabac36d1e77423c1e",
"manifest.json": "0e0c473d9402efc7be0e5b28994b7be1",
"version.json": "dedd73993382b42f3ccad77c327ba572"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
