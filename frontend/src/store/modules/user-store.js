import { userService } from "../../services/user-service"

export const userStore = {
    strict: true,
    state: {
        users: [],
        loggedInUser: null,
        isLoading: false
    },
    getters: {
        getIsLoading({ isLoading }) {
            return isLoading
        },
        getloggedinUser({ loggedInUser }) {
            return loggedInUser
        },
        users({ users }) {
            return users
        },
    },
    mutations: {
        setIsLoading(state, { isLoading }) {
            state.isLoading = isLoading
            console.log('state.isLoading', state.isLoading)

        },
        setLoggedinUser(state, { user }) {

            state.loggedInUser = { ...user }
        },
        setUsers(state, { users }) {
            state.users = users
        }
    },
    actions: {
        async loadUsers({ commit, state }) {
            try {
                const users = await userService.getUsers()
                commit({ type: 'setUsers', users })
            } catch (err) {
                console.log('usersStore: Error in loadUsers', err)
                throw err
            }
        },
        async doLogin({ commit, state }, { loginUser }) {
            try {
                const users = await userService.getUsers()
                const loggedInUser = users.filter(user => user.username === loginUser.email
                    && user.password === loginUser.password)
                console.log('loggedInUser::', loggedInUser)
                commit({ type: 'setIsLoading', isLoading: false })
                commit({ type: 'setLoggedinUser', user: loggedInUser[0] })
            } catch (err) {
                console.log('usersStore: Error in doLogin', err)
                throw err
            }
        }
    }
}
