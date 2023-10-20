// Contact.vue
<template>
    <div class="contact">
        <MyHeader/>
        <main class="contact">
            <div class="contact__title">
                <h2>Contact</h2>
            </div>
            <div class="contact__contents">
                <div class="contact__form">
                    <p>お問い合わせはこちらからお願いします。</p>
                    <form action="" method="post">
                        <table>
                            <tr>
                                <th><label for="name">お名前（必須）：</label></th>
                                <td><input type="text" name="name" id="name" required></td>
                            </tr>
                            <tr>
                                <th><label for="name">メールアドレス：</label></th>
                                <td><input type="text" name="mail" id="mail" required></td>
                            </tr>
                            <tr>
                                <th><label for="tel">電話番号：</label></th>
                                <td><input type="text" name="tel" id="tel" required></td>
                            </tr>
                            <tr>
                                <th><label for="inquiry">問い合わせ内容（必須）：</label></th>
                                <td>
                                    <select name="inquiry">
                                        <option value="select" selected>--選択してください--</option>
                                        <option value="question">ご質問</option>
                                        <option value="opinion">ご意見・ご感想</option>
                                        <option value="others">その他</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <th><label for="remarks">メッセージ本文：</label></th>
                                <td><textarea name="remarks"></textarea></td>
                            </tr>
                            <th></th>
                            <td>
                                <input type="submit" name="button" value="送信" class="button">
                            </td>
                            <tr>
                            </tr>
                        </table>                     
                    </form>
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
  name: 'ContactForm',
    components: {
    MyHeader,
    MyFooter,
  }
}
</script>

<style lang="scss" scoped>
.contact{
    width: 100%;
    margin: 0 auto;
    @include mq('max','md') {
    }
    &__title{
        text-align: center;
        @include mq('max','md') {
        }
        h2{
            margin: 10px auto 40px;
            @include mq('max','md') {
                margin: 10px auto 20px;
                padding: 5px;
            }
        }
    }
    &__form{
        width: 85%;
        margin: 20px auto 0;
        @include mq('max','md') {
            width: 100%;
        }
        p{
            text-align: center;
            color: #555;
            @include mq('max','md') {
            }
        }
        table{
            margin: 0 auto;
            @include mq('max','md') {
                width: 100%;
            }
            th, td{
                padding: 10px;
                @include mq('max','md') {
                }
                @include mq('max','sm') {
                    padding: 8px;
                }
            }
        }
        th{
            padding-right: 10px;
            text-align: right;
            font: normal 15px sans-serif;
            color: #555;
            vertical-align: top;
            @include mq('max','md') {
                font: normal 12px sans-serif;
            }
            @include mq('max','sm') {
                font: normal 10px sans-serif;
            }
        }
        textarea{
            resize: none;
            width: 500px;
            height: 300px;
            border-radius: 10px;
            padding: 20px;
            @include mq('max','md') {
                padding: 10px;
                width: 250px;
                height: 150px;
            }
            @include mq('max','sm') {
                padding: 10px;
                width: 180px;
                height: 120px;
            }
        }
    }
}
.button{
    display: inline-block;
    width: 60px;
    height: 40px;
    border-radius: 10%;
    font-size: 15px;
    background-color: #999;
    border: none;
    color: #fff;
    @include mq('max','md') {
        font-size: 12px;
    }
    @include mq('max','sm') {
        width: 40px;
        height: 30px;
        font-size: 10px;
    }
}

</style>