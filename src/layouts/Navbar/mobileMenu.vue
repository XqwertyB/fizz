<template>
  <nav class="bg-white fixed left-0 top-0 h-full p-5 w-[250px] pt-[100px]">
    <!-- <logo class="w-[60px] fixed z-10" /> -->
    <langProfile class="pb-7 flex justify-center" />
    <div class="">
      <searchBtn />
    </div>
    <ul>
      <li class="menu-item relative mt-2">
        <physicsDropDawn title="Физиклар кенгаши" :items="phyzics" />
      </li>
      <li class="menu-item relative mt-2">
        <videosDropDawn title="Видеоукурслар" :items="videos" />
      </li>
      <li class="menu-item relative mt-2">
        <conferenceDropDawn title="Конференциялар" :items="conferences" />
      </li>
      <li class="menu-item relative mt-2">
        <newsDropDawn title="Янгиликлар" :items="news" />
      </li>
      <li class="menu-item relative mt-2">
        <magazineDropDawn title="Журналлар" :items="magazines" />
      </li>
      <li class="menu-item relative mt-2">
        <resourcesDropDawn title="Ресурслар" :items="resources" />
      </li>
      <li class="menu-item relative mt-2">
        <documentDropDawn title="Ҳужжатлар" :items="documents" />
      </li>
      <li class="menu-item relative mt-2">Боғланиш</li>
    </ul>
  </nav>
</template>

<script>
import physicsDropDawn from "./DropDawns/physicsDropDawn.vue";
import videosDropDawn from "./DropDawns/videosDropDawn.vue";
import conferenceDropDawn from "./DropDawns/conferenceDropDawn.vue";
import newsDropDawn from "./DropDawns/newsDropDawn.vue";
import magazineDropDawn from "./DropDawns/magazineDropDawn.vue";
import resourcesDropDawn from "./DropDawns/resourcesDropDawn.vue";
import documentDropDawn from "./DropDawns/documentDropDawn.vue";
import searchBtn from "./searchBtn.vue";
import langProfile from "./langProfile.vue";
import logo from "@/layouts/logo.vue";
export default {
  components: {
    physicsDropDawn,
    videosDropDawn,
    conferenceDropDawn,
    newsDropDawn,
    magazineDropDawn,
    resourcesDropDawn,
    documentDropDawn,
    langProfile,
    searchBtn,
    logo,
  },
  data() {
    return {
      phyzics: [
        {
          title: "Кенгаш хакида",
          link: "#",
        },
        {
          title: "Кенгаш бошқаруви аъзолари",
          link: "#",
        },
        {
          title: "Кенгаш ташкилий тузилмаси",
          link: "#",
        },
        {
          title: "Ҳудудий бýлинмалар",
          link: "#",
        },
        {
          title: "Кенгаш аъзолари",
          link: "#",
        },
        {
          title: "Кенгаш Низоми",
          link: "#",
        },
        {
          title: "Кенгаш онлайн аъзо бýлиш",
          link: "#",
        },
      ],

      videos: [
        {
          title: "Барача видеокурслар",
          link: "#",
        },
        {
          title: "Мактаб ýқувчилари учун",
          link: "#",
        },
        {
          title: "Бакалавр учун",
          link: "#",
        },
        {
          title: "Магистрлар учун",
          link: "#",
        },
        {
          title: "Топ видеокурслар",
          link: "#",
        },
        {
          title: "Муаллифлар",
          link: "#",
        },
      ],
      conferences: [
        {
          title: "Конференциялар рýйхати",
          link: "#",
        },
        {
          title: "Янги конференция уаратиш",
          link: "#",
        },
        {
          title: "Конференция материаллари",
          link: "#",
        },
        {
          title: "Конференция материаллари (Архив)",
          link: "#",
        },
        {
          title: "Конференциялар то'грисида е'лонлар",
          link: "#",
        },
      ],
      news: [
        {
          title: "Эйлонлар",
          link: "#",
        },
        {
          title: "Янгиликлар",
          link: "#",
        },
        {
          title: "Ярмаркалар",
          link: "#",
        },
        {
          title: "Олимпиадалар ва танловлар",
          link: "#",
        },
      ],
      magazines: [
        {
          title: "Онлайн журналлар ",
          link: "#",
        },
        {
          title: "Соҳалар бýйича мақолалар",
          link: "#",
        },
        {
          title: "Журнал рýйхатдан ýтказиш",
          link: "#",
        },
      ],
      resources: [
        {
          title: "Диссертациялар",
          link: "#",
        },
        {
          title: "Монографиялар",
          link: "#",
        },
        {
          title: "Ýқув-услубий қýлланмалар",
          link: "#",
        },
        {
          title: "Дарсликалар",
          link: "#",
        },
        {
          title: "Фойдали моделлар",
          link: "#",
        },
        {
          title: "Патентлар ва гувоҳномалар",
          link: "#",
        },
        {
          title: "Мақолалар",
          link: "#",
        },
      ],
      documents: [
        {
          title: "Қонунчилик ҳужжатлари",
          link: "#",
        },
        {
          title: "Лойиҳалар",
          link: "#",
        },
        {
          title: "Илмий муаммолар",
          link: "#",
        },
        {
          title: "Илмий-техник ишланмалар",
          link: "#",
        },
        {
          title: "Лицензион шартномалар",
          link: "#",
        },
      ],
    };
  },
};
</script>

<style></style>
