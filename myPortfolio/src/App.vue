<script>
import home from './components/home.vue';
import contents from './components/contents.vue';
import Projects from './components/Projects.vue';
import languages from './components/languages.vue';
import About from './components/About.vue';
import { RouterView } from 'vue-router';

export default{
  name:'App',
  components:{
    home,
    contents,
    About,
    languages,
    Projects
  },
  data(){
    return{
      conts:false,
    }
  },
  mounted(){
    setTimeout(()=>{
      this.conts = true;
    },24000);
  }
}
</script>

<template>
  <div id="App">
    <home/>

    <div v-show = "conts">
    
    <nav>
      <!-- <router-link to = "/">Home</router-link> -->
      <router-link to = "/About">About Me</router-link>
      <!-- <router-link to = "/contents">Contents</router-link> -->
      <router-link to = "/languages">Languages</router-link>
      <router-link to = "/Projects">Projects</router-link>
      
    </nav>

    <RouterView></RouterView>
    
    </div>
  </div>
</template>

<style>
/* Reset margins and paddings */
html, body {
  margin: 0;
  padding: 0;
  width: 100%; /* Ensure body takes full width */
}

nav {
  margin-top: 0; 
  display: flex;
  justify-content: space-around; 
  align-items: center; 
  padding: 10px 0; 
  background-color: #333; 
   color: white; 
  position: fixed;
  top: 0; 
  left: 0; 
  right: 0; 
  width: 100%; 
  z-index: 1000; 
  height: 60px; 
  box-sizing: border-box; 
}

nav a {
  color: white; 
  text-decoration: none; 
  padding: 10px 20px; 
  border-radius: 5px; 
  transition: background-color 0.3s; 

}

nav a:hover {
  background-color: #555; 
}


#App {
  padding-top: 70px; 
}

</style>