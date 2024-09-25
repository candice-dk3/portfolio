<template>
  <section class="inner-sec">
    <h2>Projects</h2>
    <div class="project-cards">
      <Card v-for="project in $store.state.projects" :key="project.id" class="project-card">
        <template #cardHeader>
          <div>
            <img :src="project.image" :alt="project.name" loading="lazy" class="img-fluid">
          </div>
        </template>
        <template #cardBody>
          <div class="details">
            <h4 class="project-name">{{ project.name }}</h4>
            <h4 class="project-description">{{ project.description }}</h4>
          </div>
          <div class="link">
            <a :href="project.github" target="_blank" class="GitHub">Github</a>
            <a :href="project.vercel" target="_blank" class="Vercel">Live Demo</a>
          </div>
        </template>
      </Card>
    </div>
  </section>
</template>
<script>
import Card from '@/components/Card.vue';
export default {
    components: {
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
  },
}
</script>
<style scoped>
.inner-sec{
  background-image: url(https://github.com/candice-dk3/portfolio-images/blob/main/Project%20Page.png?raw=true);
  height: auto;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  color: white;
  padding: 1.82rem;
}
.project-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
.project-card {
  margin: 40px;
  color: transparent;
  height: 27.5rem;
  width: 400px;
  position: relative;
}
.img-fluid {
  height: auto;
  width: 24rem;
}
.project-description {
  font-size: 1rem;
  color: white;
  font-weight: 500;
}
.project-name{
  color: white;
}
.GitHub{
  text-decoration: none;
  color: white;
  margin: 2rem;
}
.Vercel{
  text-decoration: none;
  color: white;
  margin: 2rem;
}
.details{
  height: 11rem;
  width: 25rem;
}
.link{
  margin-top: 1rem;
}

@media screen and (max-width: 390px){
.inner-sec{
  padding: 0rem;
}
.project-cards {
  grid-template-columns: repeat(1, 1fr);
} 
.project-card {
  margin: 2rem;
  height: 26rem;
  width: 18rem;
}
.img-fluid {
  width: 18rem;
  margin-top: 1rem;
}
.details{
  height: 11rem;
  width: 20rem;
  margin-left: -1rem;
}
.link{
  margin-top: 2rem;
}
}

@media screen and (min-width: 391px) and (max-width: 768px){
.project-cards {
  grid-template-columns: repeat(1, 1fr);
}
.project-card {
  margin: 40px auto;
}
}
</style>