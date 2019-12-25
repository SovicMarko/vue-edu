<template>
  <div class="home">
    <side-nav v-bind:spisak="spisakLekcija" class="fixed"></side-nav>   
    <lekcija v-bind:lekcija="izabranaLekcija"></lekcija>
  </div>
</template>

<script>
// @ is an alias to /src
import SideNav from '@/components/SideNav.vue'
import AppHeader from '@/components/AppHeader.vue'
import Lekcija from '@/components/Lekcija.vue'
import MY_JSON from '../json/lekcije.json'

export default {
  name: 'Kurs',
  
  data: function() {
      return {
        myJson: MY_JSON,
        spisakLekcija: [],
        izabranaLekcija: {}
      }
  },
  components: {
    SideNav,
    Lekcija
  },
  methods: {
    identifikujKurs () {
      this.spisakLekcija = [];
      for (let i = 0; i < this.myJson.length; i++) {
        if (this.$route.params.kurs == this.myJson[i].naziv) {
          for (let j = 0; j < this.myJson[i].lekcije.length; j++) {
            this.spisakLekcija.push({
              id: this.myJson[i].lekcije[j].id,
              naziv: this.myJson[i].lekcije[j].naziv
            })
          }
        }
      }
    },
    identifikujLekciju () {
      this.izabranaLekcija = {}
      let kurs = this.$route.params.kurs;
       for (let i = 0; i < this.myJson.length; i++) {
        if(this.$route.params.kurs == this.myJson[i].naziv) {
          for (let j = 0; j < this.myJson[i].lekcije.length; j++) {
            if(this.$route.params.lekcija == this.myJson[i].lekcije[j].naziv) {
              this.izabranaLekcija = this.myJson[i].lekcije[j];
            }
          }
        }
      }
    },
  },
  

  created: function() {
    this.identifikujKurs();
    this.identifikujLekciju();
  },
  watch: {
    $route (to, from){
        this.identifikujKurs();
        this.identifikujLekciju();
    }
  }
}
</script>

<style scoped>
  .fixed {
    position: sticky;
    /* width: 100%; */
    z-index: 1;
    width: 20%;
    top: 50px;
    height: 100vh;
    overflow: hidden;
  }
</style>
