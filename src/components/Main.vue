// Main.vue
<template>
        <main class="main">
            <div class="main__title">
                <h2>My Portfolio Site</h2>
            </div>
            <div class = main__title>
                <h3>About me</h3>
            </div>
            <div class="main__profile">
                <div class="main__profileImage">
                    <img src="../assets/images/profile.jpg">
                </div>
                <div class="main__profileText">
                    <h3>Nao Shimojo</h3>
                    <p>静岡県出身。神奈川県在住。<br>外ではエンジニア、家では一児の母。<br>思い描いたものを形にすることや、<br>興味があるものを追求することが好き。<br>フロントエンドエンジニアとしてWeb制作に携わることを目標に、<br>業務の傍らで日々勉強中。</p>
                </div> 
            </div>
            <div class="fadeInAfter" :class="{fadeIn:visible}">
                <div class="main__carrer">
                    <div class="main__title">
                        <h3>Carrer</h3>
                    </div>
                    <div class="main__carrerItem">
                        <div class="main__carrerItemSummary">
                            <p>2022.10～ | 大手企業にてWebディレクターを務める</p>
                        </div>
                        <div class="main__carrerItemDetail">
                            <p>大型案件のディレクション業務に携わり、<br>バナーやLP制作の進行管理や提案書作成等を担当しています。<br>ディレクターについて自身でも日々勉強中です。</p>
                        </div>
                    </div>
                    <div class="main__carrerItem">
                        <div class="main__carrerItemSummary">
                            <p>2021.08～2022.09 | 官公庁システムの運用・保守</p>
                        </div>
                        <div class="main__carrerItemDetail">
                            <p>Windows端末の緊急性の高いパッチ適用やWAF、Windowsサーバのアップデート、利用機関のDNSやメールの設定変更を担当していました。<br>正確性が問われる作業だったので、常にペア間で確認を怠らずに検証やリリースを行っていました。<br>また、スケジュールを常に把握し作業が滞ることなく進められるように配慮をしていました。<br><br>環境：Windows、Linux<br>使用ツール：teraterm、SKYSEA、WSUS、IIS、VMware、Citrixなど</p>
                        </div>
                    </div>
                    <div class="main__moreInfoButton" v-if="!expand" @click="open">
                        <p>もっと見る</p>
                    </div>
                    <div v-if="expand">
                        <div class="main__carrerItem">
                            <div class="main__carrerItemSummary">
                                <p>2021.06～2021.07 | オウンドメディアのサイト制作</p>
                            </div>
                            <div class="main__carrerItemDetail">
                                <p>タクシードライバーのサイト制作を行いました。<br>作成されたコードの修正やWordPressを用いた記事作成、XDで作成されたデザインを基にしたコーディングなどを担当しました。<br>環境：Windows<br>使用言語：HTML、CSS、JavaScript、PHP<br><br>使用ツール：Visual Sudio Code、XAMPP、WordPress、XD、SourceTreeなど</p>
                            </div>
                        </div>
                        <div class="main__carrerItem">
                            <div class="main__carrerItemSummary">
                                <p>2020.12～2021.06 | 新入社員研修のJava講師</p>
                            </div>
                            <div class="main__carrerItemDetail">
                                <p>新入社員研修でサポート講師としてJavaの基礎(演算、メソッド、オブジェクト指向など)の学習サポートやServlet/jspを用いた管理なアプリケーション開発(ログイン、登録機能などが備わったもの)の指導を担当しました。<br>Zoomでのリモート研修で直接的な指導が難しかったため、初学者が理解しやすいよう資料を作成して説明したり個別の質問対応に応じたりして受講生のサポートを行っていました。<br>初学者が躓きやすいポイントを押さえて丁寧な説明を行うことを心掛けながら指導にあたりました。<br><br>環境：Windows<br>使用言語：Java、Servlet/jsp、MySQL<br>使用ツール：Ecripse</p>
                            </div>
                        </div>
                        <div class="main__carrerItem">
                            <div class="main__carrerItemSummary">
                                <p>2020.12 | 株式会社クリエイティブリソースインスティチュートに入社</p>
                            </div>
                            <div class="main__carrerItemDetail">
                                <p>Web制作の案件を多く扱っている点や社内勉強会のカリキュラムが豊富な点に<br>興味をもち、入社しました。</p>
                            </div>
                        </div>
                        <div class="main__carrerItem">
                            <div class="main__carrerItemSummary">
                                <p>2020.04~2020.12 | 結婚を機にキャリアチェンジ</p>
                            </div>
                            <div class="main__carrerItemDetail">
                                <p>職業訓練校で半年ほどJavaやHTML、CSS、Pythonなどの基礎について学びました。<br>実習ではデータベースと連携して社員のログインや登録機能などを備えたアプリケーションをチームで開発しました。<br>常にチーム間で進捗を把握しながら開発を進めていきました。<br>また、今後のスキルに活かせるようITパスポートやWebクリエイターの資格取得にも励みました。<br><br>環境：Windwos<br>使用言語：Java、Servlet/jsp、VBA、PHP、HTML、CSS、Python<br>使用ツール：Ecripse、MySQLなど</p>
                            </div>
                        </div>
                        <div class="main__carrerItem">
                            <div class="main__carrerItemSummary">
                                <p>2017.04～2020.03 | 大学卒業後、保育士として働く</p>
                            </div>
                            <div class="main__carrerItemDetail">
                                <p>地元である静岡市の公立保育園で正規職員として勤務していました。<br>0歳・1歳、2歳、4歳と幅広い年齢のクラスの担任を務めていました。<br>常に子どもや保護者の気持ちに寄り添ったコミュニケーションや保育者間での細かな連携を心がけていました。<br>子どもの命を預かる仕事なので常に責任感をもって保育を行っていました。<br>また、日々の保育と並行して指導計画やクラスだよりの作成、行事や教材準備などの作業も進めていました。<br>業務量が多かったため、仕事一つひとつの進捗状況を把握して期限内に完了することを意識していました。</p>
                            </div> 
                        </div>
                        <div class="main__moreInfoButton" @click="close">
                            <p>閉じる</p>
                        </div> 
                    </div>  
                </div>
            </div>
            <div class="fadeInAfter" :class="{fadeIn:visible2}">
                <div class="main__skills">
                    <div class="main__title">
                        <h3>Skills</h3>
                    </div>
                    <div class="main__skillsList--accordion">
                        <AccordionMenu>
                            <div slot="title">HTML/CSS</div>
                            <div class="main__skillsList--content" slot="content">
                                <p>デザインに沿った静的ページのコーディング、CSSアニメーション（調べながらであれば可）</p>
                            </div>
                        </AccordionMenu>
                        <AccordionMenu>
                            <div slot="title">WordPress/PHP</div>
                            <div class="main__skillsList--content" slot="content">
                                <p>インストールおよび初期設定、既存のページに追加するページ作成</p>
                            </div>
                        </AccordionMenu>
                        <AccordionMenu>
                            <div slot="title">Java (Servlet/jsp)</div>
                            <div class="main__skillsList--content" slot="content">
                                <p>データベースを用いた簡易なアプリケーションの作成、設計図を見ながらのコーディング</p>
                            </div>
                        </AccordionMenu>
                        <AccordionMenu>
                            <div slot="title">My SQL</div>
                            <div class="main__skillsList--content" slot="content">
                                <p>コードの内容理解、データベース作成（調べながらであれば可）</p>
                            </div>
                        </AccordionMenu>
                        <AccordionMenu>
                            <div slot="title">Word</div>
                            <div class="main__skillsList--content" slot="content">
                                <p>書類作成（画像や表の挿入などは可）</p>
                            </div>
                        </AccordionMenu>
                        <AccordionMenu>
                            <div slot="title">Excel</div>
                            <div class="main__skillsList--content" slot="content">
                                <p>資料作成（計算・関数の挿入、グラフやチャートの挿入などは可）</p>
                            </div>
                        </AccordionMenu>
                        <AccordionMenu>
                            <div slot="title">PowerPoint</div>
                            <div class="main__skillsList--content" slot="content">
                                <p>スライド作成（アニメーション付け可）</p>
                            </div>
                        </AccordionMenu>
                        <AccordionMenu>
                            <div slot="title">Certification</div>
                            <div class="main__skillsList--content" slot="content">
                                <p>ITパスポート(2020年8月取得)<br>Webクリエイター能力認定試験エキスパート(2021年3月取得)<br>基本情報技術者試験(2021年10月取得)<br>AWS クラウドプラクティショナー(取得予定)</p>
                            </div>
                        </AccordionMenu>
                    </div>
                </div>           
            </div>
        </main>
