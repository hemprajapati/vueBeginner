import { ADD_TO_CART,REMOVE_FROM_CART,ADD_TO_CART_ASYNC, REMOVE_FROM_CART_ASYNC } from "./Constant"

export default {
    [ADD_TO_CART_ASYNC]({ commit }) {
        console.log("i will be herer")
        commit(ADD_TO_CART, 1)
    },
    [REMOVE_FROM_CART_ASYNC]({ commit }) {
        commit(REMOVE_FROM_CART)
    }
}
