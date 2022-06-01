### document migrations "sequelize cli"

https://sequelize.org/docs/v6/other-topics/migrations/

### start project

- npm install
- npm start

### technical in project

- using nodejs (express)
- template engine: ejs
- default layout: package express-ejs-layout
- database: mysql2 - ORM (object ralation model)
- MCV structure

### MVC

```js
-> client start route path "/" -> controller receive request with path "/" ___ 1. render view exact
                                                                          |
                                                                          |___ 2. handle data to Service (get data to database "models") and return data to controller, after pass data with type object to view render
                                                                          res.render("/user", {data})

```
