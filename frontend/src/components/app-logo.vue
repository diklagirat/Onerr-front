<template>
    <div class="app-logo">
        <a @click="moveToHomepage">Onerr<span>.</span></a>
    </div>
</template>

<script>

export default {
    name: 'app-logo',
    methods: {
        moveToHomepage() {
            this.$router.push('/')
        }
    }
}
</script>