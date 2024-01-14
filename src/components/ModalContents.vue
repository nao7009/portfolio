//ModalContents.vue
<template>
  <div class="modal__wrap" :class="{ 'is-open': modalSwitch }">
    <div class="modal">
      <h2 class="modal__title">{{ modalTitle }}</h2>
      <div class="modal__content">
        <p>{{ modalContent }}</p>
        <p>{{ modalLanguage }}</p>
        <p>{{ modalTime }}</p>
      </div>
      <div class="modal__button--wrap">
        <button class="modal__close" @click="modalClose">閉じる</button>
      </div>
    </div>
    <div class="modal__overlay" @click="modalClose"></div>
  </div>
</template>

<script>
export default {
  props: ["modalFlg", "modalTitle", "modalContent", "modalLanguage","modalTime"],
  data() {
    return {
      childModalFlg: this.modalFlg,
    };
  },
  methods: {
    modalClose() {
      if (this.childModalFlg) {
        this.childModalFlg = false;
        this.$emit("modal-clicked", this.childModalFlg);
      }
    },
    childModalSwitch() {
      if (this.modalFlg) {
        this.childModalFlg = true;
      } else {
        this.childModalFlg = false;
      }
      return this.childModalFlg;
    },
  },
  computed: {
    modalSwitch() {
      return this.childModalSwitch();
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  width: 80%;
  max-width: 600px;
  background: #fff;
  position: relative;
  padding: 20px;
  z-index: 200;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s, visibility 0.3s;
  @include mq('max','md') {
  }
  &__wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    transition: z-index 0.3s;
    visibility: hidden;
    @include mq('max','md') {
    }
    &.is-open {
      z-index: 1;
      @include mq('max','md') {
      }
      .modal {
        opacity: 1;
        visibility: visible;
        @include mq('max','md') {
        }
      }
      .modal__overlay {
        opacity: 1;
        visibility: visible;
        @include mq('max','md') {
        }
      }
    }
  }
  &__overlay {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba($color: #000, $alpha: 0.6);
    z-index: 100;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s, visibility 0.3s;
    @include mq('max','md') {
    }
  }
  &__close {
    background-color: #999;
    color: #fff;
    font-size: 15px;
    border: none;
    border-radius: 4px;
    padding: 10px 16px;
    cursor: pointer;
    transition: 0.3s;
    @include mq('max','md') {
      padding: 8px 10px;
    }
    &:hover {
      opacity: 0.7;
      @include mq('max','md') {
      }
    }
  }
  &__title {
    font-size: 20px;
    text-align: center;
    @include mq('max','md') {
    }
  }
  &__content {
    margin-bottom: 30px;
    @include mq('max','md') {
    }
  }
  &__button {
    &--wrap {
      text-align: center;
      @include mq('max','md') {
      }
    }
  }
}
</style>