<template>
    <div class="menu-item" @click="isOpen = !isOpen">
        <a href="#"
            class="active:border-b-bgbutton link"
            :class="isOpen ? 'active' : 'none'"
        >
            {{title}}
        </a>
  
        <i class="fa-solid fa-caret-down ml-1"
            :class="!isOpen ? 'rotate-0' : '-rotate-180'"
        ></i>
        <transition
            name="accordion"
            @enter="start"
            @after-enter="end"
            @before-leave="start"
            @after-leave="end"
        >
          <div class="sub-menu text-xs bg-white top-6 transition-all duration-150 lg:absolute" v-if="isOpen">
              <div v-for="(item, i) in items" :key="i" class="menu-item">
                  <a :href="item.link">{{item.title}}</a>
              </div>
          </div>
        </transition>  
    </div>
  </template>
  
  <script>
  export default {
      props: ['title', 'items'],
      data() {
          return {
              isOpen: false
          }
      },
      methods: {
        start(el) {
            el.style.height = el.scrollHeight + "px";
        },
        end(el) {
            el.style.height = "";
        },
      },
  }
  </script>
  
  <style lang="scss" scoped>
    .fa-solid {
        transition: 0.3s;
    }
    .link {
    &.active {
    border-bottom: 2px solid #1c71ff;
    }
    }
    .accordion-enter-active,
    .accordion-leave-active {
        will-change: height, opacity;
        transition: height 0.3s ease, opacity 0.3s ease;
        overflow: hidden;
    }

    .accordion-enter-from,
    .accordion-leave-to {
        height: 0 !important;
        opacity: 0;
    }
  </style>