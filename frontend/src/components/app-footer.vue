<template>
    <section class="app-footer main-layout">
        <footer class="main-footer ">
            <div class="footer-left flex">
                <app-logo :isFooter="true" />
                <div class="copy-right">
                    <p>
                        © Onerr International Ltd. 2022
                    </p>
                </div>
            </div>
            <div class="footer-right flex">
                <ul class="footer-social clean-list flex space-between align-center">
                    <li>
                        <twitter-icon />
                    </li>
                    <li>
                        <facebook-icon />
                    </li>
                    <li>
                        <linkedin-icon />
                    </li>
                    <li>
                        <pinterest-icon />
                    </li>
                    <li>
                        <instagram-icon />
                    </li>
                </ul>
            </div>
        </footer>
    </section>
</template>

<script>
import appLogo from "./app-logo.vue"
import twitterIcon from "./icons/twitter-icon.vue"
import facebookIcon from "./icons/facebook-icon.vue"
import linkedinIcon from "./icons/linkedin-icon.vue"
import pinterestIcon from "./icons/pinterest-icon.vue"
import instagramIcon from "./icons/instagram-icon.vue"

export default {
    name: 'footer-header',
    components: {
        appLogo,
        twitterIcon,
        facebookIcon,
        linkedinIcon,
        pinterestIcon,
        instagramIcon,
    }
}

</script>
