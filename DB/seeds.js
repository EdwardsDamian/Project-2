const userApi = require('../api/userApi')

// let newUser = [
//     {
//         name: "Analise",
//         age: 9,
//         grade: "3rd"
//     },

//     {
//         name: "Bill",
//         age: 8,
//         grade: "3rd"
//     },    

//     {
//         name: "Chloe",
//         age: 9,
//         grade: "3rd"
//     },

//     {
//         name: "Dominic",
//         age: 8,
//         grade: "3rd"
//     }
// ]

userApi.createUser({
            name: "Analise",
            age: 9,
            grade: "3rd"
        }).then(newUser => {
    console.log(newUser);
});