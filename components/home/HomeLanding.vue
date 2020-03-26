<template>
  <section class="home-landing" v-bind:class="{ 'home-landing-backgroundAdded': indexAnimations.otherAnimations }">
    <span class="home-landing-scroll-incitator" v-bind:class="{ 'home-landing-scroll-incitator-visible': indexAnimations.otherAnimations }"></span>
    <span class="home-landing-contour" v-bind:class="{ 'home-landing-contour-visible': indexAnimations.otherAnimations }"></span>
    <div class="home-landing-socials" v-bind:class="{ 'home-landing-socials-visible': indexAnimations.otherAnimations }">
      <a href="#"><img src="~/assets/images/mail.svg"></a>
      <a href="#"><img src="~/assets/images/linkedin.svg"></a>
      <a href="#"><img src="~/assets/images/behance-network.svg"></a>
    </div>
    <div class="home-landing-title">
      <div class="home-landing-title-squares" v-bind:class="{ 'home-landing-title-squares-visible': indexAnimations.otherAnimations }">
        <div class="home-landing-title-squares-square home-landing-title-squares-square-1">
        </div>
        <div class="home-landing-title-squares-square home-landing-title-squares-square-2">
        </div>
        <div class="home-landing-title-squares-square home-landing-title-squares-square-3">
        </div>
        <div class="home-landing-title-squares-square home-landing-title-squares-square-4">
        </div>
        <div class="home-landing-title-squares-square home-landing-title-squares-square-5">
        </div>
        <div class="home-landing-title-squares-square home-landing-title-squares-square-6">
        </div>
        <div class="home-landing-title-squares-square home-landing-title-squares-square-7">
        </div>
      </div>
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
  let currentX = '';
  let currentY = '';
  let movementConstant = .0150;


  export default {
      computed: mapState(['indexAnimations']),

      methods: {
          putParallax (e) {
              console.warn('mouseMoving');
              const allSquares = document.querySelectorAll('.home-landing-title-squares-square');
              if(currentX === '') currentX = e.pageX;

              var xdiff = e.pageX - currentX;
              console.warn(xdiff)
              currentX = e.pageX;
              if(currentY === '') currentY = e.pageY;
              var ydiff = e.pageY - currentY;
              currentY = e.pageY;

              allSquares.forEach((el, i) => {
                  let movement = (i + 4) * (xdiff * movementConstant);
                  let movementy = (i + 4) * (ydiff * movementConstant);
                  console.warn(el.style);
                  let newX = el.offsetLeft + movement;
                  let newY = el.offsetTop + movementy;
                  console.warn('newX', newX, 'newY', newY);
                  console.warn('movement', movement, 'movementy', movementy);
                  el.style.left = newX+'px';
                  console.warn(el.style.left);
                  el.style.top = newY+'px';
                  console.warn(el.style.top);
              })
          }
      },

      created () {
          if (process.browser) {
              //window.addEventListener('mousemove', e => this.putParallax(e));
          }
      },
      destroyed () {
          if (process.browser) {
              //window.removeEventListener('mousemove', e => this.putParallax(e));
          }
      }
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
     transition: all 4s ease;

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

    &-squares {
      height: 328px;
      width: 70%;
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      top: 50%;
      opacity: 0;
      transition: all 4s ease;


      &-visible {
        opacity: 1;
      }

      &-square {
        height: 328px;
        width: 100%;
        position: absolute;
        border: 2px solid #FD3D57;

        &-1 {
          opacity: 0.4;
          left: 0;
          top: 0;
        }

        &-2 {
          left: -25px;
          bottom: -25px;
          opacity: 0.30;
        }

        &-3 {
          left: -50px;
          bottom: -50px;
          opacity: 0.18;
        }

        &-4 {
          left: -75px;
          bottom: -75px;
          opacity: 0.12;
        }

        &-5 {
          left: -100px;
          bottom: -100px;
          opacity: 0.07;
        }

        &-6 {
          left: -125px;
          bottom: -125px;
          opacity: 0.04;
        }

        &-7 {
          left: -150px;
          bottom: -150px;
          opacity: 0.02;
        }
      }
    }

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
     transition: all 4s ease;
     z-index: 12;
     position: relative;

  &-text {
     transform: translateY(-32px);
     transition: all 4s ease;
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
     transition: all 4s ease;

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
