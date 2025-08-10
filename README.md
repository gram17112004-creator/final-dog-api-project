# 🐶 Dog API Project

مشروع API باستخدام Node.js يجلب صورة عشوائية لكلب من خلال API خارجي.

## 💡 وصف المشروع

المشروع عبارة عن API مبني باستخدام Node.js وExpress.js، يقوم بجلب صورة عشوائية لكلب من خلال API خارجي مفتوح (https://dog.ceo/api).  
هذا المشروع يوضح كيفية استخدام axios للتعامل مع APIs خارجية، وتنظيم الكود باستخدام بنية مجلدات احترافية تشمل:  
- controllers
- services
- routes
- utils
- config
- dal

المشروع يتبع جميع المتطلبات المذكورة، ويعتمد على `type: module`، ويدعم تشغيل مباشر من خلال أوامر npm.

## بنية المجلدات

- `controllers/`, `services/`, `routes/` — لتنظيم الطلبات
- `utils/logger.js` — لتسجيل الطلبات
- `config/` — متغيرات البيئة
- `dal/` — (فارغ حاليًا لكنه مرفق للبنية المطلوبة)

## تعليمات التشغيل

```bash
npm install
npm start
```

## نقطة الوصول

- `GET /api/dogs` — يرجع صورة كلب عشوائية من API خارجي: https://dog.ceo/api
