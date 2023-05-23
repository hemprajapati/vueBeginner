// import { ADD_TO_CART, REMOVE_FROM_CART, ADD_TO_CART_ASYNC, REMOVE_FROM_CART_ASYNC } from "./Constant"
import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";
const state = {
    count: 0
}
export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}