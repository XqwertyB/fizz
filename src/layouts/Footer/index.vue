<template>
  <footer>
    <div>
      <!-- mobileFooter -->
      <div class="mobile-footer fixed lg:hidden">
        <mobileFooter />
      </div>

      <!-- desctopFooter -->
      <div class="desctop-menu hidden lg:block">
        <desctopFooter />
      </div>
    </div>
  </footer>
</template>

<script>
import mobileFooter from "./mobileFooter.vue";
import desctopFooter from "./desctopFooter.vue";
export default {
  components: {
    mobileFooter,
    desctopFooter,
  },
};
</script>

<style></style>
