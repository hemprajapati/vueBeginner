import { createStore } from "vuex";
import Cart from "./Cart"
const store = createStore({
    modules: {
        Cart,   
    }
})
export default store;