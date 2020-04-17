<template>
    <!--header-->
    <header class="header fixed-top">
        <div class="container-wrapper">
            <!--web view-->
            <div class="web-view">
                <div class="row align-items-center">
                    <div class="header-content col-xs-6 col-sm-6 col-md-6 col-lg-10">
                        <div class="row align-items-center">
                            <div class="logo col-xs-3 col-sm-3 col-md-3 col-lg-2">
                                <img class="logo-light" :src="logoLight" alt="">
                                <img class="logo-black" :src="logo" alt="">
                            </div>
                            <div class="col-lg-8">
                                <ul class="nav justify-content-end primary-menu">
                                    <li class="nav-item"><a href="#" class="nav-link">Home</a></li>
                                    <li class="nav-item"><a href="products.html" class="nav-link">Shop</a></li>
                                    <li class="nav-item"><a href="products.html" class="nav-link">Future</a></li>
                                    <li class="nav-item"><a href="#" class="nav-link">Pages</a></li>
                                    <li class="nav-item"><a href="#" class="nav-link">Blog</a></li>
                                    <li class="nav-item"><a href="#" class="nav-link">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="header-icon header-icon-right text-right col-xs-3 col-sm-3 col-md-3 col-lg-2">
                        <div class="d-flex align-items-center justify-content-end">
                            <a href="#" id="open-search">
                                <span class="mdi mdi-magnify"></span>
                            </a>
                            <a href="#" class="d-flex align-items-center justify-content-center">
                                <span class="mdi mdi-wallet-giftcard"></span>
                                <sup class="badge badge-pill badge-dark ml-n2">Wallet</sup>
                            </a>
                            <a href="#" data-toggle="modal" data-target="#cartModal" class="d-flex align-items-center justify-content-center">
                                <span class="mdi mdi-cart-outline"></span>
                                <sup class="badge badge-pill badge-dark ml-n2">0</sup>
                            </a>
                        </div>
                    </div>
                </div>
                <!--Search box-->
                <div class="web-search">
                    <button type="button" id="close-search"><span class="mdi mdi-close"></span></button>
                    <form class="search-box d-flex">
                        <button type="submit" class="search-submit"><i class="mdi mdi-magnify"></i></button>
                        <input type="text" name="s" placeholder="Search" class="search-field" autocomplete="off">
                        <button type="reset" class="search-reset"><i class="mdi mdi-close"></i></button>
                    </form>
                </div>
                <!--/Search box-->
            </div>
            <!--/web view-->
            <!--mobile view-->
            <div class="mobile-view">
                <div class="mobile-header">
                    <div class="row">
                        <div class="col-3">
                            <a href="#" id="open-menu"><i class="mdi mdi-menu"></i></a>
                        </div>
                        <div class="col-6">
                            <div class="logo">
                                <img class="logo-light" :src="logoLight" alt="">
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="d-flex align-items-center justify-content-end">
                                <a href="#" class="d-flex align-items-center justify-content-center">
                                    <span class="mdi mdi-wallet-giftcard"></span>
                                    <sup class="badge badge-pill badge-dark ml-n2">Wallet</sup>
                                </a>
                                <a href="#" class="d-flex align-items-center justify-content-center">
                                    <span class="mdi mdi-cart-outline"></span>
                                    <sup class="badge badge-pill badge-dark ml-n2">0</sup>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mobile-menu">
                    <a href="#" id="close-menu"><i class="mdi mdi-close"></i></a>
                    <div class="mobile-search">
                        <input type="search" placeholder="Search">
                        <span class="mdi mdi-magnify"></span>
                    </div>
                    <ul class="nav flex-column">
                        <li class="nav-item">
                            <a href="#" class="nav-link">Home</a>
                        </li>
                        <li class="nav-item">
                            <a href="products.html" class="nav-link">Shop</a>
                        </li>
                        <li class="nav-item">
                            <a href="products.html" class="nav-link">Future</a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link">Pages</a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link">Blogs</a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
            <!--/mobile view-->
        </div>
    </header>
    <!--/header-->
</template>

<script>
export default {
    data() {
        return {
            logo: require('../assets/img/logo.svg'),
            logoLight: require('../assets/img/logo-light.svg'),
            isActive: false
        }
	},
	methods: {
		handleSCroll(event) {
			let header = document.querySelector(".header");
			if (window.scrollY > 75 && !header.className.includes("header-fixed")) {
				header.classList.add("header-fixed");
			} else if (window.scrollY < 75) {
				header.classList.remove("header-fixed");
			}
		}
	},
	created() {
		window.addEventListener("scroll", this.handleSCroll);
	},
	destroyed() {
		window.removeEventListener("scroll", this.handleSCroll);
	}
}
</script>

<style>

</style>