<script>
import picture1 from '../assets/images/picture1.jpg';
import hobby from '../assets/images/hobby.jpg';
import location from '../assets/images/location.jpg';
export default{
    name:'About',
    data(){
        return{
            pic1Url:picture1,
            loc:false,
            hobby:false,
            self:false,
        }
    },
    methods:{
        handlePic1Click(){
            this.self = true;
            this.loc = false;
            this.hobby = false;

        },
        handleLocClick(){
            this.self = false;
            this.loc = true;
            this.hobby = false;

        },
        handleHobbyClick(){
            this.self = false;
            this.loc = false;
            this.hobby = true;

        }
    }
}
</script>

<template>
<h3>Click the Icons</h3><br>
<div id = "icons">
    
    <i class="fa-solid fa-user fa-7x" @click="handlePic1Click" title="Picture"></i>
    <i class="fa-solid fa-map-location-dot fa-7x" @click="handleLocClick" title="Location"></i>
    <i class="fa-solid fa-palette fa-7x" @click="handleHobbyClick" title="Hobby"></i>
</div>
<br><br>
<div id="self" v-show="self">
   <h2> Hi This is Christian Adrianne Ochea, I am 21 years old and <br>
    I am delighted that you're here to check my Portfolio <br>
    Have Fun! </h2>
</div>
<div id="loc" v-show="loc">
   <h2> I live in Talima,Lapu-Lapu City.  </h2>
</div>
<div id="hobby" v-show="hobby">
   <h2> I don't have any particular hobby because 70% of my 
    time was on work and school. When I have my Free time <br>
I spend it on sleeping.</h2>
</div>
</template>

<style>

h3 {
    margin-top: -2rem; 
    text-align: center; 
    font-size: 2rem; 
    color: white; 
}

#icons {
    margin-top: 1rem; 
    display: flex;
    justify-content: center; 
    gap: 2rem; 
}

#icons i {
    width: auto;
    text-align: center;
    margin: 0 1rem;
    cursor: pointer;
    color: #4a90e2; 
}

#icons i:hover {
    color: #d35400;
    transform: scale(1.1);
    transition: all 0.2s ease-in-out; 
}

div[id$="self"], div[id$="loc"], div[id$="hobby"] {
    margin-top: 1rem;
    padding: 1rem;
    background-color: #f7f7f7;
    border-radius: 10px; 
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    font-size: 1rem; 
    color: #333; 
}

h2 {
    margin: 0;
    padding: 0.5rem;
    text-align: center; /* Center aligns the text for a polished look */
}

@media (max-width: 768px) {
    #icons {
        flex-direction: column; /* Stacks icons vertically on smaller screens */
    }

    #icons i {
        margin: 1rem 0; /* Adjusts spacing for vertical layout */
    }
}
</style>
