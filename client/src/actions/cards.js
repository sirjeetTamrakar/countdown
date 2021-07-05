import * as api from '../api'

export const getCards = () => async (dispatch) => {
    try {
        const { data } = await api.getCards()
        dispatch({ type:'GET', payload: data})
    }
    catch(error){
        console.log(error)
    }
}

export const createCard = (card) => async (dispatch) => {
    try {
        const { data } = await api.createCard(card)
        dispatch({ type:'CREATE', payload:data})
    }
    catch(error){
        console.log(error)
    }
}

export const editCard = (id, card) => async (dispatch) => {
    try {
        const { data } = await api.editCard(id, card)
        dispatch({ type:'EDIT', payload:data})
    }
    catch(error){
        console.log(error)
    }
}

export const deleteCard = (id) => async (dispatch) => {
    try {
        await api.deleteCard(id)
        dispatch({ type:'DELETE', payload:id})
    }
    catch(error){
        console.log(error)
    }
}