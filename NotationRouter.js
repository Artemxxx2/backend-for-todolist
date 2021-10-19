const express = require('express');
const route = express.Router()
const mongoose = require('mongoose')
const mongooseSchema = require('./mongooseSchema')
route.get('/', async (req,res)=>{
   try{
    const data = await mongooseSchema.find().sort({date:-1})
    res.send(data)
   }
   catch(err){
    res.send(err)
   }
})
route.post('/', async (req,res)=>{
    try {
        const note = new mongooseSchema({
            title:req.body.title,
            wisdomthoughts:req.body.wisdomthoughts,
        } 
        )
        const savedNote = await note.save()
        res.end()
    } catch (error) {
        res.send(error)
    }
})
route.delete('/',async (req,res)=>{
    try{
        let requestBody = String(req.body._id)
        const data = await mongooseSchema.find({_id:requestBody})
        const answer =  await mongooseSchema.deleteOne({data})
        res.send()
       }
       catch(err){
        res.send(err)
       }
})
route.put('/', async (req,res)=>{
    try{
        const elementforchange = await mongooseSchema.updateOne({_id:req.body._id},{
            $set:{
                "title": req.body.title,
                "wisdomthoughts": req.body.wisdomthoughts
            }
        })
        res.send()
       }
       catch(err){
        res.send(err)
       }
})
module.exports = route