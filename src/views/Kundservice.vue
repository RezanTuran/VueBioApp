<template>
    
<div class="kundservice">
  
    <div class="colums">
      <h3 class="kontakt-text">Kontakta oss via e-post</h3>
      <p class="info-p">På e-postadressen info@kungalvbio.se kontaktar du oss om frågor eller åsikter som gäller biobesöket, webbplatsen osv.</p>
      <h3 class="kontakt-text-rull">För reservation av rullstolsplats</h3>
      <p class="info-p">Telefon 08-56 26 00 00<p/>
      <p class="info-p">Öppet måndag - fredag 10:00-17:00, lördag - söndag 11:00-16:00</p>
      <h3 class="kontakt-text-rull">För gruppbokning (fler än 8 biljetter)</h3>
       <p class="info-p">Telefon 08-56 26 00 00<p/>
      <p class="info-p">Öppet måndag - fredag 10:00-17:00, lördag - söndag 11:00-16:00</p>
      <h3 class="kontakt-text-rull">Postadress</h3>
      <p class="info-p">
        <br>Kungälvs Bio AB
        <br>Kundservice
        <br>442 38 Kungälv</p>
    </div>

<Footer></Footer>
</div>    

</template>


<style lang="scss" scoped>
@import '../css/variabler.scss';
@import '../css/style.scss';

.kontakt-text{
  color:$nav-text-color;
  text-align: center;
  text-transform:none;
  font-size: 15px;
  margin-top: 60px;
}
.info-p{
  text-align: center;
}
.kontakt-text-rull{
  color:$nav-text-color;
  text-align: center;
  text-transform:none;
  font-size: 15px;
}

</style>



  <script>
  import Footer from '@/components/Footer.vue'


  export default {
    components:{
      Footer
    }
  }

  </script>
  