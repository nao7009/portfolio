// Works.vue
<template>
    <div class="works">
        <MyHeader/>
        <main class="works">
            <div class="works__title">
              <h2>Works</h2>
            </div>
            <div class="works__personal">
              <h3>personal</h3>
              <p>個人や会社のカリキュラムで作成した物をご紹介します。</p>
              <div class="works__websites">
                <h3>websites</h3>
                <div class="works__items">
                  <ModalItem :modalItems="modalItems[0]" />
                  <ModalItem :modalItems="modalItems[1]" />
                  <ModalItem :modalItems="modalItems[2]" />
                </div>
              </div>
              <div class="works__applications">
                <h3>applications</h3>
                <div class="works__items">
                  <ModalItem :modalItems="modalItems[3]" />
                  <ModalItem :modalItems="modalItems[4]" />
                </div>
              </div>
            </div>
            <hr>
            <div class="works__buisiness">
              <h3>buisiness</h3>
              <p>業務で制作したサイトや広告をご紹介します。</p>
            <div class="works__items">
              <ModalItem :modalItems="modalItems[5]" />
              <ModalItem :modalItems="modalItems[6]" />
              </div>
              <div class="works__advertisement">
                <p>大手クライアントのバナー・LP制作のディレクションにも<br>関わらせていただきました。</p>
                <div class="works__advertisementImage">
                  <img src="../assets/images/9ec80fdd5318f8e17dd23ade5ad90bbf.w3000.h600._CR0,0,3000,600_SX3000_.jpg">
                </div>
              </div>
            </div>
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
      visible: false,
      modalItems: [
        {
          modalTitle: "CRIクリニック",
          modalContent: "Vueのコンポーネントを用いて架空の病院のwebサイトを作成しました。地図の挿入や問い合わせフォームは自身で調べながら作成しました。親しみをもてるよう、優しい色合いでサイトを制作することを意識しました。",
          modalLanguage: "使用言語及びフレームワーク:HTML/CSS/Vue.js",
          modalTime: "制作時間:約25時間(HTML:6時間、CSS:5.5時間、js:4.5時間（Vue.jsを用いた実装:9時間）)",
          modalImage: require('@/assets/images/medical_main.jpg'),
          modalLink: "https://nao7009.github.io/cri_hospital/",
        },
        {
          modalTitle: "CRIカフェ",
          modalContent: "Vueのコンポーネントを用いて架空のカフェのwebサイトを作成しました。トップページのカルーセルや、予約ページのカレンダーはコンポーネントで分けました。カルーセルやカレンダー等の機能は元々jQueryで実装していましたが、Vue.jsではコードの書き方が異なるため自身で調べながら作成しました。",
          modalLanguage: "使用言語及びフレームワーク:HTML/CSS/Vue.js",
          modalTime:"制作時間:約25時間(HTML:6時間、CSS:5.5時間、js:4.5時間（Vue.jsを用いた実装:9時間）)",
          modalImage: require('@/assets/images/cafe_main.jpg'),
          modalLink: "https://nao7009.github.io/cri_cafe/",
        },
                {
          modalTitle: "CRIレストラン",
          modalContent: "架空のレストランの静的ページのコーディングを行いました。社内勉強会のカリキュラムでHTML/CSS/jsについて学習し、「実際にコーディングを行ってwebサイトを作成する」という課題で作成しました。レスポンスコーディングにも対応しています。SNSの投稿記事を掲載している部分にjQueryでスライドを付けました。",
          modalLanguage: "使用言語及びフレームワーク:HTML/CSS(SCSSで記述)/Javascript(jQuery使用)",
          modalTime:"制作時間:約13時間(HTML:4時間、CSS:5時間、js:4時間)",
          modalImage: require('@/assets/images/mv.jpg'),
          modalLink: "./workContents_restaurant/index.html",
        },
        {
          modalTitle: "メモアプリ",
          modalContent: "Webアプリケーションの作成の練習として、メモアプリを作成しました。メモの作成・保存・削除と基本機能を備えています。",
          modalLanguage: "使用言語及びフレームワーク:HTML/CSS/Javascript",
          modalTime:"制作時間:約5時間(HTML:1時間、CSS:1.5時間、js:2.5時間)",
          modalImage: require('@/assets/images/memoApp.png'),
          modalLink: "https://github.com/nao7009/memoApp",
        },
        {
          modalTitle: "カロリー計算アプリ",
          modalContent: "スターバックスのドリンクのカロリーを計算するアプリです。ドリンクとカスタマイズを選択すると合計カロリーが算出される仕様です。選択したアイテムのカロリーを数値型の値で関数に渡して計算しています。",
          modalTime:"制作時間:約20時間",
          modalLanguage: "使用言語及びフレームワーク:Nuxt3",
          modalImage: require('@/assets/images/calorie-app.png'),
          modalLink: "https://nao7009.github.io/calorie-app/",
        },
        {
          modalTitle: "タクシードライバーのオウンドメディア",
          modalContent: "タクシードライバーの求人サイトの制作案件に関わりました。WordPressを使用した各ページの記事作成、XDのデザインに基づいたトップページのコーディング修正を担当しました。",
          modalTime:"制作時間:約250時間(記事作成:200時間、コーディング修正:50時間)",
          modalImage: require('@/assets/images/taxi_main.png'),
          modalLink: "https://recruit.way-taxi.net/",
        },
        {
          modalTitle: "SUNDAI Diverse",
          modalContent: "「高3からの地方国公立大合格を目指す」をコンセプトにした、駿台の事業です。LPのワイヤーフレーム制作や、Webサイト制作のガイドライン作成を担当しました。",
          modalImage: require('@/assets/images/SUNDAI_main.png'),
          modalLink: "https://www.sundai-diverse.jp/advertising/niigata/lp01.html#top",
        },
      ],
    }
  },
  created() {
      window.addEventListener("scroll", this.handleScroll);
    },
    destroyed() {
      window.removeEventListener("scroll", this.handleScroll);
    },
  methods:{
        open: function(){
            this.expand = true
        },
        close: function(){
            this.expand = false
        },
        handleScroll() {
            if (!this.visible) {
                this.visible = window.scrollY > 300;
            }else if(window.scrollY < 290){
                this.visible = !this.visible;
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.works{
  width: 100%;
  margin: 0 auto;
  @include mq('max','md') {
    }
    &__title{
        text-align: center;
        h2{
            margin: 10px auto 40px;
            @include mq('max','md') {
              margin: 10px auto 20px;
              padding: 5px;
            }
        }
        p{
            @include mq('max','md') {
                margin: 5px;
                padding: 5px;
            }
        }
    }
    &__items{
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }
    &__personal{
      text-align: center;
      margin: 0 auto;
      @include mq('max','md') {
      }
      p{
          @include mq('max','md') {
              margin: 5px;
              padding: 5px;
          }
        }
    }
    &__websites{
      margin: 50px auto 30px;
      @include mq('max','md') {
        margin: 25px auto 15px;
      }
      @include mq('max','sm') {
        margin: 10px auto 10px;
      }
    }
    &__applications{
      margin: 100px auto 30px;
      @include mq('max','md') {
        margin: 50px auto 15px;
      }
      @include mq('max','sm') {
        margin: 25px auto 10px;
      }
    }
    &__buisiness{
      text-align: center;
      margin: 60px auto 10px;
      @include mq('max','md') {
      }
      @include mq('max','sm') {
        margin: 30px auto 10px;
      }
      p{
          @include mq('max','md') {
              margin: 5px;
              padding: 5px;
          }
        }
    }
    &__advertisement{
      @include mq('max','md') {
      }
    }
    &__advertisementImage{
      width: 600px;
      margin: 0 auto;
      @include mq('max','md') {
        width: 400px;
      }
      @include mq('max','sm') {
        width: 250px;
      }
      img{
        width: 100%;
      }
    }
}
//フェードインに使用
.fadeIn {
  animation: fadeIn 2s;
  animation-fill-mode: forwards; //アニメーション終了後に@keyframes 100%の状態を使用
}
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(70px);
    transition-duration:.9s;
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
    transition-duration:.9s;
  }
}
//フェードインを1度で終わらせるために設定
.fadeInAfter {
    opacity: 0;
}
</style>