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
                <p>静岡県出身。神奈川県在住。<br>大学卒業後、地元の公立こども園で3年間保育士として働く。<br>結婚を機に退職し、職業訓練校でプログラミングの基礎等を学び、株式会社CRIに入社。</p><p>現在は外ではエンジニア、家では一児の母。<br>思い描いたものを形にすることや、<br>興味があるものを追求することが好き。<br>フロントエンドエンジニアとしてWebシステムの開発やWeb制作に携わることを目標に<br>育児の傍らで日々勉強中。</p>
            </div> 
        </div>
        <transition>
            <div class="fadeInAfter" :class="{fadeIn:visible}">
                <div class="main__carrer">
                    <div class="main__title">
                        <h3>Carrer</h3>
                    </div>
                    <div class="main__carrerItem">
                        <div class="main__carrerItemSummary">
                            <p>2023.04～ | 産休・育休中</p>
                        </div>
                        <div class="main__carrerItemDetail">
                            <p>第一子妊娠・出産に伴い、休暇取得中です。<br>復帰後もスキルアップできるよう、育児の合間を縫って勉強中です。</p>
                        </div>
                    </div>
                    <div class="main__carrerItem">
                        <div class="main__carrerItemSummary">
                            <p>2022.10～2023.03 | 大手広告会社にてWebディレクターを務める</p>
                        </div>
                        <div class="main__carrerItemDetail">
                            <p>大型案件のディレクションに携わっていました。<br>バナー・LP制作の進行管理や提案書作成等を担当、<br>スケジュール管理を担当し、制作会社への指示やデータ納品等を行っていました。<br>ディレクション業務が未経験だったため自身でも日々勉強をし、<br>チームが円滑に制作を進められるように意識して業務に取り組みました。</p>
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
                                <p>Web制作の案件を多く扱っている点や、社内勉強会のカリキュラムが豊富な点に興味をもち、入社しました。</p>
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
        </transition>
        <transition>
            <div class="fadeInAfter" :class="{fadeIn:visible2}">
                <div class="main__skills">
                    <div class="main__title">
                        <h3>Skills</h3>
                    </div>
                    <div class="main__skillsList--accordion">
                        <AccordionMenu>
                            <div slot="title">HTML/CSS</div>
                            <div class="main__skillsList--content" slot="content">
                                <p>デザインに沿った静的ページのコーディング<br>CSSアニメーション（調べながらであれば可）</p>
                            </div>
                        </AccordionMenu>
                        <AccordionMenu>
                            <div slot="title">JavaScript</div>
                            <div class="main__skillsList--content" slot="content">
                                <p>メソッドを利用したコーディング<br>Vue.jsを用いたコーディング</p>
                            </div>
                        </AccordionMenu>
                        <AccordionMenu>
                            <div slot="title">WordPress/PHP</div>
                            <div class="main__skillsList--content" slot="content">
                                <p>インストールおよび初期設定<br>既存のページに追加するページ作成</p>
                            </div>
                        </AccordionMenu>
                        <AccordionMenu>
                            <div slot="title">Java (Servlet/jsp)</div>
                            <div class="main__skillsList--content" slot="content">
                                <p>データベースを用いた簡易なアプリケーションの作成<br>設計図を見ながらのコーディング</p>
                            </div>
                        </AccordionMenu>
                        <AccordionMenu>
                            <div slot="title">My SQL</div>
                            <div class="main__skillsList--content" slot="content">
                                <p>コードの内容理解<br>データベース作成（調べながらであれば可）</p>
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
                                <p>ITパスポート(2020年8月取得)<br>Webクリエイター能力認定試験エキスパート(2021年3月取得)<br>基本情報技術者試験(2021年10月取得)<br>HTML5 プロフェッショナル認定試験レベル1(2023年10月取得)</p>
                            </div>
                        </AccordionMenu>
                    </div>
                </div>           
            </div>
        </transition>
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
                this.visible = window.scrollY > 100;
            }
            if (!this.visible2) {
                this.visible2 = window.scrollY > 800;
            }
        },
    }
}

</script>

<style lang="scss" scoped >
.main{
    width: 85%;
    margin: 0 auto;
    @include mq('max','lg') {
        width: 100%;
    }
    &__title{
        text-align: center;
        @include mq('max','md') {
            margin: 5px auto 20px;
        }
        h2{
            margin: 10px auto 60px;
            @include mq('max','md') {
                margin: 10px auto 20px;
                padding: 5px;
                @include mq('max','md') {
                }
            }
        }
        h3{
            text-align: center;
            margin: 20px auto;
            @include mq('max','md') {
                margin: 0 auto;
                text-align: center;
            }
        }
    }
    &__profile{
        margin: 0 auto 60px;
        width: 90%;
        display: flex;
        justify-content: space-around;
        @include mq('max','lg') {
            width: 100%;
            flex-direction: column;
            text-align: center;
        }
    }
    &__profileImage{
        flex: 1;
        @include mq('max','md') {
            margin: 0 auto;
        }
        img{
            width: 450px;
            height: 330px;
            @include mq('max','md') {
                width: 300px;
                height: 200px;
            }
            @include mq('max','sm') {
                width: 200px;
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
            @include mq('max','md') {
                margin: 0 auto;
                width: 100%;
                font-size: 12px;
                text-align: center;
            }
            @include mq('max','md') {
                font-size: 8px;
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
            @include mq('max','sm') {
                font: normal 12px sans-serif; 
            }           
        }

    }
    &__carrer{
        width: 85%;
        margin: 0 auto;
        @include mq('max','lg') {
            width: 100%;
            margin: 30px auto;
        }
    }
    &__carrerItem{
        width: 800px;
        margin: 0 auto;
        @include mq('min-max','md','lg') {
            width: 730px;
        }
        @include mq('max','md') {
            width: 500px;
        }
        @include mq('max','sm') {
            width: 100%;
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
                width: 50px;
                height: 50px;
                background-size: contain;
            }
            @include mq('max','sm') {
                width: 40px;
                height: 40px;
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
                max-width: 350px;
                border-radius: 6px;
                font-size: 10px;
            }
            @include mq('max','sm') {
                max-width: 200px;
                font-size: 8px;
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
                max-width: 350px;
                border-radius: 6px;
                background: #6C8783;
                font-size: 10px;
            }
            @include mq('max','sm') {
                max-width: 270px;
                font-size: 8px;
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
                width: 50px;
                height: 50px;
                background-size: contain;
            }
            @include mq('max','sm') {
                width: 40px;
                height: 40px;
            }
        }
    }
    &__moreInfoButton{
        margin: 0 auto 100px;
        text-align: center;
        cursor: pointer;
        @include mq('max','md') {
            margin: 0 auto 40px;
        } 
        p{
            position: relative;
            display: inline-block;
            text-decoration: none;
            @include mq('max','md') {
                font-size: 15px;
            }
            @include mq('max','sm') {
                font-size: 10px;
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
        margin: 100px auto;
        @include mq('max','lg') {
            width: 100%;
            margin: 30px auto 60px;
        } 
    }
    &__skillsList{
        &--content{
            @include mq('max','md') {
                font-size: 12px;
            } 
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