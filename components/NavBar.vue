<template>
  <div ref="navbar" class="navbar">
    <div class="logo">
    </div>

    <div class="bg-lg-grey" ref="bgGrey" @click="hideNav()"></div>
    <div class="ham-bars" ref="bars" @click="toogleNav()">
      <div></div>
    </div>
    <div class="nav-group" ref="navGroup">
      <ul class="nav-item" ref="navItem">
        <li>
          <a id="about" data-target="about" @click="navSelected($event.target)"><p class="menu-no">01</p>About</a>
        </li>
        <li>
          <a id="work" data-target="work" @click="navSelected($event.target)"><p class="menu-no">02</p>Work</a>
        </li>
        <li>
          <a id="writing" data-target="writing" @click="navSelected($event.target)"><p class="menu-no">03</p>Writing</a>
        </li>
        <li>
          <a id="contact" data-target="contact" @click="navSelected($event.target)"><p class="menu-no">04</p>Contact</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, useStore, watch } from '@nuxtjs/composition-api'

export default {
  setup () {
    const store = useStore()
    const navbar = ref(null)

    const navItem = ref(null)
    const bars = ref(null)
    const navGroup = ref(null)
    const bgGrey = ref(null)

    watch(
      () => { return store.state.navScroll },
      (newValue, oldValue) => {
        const nav = navItem.value.querySelector('#' + newValue)
        navSelected(nav)
      }
    )

    onMounted(() => {
      window.addEventListener(
        'scroll',
        (event) => {
          if (window.scrollY > 100) {
            navbar.value.classList.add('blur')
          } else {
            navbar.value.classList.remove('blur')
          }
        }
      )
    })

    function navSelected (nav) {
      if (nav.classList.contains('menu-no')) {
        nav = nav.parentElement
      }
      const navTarget = nav.getAttribute('data-target')
      store.commit('setNavTarget', navTarget)

      const activeNav = navItem.value.getElementsByClassName('active')[0]
      if (activeNav != null) {
        activeNav.classList.remove('active')
      }
      nav.parentElement.classList.add('active')

      if (navGroup.value.classList.contains('nav-show')) {
        toogleNav()
      }
    }

    function toogleNav () {
      if (bars.value.classList.contains('nav-show')) {
        bars.value.classList.remove('nav-show')
      } else {
        bars.value.classList.add('nav-show')
      }

      if (navbar.value.classList.contains('nav-show')) {
        navbar.value.classList.remove('nav-show')
      } else {
        navbar.value.classList.add('nav-show')
        navbar.value.classList.remove('blur')
      }

      if (navGroup.value.classList.contains('nav-show')) {
        navGroup.value.classList.remove('nav-show')
        document.body.style.overflowY = ''
      } else {
        navGroup.value.classList.add('nav-show')
        navGroup.value.classList.remove('blur')
        document.body.style.overflowY = 'clip'
      }

      if (bgGrey.value.classList.contains('nav-show')) {
        bgGrey.value.classList.remove('nav-show')
      } else {
        bgGrey.value.classList.add('nav-show')
      }
    }

    function hideNav () {
      if (bars.value.classList.contains('nav-show')) {
        bars.value.classList.remove('nav-show')
      }

      if (navbar.value.classList.contains('nav-show')) {
        navbar.value.classList.remove('nav-show')
      }

      if (navGroup.value.classList.contains('nav-show')) {
        navGroup.value.classList.remove('nav-show')
        document.body.style.overflowY = ''
      }

      if (bgGrey.value.classList.contains('nav-show')) {
        bgGrey.value.classList.remove('nav-show')
      }
    }

    return {
      navbar,
      navSelected,
      navItem,
      bars,
      navGroup,
      bgGrey,
      toogleNav,
      hideNav
    }
  }
}
</script>

