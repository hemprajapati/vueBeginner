import axios from "axios"
import { LOAD_ALL_CATEGORIES, LOAD_ALL_CATEGORIES_ASYNC, SET_CATEGORY_TYPE } from "./Constant"
export default {
    [LOAD_ALL_CATEGORIES_ASYNC]({ commit }, payload) {
        axios.get("https://dummyjson.com/products/categories").then(response => commit(LOAD_ALL_CATEGORIES, response.data))
    },
    [SET_CATEGORY_TYPE]({ commit }, payload) {
        commit(SET_CATEGORY_TYPE, payload)
    },
}