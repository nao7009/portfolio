// Main.vue
<template>
        <main class="main">
            <div class="main__title">
                <h2>PORTFOLIO SITE</h2>
            </div>
            <div class="main__contents">
                <div class="main__contents--image">
                    <img src="../assets/images/work.png">
                </div>
                <div class="main__contents--text">
                    <h3>Nao Shimojo</h3>
                    <p>静岡県出身。神奈川県在住。<br>外ではエンジニア、家では一児の母。<br>思い描いたものを形にすることや、興味があるものを追求することが好き。<br>フロントエンドエンジニアとしてWeb制作に携わることを目標に、業務の傍らで日々勉強中。</p>
                </div> 
            </div>
            <div class="main__carrer">
                <div class="main__carrer--title">
                    <h3>Carrer</h3>
                </div>
                <div class="main__carrer--itemSummary">
                    <p>2022.10～ | 大手企業にてWebディレクターを務める</p>
                </div>
                <div class="main__carrer--itemDetail">
                    <p>2022.10～ | 大手企業にてWebディレクターを務める</p>
                </div>
                <div class="main__carrer--itemSummary">
                    <p>2021.08～2022.09 | 官公庁システムの運用・保守</p>
                </div>
                <div class="main__carrer--itemDetail">
                    <p>2022.10～ | 大手企業にてWebディレクターを務める</p>
                </div>
                <div class="main__carrer--itemSummary">
                    <p>2021.06～2021.07 | オウンドメディアのサイト制作</p>
                </div>
                <div class="main__carrer--itemDetail">
                    <p>2022.10～ | 大手企業にてWebディレクターを務める</p>
                </div>
                <div class="main__carrer--itemSummary">
                    <p>2020.12～2021.06 | 新入社員研修のJava講師</p>
                </div>
                <div class="main__carrer--itemDetail">
                    <p>2022.10～ | 大手企業にてWebディレクターを務める</p>
                </div>
                <div class="main__carrer--itemSummary">
                    <p>2020.12 | 株式会社クリエイティブリソースインスティチュートに入社</p>
                </div>
                <div class="main__carrer--itemDetail">
                    <p>2022.10～ | 大手企業にてWebディレクターを務める</p>
                </div>
                <div class="main__carrer--itemSummary">
                    <p>2020.04~2020.12 | 結婚を機にキャリアチェンジ</p>
                </div>
                <div class="main__carrer--itemDetail">
                    <p>2022.10～ | 大手企業にてWebディレクターを務める</p>
                </div>
                <div class="main__carrer--itemSummary">
                    <p>2017.04～2020.03 | 大学卒業後、保育士として働く</p>
                </div>
                <div class="main__carrer--itemDetail">
                    <p>2022.10～ | 大手企業にてWebディレクターを務める</p>
                </div>               
            </div>
            <div class="main__contents">
                <div class="main__contents--skills">
                    <h3>Skills</h3>
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
</template>

<script>

export default {
  name: 'MyProfile',
}

</script>

<style lang="scss" scoped>
.main{
    &__title{
        text-align: center;
        margin: 10px auto 40px;
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
        margin: 50px auto;
        display: flex;
        @include mq('max','md') {
            width: 100%;
            display: block;
        }
        &--image{
            flex: 1;
            @include mq('max','md') {
                width: 250px;
                height: 150px;
                margin: 0 auto;
            }
            img{
                width: 450px;
                height: 330px;
                @include mq('max','md') {
                width: 250px;
                height: 150px;
            }
            }        
        }
        &--text{
            margin: 0 auto;
            flex: 1;
            @include mq('max','md') {
                margin-top: 15px;
                width: 100%;
            }
            p{
                font: normal 15px sans-serif;
                color: #555;
                margin: 0 10px;
                width: 80%;
                @include mq('max','md') {
                    margin: 0 auto;
                    width: 100%;
                    font: normal 11px sans-serif;
                    text-align: center;
                }
            }
            h3{
                margin: 0 10px;
                padding: 10px;
                font: normal 18px sans-serif;
                @include mq('max','md') {
                    margin: 0 auto;
                    text-align: center;
                    font: normal 15px sans-serif; 
                }            
            }

        }
        &--skills{
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
    &__carrer{
            margin: 0 auto;
            @include mq('max','md') {
                width: 100%;
            }
            &--title{
                h3{
                    text-align: center;
                    font: normal 18px sans-serif;
                        @include mq('max','md') {
                        margin: 0 auto;
                        text-align: center;
                        font: normal 15px sans-serif;
                        }
                    }
            }
        &--itemSummary{ 
            width: 85%;
            margin: 1.5em auto;
            overflow: hidden;
            display: flex;
            align-items: center;
            @include mq('max','md') {
            }
            &:before{
                content: "";
                background: url(../assets/images/triangle.png) no-repeat center;
                display: inline-block;
                width: 80px;
                height: 80px;
                border: solid 3px #d7ebfe;
                border-radius: 50%;
            }
            p{
                margin: 0;
                padding: 0;
                display: inline-block;
                position: relative; 
                margin: 5px 0 0 40px;
                padding: 17px 13px;
                border-radius: 12px;
                background: #d7ebfe;
                &:after{
                    content: "";
                    display: inline-block;
                    position: absolute;
                    top: 18px; 
                    left: -24px;
                    border: 12px solid transparent;
                    border-right: 12px solid #d7ebfe;
                } 
            }
        }
        &--itemDetail{
            width: 85%;
            margin: 1.5em auto;
            overflow: hidden;
            display: flex;
            align-items: center;
            @include mq('max','md') {
            }
            p{
                display: inline-block;
                position: relative; 
                margin: 0 40px 0 0;
                padding: 8px;
                // max-width: 250px;
                border-radius: 12px;
                background: #30e852;
                font-size: 15px;
                &:after{
                    content: "";
                    position: absolute;
                    top: 3px; 
                    right: -19px;
                    border: 8px solid transparent;
                    border-left: 18px solid #30e852;
                    -webkit-transform: rotate(-35deg);
                    transform: rotate(-35deg);
                    @include mq('max','md') {
                    }
                } 
            }
            &:after{
                content: "";
                background: url(../assets/images/triangle.png) no-repeat center;
                display: inline-block;
                width: 80px;
                height: 80px;
                border: solid 3px #d7ebfe;
                border-radius: 50%;
                @include mq('max','md') {
                }
            }
        }
    }
}
</style>