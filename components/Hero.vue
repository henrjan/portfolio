<template>
  <div ref="home" class="hero">
    <div class="container">
      <div class="section">
        <h2>Hi</h2>
        <p class="wave"> 👋 </p>
        <h2>, My Name is</h2>
        <h1>Henry Janitra</h1>
        <div class="job-title">
          <p>{{ jobTitle }}</p>
          <div class="cursor" />
        </div>
        <p class="description">
          I am a software engineer mainly building Back-End application, and also have experiences in developing Front-End and Mobile application. Currently i am working as IT Back-End developer, focusing on building scalable and robust server-side application. I prioritize performance and speed when building applications, and writing clean and elegant codes.
        </p>
        <div class="btn" @click="goToContact($event.target)">
          <button>Get in touch</button>
          <div class="shadow" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, useStore, onMounted } from '@nuxtjs/composition-api'
export default {
  setup () {
    const store = useStore()
    const jobTitle = ref('')

    const data = [
      'Software Engineer',
      'Back-End Developer',
      'Web Developer',
      'Android Developer'
    ]

    function sleep (ms) {
      return new Promise(resolve => setTimeout(resolve, ms))
    }

    onMounted(async () => {
      let i = 0
      while (true) {
        if (i >= data.length) {
          await sleep(500)
          i = 0
        }

        let str = ''

        for (let j = 0; j < data[i].length; j++) {
          str += data[i][j]
          jobTitle.value = str
          await sleep(50)
        }

        await sleep(2000)

        for (let j = data[i].length - 1; j >= 0; j--) {
          jobTitle.value = str.substring(0, j)
          await sleep(50)
        }

        await sleep(500)
        i++
      }
    })

    function goToContact (button) {
      store.commit('setNavScroll', 'contact')
    }

    return {
      jobTitle,
      goToContact
    }
  }
}
</script>

<style lang="scss">
@import "include-media";
@import '~/assets/scss/variables';

@keyframes textcursor {
    0% {
        opacity: 1;
    }
    50% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

@keyframes wavehand {
    10% {
        transform: none;
    }
    20% {
        transform: rotate(-15deg);
    }
    30% {
        transform: rotate(0deg);
    }
    40% {
        transform: rotate(15deg);
    }
    50% {
        transform: rotate(0deg);
    }
    60% {
        transform: rotate(-15deg);
    }
    70% {
        transform: rotate(0deg);
    }
    80% {
        transform: rotate(15deg);
    }
    90% {
        transform: rotate(0deg);
    }
}

.hero {
    width: 100%;
    background: linear-gradient(to left top, #C7E5F5, rgba(8, 162, 249, 0.9));
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 80%);
    top: 0;

    .container {
        max-width: 1200px;
        height: 640px;
        margin: 0 auto;
        padding-bottom: 60px;

        display: flex;
        flex-direction: row;
        align-items: center;

        background-image: url("~/assets/hero/window.png");
        background-repeat: no-repeat;
        background-size: 600px;
        background-position: top 80px left 600px;
        .section {
            margin-left: 32px;
            text-align: left;
            max-width: 550px;
            color: white;
            h2 {
              font-size: 20px;
              font-weight: 700;
              text-transform: uppercase;
              margin: 0;
              
              display: inline-block;
            }
            .wave {
              // color: inherit;
              font-size: 20px;
              margin: 0;
              display: inline-block;
              animation-name: wavehand;
              animation-duration: 1s;
            }
            h1{
                font-weight: 700;
                margin: 0;
            }
            .job-title{
                display: flex;
                flex-direction: row;
                align-items: center;
                margin: 16px 0;
                p {
                    min-height: 28px;
                    display: inline-block;
                    font-size: 20px;
                    font-weight: 700;
                    color: #1E90AC;
                    margin: 0;
                    margin-right: 4px;
                }
                .cursor {
                    height: 24px;
                    width: 4px;
                    background-color: #1E90AC;

                    animation-name: textcursor;
                    animation-duration: 1s;
                    animation-iteration-count: infinite;
                }
            }
            .description {
                font-size: 18px;
                margin-bottom: 24px;
            }
            .btn {
                position: relative;
                button {
                    position: absolute;
                    z-index: 100;
                    border: solid 3px white;

                    font-size: 16px;
                    font-weight: 700;
                    color: white;

                    width: 160px;
                    height: 40px;
                    background-color: #20ADFD;

                    margin: 0;
                    transition: margin 0.2s;

                    &:hover {
                        cursor: pointer;
                        margin-top: 4px;
                        margin-left: 4px;
                    }
                }
                .shadow {
                    // display: inline-block;
                    position: absolute;
                    z-index: 50;
                    top: 0;
                    left: 0;

                    margin-top: 4px;
                    margin-left: 4px;

                    width: 160px;
                    height: 40px;
                    background-color: #ffffff;
                }
            }
        }
    }
}

@include media("screen", "<=desktop") {
  .hero {
    .container {
      height: 560px;
      // background-size: 500px;
      background-position: center;
      box-shadow: inset 0 0 0 100vw rgba(0, 0, 0, 0.4);
      .section{
        max-width: 500px;
        margin: auto;
        h2 {
          font-size: 16px;
        }
        .wave {
          font-size: 16px;
        }
        h1 {
          font-size: 28px;
        }
        .job-title{
          margin-top: 16px;
          p {
            font-size: 20px;
            margin: 0;
            margin-right: 4px;
            color: #50befa;
          }
          .cursor {
            height: 24px;
            background-color: #50befa;
          }
        }
        .description {
          font-size: 16px;
          margin-bottom: 20px;
        }
        .btn {
          button {
              font-size: 14px;
              width: 140px;
              height: 36px;

              &:hover {
                cursor: pointer;
                margin-top: 4px;
                margin-left: 4px;
              }
          }
          .shadow {
              width: 140px;
              height: 36px;
          }
        }
      }
    }
  }
}

@include media("screen", "<=tablet") {
  .hero {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 85%);
    .container {
      height: 520px;
      .section{
        padding-top: 40px;
        max-width: 400px;
      }
    }
  }
}

@include media("screen", "<=phone") {
  .hero {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 90%);
    .container {
      background-size: 500px;
      .section{
        @include media("screen", "<=440px") {
          margin: auto 20px;
        }
      }
    }
  }
}
</style>
