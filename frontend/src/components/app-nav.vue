<template>
    <nav class="main-nav">
        <ul class="main-container clean-list">
            <li>
                <router-link to="/explore" class="clean-link">
                    <a>
                        Explore
                    </a>
                </router-link>
            </li>
            <li>
                <a>
                    <router-link v-if="loggedInUser" to="/dashboard" class="clean-link">
                        Dashboard
                    </router-link>
                    <a v-else class="clean-link">
                        Become a Seller
                    </a>
                </a>
            </li>
            <li>
                <a v-if="!loggedInUser" href="/">
                    Sign In
                </a>
            </li>
            <li>
                <img v-if="loggedInUser" class="login-user-img" :src="loggedInUser.imgUrl" />
                <el-button v-else @click.prevent="login" type="success">Join</el-button>
                <!-- <div v-else class="user-image flex center align-center"
                    :style="{ 'background-image': `${loggedInUser.imgUrl}` }">D</div> -->
            </li>
        </ul>
    </nav>
</template>
    <script>
    //TODO: add <router-link> with link-to='/explore'
    //TODO: add <router-link> with link-to='/' for the logo
    import login from './login.vue'
    export default {
        name: 'app-nav',
        data() {
            return {
            }
        },
        created() {
        },
        methods: {
            login() {
                this.$store.commit({ type: 'setIsLoading', isLoading: true })
            }
        },
        computed: {
            loggedInUser() {
                // this.loginUser = this.$store.getters.getloggedinUser
                // // console.log('loggedInUser',loggedInUser)
                // return this.loginUser
                return this.$store.getters.getUser
            }
        },
        components: {
            login
        }
    }
    </script>