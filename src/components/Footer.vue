<template>


<!--   Här kör jag bootstrap   -->

<footer class="page-footer font-small special-color-dark pt-4">

   
    <div class="container">

      
      <ul class="list-unstyled list-inline text-center">
        <li class="list-inline-item">
          <a class="btn-floating btn-fb mx-1" href="facebook.se">
            <i class="fa fa-facebook"></i>
          </a>
        </li>
        <li class="list-inline-item">
          <a class="btn-floating btn-tw mx-1" href="twitter.se">
            <i class="fa fa-twitter"> </i>
          </a>
        </li>
        <li class="list-inline-item">
          <a class="btn-floating btn-gplus mx-1" href="google.se">
            <i class="fa fa-google-plus"> </i>
          </a>
        </li>
        <li class="list-inline-item">
          <a class="btn-floating btn-li mx-1" href="linkedin.se">
            <i class="fa fa-linkedin"> </i>
          </a>
        </li>
        
      </ul>
      

    </div>
 
    
    
  </footer>


</template>

<script>
export default {
 name: 'Footer',
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../css/variabler.scss';
@import '../css/style.scss';

.mr-md-5{
    color: $nav-text-color;
}
.text-center{
    color: $nav-text-color;
}
.fa{
  font-size: 30px;
}
@media screen and (max-width:768px){
  .fa{
    font-size: 25px;
  }
}
.list-inline-item:not(:last-child) {
    margin-right: 4.5rem;
}
.mx-1 {
    color: $nav-text-color;
}

</style>
