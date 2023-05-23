import { ADD_TO_WISHLIST,REMOVE_FROM_WISHLIST } from "./Constant"
import axios from 'axios'

export default {
    [ADD_TO_WISHLIST]({ commit }, payload) {
        commit(ADD_TO_WISHLIST, payload)
    },
    [REMOVE_FROM_WISHLIST]({ commit }, payload) {
        commit(REMOVE_FROM_WISHLIST, payload)
    },

}
// data.value = [...data.value, ...response.data.products])