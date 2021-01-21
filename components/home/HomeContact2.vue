<template>
  <section class="contact2" id="contact">
    <div class="wrap">
      <div class="section-title">
        <p class="section-title-mainTitle">Don't be shy, I don't bite<span>.</span></p>
        <div class="section-title-quote">
          NOW TRY IT.
        </div>
      </div>
        <form action="" method="get" class="contact2-form">
          <div class="contact2-form-infos">
            <div class="contact2-form-name">
              <label for="name">Enter your name: </label>
              <input placeholder="Your firstname" type="name" name="firstname" id="name" required>
            </div>
            <div class="contact2-form-email">
              <label for="email">Enter your email: </label>
              <input placeholder="Your email" type="email" name="email" id="email" required>
            </div>
          </div>

          <div class="contact2-form-message">
            <textarea placeholder="Why do you need a crazy developer ?*"></textarea>
          </div>

          <div class="form-example">
            <input type="submit" value="Subscribe!">
          </div>
        </form>
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
      const homeWorks = document.querySelector('.contact2');
      const sectionTitle = document.querySelector('.contact2 .section-title-mainTitle');

      const scrollScene = new ScrollScene({
        triggerElement: homeWorks,
        triggerHook: "0.5",
        duration: "0",
      });

      scrollScene.Scene.on('enter', () => {
        document.body.style.background = "#FD3D57";
        sectionTitle.classList.add('whiteTitle');
        sectionTitle.classList.remove('darkTitle');
      });

      scrollScene.Scene.on('leave', () => {
        document.body.style.background = "white";
        sectionTitle.classList.add('darkTitle');
        sectionTitle.classList.remove('whiteTitle');
      });
    },
  }
}
</script>

<style lang="scss">
.contact2 {
  .wrap {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
  }

  &-form {
    margin: 0 auto;
    label {
      display: none;
    }

    &-infos {
      display: flex;
      justify-content: space-between;

      & > * {
        width: calc(50% - 10px);
        height: 80px;
        border: none;
        font-size: 25px;

        input {
          width: 100%;
          height: 100%;
          border: none;
          padding-left: 40px;
          font-size: 25px;
          color: black;
          font-family: MadeTommy-Medium;

          &::placeholder {
            font-size: 25px;
            color: #D3D1DB;
            font-family: MadeTommy-Medium;
          }
        }
      }
    }

    &-message {
      margin-top: 20px;
      textarea {
        color: black;
        font-family: MadeTommy-Medium;
        width: 100%;
        height: 180px;
        padding: 30px 40px;
        font-size: 25px;
        border: none;

        &::placeholder {
          font-size: 25px;
          color: #D3D1DB;
          font-family: MadeTommy-Medium;
        }
      }
    }

    max-width: 780px;
    width: 100%

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
