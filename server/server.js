require('dotenv').config()
const express = require('express')
const app = express()

app.use(express.json())

//Get All Restaurants
app.get('/api/v1/restaurants', (req, res) => {
    res.status(200)
       .json({
           status: "Success",
           data: {
               restaurant: ['McDonalds', 'Wendys']
           }
       }

    )
})

//Getting an individual restaurant
app.get('/api/v1/restaurants/:id', (req, res) => {
    res.status(200).json({
        status: "Success",
        data: {
            restaurant: {name: 'McDonalds', city: 'Denver'}
        }
    })
})

//Create a restaurant
app.post('/api/v1/restaurants', (req, res) => {
    res.status(201).json({
        status: "Success",
        data: {
            restaurant: {name: 'McDonalds', city: 'Denver'}
        }
    })
})

// Update a restaurant

app.put('/api/v1/restaurants/:id', (req, res) => {
    res.status(200).json({
        status: "Success",
        data: {
            restaurant: {name: 'McDonalds', city: 'Denver'}
        }
    })
})

//Delete a restaurant
app.delete('/api/v1/restaurants/:id', (req, res) => {
    console.log(req.params.id)
})

const PORT = process.env.PORT || 3000
app.listen(PORT,() => {
    console.log(`Connected on port ${PORT}`)
})