<template>
    <secction class="popular-categories-list main-layout">
        <div class="popular-categories-list-container main-layout">
            <h1>Popular professional services </h1>
            <div>
                <vueper-slides class="no-shadow flex" :visible-slides="3" slide-multiple :gap="3" :slide-ratio="1 / 4"
                    :dragging-distance="200" :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }">
                    <vueper-slide v-for="(slide, i) in slides" :key="i" :title="slide.title" :content="slide.content">
                        <div class="popular-categories-preview-container">
                            <div stlye="{background-color: #red}"></div>
                            <img src={{slide.imgUrl}}>
                        </div>
                    </vueper-slide>
                </vueper-slides>
            </div>
        </div>
    </secction>
</template>

<script>

export default {
    name: 'popular-categories-list',
    data() {
        return {
            slides: [
                {
                    title: 'Logo Design',
                    content: 'Build your brand',
                    imgUrl: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/logo-design-2x.png'
                },
                {
                    title: 'Slide #2',
                    content: 'Slide 2 content.'
                }
            ]
        }
    }

}
</script>