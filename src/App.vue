<template>
  <div id="app">
    
    <slide></slide>
    

    <header>
    <img class="logo" src="./assets/biologoröd.jpg" alt="logga">
    <div id="nav">


      <router-link to="/filmer">Filmer</router-link>
      <router-link to="/sökfilm">Sökfilm</router-link>
      <router-link to="/kundservice">Kundservice</router-link>
      <router-link to="/bokafilm">bokafilm</router-link>
      <router-link to="/">Home</router-link>
      
    </div>
    <router-view/>
    </header>

  </div>


</template>


<script>

import slide from '@/components/slide.vue'




export default {
  components:{
    slide
  }
  }

</script>


<style lang="scss">

@import './css/variabler.scss';
@import './css/style.scss';



#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #dde2e7;
  margin: 0;
}
header{
  background-color: $header-bgcolor;
  height: $header-height;
  padding: $header-padding;
}
.logo{
width: 220px;
float: left;
height: 99px;
margin-left: 45px;
      
}
#nav {
    margin: 18px;
    margin-top: 68px;
    margin-right: 140px;
    height: 25px;

}

a{
    color: $nav-text-color;
    text-decoration: none;
    float: right;
    text-align: center;
    margin: 0 0 0 50px;
    line-height: 0.5em;
    font-size: 120%;
    font-family: $font-family;
    text-transform: uppercase;
    font-weight: bold;
}
a:hover{
  color: white;
  transition: all 0.3s ease;
}

img{
  width: 100%;
}



// ###  Responsive Nav  ### //

 @media screen and (max-width:768px){
    #nav {
    margin-top: 24px;
    display: none;
   }
   a{
     float: none;
   }
   .logo {
    width: 185px;
    float:none;
    height: 75px;
    margin-left: 140px;
    margin-top:10px;
   }
  
  .list-inline-item{
  margin-right: 1.5rem;
}
  
 }

</style>
