<template>
  <section class="create" id="create">
    <div class="wrap">
      <div class="section-title">
        <p class="section-title-mainTitle">I create what you imagine<span>.</span></p>
        <div class="section-title-quote">
          I CAN DO IT.
        </div>
      </div>
      <div class="create-content">
        <div class="create-content-left">
          <div class="create-content-title">
            <p>Let me develop all your ideas.</p>
          </div>
          <div class="create-content-desc">
            <p>You have an idea, a concept or you just need to present your company ? I could develop websites or applications for you. I’m specialized in dynamic websites (with JavaScript) and iOS Apps (with Swift)</p>
          </div>
        </div>

        <div class="create-content-photo"></div>
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
      const sectionTitle = document.querySelector('.create .section-title-mainTitle');
      const sectionTitleQuote = document.querySelector('.create .section-title-quote');

      const scrollScene = new ScrollScene({
        triggerElement: homeCreate,
        triggerHook: "0.5",
        duration: "0",
      });

      scrollScene.Scene.on('enter', () => {
        document.body.style.background = "white";
        sectionTitle.classList.add('darkTitle');
        sectionTitle.classList.remove('whiteTitle');
        sectionTitleQuote.classList.remove('whiteTitle');
        sectionTitleQuote.classList.add('darkTitle');
      });

      scrollScene.Scene.on('leave', () => {
        document.body.style.background = "#FD3D57";
        sectionTitle.classList.remove('darkTitle');
        sectionTitle.classList.add('whiteTitle');
        sectionTitleQuote.classList.add('whiteTitle');
        sectionTitleQuote.classList.remove('darkTitle');
      });

    },
  }
}
</script>

<style lang="scss">
.create {
  display: none;
  .wrap {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
  }

  &-content {
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: black;

    &-title {
      font-size: 55px;
      font-family: MadeTommy-Black;
      margin-bottom: 20px;
    }

    & > * {
      width: 40%;
    }

    &-photo {
      background-color: black;
      width: 400px;
      height: 400px;
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
