import { createStore } from "vuex";
import Products from "./Products"
import Wishlist from "./Wishlist"
import AddToCart from "./AddToCart"
import Categories from "./Categories"

const store = createStore({
    modules: {
        Products,
        Wishlist,
        AddToCart,
        Categories
    }
})
export default store;