<template>
  <section class="create" id="create">
    <div class="wrap">
      <div class="section-title">
        <p class="section-title-mainTitle">I create what you imagine<span>.</span></p>
        <div class="section-title-quote">
          I CAN DO IT.
        </div>
      </div>
      <div class="about-content">
        <div class="about-content-title">
          <p>I develop your ideas.</p>
        </div>
        <div class="about-content-desc">
          <p>You have an idea, a concept or you just need to present your company ? I could develop websites or applications for you. I’m specialized in dynamic websites (with JavaScript) and iOS Apps (with Swift)</p>
        </div>
        <div class="about-content-photo"></div>
      </div>
    </div>
  </section>
</template>

<script>
import { ScrollScene } from 'scrollscene'

export default {

  mounted() {
    this.changeBgColor();
  },

  methods: {
    changeBgColor() {
      const homeCreate = document.querySelector('.create');

      const scrollScene = new ScrollScene({
        triggerElement: homeCreate,
        triggerHook: "0.5",
        duration: "0",
      });

      scrollScene.Scene.on('enter', () => {
        document.body.style.background = "black";
      });

      scrollScene.Scene.on('leave', () => {
        document.body.style.background = "#FD3D57";
      });

    },
  }
}
</script>

<style lang="scss">
.create {
  .wrap {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
  }

  &-content {
    display: flex;

    & > * {
      width: 50%;
    }


    &-desc {
      font-family: 'Roboto-Light';
      font-size: 20px;
      line-height: 30px;
    }
  }

  @media all and (max-width: 767px) {
    &-content {
      flex-wrap: wrap;
      & > * {
        width: 100%;
      }
    }
  }
}
</style>
