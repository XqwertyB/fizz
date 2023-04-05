<template>
  <nav class="container relative z-100">
      <div class="upper-nav flex items-center justify-between pt-[0px]">
          <div class="logo flex gap-5 items-center">
            <logo class="w-[106px] relative z-10" />
            <p class="text font-bold text-xl">Council<br>of Physicists<br>of Uzbekistan</p>
          </div>

          <div class="search">
              <img :src="searchBg" alt="" class="absolute -top-0 left-45">
              <input type="text" placeholder="Сиз нимани излаяпсиз?" class="rounded-full w-[561px] h-[60px] relative">
          </div>

          <langProfile />
      </div>

      <div class="navbar ">
          <ul class="flex justify-center items-center gap-4">
            <li class="menu-item relative mt-2"><physicsDropDawn title="Физиклар кенгаши" :items="phyzics" /></li>
            <li class="menu-item relative mt-2"><physicsDropDawn title="Видеоукурслар" :items="videos" /></li>
            <li class="menu-item relative mt-2"><physicsDropDawn title="Конференциялар" :items="conferences" /></li>
            <li class="menu-item relative mt-2"><physicsDropDawn title="Янгиликлар" :items="news" /></li>
            <li class="menu-item relative mt-2"><physicsDropDawn title="Журналлар" :items="magazines" /></li>
            <li class="menu-item relative mt-2"><physicsDropDawn title="Ресурслар" :items="resources" /></li>
            <li class="menu-item relative mt-2"><physicsDropDawn title="Ҳужжатлар" :items="documents" /></li>
            <li class="menu-item relative mt-2 cursor-pointer">Боғланиш</li>
          </ul>
      </div>
  </nav>
</template>

<script>
import logo from '../logo.vue';
import LangProfile from './langProfile.vue';
import physicsDropDawn from './DropDawns/physicsDropDawn.vue'
import videosDropDawn from './DropDawns/videosDropDawn.vue'
import conferenceDropDawn from './DropDawns/conferenceDropDawn.vue'
import newsDropDawn from './DropDawns/newsDropDawn.vue'
import magazineDropDawn from './DropDawns/magazineDropDawn.vue'
import resourcesDropDawn from './DropDawns/resourcesDropDawn.vue'
import documentDropDawn from './DropDawns/documentDropDawn.vue'
export default {
  components: {
    logo,
    LangProfile,
    physicsDropDawn,
    videosDropDawn,
    conferenceDropDawn,
    newsDropDawn,
    magazineDropDawn,
    resourcesDropDawn,
    documentDropDawn
  },
  data() {
      return {
          searchBg: require('@/assets/images/copu.svg'),
          phyzics: [
                {
                    title: 'Кенгаш хакида',
                    link: '#'
                },
                {
                    title: 'Кенгаш бошқаруви аъзолари',
                    link: '#'
                },
                {
                    title: 'Кенгаш ташкилий тузилмаси',
                    link: '#'
                },
                {
                    title: 'Ҳудудий бýлинмалар',
                    link: '#'
                },
                {
                    title: 'Кенгаш аъзолари',
                    link: '#'
                },
                {
                    title: 'Кенгаш Низоми',
                    link: '#'
                },
                {
                    title: 'Кенгаш онлайн аъзо бýлиш',
                    link: '#'
                },

            ],
            videos: [
                {
                    title: 'Барача видеокурслар',
                    link: '#'
                },
                {
                    title: 'Мактаб ýқувчилари учун',
                    link: '#'
                },
                {
                    title: 'Бакалавр учун',
                    link: '#'
                },
                {
                    title: 'Магистрлар учун',
                    link: '#'
                },
                {
                    title: 'Топ видеокурслар',
                    link: '#'
                },
                {
                    title: 'Муаллифлар',
                    link: '#'
                },
            ],
            conferences: [
                {
                    title: 'Конференциялар рýйхати',
                    link: '#'
                },
                {
                    title: 'Янги конференция уаратиш',
                    link: '#'
                },
                {
                    title: 'Конференция материаллари',
                    link: '#'
                },
                {
                    title: 'Конференция материаллари (Архив)',
                    link: '#'
                },
                {
                    title: "Конференциялар то'грисида е'лонлар",
                    link: '#'
                },
            ],
            news: [
                {
                    title: 'Эйлонлар',
                    link: '#'
                },
                {
                    title: 'Янгиликлар',
                    link: '#'
                },
                {
                    title: 'Ярмаркалар',
                    link: '#'
                },
                {
                    title: 'Олимпиадалар ва танловлар',
                    link: '#'
                },
            ],
            magazines: [
                {
                    title: 'Онлайн журналлар ',
                    link: '#'
                },
                {
                    title: 'Соҳалар бýйича мақолалар',
                    link: '#'
                },
                {
                    title: 'Журнал рýйхатдан ýтказиш',
                    link: '#'
                },
            ],
            resources: [
                {
                    title: 'Диссертациялар',
                    link: '#'
                },
                {
                    title: 'Монографиялар',
                    link: '#'
                },
                {
                    title: 'Ýқув-услубий қýлланмалар',
                    link: '#'
                },
                {
                    title: 'Дарсликалар',
                    link: '#'
                },
                {
                    title: 'Фойдали моделлар',
                    link: '#'
                },
                {
                    title: 'Патентлар ва гувоҳномалар',
                    link: '#'
                },
                {
                    title: 'Мақолалар',
                    link: '#'
                },
            ],
            documents: [
                {
                    title: 'Қонунчилик ҳужжатлари',
                    link: '#'
                },
                {
                    title: 'Лойиҳалар',
                    link: '#'
                },
                {
                    title: 'Илмий муаммолар',
                    link: '#'
                },
                {
                    title: 'Илмий-техник ишланмалар',
                    link: '#'
                },
                {
                    title: 'Лицензион шартномалар',
                    link: '#'
                },
            ],
      }
  }
}
</script>

<style scoped>
.container {
    width: 1280px;
    margin: 0 auto;

}
.text {
    color: #00173F;
}

::placeholder {
    padding-left: 25px;
    color: #E1E1E1;
}

input {
    border: 1px solid #E1E1E1;
}
</style>