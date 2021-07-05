import axios from 'axios'

// const url = "http://localhost:300/cards"
const url = "https://countdowntimer7.herokuapp.com/cards"

export const getCards = () => axios.get(url)
export const createCard = (card) => axios.post(url, card)
export const editCard = (id, updatedCard) => axios.patch(`${url}/${id}`, updatedCard)
export const deleteCard = (id) => axios.delete(`${url}/${id}`)