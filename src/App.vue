//App.vue
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
            transition-duration: .7s;
        }
        100% {
            opacity: 1;
            transition-duration: 0.9s;
        }
    }

    .works {
        animation: works 2s;
        }
    @keyframes works {
        0% {
            opacity: 0;
            transition-duration: .7s;
        }
        100% {
            opacity: 1;
            transition-duration: 0.9s;
        }
    }

    .contact {
        animation: contact 2s;
        }
    @keyframes contact {
        0% {
            opacity: 0;
            transition-duration: .7s;
        }
        100% {
            opacity: 1;
            transition-duration: 0.9s;
        }
    }
</style>