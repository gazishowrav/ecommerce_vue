<template>
  <div class="home">
    <Header/>
    <!-- main-->
    <main class="main">
      <Slider/>
    </main>
    <!-- /main-->
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  components: {
    Header: () => import(/* webpackChunkName: "Header" */ "@/components/Header"),
    Footer: () => import(/* webpackChunkName: "Footer" */ "@/components/Footer"),
    Slider: () => import(/* webpackChunkName: "Slider" */ "./element/Slider"),
  }
}
</script>
