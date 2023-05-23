
import { Load_Data, Load_Filter, Clear_Data } from "./Constant"

export default {
    [Load_Data](state, payload) {
        state.items = [...state.items, ...payload]
    },
    [Load_Filter](state, payload) {
        state.items = [...state.items, ...payload]
    },
    [Clear_Data](state,) {
        state.items = []
    },

}
