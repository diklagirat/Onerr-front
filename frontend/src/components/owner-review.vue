<template>
    <section class="owner-review">
        <div class="owner-review-container">
            <h1>Owner review component</h1>
            <p>{{ gig.owner.fullname }}</p>
        </div>
    </section>
</template>

<script>

export default {
    name: 'owner-review',
    props: {
        gig: Object,
    },
}

</script>