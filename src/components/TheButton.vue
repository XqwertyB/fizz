<template>
  <button
    class="text-white px-[40px] py-[12px] text-xl bg-bgbutton"
    @click="$emit('action')"
  >
    <slot />
  </button>
</template>

<script>
export default {};
</script>

<style></style>
