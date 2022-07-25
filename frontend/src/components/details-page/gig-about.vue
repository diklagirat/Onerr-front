<template>
    <section class="gig-about">
        <div class="about-gig-container">
            <h1> About This Gig </h1>
            <p>{{ gig.description }}</p>
        </div>
    </section>

</template>

<script>

export default {
    name: 'about-gig',
    props: {
        gig: Object,
    },
}
</script>