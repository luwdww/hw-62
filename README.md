# Express MVC Server

##  Запуск

```bash
npm install
npm start

Сервер працює на: http://localhost:3000

 Маршрути
Root

GET /
→ Get root route

Users

GET /users
→ Get users route

POST /users
→ Post users route

GET /users/:userId
→ Get user by Id route: {userId}

PUT /users/:userId
→ Put user by Id route: {userId}

DELETE /users/:userId
→ Delete user by Id route: {userId}

Articles

GET /articles
→ Get articles route

POST /articles
→ Post articles route

GET /articles/:articleId
→ Get article by Id route: {articleId}

PUT /articles/:articleId
→ Put article by Id route: {articleId}

DELETE /articles/:articleId
→ Delete article by Id route: {articleId}

 Архітектура

Використано патерн MVC:

Routes → обробка URL
Controllers → логіка
(Models → можна додати пізніше)
 Примітки
Всі відповіді текстові
Без бази даних (заглушки)