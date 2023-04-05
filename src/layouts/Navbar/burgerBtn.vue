<template>
  <div
    class="burger-btn w-8"
    @click="toggleMenu"
    :class="{ active: isMenuOpen }"
  >
    <div class="line h-[4px] rounded-full bg-bgbutton my-1"></div>
    <div class="line h-[4px] rounded-full bg-bgbutton my-1"></div>
    <div class="line h-[4px] rounded-full bg-bgbutton my-1"></div>
  </div>
</template>

<script>
export default {
  props: {
    isMenuOpen: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    toggleMenu() {
      this.$emit("toggleMenu");
    },
  },
};
</script>

<style lang="scss" scoped>
.burger-btn {
  .line {
    transition: 0.25s linear;
  }
  &.active {
    .line {
      &:nth-child(1) {
        rotate: 45deg;
        translate: 0 -4px;
        transform-origin: left;
      }
      &:nth-child(2) {
        translate: -100%;
        scale: 0;
      }
      &:nth-child(3) {
        rotate: -45deg;
        translate: 0 4px;
        transform-origin: left;
      }
    }
  }
}
</style>
