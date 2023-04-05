<template>
  <header
    class="fixed w-full left-0 top-0 py-5 bg-white z-99"
    style="z-index: 9999"
  >
    <div class="container flex justify-between items-center">
      <!-- Logo -->
      <logo
        class="min-[320px]:w-[60px] transition duration-500 fixed top-0 z-10 block lg:hidden"
      />

      <!-- burgerBtn -->
      <div class="burger-btn block lg:hidden absolute right-2 top-4">
        <BurgerBtn
          @toggleMenu="isMenuOpen = !isMenuOpen"
          :isMenuOpen="isMenuOpen"
        />
      </div>

      <!-- mobile-menu -->
      <div class="mobile-menu fixed lg:hidden">
        <transition name="menu-slide">
          <MobileMenu v-if="isMenuOpen" />
        </transition>
      </div>

      <!-- desctop-menu -->
      <div class="desctop-menu hidden lg:block">
        <DesctopMenu />
      </div>
    </div>
  </header>
</template>

<script>
import DesctopMenu from "./desctopMenu.vue";
import MobileMenu from "./mobileMenu.vue";
import BurgerBtn from "./burgerBtn.vue";
import langProfile from "./langProfile.vue";
import logo from "../logo.vue";

export default {
  components: {
    DesctopMenu,
    MobileMenu,
    BurgerBtn,
    langProfile,
    logo,
  },
  data() {
    return {
      // mainLogo: require('@/assets/images/logo.png'),
      isMenuOpen: false,
    };
  },
};
</script>

<style>
.menu-slide-enter-active,
.menu-slide-leave-active {
  transition: 0.5s ease;
}

.menu-slide-enter-from,
.menu-slide-leave-to {
  translate: -100%;
}
</style>
