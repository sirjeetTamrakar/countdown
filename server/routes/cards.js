const express = require ('express')
const {getCards, createCard, editCard, deleteCard} = require('../controllers/cards')
const router = express.Router()

router.get('/', getCards)
router.post('/', createCard)
router.patch('/:id', editCard)
router.delete('/:id', deleteCard)

module.exports = router