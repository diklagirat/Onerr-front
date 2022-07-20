import { createStore } from 'vuex'

const store = createStore({
    strict: true,
    state: {
        msg: 'working..',
    },
    getters: {
        msg({ msg }) { return msg },
    },
    mutations: {
        getMsg(state) {
            return state.msg
        },
        resetMsg(state) {
            state.msg = { txt: '', type: '' }
        }
    },
    modules: {
        //TODO: orderStore,
        //TODO: gigStore,
        //TODO: userStore,
    },
})

export default store