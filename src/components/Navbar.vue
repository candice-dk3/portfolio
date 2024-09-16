<template>
   <nav>
    <div class="f-sec">
        <router-link to="/" class="homeLogo">CK</router-link>
    </div>
    <div class="s-sec">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/project">Project</router-link>
        <router-link to="/education">Education</router-link>
        <router-link to="/contact">Contact</router-link>
    </div>
  </nav>
</template>
<script>
export default {
    name: 'Navbar',
    data(){
        return{
            logo: 'https://github.com/candice-dk3/vueProjectImages/blob/main/CK.png?raw=true'
        }
    }
}
</script>
<style scoped>
nav {
    display: grid;
    grid-template-columns:repeat(2,1fr);
    padding: 1rem;
    background-color: #1A0129;
}
nav a {
    font-size: 1.2rem;
    color: white;
    text-decoration: none;
}
nav a.router-link-exact-active {
  color: #FFD700;
} 
.f-sec{
    text-align: start;
} 
.s-sec{
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    text-align: end;
} 
/* .logo{
    width: 6rem;
    margin-top: -2rem;
} */
.homeLogo{
    font-size: 1rem;
    font-weight: 100;
    margin-left: 2rem;
    /* padding: 8rem; */
}


@media screen and (max-width: 390px){
nav {
    grid-template-columns:repeat(1,1fr);
}
.s-sec{
    grid-template-columns: repeat(1, 1fr);
} 
}

@media screen and (max-width: 768px){

}

@media screen and (max-width: 1024px){
}
</style>