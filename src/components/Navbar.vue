<template>
  <nav>
    <div class="f-sec">
      <router-link to="/" class="homeLogo"><img :src="logo" alt=""></router-link>
      <button class="hamburger" @click="toggleMenu">
        <span>&#9776;</span>
      </button>
    </div>
    <div :class="['s-sec', { 'mobile-menu': isMenuOpen }]">
      <router-link to="/" @click="closeMenu">Home</router-link>
      <router-link to="/about" @click="closeMenu">About</router-link>
      <router-link to="/project" @click="closeMenu">Project</router-link>
      <router-link to="/education" @click="closeMenu">Education & Experience</router-link>
      <router-link to="/contact" @click="closeMenu">Contact</router-link>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'Navbar',
  data() {
    return {
      logo: 'https://github.com/candice-dk3/portfolio-images/blob/main/CK.png?raw=true',
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    }
  }
};
</script>
<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #1A0129;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
nav a {
  font-size: 1.2rem;
  color: white;
  text-decoration: none;
  margin-left: 2rem;
}

nav a.router-link-exact-active {
  color: #FFD700;
}

.f-sec {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.s-sec {
  display: flex;
  gap: 2.5rem;
  transition: all 0.3s ease-in-out;
}
.s-sec a:nth-child(4) {
  white-space: nowrap;
}
.homeLogo {
  font-size: 1.5rem;
  font-weight: 200;
}

.hamburger {
  background: none;
  border: none;
  font-size: 2rem;
  color: white;
  cursor: pointer;
  display: none;
}

@media screen and (max-width: 1024px) {
  .homeLogo {
    font-size: 1.2rem;
  }
}

@media screen and (max-width: 768px) {
  .s-sec {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 70px;
    right: 0;
    background-color: #1A0129;
    width: 100%;
    padding: 0rem;
  }
  .s-sec.mobile-menu {
    display: flex;
  }
  .hamburger {
    display: block;
  }

  .s-sec a {
    padding: 0.5rem 0;
    font-size: 1.2rem;
    text-align: center;
    margin-left: 0rem;
  }
  .homeLogo {
    margin-right: 2rem;
    padding: 0rem;
    margin-top: 0.6rem;
  }
}

@media screen and (max-width: 390px) {
  .homeLogo {
    font-size: 1rem;
    margin-left: 0rem;
  }
  .hamburger {
    display: block;
  }
  .s-sec {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 70px;
    right: 0;
    background-color: #1A0129;
    width: 100%;
    padding: 1rem;
  }
  .s-sec.mobile-menu {
    display: flex;
  }
  .s-sec a {
    padding: 0.5rem 0;
    font-size: 1.2rem;
    text-align: center;
  }
}
</style>
