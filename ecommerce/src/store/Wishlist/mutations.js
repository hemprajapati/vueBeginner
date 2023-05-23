
import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from "./Constant"

export default {
    [ADD_TO_WISHLIST](state, payload) {
        state.items = [...state.items, payload]
    },
    [REMOVE_FROM_WISHLIST](state, payload) {

        // console.log(payload)
        state.items = state.items.filter(item => item.id !== payload)
    },
}
