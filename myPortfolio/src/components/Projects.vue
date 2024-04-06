<script>
export default {
  name: 'Projects',
  data() {
    return {
      projects: [
        {
          title: 'My Portfolio Website',
          description: 'A personal portfolio website to showcase my work and skills.',
          technologies: ['HTML', 'CSS', 'Vue.js'],
          codeUrl: 'https://github.com/Scef24/MyPortfolio.git',
        },
        {
          title: 'CPC Library Kiosk',
          description: 'A web application intented for borrowing books in Cordova Public College.',
          technologies: ['Laravel', 'HTML', 'Bootstrap', 'CSS'],
          codeUrl: 'https://github.com/Scef24/PersonalProj.git',
        },
        {
          title: 'Simple Calculator',
          description: 'A simple Calculator desktop application',
          technologies: ['Java'],
          codeUrl: 'https://github.com/Scef24/Simple-Calculator.git',
        }
       
      ],
    };
  }
}
</script>

<template>
  <div class="projects">
    <h1>Projects</h1>
    <div class="project-cards">
      <div class="project-card" v-for="project in projects" :key="project.title">
        <h2>{{ project.title }}</h2>
        <p>{{ project.description }}</p>
        <div class="technologies">
          <span v-for="tech in project.technologies" :key="tech" class="technology">{{ tech }}</span>
        </div>
        <div class="links">
          <a :href="project.codeUrl" target="_blank">Source Code</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.projects {
  text-align: center;
}

.project-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.project-card {
  width: 30%;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  margin: 20px;
  padding: 20px;
  border-radius: 8px;
  position: relative;
}

.technologies {
  margin: 10px 0;
  color:black;
}

.technology {
  display: inline-block;
  background-color: #eee;
  border-radius: 5px;
  padding: 5px 10px;
  margin: 5px;
}

.links a {
  display: inline-block;
  margin: 10px;
  text-decoration: none;
  color: #007bff;
}

@media (max-width: 768px) {
  .project-card {
    width: 45%;
  }
}

@media (max-width: 480px) {
  .project-card {
    width: 90%;
  }
}
</style>
