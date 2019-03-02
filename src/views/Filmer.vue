  
<template>
<div id="filmer">
    <Kategori></Kategori>
    


 
<div class="columns">

  <div class="column"><img src="../assets/poster7.jpg" alt="action">
  <div class="box"></div>
  </div>
  
  <div class="column"><img src="../assets/poster8.jpg" alt="barn">
  <div class="box2"></div>
  </div>
  <div class="column"><img src="../assets/poster9.jpg" alt="romantik">
  <div class="box3"></div>
  </div>
  <div class="column"><img src="../assets/poster4.jpg" alt="komedi">
  <div class="box4"></div>
  </div>
  <div class="column"><img src="../assets/poster5.jpg" alt="komedi">
  <div class="box5"></div>
  </div>
  <div class="column"><img src="../assets/poster6.jpg" alt="skräck">
  <div class="box6"></div>
  </div>
  <div class="column"><img src="../assets/poster1.jpg" alt="skräck">
  <div class="box7"></div>
  </div>

</div>  
  
<div class="columns">

  <div class="column"><img src="../assets/poster10.jpg" alt="skräck">
  <div class="box8"></div>
  </div>
  <div class="column"><img src="../assets/poster11.jpg" alt="romantik">
  <div class="box9"></div>
  </div>
  <div class="column"><img src="../assets/poster12.jpg" alt="dokumänter">
  <div class="box10"></div>
  </div>
  <div class="column"><img src="../assets/poster13.jpg" alt="familj">
  <div class="box11"></div>
  </div>
  <div class="column"><img src="../assets/poster14.jpg" alt="action">
  <div class="box12"></div>
  </div>
  <div class="column"><img src="../assets/poster15.jpg" alt="barn">
  <div class="box13"></div>
  </div>
  <div class="column"><img src="../assets/poster2.jpg" alt="acton">
  <div class="box14"></div>
  </div>
  
</div>
</div>
 




   
</template>



<script>
import Kategori from '@/components/Kategori.vue'

export default {
name:'Filmer',

  
components: {
    Kategori
},

}

 






</script>




<style scoped lang="scss">

@import '../css/variabler.scss';
@import '../css/style.scss';

.column{
    display: block;
    flex-basis: 0;
    flex-grow: 1;
    flex-shrink: 1;
    padding: .75rem;
}
.box{
    border-radius: 0;
    background-color: yellow;
    display: block;
    padding: 1.25rem;
}
.box2{
    @extend .box;
    background-color: yellow;
}
.box3{
    @extend .box;
    background-color: pink;
}
.box4{
    @extend .box;
    background-color: green;
}
.box5{
    @extend .box;
    background-color: orangered;
}
.box6{
    @extend .box;
    background-color: red;
}
.box7{
    @extend .box;
    background-color: aqua;
}
.box8{
    @extend .box;
    background-color: aqua;
}
.box9{
    @extend .box;
    background-color: purple;
}
.box10{
    @extend .box;
    background-color: blue;
}
.box11{
    @extend .box;
    background-color: purple;
}
.box12{
    @extend .box;
    background-color: red;
}
.box13{
    @extend .box;
    background-color: yellow;
}
.box14{
    @extend .box;
    background-color: aqua;
}



</style>
 