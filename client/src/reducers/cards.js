// eslint-disable-next-line
export default (cards = [], action) => {
    switch (action.type) {
        case 'GET':
            return action.payload
        case 'CREATE':
            return [...cards, action.payload]
        case 'EDIT':
            return cards.map((card) => card._id === action.payload._id ? action.payload : card)
        case 'DELETE':
            return cards.filter((card) => card._id !== action.payload)
        default:
            return cards
    }
}