<template>
   <section class="inner-sec">
    <h1>Projects</h1>
    <div class="container">
        <div class="project-cards">
            <Card v-for="project in $store.state.projects" :key="project.id" class="project-card">
                <template #cardHeader>
                  <div class="d-flex">
                    <img :src="project.image" :alt="project.name" loading="lazy" class="img-fluid">
                    <h4 class="project-name">{{project.name}}</h4>
                  </div>
                </template>
                <template #cardBody>
                  <a :href="project.github" target="_blank" class="GitHub">
                    <!-- <img :src="github" alt="" /> -->
                  </a>
                  <a :href="project.vercel" target="_blank" class="Vercel">
                    <!-- <img :src="imgUrlVercel" alt="" /> -->
                  </a>
                </template>
            </Card>
        </div>       
    </div>
   </section>
</template>
<script>
import Card from '@/components/Card.vue';
export default {
    components:{
        Card
    },
    methods: {
    getProjects() {
      return this.$store.state.projects;
    },
    getData() {
      return this.$store.dispatch("getData");
    },
    },
    mounted() {
        this.getData();
  }  
}
</script>
<style scoped>
.inner-sec{
    background-image: url(https://github.com/candice-dk3/portfolio-images/blob/main/Project%20Page.png?raw=true);
    height: auto;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    padding: 2rem;
}
.project-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
}

.project-card {
  width: 20rem;
  margin: 10px;
}

.project-card img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 10px;
}
</style>