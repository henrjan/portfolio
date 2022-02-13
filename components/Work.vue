<template>
  <div class="my_work" ref="work">
    <h1>Projects I've Worked On</h1>
    <div class="porto">
      <div class="project">
        <div class="description f-right">
          <h4>01 <hr> LOCARD+</h4>
          <h3>Online Marketplace Platform</h3>
          <p class="intro">Locard+ is a marketplace app that offers points as rewards to our registered members. Our main focus is to build relationships between sellers and buyers and maintain relationships between sellers and their customer. Our product categories ranging from physical  products such as home and living, fashion, electronics, etc to digital products such as digital vouchers and etc.</p>
          <!-- <div class="cta">
            <a class="visit" href="https://locard.co.id" target="_blank" rel="noopener noreferrer">
              <p>Go to website</p>
            </a>
            <p>or</p>
            <a class="get-app" href="https://play.google.com/store/apps/details?id=com.clsindo.locardpluslive" target="_blank" rel="noopener noreferrer"/>
          </div> -->
        </div>
        <div class="locard image" />
      </div>
      <div class="project">
        <div class="description f-left">
          <h4>02 <hr> RIM Technology</h4>
          <h3>Digital Loyalty and Marketplace System</h3>
          <p class="intro">RIM Engine is an e-commerce and marketplace management system with all kinds of management feature such as inventory management, transaction management, members management, report analysis and etc. RIM Engine also provide features for merchants to manage their own store, show detailed transaction reports, campaign management and etc. Our Locard+ marketplace app also use this technology complete with all of its features.</p>
          <!-- <div class="cta" /> -->
        </div>
        <div class="rim-tech image" />
      </div>
      <div class="project">
        <div class="description f-right">
          <h4>03 <hr> Locard Merchant</h4>
          <h3>Management Platform for Seller</h3>
          <p class="intro">Tokolab is an online platform that offers web development service for online store, digital content makers and digital marketing services, and also offers services for virtual events and conferences. Tokolab platform also use RIM Engine technology for website contents management, members management, product management, promo management, and platform's transactions.</p>
          <div class="cta">
            <a class="visit" href="https://portal.rim.cls-indo.co.id/login-merchant" target="_blank" rel="noopener noreferrer">
              <p>Go to website</p>
            </a>
          </div>
        </div>
        <div class="locard-merchant image" />
      </div>
      <div class="project">
        <div class="description f-left">
          <h4>04 <hr> REALS</h4>
          <h3>Redemption and Logistics System</h3>
          <p class="intro">REALS is a Redeemption and Logistics Systems that accommodating goods and digital products redeemption and logistics all the way to shipping goods to the customers. REALS provide a management portal for each clients to help with operationals and management that includes stock management, members management, shipping process, and transaction management.</p>
        </div>
        <div class="reals image" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, useStore, watch } from '@nuxtjs/composition-api'

