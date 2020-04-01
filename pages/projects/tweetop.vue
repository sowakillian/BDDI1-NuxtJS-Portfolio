<template>
  <div class="container">
    <project-header :title="title" :background="background" />
    <project-desc :title2="title2" :hashtags="hashtags" :desc="desc" :video="video" :mockup="mockup"/>
    <project-next />
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
                title: "TWEETOP",
                background: "http://dropclothes.com/portfolio-killian/twitterbg.png",
                title2: "TWEETOP",
                desc: "Tweetop is a back-end application which get on real-time the tweets on twitter and which send it to a client after having filtered it. I used principally NodeJS and websockets for this application and it was very interesting to connect on twitter API and undertstand how to use these API",
                hashtags: "2020 - #NODEJS #BACKEND #SOCKETS"
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
