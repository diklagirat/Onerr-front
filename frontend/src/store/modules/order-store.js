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
        updateOrder(state, { order }) {
            const idx = state.orders.findIndex((o) => o._id === order._id)
            state.orders.splice(idx, 1, order)
        }
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
        async saveOrder({ commit }, { orderToEdit }) {
            try {
                const savedOrder = await orderService.save(orderToEdit)
                console.log('updateOrder-->', savedOrder)
                commit({ type: 'updateOrder', order: orderToEdit })
            } catch (err) {
                throw err
            }
        },
    }
}