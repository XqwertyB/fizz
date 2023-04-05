<template>
  <div>
    <HeroSection />
    <SectionOne />
    <SectionTwo />
    <SectionThree />
  </div>
</template>

<script>
import HeroSection from "../../components/HeroSection.vue";
import SectionOne from "../../components/sectionOne.vue"
import SectionTwo from "../../components/SectionTwo.vue"
import SectionThree from "../../components/SectionThree.vue"
export default {
  components: {
    HeroSection,
    SectionOne,
    SectionTwo,
    SectionThree,
  },
};
</script>

<style></style>
