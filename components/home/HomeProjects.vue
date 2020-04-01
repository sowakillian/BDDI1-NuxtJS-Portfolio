<template>
  <section class="project-selection">
    <div class="project-selection-slide-container">
      <div class="project-selection-slide-container-slide">
        <span class="project-selection-numberBig">01</span>
        <div class="project-selection-drop">
          <div class="project-selection-mainImage" :style="{ backgroundImage: `url(${dropBg})` }">
          <span class="project-selection-numberLittle">
            01
            <span class="project-selection-numberLittle-underline"></span>
            <span class="project-selection-numberLittle-contour">/05</span>
          </span>
            <span class="project-selection-title">
            DROP.
          </span>
            <nuxt-link to="/projects/dropclothes" class="project-selection-buttonMore">
              <span class="project-selection-buttonMore-strokeVertical"></span>
              <span class="project-selection-buttonMore-strokeHorizontal"></span>
            </nuxt-link>
          </div>
        </div>
      </div>

      <div class="project-selection-slide-container-slide">
        <span class="project-selection-numberBig">02</span>
        <div class="project-selection-drop">
          <div class="project-selection-mainImage" :style="{ backgroundImage: `url(${frammiBg})` }">
          <span class="project-selection-numberLittle">
            02
            <span class="project-selection-numberLittle-underline"></span>
            <span class="project-selection-numberLittle-contour">/05</span>
          </span>
            <span class="project-selection-title">
            FRAMMI
          </span>
            <nuxt-link to="/projects/frammi" class="project-selection-buttonMore">
              <span class="project-selection-buttonMore-strokeVertical"></span>
              <span class="project-selection-buttonMore-strokeHorizontal"></span>
            </nuxt-link>
          </div>
        </div>
      </div>

      <div class="project-selection-slide-container-slide">
        <span class="project-selection-numberBig">03</span>
        <div class="project-selection-drop">
          <div class="project-selection-mainImage" :style="{ backgroundImage: `url(${twitterBg})` }">
          <span class="project-selection-numberLittle">
            03
            <span class="project-selection-numberLittle-underline"></span>
            <span class="project-selection-numberLittle-contour">/05</span>
          </span>
            <span class="project-selection-title">
            TWEETOP
          </span>
            <nuxt-link to="/projects/tweetop" class="project-selection-buttonMore">
              <span class="project-selection-buttonMore-strokeVertical"></span>
              <span class="project-selection-buttonMore-strokeHorizontal"></span>
            </nuxt-link>
          </div>
        </div>
      </div>

      <div class="project-selection-slide-container-slide">
        <span class="project-selection-numberBig">04</span>
        <div class="project-selection-drop">
          <div class="project-selection-mainImage" :style="{ backgroundImage: `url(${dropBg})` }">
          <span class="project-selection-numberLittle">
            04
            <span class="project-selection-numberLittle-underline"></span>
            <span class="project-selection-numberLittle-contour">/05</span>
          </span>
            <span class="project-selection-title">
            SACHA
          </span>
            <nuxt-link to="/projects/sacha" class="project-selection-buttonMore">
              <span class="project-selection-buttonMore-strokeVertical"></span>
              <span class="project-selection-buttonMore-strokeHorizontal"></span>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    import { gsap } from 'gsap'
    import { ScrollScene } from 'scrollscene'
    import dropBg from '~/assets/images/project_img/drop.jpg'
    import frammiBg from '~/assets/images/project_img/frammi.png'
    import twitterBg from '~/assets/images/project_img/twitter.jpg'

  export default {

      data() {
          return { dropBg, frammiBg, twitterBg }
      },

        mounted() {
            this.slideProject();
        },

      methods: {
          slideProject() {
             const projectSelection = document.querySelector('.project-selection');
             const projectSelectionSlideContainer = document.querySelector('.project-selection-slide-container');

              const myTimeline = gsap.timeline({ paused: true });

              myTimeline
                  .to(projectSelectionSlideContainer, 0.5, {z: -150})		// move back in 3D space
                  .to(projectSelectionSlideContainer, 1,   {x: "-25%"})	// move in to first panel
                  .to(projectSelectionSlideContainer, 0.5, {z: 0})				// move back to origin in 3D space
                  // animate to third panel
                  .to(projectSelectionSlideContainer, 0.5, {z: -150, delay: 1})
                  .to(projectSelectionSlideContainer, 1,   {x: "-50%"})
                  .to(projectSelectionSlideContainer, 0.5, {z: 0})
                  // animate to forth panel
                  .to(projectSelectionSlideContainer, 0.5, {z: -150, delay: 1})
                  .to(projectSelectionSlideContainer, 1,   {x: "-75%"})
                  .to(projectSelectionSlideContainer, 0.5, {z: 0});


              const scrollScene = new ScrollScene({
                  triggerElement: projectSelection,
                  triggerHook: "onLeave",
                  duration: "500%",
                  gsap: {
                      timeline: myTimeline,
                  },
              });

              scrollScene.Scene.on('enter', function(event) {console.log('Scene entered.')});
              scrollScene.Scene.setPin(projectSelection);
          },
      }
  }
