const express = require('express')
const app = express()
const methodOverride = require('method-override')
const userApi = require('./api/userApi')


//Set up handlebars
app.set('view engine', 'hbs')
app.use(express.static(__dirname + '/public'))

//Middleware for handling html forms where body is a query string
app.use(express.urlencoded({extended:true}))


app.use(express.json())

// The html forms 'hack' that allows PUT/PATCH/DELETE
app.use(methodOverride('_method'))


app.get('/users', (req, res) => {
    userApi.getUsers()
    .then(users => {
    res.render('users/users', { users });
    });    
});

app.get('/users/:id', (req, res) => {
    userApi.getUserById(req.params.id)
    .then(user => {
        res.render('users/edited', {user});
    });
});

app.post('/users', (req, res) => {
    userApi.createUser(req.body)
    .then(() => userApi.getUsers())
    .then((users) => {
        res.render('users/created', { users } );
    });
});

app.put('/users/:id', (req, res) => {
    userApi.updateUser(req.params.id, req.body)
    .then(() => userApi.getUsers())
      .then(() => {
        res.render('users/updated');
      });
});

app.delete('/users/:id', (req, res) => {
    userApi.deleteUser(req.params.id)
    .then((user) => {
        res.render('users/deleted', {user})
    })
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`)
})