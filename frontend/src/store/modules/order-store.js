import { orderService } from "../../services/order-service.js"

export const orderStore = {
    strict: true,
    state: {
        orders: [],
    },
    getters: {
        ordersToDisplay({ orders }) {
            return orders
        }
    },
    mutations: {
        setOrders(state, { orders }) {
            state.orders = orders
        },
    },
    actions: {
        async loadOrders({ commit, state }) {
            try {
                const orders = await orderService.query()
                commit({ type: 'setOrders', orders })
            } catch (err) {
                throw err
            }
        },
    }
}