</script>

<style lang="scss">
  .project-selection {
    height: 100vh;
    width: 100%;
    position: relative;
    overflow: hidden;
    -webkit-perspective: 1000px;
    perspective: 1000px;

  &-slide-container {
     width: 400%; /* to contain 4 panels, each with 100% of window width */
     height: 100%;
     position: relative;

  &-slide {
     height: 100%;
     width: 25%; /* relative to parent -> 25% of 400% = 100% of window width */
     float: left;
     position: relative;

  & > div {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  }

  &-mainImage {
     background-size: cover;
     position: relative;
   }

  &-title {
     position: absolute;
     right: 10%;
     bottom: -50px;
     font-size: 90px;
   }

  &-buttonMore {
     position: absolute;
     background-color: #FD3D57;
     right: -60px;
     bottom: -29px;
     width: 80px;
     height: 80px;
     border-radius: 40px;


  &:hover {
     cursor: pointer;
  .project-selection-buttonMore-strokeHorizontal {
    transform: translate(-50%, -50%) rotate(90deg);
  }
  }

  &-strokeVertical {
     width: 33px;
     height: 3px;
     background-color:  #0B0045;
     position: absolute;
     left: 50%;
     top: 50%;
     transform: translate(-50%, -50%);
   }

  &-strokeHorizontal {
     transition: all 0.2s ease;
     height: 33px;
     width: 3px;
     background-color: #0B0045;
     position: absolute;
     left: 50%;
     top: 50%;
     transform: translate(-50%, -50%);
   }
  }

  &-numberBig {
     font-family: IntegralCF-Bold;
     color: rgba(0,0,0,0);
     font-size: 500px;
     position: absolute;
     left: -5%;
     bottom: 0;
     -webkit-text-stroke-width: 2px;
     -webkit-text-stroke-color: #FD3D57;
   }

  &-numberLittle {
     position: absolute;
     left: -110px;
     top: 20px;

  &-underline {
     height: 20px;
     width: 90%;
     position: absolute;
     bottom: -10px;
     right: 0;
     background-color: #FD3D57;
   }

  &-contour {
     font-family: IntegralCF-Bold;
     color: rgba(0,0,0,0);
     position: absolute;
     bottom: -50px;
     left: 0;
     font-size: 50px;
     -webkit-text-stroke-width: 2px;
     -webkit-text-stroke-color: #FD3D57;
   }
  }

  //  & > div {
        //   display: flex;
        //   justify-content: center;
        //   align-items: center;
        //   height: 100vh;
        //  }

  &-mainImage {
     width: 50%;
     height: 50%;
     background-color: white;
     z-index: 1;
     position: relative;
     background-position: center;
   }

  @media all and (max-width: 1500px) {
  &-numberBig {
    font-size: 400px;
  }
  }

  @media all and (max-width: 1080px) {
  &-title {
    bottom: -30px;
    font-size: 50px;
  }
  &-numberBig {
     font-size: 300px;
   }
  }

  @media all and (max-width: 1080px) {
  &-buttonMore {
    right: -30px;
    bottom: -29px;
    width: 50px;
    height: 50px;
  &-strokeVertical {
     width: 20px;
   }

  &-strokeHorizontal {
     height: 20px;
   }
  }
  &-mainImage {
     width: 65%;
   }
  &-numberBig {
     font-size: 200px;
   }
  }

  @media all and (max-width: 480px) {
  &-mainImage {
    height: 30%;
  }
  &-title {
     font-size: 30px;
     bottom: -15px;
     right: 20%;

   }
  &-numberBig {
     left: -20px;
     bottom: 50px;
     font-size: 150px;
   }

  &-numberLittle {
     left: -40px;
     top: 10px;
     font-size: 40px;

  &-underline {
     height: 8px;
   }

  &-contour {
     bottom: -20px;
     font-size: 20px;
     -webkit-text-stroke-width: 1px;
   }
  }
  }


  }

</style>
