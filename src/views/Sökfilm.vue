<template>

  <div id="app">
    <body>
    
    
    <main class="container mt-2">
       
      <form @submit.prevent="getResults">
        <fieldset class="form-group">
          <label for="searchTerm">Sök</label>
          <input v-model="searchTerm" type="text" class="form-control" id="searchTerm" placeholder="Sök....">
        </fieldset>
        <button type="submit" class="btn btn-primary">SÖK</button>
      </form>
      

      <section>
        <section class="row movies-area">
      <section class="mt-2 col-9 row" id="results">
           <div v-if="error" class="alert alert-danger col" role="alert">
              {{error}}
          </div>
    <div class="column column" v-for="movie in results" v-bind:key="movie.id">
    <img class="card-img-top" :src="movie.Poster" :alt="movie.Title">
    <div class="card-body">
      <h5 class="card-title">{{movie.Title}}</h5>
      <p class="card-text">{{movie.Year}}</p>
        <button @click="addToWatchLater(movie)" type="button" class="btn btn-danger">Välj</button>
    </div>
  </div>
      </section>
      <section class="mt-2 col-3 row">
        <h3>Du har valt</h3>
        <section class="row" id="watch-later">
         
    <div class="card col-12" v-for="movie in watchLater" v-bind:key="movie.id">
    <img class="card-img-top" :src="movie.Poster" :alt="movie.Title">
    <div class="card-body">
      <h5 class="card-title">{{movie.Title}}</h5>
      <p class="card-text">{{movie.Year}}</p>
    </div>
  </div>

        </section>
      </section>
    </section>
  

      </section>
    </main>

    </body>

  </div>
</template>

<script>




const API_URL = 'https://omdb-api.now.sh/?type=movie&s=';
export default {
  components:{
    
  },
  name: 'app',
  data: () => ({
    error:'',
    searchTerm:'',
    results:[],
    watchLater:[],
  }),
  methods:{
    async getResults(){
      const url = `${API_URL}${this.searchTerm}`;
      const response = await fetch(url);
      const data = await response.json();
      if (data.Error){
        this.results = [];
        this.error = data.Error;
      }else{
      this.results = data.Search;
      this.error = '';
      }
    },
    addToWatchLater(movie) {
      this.watchLater.push(movie);
    }
  }
};

</script>

<style scoped lang="scss">

  @import '../css/variabler.scss';
  @import '../css/style.scss';

      .movies-area {
        justify-content: space-around;
        align-items: flex-start;
      }
      .card{
        background-color:transparent;
      }
      h3{
        color: $nav-text-color;
      }
      body{
        background-color: $boxbg-color;
      }
      .card-title{
        color: $nav-text-color;
      }
      .card-text{
        color: $nav-text-color;
      }
     
      

</style>

