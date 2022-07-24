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
                <a href="/">
                    Become a Seller
                </a>
            </li>
            <li>
                <a href="/">
                    Sign In
                </a>
            </li>
            <li>
                <el-button type="success">Join</el-button>
            </li>
        </ul>
    </nav>
</template>

<script>
//TODO: add <router-link> with link-to='/explore'
//TODO: add <router-link> with link-to='/' for the logo
export default {
    name: 'app-nav',
}
</script>