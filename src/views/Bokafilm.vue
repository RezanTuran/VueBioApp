<template>
    
    <div class="boka-film">
            

            <div class="box">
            <h3 class="title">Du har valt filmen: {{ movieId }}</h3>
            <p>Antal Biljetter: {{ status.count }}</p>
            <p>Pris: {{ status.price }}</p>
            
            <div class="box">
                <h4>På Bio Nu</h4>
            </div>

            <Film @chooseMovie="handleChooseMovie" :movieId="movieId"></Film>
            <sittplats :movieId="movieId" @chooseSeat="handleChooseSeat" :selectSeats="selectSeats"></sittplats>
            


        </div>
   

</div>

</template>



  <script>
  
  import Film from '@/components/Film.vue'
  import Sittplats from '@/components/Sittplats.vue'
  
  
  //console.log(movies);
  export default {
    name:'Bokafilm',

    components: {
    Film,Sittplats
    },
    data(){
        return{
            movieId:'',
            selectSeats: [],
            status:{ count: 0, price: 0}
        }
    },
    methods:{
        handleChooseMovie(movieId){
            //console.log('Ok')

            // När man markerar biljetter och sedan klickar på annan film inna godkända.
            if (this.status.count) {
                if (confirm('Vill du markera bort filmer du har valt ?')){
                    this.status = {count: 0, price: 0}
                    this.selectSeats = []
                }else{
                    return false
                }
            }
            this.movieId = movieId
        },
        handleChooseSeat(seat){
             const ids = this.selectSeats.map(s =>s.id)
             const idx = ids.indexOf(seat.id)

             if(idx === -1){
                 this.selectSeats.push(seat)
             }else{
                 this.selectSeats.splice(idx, 1)
             }

             this.status = this.selectSeats.reduce((summary, s) => {
                 summary.count ++
                 summary.price += s.price

                 return summary
             },  { count: 0, price:0 }) 

       
                   
                        
             
             //console.log(seat)
             
            //console.log(this.selectSeats.length)

             //console.log(ids)
        }
    }
  }

  </script>
  

  <style lang="scss" scoped>

  @import '../css/variabler.scss';
  @import '../css/style.scss';
  
  .box{
      background-color: $boxbg-color;
  }
  .title{
      color:$nav-text-color;
  }
  p{
      color: $nav-text-color;
  }
  h4{
      color: $nav-text-color;
      text-align: center;
  }
  </style>
  