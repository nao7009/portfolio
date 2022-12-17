//ModalItem.Vue
<template>
    <div class="works__contents">
        <div class="works__contents--item">
            <div class="works__hoverText">Webサイトを見る</div>
            <a v-bind:href = "modalItems.modalLink"><img :src = "modalItems.modalImage" ></a>
            <!-- <ModalButton :modalFlg="modalFlg" @modal-clicked="modalFlg = $event" /> -->
        </div>
        <ModalButton :modalFlg="modalFlg" @modal-clicked="modalFlg = $event" />
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
        //hover
        // position: relative;
        // &:hover .works__hoverText{
        //   opacity: 1;
        // }

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
        &__hoverText {
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
        p {
            line-height: 1.8;
        }
    }
    }
}
</style>