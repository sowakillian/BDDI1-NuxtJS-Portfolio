<template>
  <section class="about" id="about">
    <div class="wrap">
      <div class="section-title">
        <p class="section-title-mainTitle">ABOUT</p>
        <p class="section-title-contour">ABOUT</p>
      </div>
      <div class="about-content">
        <div class="about-content-desc">
          <p>Hello ! My name is Killian Sowa and i'm a french interactive developer. I'm currently working in @M6Web on the web player, we work with principally with Javascript and React. I'm also a student at the @Gobelins where I do a bachelor Designer and Interactive Developer. NodeJS, Symfony, VueJS, everyday I work with new technologies and I'm pasionate about this ! </p>
        </div>
        <div class="about-content-photo"></div>
      </div>
    </div>
  </section>
</template>
<style lang="scss">
  .about {
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
