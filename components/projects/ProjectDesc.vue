<template>
  <section class="project-presentation">
    <div class="project-presentation-texts">
      <div class="project-presentation-titleAndDesc">
        <span class="project-presentation-titleAndDesc-title" data-scroll data-scroll-speed="2">{{ title2 }}<span :style="{color: color}">.</span></span>
        <p class="project-presentation-titleAndDesc-text">{{ desc }}</p>
      </div>
      <div class="project-presentation-dateAndSkills">
      <span class="project-presentation-dateAndSkills-date">
        {{ date }}<span :style="{color: color}">.</span>
      </span>
        <div class="project-presentation-dateAndSkills-skills">
          <p class="project-presentation-dateAndSkills-skills-title">PROJECT SKILLS</p>
          <ul>
            <li v-for="skill in skills">
              {{ skill }}
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="project-presentation-photo" >
      <img src="~/assets/images/drop_photo1.jpg"/>
    </div>

  </section>
</template>

<script>


    export default {
        props: [
            'title2',
            'desc',
            'mockup',
            'color',
            'skills',
            'date'
        ],

    }

</script>
<style lang="scss">
  .project-presentation {
    padding: 150px 65px;
    font-family: 'Roboto-Light';
    font-size: 20px;
    max-width: 1400px;
    margin: 0 auto 90px auto;
    color: black;
    position: relative;
    z-index: 3;
  background-color: white;

    &-texts {
      display: flex;
      text-align: left;
      justify-content: space-between;
    }

    &-photo {
      margin-top: 100px;

      img {
        max-width: 100%;
      }
    }

    &-titleAndDesc {
    width: 60%;

      &-title {
        font-family: MadeTommy-Bold;
        font-size: 50px;
        margin-bottom: 50px;
        display: block;
      }

      &-text {
        font-family: MadeTommy-Light;
        font-size: 20px;
        line-height: 35px;
      }
    }

    &-dateAndSkills {
      &-date {
        font-family: MadeTommy-Bold;
        font-size: 50px;
        margin-bottom: 50px;
        display: block;
      }

      &-skills {
        margin-top: 105px;
        &-title {
          font-size: 16px;
          margin-bottom: 20px;
          font-family: MadeTommy-Medium;
        }

        ul {
          font-family: MadeTommy-Light;
          font-size: 20px;
          line-height: 35px;
        }
      }
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
