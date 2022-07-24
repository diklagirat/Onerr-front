<template>
    <div class="app-logo">
        <router-link to="/" class="clean-link">
            <div :class="{ 'footer-logo': isFooter }">
                <a>Onerr<span>.</span></a>
            </div>
        </router-link>
    </div>
</template>

<script>
import headerLogoDotIcon from './icons/header-logo-dot-icon.vue'
import footerLogoDotIcon from './icons/footer-logo-dot-icon.vue'

export default {
    name: 'app-logo',
    props: {
        isFooter: Boolean
    },
    component: {
        headerLogoDotIcon,
        footerLogoDotIcon
    },
    created() {
        console.log('isFooter', this.isFooter)
    }
}
</script>