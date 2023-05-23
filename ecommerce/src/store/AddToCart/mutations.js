
import { ADD_TO_CART, INCREASE_COUNT, DECREASE_COUNT } from "./Constant"

export default {
    [ADD_TO_CART](state, payload) {
        const itemExistInCart = state.items.find((obj) => obj.id === payload.id)
        if (!itemExistInCart) {
            state.items = [...state.items, { ...payload, count: 1 }]
        }
    },
    [INCREASE_COUNT](state, payload) {
        const index = state.items.findIndex((obj) => obj.id === payload)
        if (index !== -1) {
            state.items[index] = { ...state.items[index], count: state.items[index].count += 1 }
        }
    },
    [DECREASE_COUNT](state, payload) {
        const index = state.items.findIndex((obj) => obj.id === payload)
        if (index !== -1) {
            state.items[index] = { ...state.items[index], count: state.items[index].count -= 1 }
        }
    },
}
