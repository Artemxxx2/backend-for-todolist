const mongoose = require('mongoose')
let notationSchema = new mongoose.Schema({
    title:{
        type:String,
        unique:true
    },
    wisdomthoughts:{
        type:String
    },
    date:{
        type:Date,
        default:Date.now()
    }
})
module.exports =  mongoose.model('notation', notationSchema)