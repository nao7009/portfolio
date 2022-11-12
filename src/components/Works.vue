// Works.vue
<template>
    <div class="works">
        <MyHeader/>
    <main class="main">
        <div class="main__title">
            <h2>WORKS</h2>
        </div>
        <ModalItem :modalItems="modalItems[0]" />
        <ModalItem :modalItems="modalItems[1]" />
        <ModalItem :modalItems="modalItems[2]" />
    </main>
        <MyFooter/>
    </div>
</template>

<script>
import MyHeader from '@/components/MyHeader.vue'
import ModalItem from "@/components/ModalItem"
import MyFooter from '@/components/MyFooter.vue'

export default {
  name: 'MyWorks',
    components: {
    MyHeader,
    ModalItem,
    MyFooter,
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
                {
          modalTtl: "CRIカフェ",
          modalContent: "レストランのwebページです。社内勉強会のカリキュラムでHTML/CSS/jsについて学習し、「実際にコーディングを行ってwebサイトを作成する」という課題で作成しました。HTML/CSS/Javascriptを用いて作成しています。CSSはSCSSで記述し、レスポンスコーディングにも対応しています。SNSの投稿記事を掲載している部分にjQueryでスライドを付けました。制作にかかった時間は約13時間です。(HTML：4時間、CSS：5時間、js：4時間)",
          modalImage: require('@/assets/images/mv.jpg'),
          modalLink: "/workContents_restaurant/index.html",
        },
      ],
    }
  }
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
 
        &--item01{
            margin: 30px auto;
            width: 600px;
            height: 350px;
            position: relative;
            display: block; /*モーダルウィンドウ*/
            cursor: pointer;
            @include mq('max','md') {
                margin: 15px auto;
                width: 300px;
                height: 175px;            
            }
            img{
                width: 100%;
                height: 100%;
            }
            p{
                color: #fff;
                background-color: #aaa;
                width: 500px;
                text-align: center;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
                padding: 0;
                margin: 0;
                font: normal 18px sans-serif;
                @include mq('max','md') {
                    width: 250px;
                    font: normal 12px sans-serif;
                }
            }
        }
        &--text01{
            display: none;
            position: fixed;
            height:300px;
            width: 600px;
            padding: 10px 20px;
            background: #ddd;
            overflow-y: auto;
            border-radius: 1em;
            z-index: 100;
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
        &--item02{
            margin: 30px auto;
            width: 600px;
            height: 350px;
            position: relative;
            display: block; /*モーダルウィンドウ*/
            cursor: pointer;
            @include mq('max','md') {
                margin: 15px auto;
                width: 300px;
                height: 175px;            
            }
            img{
                width: 100%;
                height: 100%;
            }
            p{
                color: #fff;
                background-color: #aaa;
                width: 500px;
                text-align: center;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
                padding: 0;
                margin: 0;
                font: normal 18px sans-serif;
                @include mq('max','md') {
                    width: 250px;
                    font: normal 12px sans-serif;
                }
            }
        }
        &--text02{
            display: none;
            position: fixed;
            height:300px;
            width: 600px;
            padding: 10px 20px;
            background: #ddd;
            overflow-y: auto;
            border-radius: 1em;
            z-index: 100;
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
        &--item03{
            margin: 30px auto;
            width: 600px;
            height: 350px;
            position: relative;
            display: block; /*モーダルウィンドウ*/
            cursor: pointer;
            @include mq('max','md') {
                margin: 15px auto;
                width: 300px;
                height: 175px;            
            }
            img{
                width: 100%;
                height: 100%;
            }
            p{
                color: #fff;
                background-color: #aaa;
                width: 500px;
                text-align: center;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
                padding: 0;
                margin: 0;
                font: normal 18px sans-serif;
                @include mq('max','md') {
                    width: 250px;
                    font: normal 12px sans-serif;
                }
            }
        }
        &--text03{
            display: none;
            position: fixed;
            height:300px;
            width: 600px;
            padding: 10px 20px;
            background: #ddd;
            overflow-y: auto;
            border-radius: 1em;
            z-index: 100;
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
        &--overlay{ /*背景*/
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 120%;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 99;
        }
    }
}
</style>