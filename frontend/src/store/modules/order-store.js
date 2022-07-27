
export const orderStore = {
    strict: true,
    state: {
        orders: []
    },
    getters: {
        orders({orders}) { return orders },

    },
    mutations: {
        setOrders(state, { orders }) {
            state.orders = orders
        },
        addOrder(state, { order }) {
            state.orders.push(order)
            console.log('state.orders',state.orders)
        },
    },
    actions: {
        async addOrder(context, { order }) {
            try {
                // order = await orderService.add(order)
                context.commit({ type: 'addOrder', order })
                return order
            } catch (err) {
                console.log('orderStore: Error in addOrder', err)
                throw err
            }
        },
        async loadOrders(context) {
            try {
                // const orders = await orderService.query()
                context.commit({ type: 'setOrders', orders })
            } catch (err) {
                console.log('orderStore: Error in loadderss', err)
                throw err
            }
        },
    }
}