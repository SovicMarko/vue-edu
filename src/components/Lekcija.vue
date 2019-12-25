<template>
  <main>
    <div class="inner">
      <!-- <transition name="fade" mode="out-in"> -->
          <!-- <template v-if="show"> -->
            <div id="container" v-bind:style="{ marginLeft: margina + 'px'}">
              
                    <h1 id="anime">{{lekcija.naziv}}</h1>
                
                <hr>    
                <div v-for="(odeljak, index) in lekcija.sadrzaj" v-bind:key="index">
                  <div v-if="odeljak[0] == 'kod'" class="kod" v-html="odeljak[1]"></div>
                  <code v-else-if="odeljak[0] == 'moj-kod'" class="moj-kod">{{odeljak[1]}}</code>
                  <div v-else v-html="odeljak" class="pasus"></div>
                </div>
                <form action="">
                  <textarea></textarea>
                </form>
            </div>
          <!-- </template>
        </transition>
        -->
    </div>
      
  </main>
</template>

<script>
export default {
  name: 'Lekcija',
  
  props: {
    lekcija: Object
  },
  data: function() {
    return {
      naziv: "",
      show: true,
      sadrzaj: [],
      isloading : false,
      margina : 0,
    }
  },
  computed: {

  },
  methods: {
		proba: function(){
    	alert('loaded');
    }
  },
  created(){
      // this.naziv = lekcija.naziv;
      // console.log(this.isloading);
      setTimeout(function () {
          this.isloading = true;
          
          
      }.bind(this), 2000)
  },
  beforeDestroy() {
   
  },
  beforeUpdate() {
    setTimeout(() => {
       this.show = true;
     }, 1000);
  },
  updated: function () {
    // alert("Pozdrav");
    this.$nextTick(function () {
      // Code that will run only after the
      // entire view has been re-rendered
      
    })
  },
  watch:{
    $route (to, from){
        this.show = false;
         setTimeout(() => {
        this.show = true;
      }, 100);
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
      
  main {
      width: 60%;
      margin-left: 21%;
      top: 130px;
      min-height: 90vh;
      overflow: hidden;
      font-size: 18px;
      margin-top: -100vh;
      /* padding-bottom: 200px; */
      /* border-left: 20px dotted #d5d5e4; 
      padding-left: 1%; */
  }
   .inner {
    /* border-left: 1px dashed gray; */
  } 
  #container {
      top: 0px;
      padding: 10px 30px;
      width: 100%;
      display: inline-block;
      vertical-align: top;
      position: relative;
      line-height: 30px; 
  }
  
  .kod {
    background-image: url("https://media0.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif");
    background-repeat: no-repeat;
    background-position: center;
    margin-bottom: 15px;
    /* -webkit-box-shadow: 2px 0px 5px 0px rgba(59,57,25,1);
    -moz-box-shadow: 2px 0px 5px 0px rgba(59,57,25,1);
    box-shadow: 2px 0px 5px 0px rgba(59,57,25,1); */
    /* background-color: gray; */

    -webkit-box-shadow: inset 1px 0px 15px 4px rgba(26,41,71,0.75);
    -moz-box-shadow: inset 1px 0px 15px 4px rgba(26,41,71,0.75);
    box-shadow: inset 1px 0px 15px 4px rgba(26,41,71,0.75);
    /* background-color: #1a2947; */
  }
  .kod::after {
    content: "";
    display: block;
    margin-top: -10px;
    width: 100%;
    height: 10px;
    background-color: #1a2947;
  }
  .moj-kod {
    margin-bottom: 10px !important;
  }
  a.inner-link {
    color: lightskyblue !important;
  }

  textarea {
  width: 100%;
  }

</style>
