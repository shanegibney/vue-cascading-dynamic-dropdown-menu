<template>
<div class="home">
  <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
  <HelloWorld />
  <CascadeTwo />
</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import CascadeTwo from '@/components/CascadeTwo.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    CascadeTwo
  }
}
</script>
