<template>
    <section class="inner-sec">
    </section>
</template>
<script>
export default {
  data() {
    return {
      imgUrlAbout:
      "https://github.com/candice-dk3/vueProjectImages/blob/main/About-Page.png?raw=true",
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
        height: auto;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }
</style>