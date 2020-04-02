<template>
  <section class="project-header" id="project-header" :style="{ backgroundImage: `url('${background}')` }">
    <span class="project-header-overlay"></span>
    <span class="home-landing-scroll-incitator"></span>
    <span class="project-header-name"><nuxt-link to="/">KILLIAN SOWA</nuxt-link></span>
    <h1 class="project-header-title" v-parallax="0.1">
      {{ title }}
    </h1>
  </section>
</template>

<script>


    export default {
        props: [
            'title',
            'background'
        ],
    }

</script>
<style lang="scss">
  .project-header {
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: slategray;
    background-size: cover;
    position: relative;

    &-overlay {
      background: linear-gradient(#160089, #0A0138);
      width: 100%;
      height: 100%;
      position: absolute;
      opacity: 0.2;
    }

    &-name {
      position: absolute;
      left: 5%;
      top: 75px;
      font-size: 30px;
      font-family: 'IntegralCF-Bold';
      z-index: 5;
    }

    &-title {
      z-index: 1;
    }

    @media all and (max-width: 980px) {
      &-title {
        font-size: 70px;
      }
    }

    @media all and (max-width: 767px) {
      &-title {
        font-size: 50px;
        max-width: 90%;
      }
    }

    @media all and (max-width: 600px) {
      &-title {
        font-size: 40px;
      }
    }
  }

</style>
