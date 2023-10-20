// MyFooter.vue
<template>
        <footer class="footer">
                <div class="footer__contents">
                    <div class="footer__contents--sns">
                        <ul>
                            <li><a href="https://github.com/nao7009"><img src="../assets/images/github.png"></a></li>
                        </ul>
                    </div>
                    <div class="footer__contents--top">
                        <a href="#"><img src="../assets/images/top.png"></a>
                    </div>               
                </div>
                <div class="footer__copy">
                    <small>&copy; Shimojo-na 2023</small>
                </div>
        </footer>
</template>

<script>
export default {
  name: 'MyFooter',
}

</script>

<style lang="scss" scoped>
.footer{
    width: 100%;
    margin: 0 auto;
    @include mq('max','md') {
        padding: 5px;
    }
    &__contents{
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        border-top: 1px solid #777;
        &--sns{
            ul{
                display: flex;
                align-items: center;
                @include mq('max','md') {
                    margin: 5px;
                }
                li{
                    display: block;
                    width: 50px;
                    height: 50px;
                    margin: 5px;
                    padding: 5px;
                    @include mq('max','md') {
                        width: 35px;
                        height: 35px;
                        margin: 5px;
                        padding: 5px;
                    }
                    @include mq('max','sm') {
                        width: 25px;
                        height: 25px;
                        margin: 0;
                        padding: 5px;
                    }
                    img{
                        width: 100%;
                        height: 100%;
                        @include mq('max','md') {
                        }                      
                    }
                }
            }
        }
        &--top{
            z-index: 99;
            a{
                display: block;
                margin-top: 30px;
                width: 30px;
                height: 30px;
                img{
                    width: 100%;
                    height: 100%;
                    @include mq('max','md') {
                        width: 20px;
                        height: 20px;
                    }
                    @include mq('max','sm') {
                        width: 15px;
                        height: 15px;
                    }
                }
                @include mq('max','md') {
                    margin-top: 20px;
                }
                @include mq('max','sm') {
                    margin-top: 15px;
                }
            }
        }
    }
    &__copy{
        border-top: 1px solid #777;
        padding: 10px;
        text-align: center;
        small{
            color: #777;
            @include mq('max','md') {
            }
        }
    }
}
</style>