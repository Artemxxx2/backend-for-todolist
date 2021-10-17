const express = require('express')
const mongoose = require('mongoose')
const mongooseSchema = require('./mongooseSchema')
const app = express()

const route = require('./NotationRouter.js')
mongoose.connect('mongodb://localhost:27017/notation');
app.use(express.json())
app.use('/notation/', route)
app.listen(3001)