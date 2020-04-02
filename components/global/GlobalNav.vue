<template>
  <div class="hb-menu" v-bind:class="{ 'hb-menu-visible': indexAnimations.otherAnimations }">
    <nav role="navigation">
      <div class="hb-menu-button" @click="isMenuActive = !isMenuActive">
        <input class="hb-menu-button-checkbox" type="checkbox"/>
        <span v-bind:class="{'hb-menu-button-span1-active hb-menu-button-span-active':(isMenuActive)}"></span>
        <span v-bind:class="{'hb-menu-button-span2-active hb-menu-button-span-active':(isMenuActive)}"></span>
        <span v-bind:class="{'hb-menu-button-span3-active hb-menu-button-span-active':(isMenuActive)}"></span>
      </div>
    </nav>

    <ul id="menu"  v-bind:class="{'hb-menu-links-active':(isMenuActive)}" class="hb-menu-links hb-menu-links-visible">
      <li @click="isMenuActive = !isMenuActive"><nuxt-link :to="{ path: '/',hash:'#works'}"  class="link">WORKS</nuxt-link></li>
      <li @click="isMenuActive = !isMenuActive"><nuxt-link :to="{ path: '/',hash:'#about'}" class="link">ABOUT</nuxt-link></li>
      <li @click="isMenuActive = !isMenuActive"><nuxt-link :to="{ path: '/',hash:'#contact'}" class="link">CONTACT</nuxt-link></li>
    </ul>
  </div>
</template>

<script>

    import { mapState } from 'vuex';
    import { gsap } from 'gsap'

    const myTimeline = gsap.timeline();
    const myTimelineReversed = gsap.timeline();
    let isMenuActive = false;

  export default {

      computed: mapState(['indexAnimations']),

      data (){
          return {
              isMenuActive: false,
          }
      },

      methods: {

        toggleMenu() {
            const linksMenu = document.querySelector('.hb-menu-links');
            const linkMenu1 = document.querySelector('.hb-menu-links li:nth-of-type(1)');
            const linkMenu2 = document.querySelector('.hb-menu-links li:nth-of-type(2)');
            const linkMenu3 = document.querySelector('.hb-menu-links li:nth-of-type(3)');

            console.warn('isMenuActive', isMenuActive);
            if (!isMenuActive) {
                console.warn(myTimeline, 'menupasactive');
                myTimeline
                    .to(linksMenu, {y: 0, duration: 0.6})
                    .to(linkMenu1, {opacity: 1, duration: 0.4} )
                    .to(linkMenu2, {opacity: 1, duration: 0.4} )
                    .to(linkMenu3, {opacity: 1, duration: 0.4} );
            } else {
                myTimelineReversed
                    .to(linkMenu3, {opacity: 0, duration: 0.4} )
                    .to(linkMenu2, {opacity: 0, duration: 0.4} )
                    .to(linkMenu1, {opacity: 0, duration: 0.4} )
                    .to(linksMenu, {y: '100%', duration: 0.6});
            }

            isMenuActive = !isMenuActive;
        },

        openMenu() {
            console.warn('test');

        }
      },

  }
</script>
<style lang="scss">
  .hb-menu {
    opacity: 0;
    visibility: hidden;
    transition: all 4s ease;
    &-visible {
      opacity: 1;
      visibility: visible;
    }

    &-links {
      height: 100vh;
      width: 100%;
      transform: translate(0, -100%);
      position: fixed;
      z-index: 20;
      background: radial-gradient(#160089, #0A0138);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 80px;
      letter-spacing: 10px;
      text-decoration: none;
      transition: all 1.5s ease;
      opacity: 1;

      &-active {
        transform:translate(0,0)
      }



      li {
        margin-bottom: 50px;
      }

      &:last-of-type {
        margin-bottom: 0;
      }
      .link {
        color: rgba(0,0,0,0);
        -webkit-text-stroke-width: 2px;
        -webkit-text-stroke-color: white;
        transition: all 0.6s ease;
        &:hover, &:focus {
          color: white;
        }
      }

      &-visible {
        right: 0;
      }
    }
    .hb-menu-button {
      display: block;
      position: fixed;
      top: 50px;
      right: 5%;
      z-index: 25;
      -webkit-user-select: none;
      user-select: none;

      &:hover {
        cursor: pointer;
      }

      a {
        &:hover {
          cursor: pointer;
        }
        text-decoration: none;
        color: #232323;
        transition: color 0.3s ease;

        &:hover {
          color: tomato;
        }
      }

      input {
        &:hover {
          cursor: pointer;
        }
        display: block;
        width: 50px;
        height: 32px;
        position: absolute;
        opacity: 0; /* hide this */
        z-index: 2; /* and place it over the hamburger */
        -webkit-touch-callout: none;
      }

      &-span-active {
        opacity: 1;
        transform: rotate(45deg) translate(-2px, -1px);
        background: #232323;
      }

      &-span2-active {
        opacity: 0;
        transform: rotate(0deg) scale(0.2, 0.2);
      }

      &-span3-active {
        transform: rotate(-45deg) translate(0, -2px);
      }

      span {
        &:hover {
          cursor: pointer;
        }
        display: block;
        width: 50px;
        height: 4px;
        margin-bottom: 10px;
        position: relative;

        background: white;

        z-index: 1;

        transform-origin: 4px 0px;

        transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
        background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
        opacity 0.55s ease;

        &:nth-of-type(2) {
          width: 40px;
        }

      }
    }

    .hb-menu-button span:first-child
    {
      transform-origin: 0% 0%;
    }

    .hb-menu-button span:nth-last-child(1)
    {
      transform-origin: 0% 100%;
    }

  }

</style>
