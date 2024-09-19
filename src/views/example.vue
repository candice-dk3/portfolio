<template>
    <div class="image-container">
      <img src="https://via.placeholder.com/300" alt="Sample Image" />
      <div class="hover-text">This is hover text</div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ImageWithHoverText",
  };
  </script>
  
  <style scoped>
  .image-container {
    position: relative;
    width: 300px;
  }
  
  .image-container img {
    width: 100%;
    display: block;
  }
  
  .hover-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 10px;
    border-radius: 5px;
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
    text-align: center;
    font-size: 16px;
  }
  
  .image-container:hover .hover-text {
    opacity: 1;
  }
  </style>
  <!-- v-for="project in $store.state.projects" :key="project.id" 
    {{ project.name }} 
    <a :href="project.github" target="_blank" class="GitHub"></a>
    <a :href="project.vercel" target="_blank" class="Vercel"></a>
    
  -->