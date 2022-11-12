// Contact.vue
<template>
    <div class="contact">
        <MyHeader/>
        <main class="main">
            <div class="main__title">
                <h2>CONTACT</h2>
            </div>
            <div class="main__contents">
                <div class="main__contents--form">
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
                                <th><label for="remarks">備考：</label></th>
                                <td><textarea name="remarks"></textarea></td>
                            </tr>
                            <th></th>
                            <td>
                                <input type="submit" name="button" value="送信">
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
        &--form{
            p{
                text-align: center;
                font: normal 15px sans-serif;
                color: #555;
                @include mq('max','md') {
                    font: normal 12px sans-serif;
                }
            }
            table{
                margin: 0 auto;
                @include mq('max','md') {
                    width: 100%;
                }
                th, td{
                    padding: 10px;
                }
            }
            th{
                padding-right: 10px;
                text-align: right;
                font: normal 15px sans-serif;
                color: #555;
                vertical-align: top;
                @include mq('max','md') {
                    font: normal 10px sans-serif;
                    color: #555;
                }
            }
            textarea{
                resize: none;
                width: 300px;
                height: 150px;
                border-radius: 10px;
                @include mq('max','md') {
                    font: normal 10px sans-serif;
                    width: 150px;
                    height: 70px;
                }
            }
        }
    }
}

</style>