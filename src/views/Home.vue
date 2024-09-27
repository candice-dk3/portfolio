<template>
    <section class="inner-sec">
        <div class="hero-sec">
            <div class="image-sec">
                <img :src="image" alt="My Picture" class="image">
            </div>
            <div class="text-sec">
                <h1>Candice Keet</h1>
                <h2>Aspiring Front-End Developer</h2>
                <a :href="resumeLink" target="_blank" class="resume">
                <h3>Hire me</h3>
                </a>
            </div>
        </div>
    </section>
</template>
<script>
export default {
   data(){
    return{
        image: 'https://github.com/candice-dk3/vueProjectImages/blob/main/20240422_114556.jpg?raw=true',
        resumeLink: 'https://github.com/candice-dk3/portfolio-images/blob/main/Resume.png?raw=true'
    }
   } 
}
</script>
<style scoped>
.inner-sec{
    background-image: url(https://github.com/candice-dk3/vueProjectImages/blob/main/Home-Page.png?raw=true);
    height: 85vh;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    padding: 1.82rem;
}
.image{
    width: 25rem;
    height: 25rem;
    border-radius: 50%;
}
.hero-sec{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 2rem;
}
.text-sec{
    padding: 9rem;
}
.text-sec h2,h1{
    text-align: start;
    font-weight: 600;
    color: white;
}
.image-sec{
    background-color: #ffd90036;
    border: #FFD700 0.4rem solid;
    border-radius: 20rem;
    height: 25rem;
    width: 25rem;
    margin-left: 14rem;
    margin-top: 3rem;
}
h3{
    color: white;
    background-color: #3200519f;
    border: #FFD700 0.2rem solid;
    width: 14rem;
    border-radius: 2rem;
    margin-top: 1rem;
    font-weight: 300;
    text-decoration: none;
}
.resume{
    text-decoration: none;
}
@media screen and (max-width: 390px){
.hero-sec{
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    padding: 0rem;
}
.image-sec{
    background-color: #ffd90036;
    border: #ffd90054 0.4rem solid;
    border-radius: 20rem;
    height: 20rem;
    width: 20rem;
    margin-left: 0rem;
    margin-top: 0rem;
}
.image{
    width: 20rem;
    height: 20rem;
}
h3{
    width: 12rem;
    border-radius: 2rem;
    margin-top: 1rem;
    margin-left: 2rem;
    font-weight: 300;
}
.text-sec{
    padding: 2rem;
}
.text-sec h2,h1{
    text-align: center;
    font-weight: 600;
    color: white;
    font-size: 1.4rem;
}  
}
@media screen and (min-width: 391px) and (max-width: 768px){
.hero-sec{
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    padding: 2rem;
}
.image-sec{
    background-color: #ffd90086;
    border: #FFD700 0.4rem solid;
    border-radius: 20rem;
    height: 20rem;
    width: 20rem;
    margin-left: 12rem;
    margin-top: 2rem;
}
h3{
    width: 12rem;
    margin-top: 1rem;
    margin-left: 14rem;
}
.text-sec{
    padding: 2rem;
}
.text-sec h2,h1{
    text-align: center;
    font-weight: 600;
    color: white;
    font-size: 1.4rem;
    width: 30rem;
    margin-left: 6rem;
}
}
@media screen and (max-width:1200){
.hero-sec{
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    padding: 2rem;
}
.image-sec{
    background-color: #ffd90086;
    border: #FFD700 0.4rem solid;
    border-radius: 20rem;
    height: 20rem;
    width: 20rem;
    margin-left: 1rem;
    margin-top: 2rem;
}
h3{
    width: 12rem;
    margin-top: 1rem;
    margin-left: 14rem;
}
.text-sec{
    padding: 2rem;
}
.text-sec h2,h1{
    text-align: center;
    font-weight: 600;
    color: white;
    font-size: 1.4rem;
}   
}
</style>