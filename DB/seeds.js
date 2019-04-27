const userApi = require('../api/userApi')
const homeworkApi = require('../api/homeworkApi')
const activitiesApi = require('../api/activitiesApi')

let newUser = [
    {
        name: "Analise",
        age: 9,
        grade: "3rd"
    },

    {
        name: "Bill",
        age: 8,
        grade: "3rd"
    },    

    {
        name: "Chloe",
        age: 9,
        grade: "3rd"
    },

    {
        name: "Dominic",
        age: 8,
        grade: "3rd"
    }
];

userApi.createUser(newUser).then(newUser => {
    console.log(newUser);
});

let newHomework = [
    {
    user: "5cc317df7c3d328a98f572d5",
    readingMinutes: 20,
    mathAssigned: true,
    mathCompleted: true
    },

    {
    user: "5cc328b234e0b48e16f2eb10",
    readingMinutes: 25,
    mathAssigned: false,
    mathCompleted: false
    },    

    {
    user: "5cc328b234e0b48e16f2eb11",
    readingMinutes: 15,
    mathAssigned: true,
    mathCompleted: false
    },       

    {
    user: "5cc328b234e0b48e16f2eb12",
    readingMinutes: 30,
    mathAssigned: true,
    mathCompleted: true
    },    

];

homeworkApi.createHomework(newHomework).then(newHomework => {
    console.log(newHomework);
})

let newActivities = [
    {
    user: "5cc317df7c3d328a98f572d5",
    sunday: "",
    monday: "Karate",
    tuesday: "Karate",
    wednesday: "Karate",
    thursday: "Karate",
    friday: "Karate",
    saturday: "Karate"
    },

    {
    user: "5cc328b234e0b48e16f2eb10",
    sunday: "",
    monday: "Baseball",
    tuesday: "Baseball",
    wednesday: "Baseball",
    thursday: "Baseball",
    friday: "Baseball",
    saturday: "Baseball"
    },   
    
    {
    user: "5cc328b234e0b48e16f2eb11",
    sunday: "",
    monday: "Football",
    tuesday: "Football",
    wednesday: "Football",
    thursday: "Football",
    friday: "Football",
    saturday: "Football"
    },   

    {
    user: "5cc328b234e0b48e16f2eb12",
    sunday: "",
    monday: "Soccer",
    tuesday: "Soccer",
    wednesday: "Soccer",
    thursday: "Soccer",
    friday: "Soccer",
    saturday: "Soccer"
    },   

]

activitiesApi.createActivities(newActivities).then(newActivities => {
    console.log(newActivities);
});

// userApi.getUserById("5cc317df7c3d328a98f572d5")
//     .then(userId => {
//         console.log(userId);
//     });