<template>
  <section class="project-next" v-if="nextprojecturl">
    <nuxt-link :to="nextprojecturl" href="#" class="project-next-text">NEXT PROJECT</nuxt-link>

        <div class="project-next-mainImage" :style="{ backgroundImage: `url('${nextbackground}')` }">
          <span class="project-selection-title">
            {{ nextproject }}
          </span>

          <nuxt-link :to="nextprojecturl" class="project-next-buttonMore">
            <span class="project-next-buttonMore-strokeVertical"></span>
            <span class="project-next-buttonMore-strokeHorizontal"></span>
          </nuxt-link>
        </div>
  </section>
</template>

<script>


    export default {
      props: [
          'nextproject',
          'nextprojecturl',
          'nextbackground'
      ]

    }

</script>
<style lang="scss">
  .project-next {
    display: flex;
    flex-direction: column;
    justify-content: center;


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

    &-mainImage {
      width: 600px;
      height: 300px;
      background-color: white;
      background-size: cover;
      z-index: 1;
      position: relative;
      background-position: center;
      margin: 0 auto 150px auto;
    }
    &-text {
      text-align: center;
      color: rgba(0,0,0,0);
      -webkit-text-stroke-width: 2px;
      -webkit-text-stroke-color: white;
      font-size: 100px;
      display: block;
      transition: all 0.4s ease;
      margin-bottom: 100px;

      &:hover {
        color: white;
      }
    }

    @media all and (max-width:980px) {
      &-text {
        font-size: 50px;
        -webkit-text-stroke-width: 1px;
      }
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
    }

    @media all and (max-width:480px) {
      &-text {
        font-size: 30px;
        -webkit-text-stroke-width: 1px;
      }
    }
  }

</style>
