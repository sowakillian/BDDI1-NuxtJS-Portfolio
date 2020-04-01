<template>
  <div class="hb-menu">
    <nav role="navigation">
      <div class="hb-menu-button" @click="toggleMenu()">
        <input class="hb-menu-button-checkbox" type="checkbox"/>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>

    <ul id="menu" class="hb-menu-links hb-menu-links-visible">
      <li><a href="/works" class="link">WORKS</a></li>
      <li><a href="#about" class="link">ABOUT</a></li>
      <li><a href="#contact" class="link">CONTACT</a></li>
    </ul>
  </div>
</template>

<script>

    import { gsap } from 'gsap'

    const myTimeline = gsap.timeline();
    const myTimelineReversed = gsap.timeline();
    let isMenuActive = false;

  export default {



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
      transition: all 0.4S ease;

      li {
        margin-bottom: 50px;
        opacity: 0;
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

      a {
        text-decoration: none;
        color: #232323;
        transition: color 0.3s ease;

        &:hover {
          color: tomato;
        }
      }

      input {
        display: block;
        width: 50px;
        height: 32px;
        position: absolute;
        opacity: 0; /* hide this */
        z-index: 2; /* and place it over the hamburger */
        -webkit-touch-callout: none;
        cursor: none;
      }

      span {
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

    .hb-menu-button input:checked ~ span
    {
      opacity: 1;
      transform: rotate(45deg) translate(-2px, -1px);
    }

    /*
     * But let's hide the middle one.
     */
    .hb-menu-button input:checked ~ span:nth-of-type(2)
    {
      opacity: 0;
      transform: rotate(0deg) scale(0.2, 0.2);
    }

    /*
     * Ohyeah and the last one should go the other direction
     */
    .hb-menu-button input:checked ~ span:nth-of-type(3)
    {
      transform: rotate(-45deg) translate(0, -1px);
    }

    .hb-menu-button input:checked ~ ul
    {
      transform: none;
    }
  }

</style>
