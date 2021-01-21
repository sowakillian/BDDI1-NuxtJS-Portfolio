<template>
  <section class="brands" id="brands">
    <div class="wrap">
      <div class="section-title">
        <p class="section-title-mainTitle darkTitle">They could confirm, I'm crazy<span>.</span></p>
        <div class="section-title-quote">
          THEY KNOW IT.
        </div>
      </div>
      <div class="brands-brands">
        <div class="brands-brands-line">
          <a href="http://www.6play.fr" target="_blank" class="brands-brands-brand sixplay"><img src="~/assets/images/logo_6play_black.png"></a>
          <a href="https://www.libramedia.ca/" target="_blank"  class="brands-brands-brand libra"><img src="~/assets/images/logo_libra_black.png"></a>
          <a href="https://www.salto.fr/" target="_blank"  class="brands-brands-brand salto"><img src="~/assets/images/logo_salto_black.png"></a>
          <a href="https://www.uizard.io/" target="_blank"  class="brands-brands-brand"><img src="~/assets/images/logo_uizard_black.png"></a>
        </div>
        <div class="brands-brands-line">
          <a href="https://www.newquest.fr/" target="_blank"  class="brands-brands-brand"><img src="~/assets/images/logo_newquest_black.png"></a>
          <a href="https://www.tf1.fr/" target="_blank" class="brands-brands-brand"><img src="~/assets/images/logo_tf1_black.png"></a>
          <a href="https://www.dropclothes.com/" target="_blank" class="brands-brands-brand"><img src="~/assets/images/logo_drop_black.png"></a>
          <a href="https://www.rtl.be/" target="_blank" class="brands-brands-brand"><img src="~/assets/images/logo_rtl_black.png"></a>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.brands {
  .wrap {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
  }

  .section-title-mainTitle {
    color: black;
  }

  .section-title-quote {
    color: #0A0138;
    opacity: 0.06;
  }

  &-brands {
    width: 80%;
    background-color: transparent;
    margin: 0 auto;

    .sixplay {
      img {
        max-width: 100px;
      }
    }

    .salto, .libra {
      img {
        max-width: 114px;
      }
    }
    &-brand {
      width: calc(100% / 4);
      text-align: center;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s ease;


      &:hover {
        background-color:#F9F9FA ;
        cursor: pointer;
      }

      &:last-of-type {
        border-right: 0;
      }
    }

    &-line {
      color: black;
      height: 140px;
      display: flex;

      &:first-of-type {
        .brands-brands-brand {
        }
      }
    }
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

<script>
import { ScrollScene } from 'scrollscene'

export default {

  mounted() {
    this.changeBgColor();
  },

  methods: {
    changeBgColor() {
      const homeWorks = document.querySelector('.brands');
      const sectionTitle = document.querySelector('.brands .section-title-mainTitle');

      const scrollScene = new ScrollScene({
        triggerElement: homeWorks,
        triggerHook: "0.5",
        duration: "0",
      });

      scrollScene.Scene.on('enter', () => {
        document.body.style.background = "white";
        sectionTitle.classList.add('darkTitle');
        sectionTitle.classList.remove('whiteTitle');
      });

      scrollScene.Scene.on('leave', () => {
        document.body.style.background = "black";
        sectionTitle.classList.add('whiteTitle');
        sectionTitle.classList.remove('darkTitle');
      });
    },
  }
}
</script>
