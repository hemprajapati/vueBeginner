
import { LOAD_ALL_CATEGORIES, SET_CATEGORY_TYPE } from "./Constant"

export default {
    [LOAD_ALL_CATEGORIES](state, payload) {
        state.items = payload
    },
    [SET_CATEGORY_TYPE](state, payload) {
        state.currentCategory = payload
    },

}
