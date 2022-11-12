// Main.vue
<template>
        <main class="main">
            <div class="main__title">
                <h2>PORTFOLIO</h2>
                <p>Nao Shimojo</p>
            </div>
            <ModalItem :modalItems="modalItems[0]" />
            <ModalItem :modalItems="modalItems[1]" />
            <div class="main__contents">
                <div class="main__contents--link">
                    <li><router-link to="/works">view more</router-link></li>
                </div>
            </div>
        </main>
</template>

<script>
import ModalItem from "@/components/ModalItem"

export default {
  name: 'MainMenu',
   components: {
    ModalItem,
  },
  data() {
   return {
        modalItems: [
        {
            modalTtl: "CRI病院",
            modalContent: "架空の病院のwebサイトです。HTML/CSS/Javascriptを用いて作成しています。地図の挿入や問い合わせフォームは自身で調べながら作成しました。jQueryを用いてフェードインの機能を実装しています。制作にかかった時間は約12時間です。(HTML：4時間、CSS：4.5時間、js：3.5時間)",
            modalImage: require('@/assets/images/medical_main.png'),
            modalLink: "/workContents_hospital/index.html",
        },
        {
            modalTtl: "CRIカフェ",
            modalContent: "架空のカフェのwebサイトです。HTML/CSS/Javascriptを用いて作成しています。地図の挿入や問い合わせフォームは自身で調べながら作成しました。また、カレンダーも調べながら作成しました。jQueryを用いてフェードインやスライドの機能を実装しています。スライドの機能はslickを使用し、手動でスライドする画面と自動でスライドする画面両方を実装しました。制作にかかった時間は約14時間です。(HTML：4時間、CSS：5.5時間、js：4.5時間)",
            modalImage: require('@/assets/images/cafe_main.jpg'),
            modalLink: "/workContents_cafe/index.html",
        },
        ],
    }
  },
}

</script>

<style lang="scss" scoped>
.main{
    &__title{
        text-align: center;
        h2{
            font: normal 30px sans-serif;
            @include mq('max','md') {
                margin-left: 5px;
                padding: 5px;
                font: normal 20px sans-serif;
            }
        }
        p{
            font: normal 20px sans-serif;
            @include mq('max','md') {
                margin: 5px;
                padding: 5px;
                font: normal 15px sans-serif;
            }
        }
    }
    &__contents{
        width: 85%;
        margin: 10px auto 0;
        @include mq('max','md') {
            width: 100%;
            margin: 5px auto 0;
        }
        &--link{
            margin: 0 auto;
            width: 250px;
            text-align: center;
            a{
                display: block;
                padding: 10px;
                font: normal 18px sans-serif;
                color: #555;
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