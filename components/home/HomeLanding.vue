<template>
  <section class="home-landing" v-bind:class="{ 'home-landing-backgroundAdded': indexAnimations.otherAnimations }">
    <span class="home-landing-scroll-incitator" v-bind:class="{ 'home-landing-scroll-incitator-visible': indexAnimations.otherAnimations }"></span>
    <span class="home-landing-contour" v-bind:class="{ 'home-landing-contour-visible': indexAnimations.otherAnimations }"></span>
    <div class="home-landing-socials" v-bind:class="{ 'home-landing-socials-visible': indexAnimations.otherAnimations }">

    </div>
    <div class="home-landing-title">
      <div class="home-landing-title-invisible-overlay" v-bind:class="{ 'home-landing-title-invisible-overlay-hidden': indexAnimations.overlayHidden, 'home-landing-title-invisible-overlay-hidden-out': indexAnimations.otherAnimations,  }"></div>
      <div class="home-landing-title-h1">
        <h1 class="home-landing-title-h1-stroke" v-bind:class="{ 'home-landing-title-h1-stroke-visible': indexAnimations.titleVisible }">KILLIAN SOWA</h1>
        <h1 class="home-landing-title-h1-full" v-bind:class="{ 'home-landing-title-h1-full-visible': indexAnimations.titleVisible }">KILLIAN SOWA</h1>
      </div>
      <div class="home-landing-title-h2"><h2 class="home-landing-title-h2-text" v-bind:class="{ 'home-landing-title-h2-text-visible': indexAnimations.otherAnimations }">INTERACTIVE DEVELOPER</h2></div>
    </div>
  </section>
</template>

<script>
  import { mapState } from 'vuex';
  export default {
      computed: mapState(['indexAnimations']),
  }

</script>
<style lang="scss">
  .home-landing {
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background-color: #0B0045;
    transition: all 2s ease;

  &-backgroundAdded {
     background-color: transparent;
   }


  &-contour {
     position: absolute;
     width: 97%;
     height: 95%;
     top: 50%;
     left: 50%;
     z-index: 12;
     transform: translate(-50%, -50%);
     border: 2px solid #FD3D57;
     opacity: 0;
     pointer-events: none;
     transition: all 2s ease;

  &-visible {
     opacity: 0.6;
   }
  }

  &-socials {
     background-color: #FD3D57;
     display: flex;
     flex-direction: column;
     position: fixed;
     left: -60px;
     opacity: 0;
     bottom: 10%;
     width: 3%;
     justify-content: center;
     align-items: center;
     padding: 30px 5px 0px 5px;
     z-index: 15;
     transition: all 2s ease;

  &-visible {
     opacity: 1;
     left: 0;
   }


  a {
    margin-bottom: 30px;
  }

  img {
    display: block;
  }
  }


  &-title {
     text-align: center;
     width: 880px;
     position: relative;

  &-invisible-overlay {
     background-color: #0B0045;
     width: 100%;
     height: 200px;
     position: absolute;
     left: 0;
     top: 0;
     z-index: 8;
     transition: all 4.5s ease;

  &-hidden {
     transform: translateX(100%);

  &-out {
     display: none;
   }
  }
  }

  &-h1 {
     letter-spacing: 5px;
     font-size: 100px;
     position: relative;
     height: 100px;

  &-full, &-stroke {
             position: absolute;
             top: 0;
             left: 50%;
             transform: translateX(-50%);
             white-space: nowrap;
             visibility: hidden;
             opacity: 0;
             transition: all 2s ease;

  &-visible {
     visibility: visible;
     opacity: 1;
   }
  }
  &-full {
     color: white;

     z-index: 2;
   }


  &-stroke {
     top: 0;
     color: rgba(0,0,0,0);
     -webkit-text-stroke-width: 2px;
     -webkit-text-stroke-color: white;
     z-index: 10;
   }
  }

  &-h2 {
     font-size: 30px;
     letter-spacing: 5px;
     color: rgba(0,0,0,0);
     -webkit-text-stroke-width: 2px;
     -webkit-text-stroke-color: #FD3D57;
     overflow: hidden;
     height: 30px;
     transition: all 2s ease;
     z-index: 12;
     position: relative;

  &-text {
     transform: translateY(-32px);
     transition: all 2s ease;
     opacity: 0;


  &-visible {
     transform: translate(0);
     opacity: 1;
   }
  }
  }
  }

  &-scroll-incitator {
     height: 180px;
     width: 2px;
     position: absolute;
     left: 50%;
     bottom: -180px;
     transform: translate(-50%, 0px);
     background-color: white;
     opacity: 0;
     transition: all 2s ease;

  &-visible {
     bottom: -90px;
     opacity: 1;
   }
  }

  @media all and (max-width: 1080px) {
  &-socials {
    width: 50px;
  }
  &-title {
     max-width: 90%;
    h1 {
      font-size: 70px;
    }

    h2 {
      font-size: 25px;
    }
  }
  }

  @media all and (max-width: 600px) {
  &-socials {
    position: absolute;
    width: 44px;
  }
  }

  @media all and (max-width: 480px) {
  &-title {
    h1 {
      font-size: 50px;
    }

    h2 {
      font-size: 20px;
      -webkit-text-stroke-width: 1px;
    }
  }
  }
  }
</style>
