<template>
  <div>
    <div class="d-flex">
      <ProfileSidebar />
      <ProfileMain />
    </div>
  </div>
</template>
<script>
import ProfileSidebar from "@/components/ProfileSidebar.vue";
import ProfileMain from "@/components/ProfileMain.vue";
export default {
  components: {
    ProfileSidebar,
    ProfileMain,
  },
};
</script>
