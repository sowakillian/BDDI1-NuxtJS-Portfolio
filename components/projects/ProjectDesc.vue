<template>
  <section class="project-presentation">
    <div class="project-presentation-description">
      <span class="project-presentation-description__title">DROP.</span>
      <p class="project-presentation-description__typeAndDate">2018 - #HTML #CSS #PHP #JS #MANAGEMENT</p>
      <p class="project-presentation-description__text">Drop est une marque que j'ai développé pendant l'été de l'année 2017. C'est sûrement mon projet le plus abouti à ce jour. Ce projet a fait appel à de nombreuses compétences différentes : création d'une plateforme de e-commerce, gestion d'équipe (photographe, vidéaste, communicant, modèles), développement web (Javascript, PHP).</p>
      <a target="_blank" href="https://www.dropclothes.com" class="project-presentation-description__link">VISIT THE WEBSITE</a>
    </div>
    <div class="project-presentation-mockup">

    </div>
  </section>
</template>

<script>


    export default {
        props: [
            'title',
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
