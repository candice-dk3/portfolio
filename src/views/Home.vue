<template>
    <section class="inner-sec">
        <div class="hero-sec">
            <div class="image-sec">
                <!-- <img :src="image" alt="My Picture" class="image"> -->
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
        // image: 'https://github.com/candice-dk3/vueProjectImages/blob/main/Home-Page.png?raw=true'
    }
   } 
}
</script>
<style scoped>
.inner-sec{
    background-image: url(https://github.com/candice-dk3/vueProjectImages/blob/main/Home-Page.png?raw=true);
    height: 75vh;
    /* width: 110%; */
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