// Home.vue
<template>
  <div class="home">
    <MyHeader/>
    <MyProfile/>
    <MyFooter/>
  </div>
</template>

<script>
import MyHeader from '@/components/MyHeader.vue'
import MyProfile from '@/components/Main.vue'
import MyFooter from '@/components/MyFooter.vue'

export default {
  name: 'HomePage',
  components: {
    MyHeader,
    MyProfile,
    MyFooter,
  }
}
</script>