import { orderService } from "../../services/order-service.js"

export const orderStore = {
    strict: true,
    state: {
        orders: [],
        currUser: null,
    },
    getters: {
        ordersByUser({orders,currUser }){
            console.log('currUser',currUser)
            if(currUser.isSeller === true){
                console.log('currUser.isSeller',currUser)
                return orders.filter(o => o.seller._id === currUser._id)
            }
             return orders.filter(o => o.buyer._id === currUser._id)

        },
        ordersToDisplay({ orders }) {
            return orders
        }
    },
    mutations: {
        setCurrUser(state, {currUser}){
            state.currUser=currUser
            console.log('state.currUser',state.currUser)
        },
        setOrders(state, { orders }) {
            state.orders = orders
            console.log('setOrder',state.orders)
        },
        updateOrder(state, { order }) {
            const idx = state.orders.findIndex((o) => o._id === order._id)
            state.orders.splice(idx, 1, order)
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
        async saveOrder({ commit }, { orderToEdit }) {
            try {
                console.log('orderToEdit saveOrder:', orderToEdit)
                const savedOrder = await orderService.save(orderToEdit)
                commit({ type: 'updateOrder', order: orderToEdit })
            } catch (err) {
                throw err
            }
        },

    }
}