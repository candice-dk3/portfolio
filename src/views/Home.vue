<template>
    <section class="inner-sec">
        <div class="hero-sec">
            <div class="image-sec">
                <img :src="image" alt="My Picture" class="image">
            </div>
            <div class="text-sec">
                <h2>Candice Keet</h2>
                <h2>Aspiring Front-End Developer</h2>
            </div>
        </div>
    </section>
</template>
<script>
export default {
   data(){
    return{
        image: ''
    }
   } 
}
</script>
<style scoped>
.inner-sec{
    background-image: url(https://github.com/candice-dk3/vueProjectImages/blob/main/Home-Page.png?raw=true);
    height: 78vh;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    padding: 0rem;
}
.image{
    width: 52rem;
}
.hero-sec{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 2rem;
}
.text-sec h2{
    text-align: start;
    font-weight: 600;
    color: white;
    /* padding: 2rem; */
}
</style>