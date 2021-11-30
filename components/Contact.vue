<template>
  <div class="contact_me" ref="contact">
    <h1>Get In Touch</h1>
    <!-- <h1>Let's build something special</h1> -->
    <!-- <p>I’m interested in opportunities to work with organizations or individuals, especially on ambitious or large projects.</p> -->
    <p>Whether you are interested in working together or you have other request or question, don’t hesistate to reach out. I’ll try my best to get back to you as soon as possible.</p>
    <div class="btn">
      <a href="mailto:henr.janitra@gmail.com" target="_blank" rel="noopener noreferrer" class="button">Contact Me</a>
      <div class="shadow" />
    </div>
    <div class="contact-info">
      <div class="info">
        <i class="location"></i>
        <a>Central Jakarta, Indonesia</a>
      </div>
      <div class="info">
        <i class="email"></i>
        <a href="mailto:henr.janitra@gmail.com" target="_blank" rel="noopener noreferrer">henr.janitra@gmail.com</a>
      </div>
      <div class="info">
        <i class="linkedin"></i>
        <a href="https://www.linkedin.com/in/henryjanitra/" target="_blank" rel="noopener noreferrer">Henry Janitra</a>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, useStore, watch } from '@nuxtjs/composition-api'

export default {
  setup () {
    const store = useStore()
    const contact = ref(null)

    watch(
      () => { return store.state.navTarget },
      (newValue) => {
        if (newValue === 'contact') {
          const style = window.getComputedStyle(contact.value)
          let margin = style.marginTop.match(/\d+/)

          margin = parseInt(margin)

          const newOffset = contact.value.offsetTop - margin - store.state.navHeight
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

    return {
      contact
    }
  }
}
</script>

<style lang="scss">
@import "include-media";
@import '~/assets/scss/variables';

.contact_me {
  width: 100%;
  background: linear-gradient(to left top, rgba(8, 162, 249, 0.9), #C7E5F5);
  clip-path: polygon(0 0, 50% calc(0% + 150px), 100% 0, 100% 100%, 0% 100%);
  padding: 100px 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-top: 100px;
    margin-bottom: 32px;
    width: fit-content;
    color: #1E90AC;
    font-size: 28px;
    font-weight: 700;
  }

  p {
    width: 600px;
    margin: auto;
    font-size: 20px;
    text-align: center;
    margin-bottom: 32px;
    line-height: 24px;
    color: black;
  }

  .btn {
    width: 170px;
    height: 50px;

    margin: auto;
    margin-bottom: 50px;

    position: relative;

    display: flex;
    flex-direction: row;
    align-items: flex-start;
    .button {
      z-index: 100;
      border: solid 3px white;

      font-size: 16px;
      font-weight: 700;
      color: white;

      width: 160px;
      height: 40px;
      background-color: #20ADFD;

      margin: 0;
      transition: margin 0.3s;

      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;

      &:hover {
        cursor: pointer;
        margin-top: 4px;
        margin-left: 4px;
      }
    }
    .shadow {
      left: 0;
      display: inline-block;
      z-index: 50;

      position: absolute;
      margin-top: 4px;
      margin-left: 4px;

      width: 166px;
      height: 46px;
      background-color: #ffffff;
    }
  }
  .contact-info {
    width: fit-content;
    margin: auto;
    .info {
      display: flex;
      flex-direction: row;
      align-items: center;

      margin-bottom: 20px;
      i {
        width: 28px;
        height: 36px;
        background-repeat: no-repeat;
        background-position: center;

        &.location {
          background-size: 24px;
          background-image: url("~/assets/icons/map-marker.svg");
        }
        &.email {
          background-size: 28px;
          background-image: url("~/assets/icons/envelope.svg");
        }
        &.linkedin {
          background-size: 28px;
          background-image: url("~/assets/icons/linkedin.svg");
        }
      }
      a {
        margin-left: 16px;
        font-size: 20px;
        text-decoration: none;
        color: black;
        &:hover {
          cursor: pointer;
          text-decoration: underline;
        }
      }
    }
  }
}

@include media("screen", "<=desktop") {
  .contact_me {
    clip-path: polygon(0 0, 50% calc(0% + 120px), 100% 0, 100% 100%, 0% 100%);
    h1 {
      margin-top: 60px;
    }
  }
}

@include media("screen", "<=tablet") {
  .contact_me {
    clip-path: polygon(0 0, 50% calc(0% + 100px), 100% 0, 100% 100%, 0% 100%);
    h1 {
      margin-top: 32px;
      margin-bottom: 24px;
      font-size: 24px;
    }
    p {
      font-size: 16px;
      width: 480px;
      line-height: 20px;
    }
    .btn {
      width: 150px;
      height: 44px;
      .button {
        width: 140px;
        height: 36px;
      }
      .shadow {
        width: 146px;
        height: 42px;
      }
    }
    .contact-info {
      .info {
        margin-bottom: 16px;

        i {
          width: 24px;
          height: 32px;

          &.location {
            background-size: 20px;
          }
          &.email {
            background-size: 24px;
          }
          &.linkedin {
            background-size: 24px;
          }
        }
        a {
          margin-left: 14px;
          font-size: 16px;
        }
      }
    }
  }
}

@include media("screen", "<=phone") {
  .contact_me {
    clip-path: polygon(0 0, 50% calc(0% + 64px), 100% 0, 100% 100%, 0% 100%);
    h1 {
      margin-top: 0px;
      margin-bottom: 20px;
      font-size: 20px;
    }
    p {
      font-size: 14px;
      width: unset;
      min-width: unset;
      margin-left: 16px;
      margin-right: 16px;
      // line-height: 16px;
    }
    .btn {
      width: 140px;
      height: 40px;
      .button {
        width: 124px;
        height: 32px;
        font-size: 14px;

      }
      .shadow {
        width: 130px;
        height: 38px;
      }
    }
    .contact-info {
      .info {
        margin-bottom: 16px;

        i {
          width: 20px;
          height: 28px;

          &.location {
            background-size: 20px;
          }
          &.email {
            background-size: 20px;
          }
          &.linkedin {
            background-size: 20px;
          }
        }
        a {
          margin-left: 12px;
          font-size: 14px;
        }
      }
    }
  }
}
</style>
