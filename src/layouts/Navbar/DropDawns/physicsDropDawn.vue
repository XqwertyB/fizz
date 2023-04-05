<template>
  <div class="menu-item" @click="isOpen = !isOpen">
    <a
      href="#"
      class="active:border-b-bgbutton link"
      :class="isOpen ? 'active' : 'none'"
    >
      {{ title }}
    </a>
    <transition
      name="accordion"
      @enter="start"
      @after-enter="end"
      @before-leave="start"
      @after-leave="end"
    >
      <div
        class="sub-menu text-xs bg-white lg:absolute"
        v-if="isOpen"
      >
        <div>
          <div v-for="(item, i) in items" :key="i" class="menu-item">
            <a :href="item.link">{{ item.title }}</a>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: ["title", "items"],
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    start(el) {
      el.style.height = el.scrollHeight + "px";
    },
    end(el) {
      el.style.height = "";
    },
  },
  created: function() {
  let self = this;

  window.addEventListener('click', function(e){
    // close dropdown when clicked outside
    if (!self.$el.contains(e.target)){
      self.isOpen = false
    } 
  })
}
};
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
.sub-menu{
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #1c71ff;
  margin-top: 10px;
  margin-left: 20px;
}
.sub-menu .menu-item{
  font-size: 16px;
  line-height: 2;
  width: 200px;
}
</style>
