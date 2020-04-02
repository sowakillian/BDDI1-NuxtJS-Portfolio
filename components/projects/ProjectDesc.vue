<template>
  <section class="project-presentation">
    <div class="project-presentation-description">
      <span class="project-presentation-description__title">{{ title2 }}</span>
      <p class="project-presentation-description__typeAndDate">{{ hashtags }}</p>
      <p class="project-presentation-description__text">{{ desc }}</p>
    </div>
    <div class="project-presentation-mockup">
      <div  class="project-presentation-mockup-frammi" v-if="mockup === 'http://dropclothes.com/portfolio-killian/mockuframmi.png'">
        <img :src="mockup">
      </div>
      <div  class="project-presentation-mockup-drop" v-if="mockup === 'http://sowakillian.fr/wp-content/uploads/2019/05/dropmockup_big-1.png'">
        <img :src="mockup">
      </div>
      <div  class="project-presentation-mockup-nodeapi" v-if="mockup === 'http://dropclothes.com/portfolio-killian/nodeapi.jpg'">
        <img :src="mockup">
      </div>
      <div  class="project-presentation-mockup-sacha" v-if="mockup === 'http://dropclothes.com/portfolio-killian/sachamockup.png'">
        <img :src="mockup">
      </div>
    </div>
  </section>
</template>

<script>


    export default {
        props: [
            'title2',
            'hashtags',
            'desc',
            'mockup'
        ],

    }

</script>
<style lang="scss">
  .project-presentation {
    padding: 150px 65px;
    display: flex;
    font-family: 'Roboto-Light';
    font-size: 20px;
    margin-bottom: 90px;

    & > * {
      width: 50%;
    }

    &-mockup {
      text-align: center;
      video {
        max-width: 80%;
        height: auto;
        margin: 0 auto;
      }

      &-sacha {
        display: flex;
        justify-content: flex-end;
        img {
          max-width: 100%;
        }
      }

      &-nodeapi {
        display: flex;
        justify-content: flex-end;
        img {
          max-width: 80%;
        }
      }

      &-drop {
        display: flex;
        justify-content: flex-end;
        img {
          max-width: 100%;
        }
      }
      &-frammi {
        position: relative;
        img{
          right: -65px;
          top: -95px;
          position: absolute;
        }
      }
    }

    &-description {
      text-align: left;
      &__title {
        font-family: IntegralCF;
        font-size: 100px;
        margin-bottom: 50px;
        display: block;
      }

      &__typeAndDate {
        margin-bottom: 20px;
        font-family: IntegralCF-Regular;
        word-spacing: 7px;
      }

      &__text {
        line-height: 30px;
        margin-bottom: 20px;
      }

      a {
        font-family: IntegralCF-Regular;
        color: #FD3D57;
      }
    }

    @media all and (max-width: 980px) {
      flex-wrap: wrap;
margin-bottom: 20px;
      padding: 50px;

      &-mockup {
        &-frammi {
          display: none;
        }
        video {
          max-width: 100%;
        }
      }

      &-description {
        margin-bottom: 70px;

        &__title {
          font-size: 70px;
        }
      }
      & > * {
        width: 100%;
      }
    }

    @media all and (max-width: 767px) {

      &-description {

        &__title {
          font-size: 40px;
          margin-bottom: 20px;
        }
      }
    }
  }

</style>
