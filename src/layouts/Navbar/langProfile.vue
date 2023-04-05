<template>
  <div class="flex gap-3">
      <div class="lang">
        <img :src="flag" alt="flag">
        <p class="text-center">O'zbek</p>
      </div>

      <div class="profile">
        <i class="fa-regular fa-user"></i>
        <p>Profil</p>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            flag: require("@/assets/images/flag.svg"),
        }
    }
}
</script>

<style>
.gap-3 img{
  margin-left:12px;
}
.profile i{
  margin-left:10px;
}

</style>