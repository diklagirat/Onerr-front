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
                <router-link to="/dashboard" class="clean-link">
                    <a>
                        Dashboard
                    </a>
                </router-link>
            </li>
            <li>
                <a href="/">
                    Sign In
                </a>
            </li>
            <li>
                <span v-if="loggedInUser">here{{ loggedInUser.fullname }}</span>
                <el-button v-else @click.prevent="login" type="success">Join</el-button>
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
                loggedInUser: null
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
                this.loggedInUser = this.$store.getters.getloggedinUser
                return this.$store.getters.getloggedinUser
            }
        },
        components: {
            login
        }
    }
    </script>