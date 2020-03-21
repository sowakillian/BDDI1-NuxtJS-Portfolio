<template>
  <div class="container">
      <home-landing />
      <home-projects />
      <home-about />
      <home-contact />
  </div>
</template>

<script>
import HomeLanding from '~/components/home/HomeLanding.vue'
import HomeProjects from '~/components/home/HomeProjects.vue'
import HomeAbout from '~/components/home/HomeAbout.vue'
import HomeContact from '~/components/home/HomeContact.vue'

export default {
  components: {
    HomeLanding,
    HomeProjects,
    HomeAbout,
    HomeContact,
  },

    mounted() {
        setTimeout(() => {
            this.$store.commit('CHANGE_INDEXANIMATION_TITLEVISIBLE_STATE', true);
        }, 500);

        setTimeout(() => {
            this.$store.commit('CHANGE_INDEXANIMATION_OVERLAYHIDDEN_STATE', true);
        }, 2000);

        setTimeout(() => {
            this.$store.commit('CHANGE_INDEXANIMATION_OTHERANIMATIONS_STATE', true);
        }, 6000)
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
