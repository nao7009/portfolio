// Profile.vue
<template>
    <div class="profile">
        <MyHeader/>
       <main class="main">
            <div class="main__title">
                <h2>PROFILE</h2>
            </div>
            <div class="main__contents">
                <div class="main__contents--image">
                    <img src="../assets/images/work.png">
                </div> 
                <div class="main__contents--profile">
                    <h3>Nao Shimojo</h3>
                    <p>静岡県出身。<br>大学卒業後に保育士として静岡市の公立保育園に3年務める。<br>
                    結婚を機に転職。エンジニアを志し、職業訓練校で半年間プログラミングを学んだのち、CRIに入社。<br>
                    現在は官公庁システムの運用保守を担当。</p>
                </div> 
                <div class="main__contents--skills">
                    <h3>SKILLS</h3>
                    <ul>
                        <li>HTML/CSS<br>デザインに沿った静的ページのコーディング、CSSアニメーション（調べながらであれば可）</li>
                        <li>WordPressを使用したwebページ制作(PHP)<br>インストールおよび初期設定、既存のページに追加するページ作成</li>
                        <li>Java(Servlet/jsp)<br>データベースを用いた簡易なアプリケーションの作成、設計図を見ながらのコーディング</li>
                        <li>SQL<br>コードの内容理解、データベース作成（調べながらであれば可）</li>
                        <li>Word<br>書類作成</li>
                        <li>Excel<br>資料作成（計算、関数など）</li>
                        <li>PowerPoint<br>スライド作成（アニメーション付け可）</li>
                    </ul>
                </div>       
            </div>
        </main>
    <MyFooter/>
    </div>
</template>

<script>
import MyHeader from '@/components/MyHeader.vue'
import MyFooter from '@/components/MyFooter.vue'

export default {
  name: 'MyProfile',
    components: {
    MyHeader,
    MyFooter,
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
        &--profile{
            width: 85%;
            margin: 0 auto;
            @include mq('max','md') {
                margin-top: 15px;
                width: 100%;
            }
            p{
                font: normal 15px sans-serif;
                color: #555;
                width: 80%;
                margin: 0 auto;
                @include mq('max','md') {
                    margin: 0 auto;
                    width: 100%;
                    font: normal 11px sans-serif;
                    text-align: center;
                }
            }
            h3{
                margin-top: 15px;
                margin-left: 100px;
                font: normal 18px sans-serif;
                @include mq('max','md') {
                    margin: 0 auto;
                    text-align: center;
                    font: normal 15px sans-serif; 
                }            
            }
        }
        &--image{
            width: 500px;
            height: 335px;
            margin: 0 auto;
            @include mq('max','md') {
                width: 250px;
                height: 150px;
                margin: 0 auto;
            }
            img{
                width: 100%;
                height: 100%;
            }        
        }
        &--skills{
            width: 85%;
            margin: 0 auto;
            @include mq('max','md') {
                width: 100%;
            }
            h3{
                margin-top: 30px;
                margin-left: 100px;
                font: normal 18px sans-serif;
                @include mq('max','md') {
                    margin: 0 auto;
                    text-align: center;
                    font: normal 15px sans-serif;
                }
            }
            ul{
                margin: 0 auto;
                font: normal 15px sans-serif;
                color: #555;
                width: 80%;
                @include mq('max','md') {
                    width: 95%;
                    padding-top: 0;
                }
                li{
                    list-style-image: url(../assets/images/triangle.png);
                    @include mq('max','md') {
                        font-size: 10px;
                        margin: 5px;
                        padding: 5px; 
                    }
                }
            }
        }
    }
}

</style>