<template>
  <div>
    <nav class="navbar navbar-inverse" >
          <div class="container-fluid">
              <!-- <div class="navbar-header">
              <a class="navbar-brand" href="#">EduWebInfo</a>
              </div> -->
              <ul class="nav navbar-nav">
                  <!-- <router-link to="/">Home</router-link> |
                  <router-link to="/about">About</router-link> -->
                  <li><a><router-link to="/Uvod/Uvod u Web tehnologije">Početna</router-link></a></li>
                  <li><a><router-link to="/HTML/Uvod u HTML">HTML</router-link></a></li>
                  <li><a><router-link to="/CSS/Uvod u CSS">CSS</router-link></a></li>
                  <li><a><router-link to="/JavaScript/Uvod u JavaScript">JavaScript</router-link></a></li>
                  <li><a href="#">jQuery</a></li>
                  <li><a href="#">Bootstrap</a></li>
                  <li><a href="#">AngularJS</a></li>
                  <li><a href="#">Vue.js</a></li>
              </ul>
              <ul class="nav navbar-nav navbar-right">
                  <li><a href="#">Principi dizajna</a></li>
                  <li><a href="#">Kontrola verzija</a></li>
                  <li><a href="#">Zavrsni projekat</a></li>
                  
              </ul>
          </div>
          
      </nav>
  </div>
  
</template>

<script>
export default {
  name: 'AppHeader',
  props: {
    msg: String
  },
  data: function() {
    return {

    }
  },
  computed: {

  },
  methods: {
    
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   
    a {
      color: inherit;
      text-decoration: none
    }
    
</style>
