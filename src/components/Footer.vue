<template>
    <div id="footer">
    	<!--footer-->
    	<footer class="footer">
    		<div class="container-wrapper">
    			<div class="row align-items-center">
    				<div class="col-lg-2">
    					<div class="copyright"> ©2020 Sober</div>
    				</div>
    				<div class="col-lg-5">
    					<ul class="nav footer-menu">
    						<li class="nav-item">
    							<a href="#" class="nav-link">Blog</a>
    						</li>
    						<li class="nav-item">
    							<a href="#" class="nav-link">FAQs</a>
    						</li>
    						<li class="nav-item">
    							<a href="#" class="nav-link">Contact us</a>
    						</li>
    					</ul>
    				</div>
    				<div class="col-lg-5">
    					<ul class="nav justify-content-end social-menu">
    						<li class="nav-item">
    							<a href="#" class="nav-link"><i class="mdi mdi-facebook"></i></a>
    						</li>
    						<li class="nav-item">
    							<a href="#" class="nav-link"><i class="mdi mdi-instagram"></i></a>
    						</li>
    						<li class="nav-item">
    							<a href="#" class="nav-link"><i class="mdi mdi-twitter"></i></a>
    						</li>
    						<li class="nav-item">
    							<a href="#" class="nav-link"><i class="mdi mdi-youtube"></i></a>
    						</li>
    						<li class="nav-item">
    							<a href="#" class="nav-link"><i class="mdi mdi-google"></i></a>
    						</li>
    					</ul>
    				</div>
    			</div>
    		</div>
    	</footer>
    	<!--/footer-->
    	<!--mobile footer cart-->
    	<div class="mobile-footer-cart">
    		<div class="d-flex align-items-center justify-content-center">
    			<a href="#" class="d-flex align-items-center justify-content-center">
    				<span class="mdi mdi-wallet-giftcard"></span>
    				<sup class="badge badge-pill badge-success ml-n2">Wallet</sup>
    			</a>
    			<a href="#" class="d-flex align-items-center justify-content-center">
    				<span class="mdi mdi-cart-outline"></span>
    				<sup class="badge badge-pill badge-success ml-n2">0</sup>
    			</a>
    			<a href="#" class="d-flex align-items-center justify-content-center btn btn-sm btn-outline-dark shadow-none">
    				Checkout<span class="mdi mdi-arrow-right pl-1"></span>
    			</a>
    		</div>
    	</div>
    	<!--/mobile footer cart-->
    	<!--Search Modal-->
    	<div class="search-modal">
    		<div class="modal fade border-0" id="searchModal" tabindex="-1" role="dialog" aria-labelledby="searchModalLabel" aria-hidden="true">
    		  <div class="modal-dialog" role="document">
    		    <div class="modal-content">
    		      <div class="modal-header border-0">
    		        <h3 class="modal-title" id="exampleModalLabel">Search</h3>
    		        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
    		          <span class="mdi mdi-close"></span>
    		        </button>
    		      </div>
    		      <div class="modal-body border-0">
    		        <form class="search-fields pt-5 mt-5">
    		        	<div class="d-flex">
    		        		<button type="submit" class="search-submit"><i class="mdi mdi-magnify"></i></button>
    			        	<input type="text" name="s" placeholder="Search" class="search-field" autocomplete="off">
    			        	<button type="reset" class="search-reset"><i class="mdi mdi-close"></i></button>
    		        	</div>
    		        </form>
    		      </div>
    		    </div>
    		  </div>
    		</div>
    	</div>
    	<!--/Search Modal-->
    	<!--cart Modal-->
    	<div class="cart-modal">
    		<div class="modal fade border-0" id="cartModal" tabindex="-1" role="dialog" aria-labelledby="cartModalLabel" aria-hidden="true">
    		  <div class="modal-dialog" role="document">
    		    <div class="modal-content">
    		      <div class="modal-header border-0">
    		        <h3 class="modal-title" id="exampleModalLabel">Cart</h3>
    		        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
    		          <span class="mdi mdi-close"></span>
    		        </button>
    		      </div>
    		      <div class="modal-body border-0">
    		        <ul class="nav nav-tabs cart-tab justify-content-center" id="myTab" role="tablist">
    		          <li class="nav-item">
    		            <a class="nav-link active" id="shopingCart-tab" data-toggle="tab" href="#shopingCart" role="tab" aria-controls="shopingCart" aria-selected="true">Shoping Cart <sup class="badge badge-dark">3</sup></a>
    		          </li>
    		          <li class="nav-item">
    		            <a class="nav-link" id="wishlist-tab" data-toggle="tab" href="#wishlist" role="tab" aria-controls="wishlist" aria-selected="false">Wishlist <sup class="badge badge-dark">0</sup></a>
    		          </li>
    		      </ul>
    		        <div class="tab-content" id="myTabContent">
    		          <div class="tab-pane fade show active" id="shopingCart" role="tabpanel" aria-labelledby="shopingCart-tab">
    		          	<table class="table cart-table">
    		          		<tr v-for="(item, index) in cartProducts" :key="index">
    		          			<td class="products-img">
    		          				<img :src="item.url" alt="">
    		          			</td>
    		          			<td class="products-title">{{item.title}}</td>
    		          			<td class="products-quantiy">Qty: {{item.quantity}}</td>
    		          			<td class="products-price">${{item.price}}</td>
    		          			<td class="products-remove">
    		          				<a href="#"><span class="mdi mdi-close"></span></a>
    		          			</td>
    		          		</tr>
    		          	</table>
    		          	<div class="row justify-content-center">
    		          		<div class="col-lg-4">
    		          			<a href="#" class="btn btn-lg btn-dark rounded-0 py-3 px-5">$ 675.00 | Checkout</a>
    		          		</div>
    		          	</div>
    		          </div>
    		          <div class="tab-pane fade" id="wishlist" role="tabpanel" aria-labelledby="wishlist-tab">
    		          	<p class="text-center text-muted pt-5 mt-5">Your wishlist is currently empty.</p>
    		          </div>
    		        </div>
    		      </div>
    		    </div>
    		  </div>
    		</div>
    	</div>
    	<!--/cart Modal-->
    </div>
</template>

<script>
export default {
    data() {
        return {
            cartProducts:[
                {
                	url: require('../assets/img/products/1.jpg'),
                	title: 'Cotton Hat',
                	quantity: '1',
                	price: '40.00',
                },
                {
                	url: require('../assets/img/products/2.jpg'),
                	title: 'Cotton T-shirt',
                	quantity: '1',
                	price: '25.00',
                },
                {
                	url: require('../assets/img/products/3.jpg'),
                	title: 'Ear Headphones',
                	quantity: '1',
                	price: '180.00',
                }
            ]
        }
    }
}
</script>

<style>

</style>