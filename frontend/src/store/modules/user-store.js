import { userService } from "../../services/user-service"

export const userStore = {
    strict: true,
    state: {
        loggedinUser: null,
        isLoading: false,
        users: []
    },
    getters: {
        getUser({ loggedinUser }) {
            return loggedinUser
        },
        getIsLoading({ isLoading }) {
            return isLoading
        },
        users({ users }) {
            return users
        },
    },
    mutations: {
        setUser(state, { user }) {
            state.loggedinUser = user
            console.log('state.loggedinUser',)
        },
        setIsLoading(state, { isLoading }) {
            state.isLoading = isLoading

        },
        setUsers(state, { users }) {
            state.users = users
        }
    },
    actions: {
        async login({ commit }, { cred }) {
            try {
                const user = await userService.login(cred)
                commit({ type: 'setUser', user })
            } catch (err) {
                console.log(err);
            }
        },
        async loadUsers({ commit, state }) {
            try {
                const users = await userService.getUsers()
                commit({ type: 'setUsers', users })
            } catch (err) {
                console.log('usersStore: Error in loadUsers', err)
                throw err
            }
        },
         async getUserById(commit, {userId }) {
            try {
                return await userService.getUserById(userId)
            } catch (err) {
                 console.log(err)
            }     
    },
    }
}
