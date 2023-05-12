//ModalItem.Vue
<template>
    <div class="modal">
        <div class="modal__item">
            <div class="modal__hoverText">
              <p><a v-bind:href = "modalItems.modalLink" target="_blank">詳しく見る</a></p>
            </div>
            <div class="modal__image">
              <img :src = "modalItems.modalImage">
            </div>
            <ModalButton :modalFlg="modalFlg" @modal-clicked="modalFlg = $event" />
        </div>
        <div class="modal__text">
          <ModalContents
            :modalFlg="modalFlg"
            @modal-clicked="modalFlg = $event"
            :modalTitle="modalItems.modalTitle"
            :modalContent="modalItems.modalContent"
            :modalTime="modalItems.modalTime"
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
.modal{
  width: 85%;
  margin: 10px auto 0;
  @include mq('max','md') {
    width: 100%;
    margin: 5px auto 0;
    }
    &__item{
          margin: 20px auto 50px;
          width: 600px;
          //hover
          position: relative;
          @include mq('max','md') {
            margin: 20px auto 30px;
            width: 400px;
          }
          &:hover .modal__hoverText{
            opacity: 1;
          }
        }
    &__hoverText{
        position: absolute;
        width: 100%;
        height: 88%;
        top: 0;
        left: 0;
        text-align: center;
        color: #fff;
        background-color: rgba(0,0,0,0.6);
        transition: .3s ease-in-out;
        opacity: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center; 
        @include mq('max','md') {
          height: 85%;
        }
        p{
          position: relative;
          display: inline-block;
          text-decoration: none;
          @include mq('max','md') {
          }
          &:after{
                position: absolute;
                bottom: -4px;
                left: 0;
                content: '';
                width: 100%;
                height: 2px;
                background: #FFF;
                transform: scale(0, 1);
                transform-origin: left top;
                transition: transform .3s;
                @include mq('max','md') {
                } 
            }
            &:hover:after {
                transform: scale(1, 1);
                @include mq('max','md') {
                }
            }
        }
        a{
          color: #fff;
          @include mq('max','md') {
          }
        }
    }
    &__image{
      width: 600px;
      height: 350px;
      background: #000;
      margin: 0 auto;
      @include mq('max','md') {
          width: 400px;
          // width: 350px;
          height: 250px;
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
    &__text{
            p{
                font: normal 18px sans-serif;
                color: #333;
                @include mq('max','md') {
                    font: normal 15px sans-serif;
                }
            }
        }
}
</style>