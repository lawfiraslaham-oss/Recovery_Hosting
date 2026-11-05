'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "28e98e983c86cf208cb9ce68d4fe0994",
".git/config": "e23f5daa312db8b9fd0ac18678eb43a7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "f1177ec9b50c2f911b689c4a9aaee171",
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
".git/index": "8a47c5fbef2021fa76ca2e898f024aec",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "12528d007eb2a061a52bb03aa26d09f0",
".git/logs/refs/heads/gh-pages": "c3bdcbf45d91aeb260936be2689068b2",
".git/logs/refs/remotes/origin/gh-pages": "8d3829e37e2d49bb1c82f77d125c9785",
".git/objects/01/1842b856d2844c35f671e492a3793c1dea487f": "9a7fa59443b8925d7b787ea6939b9d2f",
".git/objects/02/2370506b93a600f63c75e8d8434e0cb84f6c3d": "2053c817092eff87e9f4b39d402ff17e",
".git/objects/03/538ded7b1ee31dbf9d13af0a72ed2a755fcec0": "b1db07ffe14e1035eda3d5a357ca860c",
".git/objects/04/1abaf63fe66dabcf428d8c18f278ff3e02f744": "030a452079fbb40abd7ae110f00903d4",
".git/objects/05/a9c09613574de9b77071261d4429ad6457f4f3": "ac4627b63d6bbc4a63e59c613b45193e",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/0d/209dbbea6bb55412c595b65f0fb4c83d9e9dfd": "034dc141670f4b9717ea4046925b5eff",
".git/objects/1a/074f5b40b62748205e03b9a1561902ab0926d5": "c943c8e49a5dfa1750bc309b4eaad797",
".git/objects/1e/54a86f80eec9b3da9d72d436cef5639fa8dc66": "3ec681bd76761614c211bd24c8cc4cee",
".git/objects/1e/75f5d95dcad1e69df367274438d2a8aa243ccb": "d301c6d04d24a1ad9b4be332f284c321",
".git/objects/23/2916becdf6c593c5323e84a843fe5cd0e2ae80": "827637e8c82167a6d7db4b5ab9bac4c1",
".git/objects/25/43746cf881649faec6531b63f5be5e3ad9b705": "2f480270df0aebd6cb7b4a3b94f4545e",
".git/objects/25/772d75dbb400cace0c81c7d85307174cbcf486": "fc70bdaeb68618eff8512bdd8bc29a0a",
".git/objects/28/22f7abcd39b8610e7b424fe45eedf2c7e34ca8": "dc02f39a633dc1e7e215694cedff2e65",
".git/objects/28/6a48c5a453d73fb5ce555f9a0656a923e22e96": "99f80d4c240a77ee916c880b7fc4f03d",
".git/objects/2a/826c76b7767c77f383c83ffabc70d725d25eae": "a5d2ed0176901856263af2c312dfff7d",
".git/objects/2f/9c6944a0134c5cec02d1f7b33d597614227702": "c69163365ac5fce7a1e7c26368323c6b",
".git/objects/30/5ebd707ee8c660e1548d0a925c5e7c1e65749a": "0c1634fae6ce968728c40a0d287ba812",
".git/objects/30/6942dc5bda024438722d4da845f397d2b10e14": "682a06660c7a1bece06811374e7444ab",
".git/objects/31/901b6c81592c460c47579fb1356cb06cfe8118": "40a7a1ce3fe7c4b8565f5694839b14ad",
".git/objects/36/ac46bf8fe6447e722988bf72e830de286ed043": "1bd31accf71b41950faa55cf9ea05575",
".git/objects/39/0b0f9cf0b536e6d743f1027ee9bd02890da04d": "7b1162bd8a60edf70383ba15ee8ed7a2",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/41/288ba496cfb2724d8d64c132218cdbde8836a9": "fb1a38feb05735cfe33e93cd78b1b48f",
".git/objects/42/62fc979d424648e008852b20d06c5b9d02c7ca": "5021613b3921cc74e28e2fe4daaeebeb",
".git/objects/46/bdd9e395d9a1a442185f0b170179a049ec0161": "2b5cffcc37fc1ca0626e5a99164b192f",
".git/objects/47/77c092ceb73a449120ba1894931c4e52f38ee9": "2d8e785c895b880650ba4de9db4b3d46",
".git/objects/49/f7d4b3c7f11575c18da76baf6126af5dc50fd4": "b1f4803b23aff24fe4dfc22efcea9738",
".git/objects/4d/7d56f80d8bc00100e64cb37b4c43652288e630": "770eba680b539aeac9361ab8feaa8dcb",
".git/objects/4e/0d9f8efb86f69fce020088c7bb426809057e80": "f37c92205b1ebd3f3903b5632beaf235",
".git/objects/4e/c31b32f354a1dfa0027c5befc268cf80676f21": "86a841fb91f5f487bd3a8d9a620a07e7",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/53/e225ee8f69609dab29dc01fdcc9547dc2fa2e4": "27318afb8b3fa87dff16489932ee69a4",
".git/objects/58/655ac12c0341b0d720756691fb317570d5f4d6": "d5529c555d664149a6fae3777bd49e92",
".git/objects/5e/8448cfdd8ff56e1090bdec7886e124dc40e632": "bb77138b3a7314f7a73f388f2a84d9ad",
".git/objects/5f/4b97798ba04c084da8a36b8f0de5e211105e88": "63ed0c54836c891818bf396c1f0a92e6",
".git/objects/61/b0083f530e7fac770e4b8a00521be2ed8bbd17": "a79f577b017cc67969c09555de0d1231",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6d/f2b253603094de7f39886aae03181c686e375b": "4e432986780adf1da707b08f0bc71809",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/73/1f0ebb1def59f52be501a063144e0aee2d7b49": "2cf9b114553d0ae1de0c196e563b8242",
".git/objects/73/5fe05d2d9072b1c725a7c5304bd56445371b1e": "60897b768b1848dede52743f3835bccd",
".git/objects/77/9b1d41a953f004cc1cf7e0e436d9fad9ea5ac9": "52d8bf61b9031662fb728bddd9f25a72",
".git/objects/7b/3836474b8c2d41cb422cfe1a1b612484ebc93b": "a6bdc7edfcb958326055ad69b1061a2e",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/7d/8ecb6f9f0c77cc917a078b840cfadc4600445f": "6e3acf57c63efb5b0bf092b1a2370920",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/86/34a97c911ebed728ca5d3ca1ecbd526e7e6533": "a19c71a985a50a082c95d30c9c7ade17",
".git/objects/89/6fb938c3580a0b816a6ba9b54125b14f7ddf18": "aa043a66d827ccce4941e386178d63fc",
".git/objects/89/9dd1e7e42f836dd37a12a9e9cca7f725513beb": "892e58424a47c13769c309d80ce5ab5a",
".git/objects/8c/bbbcbd05dd93a1f71e1011050f5b28670300ea": "1a2710f57b7b1f884038848d899f44cd",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/91/fc58ad02d66a6ecfa24c246fa8077bc585070f": "b67089f62968d67316a85c7f3eaa1ca5",
".git/objects/92/487da0273e70e6d01f02cfebf1d47eb1af2537": "9f96944c684ea4dcf64e8b69dab0e821",
".git/objects/92/9d1b589190f0d7f446aa28ed3979fff0a75aab": "f29bb77ce1ac7d9406ceedd2b4f367cf",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/95/51b6d7b46483c02773697e98fd317d8c8997f7": "228907e296b0ef7366b14de2ba27ee90",
".git/objects/a0/142864eb4e46a5a11bf8199d4a260d1b08e3ec": "848cc8604262144a99ef0cab7f12b9ba",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/a8/7cb39f3feaa46202af240b207b31a945254d19": "6162311219a7fbfe07d4d2a376b29270",
".git/objects/aa/d9cceaed13fc4e04940a1c8dfc9c6b10520cde": "e054c912114b1972b4a33262210176bf",
".git/objects/ac/72ca5d1e114532c64f28f4cb977990041c3e76": "b1da87a19507afcaa51559b9884db54d",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/af/af6ac8acd93d84edd651d0c0c608c387dd43a6": "6c7aa3cb3e515ee834e1ee48f9ab9630",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/b9/d7aea0790f981736f44bccf964384e9745c2f2": "5236ae8678ac41846aac39ff327edd04",
".git/objects/be/fce6af890a4edf6d3c858878b30c1c2e2cd803": "a6c70daafc28408c562234b3d09e0578",
".git/objects/c0/69e3e8e46110203f363dd76d2491d1beea6414": "790d66087a7b8ee1c6d06b7ef9f4a44e",
".git/objects/c6/908d46878ae60e463c7352d86dfac399e6a616": "ef2d0d29c7e7a8d9f12f63068683f982",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/d0/231281ab48a7b32a709e43dd935b9c0f29aa2e": "fad245023a4dae50a800f9f79f7c8817",
".git/objects/d1/1399cd20df0e28a4bc74f252737b7f14d5109e": "ac2628cf890fcc99b01f8adb7fd840b0",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/e49ce4dc776589b2984e4d67bf31315d024988": "6784f6ae5a8eead46106632749d6f00d",
".git/objects/d7/9ff96d3a6bcb6d1ada7126dedcef652cc24cec": "22d5e32ea8b302b9b1764c15dc7a80e9",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/df/12ebc4264fc83fe5f2ed976c36927829fb63c3": "101f9a938896f3b5123b98154c3ff03b",
".git/objects/e4/a58802a1dd3b4c3ea1ddf90f21af0a974658c5": "b279137b2d2b89e69688e567dfcaaeb8",
".git/objects/e5/744ace54bf866f425ceac7487273f8a9bb2cc0": "8e815f4b768460d2a2b2f31d33c53b07",
".git/objects/e6/2450a1f2c465ee824ddda3c2c92188128c9cce": "7c11de59fc6b99c62b1c1af596fff0ee",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/f2/c9ebab0d53e1f95e6b4943880321d0dc187ade": "88908e835f3a41103cb8bf0c6848b093",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/f7/c1005ed0482669ae841adf2fc3f482167f80f8": "3be0de823d32555878f4ada4cc3fb879",
".git/objects/fa/c6bb1d3b61ddf105e85b83fa5a00d66da23114": "372046a5ed3c288a358ad1925f49251c",
".git/objects/fc/703d3ff9cb094c81803a358bafc17dcf5210b0": "5e1093d3c98ff59584e01604ef78ffe6",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/objects/fd/12f38bb76992df766bc4981241722ca42a5a4a": "0cd5ab793d250483c6a03707bb85c8d1",
".git/objects/fe/ef09b635e13007ef4f68f76f8608bcea16c859": "262aa35037792cc3bec7860142f1acf1",
".git/refs/heads/gh-pages": "31dc9a342e84cddb7b274041bd0c4a9d",
".git/refs/remotes/origin/gh-pages": "31dc9a342e84cddb7b274041bd0c4a9d",
"assets/AssetManifest.bin": "1b9a7ec9045198658268948973c8c87f",
"assets/AssetManifest.bin.json": "16fa2efc146f7b878bc124154a5a96df",
"assets/assets/fonts/Cairo-Bold.ttf": "08f051a1822e014b22374926f1406d01",
"assets/assets/fonts/Cairo-Regular.ttf": "5dacd3d88fa294c5c6263d4041a34935",
"assets/FontManifest.json": "4f37a5863611f9c77a8fe938c7a14313",
"assets/fonts/MaterialIcons-Regular.otf": "49122cfabfc1dfe3788cfe28d0897353",
"assets/NOTICES": "c06f40690f23bdf72e2ddda62ab326be",
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
"favicon.png": "2778b15cdf8bfe1f1879cf83f6d993a9",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "db4bfdbfa029804d4e436fac96adfe45",
"icons/Icon-192.png": "6f47a994e5ebd5b7986e7fd04eaf057b",
"icons/Icon-512.png": "6b8a6962e43441b67fbf2185cf185843",
"icons/Icon-maskable-192.png": "6f47a994e5ebd5b7986e7fd04eaf057b",
"icons/Icon-maskable-512.png": "834741963b388c2c287900e20d903355",
"index.html": "18b0ce3eab5724fd1751003df356258b",
"/": "18b0ce3eab5724fd1751003df356258b",
"main.dart.js": "84b9961ceee0ec9fb0a01995395df52f",
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
