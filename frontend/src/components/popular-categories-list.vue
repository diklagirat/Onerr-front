<template>
    <secction class="popular-categories-list main-layout">
        <div class="popular-categories-list-container">
            <h1>Popular professional services </h1>
            <ul>
                <li v-for="gigCategory in gigsCategories" :key="gigCategory">
                    <!-- <p :gigCategory="gigCategory"> -->
                    {{ gigsCategories }}
                    <!-- </p> -->
                </li>
            </ul>
        </div>
    </secction>
</template>

<script>

export default {
    name: 'popular-categories-list',
    props: {
        props: {
            gigsCategories: Array,
        },
    }

}
</script>