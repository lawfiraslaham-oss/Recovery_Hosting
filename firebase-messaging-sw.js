// عامل الخدمة لإشعارات Firebase على نسخة الويب من أُنيب.
// بدونه لا يستطيع المتصفح استلام الإشعارات والصفحة مغلقة أو في الخلفية،
// ولا يُحفظ رمز الجهاز (FCM token) لمستخدمي الويب أصلاً.
// القيم أدناه إعدادات عامة لتطبيق الويب (نفس الموجودة في firebase_options.dart)
// وليست أسراراً.

// الضغط على إشعار يفتح التطبيق نفسه (/#/) لا الصفحة التعريفية على جذر الدومين.
// يُسجَّل قبل مكتبة Firebase فيسبق معالجها، ويخص إشعارات Firebase العادية فقط
// (بدون أزرار إجراءات) — أي إشعار آخر يبقى لمعالج Firebase كما كان.
self.addEventListener('notificationclick', function (event) {
  var data = (event.notification && event.notification.data) || {};
  if (!data.FCM_MSG || event.action) return;
  event.stopImmediatePropagation();
  event.notification.close();
  var appUrl = self.location.origin + '/#/';
  event.waitUntil(
    self.clients
      .matchAll({ type: 'window', includeUncontrolled: true })
      .then(function (windows) {
        // إن كان التطبيق مفتوحاً في نافذة: ننتقل إليها بدل فتح نافذة جديدة
        for (var i = 0; i < windows.length; i++) {
          try {
            var url = new URL(windows[i].url);
            if (url.origin === self.location.origin &&
                url.hash.indexOf('#/') === 0 &&
                'focus' in windows[i]) {
              return windows[i].focus();
            }
          } catch (e) {}
        }
        return self.clients.openWindow(appUrl);
      })
      .catch(function () {
        return self.clients.openWindow(appUrl);
      })
  );
});

importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: 'AIzaSyA7Sl9pmr87K3db8LRAs_9yrNeGn_CIkzA',
  appId: '1:136049221916:web:2b15d9cd929443fe84dad9',
  messagingSenderId: '136049221916',
  projectId: 'oneeb-legal-app',
  authDomain: 'oneeb-legal-app.firebaseapp.com',
  storageBucket: 'oneeb-legal-app.firebasestorage.app',
});

// الرسائل التي تحمل عنواناً ونصاً (notification) يعرضها المتصفح تلقائياً
// عندما تكون الصفحة مغلقة أو في الخلفية، والضغط عليها يفتح التطبيق.
firebase.messaging();
