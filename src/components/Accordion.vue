//Accordion.vue
<template>
    <div class="accordion">
    <div class="title" :class="{'open':isOpen}" @click="open()">
        <slot name="title"></slot>
        <transition name="rotate" mode="out-in">
        <i class="fas fa-chevron-up" v-if="isOpen" key="rotate1"></i>
        <i class="fas fa-chevron-down" v-else key="rotate2"></i>
        </transition>
    </div>
    <transition name="open">
        <div class="accordion-content" v-if="isOpen">
        <slot name="content"></slot>
        </div>
    </transition>
    </div>
</template>


<script>
export default {
    name: "AccordionMenu",
    data: function () {
        return {
        isOpen: false
        }
    },
    methods: {
        open: function () {
        this.isOpen = !this.isOpen;
        }
    }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300&display=swap');
@keyframes open {
  0% {
    opacity: 0;
    transform: translateY(-5px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
.open-enter-active {
  animation: open 1s;
}
.open-leave-active {
  animation: open .5s linear reverse;
}

@keyframes rotate {
  0% {
    transform: rotate(180deg);
  }
}
.rotate-enter-active {
  animation: rotate .9s linear;

}
.accordion {
    max-width: 70%;
    margin: 10px auto;
}
.title {
  margin-bottom: 10px;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 600;
  color: #F4F4F4;
  background-color: #807D7E;
  padding: 15px;
  border-radius: 5px;
  position: relative;
  @include mq('max','md') {
    font-size: 12px;
  }
  @include mq('max','sm') {
    padding: 10px;
    font-size: 10px;
  }
  &:hover{
    opacity: .8;
    cursor: pointer;
    @include mq('max','md') {
    }
  }
  i{
    float: right;
    line-height: 1.3;
    @include mq('max','md') {
    }
  }
  >div{
    display: inline-block;
    @include mq('max','md') {
    }
  }
  &:after{
    content: "";
    position: absolute;
    top: 18px;
    right: 25px;
    width: 0;
    height: 0;
    border: 8px solid transparent;
    border-top-color: #fff;
    @include mq('max','md') {
    }
    @include mq('max','sm') {
      top: 12px;
    }
  }
}
.content {
    padding: 0 15px;
    margin-bottom: 10px;
    @include mq('max','md') {
    }
}
.open{
    &:after{
        content: "";
        position: absolute;
        top: 15px;
        border: 8px solid transparent;
        border-bottom-color: #fff;
        @include mq('max','md') {
          top: 10px;
      }
    }
}
</style>