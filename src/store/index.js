import { createStore } from "vuex";
import createPersistedState from "vuex-plugin-persistedstate";

const store = createStore({
    state: {
        userId: null,
        Subtotal: null,
        OrderDetailId: null
    },
    mutations: {
        setUserId(state, userId) {
            state.userId = userId;
        },
        setSubtotal(state, Subtotal) {
            state.Subtotal = Subtotal;
        },
        setOrderDetailId(state,OrderDetailId){
            state.OrderDetailId = OrderDetailId;
        }
    },
    getters: {
        getUserId: state => state.userId,
        getSubtotal: state => state.Subtotal,
        getOrderDetailId: state => state.OrderDetailId
    },
    plugins: [createPersistedState({})],
})

export default store