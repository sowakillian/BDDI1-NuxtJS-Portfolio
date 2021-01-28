<template>
  <section class="project-header" id="project-header" :style="{ backgroundColor: bgColor }">
    <div class="project-header-wrapper">
      <div class="project-header-image">
        <img :src="`${image}`"/>
        <h1 class="project-header-image-title" :style="{ color: titleColor }">
          {{ title }}
        </h1>
      </div>

      <span class="home-landing-scroll-incitator"></span>
      <span class="project-header-name"><nuxt-link to="/">BACK TO HOME</nuxt-link></span>

    </div>
  </section>
</template>

<script>

    export default {
        props: [
            'title',
            'bgColor',
            'titleColor',
            'image'
        ],

        beforeMount () {
          window.addEventListener('scroll', this.putParallax);
        },
        beforeDestroy() {
          window.removeEventListener('scroll', this.putParallax);
        },

        methods: {
          putParallax () {
            const headerWrapper = document.querySelector('.project-header-wrapper');
            const headerImage = document.querySelector('.project-header-image');
            const headerSize = document.querySelector('.project-header');
            const basicRotation = 0-((window.scrollY/headerSize.clientHeight)*5);
            let rotation = basicRotation > 0 ? basicRotation : 0;
            headerWrapper.style.transform = `translateY(-${window.scrollY/headerSize.clientHeight*50}vh) scale(1)`;
            //headerWrapper.style.opacity = `${1-(window.scrollY/headerSize.clientHeight)}`;
            headerImage.style.transform = `translateX(-50%) translateY(${window.scrollY/headerSize.clientHeight*25}vh) scale(${(1- ((window.scrollY/headerSize.clientHeight) / 2))}) rotate(${basicRotation}deg)`;
            console.warn(window.scrollY/headerSize.clientHeight);
            // Your scroll handling here

          },
        }
    }

</script>
<style lang="scss">
  .project-header {
    height: 100vh;
    width: 100%;
    position: relative;
    z-index: 2;

    &-wrapper {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-size: cover;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
    }

    &-image {
      position: absolute;
      max-width: 890px;
      left: 50%;
      top: 30%;
      transform: translateX(-50%) rotate(0deg);


      img {
        z-index: 3;
        position: relative;
        max-width: 100%;
      }

      &-title {
        left: 50%;
        transform: translateX(-50%);
        z-index: 2;
        font-size: 160px;
        position: absolute;
        top: -120px;
        opacity: 0.12;
        font-family: IntegralCF-Bold;
      }
    }

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
