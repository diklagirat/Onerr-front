import { userService } from "../../services/user-service"

export const userStore = {
    strict: true,
    state: {
        loggedinUser: null,
        isLoading: false,

        // users: [

        //     {
        //         _id: "e999999",
        //         fullname: "Dikla Girat-buyer",
        //         imgUrl: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/d06d3197ca9b9f010e75540d2a0bf264-1626300570975/fa60b74e-0d30-49d6-9485-0285ba2315bd.jpg",
        //         isSeller: false,
        //         username: "dikla@gmail.com",
        //         password: "1234",
        //         level: "basic/premium",
        //         rate: 4,
        //         state: "USA",
        //         created: "Feb 2021",
        //         responseTime: "1 hour",
        //         LastDelivery: "2Days",
        //         description: "I hold masters degree in engineering . I am a professional graphic designer and have designed many creative websites. So if you want a creative and professional website for your business, you are at the right place. Apart from web designing i offer different services like designing infographics, Photoshop, writing articles and blog posts. I always prefer customer's satisfaction.",
        //         reviews: []
        //     },
        //     {

        //         _id: "s9999",
        //         fullname: "Dikla -seller",
        //         imgUrl: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/d06d3197ca9b9f010e75540d2a0bf264-1626300570975/fa60b74e-0d30-49d6-9485-0285ba2315bd.jpg",
        //         isSeller: true,
        //         username: "diklas@gmail.com",
        //         password: "1234",
        //         level: "Top Seller Rated",
        //         rate: 4,
        //         state: "USA",
        //         created: "Feb 2021",
        //         responseTime: "1 hour",
        //         LastDelivery: "2Days",
        //         description: "I hold masters degree in engineering . I am a professional graphic designer and have designed many creative websites. So if you want a creative and professional website for your business, you are at the right place. Apart from web designing i offer different services like designing infographics, Photoshop, writing articles and blog posts. I always prefer customer's satisfaction.",
        //         reviews: []
        //     }

        // ],
        // loggedInUser: null,
    },
    getters: {
        getUser({ loggedinUser }) {
            return loggedinUser
        },
        getIsLoading({ isLoading }) {
            return isLoading
        },
        // getloggedinUser({ loggedInUser }) {
        //     return loggedInUser
        // },
        // users({ users }) {
        //     return users
        // },
    },
    mutations: {
        setUser(state, { user }) {
            state.loggedinUser = user
            console.log('setUser-store', state.loggedinUser)

        },
        setIsLoading(state, { isLoading }) {
            state.isLoading = isLoading
            console.log('state.isLoading', state.isLoading)

        },
        // setLoggedinUser(state, { user }) {
        //     // state.loggedInUser = { ...user }
        //     state.loggedInUser = { ...user }
        //     console.log(state.loggedInUser)
        // },
        // setUsers(state, { users }) {
        //     state.users = users
        // }
    },
    actions: {
        async login({ commit }, { cred }) {
            try {
                const user = await userService.login(cred)
                console.log('login-store', user)
                commit({ type: 'setUser', user })
            } catch (err) {
                console.log(err);
            }
        },
        // async loadUsers({ commit, state }) {
        //     try {
        //         const users = await userService.getUsers()
        //         commit({ type: 'setUsers', users })
        //     } catch (err) {
        //         console.log('usersStore: Error in loadUsers', err)
        //         throw err
        //     }
        // },
        // async doLogin({ commit, state }, { loginUser }) {
        //     try {
        //         const users = await userService.getUsers()
        //         const loggedInUser = users.filter(user => user.username === loginUser.email
        //             && user.password === loginUser.password)
        //         console.log('loggedInUser::', loggedInUser)
        //         commit({ type: 'setIsLoading', isLoading: false })
        //         commit({ type: 'setLoggedinUser', user: loggedInUser[0] })
        //     } catch (err) {
        //         console.log('usersStore: Error in doLogin', err)
        //         throw err
        //     }
        // }
    }
}