</template>

<script>
import AccordionMenu from "@/components/Accordion"

export default {
  name: 'MyProfile',
  components: {
    AccordionMenu,
  },
  data(){
    return{
        expand:false,
        visible: false,
        visible2: false,
    };
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
            if (!this.visible2) {
                this.visible2 = window.scrollY > 750;
            }else if(window.scrollY < 740){
                this.visible2 = !this.visible2;
            }
        },
    }
}

</script>

<style lang="scss" scoped >
.main{
    &__title{
        text-align: center;
        @include mq('max','md') {
            margin: 5px auto 20px;
        }
        h2{
            font-size: 40px;
            margin: 10px auto 60px;
            @include mq('max','md') {
                margin-left: 5px;
                padding: 5px;
                font: normal 20px sans-serif;
                @include mq('max','md') {
                }
            }
        }
        p{
            font-size: 20px;
            @include mq('max','md') {
                margin: 5px;
                padding: 5px;
                font: normal 15px sans-serif;
                @include mq('max','md') {
                }
            }
        }
        h3{
        text-align: center;
        font-size: 30px;
        margin: 20px auto;
            @include mq('max','md') {
            margin: 0 auto;
            text-align: center;
            font: normal 15px sans-serif;
            }
        }
    }
    &__profile{
        margin: 0 auto 60px;
        width: 80%;
        display: flex;
        justify-content: space-around;
        @include mq('max','md') {
            margin: 0 auto 30px;
            width: 100%;
        }
    }
    &__profileImage{
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
    &__profileText{
        flex: 1;
        @include mq('max','md') {
            margin-top: 15px;
            width: 100%;
        }
        p{
            font-size: 15px;
            color: #555;
            margin: 0 10px;
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
            font-size: 20px;
            @include mq('max','md') {
                margin: 0 auto;
                text-align: center;
                font: normal 15px sans-serif; 
            }            
        }

    }
    &__carrer{
        @include mq('max','md') {
        }
    }
    &__carrerItem{
        width: 800px;
        margin: 0 auto;
        @include mq('max','md') {
            width: 350px;
        }
        &:after{
            display: block;
            content: "";
            clear: both;
        }
    }
    &__carrerItemSummary{ 
        margin: 10px auto;
        overflow: hidden;
        display: flex;
        align-items: center;
        float: left;
        @include mq('max','md') {
            margin: 5px auto;
        }
        &:before{
            content: "";
            background: url(../assets/images/pc.png) no-repeat center;
            display: inline-block;
            width: 80px;
            height: 80px;
            border: solid 3px #CAD4AC;
            border-radius: 50%;
            @include mq('max','md') {
                width: 40px;
                height: 40px;
                background-size: contain;
            }
        }
        p{
            margin: 0;
            padding: 0;
            display: inline-block;
            position: relative; 
            margin: 5px 0 0 40px;
            padding: 17px 13px;
            max-width: 600px;
            border-radius: 12px;
            background: #F5E8C7;
            font-size: 15px;
            @include mq('max','md') {
                margin: 5px 0 0 20px;
                padding: 8px 6px;
                max-width: 230px;
                border-radius: 6px;
                font-size: 10px;
            }
            &:after{
                content: "";
                display: inline-block;
                position: absolute;
                top: 18px; 
                left: -24px;
                border: 12px solid transparent;
                border-right: 12px solid #F5E8C7;
                @include mq('max','md') {
                    top: 9px; 
                    left: -12px;
                    border: 6px solid transparent;
                    border-right: 6px solid #F5E8C7;
                }
            } 
        }
    }
    &__carrerItemDetail{
        margin: 10px auto 60px;
        overflow: hidden;
        display: flex;
        float: right;
        @include mq('max','md') {
            margin: 5px auto 30px;
        }
        p{
            display: inline-block;
            position: relative; 
            margin: 0 40px 0 0;
            padding: 20px;
            max-width: 600px;
            border-radius: 12px;
            background: #6C8783;
            font-size: 15px;
            color: #fff;
            @include mq('max','md') {
                margin: 0 20px 0 0;
                padding: 10px;
                max-width: 270px;
                border-radius: 6px;
                background: #6C8783;
                font-size: 10px;
            }
            &:after{
                content: "";
                position: absolute;
                top: 15px; 
                right: -19px;
                border: 8px solid transparent;
                border-left: 18px solid #6C8783;
                -webkit-transform: rotate(-35deg);
                transform: rotate(-35deg);
                @include mq('max','md') {
                    top: 15px; 
                    right: -10px;
                    border: 4px solid transparent;
                    border-left: 9px solid #6C8783;
                    -webkit-transform: rotate(-20deg);
                    transform: rotate(-20deg);
                }
            } 
        }
        &:after{
            content: "";
            background: url(../assets/images/finger.png) no-repeat center;
            display: inline-block;
            width: 80px;
            height: 80px;
            border: solid 3px #CAD4AC;
            border-radius: 50%;
            @include mq('max','md') {
                width: 40px;
                height: 40px;
                background-size: contain;
            }
        }
    }
    &__moreInfoButton{
        margin: 0 auto 100px;
        text-align: center;
        cursor: pointer;
        @include mq('max','md') {
        } 
        p{
            position: relative;
            display: inline-block;
            text-decoration: none;
            @include mq('max','md') {
            }
            &:after{
                position: absolute;
                bottom: -4px;
                left: 0;
                content: '';
                width: 100%;
                height: 2px;
                background: #333;
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
    }
    &__skills{
        width: 85%;
        margin: 0 auto;
        @include mq('max','md') {
        } 
    }
    &__skillsList{
        &--content{
        }
    }
}
//Carrer,Skillsクラスのフェードインに使用
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