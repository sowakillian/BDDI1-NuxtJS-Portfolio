<template>
  <section class="project-presentation">
    <div class="project-presentation-description">
      <span class="project-presentation-description__title">{{ title2 }}</span>
      <p class="project-presentation-description__typeAndDate">{{ hashtags }}</p>
      <p class="project-presentation-description__text">{{ desc }}</p>
    </div>
    <div class="project-presentation-mockup">

    </div>
  </section>
</template>

<script>


    export default {
        props: [
            'title2',
            'hashtags',
            'desc',
        ],

    }

</script>
<style lang="scss">
  .project-presentation {
    padding: 150px 5%;
    display: flex;
    font-family: 'Roboto-Light';
    font-size: 20px;

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

      &-mockup {
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
