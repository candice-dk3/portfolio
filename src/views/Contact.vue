<template>
    <section class="inner-sec">
        <h1 >interested? let's get in touch</h1>
        <div class="contact">
            <div class="form-sec">
                <form action="https://formspree.io/f/xpwaekop" method="POST">
                    <div>
                        <input type="name" name="name" placeholder="Your Name">
                    </div>
                    <div>
                        <input type="phone-number" name="number" placeholder="Your Phone Number">
                    </div>
                    <div>
                        <input type="email" name="email" placeholder="Your Email">
                    </div>
                    <div>
                        <textarea name="message" rows="4" placeholder="Your Message"></textarea>
                    </div>
                    <div class="buttons">
                        <button type="reset">Clear</button>
                        <button type="submit">Send</button>
                    </div>
                </form>
            </div>
            <div class="social-sec">
                <div class="social">
                    <img :src="email" alt="email" class="image" @mouseover="hoverImage" @mouseout="hoverImage"><h4>candicekeet3@gmail.com</h4>
                </div>
                <div class="social">
                    <img :src="phone" alt="phone" class="image" @mouseover="hoverImage" @mouseout="hoverImage"><h4>081 314 0839</h4>
                </div>
                <div class="social">
                    <img :src="location" alt="location" class="image" @mouseover="hoverImage" @mouseout="hoverImage"><h4>Bonteheuwel, Cape Town</h4>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    data(){
        return{
            email: 'https://github.com/candice-dk3/portfolio-images/blob/main/email.png?raw=true',
            phone: 'https://github.com/candice-dk3/portfolio-images/blob/main/phone.png?raw=true',
            location: 'https://github.com/candice-dk3/portfolio-images/blob/main/location.png?raw=true'
        }
    },
    methods: {
        hoverImage(event) {
            event.target.classList.add('hover');
            event.target.removeEventListener('mouseover', this.hoverImage);
            event.target.removeEventListener('mouseout', this.hoverImage);
        }
    }
}
</script>
<style scoped>
.inner-sec{
    background-image: url(https://github.com/candice-dk3/portfolio-images/blob/main/Contact-Page.png?raw=true);
    height: 71.6vh;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    padding: 2.82rem;
}
h1{
    color: white;
    font-size: 2rem;
    font-weight: 200;
}
.contact{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    background-color: #ffd90038;
    border-radius: 4rem;
    width: 60rem;
    padding: 1rem;
    margin: 0 auto;
    justify-self: center;
}
.form-sec {
    justify-self: end;
}
form{
    height: 22rem;
    padding: 1rem;
}
input{
    background-color: transparent;
    border: none;
    background-color: #ffd90038;
    height: 2rem;
    width: 25rem;
    border-radius: 1.5rem;
    margin-bottom: 1rem;
    outline: none; 
}
textarea{
    background-color: #ffd90038;
    border: none;
    width: 25rem;
    height: 9rem;
    border-radius: 1.5rem;
    outline: none; 
}
form > div {
    display: flex;
    flex-direction: column;
}
label {
    color: white;
}
::-webkit-input-placeholder {
    color: white;
    text-indent: 1rem;
    font-family: "Inknut Antiqua", serif;
}
input:focus, textarea:focus {
    color: white;
    text-indent: 1rem;
    font-family: "Inknut Antiqua", serif;
}
.buttons {
    display: flex;
    flex-direction: row;
    padding: 2rem;
}
button {
    margin: 0 0.9rem;
    border: none;
    width: 8rem;
    height: 2.4rem;
    font-weight: 500;
    color: black;
    background-color: #ffd90060;
    font-family: "Inknut Antiqua", serif;
}
button:hover {
    color: white;
    background-color: #1A0129;
}

.social-sec{
    padding: 5rem;
}
.social{
    display: flex;
    padding: 1rem;
}
.image{
    width: 3rem;
    transition: transform 0.4s ease; 
}
.image:hover{
    transform: scale(1.2); 
}
@media screen and (max-width: 390px){
.inner-sec{
    padding: 1rem;
    height: auto
}
h1{
    font-size: 1.4rem;
    padding: 1rem;
}
.contact{
    grid-template-columns: repeat(1, 1fr);
    width: 19rem;
    padding: 1rem;
}
.form-sec {
    justify-self: start;
}
form{
    height: 20rem;
    padding: 1rem;
}
input{
    height: 2rem;
    width: 17rem;
    margin-bottom: 1rem;
    margin-left: 0rem;
}
textarea{
    width: 17rem;
    height: 10rem;
}
.buttons {
    padding: 1rem;
    margin-left: 2rem;
}
button {
    width: 4rem;
    height: 2rem;
}
.social-sec{
    padding: 0rem;
    margin-top: 3rem;
}
.social{
    display: flex;
    padding: 0.5rem;
}
.social h4{
    font-size: 0.7rem;
    margin-left: 1rem;
}
.image{
    width: 2.5rem;
}
}

@media screen and (min-width: 391px) and (max-width: 768px){
.inner-sec{
    padding: 1rem;
    height: auto
}
h1{
    font-size: 1.2rem;
    padding: 0.4rem;
}
.contact{
    width: 40rem;
}
.form-sec {
    justify-self: start;
}
form{
    height: 20rem;
    padding: 1rem;
}
input{
    height: 1.6rem;
    width: 14rem;
    margin-bottom: 1rem;
    margin-left: 1rem;
}
textarea{
    width: 16rem;
    height: 9rem;
}
.buttons {
    padding: 1rem;
}
button {
    width: 4rem;
}
.social-sec{
    padding: 0rem;
    margin-top: 6rem;
}
.social{
    display: flex;
    padding: 0.5rem;
}
.social h4{
    font-size: 0.7rem;
    margin-left: 1rem;
}
.image{
    width: 2.5rem;
}
}
</style>