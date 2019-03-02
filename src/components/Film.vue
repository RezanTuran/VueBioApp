<template>
   
 <div class="box">
     <h3 class="title"> {{ movieId }}</h3>
        <div class="columns">
            <div v-for="m in movies"  :class="className(m.id)" @click="chooseMovie(m.id)" v-bind:key="m.id">
                <figure class="image">
                <img :src="imgSrc(m.id)">
                </figure>
            </div>
        </div>
    </div>


    
</template>


<script>

 import { movies } from '../others/movie.json'
  //console.log(movies);
  export default {
      props:['movieId'],
    name:'Bokafilm',
    
    data(){
       return{
           movies
       } 
    },
    methods:{
        imgSrc(movieId){
            return `/movies/${movieId}.jpg`
        },
        chooseMovie(movieId){
            //console.log('OK')
            this.$emit('chooseMovie', movieId)
        },
        className(movieId){
            return [
                'column','pointer',
                {'chosen': this.movieId === movieId}
            ]
        }
    
    },
     // Markera filmen [0] som markerat när man startar sidan.
    mounted(){
        this.chooseMovie(movies[0].id)
    }
   
}


</script>




<style lang="scss" scoped>

@import '../css/variabler.scss';
@import '../css/style.scss';

.box{
    background-color: $boxbg-color;
}
.pointer{
    cursor: pointer;
}
.chosen{
    border-style: solid;
    border-color: $border-color;
}

.title{
    color: $nav-text-color;
}
</style>