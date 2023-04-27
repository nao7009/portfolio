//ModalButton.vue
<template>
  <button class="button modal" @click="modalClick">Click here！</button>
</template>

<script>
export default {
  props: ["modalFlg"],
  data() {
    return {
      childModalFlg: this.modalFlg,
    };
  },
  methods: {
    modalClick() {
      this.childModalFlg = !this.modalFlg;
      this.$emit("modal-clicked", this.childModalFlg);
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  display: block;
  margin: 5px auto;
  background: #999;
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
  }
}
</style>