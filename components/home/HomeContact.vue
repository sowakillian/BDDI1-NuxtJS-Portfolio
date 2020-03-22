<template>
  <section class="contact" id="contact">
    <div class="wrap">
      <div class="section-title">
        <p class="section-title-mainTitle">CONTACT</p>
        <p class="section-title-contour">CONTACT</p>
      </div>
      <div class="contact-content">
        <div class="contact-content-item">
          <p class="contact-content-item__title">
            INFOS
          </p>
          <ul class="contact-content-item-list">
            <li class="contact-content-item-list__item">ksowa@outlook.fr</li>
            <li class="contact-content-item-list__item">0636376304</li>
          </ul>
        </div>

        <div class="contact-content-item">
          <p class="contact-content-item__title">
            SOCIALS
          </p>
          <ul class="contact-content-item-list">
            <li class="contact-content-item-list__item">Behance</li>
            <li class="contact-content-item-list__item">Linkedin</li>
          </ul>
        </div>

        <div class="contact-content-item">
          <p class="contact-content-item__title">
            PLACES
          </p>
          <ul class="contact-content-item-list">
            <li class="contact-content-item-list__item">Lyon 69000</li>
            <li class="contact-content-item-list__item">Annecy 74000</li>
          </ul>
        </div>
      </div>
      <div class="contact-footer">KILLIAN SOWA</div>
    </div>

  </section>
</template>
<style lang="scss">
  .contact {
    position: relative;

  .wrap {
    display: flex;
    height: 100vh;
    flex-direction: column;
    justify-content: space-between;

  .section-title {
    margin-bottom: 0;
    margin-top: 80px;
  }
  }
  &-content {
     display: flex;

  & > * {
      width: calc(100% / 3);
    text-align: left;
    }

  &-item {
  &__title {
     font-size: 40px;
     margin-bottom: 60px;
   }

  &-list {
  &__item {
     font-size: 30px;
     font-family: 'Roboto-Regular';
     line-height: 45px;
   }
  }
  }
  }

  &-footer {
     font-size: 30px;
     width: 100%;
     text-align: center;
     padding-bottom: 40px;
     display: block;
   }

  @media all and (max-width: 1280px) {
  &-content {
  &-item {
  &__title {
     margin-bottom: 30px;
     font-size: 30px;
   }

  &-list {
  &__item {
     font-size: 20px;
   }
  }
  }
  }
  }

  @media all and (max-width: 767px) {
    .wrap {
      height: auto;
    }
  &-content {
     flex-direction: column;
     margin-top: 100px;

  &-item {
     margin-bottom: 55px;
   }

  & > * {
      width: 100%;
    }
  }
  }
  }

</style>
