<template>
    <section class="inner-sec">
        <h2>Education</h2>
        <div class="education-sec">
            <div v-for="Education in $store.state.education" :key="Education.id" class="education">
                <div class="education-text">
                    <h4 class="edu-year">{{ Education.year }}</h4>
                    <h2>{{ Education.placeOfInstitution }}</h2>
                    <p>{{ Education.description }}</p>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    methods: {
        getResume() {
             return this.$store.state.resume;
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
    background-image: url(https://github.com/candice-dk3/portfolio-images/blob/main/Resume-Page.png?raw=true);
    height: auto;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    color: white;
    padding: 1rem;
}
.education-text{
    background-color: #ffd90066;
    width: 68rem;
    margin: 0 auto;
    margin-bottom: 5rem;
    border-radius: 2rem;
    padding: 1rem;
}
@media screen and (max-width: 391px){
.education-text{
    background-color: #ffd90066;
    width: 20rem;
    margin: 0 auto;
    margin-bottom: 5rem;
    border-radius: 2rem;
    padding: 1rem;
}
}

@media screen and (min-width: 391px) and (max-width: 768px){
.education-text{
    background-color: #ffd90066;
    width: 35rem;
    margin: 0 auto;
    margin-bottom: 5rem;
    border-radius: 2rem;
    padding: 1rem;
}
}
 </style>