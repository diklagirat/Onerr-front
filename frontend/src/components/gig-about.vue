<template>
    <section class="about-gig">
        <div class="about-gig-container">
            <p> About This Gig </p>
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