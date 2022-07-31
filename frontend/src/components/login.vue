<template>
    <div class="login-page">
        <div class="login-container">
            <div class="card">
                <h1>Sign In</h1>
                <form class="form-group flex  column center">
                    <input class="form-input" v-model="emailLogin" type="email" placeholder="Email / Username" required>
                    <input class="form-input" v-model="passwordLogin" type="text" placeholder="Password" required>
                    <button class="form-input submit-btn" type="submit" @click.prevent="doLogin">Continue</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            emailLogin: '',
            passwordLogin: ''
        }
    },
    methods: {
        async doLogin() {
            try {
                // const user = {
                //     email: this.emailLogin,
                //     password: this.passwordLogin
                // }
                const users = this.$store.getters.users
                const loggdInUser = users.filter(user =>
                    user.username === this.emailLogin
                    && user.password === this.passwordLogin
                )
                this.$store.commit({ type: 'setLoggedinUser', user: loggdInUser })
                this.$store.commit({ type: 'setIsLoading', isLoading: false })
                // await this.$store.dispatch({ type: 'doLogin', loginUser: user })
            } catch (err) {
                console.log(err)
            }

        }
    }
}
</script>