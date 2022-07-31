<template>
    <div class="login-page">
        <div class="login-container">
            <div class="card">
                <h1>Sign In</h1>
                <form @submit.prevent="login" class="form-group flex  column center">
                    <input ref="username" class="form-input" v-model="cred.username" type="text" placeholder="Username"
                        required>
                    <input class="form-input" v-model="cred.password" type="text" placeholder="Password" required>
                    <button class="form-input submit-btn">Continue</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'login-page',
    data() {
        return {
            cred: {
                username: '',
                password: '',
            },
        }
    },
    methods: {
        async login() {
            await this.$store.dispatch({ type: 'login', cred: this.cred });
            this.$store.commit({ type: 'setIsLoading', isLoading: false })
            this.$router.push('/explore');
        },
        // async doLogin() {
        //     try {

        //         const users = this.$store.getters.users
        //         const loggdInUser = users.filter(user =>
        //             user.username === this.emailLogin
        //             && user.password === this.passwordLogin
        //         )
        //         this.$store.commit({ type: 'setLoggedinUser', user: loggdInUser })
        //         this.$stocommit({ type: 'setIsLoading', isLoading: false })
        //         // await this.$store.dispatch({ type: 'doLogin', loginUser: user })
        //     } catch (err) {
        //         console.log(err)
        //     }

        // }
        mounted() {
            this.$refs.username.focus();
        },
    }
}
</script>