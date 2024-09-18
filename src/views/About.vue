<template>
    <section class="inner-sec">
      <h2>Who is Candice?</h2>
      <div class="container">
        <div class="details">
          <div class="sub-headings">
              <h4>Full Name: </h4>
              <br>
              <h4>Date of Birth: </h4>
              <br>
              <h4>Email: </h4>
              <br>
              <h4>Address: </h4>
          </div>
            <div class="body" v-for="about in $store.state.about" :key="about.id">
              <h4>{{ about.name }}</h4>
              <br>
              <h4>{{about.dOB}}</h4>
              <br>
              <h4>{{about.email}}</h4>
              <br>
              <h4>{{about.address}}</h4>
            </div>
        </div>
        <div class="message">
          <div v-for="about in $store.state.about" :key="about.id">
            <h5>{{ about.message }}</h5>
          </div>
        </div>
      </div>
    </section>
</template>
<script>
export default {
  data() {
    return {
      // about:"https://github.com/candice-dk3/vueProjectImages/blob/main/About-Page.png?raw=true",
    };
  },
  methods: {
    getAbout() {
      return this.$store.state.about;
    },
    getData() {
      return this.$store.dispatch("getData");
    },
  },
  mounted() {
    this.getData();
  },
};
</script>
<style scoped>
.inner-sec{
    background-image: url(https://github.com/candice-dk3/portfolio-images/blob/main/About-Page.png?raw=true);
    height: 85vh;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}
h2{
  color: white;
  font-weight: 300;
  font-size: 1.7rem;
  text-align: start;
  padding: 1rem;
  margin-left: 9rem;
}
.container{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* padding: 1rem; */
}
.details{
  background-color: #ffd90066;
  height: 26rem;
  width: 25rem;
  margin-left: 10rem;
  border-radius: 3rem;
  color: white;
}
.message{
  background-color: #ffd90066;
  height: 26rem;
  width: 30rem;
  margin-left: 5rem;
  margin-bottom: 2rem;
  border-radius: 3rem;
  color: white;
}
.message h5{
  font-weight: 300;
  text-align: start;
  margin-top: 1rem;
  margin-left: 1rem;
  margin-right: 1rem;
}
.sub-headings{
  margin-top: 2rem;
}
.body{
  margin-top: 2rem;
  padding: 2rem;
}
.heading, .body h4{
  font-weight: 300;
}
@media screen and (max-width: 768px){
  .inner-sec{
    background-image: url(https://github.com/candice-dk3/portfolio-images/blob/main/About-Page.png?raw=true);
    height: auto;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}
h2{
  font-size: 1.5rem;
  padding: 0.4rem;
  margin-left: 5rem;
}
.container{
  grid-template-columns: repeat(1, 1fr);
}
.details{
  height: 28rem;
  width: 20rem;
  margin-left: 2.3rem;
}
.message{
  height: 34rem;
  width: 20rem;
  margin-left: 2.3rem;
  margin-top: 2rem;
}
.message h5{
  font-weight: 300;
  text-align: start;
  margin-top: 1rem;
  margin-left: 1rem;
  margin-right: 1rem;
}
.body{
  margin-top: -20rem;
  padding: 2rem;
}
.body h4{
  margin-top: -1rem;
  padding: 1rem;
  text-align: start;
}
.sub-headings h4{
  margin-top: 1rem;
  text-align: start;
  margin-left: 3rem;
}
.heading, .body h4{
  font-weight: 300;
} 
}
@media screen and (max-width: 390px) {
.inner-sec{
  background-image: url(https://github.com/candice-dk3/portfolio-images/blob/main/About-Page.png?raw=true);
  height: 100vh;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
h2{
  font-size: 1.5rem;
  padding: 0.4rem;
  margin-left: 5rem;
}
.container{
  grid-template-columns: repeat(1, 1fr);
  /* padding: 1rem; */
}
.details{
  height: 26rem;
  width: 20rem;
  margin-left: 2.3rem;
}
.message{
  height: 32rem;
  width: 20rem;
  margin-left: 2.3rem;
  margin-top: 2rem;
}
.message h5{
  font-weight: 300;
  text-align: start;
  margin-top: 1rem;
  margin-left: 1rem;
  margin-right: 1rem;
}
.body{
  margin-top: -20rem;
  padding: 2rem;
}
.sub-headings h4{
  margin-top: 2rem;
}
.heading, .body h4{
  font-weight: 300;
} 
}
</style>