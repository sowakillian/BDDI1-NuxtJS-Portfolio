<template>
  <section class="works" id="works">
    <main data-scroll-container>
      <div class="content">
        <div class="gallery">
          <div class="gallery__text"><span class="gallery__text-inner" data-scroll data-scroll-speed="3" data-scroll-direction="vertical">now,</span><span data-scroll data-scroll-speed="-4" data-scroll-direction="vertical" class="gallery__text-inner">check it<span>.</span></span></div>
          <figure class="gallery__item" data-scroll data-scroll-speed="2" data-scroll-direction="vertical">
            <nuxt-link to="/projects/dropclothes" class="gallery__item-img"><div class="gallery__item-imginner" data-scroll data-scroll-speed="1" data-scroll-direction="vertical" style="background-image: url(/images/works/1.jpg)"></div></nuxt-link>
            <figcaption class="gallery__item-caption">
              <h2 class="gallery__item-title" data-scroll data-scroll-speed="1" data-scroll>DropClothes.</h2>
              <p class="gallery__item-tags">
                <span>#house</span>
                <span>#green</span>
                <span>#chair</span>
              </p>
            </figcaption>
          </figure>
          <figure class="gallery__item" data-scroll data-scroll-speed="-2" data-scroll-direction="vertical">
            <div class="gallery__item-img"><div class="gallery__item-imginner" data-scroll data-scroll-speed="1" data-scroll-direction="vertical" style="background-image: url(/images/works/2.jpg)"></div></div>
            <figcaption class="gallery__item-caption">
              <h2 class="gallery__item-title" data-scroll data-scroll-speed="1">IgniteChimp.</h2>
              <p class="gallery__item-tags">
                <span>#love</span>
                <span>#hug</span>
                <span>#people</span>
              </p>
            </figcaption>
          </figure>
          <figure class="gallery__item" data-scroll data-scroll-speed="2" data-scroll-direction="vertical">
            <div class="gallery__item-img" ><div class="gallery__item-imginner" data-scroll data-scroll-speed="1" data-scroll-direction="vertical" style="background-image: url(/images/works/1.jpg)"></div></div>
            <figcaption class="gallery__item-caption">
              <h2 class="gallery__item-title" data-scroll data-scroll-speed="1">UizardTool.</h2>
              <p class="gallery__item-tags">
                <span>#hike</span>
                <span>#nature</span>
                <span>#rain</span>
              </p>
            </figcaption>
          </figure>
          <figure class="gallery__item" data-scroll data-scroll-speed="-2" data-scroll-direction="vertical">
            <div class="gallery__item-img"><div class="gallery__item-imginner" data-scroll data-scroll-speed="1" data-scroll-direction="vertical" style="background-image: url(/images/works/3.jpg)"></div></div>
            <figcaption class="gallery__item-caption">
              <h2 class="gallery__item-title" data-scroll  data-scroll-speed="1">PoloTravel.</h2>
              <p class="gallery__item-tags">
                <span>#free</span>
                <span>#wood</span>
                <span>#fire</span>
              </p>
            </figcaption>
          </figure>
          <figure class="gallery__item" data-scroll data-scroll-speed="2" data-scroll-direction="vertical">
            <div class="gallery__item-img"><div class="gallery__item-imginner" data-scroll data-scroll-speed="1" data-scroll-direction="vertical" style="background-image: url(/images/works/4.jpg)"></div></div>
            <figcaption class="gallery__item-caption">
              <h2 class="gallery__item-title" data-scroll  data-scroll-speed="1">FrammiAwards.</h2>
              <p class="gallery__item-tags">
                <span>#cloud</span>
                <span>#lake</span>
                <span>#frog</span>
              </p>
            </figcaption>
          </figure>
          <figure class="gallery__item" data-scroll data-scroll-speed="-2" data-scroll-direction="vertical">
            <div class="gallery__item-img"><div class="gallery__item-imginner" data-scroll data-scroll-speed="1" data-scroll-direction="vertical" style="background-image: url(/images/works/5.jpg)"></div></div>
            <figcaption class="gallery__item-caption">
              <h2 class="gallery__item-title" data-scroll  data-scroll-speed="1">MaisonBaud.</h2>
              <p class="gallery__item-tags">
                <span>#tent</span>
                <span>#flower</span>
                <span>#love</span>
              </p>
            </figcaption>
          </figure>
          <div class="gallery__text"><span class="gallery__text-inner" data-scroll data-scroll-speed="-4" data-scroll-direction="vertical">Daria</span><span data-scroll data-scroll-speed="3" data-scroll-direction="vertical" class="gallery__text-inner">Gaita</span></div>
        </div>
      </div>
    </main>

  </section>
</template>

