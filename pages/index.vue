<template>
  <div class="container">
      <home-landing />
      <home-create  />
      <home-brands  />
      <home-works  />
  </div>
</template>

<script>
import HomeLanding from '~/components/home/HomeLanding.vue';
import HomeCreate from '~/components/home/HomeCreate';
import HomeBrands from '~/components/home/HomeBrands';
import HomeWorks from '~/components/home/HomeWorks';
import HomeContact2 from "~/components/home/HomeContact2";

let titleVisible;
let overlayHidden;
let otherAnimations;

export default {
  components: {
    HomeLanding,
    HomeCreate,
    HomeBrands,
    HomeWorks,
    HomeContact2,
  },



    mounted() {
      titleVisible = setTimeout(() => {
            this.$store.commit('CHANGE_INDEXANIMATION_TITLEVISIBLE_STATE', true);
        }, 500);

      overlayHidden = setTimeout(() => {
            this.$store.commit('CHANGE_INDEXANIMATION_OVERLAYHIDDEN_STATE', true);
        }, 2000);

      otherAnimations = setTimeout(() => {
            this.$store.commit('CHANGE_INDEXANIMATION_OTHERANIMATIONS_STATE', true);
        }, 6000);

      //this.scrollSmooth();
    },

    methods: {
      scrollSmooth() {
        const scroll = new this.locomotiveScroll({
          el: document.querySelector('[data-scroll-container]'),
          smooth: true
        });
      },
    },

    destroyed() {
      clearTimeout(titleVisible);
      clearTimeout(overlayHidden);
      clearTimeout(otherAnimations);
    }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
