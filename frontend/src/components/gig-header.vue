<template>
    <section class="gig-header">
        <div class="gig-header-container">
            <p> {{ gig.title }} </p>
<!-- TODO: add user-preview component -->
            <h1 style="background-color: yellow;"> Here come's user-preview component </h1> 
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