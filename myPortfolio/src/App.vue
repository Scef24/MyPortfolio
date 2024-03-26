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
      <router-link to = "/contents">Contents</router-link>
      <router-link to = "/languages">Languages</router-link>
      <router-link to = "/Projects">Projects</router-link>
      <router-link to = "/About">About</router-link>
    </nav>

    <RouterView></RouterView>
    
    </div>
  </div>
</template>

<style>
nav {
  display: flex;
  justify-content: space-around; /* Distribute nav items evenly */
  padding: 10px;
  background-color: #333; /* Dark background */
}

nav a {
  color: white; /* White text color */
  text-decoration: none; /* Remove underline from links */
  padding: 10px 20px; /* Padding around links */
  border-radius: 5px; /* Rounded corners on links */
  transition: background-color 0.3s; /* Smooth transition for hover effect */
}

nav a:hover {
  background-color: #555; /* Darker background on hover */
}
</style>