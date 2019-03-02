<template>


<div class="kategori">
  
    <ul>
        <li><a href="#">Action</a></li><div class="red"></div>
        <li><a href="#">Barnfilm</a></li><div class="yellow"></div>
        <li><a href="#">Dokumentär</a></li><div class="blue"></div>
        <li><a href="#">Drama</a></li><div class="pink"></div>
        <li><a href="#">Familjefilm</a></li><div class="green"></div>
        <li><a href="#">Komedi</a></li><div class="orange"></div>
        <li><a href="#">Romantik</a></li><div class="purple"></div>
        <li><a href="#">Thriller</a></li><div class="turquaz"></div>
    </ul>
   

</div>


</template>

<script>
export default {
 name: 'Kategori',
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../css/variabler.scss';
@import '../css/style.scss';

ul{
    list-style: none;
    float: left;
    margin-top: 10px;
}
li{
    color: red;
}
a{
    color: #02abff;
    float: left;
    line-height: 0.5em;
    font-size: 87%;
    padding: 10px;
    font-family: "lato", san-serif;
    text-transform: uppercase;
    font-weight: bold;
}
.red{
    background-color: red;
    width: 46px;
    height: 22px;
    margin: 7px;
}
.yellow{
    @extend .red;
    background-color: yellow;
}
.blue{
    @extend .red;
    background-color: blue;
}
.pink{
    @extend .red;
    background-color: pink;
}
.green{
    @extend .red;
    background-color: green;
}
.orange{
    @extend .red;
    background-color: orangered;
}
.purple{
    @extend .red;
    background-color: purple;
}
.turquaz{
    @extend .red;
    background-color: turquoise;
}
</style>