<style lang="scss">
.works {
  .wrap {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
  }

  &-title {
    font-size: 260px;
    font-family: 'IntegralCF-Bold', sans-serif;
    text-align: center;

    span {
      color: #FD3D57;
    }
  }

  .gallery {
    display: flex;
    margin-left: 12vw;
    padding-right: 12vw;
  }

  .gallery__item {
    margin: 0 3vw;
    display: grid;
    grid-template-areas: '... ...'
						 '... gallery-image'
						 '... ...' ;
    grid-template-columns: 8rem 21vmax;
    grid-template-rows: 8rem 28vmax 3rem;
    will-change: transform;
  }

  .gallery__item:nth-child(even) {
    padding-top: 10vh;
  }

  .gallery__item-img {
    grid-area: gallery-image;
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    will-change: transform;
  }

  .gallery__item-imginner {
    background-size: cover;
    background-position: 50% 0;
    width: 100%;
    height: calc(100% + 14vh);
    margin-top: -7vh;
    will-change: transform;
  }

  .gallery__item-caption {
    grid-area: 1 / 1 / 4 / 3;
    display: grid;
    grid-template-areas: 'gallery-number gallery-title'
						 'gallery-link ...'
						 'gallery-link gallery-tags' ;
    grid-template-columns: 8rem auto;
    grid-template-rows: 8rem auto 3rem;

  }

  .gallery__item-number {
    grid-area: gallery-number;
    font-size: 6rem;
    font-size: clamp(2.5rem,9vw,6.5rem);
    justify-self: end;
    padding-right: 2rem;
    color: var(--color-gallery-number);
  }

  .gallery__item-title {
    grid-area: gallery-title;
    margin: 0;
    font-size: 4rem;
    font-size: clamp(2rem,5vw,4rem);
    color: white;
  }

  .gallery__item-number,
  .gallery__item-title,
  .gallery__text {
    font-family: MadeTommy-Black, serif;
    font-weight: 800;
    font-style: italic;
    align-self: center;
  }

  .gallery__item-link {
    grid-area: gallery-link;
    align-self: end;
    font-size: 1.5rem;
    background: var(--color-gallery-link-bg);
    color: var(--color-gallery-link);
    text-decoration: underline;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .gallery__item-link:focus,
  .gallery__item-link:hover {
    background: var(--color-gallery-link-bg-hover);
    color: var(--color-gallery-link-hover);
    text-decoration: none;
  }

  .gallery__item-tags {
    grid-area: gallery-tags;
    justify-self: end;
    font-size: 1.5rem;
    display: grid;
    grid-auto-flow: column;
    grid-gap: 1rem;
    cursor: pointer;
  }

  .gallery__text {
    font-size: 12vw;
    line-height: 1.2;
    margin: 0 10vw 0 14vw;
    text-transform: lowercase;
    font-style: normal;
    font-family: IntegralCF-Bold;
    color: white;

  }

  .gallery__text-inner {
    display: block;

    span {
      color: #FD3D57;
    }
  }

}
</style>

<script>
import { ScrollScene } from 'scrollscene'
import imagesLoaded from 'imagesloaded';

export default {

  data() {
    return {
      canScrollProjects: false,
    }
  },

  mounted() {
   this.changeBgColor();
    this.scrollStart()
  },

  methods: {
    map(x, a, b, c, d) {
      return (x - a) * (d - c) / (b - a) + c
    },

// Linear interpolation
    lerp(a, b, n) {
     return  (1 - n) * a + n * b;
    },

    clamp (num, min, max) {
      return num <= min ? min : num >= max ? max : num;
    },

    randomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    },

// Gets the mouse position
    getMousePos(e) {
      return {
        x : e.clientX,
        y : e.clientY
      };
    },

// Gets the mouse position

//
    preloadImages(selector = 'img')  {
      return new Promise((resolve) => {
        imagesLoaded(document.querySelectorAll(selector), {background: true}, resolve);
      });
    },

// Preload images
    preloadFonts(id) {
      return new Promise((resolve) => {
        WebFont.load({
          typekit: {
            id: id
          },
          active: resolve
        });
      });
    },

    scrollStart() {
      // Initialize Locomotive Scroll (horizontal direction)

      const lscroll = new this.locomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
        direction: 'horizontal'
      });

      lscroll.on('scroll', (obj) => {
        for (const key of Object.keys(obj.currentElements)) {
          if ( obj.currentElements[key].el.classList.contains('gallery__item-imginner') ) {
            let progress = obj.currentElements[key].progress;
            const saturateVal = progress < 0.5 ? this.clamp(this.map(progress,0,0.5,0,1),0,1) : this.clamp(this.map(progress,0.5,1,1,0),0,1);
            const brightnessVal = progress < 0.5 ? this.clamp(this.map(progress,0,0.5,0,1),0,1) : this.clamp(this.map(progress,0.5,1,1,0),0,1);
            obj.currentElements[key].el.style.filter = `saturate(${saturateVal}) brightness(${brightnessVal})`
          }
        }
      });
      lscroll.update();

// Preload images and fonts
      Promise.all([this.preloadImages('.gallery__item-imginner'), this.preloadFonts('vxy2fer')]).then(() => {
        // Remove loader (loading class)
        document.body.classList.remove('loading');

      });
    },

    changeBgColor() {
      const homeWorks = document.querySelector('.works');

      const scrollScene = new ScrollScene({
        triggerElement: homeWorks,
        triggerHook: "0",
        duration: "0",
      });

      scrollScene.Scene.on('enter', () => {
        this.canScrollProjects = true;
        console.warn('i enter in scene')
        document.body.style.overflow = "hidden";
        document.html.style.overflow = "hidden";
        document.body.style.overflowX = "hidden";
      });
    },
  }
}
</script>
