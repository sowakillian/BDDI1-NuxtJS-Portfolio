<template>
  <div class="container">
    <project-header :title="title" :image="imageHeader" :bgColor="bgColor" />
    <project-desc :title2="title2" :color="bgColor" :skills="skills" :desc="desc" :date="date" :video="video" :mockup="mockup"/>
    <project-next :nextproject="nextproject" :nextprojecturl="nextprojecturl" :nextbackground="nextbackground"/>
  </div>
</template>

<script>
    import ProjectHeader from '~/components/projects/ProjectHeader.vue'
    import ProjectDesc from '~/components/projects/ProjectDesc.vue'
    import ProjectNext from '~/components/projects/ProjectNext.vue'
    import { ScrollScene } from 'scrollscene'

    export default {
        components: {
            ProjectHeader,
            ProjectDesc,
            ProjectNext,
        },

      mounted() {
          this.changeBgColor()
      },

      methods: {


          scrollSmooth() {
            const scroll = new this.locomotiveScroll({
              el: document.querySelector('.container'),
              smooth: true
            });
          },

        changeBgColor() {
          document.body.style.background = "white";
        },
      },

        data (){
            return {
                title: "UIZARD",
                imageHeader: "/images/drop_photoheader.jpg",
                bgColor: "#FFC600",
                title2: "What a pleasure to work for a crazy tool like that",
                date: "2020",
                skills: ['Fullstack development', 'Graphic design', 'Team management', 'E-commerce',],
                desc: "Uizard is a tool to transform wireframes into websites or applications Uizard is a tool to transform wireframes into websites or applications Uizard is a tool to transform wireframes into websites or applications Uizard is a tool to transform wireframes into websites or applications Uizard is a tool to transform wireframes into websites or applications Uizard is a tool to transform wireframes into websites or applications Uizard is a tool to transform wireframes into websites or applications",
                nextproject:"POLO",
                nextprojecturl:"/projects/polo",
                mockup: "http://sowakillian.fr/wp-content/uploads/2019/05/dropmockup_big-1.png",
                nextbackground: "http://dropclothes.com/portfolio-killian/frammibg.jpg",
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
