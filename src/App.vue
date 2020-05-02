
  
<template>
  <div id="app">
    <Header/>
   <router-view/>
   <Footer/>
  </div>
</template>



<script>
import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'

export default {
  name: "App",
  components: {
    Header,
    Footer
  },
  methods: {
    
  },
  computed: {
  
  },
  created() {
  
  }
};
</script>

<style >
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.2rem,
    
}
a{
    text-decoration: none;
}

img{
    width: 100%;
}
.container{
  width: 1110px;
  margin: 0 auto;
}
ul{
  list-style-type: none;
}
</style>
