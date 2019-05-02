// Gather the dependencies

const express = require('express')
const app = express()
const methodOverride = require('method-override')
const userApi = require('./api/userApi')
const homeworkApi = require('./api/homeworkApi')
const activitiesApi = require('./api/activitiesApi')

//Set up handlebars
app.set('view engine', 'hbs')
app.use(express.static(__dirname + '/Public'))
// app.use(express.static(__dirname + '/images'))

//Middleware for handling html forms where body is a query string
app.use(express.urlencoded({extended:true}))


app.use(express.json())

// The html forms 'hack' that allows PUT/PATCH/DELETE
app.use(methodOverride('_method'))

// Set the routes

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/users/new', (req, res) => {
    res.render('users/new')
})

// Get individual user's id use as the reference to link to homework and activities
app.get('/users/:id/agenda', (req, res) => {
    userApi.getUserById(req.params.id)
    .then(user => {
        homeworkApi.getHomeworkByUserId(req.params.id)
        .then(homework => {
            activitiesApi.getActivitiesByUserId(req.params.id)
            .then(activities => {
                res.render('users/user', {user, homework, activities})
            })
        })
    })
})


app.get('/users', (req, res) => {
    userApi.getUsers()
    .then(users => {
    res.render('users/users', { users });
    });    
});

// Create new user (get before post)
app.get('/users/:id', (req, res) => {
    userApi.getUserById(req.params.id)
    .then(user => {
        res.render('users/edited', {user});
    });
});

app.post('/users', (req, res) => {
    userApi.createUser(req.body)
    .then((user) => {
        // console.log(user)
        res.render('users/created', { user } );
    });
});

// Update users info
app.put('/users/:id', (req, res) => {
    userApi.updateUser(req.params.id, req.body)
        .then(() => userApi.getUserById(req.params.id)) 
      .then((user) => {
        //   console.log(user)
        res.render('users/updated', {user});
      });
});

// Delete user
app.delete('/users/:id', (req, res) => {
    userApi.deleteUser(req.params.id)
    .then((user) => {
        res.render('users/deleted', {user})
    })
})

app.get('/homework/:id', (req, res) => {
    homeworkApi.getHomeworkByUserId(req.params.id)
    .then(homework => {
        // console.log(req.params.id)
        // console.log(homework)
        res.render('homework/edited', {homework, userId: req.params.id})
    })
})

app.post('/homework', (req, res) => {
    homeworkApi.createHomework(req.body)
    .then(homework => {
        res.render('homework/created', { homework})
   
    })
})

app.put('/homework/:id', (req, res) => {
    console.log("Updating homework ", req.body)
    homeworkApi.updateHomework(req.params.id, req.body)
    .then(() => homeworkApi.getHomeworkById(req.params.id))
      .then((homework) => {
        res.render('homework/updated', {homework});
        // res.redirect(`/user/${req.params.id}/agenda`)
      });
});

app.delete('/homework/:id', (req, res) => {
    homeworkApi.deleteHomework(req.params.id)
    .then(homework => {
        res.render('homework/deleted', {homework})
    })
})

app.get('/activities/:id', (req, res) => {
    activitiesApi.getActivitiesByUserId(req.params.id)
    .then(activities => {
        // console.log(req.params.id)
        // console.log(activities)
        res.render('activities/edited', {activities, userId: req.params.id})
    })
})

app.post('/activities', (req, res) => {
    // console.log("Creating activities ", req.body)
    activitiesApi.createActivities(req.body)
    .then(() => activitiesApi.getActivitiesByUserId(req.body.user))
    .then(activities => {
        // console.log(activities)
        res.render('activities/created', { activities })
    })
})

app.put('/activities/:id', (req, res) => {
    // console.log("Updating activities ", req.body)
    activitiesApi.updateActivities(req.params.id, req.body)
    .then(() => activitiesApi.getActivitiesById(req.params.id))

      .then((activities) => {
        //   console.log(activities)
        res.render('activities/updated', {activities});
      });
});

app.delete('/activities/:id', (req, res) => {
    activitiesApi.deleteActivities(req.params.id)
    .then(activities => {
        res.render('activities/deleted', {activities})
    })
})


const PORT = process.env.PORT || 3000

// Start the server
app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`)
})