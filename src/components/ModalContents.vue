//ModalContents.vue
<template>
  <div class="modal-wrap" :class="{ 'is-open': modalSwitch }">
    <div class="modal">
      <h2 class="modal-ttl">{{ modalTtl }}</h2>
      <div class="modal-content">
        <p>{{ modalContent }}</p>
      </div>
      <div class="modal-btn-wrap">
        <button class="modal-close" @click="modalClose">閉じる</button>
      </div>
    </div>
    <div class="modal-overlay" @click="modalClose"></div>
  </div>
</template>

<script>
export default {
  props: ["modalFlg", "modalTtl", "modalContent"],
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

  &-wrap {
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
    &.is-open {
      z-index: 1;
      .modal {
        opacity: 1;
        visibility: visible;
      }
      .modal-overlay {
        opacity: 1;
        visibility: visible;
      }
    }
  }
  &-overlay {
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
  }
  &-close {
    background-color: #666;
    color: #fff;
    font-size: 15px;
    border: none;
    border-radius: 4px;
    padding: 10px 16px;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      opacity: 0.7;
    }
  }
  &-ttl {
    font-size: 20px;
    text-align: center;
  }
  &-content {
    margin-bottom: 30px;
  }
  &-btn {
    &-wrap {
      text-align: center;
    }
  }
}
</style>