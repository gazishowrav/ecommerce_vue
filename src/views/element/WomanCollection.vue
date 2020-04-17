<template>
    <!--woman collection-->
    <div class="woman-collection pt-5">
        <div class="container-wrapper">
            <h1 class="title text-center">Woman Collections</h1>
            <div class="grid-box">
                <a href="#" class="grid-item tall">
                    <img :src="woman1" alt="">
                    <span class="banner-content">
                        <span class="banner-text">New<br> Arrivals</span>
                        <span class="banner-button">Explore Now</span>
                    </span>
                </a>
                <div class="grid-item medium">
                    <img :src="woman2" alt="">
                    <span class="banner-content"> 
                        <span class="banner-text">Short & Pants</span> 
                        <span class="banner-button">Shop Now</span> 
                    </span>
                </div>
                <div class="grid-item medium">
                    <img :src="woman3" alt="">
                    <span class="banner-content"> 
                        <span class="banner-text">Accessories</span> 
                        <span class="banner-button">Shop Now</span> 
                    </span>
                </div>
                <div class="grid-item small">
                    <div class="grid-box-small">
                        <div class="grid-item-small">
                            <img :src="woman4" alt="">
                            <span class="banner-content"> 
                                <span class="banner-text">Skirts</span> 
                                <span class="banner-button">Shop Now</span> 
                            </span>
                        </div>
                        <div class="grid-item-small">
                            <img :src="woman5" alt="">
                            <span class="banner-content"> 
                                <span class="banner-text">Bags</span> 
                                <span class="banner-button">Shop Now</span> 
                            </span>
                        </div>
                        <div class="grid-item-small">
                            <img :src="woman6" alt="">
                            <span class="banner-content"> 
                                <span class="banner-text">Shoes</span> 
                                <span class="banner-button">Shop Now</span> 
                            </span>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    <!--/woman collection-->
</template>

<script>
export default {
    data() {
        return {
        	woman1: require('../assets/img/woman-collection/W1-640x800.jpg'),
        	woman2: require('../assets/img/woman-collection/W2-640x395.jpg'),
        	woman3: require('../assets/img/woman-collection/W3-640x395.jpg'),
            woman4: require('../assets/img/woman-collection/W4-426x398.jpg'),
            woman5: require('../assets/img/woman-collection/W5-426x398.jpg'),
            woman6: require('../assets/img/woman-collection/W6-426x398.jpg')
        }
    }
}
</script>

<style>

</style>