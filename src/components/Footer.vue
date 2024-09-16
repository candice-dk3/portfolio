<template>
    <div class="footer-wrapper">
        <footer>
        <div class="f-sec">
            <a href="https://github.com/candice-dk3" target="blank"><img :src="gitHub" alt="GitHub" class="github"/></a>
        </div>
        <div class="s-sec">
            <p>&copy; Candice Keet {{ new Date().getFullYear() }} </p> 
        </div>
        <div class="t-sec">
            <a href="https://www.linkedin.com/in/candice-keet-06282a30a/" target="blank"><img :src="linkedIn" alt="LinkedIn" class="linkedIn"/></a>
        </div>
        </footer>
    </div>
</template>
<script>
export default {
name: 'Footer',
data(){
    return{
    gitHub: 'https://github.com/candice-dk3/portfolio-images/blob/main/github.png?raw=true',
    linkedIn: 'https://github.com/candice-dk3/portfolio-images/blob/main/linkedIn.png?raw=true'
    }
}
}
</script>
<style scoped>
.footer-wrapper {
    position: absolute;
    bottom: 0;
    width: 100%;
    background-color: #1A0129;
}
footer{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}
.github, .linkedIn{
    width: 3rem;
    margin-top: 1.4rem;
}
.s-sec{
    margin-top: 1.4rem;
    color: white;
}

@media screen and (max-width: 390px){
}

@media screen and (max-width: 768px){
.github, .linkedIn{
    width: 2.8rem;
    margin-top: 1.4rem;
}
.s-sec p{
    font-size: 0.7rem;
}
}

@media screen and (max-width: 1024px){
}
</style>