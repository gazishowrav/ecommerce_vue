<template>
    <!--slider-->
    <div class="slider">
        <div id="soberSlider" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#soberSlider" data-slide-to="0" class="active"></li>
                <li data-target="#soberSlider" data-slide-to="1"></li>
                <li data-target="#soberSlider" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item" v-for="(item, item_index) in slider" :key="item_index" :class="{ active: item_index==0 }">
                    <img :src="item.url" class="d-block w-100" alt="item.title">
                    <div class="carousel-caption d-none d-md-block">
                        <h5 class="carousel-title">{{item.title}}</h5>
                        <p class="carousel-subtitle">{{item.subtitle}}</p>
                        <p class="carousel-des">{{item.des}}, <span>{{item.btn}} </span></p>
                    </div>
                </div>
            </div>
            <a class="carousel-control-prev" href="#soberSlider" role="button" data-slide="prev">
                <span class="fas fa-long-arrow-alt-left" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#soberSlider" role="button" data-slide="next">
                <span class="fas fa-long-arrow-alt-right" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </div>
    <!--/slider-->
</template>

<script>
export default {
    data() {
        return {
            slider:[
                {
                    url: require('../../assets/img/slider/slider1.jpg'), 
                    title: 'New Aprivals',
                    subtitle: 'Upto 30% Flate',
                    des: 'On Every Women’s Clothing',
                    btn: 'Grab Offer Now',
                },
                {
                    url: require('../../assets/img/slider/slider2.jpg'), 
                    title: 'New Essentials',
                    subtitle: 'Upto 40% Flate',
                    des: 'On Every Women’s Clothing',
                    btn: 'Grab Offer Now',
                },
                {
                    url: require('../../assets/img/slider/slider3.jpg'), 
                    title: 'New Collection',
                    subtitle: 'Upto 40% Flate',
                    des: 'On Every Women’s Clothing',
                    btn: 'Grab Offer Now',
                }
            ]
        }
    }
}
</script>

<style>

</style>