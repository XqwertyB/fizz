<template>
  <footer class="pt-[80px]">
    <div class="info flex justify-between items-center container pb-[51px]">
      <!-- About -->
      <div class="about">
        <h4 class="font-semibold text-sm">Biz haqimizda</h4>
        <p class="font-normal text-xs w-[344px]">
          Toshkentning qoq markazida joylashgan COPU ilmiy-tadqiqot va kasbiy
          ta’limning innovatsion markazi sifatida munosib obro‘ga ega.
        </p>
      </div>

      <!-- Partners -->
      <div class="partners">
        <h4 class="font-semibold text-sm">Хамкорлар</h4>
        <p class="font-normal text-xs">
          Хамкорлик<br />Шериклик дастури<br />Фойда
        </p>
      </div>

      <!-- Students -->
      <div class="students">
        <h4 class="font-semibold text-sm">Талабалар</h4>
        <p class="font-normal text-xs">
          Тўлов усули<br />Лицензиялар<br />Савол ва жавоб
        </p>
      </div>

      <!-- Organization -->
      <div class="organization">
        <h4 class="font-semibold text-sm">Ташкилот</h4>
        <p class="font-normal text-xs">
          Контактлар<br />Биз хақимизда<br />Манзил
        </p>
      </div>

      <!-- Contact -->
      <div class="contact">
        <h4 class="font-semibold text-sm">Biz bilan bog'lanish</h4>
        <p class="font-normal text-xs pt-2 text-bgbutton">+998 90 042 43 99</p>
        <div class="icons flex gap-4 pt-2 text-bgbutton">
          <i class="fa-brands fa-telegram"></i>
          <i class="fa-brands fa-facebook-f"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-instagram"></i>
        </div>
      </div>
    </div>

    <div class="top flex justify-center items-center">
      <div class="bd"></div>
      <i class="fa-solid fa-angle-up icon py-[25px] px-[25px]"></i>
      <div class="bd"></div>
    </div>

    <div
      class="dawn-footer flex justify-between items-center pt-[15px] container pb-8"
    >
      <p class="rule font-normal text-lg">
        @2022 COPU. Barcha huquqlar himoyalangan
      </p>
      <h4 class="top">TOP</h4>
      <p class="font-semibold text-lg text-bgbutton">
        Toshkent sh., Algoritm, Diydor ko‘chasi, 71-uy
      </p>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
footer {
  background: #f5f5f5;
}

.icon {
  border: 1px solid #191919;
  border-radius: 50%;
}

.bd {
  border: 1px solid #d8d8d8;
  width: 100%;
}

.rule {
  color: #454545;
}
</style>
