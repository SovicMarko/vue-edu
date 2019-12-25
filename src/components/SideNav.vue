<template>
  <div>
      <div class="side-nav" v-bind:class="{ zakacena: jeZakacena }">
        <ul >
          <a v-for="item in spisak" v-bind:key="item.id">
            <template v-if="$route.params.lekcija == item.naziv">
                <router-link :to="{ path: '/' +$route.params.kurs + '/' +item.naziv}">
                  <li class="aktivna-lekcija">{{item.naziv}}</li>
                </router-link>
            </template>
            <template v-else>
                <router-link :to="{ path: '/' +$route.params.kurs + '/' +item.naziv}">
                  <li>{{item.naziv}}</li>
                </router-link>  
            </template>
          </a>
        </ul>
     
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideNav',
  props: {
    spisak: Array
  },
  data: function() {
    return {
      jeZakacena: false,
    }
  },
  computed: {

  },
  methods: {
    scroll: function() {
      console.log(window.scrollY);
      if (window.scrollY > 80) {
        this.jeZakacena = true;
      } else this.jeZakacena = false;
      
    }
  },
  created: function () {
    window.addEventListener('scroll', this.scroll);
  },
   watch:{
    $route (to, from){
        // this.nadjiRutu();
    }
  } 

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  a, a:hover {
    text-decoration: none;
    color: inherit;
  }
  .side-nav {
    height: 100vh;
    overflow: hidden;
    width: 100%;
    z-index: 0;
    background-color: #ededfd;
  }
  .side-nav ul{
    top: 40px;
    position: sticky;
    list-style-type: none;
    margin: 0px;
    padding: 0px;
    padding-top: 10px;
    overflow: auto;
    overflow-x: hidden;
    height: 100%;
  }
  
  .side-nav ul::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .4);
      background-color: #CFCFCF
  }
  .side-nav ul::-webkit-scrollbar {
      width: 10px;
      background-color: #F5F5F5
  }
  .side-nav ul::-webkit-scrollbar-thumb {
      background-color: #2C3E50
  }

  .side-nav ul li {
      min-height: 40px;
      font-size: 16px;
      line-height: 40px;
      background-color: #ededfd;
      padding-left: 20px;
      border-bottom: 1px solid gainsboro;
      cursor: pointer;
  }
  .aktivna-lekcija {
      background-color:  #294d86 !important;
      color: white;
  }
  .side-nav ul li:hover {
      background-color: #1a2947aa;
      color: white;
  }
  .zakacena {
    position: fixed !important;
    top: 50px;
    width: 20%;
  }
</style>
