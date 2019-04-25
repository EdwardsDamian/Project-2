const express = require('express')
const app = express()
const methodOverride = require('method-override')

app.get('/', (req, res) => {
    res.send("hello world")
})

//Include middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'))

app.use(express.static(__dirname + '/public'))

app.set('view engine', 'hbs')


const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`)
})