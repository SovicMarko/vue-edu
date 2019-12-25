<template>
  <div id="app">
    <header>
      <div id="header-main">
          <div id="logo">
              <h2>Web programiranje i dizajn - Edukativni Centar</h2>
          </div>
      </div>
    </header>
    <app-header class="sticky"/>
    <router-view />
    <aside-links/>
  </div>
</template>


<script>
    import AppHeader from './components/AppHeader.vue'
    import AsideLinks from './components/AsideLinks.vue'
   
    export default {
      name: 'app',
      components: {
        AppHeader,
        AsideLinks
      },
    }
</script>

  
<style>
  * {
    /* outline: 1px dashed green; */
  } 
  header {
    text-align: center
  }
  #header-main {
      padding: 0px 20px;
      padding-top: 1px;
      height: 80px;
      background-color: #1a2947;
      color: white;
      position: relative;
      z-index: 1;
  }
  p {
      font-size: 18px;
      margin: 5px 0px;
      text-align: justify;
      text-indent: 20px;
  }
  code {
      color: crimson;
      background-color: #f1f1f1;
      font-size: 105%;
  }
  .navbar {
      background-color: #294d86;
      border-radius: 0px;
      border: 0px;
      position: sticky;
      top: 0px;
      left: 0px;
      z-index: 1;
      margin-bottom: 0px;
  }
  .navbar-inverse .navbar-nav>li>a {
      color: #f9f9b9;
  }
  .sticky {
    position: sticky;
    top: 0px;
    z-index: 1000;
    -webkit-box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.55);
    -moz-box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.55);
    box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.55);
  }
</style>
