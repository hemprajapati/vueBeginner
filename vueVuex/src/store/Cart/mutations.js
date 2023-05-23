
import { ADD_TO_CART, REMOVE_FROM_CART } from "./Constant"

export default {
    [ADD_TO_CART](state, payload) {
        state.count += payload;
        console.log(state.count)
    },
    [REMOVE_FROM_CART](state) {
        if (state.count > 0)
            state.count -= state.payload;
    }
}
