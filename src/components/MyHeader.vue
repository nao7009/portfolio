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
        width: 95px;
        height: 90px;
        @include mq('max','md') {
            margin-top: 5px;
            width: 55px;
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
                display: flex;
                justify-content: center;
                align-items: center;
                color: #fff;
                cursor: pointer;
                @include mq('max','md') {
                    width: 20px;
                    height: 20px;
                    margin-left: 20px;
                }
            }
        }
        &--list{
            /*???????????????*/
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
                            // font: normal 30px sans-serif;
                            font-size: 30px;
                            color: #fff;
                            @include mq('max','md') {
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