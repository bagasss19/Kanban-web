# kanban

## Aplikasi Kanban menggunakan client-server model dengan spesifikasi sebagai berikut:
- API Documentation (server) yang meliputi:
- URL(s)
- HTTP Method
- Request
- Response (success dan error)
- Membuat routes sesuai standar REST API
- CRUD endpoints untuk Task, dimana minimal inputnya memiliki:
    - title
    - category
- Register dan Login dimana minimal field untuk user memiliki:
    - Email
    - Password
    - Organization (default hacktiv8)
- Atribut Organization pada User, berisikan default value “Hacktiv8”. Atribut ini ditambahkan pada server sehingga akan terinput secara otomatis ketika user baru didaftarkan dan default value tidak boleh diubah dengan value lain selain “Hacktiv8”.
- Membuat authorization sehingga user hanya bisa melakukan Update dan Delete terhadap task-nya sendiri
- Melakukan Read pada semua card yang tersedia(authentication)
- Social Login (Google/Twitter/Facebook/GitHub)
- Vue component minimal Task dan Category
- No alert()!!!
- Deploy to Heroku (server) + Firebase (client) Hosting


## Kompetensi Backend
- REST API
- API Documentation
- Auth
- PostgreSQL + Sequelize + Express

## Kompetensi Client
- Vue.js
- SPA (Single Page Application)
- Vue Component

## Web Link
https://kanban-4cdb9.web.app/

## Server Deployed At
https://secret-castle-82092.herokuapp.com/
