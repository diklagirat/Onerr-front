<template>
    <section class="gig-header">
        <div class="gig-header-container">
            <p> {{ gig.title }} </p>
            <p style="background-color: yellow;"> Here come's user-preview comonent </p>
        </div>
    </section>
</template>

<script>

export default {
    name: 'gig-header',
    props: {
        gig: Object,
    },
}

</script>