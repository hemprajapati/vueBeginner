import { ADD_TO_CART, INCREASE_COUNT, DECREASE_COUNT } from "./Constant"

export default {
    [ADD_TO_CART]({ commit }, payload) {
        commit(ADD_TO_CART, payload)
    },
    [INCREASE_COUNT]({ commit }, payload) {
        commit(INCREASE_COUNT, payload)
    },
    [DECREASE_COUNT]({ commit }, payload) {
        commit(DECREASE_COUNT, payload)
    },
}