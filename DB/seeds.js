const userApi = require('../api/userApi')

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
]

userApi.createUser(newUser).then(newUser => {
    console.log(newUser);
});

// userApi.getUserById("5cc317df7c3d328a98f572d5")
//     .then(userId => {
//         console.log(userId);
//     });