require('dotenv').config()
const express = require('express')
const app = express()
const db = require('./db')

app.use(express.json())

//Get All Restaurants
app.get('/api/v1/restaurants', async (req, res) => {

    const results = await db.query('SELECT * FROM restaurants')
    
    res.status(200)
       .json({
           status: "Success",
           results: results.rows.length,
           data: {
               restaurants: results.rows 
           }
       }

    )
})

//Getting an individual restaurant
app.get('/api/v1/restaurants/:id', async (req, res) => {
    const { id } = req.params
    const results = await db.query('SELECT * FROM restaurants WHERE id = $1', [id])

    res.status(200).json({
        status: "Success",
        data: {
            restaurant: results.rows[0]
        }
    })
})

//Create a restaurant
app.post('/api/v1/restaurants', async (req, res) => {
    const {name, location, price_range} = req.body
    const results = await db.query('INSERT INTO restaurants(name, location, price_range) VALUES($1, $2, $3) RETURNING *', [name, location, price_range])
    res.status(201).json({
        status: "Success",
        data: {
            restaurant: results.rows[0]
        }
    })
})

// Update a restaurant

app.put('/api/v1/restaurants/:id', async (req, res) => {
    const {name, location, price_range} = req.body
    const {id} = req.params
    const results = await db.query('UPDATE restaurants SET name=$1, location=$2, price_range=$3 WHERE id = $4 RETURNING *', [name, location, price_range, id])
    res.status(200).json({
        status: "Success",
        data: {
            restaurant: results.rows[0]
        }
    })
})

//Delete a restaurant
app.delete('/api/v1/restaurants/:id', async (req, res) => {
    const {id} = req.params
    const results = await db.query("DELETE FROM restaurants WHERE id=$1", [id])
    res.status(204).json({
        status: "success"
    })
})

const PORT = process.env.PORT || 3000
app.listen(PORT,() => {
    console.log(`Connected on port ${PORT}`)
})