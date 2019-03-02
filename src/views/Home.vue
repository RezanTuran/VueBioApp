<template>
  <div class="home">
    <Main></Main>
    <Footer></Footer>
    
    
    
    
      
      
    <HelloWorld msg=" "/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Main from '@/components/Main.vue'
import Footer from '@/components/Footer.vue'





export default {
  name: 'home',
  components: {
    HelloWorld,
    Main,
    Footer
  }
}
</script>


<style lang="scss">

html{
  background-color: black;
}
     

</style>
