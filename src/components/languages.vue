<script>
export default {
  name: 'LanguagesLearned',
  data() {
    return {
      languages: [
        {
          name: 'JavaScript',
          proficiency: 40, 
          icon: 'fa-brands fa-js'
        },
        {
          name: 'C',
          proficiency: 25, 
          icon: 'fa-brands fa-python'
        },
        {
          name: 'Java',
          proficiency: 40, 
          icon: 'fa-brands fa-java'
        },
        {
          name: 'Php',
          proficiency: 48, 
          icon: 'fa-brands fa-php'
        },
        {
          name: 'C++',
          proficiency: 50, 
          icon: 'fa-brands fa-c++'
        },
        

        
      ]
    };
  }
}
</script>

<template>
  <div class="languages-learned">
    <h1>Languages Learned</h1>
    <div class="language-cards">
      <div class="language-card" v-for="language in languages" :key="language.name">
        <i :class="language.icon" style="font-size: 48px;"></i>
        <h2>{{ language.name }}</h2>
        <div class="proficiency-bar-container">
          <div class="proficiency-bar" :style="{ width: language.proficiency + '%' }"></div>
        </div>
        <p>{{ language.proficiency }}% Proficient</p>
      </div>
    </div>
  </div>
</template>

<style>
.languages-learned {
  text-align: center;
}

.language-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.language-card {
  width: 30%;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  margin: 20px;
  padding: 20px;
  border-radius: 8px;
  position: relative;
}

.proficiency-bar-container {
  background-color: #f0f0f0;
  border-radius: 8px;
  width: 100%;
  height: 20px;
  margin: 10px 0;
}

.proficiency-bar {
  background-color: #4CAF50;
  height: 100%;
  border-radius: 8px;
}

@media (max-width: 768px) {
  .language-card {
    width: 45%;
  }
}

@media (max-width: 480px) {
  .language-card {
    width: 90%;
  }
}
</style>
