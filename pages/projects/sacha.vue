<template>
  <div class="container">
    <project-header :title="title" :background="background" />
    <project-desc :title2="title2" :hashtags="hashtags" :desc="desc" :video="video" :mockup="mockup"/>
    <project-next :nextproject="nextproject" :nextbackground="nextbackground"/>
  </div>
</template>

<script>
    import ProjectHeader from '~/components/projects/ProjectHeader.vue'
    import ProjectDesc from '~/components/projects/ProjectDesc.vue'
    import ProjectNext from '~/components/projects/ProjectNext.vue'

    export default {
        components: {
            ProjectHeader,
            ProjectDesc,
            ProjectNext,
        },

        data (){
            return {
                title: "SACHA SMOOTHIES",
                background: "https://cdn.futura-sciences.com/buildsv6/images/wide1920/f/a/f/fafa4b665d_114351_smoothies-fruits-legumes-sante.jpg",
                title2: "SACHA",
                desc: "Sacha Smoothie is a personnal project. The goal ? Learn how to do mobile programming with Swift. To learn Swift I created the design of this fake application to could program it with Swift after. It is'nt easy to work on a fake project but it was really cool !",
                hashtags: "2020 - #DESIGN #SWIFT",
                mockup: "http://dropclothes.com/portfolio-killian/sachamockup.png",
                nextbackground: "http://sowakillian.fr/wp-content/uploads/2019/05/background_drop.jpg",
            }
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