<style lang="scss">
@import "include-media";
@import '~/assets/scss/variables';

  .navbar{
    z-index: 1000;
    position: fixed;
    top: 0;
    padding: 0 150px;
    width: 100%;
    box-sizing: border-box;

    display: flex;
    flex-direction: row;
    align-items: center;

    transition: all 0.5s;
    height: 100px;

    &.blur {
      height: 70px;
      background-color: rgba(255, 255, 255, 50%);
      backdrop-filter: blur(8px);
      box-shadow: 0 4px 4px 0 rgba(0,0,0, 25%);
    }

    .logo {
      position: fixed;
      margin: 10px 0;
      width: 50px;
      height: 50px;
      background-image: url("~/assets/logo.png");
      background-size: cover;
    }

    .bg-lg-grey {
      display: none;
    }

    .ham-bars{
      display: none;
    }

    .nav-group {
      margin-left: auto;
      .nav-item {
        display: flex;
        list-style-type: none;
        li {
          margin: 0 25px;
          padding: 10px 0;
          a {
            white-space: pre-wrap;
            padding: 4px 8px;
            font-size: 16px;
            font-weight: 400;
            text-decoration: none;
            color: black;
            .menu-no {
              margin: 0;
              margin-right: 8px;
              display: inline;
              font-weight: 700;
            }
            &:hover {
              cursor: pointer;
            }
            // &.active {
            //   color: #1E90AC;
            // }
          }
          &.active {
            a {
              color: #1E90AC;
            }
            border-bottom: 5px solid #1E90AC;
          }
        }
      }
    }
  }

@include media("screen", "<=desktop-lg") {
  .navbar {
    padding: 0 100px;
  }
}

@include media("screen", "<=desktop") {
  .navbar {
    padding: 0 100px;

    &.nav-show {
      height: 100%;
    }
    .logo {
      z-index: 1200;
      position: fixed;
      top: 2px;
      left: 40px;
    }
    .bg-lg-grey{
      display: block;
      position: fixed;
      background-color: transparent;
      top: 0;
      left: 0;
      width: 100%;
      height: 100px;
      transition: all 0.5s;
      &.nav-show {
        height: 100%;
        background-color: rgba(138, 138, 138, 0.25);
        backdrop-filter: blur(8px);
      }
    }
    .ham-bars {
      display: flex;
      flex-direction: column;
      position: fixed;
      z-index: 1200;
      margin-left: auto;

      top: 20px;
      right: 40px;
      width: 32px;
      height: 32px;
      justify-content: center;
      &:hover{
        cursor: pointer;
        div{
          background-color: #1E90AC;
        }
        &::before {
          background-color: #1E90AC;
        }
        &::after {
          background-color: #1E90AC;
        }
      }
      div {
        width: 32px;
        height: 4px;
        background-color: black;
      }
      &::before{
        content: '';
        width: 32px;
        height: 4px;
        background-color: black;
        margin-bottom: 8px;
        transition-duration: 0.2s;
        transition-property: margin, transform;
        transition-delay: 0.2s, 0s;
      }
      &::after{
        content: '';
        width: 32px;
        height: 4px;
        background-color: black;
        margin-top: 8px;
        transition-duration: 0.2s;
        transition-property: margin, transform;
        transition-delay: 0.2s, 0s;
      }

      &.nav-show{
        div{
          background-color: transparent;
        }
        &::before{
          content: '';
          width: 32px;
          height: 4px;
          background-color: black;
          margin-bottom: -4px;
          transform: rotate(45deg);
          transition-delay: 0s, 0.2s;
        }
        &::after{
          content: '';
          width: 32px;
          height: 4px;
          background-color: black;
          margin-top: -4px;
          transform: rotate(135deg);
          transition-delay: 0s, 0.2s;
        }
        &:hover {
          &::before{
            background-color: white;
          }
          &::after{
            background-color: white;
          }
        }
      }
    }

    .nav-group{
      height: 100px;
      position: absolute;
      display: none;
      width: 280px;
      right: 0px;
      z-index: 1100;
      margin-left: auto;
      background-color: #08a2f9;
      transition: all 0.5s;
      // box-shadow: 0 4px 4px 0 rgba(0,0,0, 25%);
      &.nav-show{
        height: 100%;
        display: block;
      }

      .nav-item{
        display: flex;
        flex-direction: column;
        align-items: center;
        list-style-type: none;
        margin: auto;
        margin-top: 150px;
        padding: 0;
        width: fit-content;
        li {
          width: fit-content;
          display: inline-block;
          margin: 10px;
          padding: 0;
          a {
            white-space: pre;
            padding: 8px;
            margin: 0;
            font-size: 24px;
            font-weight: 700;
            text-decoration: none;
            color: black;
            display: flex;
            flex-direction: column;
            align-items: center;
            .menu-no {
              margin: 0;
              display: inline-block;
              font-size: 16px;
              font-weight: 400;
            }
            &:hover {
              cursor: pointer;
              color: white
            }
          }
          &.active {
            a {
              color: white;
            }
            border-bottom: 5px solid white;
          }
        }
      }
    }
  }
}
</style>
