<template>
  <div ref="about" class="about">
    <h1>About Me</h1>
    <div class="profile">
      <div class="picture" />
      <div class="about-me">
        <p>Hi, nice to meet you, I'm Henry. I build things for the web and currently working as a Back-End developer at <a class="about-link" href="https://www.cls-indo.com/" target="_blank" rel="noopener noreferrer">CLS System</a> located in Jakarta. I started doing web development since 2016 when i still was a university student building a simple digital advertising web as college assignment. I graduated from university on 2018 and have been working as a software engineer since.</p>

        <p>While i mainly develop Back-End application, i also have experiences in developing Front-End and Mobile application. Some tools i used as developer includes but not limited to Golang, Vue.js (Nuxt.js), and Java (Kotlin). I enjoy solving complex problems into simple codes. When i am not writing codes, i enjoy reading engineering stuffs.</p>
        <a class="button-dl" href="https://drive.google.com/file/d/14pmXil7VM2J5I5cnb9rtGrnqBUePX1KS/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          <p>My Resume</p>
          <i class="file" />
        </a>
      </div>
    </div>
    <div class="what_i_do">
      <h3>What I Do</h3>
      <div class="jobdesk">
        <div class="joblist">
          <div class="job">
            <div class="phone" />
            <h4>Application Development</h4>
            <p>I develop Mobile Application using Native Programming Language with other tools and libraries.</p>
          </div>
        </div>
        <div class="joblist">
          <div class="job">
            <div class="tags" />
            <h4>Web Development</h4>
            <p>I use various web technologies and frameworks to build fast and performant client-side application.</p>
          </div>
        </div>
        <div class="joblist">
          <div class="job">
            <div class="service" />
            <h4>Web Services</h4>
            <p>I use various tools to build reliable and scalable server side application including web APIs and microservices</p>
          </div>
        </div>
      </div>
      <p class="go_to_work" @click="goToWork($event.target)">
        See my work
      </p>
    </div>
    <div class="my_skillset">
      <h3>My Skillsets</h3>
      <div class="wrapper">
        <div class="swiper-container">
          <div class="swiper-wrapper skillsets">
            <div class="swiper-slide">
              <div class="skill">
                <div class="golang" />
                <p>Golang</p>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="skill">
                <div class="kotlin" />
                <p>Kotlin</p>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="skill">
                <div class="javascript" />
                <p>JavaScript</p>
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
                <div class="html" />
                <p>HTML</p>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="skill">
                <div class="css" />
                <p>CSS</p>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="skill">
                <div class="nuxtjs" />
                <p>Nuxt.js</p>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="skill">
                <div class="docker" />
                <p>Docker</p>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-pagination"></div>
        <div class="swiper-button-next-unique"></div>
        <div class="swiper-button-prev-unique"></div>
      </div>
    </div>
    <div class="work_experience">
      <h3>Where I've Worked</h3>
      <div class="company">
        <div class="company_name">
          <div class="indicator">
            <div />
            <h3>PT. CLS SYSTEM</h3>
          </div>
          <div class="line" />
        </div>
        <div class="job_desc">
          <h2>Software Engineer</h2>
          <h2 class="dp-desktop corp-name">PT. CLS System</h2>
          <p class="duration">Nov 2018 - Present</p>
          <ul class="job_resp">
            <li>Build performant and robust back-end application for many different clients and internal projects.</li>
            <li>Increase speed of Back-end application development using new system architecture.</li>
            <li>Working with multidiciplinary teams of engineers and designers to build an e-commerce and marketplace platform.</li>
            <li>Increase e-commerce and marketplace platform's marketing efficiency using Firebase Cloud Messaging and Email API Service.</li>
            <li>Optimize assets delivery and management such as images and documents on each projects using Cloudinary Platform.</li>
            <li>Work closely with Devops teams to improve deployments efficiency using Docker and CI/CD Pipeline.</li>
            <li>Providing users with more secure and diverse payment channels by integrating Payment Gateway Services on e-commerce and marketplace platform.</li>
            <li>Integrating third party digital voucher API service thus reducing amount of dead stock and expired voucher  and providing on-demand digital voucher when necessary.</li>
            <li>Built management platform to reduce operation teams workload and improves operational productivity.</li>
            <li>Improve quality of code by analyzing existing architecture, refactoring legacy code and removing redundant code.</li>
          </ul>
        </div>
      </div>
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
    let swiper

    onMounted(() => {
      breakpoint = window.matchMedia(`(min-width:${breakpoints.tablet})`)

      breakpoint.addEventListener("change", ()=>{
        checkBreakpoint()
      })
      checkBreakpoint()
    }),

    watch(
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
    )

    function goToWork (button) {
      store.commit('setNavScroll', 'work')
    }

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
        spaceBetween: 0,
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next-unique',
          prevEl: '.swiper-button-prev-unique'
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      })
    }

    return {
      about,
      goToWork
    }
  }
}
</script>

