// Main.vue
<template>
        <main class="main">
            <div class="main__title">
                <h2>PORTFOLIO</h2>
                <p>Nao Shimojo</p>
            </div>
            <div class="main__contents">
                <div class="main__contents--item01" v-on:click="openModal">
                    <img src="../assets/images/medical_main.png">
                    <p>個人制作のwebサイト</p>
                </div>
                <div class="main__contents--text01" v-show="showContent" v-on:click="closeModal">
                    <p>架空の病院のwebサイトです。<br>HTML/CSS/Javascriptを用いて作成しています。</p>
                    <p>地図の挿入や問い合わせフォームは自身で調べながら作成しました。</p>
                    <p>jQueryを用いてフェードインの機能を実装しています。</p>
                    <p>制作にかかった時間は約12時間です。(HTML：4時間、CSS：4.5時間、js：3.5時間)</p>
                    <a href="workContents_hospital/index.html">CRI病院のwebサイト</a>

                </div>
                <div class="main__contents--overlay" v-show="showContent" v-on:click="closeModal"></div>
            </div>
            <div class="main__contents">
                <div class="main__contents--item02" v-on:click="openModal">
                    <img src="../assets/images/cafe_main.jpg">
                    <p>個人制作のwebサイト</p>
                </div>
                <div class="main__contents--text02"  v-show="showContent" v-on:click="closeModal">
                    <p>架空のカフェのwebサイトです。<br>HTML/CSS/Javascriptを用いて作成しています。</p>
                    <p>地図の挿入や問い合わせフォームは自身で調べながら作成しました。<br>また、カレンダーも調べながら作成しました。</p>
                    <p>jQueryを用いてフェードインやスライドの機能を実装しています。<br>スライドの機能はslickを使用し、手動でスライドする画面と自動でスライドする画面両方を実装しました。</p>
                    <p>制作にかかった時間は約14時間です。(HTML：4時間、CSS：5.5時間、js：4.5時間)</p>
                    <a href="workContents_cafe/index.html">CRIカフェのwebサイト</a>
                </div>
                <div class="main__contents--overlay" v-show="showContent" v-on:click="closeModal"></div>
            </div>
            <div class="main__contents">
                <div class="main__contents--link">
                    <li><router-link to="/works">view more</router-link></li>
                </div>
            </div>
        </main>
</template>

<script>
export default {
  name: 'MainMenu',
  data() {
    return {showContent01: false}
  },
  methods:{
    openModal(){
        this.showContent01 = true
    },
    closeModal(){
        this.showContent = false
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
            position: fixed;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
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
        &--overlay{ /*背景*/
            // display: none;
            // position: fixed;
            // top: 0;
            // left: 0;
            // width: 100%;
            // height: 120%;
            // background-color: rgba(0, 0, 0, 0.5);
            // z-index: 99;

            // 要素を重ねた時の順番
            z-index: 99;

            // 画面全体を覆う設定
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,0.5);

            // 画面の中央に要素を表示させる設定
            // display: flex;
            // align-items: center;
            // justify-content: center;
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