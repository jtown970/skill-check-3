require('dotenv').config();
const express = require('express'),
      session = require('express-session'),
      massive = require('massive'),
      auth = require('./controllers/authCtrl'),
      curd = require('./controllers/crudCrtl'),
      mid = require('./controllers/midware'),
      {SESSION_SECRET, SERVER_PORT, CONNECTION_STRING} = process.env,
      app = express();

app.use(express.json());
app.use(session({
  resave: false,
  saveUninitialized: true,
  cookie: {maxAge: 1000 * 60 * 60 * 24 * 14}, // two weeks
  secret: SESSION_SECRET
}))

//endpoints
app.get(`/api/posts`, curd.getAllPosts)
app.get(`/api/posts`, curd.getOnePost)
app.post(`/api/posts`, curd.createPost)
app.put(`/api/posts/:id`, curd.updatePost)
app.delete(`/api/posts/:id`, curd.deletePost)
//auth endpoints
app.post(`/auth/login`, auth.login)
app.post(`/auth/register`, mid, auth.register)
app.delete(`/auth/logout`, auth.logout)
app.get(`/auth/user`, auth.getUser)

massive({
  connectionString: CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false
  }
}).then( db => {
  app.set('db', db)
  console.log('connected to db')
  app.listen(SERVER_PORT, ()=> console.log(`server running on port ${SERVER_PORT}`))
}).catch(err => console.log(err));