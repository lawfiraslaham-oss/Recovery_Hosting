'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "9e38df9f406ae72599a13c01d53c4611",
".git/config": "dead98b577a4f9fbc57d4a29f9baa864",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "dcd752b2dfec45e5fdade52f215a3adb",
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
".git/index": "d100446fab62a14d829d021495fe9362",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d69c18927573e86dbf70e97471de65a3",
".git/logs/refs/heads/gh-pages": "f840cd222b0b821859ac0b8644bb84b7",
".git/logs/refs/remotes/origin/gh-pages": "0c7e4a767b9d17633b06d81fe77f4013",
".git/objects/00/a4d08ebc71f0c49a1ee1fe9ae4e3ce8b63c511": "6f40606641a51bdd7c7bbe25c475f4e2",
".git/objects/01/1842b856d2844c35f671e492a3793c1dea487f": "9a7fa59443b8925d7b787ea6939b9d2f",
".git/objects/04/1abaf63fe66dabcf428d8c18f278ff3e02f744": "030a452079fbb40abd7ae110f00903d4",
".git/objects/05/a9c09613574de9b77071261d4429ad6457f4f3": "ac4627b63d6bbc4a63e59c613b45193e",
".git/objects/06/acd75d5a437fff9c86c3fb6eb4b440c3ef582b": "e301c7624dca8c8e836d9820db1e4cf6",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/0a/b9b1ae4f020b9378ece49579fd107cb01c8e9b": "8b069971e3f067274581c15ee71d9983",
".git/objects/0b/c9856d66db5793ad0712d745e0a12d0f7cd6d4": "1957589bdff911146a634c2102b8f48d",
".git/objects/10/346e5b62decb8ac193547b2ff034818f7e9dd6": "65bd40d84c1d034d9bb3d62437c9b7a9",
".git/objects/13/eb1da371f711757923b9ead891c0d4557f5a95": "351773b528b22916a94f39ca03bfb193",
".git/objects/1a/074f5b40b62748205e03b9a1561902ab0926d5": "c943c8e49a5dfa1750bc309b4eaad797",
".git/objects/1a/91ff025fd4bf90d5f51c18aff1823f6ea10b01": "09e82342a8733b18ca0d4b43b66c283c",
".git/objects/1d/15065371bc793125b4887f47278c35de671aab": "a25577d3edbca0f2172a2c040b0c1e06",
".git/objects/1d/690504ee3c209151deec27fddc90ae0fc46cb7": "f571b1af1bf50b42b3710c84acb02b13",
".git/objects/1e/10a2890111921672928e034efd51fab5fc974a": "acde29d0c8d118c5b955bccbb646cee2",
".git/objects/1e/3eb8408453f689ec8305dc1d6a448e86fe0994": "aa7ba0ffa7505e0b656f140c1058fa1f",
".git/objects/1e/54a86f80eec9b3da9d72d436cef5639fa8dc66": "3ec681bd76761614c211bd24c8cc4cee",
".git/objects/22/e38a22e61f86bb768a8291dac6eb61caa079d5": "2aab3d013705786b3a1e5c18b90e2f5a",
".git/objects/25/464cdb472b3e786ae41ecc61ff586242a9ce60": "54d6d9f3868d3491557f3a283134f575",
".git/objects/28/6a48c5a453d73fb5ce555f9a0656a923e22e96": "99f80d4c240a77ee916c880b7fc4f03d",
".git/objects/30/6942dc5bda024438722d4da845f397d2b10e14": "682a06660c7a1bece06811374e7444ab",
".git/objects/36/ac46bf8fe6447e722988bf72e830de286ed043": "1bd31accf71b41950faa55cf9ea05575",
".git/objects/38/c31cc07140ff0efaa5cf3eba3ea0bcead3bd42": "51f2479a9075e83890a931fca677d6ea",
".git/objects/39/f0e9f335a00cb32ad3ecac703ecde4919dcf45": "46339b467218d7127b90a7a1c6df18c9",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/43/d2fb1cf59c02e2b69f492075a7ebc1ddd7b11c": "f308e655cd11a548a73ff63ac7eb20c4",
".git/objects/49/f7d4b3c7f11575c18da76baf6126af5dc50fd4": "b1f4803b23aff24fe4dfc22efcea9738",
".git/objects/4b/d1f030f2e72a8eb0e0ad436e8b5255defe97a9": "352fcd9cdb2b0a37aa86f9e755290bc6",
".git/objects/4d/10c532e5cf7666ea139eb800f6991cba0f6946": "e8113b4748cc80b83d8119f8b780a5e8",
".git/objects/4d/5ed7482655d6880263414d1dff888e47e4ad80": "e7edfe5cb0cf2293d2fb0a7c0cf8831c",
".git/objects/4e/0d9f8efb86f69fce020088c7bb426809057e80": "f37c92205b1ebd3f3903b5632beaf235",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/51/f11f48c142dfd48ea1834aa849d9866a08407d": "89ee81eb48601f0ab372917800bc27d5",
".git/objects/53/e225ee8f69609dab29dc01fdcc9547dc2fa2e4": "27318afb8b3fa87dff16489932ee69a4",
".git/objects/55/d70ceb50a1689f72798e1ff0cd2c64da67373b": "b11bf934803e83207d1d935b32766fea",
".git/objects/5d/3184ff1c8c05583eb449c3966ca63a7b63b1df": "1adc7b270c7c9ddcff54b4f7d8a02bfc",
".git/objects/5e/8448cfdd8ff56e1090bdec7886e124dc40e632": "bb77138b3a7314f7a73f388f2a84d9ad",
".git/objects/62/11fe85f3b0d6357ed333277d89513db4c769cb": "e8034d90ba8a6698afb0ae390cdc12d7",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6d/f2b253603094de7f39886aae03181c686e375b": "4e432986780adf1da707b08f0bc71809",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/70/6bc55625db2ae79db5b85a71fd9ce5ae65a039": "470d060d74f1e7dec90caf90e582049e",
".git/objects/73/5fe05d2d9072b1c725a7c5304bd56445371b1e": "60897b768b1848dede52743f3835bccd",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/7f/57b1f83aa4c714b902b71940437b10915c14de": "570707daf122fd14ac9066cf2c96047d",
".git/objects/85/1e24deecb9a7a3497645cdcf8e4214ba6cb5e4": "a5776c2cb53f8c0d465600a7dee9f805",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/86/34a97c911ebed728ca5d3ca1ecbd526e7e6533": "a19c71a985a50a082c95d30c9c7ade17",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/6fb938c3580a0b816a6ba9b54125b14f7ddf18": "aa043a66d827ccce4941e386178d63fc",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/8e/8b8f242df43b312710beb97d8d75bcede0c172": "c840553b3236db82e42d62fb2e1765fb",
".git/objects/8f/b762b6fa7149bbe2c1674d58c4798d621f4412": "613b4be135f5ecf32aa41e1d336cd413",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/94/921050c499e3e1714a1340ea220cf2a33299b5": "b409804d5aeaa1f5cc1664cc7606bf5f",
".git/objects/9c/5420d22084f8a19fe338b89076955d1955c659": "50d9189e3a4092be0213baa3a654a50c",
".git/objects/a6/423749b98948ac66e312f6d99e2c1835748c23": "51d0bb862041bbf2c8345a27f4c4a547",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/aa/7a601e43938ea7ee12ffa96a283b635915dfb9": "bce73a0646e76db0f93af854f1e0f253",
".git/objects/ab/2e1056daa2e5d99fcb50dcfeb8d0e91e20cf46": "3ba077a9490bd6a14b572b945762207a",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/af/af6ac8acd93d84edd651d0c0c608c387dd43a6": "6c7aa3cb3e515ee834e1ee48f9ab9630",
".git/objects/b7/01459f9b90d8f519ecb7f95bf621c68e4f9567": "3ad4b16c702fbe077f004ce73262c3ff",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/2ce5b59dc720eb37d231d3be0cd63e8f77f58e": "2517ac6969368c4be933f841a110bd2c",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/ba/dd888ecc51534441c6f2079854dc48846d6931": "afc4ee7761d8203c064b4de33b82287e",
".git/objects/be/dc994d730c37217d56241bce2d6e872e2b57dc": "dc012e71039ff366118091ab38ca2188",
".git/objects/be/fce6af890a4edf6d3c858878b30c1c2e2cd803": "a6c70daafc28408c562234b3d09e0578",
".git/objects/c2/0e66bd0d98a7203e98d4d5c18603d54e39aab2": "8422ae0f4a6ce4dbf7f38e6fcd87bc7a",
".git/objects/c2/8e44539d1b2898821437f1c7726896c4dc4e75": "905e47cf6130e0be8b3ce7f6a88372e8",
".git/objects/c3/f9024bd475b574b129fc6a3fd81730d34ff242": "59ab60b5090a3d828ee2c942dade30e0",
".git/objects/c7/45fc0d7bcbaaed2200b9d2b6b8690f07b79b9d": "808f574b94c8ef5f11a19b5b352aa273",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/d0/231281ab48a7b32a709e43dd935b9c0f29aa2e": "fad245023a4dae50a800f9f79f7c8817",
".git/objects/d1/1399cd20df0e28a4bc74f252737b7f14d5109e": "ac2628cf890fcc99b01f8adb7fd840b0",
".git/objects/d3/7b593ef70f3d4f4bd312e61946d15b8570aa57": "d01713f4f1adde8aa33b4c72c9423eb0",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/df/12ebc4264fc83fe5f2ed976c36927829fb63c3": "101f9a938896f3b5123b98154c3ff03b",
".git/objects/e5/744ace54bf866f425ceac7487273f8a9bb2cc0": "8e815f4b768460d2a2b2f31d33c53b07",
".git/objects/e6/2450a1f2c465ee824ddda3c2c92188128c9cce": "7c11de59fc6b99c62b1c1af596fff0ee",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f1/96ed23e7d9feed832bcec1bfd8ca6e068cbeb6": "c9f3863455b6ecd1b77b3446bae0f418",
".git/objects/f2/c9ebab0d53e1f95e6b4943880321d0dc187ade": "88908e835f3a41103cb8bf0c6848b093",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/f9/eee2f7e776ac941528aab868b0669a98dca213": "10f19ef3985aa84b6780dd3373db4a9d",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/objects/fe/ef09b635e13007ef4f68f76f8608bcea16c859": "262aa35037792cc3bec7860142f1acf1",
".git/ORIG_HEAD": "10bcb7460ca91adbc856000d2fbb52a4",
".git/refs/heads/gh-pages": "46b8995aab0f62ca09f70bb8b0b0c2a9",
".git/refs/remotes/origin/gh-pages": "46b8995aab0f62ca09f70bb8b0b0c2a9",
"assets/AssetManifest.bin": "1b9a7ec9045198658268948973c8c87f",
"assets/AssetManifest.bin.json": "16fa2efc146f7b878bc124154a5a96df",
"assets/assets/fonts/Cairo-Bold.ttf": "08f051a1822e014b22374926f1406d01",
"assets/assets/fonts/Cairo-Regular.ttf": "5dacd3d88fa294c5c6263d4041a34935",
"assets/FontManifest.json": "b5e5026ec2e31c19e26aa68e2f8144eb",
"assets/fonts/MaterialIcons-Regular.otf": "f419eaad0f0deeeba5f92273b61d7094",
"assets/NOTICES": "1241d408eb75bf0b31bf4f98d6694c6d",
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
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "fef44ecca6c6abf6de162dc31df3afd9",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4d1c563c128e4c64c31393c5114c104a",
"/": "4d1c563c128e4c64c31393c5114c104a",
"main.dart.js": "cf54ae94ee19c7f8fe3aef23a0cefa2f",
"manifest.json": "7783ddb6a0c3fdfbe84feb68022e9dcd",
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
