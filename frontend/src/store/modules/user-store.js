import { userService } from "../../services/user-service"

export const userStore = {
    strict: true,
    state: {
        users: [],
        loggedinUser: null
    },
    getters: {
        getloggedinUser({ loggedinUser }) {
            return state.loggedinUser
        },
        users({ users }) {
            return users
        },
    },
    mutations: {
        setLoggedinUser({ user }) {
            state.loggedinUser = user
        },
        setUsers(state, { users }) {
            state.users = users
        }
    },
    actions: {
        async loadUsers({ commit, state }) {
            try {
                const users = await userService.getUsers().then(users => users)
                commit({ type: 'setUsers', users })
            } catch (err) {
                console.log('usersStore: Error in loadUsers', err)
                throw err
            }
        },
        async doLogin({ commit, state }) {
            try {
                const users = await userService.getUsers().then(users => users)
                commit({ type: 'setLoggedinUser', user })
            } catch (err) {
                console.log('usersStore: Error in doLogin', err)
                throw err
            }
        }
    }
}
