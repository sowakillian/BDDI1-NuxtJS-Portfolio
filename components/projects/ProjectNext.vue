<template>
  <section class="project-header" id="project-header">
    <span class="project-header-overlay"></span>
    <span class="home-landing-scroll-incitator"></span>
    <span class="project-header-name"><nuxt-link to="/">KILLIAN SOWA</nuxt-link> </span>
    <h1 class="project-header-title">
      DROPCLOTHES
    </h1>
  </section>
</template>

<script>


    export default {


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
