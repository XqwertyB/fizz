<template>
  <main>
    <Navbar />
    <router-view />
    <Footer />
  </main>
</template>

<script>
import Navbar from "@/layouts/Navbar/index.vue"
import Footer from "@/layouts/Footer/index.vue"

export default {
  components: {
    Navbar,
    Footer,
  }
}
</script>

<style>

</style>