export default {
  setup () {
    const store = useStore()
    const work = ref(null)

    watch(
      () => { return store.state.navTarget },
      (newValue) => {
        if (newValue === 'work') {
          const style = window.getComputedStyle(work.value)
          let margin = style.marginTop.match(/\d+/)

          margin = parseInt(margin)
          const newOffset = work.value.offsetTop - margin - store.state.navHeight
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
      work
    }
  }
}
</script>

<style lang="scss">
@import "include-media";
@import '~/assets/scss/variables';

.my_work {
    width: 100%;
    background: linear-gradient(to right top, #a9defc, rgba(8, 162, 249, 0.8));
    clip-path: polygon(0 calc(0% + 150px), 100% 0, 100% calc(100% - 150px), 0% 100%);

    padding: 160px 0;
    h1 {
        width: fit-content;
        margin: auto;
        margin-bottom: 100px;
        color: #1E90AC;
        font-size: 24px;
    }
    .porto {
        width: fit-content;

        margin: auto;
        .project {
            // position: relative;
            display: flex;
            flex-direction: row;
            // align-items: center;

            margin-bottom: 120px;
            width: fit-content;
            &:last-child {
              margin-bottom: 40px;
            }
            .description {
              margin: auto;
              width: 400px;
              padding: 24px 40px;
              // border-radius: 10px;
              // background-color: white;
              // box-shadow: 0 4px 4px 4px rgba(0, 0, 0, 0.25);

              overflow: hidden;
              // text-align: right;
              h4 {
                color: #1E90AC;
                display: flex;
                align-items: center;
                justify-content: center;
                width: fit-content;
                margin: 0;
                margin-bottom: 8px;
                hr {
                  margin: 0 8px;
                  height: 1px;
                  width: 24px;
                  background: black;
                  display: inline-block;
                  border: none;
                }
              }
              h3 {
                color: white;
                font-size: 24px;
                font-weight: bold;
                width: fit-content;
                margin: 0;
                margin-bottom: 20px;
              }
              p {
                color: white;
                width: 400px;
                font-size: 16px;
                margin: 0;
              }
              .cta {
                display: flex;
                flex-direction: row;
                align-items: center;
                width: fit-content;
                margin-top: 40px;

                a {
                  text-decoration: none;
                }
                .visit {
                  background-color: #20ADFD;
                  padding: 0;
                  margin: 0;
                  width: 160px;
                  height: 44px;
                  border: none;
                  display: flex;
                  align-items: center;
                  justify-content: center;

                  p {
                    margin: 0;
                    display: inline-block;
                    font-size: 18px;
                    font-weight: 700;
                    color: white;
                  }

                  // transition: all 0.4s;
                  &:hover {
                    // transform: rotateX(1turn);
                    // color: white;
                    background-color: #1e9ce6;
                    cursor: pointer;
                  }
                }
                p {
                  width: fit-content;
                  font-size: 20px;
                  font-weight: 700;
                  margin: 0 20px;
                }
                .get-app {
                  width: 160px;
                  height: 44px;
                  background-image: url("~/assets/porto/playstore.png");
                  background-size: 160px;
                  background-position: center;
                  background-repeat: no-repeat;

                  &:hover {
                      cursor: pointer;
                  }
                }
              }

              &.f-left {
                padding-left: 0;
                h4, h3, .intro, .cta {
                  margin-right: auto;
                }
                h4, h3, .intro {
                  text-align: left;
                }
              }
              &.f-right {
                padding-right: 0;
                order: 2;
                h4, h3, .intro, .cta {
                  margin-left: auto;
                }
                h4, h3, .intro {
                  text-align: right;
                }
              }
            }
            .image {
              // position: absolute;

              overflow: visible;
              z-index: 100;
              width: 600px;
              min-height: 375px;
              border-radius: 15px;

              // margin-left: -200px;

              background-position: center;
              background-size: 600px;
              background-repeat: no-repeat;
              background-image: url("https://res.cloudinary.com/dqjg2bpbq/image/upload/q_auto:best/v1644749743/Locard.png");
              // margin-left: 500px;

              &.locard {
                background-image: url("https://res.cloudinary.com/dqjg2bpbq/image/upload/q_auto:best/v1644749886/locard_mockup.png");
              }
              &.rim-tech {
                background-image: url("https://res.cloudinary.com/dqjg2bpbq/image/upload/q_auto:best/v1644749992/admin_portal_mockup.png");
              }
              &.locard-merchant {
                background-image: url("https://res.cloudinary.com/dqjg2bpbq/image/upload/q_auto:best/v1644750125/portal_merchant_mockup.png");
              }
              &.reals {
                background-image: url("https://res.cloudinary.com/dqjg2bpbq/image/upload/q_auto:best/v1644750210/reals_portal.png");
              }
            }
        }
    }
}

@include media("screen", "<=desktop") {
  .my_work {
    .porto {
      h1 {
        margin-bottom: 80px;
      }
      .project {
        .description {
          overflow: visible;
          width: 300px;
          padding: 0px 20px;
          h4 {
            font-size: 14px;
          }
          h3 {
            font-size: 20px;
          }
          .intro {
            font-size: 14px;
            width: 300px;
          }
          .cta {
            margin-top: 32px;
            .visit {
              width: 136px;
              height: 36px;

              p {
                font-size: 16px;
              }
            }
            p {
              font-size: 14px;
              margin: 0 10px;
            }
            .get-app {
              width: 136px;
              height: 36px;
              background-size: 136px;
            }
          }
        }
        .image {
          width: 480px;
          min-height: 300px;
          height: 300px;
          background-size: 480px;
        }
      }
    }
  }
}

@include media("screen", "<=tablet") {
  .my_work {
    clip-path: polygon(0 calc(0% + 100px), 100% 0, 100% calc(100% - 100px), 0% 100%);
    padding-top: 120px;
    padding-bottom: 100px;
    .porto {
      .project {
        flex-direction: column;
        margin-bottom: 100px;
        .description {
          width: 474px;
          padding: 0;
          padding-top: 32px;
          order: 2;
          .cta {
            margin-top: 20px;
            p {
              margin: 0 14px;
            }
            .get-app {
              height: 40px;
            }
          }
          .intro {
            width: 100%;
          }
          h4, h3, .intro, .cta {
            margin-left: 0 !important;
            margin-right: 0 !important;
          }
          h4, h3, .intro {
            text-align: left !important;
          }
        }
      }
    }
  }
}

@include media("screen", "<=phone") {
  .my_work {
    clip-path: polygon(0 calc(0% + 80px), 100% 0, 100% calc(100% - 80px), 0% 100%);
    padding-top: 100px;
    padding-bottom: 80px;

    h1 {
      font-size: 16px;
      margin-bottom: 64px;
    }
    .porto {
      .project {
        flex-direction: column;
        margin-bottom: 100px;
        .description {

          margin: 0 16px;
          width: unset;
          padding: 0;
          padding-top: 20px;
          order: 2;
          h4 {
            font-size: 12px;
            hr {
              width: 20px;
            }
          }
          h3 {
            font-size: 16px;
            margin-bottom: 16px;
          }
          .intro {
            font-size: 12px;
            width: unset;
          }
          .cta {
            margin-top: 20px;
            .visit {
              p {
                font-size: 14px;
              }
            }
            p {
              margin: 0 14px;
            }
            .get-app {
              height: 40px;
            }
          }
          .intro {
            width: 100%;
          }
          h4, h3, .intro, .cta {
            margin-left: 0 !important;
            margin-right: 0 !important;
          }
          h4, h3, .intro {
            text-align: left !important;
          }
        }
        .image {
          width: 100%;
          background-size: 100%;
          padding-top: 62.5%;
          min-height: unset;
          height: unset;
          border-radius: unset;
        }
      }
    }
  }
}
</style>
