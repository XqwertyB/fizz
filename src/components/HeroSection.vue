<template>
  <section
    class="hero bg-default min-h-[697px] lg:mt-[300px] mt-[100px] relative"
    :style="`background-image: url(${heroBg})`"
  >
    <div class="welcome container">
      <div class="left lg:pt-8">
        <h1
          class="font-bold lg:text-[40px] text-[2300px] text-white lg:pt-[133px] pt-4"
        >
          Kengashga xush kelibsiz<br />Council of Physicists of Uzbekistan<br />universiteti!
        </h1>
        <p
          class="font-medium lg:text-2xl text-xl text-white lg:w-[614px] lg:pt-5 lg:mb-12 pt-4"
        >
          Biz sizga akademik mukammallik va shaxsiy ta'lim uchun muhitni taqdim
          etamiz.
        </p>

        <div class="btn flex gap-4 pt-4">
          <button class="py-2 px-6 lg:py-3 lg:px-10 bg-bgbutton text-white">
            Murojaat qiling
          </button>
          <button
            class="py-2 px-6 lg:py-3 border-[1px] border-bgbutton lg:px-10 bg-transparent text-white"
          >
            Ko'proq
          </button>
        </div>
      </div>

      <div class="right pt-4">
        <div class="card absolute top-0 right-60" style="width: 18rem">
          <img :src="cardImg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title font-semibold text-2xl">Card title</h5>
            <p class="card-text lg:font-normal lg:text-xl pb-4">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="" class="card-link font-normal text-xl">Ko'proq o'qing</a>
            <div class="flex justify-between items-center pt-7">
              <div class="flex items-center gap-1">
                <i class="fa-regular fa-calendar"></i>
                <p>Aprel 11, 2022</p>
              </div>

              <div class="flex items-center gap-1">
                <i class="fa-regular fa-comments"></i>
                <p>10ta sharh</p>
              </div>
            </div>
          </div>
        </div>

        <div
          class="card absolute"
          style="width: 18rem; top: 250px; left: 530px"
        >
          <img :src="cardImg2" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title font-semibold text-2xl">Card title</h5>
            <p class="card-text lg:font-normal lg:text-xl pb-4">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="" class="card-link font-normal text-xl">Ko'proq o'qing</a>
            <div class="flex justify-between items-center pt-7">
              <div class="flex items-center gap-1">
                <i class="fa-regular fa-calendar"></i>
                <p>Aprel 11, 2022</p>
              </div>

              <div class="flex items-center gap-1">
                <i class="fa-regular fa-comments"></i>
                <p>10ta sharh</p>
              </div>
            </div>
          </div>
        </div>

        <div class="card absolute right-60" style="width: 18rem; top: 468px">
          <img :src="cardImg3" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title font-semibold text-2xl">Card title</h5>
            <p class="card-text lg:font-normal lg:text-xl pb-4">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="" class="card-link font-normal text-xl">Ko'proq o'qing</a>
            <div class="flex justify-between items-center pt-7">
              <div class="flex items-center gap-1">
                <i class="fa-regular fa-calendar"></i>
                <p>Aprel 11, 2022</p>
              </div>

              <div class="flex items-center gap-1">
                <i class="fa-regular fa-comments"></i>
                <p>10ta sharh</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      heroBg: require("@/assets/images/header-bg.png"),
      cardImg: require("@/assets/images/header-news 1.png"),
      cardImg2: require("@/assets/images/header-news 2.png"),
      cardImg3: require("@/assets/images/header-news 3.png"),
    };
  },
};
</script>

<style scoped>
.card {
  background-color: #f5f5f5;
}
.card h4 {
  color: #191919;
}

.card-title {
  color: #191919;
}

.card-text {
  color: #454545;
}

.card-link {
  color: #1c71ff;
}
</style>
