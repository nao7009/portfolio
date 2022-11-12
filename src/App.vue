<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
    .main {
        animation: main 2s;
        }
    @keyframes main {
        0% {
            opacity: 0;
            transition-duration: 0.5s;
        }
        100% {
            opacity: 1;
            transition-duration: 0.5s;
        }
    }
</style>