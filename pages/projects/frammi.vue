<template>
  <div class="container">
    <project-header :title="title" :background="background" />
    <project-desc :title2="title2" :hashtags="hashtags" :desc="desc" :video="video" :mockup="mockup"/>
    <project-next :nextproject="nextproject" :nextprojecturl="nextprojecturl" :nextbackground="nextbackground"/>
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
                title: "FRAMMI AWARDS",
                background: "http://dropclothes.com/portfolio-killian/frammibg.jpg",
                title2: "FRAMMI",
                desc: "Frammi is a festival which rewards best realisations of students which studies works of multimedias and Internet. Audiovisual, communication, graphic design and programmation are judged and rewarded. I was the project manager and the front-end web developer for this project",
                hashtags: "2019 - #HTML #CSS #JS",
                mockup: "http://dropclothes.com/portfolio-killian/mockuframmi.png",
                nextproject:"TWEETOP",
                nextprojecturl:"/projects/tweetop",
                nextbackground: "http://dropclothes.com/portfolio-killian/twitterbg.png",
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
