//ModalItem.Vue
<template>
    <div class="modal" ontouchstart="">
        <div class="modal__item">
            <div class="modal__hoverText">
              <p><a v-bind:href = "modalItems.modalLink" target="_blank">詳しく見る</a></p>
            </div>
            <div class="modal__image">
              <img :src = "modalItems.modalImage">
            </div>
        </div>
        <div class="modal__button">
          <ModalButton :modalFlg="modalFlg" @modal-clicked="modalFlg = $event" />
        </div>
        <div class="modal__text">
          <ModalContents
            :modalFlg="modalFlg"
            @modal-clicked="modalFlg = $event"
            :modalTitle="modalItems.modalTitle"
            :modalContent="modalItems.modalContent"
            :modalLanguage="modalItems.modalLanguage"
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
  width: 350px;
  margin: 10px auto;
  @include mq('max','md') {
    width: 400px;
    margin: 5px auto;
  }
  @include mq('max','sm') {
    width: 200px;
    margin: 5px auto;
  }
    &__item{
          margin: 10px auto;
          width: 100%;
          //hover
          position: relative;
          @include mq('max','md') {
          }
          @include mq('max','sm') {
          }
          &:hover .modal__hoverText{
            opacity: 1;
          }
        }
    &__hoverText{
        position: absolute;
        width: 100%;
        height: 100%;
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
        }
        @include mq('max','sm') {
        }
        p{
          position: relative;
          display: inline-block;
          text-decoration: none;
          @include mq('max','md') {
          }
          @include mq('max','sm') {
            font-size: 8px;
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
      width: 350px;
      height: 250px;
      background: #000;
      margin: 0 auto;
      @include mq('max','md') {
          width: 400px;
          height: 250px;
        }
        @include mq('max','sm') {
          width: 200px;
          height: 150px;
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
    &__button{
      margin: 5px auto;
      @include mq('max','sm') {
        }
    }
}
</style>