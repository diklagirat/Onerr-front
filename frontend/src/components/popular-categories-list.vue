<template>
    <section class="popular-categories-list main-layout">
        <div class="popular-categories-list-container main-layout">
            <h1>Popular professional services </h1>
            <div class="flex column">
                <vueper-slides class="no-shadow" :visible-slides="5" slide-multiple :gap="3.660714" :slide-ratio="1 / 4"
                    :dragging-distance="200" :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }">
                    <vueper-slide class="popular-categories-image" v-for="slide in slides" :key="slide" :content="slide.content" :title="slide.title"
                        :image="slide.image" />
                </vueper-slides>
            </div>
        </div>
    </section>
</template>

<script>

import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
    name: 'popular-categories-list',
    data() {
        return {
            slides: [
                {
                    title: 'Logo Design',
                    content: 'Build your brand',
                    image: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/logo-design-2x.png'
                },
                {
                    title: 'WordPress',
                    content: 'Customize your site',
                    image: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/ae11e2d45410b0eded7fba0e46b09dbd-1598561917003/wordpress-2x.png'
                },
                {
                    title: 'Voice Over',
                    content: 'Share your message',
                    image: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741669/voiceover-2x.png'
                },
                {
                    title: 'Video Explainer',
                    content: 'Engage your audience',
                    image: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741663/animated-explainer-2x.png'
                },
                {
                    title: 'Social Media',
                    content: 'Reach more customers',
                    image: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741667/social-2x.png'
                },
                {
                    title: 'SEO',
                    content: 'Unlock growth online',
                    image: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741668/seo-2x.png'
                },
                {
                    title: 'Illustration',
                    content: 'Color your dreams',
                    image: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/illustration-2x.png'
                },
                {
                    title: 'Translation',
                    content: 'Go global',
                    image: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741674/translation-2x.png'
                },
                {
                    title: 'Data Entry',
                    content: 'Learn your business',
                    image: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/data-entry-2x.png'
                },
                {
                    title: 'Book Covers',
                    content: 'Showcase your story',
                    image: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/book-covers-2x.png'
                }

            ]
        }
    },
    components: {
        VueperSlides,
        VueperSlide
    },

}
</script>