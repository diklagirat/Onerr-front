import { userService } from "../../services/user-service"

export const userStore = {
    strict: true,
    state: {
        users: []
    },
    getters: {
        users({ users }) {
            return users
        },
    },
    mutations: {
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
    }
}
