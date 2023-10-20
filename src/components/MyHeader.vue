// MyHeader.vue
<template>
    <header class="header">
        <div class="header__logo">
            <router-link to="/">
                <img src="../assets/images/logo.png">
            </router-link>
        </div>
        <div class="header__contents">
            <div class="header__contents--button" v-on:click="open=!open">
                <img src="../assets/images/menu.png" aria-hidden="true">
            </div>
            <div class="header__contents--list" v-bind:class="{'is-active':open}">
                <nav>
                    <ul>
                        <li><router-link to="/works">Works</router-link></li>
                        <li><router-link to="/contact">Contact</router-link></li>
                    </ul>
                </nav>
            </div>
            <div class="header__contents--background"></div>
        </div>
    </header>
</template>

<script>
export default {
  name: 'MyHeader',
  data(){
    return{open: false}
  }
}
</script>

<style lang="scss" scoped>
.header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #777;
    &__logo{
        // width: 95px;
        // height: 90px;
        width: 100px;
        height: 100px;
        @include mq('max','md') {
            width: 70px;
            height: 70px;
        }
        @include mq('max','sm') {
            width: 50px;
            height: 50px;
        }
        img{
            width: 100%;
            height: 100%;
        }
    }
    &__contents{
        &--button{
            img{
                position: fixed;
                top: 40px;
                right: 20px;
                z-index: 3;
                width: 50px;
                height: 50px;
                color: #fff;
                cursor: pointer;
                @include mq('max','md') {
                    width: 30px;
                    height: 30px;
                }
                @include mq('max','md') {
                    top: 30px;
                }
            }
        }
        &--list{
            /*スライド用*/
            position: fixed;
            top: 0;
            right: 0;
            z-index: 1;
            width: 250px;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background: #555;
            transform: translateX(250px);
            transition: all 0.5s linear;
            @include mq('max','md') {
                width: 150px;
            }
            @include mq('max','sm') {
                width: 100px;
            }
            &.is-active{
                transform: translateX(0);
            }
            nav{
                ul{
                    @include mq('max','md') {
                    }
                    li{
                        width: 100%;
                        height: auto;
                        padding: .5em 1em;
                        text-align: center;
                        box-sizing: border-box;
                        @include mq('max','md') {
                            margin: 5px;
                            padding: 5px;
                        }
                        a{
                            font-size: 30px;
                            color: #fff;
                            @include mq('max','md') {
                                font: normal 20px sans-serif;
                            }
                            @include mq('max','sm') {
                                font: normal 15px sans-serif;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>