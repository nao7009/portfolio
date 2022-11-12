// Home.vue
<template>
  <div class="home">
    <MyHeader/>
    <MainMenu/>
    <MyFooter/>
  </div>
</template>

<script>
import MyHeader from '@/components/MyHeader.vue'
import MainMenu from '@/components/Main.vue'
import MyFooter from '@/components/MyFooter.vue'

export default {
  name: 'HomePage',
  components: {
    MyHeader,
    MainMenu,
    MyFooter,
  }
}
</script>