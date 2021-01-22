<template>
  <section class="brands" id="brands">
    <div class="wrap">
      <div class="section-title">
        <p class="section-title-mainTitle darkTitle">They could confirm, I'm crazy<span>.</span></p>
        <div class="section-title-quote">
          THEY SAW IT.
        </div>
      </div>
      <div class="brands-brands">
        <div class="brands-brands-line">
          <a href="http://www.6play.fr" target="_blank" class="brands-brands-brand sixplay">
            <img src="~/assets/images/logo_6play_white.png">
            <span class="brands-brands-brand-desc">I developed it<span>.</span></span>
          </a>
          <a href="https://www.libramedia.ca/" target="_blank"  class="brands-brands-brand libra">
            <img src="~/assets/images/logo_libra_white.png">
            <span class="brands-brands-brand-desc">I worked there<span>.</span></span>
          </a>
          <a href="https://www.salto.fr/" target="_blank"  class="brands-brands-brand salto">
            <img src="~/assets/images/logo_salto_white.png">
            <span class="brands-brands-brand-desc">I developed it<span>.</span></span>
          </a>
          <a href="https://www.uizard.io/" target="_blank"  class="brands-brands-brand uizard">
            <img src="~/assets/images/logo_uizard_white.png">
            <span class="brands-brands-brand-desc">I worked for them<span>.</span></span>
          </a>
        </div>
        <div class="brands-brands-line">
          <a href="https://www.newquest.fr/" target="_blank"  class="brands-brands-brand newquest"><img src="~/assets/images/logo_newquest_white.png">
            <span class="brands-brands-brand-desc">I worked there<span>.</span></span></a>
          <a href="https://www.tf1.fr/" target="_blank" class="brands-brands-brand tf1"><img src="~/assets/images/logo_uizard_white.png">
            <span class="brands-brands-brand-desc">I worked for them<span>.</span></span></a>
          <a href="https://www.dropclothes.com/" target="_blank" class="brands-brands-brand drop"><img src="~/assets/images/logo_drop_white.png">
            <span class="brands-brands-brand-desc">I created it<span>.</span></span></a>
          <a href="https://www.rtl.be/" target="_blank" class="brands-brands-brand"><img src="~/assets/images/logo_rtl_black.png">
            <span class="brands-brands-brand-desc">I worked for them<span>.</span></span></a>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.brands {
  display: none;
  .wrap {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
  }


  &-brands {
    width: 80%;
    background-color: transparent;
    margin: 0 auto;


    .sixplay, .newquest {
      img {
        max-width: 100px;
      }
    }

    .drop {
      img {
        max-width: 90px;
      }
    }

    .tf1 {
      img {
        max-width: 80px;
      }
    }

    .salto, .libra, .uizard {
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
      transition: all 0.5s ease;
      position: relative;

      &-desc {
        color: #FD3D57;
        font-family: MadeTommy-Black;
        font-size: 15px;
        top: 6rem;
        left: 50%;
        transform: translateX(-50%);
        position: absolute;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.3s ease;
        white-space: nowrap;

        span {
          color: #FD3D57;
        }
      }


      &:hover {
        transform: scale(1.05);
        .brands-brands-brand-desc {
          opacity: 1;
          visibility: visible;
        }
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
      const sectionTitleQuote = document.querySelector('.brands .section-title-quote');

      const scrollScene = new ScrollScene({
        triggerElement: homeWorks,
        triggerHook: "0.5",
        duration: "0",
      });

      scrollScene.Scene.on('enter', () => {
        document.body.style.background = "black";
        sectionTitle.classList.add('whiteTitle');
        sectionTitleQuote.classList.add('whiteTitle');
        sectionTitle.classList.remove('darkTitle');
        sectionTitleQuote.classList.remove('darkTitle');
      });

      scrollScene.Scene.on('leave', () => {
        document.body.style.background = "white";
        sectionTitle.classList.remove('whiteTitle');
        sectionTitleQuote.classList.remove('whiteTitle');
        sectionTitle.classList.add('darkTitle');
        sectionTitleQuote.classList.add('darkTitle');
      });

    },
  }
}
</script>
