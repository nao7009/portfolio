// Works.vue
<template>
    <div class="works">
        <MyHeader/>
        <main class="works">
            <div class="works__title">
                <h2>Works</h2>
                <p>個人で作成した物や会社のカリキュラムで作成したWebサイトをご紹介します。</p>
            </div>
            <ModalItem :modalItems="modalItems[0]" />
            <div class="fadeInAfter" :class="{fadeIn:visible}">
              <ModalItem :modalItems="modalItems[1]" />
              <ModalItem :modalItems="modalItems[2]" />
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
          modalTtl: "CRI病院",
          modalContent: "架空の病院のwebサイトです。HTML/CSS/Javascriptを用いて作成しています。地図の挿入や問い合わせフォームは自身で調べながら作成しました。jQueryを用いてフェードインの機能を実装しています。",
          modalTime: "制作時間：約16時間(HTML：6時間、CSS：5.5時間、js：4.5時間)",
          modalImage: require('@/assets/images/medical_main.jpg'),
          // modalLink: "./workContents_hospital/index.html",
          modalLink: "https://nao7009.github.io/cri_hospital/",
        },
        {
          modalTtl: "CRIカフェ",
          modalContent: "架空のカフェのwebサイトです。HTML/CSS/Javascriptを用いて作成しています。地図の挿入や問い合わせフォームは自身で調べながら作成しました。また、カレンダーも調べながら作成しました。jQueryを用いてフェードインやスライドの機能を実装しています。スライドの機能はslickを使用し、手動でスライドする画面と自動でスライドする画面両方を実装しました。",
          modalTime:"制作時間：約16時間(HTML：6時間、CSS：5.5時間、js：4.5時間)",
          modalImage: require('@/assets/images/cafe_main.jpg'),
          // modalLink: "./workContents_cafe/index.html",
          modalLink: "https://nao7009.github.io/cri_cafe/",
        },
                {
          modalTtl: "CRIレストラン",
          modalContent: "レストランのwebページです。社内勉強会のカリキュラムでHTML/CSS/jsについて学習し、「実際にコーディングを行ってwebサイトを作成する」という課題で作成しました。HTML/CSS/Javascriptを用いて作成しています。CSSはSCSSで記述し、レスポンスコーディングにも対応しています。SNSの投稿記事を掲載している部分にjQueryでスライドを付けました。",
          modalTime:"制作時間：約13時間(HTML：4時間、CSS：5時間、js：4時間)",
          modalImage: require('@/assets/images/mv.jpg'),
          modalLink: "./workContents_restaurant/index.html",
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
    &__title{
        text-align: center;
        h2{
            font-size: 30px;
            @include mq('max','md') {
                margin-left: 5px;
                padding: 5px;
                font: normal 20px sans-serif;
            }
        }
        p{
            font: normal 15px sans-serif;
            @include mq('max','md') {
                margin: 5px;
                padding: 5px;
                font: normal 10px sans-serif;
            }
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
    transform: translateY(100px);
    transition-duration:.7s;
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
    transition-duration:.7s;
  }
}
//フェードインを1度で終わらせるために設定
.fadeInAfter {
    opacity: 0;
}
</style>