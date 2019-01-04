<template>
  <div class="home">
    <HelloWorld msg="For unit and e2e test practice"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },

}
</script>
