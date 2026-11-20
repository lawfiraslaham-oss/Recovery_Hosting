// عامل الخدمة لإشعارات Firebase على نسخة الويب من أُنيب.
// بدونه لا يستطيع المتصفح استلام الإشعارات والصفحة مغلقة أو في الخلفية،
// ولا يُحفظ رمز الجهاز (FCM token) لمستخدمي الويب أصلاً.
// القيم أدناه إعدادات عامة لتطبيق الويب (نفس الموجودة في firebase_options.dart)
// وليست أسراراً.
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
