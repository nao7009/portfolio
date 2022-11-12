//ModalItem.Vue
<template>
    <div class="main__contents">
        <div class="main__contents--item">
            <a v-bind:href = "modalItems.modalLink"><img :src = "modalItems.modalImage" ></a>
            <!-- <img :src = "modalItems.modalImage" >
            <a v-bind:href = "modalItems.modalLink">webサイトを見る</a> -->
            <ModalButton :modalFlg="modalFlg" @modal-clicked="modalFlg = $event" />
        </div>
        <div class="main__contents--text">
          <ModalContents
            :modalFlg="modalFlg"
            @modal-clicked="modalFlg = $event"
            :modalTtl="modalItems.modalTtl"
            :modalContent="modalItems.modalContent"
          />
        </div>
    </div>
</template>

<script>
import ModalContents from "@/components/ModalContents"
import ModalButton from "@/components/ModalButton"

export default {
  name: "ModalItem",
  components: {
    ModalContents,
    ModalButton,
  },
  props: ["modalItems"],
  data() {
    return {
      modalFlg: false,
    };
  },
}
</script>

<style lang="scss" scoped>
.main{
    &__contents{
        width: 85%;
        margin: 10px auto 0;
        @include mq('max','md') {
            width: 100%;
            margin: 5px auto 0;
        }
        &--item{
            margin: 50px auto;
            width: 600px;
            @include mq('max','md') {
                margin: 30px auto;
                width: 300px;
            }
            img{
                width: 600px;
                height: 350px;
              @include mq('max','md') {
                width: 300px;
                height: 200px;
              }
            }
        }
        &--text{
            p{
                font: normal 18px sans-serif;
                color: #333;
                @include mq('max','md') {
                    font: normal 15px sans-serif;
                }
            }
            a{
                margin: 20px;
                font: normal 18px sans-serif;
                color: #00f;
                @include mq('max','md') {
                    font: normal 15px sans-serif;
                }
                &:hover{
                    background-color: #999;
                }
            }
        }
    }
}
</style>