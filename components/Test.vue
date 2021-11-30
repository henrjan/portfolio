<template>
  <div class="swiper-test">
    <div class="swiper-container mySwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="skill">
            <div class="php" />
            <p>PHP</p>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="skill">
            <div class="php" />
            <p>PHP</p>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="skill">
            <div class="php" />
            <p>PHP</p>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="skill">
            <div class="php" />
            <p>PHP</p>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="skill">
            <div class="php" />
            <p>PHP</p>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="skill">
            <div class="php" />
            <p>PHP</p>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="skill">
            <div class="php" />
            <p>PHP</p>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="skill">
            <div class="php" />
            <p>PHP</p>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="skill">
            <div class="php" />
            <p>PHP</p>
          </div>
        </div>
      </div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import { ref, useStore, watch, onMounted } from '@nuxtjs/composition-api'
import Swiper from 'swiper'
import SwiperCore, { Navigation, Pagination } from 'swiper/core';
import breakpoints from '~/assets/js/breakpoints'
import 'swiper/swiper-bundle.min.css';

SwiperCore.use([Navigation, Pagination]);

export default {
  setup (props) {
    const store = useStore()
    const about = ref(null)
    let breakpoint
    let swiper = new Swiper('.swiper-container', {
        modules: [Navigation, Pagination],
        slidesPerView: 'auto',
        spaceBetween: 30,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      })

    // onMounted(() => {
    //   breakpoint = window.matchMedia(`(min-width:${breakpoints.tablet})`)

    //   breakpoint.addEventListener("change", ()=>{
    //     checkBreakpoint()
    //   })
    //   checkBreakpoint()
    // }),

    /* watch(
      () => { return store.state.navTarget },
      (newValue) => {
        if (newValue === 'about') {
          const style = window.getComputedStyle(about.value)
          let margin = style.marginTop.match(/\d+/)

          margin = parseInt(margin)
          const newOffset = about.value.offsetTop - margin - store.state.navHeight
          window.scrollTo(
            {
              top: newOffset,
              left: 0,
              behavior: 'smooth'
            }
          )
        }
      }
    ) */

    /* function goToWork (button) {
      store.commit('setNavScroll', 'work')
    } */

    function checkBreakpoint () {
      console.log("breakpoint changes", breakpoint.matches)
      if (breakpoint.matches === true) {
        if (swiper !== undefined) {
          swiper.destroy(true, true)
        }
      } else {
        return enableSwiper()
      }
    }

    function enableSwiper () {
      swiper = new Swiper('.swiper-container', {
        modules: [Navigation, Pagination],
        slidesPerView: 'auto',
        spaceBetween: 30,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      })
    }

    return {
      about,
    //   goToWork
    }
  }
}
</script>

<style lang="scss">

// .swiper-container {
//     width: 100%;
//     height: fit-content;

//     margin: auto;
//     width: fit-content;
//     max-width: 100%;

//     display: grid;
//     grid-template-columns: repeat(4, auto);
//     column-gap: 100px;
//     row-gap: 60px;

//     display: flex;
//     // flex-wrap: wrap;

// }

// .swiper-slide {
//     text-align: center;
//     font-size: 18px;
//     background: #fff;
//     width: fit-content;

//     background-color: lightgray;

//     /* Center slide text vertically */
//     display: -webkit-box;
//     display: -ms-flexbox;
//     display: -webkit-flex;
//     display: flex;
//     -webkit-box-pack: center;
//     -ms-flex-pack: center;
//     -webkit-justify-content: center;
//     justify-content: center;
//     -webkit-box-align: center;
//     -ms-flex-align: center;
//     -webkit-align-items: center;
//     align-items: center;
// }

// .skill {
//     position: relative;
//     width: 200px;
//     height: 200px;

//     display: flex;
//     justify-content: center;

//     grid-column: span 4;
//     margin: 0 30px;
//     &:nth-last-child(2) {
//       grid-row-start: 3;
//       grid-column: 3 / span 4;
//     }
//     &:nth-last-child(1) {
//       grid-row-start: 3;
//       grid-column: 7 / span 4;
//     }

//     display: flex;
//     width: fit-content;
//     width: 200px;
//     max-width: 100%;
//     grid-column: unset;
//     margin: 0 30px;
//     &:nth-last-child(2) {
//       grid-row-start: unset;
//       grid-column: unset;
//     }
//     &:nth-last-child(1) {
//       grid-row-start: unset;
//       grid-column: unset;
//     }
//     div {
//         width: 150px;
//         height: 150px;

//         background-size: 150px;
//         background-repeat: no-repeat;
//         background-position: center;
//         &.php {
//             background-image: url("~/assets/svg/php.svg");
//         }
//     }
//     p {
//         position: absolute;
//         bottom: 0;

//         display: inline-block;
//         margin: 0;
//         font-size: 16px;
//         font-weight: 700;
//         color: #20ADFD;
//     }
// }
</style>