<style lang="scss">
@import "include-media";
@import '~/assets/scss/variables';

$font-ox: Oxanium Font Medium;
$font-weight: 500;

@font-face {
    font-family: $font-ox;
    font-style: normal;
    font-weight: $font-weight;
    src: url('~/assets/fonts/oxanium/Oxanium-Medium.ttf') format('truetype');
}

.dp-desktop-md,
.dp-desktop,
.dp-tablet,
.dp-phone {
  display: none;
}

.about {
  margin-top: 40px;
    width: 100%;
    h1 {
        width: fit-content;
        margin: auto;
        margin-bottom: 32px;
        color: #1E90AC;
        font-size: 24px;
    }
    .profile {
        margin: auto;
        margin-bottom: 100px;

        max-width: 1000px;

        display: flex;
        flex-direction: row;

        .picture {
            border: solid 8px #ECF5FA;
            border-radius: 50%;
            margin: 0 50px;

            width: 200px;
            height: 200px;

            background-image: url("~/assets/photo.jpeg");
            background-size: 200px;
            background-position: center;
            background-repeat: no-repeat;
        }
        .about-me {
            width: 600px;
            p {
              text-indent: 0;
              text-align: left;
              white-space: pre-wrap;
              font-size: 16px;
              margin: 0;
              margin-bottom: 28px;
              .about-link {
                color: #059ef5;
                text-decoration: none;
                &:hover {
                  cursor: pointer;
                  text-decoration: underline;
                }
              }
            }
            .button-dl {
                padding: 8px 36px;

                width: fit-content;

                background-color: #20ADFD;

                display: flex;
                flex-direction: row;
                align-items: center;
                text-decoration: none;

                transition: background-color 0.5s;
                &:hover{
                    cursor: pointer;
                    background-color: #059ef5;
                }
                p {
                    display: inline-block;
                    color: white;
                    margin: 0;
                    margin-right: 4px;
                    font-size: 16px;
                    font-weight: 700;
                }
                .file {
                    height: 20px;
                    width: 20px;
                    background-image: url("~/assets/icons/file.svg");
                    background-size: 16px;
                    background-position: center;
                    background-repeat: no-repeat;
                }
            }
        }
    }
    .what_i_do {
        width: 100%;
        margin-bottom: 100px;
        h3 {
            width: fit-content;
            font-size: 18px;
            font-weight: 700;

            color: #1E90AC;
            margin: auto;
            margin-bottom: 20px;
        }
        .jobdesk {
            display: flex;
            flex-direction: row;
            align-items: center;

            width: fit-content;
            margin: auto;
            margin-bottom: 20px;
            .joblist {
                margin: 30px;
                width: 300px;
                height: 300px;

                box-shadow: 0 4px 4px 0 rgba(0,0,0, 25%);

                text-align: center;

                display: flex;
                flex-wrap: wrap;
                align-content: center;

                .job {
                    width: fit-content;
                    height: fit-content;
                    margin: auto;
                    h4 {
                        font-size: 16px;
                        font-weight: 700;
                        color: #41AFFF;
                        margin-bottom: 16px;
                    }
                    p {
                        font-size: 16px;
                        width: 250px;
                        margin: auto;
                    }
                    div {
                        height: 120px;
                        width: 120px;
                        background-size: 120px;
                        background-position: center;
                        background-repeat: no-repeat;
                        margin: auto;
                        margin-bottom: 16px;
                        &.phone{
                            background-image: url("~/assets/svg/mobile.png");
                        }
                        &.tags{
                            background-image: url("~/assets/svg/tags.png");
                        }
                        &.service{
                            background-image: url("~/assets/svg/web_service.png");
                        }
                    }
                }
            }
        }
        .go_to_work {
            width: fit-content;
            text-decoration: underline;
            font-size: 16px;
            font-weight: 500;
            color: #41AFFF;
            margin: auto;

            &:hover {
                color: #059ef5;
                cursor: pointer;
            }
        }
    }
    .my_skillset {
        width: 100%;
        margin-bottom: 100px;
        h3 {
            width: fit-content;
            font-size: 18px;
            font-weight: 700;

            color: #1E90AC;
            margin: auto;
            margin-bottom: 50px;
        }

        .wrapper {
          .swiper-button-next-unique, 
          .swiper-button-prev-unique, 
          .swiper-pagination {
            display: none;
          }
        }
        .skillsets {
            margin: auto;
            width: fit-content;

            display: grid;
            grid-template-columns: repeat(4, auto);
            column-gap: 100px;
            row-gap: 60px;
            .swiper-slide {
              width: fit-content;

              display: -webkit-box;
              display: -ms-flexbox;
              display: -webkit-flex;
              display: flex;
              -webkit-box-pack: center;
              -ms-flex-pack: center;
              -webkit-justify-content: center;
              justify-content: center;
              -webkit-box-align: center;
              -ms-flex-align: center;
              -webkit-align-items: center;
              align-items: center;
              .skill {
                margin: 0;
                position: relative;
                width: 150px;
                height: 150px;

                display: flex;
                justify-content: center;
                div {
                    width: 100px;
                    height: 100px;

                    background-size: 100px;
                    background-repeat: no-repeat;
                    background-position: center;
                    &.golang {
                        background-image: url("~/assets/svg/go.svg");
                    }
                    &.kotlin {
                        background-image: url("~/assets/svg/kotlin.svg");
                    }
                    &.javascript {
                        background-image: url("~/assets/svg/javascript.svg");
                    }
                    &.php {
                        background-image: url("~/assets/svg/php.svg");
                    }
                    &.html {
                        background-image: url("~/assets/svg/html.svg");
                    }
                    &.css {
                        background-image: url("~/assets/svg/css.svg");
                    }
                    &.nuxtjs {
                        background-image: url("~/assets/svg/nuxt-dot-js.svg");
                    }
                    &.docker {
                        background-image: url("~/assets/svg/docker.svg");
                    }
                }
                p {
                    position: absolute;
                    bottom: 0;

                    display: inline-block;
                    margin: 0;
                    font-size: 16px;
                    font-weight: 700;
                    color: #20ADFD;
                }
              }
            }
        }
    }
    .work_experience {
        width: 100%;
        margin-bottom: 60px;
        h3 {
            width: fit-content;
            font-size: 18px;
            font-weight: 700;

            color: #1E90AC;
            margin: auto;
            margin-bottom: 20px;
        }
        .company {
            width: fit-content;
            margin: auto;
            display: flex;
            flex-direction: row;
            .company_name {
                display: flex;
                justify-content: center;
                flex-direction: column;

                width: fit-content;
                margin-right: 50px;
                .indicator {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    // margin-bottom: 4px;
                    div {
                        width: 4px;
                        height: 50px;
                        background-color: #1E90AC;
                        margin-right: 20px;
                    }
                    h3 {
                        margin: 0;
                        font-size: 20px;
                        font-weight: 700;
                        color: #1E90AC;
                    }
                }
                .line {
                    flex-grow: 1;
                    margin: auto;
                    width: 2px;
                    background-image: linear-gradient(to bottom, #333 20%, rgba(255, 255, 255, 0) 0%);
                    background-position: center;
                    background-size: 4px 16px;
                    background-repeat: repeat-y;
                }
            }
            .job_desc {
                width: 600px;
                h2 {
                    font-size: 24px;
                    font-weight: 700;
                    margin-top: 8px;
                    margin-bottom: 4px;
                }
                // p {
                //   font-size: 16px;
                //   font-weight: 400;
                //   margin: 0;
                //   margin-bottom: 16px;
                // }
                .duration {
                    font-size: 12px;
                    font-family: $font-ox;
                    font-weight: 700;
                    color: #1E90AC;
                    margin: 0;
                    margin-bottom: 16px;
                }
                .job_resp {
                  padding-left: 16px;
                  li {
                    margin-bottom: 8px;
                    &:last-child{
                      margin: 0;
                    }
                  }
                }
            }
        }
    }
}
@include media("screen", "<=desktop") {
  .about {
    .profile{
      width: fit-content;
      display: block;
      .picture {
          margin: 0;
          margin-right: 20px;
          margin-bottom: 20px;

          width: 160px;
          height: 160px;

          background-size: 160px;
          float: left;
      }
      .about-me {
        .button-dl {
          margin: auto;
        }
      }
    }
    .what_i_do {
      .jobdesk {
        .joblist {
          margin: 12px;
          width: 240px;
          height: 240px;
          .job {
            h4 {
              font-size: 14px;
            }
            p {
              font-size: 14px;
              width: 200px;
            }
            div {
              height: 100px;
              width: 100px;
              background-size: 100px;
            }
          }
        }
      }
    }
    .my_skillset {
      .skillsets {
        display: grid;
        grid-template-columns: repeat(12, auto);
        column-gap: 0px;
        row-gap: 60px;
        .skill {
          grid-column: span 4;
          margin: 0 30px;
          &:nth-last-child(2) {
            grid-row-start: 3;
            grid-column: 3 / span 4;
          }
          &:nth-last-child(1) {
            grid-row-start: 3;
            grid-column: 7 / span 4;
          }
        }
      }
    }
    .work_experience {
        width: 100%;
        margin-bottom: 60px;
        h3 {
            width: fit-content;
            font-size: 18px;
            font-weight: 700;

            color: #1E90AC;
            margin: auto;
            margin-bottom: 40px;
        }
        .company {
            .company_name {
                margin-right: 32px;
                .indicator {
                    div {
                        height: 36px;
                        margin-right: 12px;
                    }
                    h3 {
                        font-size: 16px;
                    }
                }
            }
            .job_desc {
              width: 500px;
              h2 {
                font-size: 20px;
                margin-top: 4px;
                margin-bottom: 8px;
              }
              .duration {
                font-size: 14px;
              }
            }
        }
    }
  }
}

@include media("screen", "<=tablet") {
  .about {
    h1{
      margin-bottom: 40px;
    }
    .profile{
      width: fit-content;
      display: block;
      margin-left: auto;
      margin-right: auto;
      // @include media("screen", "<=520px") {
      //   margin-left: 20px;
      //   margin-right: 20px;
      // }
      .picture {
          margin: auto;
          margin-bottom: 20px;
          float: none;
      }
      .about-me {
        width: 480px;
      }
    }
    .what_i_do{
      h3{
        margin-bottom: 40px;
      }
      .jobdesk {
        flex-direction: column-reverse;
        justify-content: center;
        .joblist {
          margin: 20px;
          width: 300px;
          height: 300px;
          .job {
            h4 {
              font-size: 16px;
              margin-bottom: 16px;
            }
            p {
              font-size: 16px;
              width: 250px;
            }
            div {
              height: 120px;
              width: 120px;
              background-size: 120px;
            }
          }
        }
      }
    }
    .my_skillset {
      .wrapper {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        .swiper-button-next-unique, 
        .swiper-button-prev-unique {
          display: inline-block;
          width: 28px;
          height: 48px;
          background-repeat: no-repeat;
          background-size: 100%;
          background-position: center;

          &:hover {
            cursor: pointer;
          }
        }
        .swiper-button-next-unique {
          background-image: url("~/assets/icons/chevron-right-solid.svg");
        }
        .swiper-button-prev-unique {
          order: -1;
          background-image: url("~/assets/icons/chevron-left-solid.svg");
        }
        .swiper-pagination {
          display: inline-block;
          align-self: flex-end;
          margin-bottom: -32px;
          & > * {
            margin-right: 8px;
            &:last-of-type {
              margin-right: 0;
            }
          }
        }
        .swiper-container {

          margin: 0;
          width: 480px;
          // max-width: 480px;
          // min-width: unset;
          // max-width: 90%;

          display: flex;
          .skillsets {
            display: flex;
            max-width: 100%;
            .skill {
              display: flex;
              grid-column: unset;
              margin: 0 20px;

              width: 120px;
              height: 120px;
              &:nth-last-child(2) {
                grid-row-start: unset;
                grid-column: unset;
              }
              &:nth-last-child(1) {
                grid-row-start: unset;
                grid-column: unset;
              }
              div {
                  width: 80px;
                  height: 80px;

                  background-size: 80px;
              }
              p {
                  font-size: 14px;
              }
            }
          }
        }
      }
    }
    .work_experience {
        .company {
          width: fit-content;
          margin: auto;
          display: block;
          // display: flex;
          // flex-direction: row;
          .company_name {
            display: none;
          }
          .job_desc {
            width: 480px;
            h2 {
              display: inline-block;
            }
            .corp-name {
              color: #1E90AC;
              &::before{
                content: '@';
                margin: 0 4px;
              }
            }
            .job_resp {
              font-size: 14px;
            }
          }
        }
    }
  }
}

@include media("screen", "<=phone") {
 .about {
    h1 {
      font-size: 20px;
      margin-bottom: 28px;
    }
    .profile {
      width: fit-content;
      margin-right: auto;
      margin-left: auto;
      margin-bottom: 64px;
      .picture {
        width: 120px;
        height: 120px;

        background-size: 120px;
      }
      .about-me {
        display: flex;
        justify-content: center;
        flex-direction: column;

        margin: clamp(16px, 5%,400px);
        width: fit-content;
        max-width: 400px;
        p {
          font-size: 12px;
          &:first-of-type{
            margin-bottom: 16px;
          }
        }
        .button-dl {
          padding: 6px 24px;
          p {
            font-size: 12px;
            margin-bottom: 0;
          }
          .file {
            display: inline-block;
            height: 16px;
            width: 16px;
            background-size: 12px;
          }
        }
      }
    }
    .what_i_do {
      margin-bottom: 64px;
      h3 {
        font-size: 14px;
        margin-bottom: 24px;
      }
      .jobdesk {
        .joblist {
          width: 240px;
          height: 240px;
          .job {
            width: fit-content;
            height: fit-content;
            margin: auto;
            h4 {
              font-size: 14px;
              // font-weight: 700;
              // color: #41AFFF;
              margin-bottom: 14px;
            }
            p {
              font-size: 12px;
              width: 200px;
              // margin: auto;
            }
            div {
              height: 100px;
              width: 100px;
              background-size: 100px;
            }
          }
        }
      }
      .go_to_work {
        font-size: 14px;
      }
    }
    .my_skillset {
      // margin-bottom: 80px;
      h3 {
        font-size: 14px;
        margin-bottom: 32px;
      }
      .wrapper {
        .swiper-button-next-unique, 
        .swiper-button-prev-unique {
          display: none;
        }
        .swiper-container {
          width: 100%;
          max-width: 360px;
          .swiper-wrapper {
            .swiper-slide{
              .skill {
                margin: 0 10px;

                width: 100px;
                height: 100px;
                &:nth-last-child(2) {
                  grid-row-start: unset;
                  grid-column: unset;
                }
                &:nth-last-child(1) {
                  grid-row-start: unset;
                  grid-column: unset;
                }
                div {
                  width: 72px;
                  height: 72px;

                  background-size: 72px;
                }
                p {
                  font-size: 12px;
                }
              }
            }
          }
        }
      }
    }
    .work_experience {
      h3 {
        font-size: 14px;
        margin-bottom: 32px;
      }
      .company {
        margin-left: 20px;
        width: 320px;
        .job_desc {
          width: 100%;
          h2 {
            display: inline-block;
            font-size: 14px;
            margin-bottom: 4px;
          }
          .duration {
            font-size: 11px;
            margin-bottom: 8px;
          }
          .job_resp {
            margin-top: 0;
            font-size: 12px;
          }
        }
      }
    }
  }
}
</style>
