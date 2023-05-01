

const express = require('express')
const app = express()
const cors = require('cors')
const chefDetails = require('./data/chefDetails.json')
const recipes = require('./data/recipes.json')
const port = 5000

app.use(cors())


app.get('/',(req,res)=>{
    res.send('this is main')

})



app.get('/chefDetails',(req,res)=>{
    res.send(chefDetails)

})


app.get('/recipes/:id',(req,res)=>{
    const id = parseInt(req.params.id)
    const filterRecipes = recipes.filter(rf => parseInt(rf.chef_id) === id)
    res.send(filterRecipes)
})



app.listen(port,()=>{

    console.log(`this port number is ${port}`)

})