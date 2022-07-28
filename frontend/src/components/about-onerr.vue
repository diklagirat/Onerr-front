<template>
    <section class="about-onerr-container">
        <div class="about-onerr main-layout flex">
            <div class="text-video-container flex align-center main-layout">
                <article class="text-container flex column center">
                    <h1>A whole world of freelance talent at your fingertips</h1>
                    <ul class="clean-list">
                        <li>
                            <h6 class="flex align-start">
                                <span>
                                    <vIcon />
                                </span>The best for every budget
                            </h6>
                            <p>Find high-quality services at every price point. No hourly rates, just project-based
                                pricing.
                            </p>
                        </li>
                        <li>
                            <h6>
                                <span>
                                    <vIcon />
                                </span>Quality work done quickly
                            </h6>
                            <p>Find the right freelancer to begin working on your project within minutes.
                            </p>
                        </li>
                        <li>
                            <h6>
                                <span>
                                    <vIcon />
                                </span>Protected payments, every time
                            </h6>
                            <p>Always know what you'll pay upfront. Your payment isn't released until you approve the
                                work.
                            </p>
                        </li>
                        <li>
                            <h6>
                                <span>
                                    <vIcon />
                                </span>24/7 support
                            </h6>
                            <p>Questions? Our round-the-clock support team is available to help anytime, anywhere.
                            </p>
                        </li>
                    </ul>
                </article>
                <div class="video-container">
                    <about-video />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import aboutVideo from './video/about-video.vue'
import vIcon from './icons/v-icon.vue'

export default {
    name: 'about',
    components: {
        aboutVideo,
        vIcon
    }

}
</script>
