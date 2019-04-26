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
    res.send(users);
    });    
});

app.get('/users/:id', (req, res) => {
    userApi.getUserById(req.params.id)
    .then(userId => {
        res.send(userId);
    });
});

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`)
})