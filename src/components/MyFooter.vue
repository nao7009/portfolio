// MyFooter.vue
<template>
        <footer class="footer">
            <div class="fadeInAfter" :class="{fadeIn:visible}">
                <div class="footer__contents">
                    <div class="footer__contents--sns">
                        <ul>
                            <li><a href="https://twitter.com/?lang=ja"><img src="../assets/images/twitter.png"></a></li>
                            <li><a href="https://www.instagram.com/"><img src="../assets/images/instagram.png"></a></li>
                            <li><a href="https://ja-jp.facebook.com/"><img src="../assets/images/facebook.png"></a></li>
                        </ul>
                    </div>
                    <div class="footer__contents--top">
                        <a href="#"><img src="../assets/images/top.png"></a>
                    </div>               
                </div>
                <div class="footer__copy">
                    <p>© Shimojo-na 2022</p>
                </div>
            </div>
        </footer>
</template>

<script>
export default {
  name: 'MyFooter',
  data(){
    return{
        visible: false,
    };
  },
  created() {
      window.addEventListener("scroll", this.handleScroll);
    },
    destroyed() {
      window.removeEventListener("scroll", this.handleScroll);
    },
  methods:{
        handleScroll() {
            if (!this.visible) {
                this.visible = window.scrollY > 800;
            }else if(window.scrollY < 790){
                this.visible = !this.visible;
            }
        },
    }
}

</script>

<style lang="scss" scoped>
.footer{
    width: 85%;
    margin: 0 auto;
    @include mq('max','md') {
        width: 100%;
        padding: 5px;
    }
    &__contents{
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        border-top: 1px solid #777;
        &--sns{
            a{
                display: block;
            }
            ul{
                display: flex;
                align-items: center;
                @include mq('max','md') {
                    margin: 5px;
                }
                li{
                    display: flex;
                    align-items: center;
                    @include mq('max','md') {
                        width: 30px;
                        height: 30px;
                        margin: 5px;
                        padding: 5px;
                    }
                    img{
                        @include mq('max','md') {
                            width: 100%;
                            height: 100%;
                        }                      
                    }
                }
            }
        }
        &--top{
            z-index: 99;
            a{
                display: block;
                margin-top: 40px;
                width: 30px;
                height: 30px;
                img{
                    width: 100%;
                    height: 100%;
                    @include mq('max','md') {
                        width: 20px;
                        height: 20px;
                    }
                }
                @include mq('max','md') {
                    margin-top: 20px;
                }
            }
        }
    }
    &__copy{
        border-top: 1px solid #777;
        p{
            text-align: center;
            font: normal 12px sans-serif;
            color: #777;
            @include mq('max','md') {
                font: normal 10px sans-serif;
            }
        }
    }
}
//フッターのフェードインに使用
.fadeIn {
  animation: fadeIn 2s;
  animation-fill-mode: forwards; //アニメーション終了後に@keyframes 100%の状態を使用
}
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(200px);
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