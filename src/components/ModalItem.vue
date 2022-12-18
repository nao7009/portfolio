//ModalItem.Vue
<template>
    <div class="works__contents">
        <div class="works__contents--item">
            <div class="works__hoverText">Webサイトを見る</div>
            <div class="works__image">
              <a v-bind:href = "modalItems.modalLink"><img :src = "modalItems.modalImage" ></a>
            </div>
            <ModalButton :modalFlg="modalFlg" @modal-clicked="modalFlg = $event" />
        </div>
        <div class="works__contents--text">
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
.works{
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
          //hover
          // position: relative;
          // &:hover .works__hoverText{
          //   opacity: 1;
          // }
            @include mq('max','md') {
                margin: 30px auto;
                width: 300px;
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
    &__image{
      width: 600px;
      height: 350px;
      background: #000;
      @include mq('max','md') {
          width: 300px;
          height: 200px;
        }
      img{
          width: 100%;
          height: 100%;
          //hover
          display: block;
          opacity: 1;
          transition: .3s;
          &:hover{
            opacity: 0.5;
          }
      }
    }
}
</style>