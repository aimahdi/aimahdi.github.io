'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "6560ccc54d9114df59994db29bab3a58",
".git/config": "37b7f13444a8c3a23b2828833c0f6fe2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "282695ea755e41e7d514649cb547e152",
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
".git/index": "376013bb9f0895f3f1b4d6829779f08c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c0f3f1c51eeb1e36077de7a6d3364142",
".git/logs/refs/heads/main": "a29e9d43cfc024aae30d6ba5607739f5",
".git/logs/refs/remotes/origin/main": "1de7b2b467bad0019e4858f81ca61e22",
".git/objects/02/761e718783cc43ed1be2917ae1f75013c25c1b": "5335884d5d83437f9874260cbdb246f3",
".git/objects/02/76c444286a4e3e17e9a8c242b158d60a6cd4b2": "db52abdddd2927152a722b092c1c3e3c",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/0a/6e70adb753a08bc2779d129d7dbf1d2d38cd34": "965fe54fe86f3b7439ca26e4b1f46b19",
".git/objects/0a/7a7a6c3dfd7fa2a77646f553ab4c0075cb5f07": "811ec662ffb3c5f582196eec2be2ba69",
".git/objects/0b/8a72763cbab466fa83b82e91654f06bc5dd429": "a2ccb7e7fa54711429fb6aa0e962d8f7",
".git/objects/0c/4081edd4133938d5a941a31a8a02cf61e62a5a": "9728a1f24aea717e408ab3cfaa567fa0",
".git/objects/0e/29a5aba433a24c8244ff38c3274fbf15ca0a13": "96bb60e84a6fe73d5189216801fa2495",
".git/objects/0e/d0738136d92cc04b8c4c77118d46e85b8bd934": "7335dd363e39f0147047dd74f7a8c901",
".git/objects/10/ace43fc6279a4ea769ec77a7e389a0d65c1fac": "3029140d6332b71c5b5e3c3f743ea795",
".git/objects/11/a8efef3c9c404f7e0769875ac201641815cc50": "f8fafba35710b4792b155f09d03eef9e",
".git/objects/15/23a3a5cc93bf4551d37a50fe335c71293e08e6": "cc7edf86081bfe631c5a2f671e55ed82",
".git/objects/15/641f2d1e8c1487f4b090517f35f3f345f63374": "62071d4be67fe9ae2137dc2196fbc86c",
".git/objects/16/10cb034f5b7dcbf9657409310f3efaa8e6e9f6": "c4aecd78f67e1e257a851a9654f5cfaf",
".git/objects/1a/5d9c2b1eb2d6e123951d41042376bb4fecb4c6": "78f4d462865e71129685e027ae7ea100",
".git/objects/1c/19e6c54fe30833c4b5a88a7bd240322f648e50": "dbaa6619c75efe1b7734ced07e5ca48d",
".git/objects/1d/732497660bf5be506f14f700ae28b8e27464c0": "b5c48c269a44f518f892990ddae03e96",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/21/0c955788fd2961c477d237e90ce77ebd3c7372": "71d8b707777b1581a3f517b7b742d401",
".git/objects/21/6bc89d1d065664e344e3b4250729ff55e5897d": "359f77ef243b0fb0138adbaa738820f8",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/23/e733823c7e58180b397874392ec90e22fcb642": "a60314c13da82675ae616f9f31d131d4",
".git/objects/26/6393aebbd76589a192474d5eb446c18e6fb698": "83345274d66d561cc9a7dbc51147a02e",
".git/objects/2b/57014b7593828c921f1de079b7ae7d0e33a228": "0aabaf07c83379985a3793c8adc4559b",
".git/objects/2b/72e4777978b627d19b2193596dfce67a82cd37": "4ea110e1dd09063bf8eab23d80ae8b0f",
".git/objects/2b/b24f5d5c226dc97ebc9c5edd280bcde4987232": "211af9d30c55a77b61fc49356e8255fd",
".git/objects/2d/7e17ba8b5e0131e098f6e2c767b4ac33e7000d": "3169f80a518fbb8e775cf462c7d0f9a8",
".git/objects/2f/d3705c164e81df95e01e25b7f7abe85d102f6a": "2241ffefe30d3a2b0773b577de7550a4",
".git/objects/30/2366ddba2562cba659eca831398230b61b5539": "cc65a385539e13e85d579ad267584b41",
".git/objects/31/3fe161494ed60e09e6140040287efbaf2bbb45": "fced3a8c2e15f61ae9f99e70a8064021",
".git/objects/32/161d3edfe5f21dac42e6c354ab774d77ebf90b": "aa9fe7ccfb7b5153259c2351dc93290a",
".git/objects/34/7e67c83be6adeb5d37497445c54e9c286f2d53": "57799bb465555c8a5ff1bbfc6ff79cb0",
".git/objects/34/8803276a5fbb6b387a908016c97a4fa84f6a5f": "b240102fa8d2f981a054de832af1cbf3",
".git/objects/34/d92d325412d3eb53709d13c8d0fcb774e95067": "9292d679e9a7773eefb7261a5825b98b",
".git/objects/38/1c7d307c32b711430ec40fe3945ed7cc61b098": "dcaae1ca4d0391720253761d15df74db",
".git/objects/3a/d9e365388f9e1ae2519cb7cae14ef29e7a6e4e": "ee6f7f92be697832d6a61cdbf1ad0813",
".git/objects/3e/6a5d980a2c79db9033962be37f1987ddeea117": "5b80b2fb07943e73e7bcb785dda93cc8",
".git/objects/40/f35211c803352408149169cdea5f705e5d5b6f": "093e4e2c5bc01d8668b59eeb03354c82",
".git/objects/41/375325cb3555f35deb69e8dfd896502f2f3238": "d1ecfe6ec8eb0ccf039f925320f98730",
".git/objects/41/7c90941429a8bb25882a7d2add0837ccd24215": "74857e24f5d15abc20c20728e673afa6",
".git/objects/42/4160d45a6ea2ca800e11f11a5c04925ca90e8c": "566b39da12bdd707bae9ae980a98e5a3",
".git/objects/43/46e2d9e671bf7a5a3287a3ddacf5f915a35d4f": "41b3d0d418188d18de1ec7daf79f5299",
".git/objects/45/676befc581c8f64153d7ce4a0509d99d1244a3": "1b7d7ad45943cdda432652fd96a5c8df",
".git/objects/45/f6a11ae2994af8ab77fbb078c316a2aeb84c63": "d8ac3fd5835f7198ba61af0c18e66a6a",
".git/objects/49/133379e7f803c60e4360a97bb3b2fcc041475c": "baa6f01df91de3b5ac0ab28b72385653",
".git/objects/4a/07535769485c1d21af2302aabacb13887bc54c": "2355ea81d5ba5baf2c17dbfa69238bda",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4c/57a4c8755373a911bfc4296483ed3f137dca6a": "adb5cff767672600c9b821d24845bf97",
".git/objects/50/ed0c9aaa5b3e3e11fcfaa5648926a010e41c58": "79285f617e19ad4fa8940212a1d3147d",
".git/objects/55/cf170cb0ceaca7c5dc8c11fc90bdd230e883c1": "5165247c5cf8e9f2bf6d6f6280c4a0b4",
".git/objects/59/59b891ab56810488a51567358ca60808eedfb0": "2930c839694525d06dbdf7c5ca87d293",
".git/objects/59/a922ee5caca808a9f53b95d94676573da0ad27": "c3e49d4002f9d66ee85eba20808fa1a9",
".git/objects/5b/54def9016371dd97259ead62eaf74960d1ebf4": "5b1bc4b726500425828e3272c7fe07e9",
".git/objects/5c/5b76cb094ededa3caa21dda7adb19c677a772d": "15977d7b774c7c49d4d1dfd1953ea9d2",
".git/objects/5d/046d129555e35b91555d09e41cdba2434bd586": "a154672ee49137585db86867e1a2457b",
".git/objects/5d/25fea875bc16f20ada58262d505335a471b4b6": "391b6a6d170336bfd2c41806ef9811a3",
".git/objects/5e/2dddd68f733f4eeacdf6b784ee1c01ea6cda9c": "fcbe9adb0c12610b6da756b3a8acd0ee",
".git/objects/5e/da3bca41e82c8f6d61ed9acadb9f5b56d3066d": "813155e1f378f90cea00052d74bc6cc8",
".git/objects/60/3f6d29d222c05e35730da17453df045be9a994": "2c51cfcdc6bd232d815bb9692cc23b6d",
".git/objects/62/4b01518c4c4af1bd3069a1b367994a289ca15e": "16d8ab910152ad724c7c29f354b52b6b",
".git/objects/63/b9e414a0bc85106d6b5490847276a579f49d01": "9338b648e6e14963c3a4c40efad05b62",
".git/objects/64/8413a5e3a93ee18fae86132fa489936b1bb5ea": "d8d910982ec98706a2687cbcba123986",
".git/objects/64/a7ae387973b0755727587fc53b89216d00654d": "4ce14e30c69b4753e9dffa8a28eb8784",
".git/objects/6f/55454426848a869dd419eea98a51937293bca8": "03fdc691618a5e2e38bafaee908c5e34",
".git/objects/70/15564ad166a3e9d88c82f17829f0cc01ebe29a": "b0b4eb8e40c5eaa3b07c9dcc175a4ab8",
".git/objects/71/d894364d400f5a1c2de02ae47fa53a78684d25": "28ddcb5fba5d4d9628247bd0f8f294c9",
".git/objects/74/b7fe876e1c62a8b822975e2ccb53e273371b79": "42f898b2ed50241e203986fdb413baf4",
".git/objects/75/6663965bd669c6d16e873610a0b7db039884f2": "8d3c5e439b46e061a997e29896e058fd",
".git/objects/76/15e44b78f8e1c5d6cfcc453b0650e8215a5b95": "b25163bfc27d31d09e000d072757678a",
".git/objects/77/167ab93959b78ebe3e85bf34f8ca5abd2f7aa1": "51c8c2e7d5c8a655d675a98a1b8c39a6",
".git/objects/77/9bf50e31b89f35282f4920697653b517dbfa57": "a3ca5d38bfbbcda6f627496d7e9a1242",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/2e4e26389bb0c77b455aa4a74257b540591e71": "6dae090f018209b1c60812000ce0ac71",
".git/objects/7a/bcd52f77faf6aba988f1f81bf6ccd377dc9de2": "00f5dd9540beab9e1207fd4ddf278ace",
".git/objects/7c/6cd0b135c03aa0c658c6dbad9f5d0307e03a2a": "d37600c650bd445bbad9e762632b8fcf",
".git/objects/7c/d7b19f35e8e77fabf6a8ab3b4a912e49a375a0": "fa0e883f04d578c3d5333acca8a59238",
".git/objects/7f/199716eb6c6691bd558c70f9df73eef06aed32": "3fc26e626fb529344d8efbf57e775edd",
".git/objects/7f/27be56e2dfc566b69823c26fa5c612c9e6f20c": "c11714a0ce89c969dd629d7e73bafbce",
".git/objects/7f/82a9d995b0247386bbf8dd80f313ccd71ff9da": "ff34aca8191e0e00716410bef34c59a1",
".git/objects/80/37280719d5b82745361ca1249084ebec98ed24": "a0db4e2049d1517b63da152128f7c010",
".git/objects/81/0002e1085f23632616dd522740e5bd7832fde4": "e3b0d180e43a87cc0d8d861ed6c77d76",
".git/objects/81/05b141e5113d70f1fb450e23de0c10027072b6": "625e2ab3a4800197f8721def61451446",
".git/objects/84/164778c70d72e00966f0f86466dfcfebea6d99": "ad23d46c96f2ab3d4e1550717bb4543b",
".git/objects/87/ec937bbb5901769d648ab26e6d9c644e5afa65": "3cb1545637342e68ae690bd671f5d5dc",
".git/objects/88/ab8ecc3916ed8988b94eaa7445917d20844b03": "20b002b403e95461e9a1275394bdb5b4",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/29aa3b1974aa59dd6ac4a9a2f1bdc24d357cee": "9a7fc7469ada23dc0a019439244b2ceb",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/713e2a9da7879eccba441e86b30cc881b96002": "e61558ef921c2fdb98ed5eda4bbee185",
".git/objects/8c/912d7bd8cac889811d25ccb19b45c0b97c4890": "5eaec94df0a2d405794c15061b0d9aef",
".git/objects/8c/928cbbe84d86cb35547f6c3ce103249d533d8f": "c4724b99bf991c441ef0158a5eaa97d1",
".git/objects/8f/1762909f806cc8c4c94bfd7f0fcbb81ab7a23f": "4c021477661709fa84d74e7cc1f2800d",
".git/objects/8f/7ea42fd7b4cb408e9a34b6a2c4516dac057559": "9312e80af6ad392e3d336838517112a1",
".git/objects/93/2df4ae2c3cb34a716e21b478590eecaa2ae295": "e299ba2e68d97d0f661cc8ddccf9787a",
".git/objects/93/9c1d80a6c9c4762242347d3d20ad81c3e8a636": "e219a2962d27869100b01c1e947be613",
".git/objects/95/d0fe92d0ba73efa8de6be73fa4b3456faa4e3b": "73aac67c9519740b83184e5237c64efb",
".git/objects/96/8fc909157a7f2c74e1f5cf8d1236d128b8a0be": "631a66453edfb784ce2c79d9da5868dd",
".git/objects/98/359936e1d8ed38f17ee1d4383e0774644a5c9c": "f6e3afcdb2b7a7cab038fa00829de088",
".git/objects/9e/4f4e0c95a218537c43626787812d57fdb02225": "52ce3c951ce9842af2a74cb00aa743c4",
".git/objects/9f/25792be4d99d545542678c8d5f30b700cf0596": "9e8f4caa0b2075a78929722833768af9",
".git/objects/9f/dc22d05052eaf7ec4436fad2827a0d278063d6": "ee0dd973694cfdc1de459d40effb0123",
".git/objects/a0/7558029bcc240ed2c02504949872ee50893f1d": "79c782339947fe2f1cac1f69f27af24f",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/e772d6c2649f91a7a6016f7dc52481384dbbe6": "e04a176468b1e0f23b8876daeacecd1b",
".git/objects/a6/965ed511e9b634c6d0a438c4afbb85e65a6eaa": "8b07d72a94d7577f8009cf9368aca755",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/64aed8930321ee1c331662530100769c1f5d96": "9496e39b9e4c9b1fab757c20239cbf47",
".git/objects/ab/a43b4b5d623e8e10cc386b55917361e7831493": "e4de7cd9e1282e9f18646d4c21dc9dea",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/5baea3db8de1706edfef058a4496c3abdea358": "d9cb164dde373bed0f972bc006541e9a",
".git/objects/b8/5b154ed94aadb1d8ad44329ac9555af65edc01": "29b3321675a665c8b5e18b93ba5a02d4",
".git/objects/bd/09670bd35b0957324201a8f89aaeadce533cc4": "f23773ee71f4554864012b46467adcae",
".git/objects/be/df0d7ea2fbbe6c984c238d7f141169bb6d3a67": "d2d253c49883adffbf086d195de59894",
".git/objects/c0/82c83335931128f972c3f05dc6efb4e28482f7": "8d12323e5841a4e0bccef158f20dc87a",
".git/objects/c2/a728121cc94290e0e8dbde82b1e5125d5465a6": "f2989bf1405fb660305820683b8ee53c",
".git/objects/c3/0518aae032547e8ccf384dff7b8b048486b299": "08328b854f0c2cc1843a018a81fcf847",
".git/objects/c6/269e67df9299958bd070ac6bf1756a75ff48c5": "8486439f3dae059d6fc92cd9b8699962",
".git/objects/c7/0600e77abe828048ab2542eee05b93880ccd1f": "5521ac2335d77669d0ab118a107ff733",
".git/objects/c8/9245a691aa00e5509233baf521670e44d37763": "493bb9695a3795dd911a21186ec5cabb",
".git/objects/cc/da506ee052382db88afb957ac168659257f72d": "6644004f66ce12cf01f14e89950ea7d5",
".git/objects/ce/8228831fbd6b1923776710dd423c04604da81c": "ac0ac4a8aa8dd1588d0fdd41db3b50e2",
".git/objects/cf/d8e609a9a7d6ff18805187f2796956ca396f5f": "c2d1d45d1a56f0b35cc840595ce0c635",
".git/objects/d0/523abced2fbc0d8702c37a802aaf260e65ee0d": "dce10ab4b5d85aea202d765b97fed654",
".git/objects/d1/5761418fba48f82bab945abdabddac2dc4149e": "91f51efbecf428e0f8574fd2247d9932",
".git/objects/d1/cbfc904566787cbb60c4a574c6b259054303dd": "17b77193a5582fe70d3bc35e744e4f75",
".git/objects/d4/fa7e4903ba19c908b40f4ed350d8d5bd686d84": "01197954d9644a8128a83cc002e1b40f",
".git/objects/d9/35c9580eeb5a686a65cc9a67d526ae839ab7ef": "9a57214ee636b73545a15e7460c7cace",
".git/objects/dd/43db65edcbfd810943d4270e20d3703447c26d": "b41f2c4cbaf5f3425cc1445d4e1e098e",
".git/objects/de/57d8980125b7aea573566c275885f4f9355d58": "fe0d0e859a4738d2109bd6a3ab6580eb",
".git/objects/df/efa87e8f9a6bdb9ccb1aacb402c479615a4fa2": "c01daf7e990e8af3f80db25f5aaf045a",
".git/objects/e3/0fca5c1556cb5124a1d1400803bff204cec85d": "fcdc7a47daad64277faa9b34d77bd77a",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/9a5efcf39c292b3a27ff874f073c4f71a06e60": "66fe80a1844bfb33fb1c6db446de9651",
".git/objects/e7/7f8216ddaa838eef6d444add4b1d5aabee8fb7": "796004d1c2bb9015e3c0ffbf38ba38d1",
".git/objects/ec/084325b2270ff92438647621a4ea70eedaf262": "8cef6a5e0025d8ff977185270b48be92",
".git/objects/ee/6b2ef72703f548f849df4ec2de3fb35bd5f348": "89e93e2e93dd8c90a2636f02b66950dd",
".git/objects/f1/7d5a5014e4ae9c7d9d5f8de26fec398f65e44c": "e8f04124372d550cb6c2b42e572f972f",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/fa/5236c8d05d69759a242eb238e5eade2685ea3b": "b2df152e42b91e4708aec8f4d806f23b",
".git/objects/fd/78836773f8c6585b756653c4c060216a078a19": "9c18c02b3edc583840cef8563c85922a",
".git/ORIG_HEAD": "ddfd422e40d929f98962dbe86654e463",
".git/REBASE_HEAD": "ddfd422e40d929f98962dbe86654e463",
".git/refs/heads/main": "06eea44469c7e2f56a7f0976960922fa",
".git/refs/remotes/origin/main": "06eea44469c7e2f56a7f0976960922fa",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "c1dca12603ca21fc2f9f5ac78feaed2e",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/fonts/MaterialIcons-Regular.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/icons/briefcase.png": "12e9358e8dbae5cb406a7abeec84d4f5",
"assets/icons/call.png": "9e299bb392428812cffbdadaf9272b15",
"assets/icons/coding.png": "c8150fc2000e8674220bcd485b30e68f",
"assets/icons/coffee.png": "19e4f65ea926133b771bf82daa35f5d4",
"assets/icons/design.png": "c59f68c8be347d0a5231b2b714421b24",
"assets/icons/double-up-arrow.png": "d758827b82d3262d54d19f7482c36b63",
"assets/icons/email.png": "ecf609bb48c645251a898c5527f7c781",
"assets/icons/facebook.png": "d03d1cb8afb8da75756264994a9ce4d4",
"assets/icons/github.png": "0918d78648457def080137b179fc5608",
"assets/icons/happy.png": "3837c30afeb5b40886a787810f553fc3",
"assets/icons/linkedin.png": "3c963b14a58df80613b15c7e9e4e9c57",
"assets/icons/list.png": "4e63ee6122b58866f4a2d2408c02f9ef",
"assets/icons/menu.png": "3ca1d45f78b3acb1d2a89a53271a21db",
"assets/icons/pencil.png": "4566fb93d2196b9b2b74be9cfe23d0c8",
"assets/icons/pin.png": "c40700870fa15459e94f3ffd6eccfcfd",
"assets/icons/twitter.png": "cadd7c4e3a3a29ddfa395393e652012a",
"assets/images/amimul.png": "e4d063334b50422d24f059819fb0a775",
"assets/images/background.jpg": "346c1daab54715d3701cddb8b2ee0999",
"assets/images/cover.jpg": "1d39c3dd934e44b95eb2ad8533aa8068",
"assets/images/icon.jpg": "45e4de9166e70318478dac9843a38490",
"assets/images/projects/ielts_score_calculator.png": "07e93ec02bf164c11832b7404bd02a57",
"assets/images/projects/plasma_planet.png": "93b270f92bdc07994f84f856be5f4c8c",
"assets/images/projects/teach_vocabulary.png": "2cf03d3769868c9e72124fea2b9ba4d8",
"assets/images/projects/url_shortener.png": "d59362063bb70ee5af29e00f22d7d8ad",
"assets/NOTICES": "be72886fb3ea54368c37e49346a791f8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "c68f606bf3c0baefda3de92aa6b0399c",
"/": "c68f606bf3c0baefda3de92aa6b0399c",
"main.dart.js": "758aa23427b28545820788d365ff8877",
"manifest.json": "32c6e48f10a238e41302fbe6bb4a7d78",
"version.json": "c84d9e835dbba97b78b658659a8c46a1"
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
