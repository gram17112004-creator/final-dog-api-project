פרויקט Dog API
פרויקט API באמצעות Node.js שמחזיר תמונה אקראית של כלב דרך API חיצוני.

---> תיאור הפרויקט
הפרויקט הוא API שנבנה באמצעות Node.js ו-Express.js, שמבצע בקשה ל-API חיצוני פתוח (https://dog.ceo/api) כדי לקבל תמונה אקראית של כלב.
הפרויקט מדגים שימוש ב-axios לעבודה עם APIs חיצוניים, ומאורגן בצורה מקצועית עם מבנה תיקיות הכולל:

controllers

services

routes

utils

config

dal

הפרויקט עומד בכל הדרישות, משתמש ב-type: module, ותומך בהרצה ישירה עם פקודות npm.

מבנה תיקיות
controllers/, services/, routes/ — לארגון הבקשות

utils/logger.js — לרישום לוגים

config/ — משתני סביבה

dal/ — (כרגע ריק, אך קיים כחלק מהמבנה הדרוש)



הוראות הרצה
npm install
npm start

נקודת גישה
GET /api/dogs — מחזיר תמונה אקראית של כלב מה-API החיצוני: https://dog.ceo/api