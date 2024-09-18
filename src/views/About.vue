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
      <div class="skills">
            <div class="technical-skills">
                <h2>Technical Skills</h2>
                <div class="skill-sec">
                    <div v-for="skill in $store.state.skills" :key="skill.id" class="skill">
                        <div class="skill-card">
                          <div class="imgUrl">
                                <img :src="skill.image" alt="" class="skill-image"/>
                            </div>
                            <div class="skill-card-body">
                                <h5 class="skill-card-title">{{ skill.name }}</h5>
                                <p class="skill-card-p">{{ skill.level }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="soft-skills">
                <h2>Soft Skills</h2>
                <div class="soft-sec"></div>
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
    getSkills() {
            return this.$store.state.skills;
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
    height: auto;
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
  padding: 1rem;
}
.body h4{
  margin-top: 1rem;
  padding: 2rem;
  text-align: start;
}
.sub-headings h4{
  margin-top: 0rem;
  text-align: start;
  margin-left: 3rem;
}
.heading, .body h4{
  font-weight: 300;
}
.skill-sec {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.skill {
    margin: 5rem;
    height: 14rem;
}
.imgUrl{
    background-color: #ffd9002f;
    border-radius: 50%;
    border: #ffd900 0.1rem solid;
    width: 10rem;
    height: 10rem;
}
.skill-image{
    width: 7.5rem;
    height: 7.5rem;
    margin: 1.5rem auto;
    display: block;
    filter: grayscale(100%);  
    transition: filter 0.6s;
}
.skill-image:hover {
  filter: none;
}
.skill-card-body {
    background-color: #ffd9002f;
    border-radius: 1rem;
    width: 10rem;
    height: 6rem;
    margin-top: 2rem;   
}
@media screen and (max-width: 391px) {
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

@media screen and (min-width: 391px) and (max-width: 768px){
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
.details{
  height: 34rem;
  width: 20rem;
  margin-left: 2rem;
  margin-top: 2rem;
}
.message{
  height: 34rem;
  width: 22rem;
  margin-left: 0rem;
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

</style>