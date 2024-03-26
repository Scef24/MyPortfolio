import {createRouter, createWebHistory} from 'vue-router'
import Home from '../components/home.vue'
import Projects from '../components/Projects.vue'
import contents from '../components/contents.vue'
import languages from '../components/languages.vue'
import About from '../components/About.vue'


const routes = [
    {
        path:'/',
        name:'Home',
        component:Home
    },
    {
        path:'/contents',
        name:'contents',
        component:contents
    },
    {
        path:'/projects',
        name:'projects',
        component:Projects
    },
    {
        path:'/languages',
        name:'languages',
        component:languages
    },
    {
        path:'/about',
        name:'About',
        component:About
    }

]

const router = createRouter({
    history:createWebHistory(),
    routes
})


export default router;