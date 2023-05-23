import { Load_Data, Load_Data_ASYNC, Load_Filter_ASYNC, Load_Filter, Clear_Data } from "./Constant"
import axios from 'axios'

export default {
    [Load_Data_ASYNC]({ commit }, { limit, skip }) {
        axios.get(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
            .then((response) => commit(Load_Data, response.data.products))
            .catch((e) => console.log(e))
    },
    [Load_Filter_ASYNC]({ commit }, { category, limit, skip }) {
        axios.get(`https://dummyjson.com/products/category/${category}?limit=${limit}&skip=${skip}`)
            .then((response) => commit(Load_Filter, response.data.products))
            .catch((e) => console.log(e))
    },
    [Clear_Data]({ commit }) {
        commit(Clear_Data)
    },
    // [REMOVE_FROM_CART_ASYNC]({ commit }) {
    //     commit(REMOVE_FROM_CART)
    // }
}
// data.value = [...data.value, ...response.data.products])