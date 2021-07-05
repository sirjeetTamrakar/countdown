const cardModel = require('../models/cardModel')
const mongoose = require('mongoose')

exports.getCards = async(req, res) => {
    try{
        const cards = await cardModel.find()
        res.status(200).json(cards)
    }
    catch(error){
        console.log(error)
    }
}

exports.createCard = async(req, res) => {
    const card = req.body
    const newCard = new cardModel(card)
    try{
        await newCard.save()
        res.status(200).json(newCard)
    }
    catch(error){
        console.log(error)
    }
}

exports.editCard = async(req, res) => {
    const {id: _id} = req.params
    const card = req.body
    if(!mongoose.Types.ObjectId.isValid(_id))
        res.status(404).send('ID not found!')
    try{
        const updatedCard = await cardModel.findByIdAndUpdate(_id, card, {new:true})
        res.json(updatedCard)
    }
    catch(error){
        console.log(error)
}
}

exports.deleteCard = async(req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id))
        res.status(404).send('ID not found!')
    await cardModel.findByIdAndDelete(id)
    res.json({message:'Card Deleted!'})
}