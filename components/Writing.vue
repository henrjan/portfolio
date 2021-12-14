<template>
  <div ref="writing" class="my_writing">
    <h1>My Writing</h1>
    <div class="blog">
      <div class="writing">
        <div class="date">
          <i />
          <p>On Mar 11, 2021</p>
        </div>
        <h1 class="title">
          Multiple lock with key implementation in Go
        </h1>
        <p class="description">
          A couple of months ago, I was developing services to calculate balance transaction sent from one’s user account to another’s user account and vice versa. Each transaction request is handled concurrently, thus reading and writing to databases also happens concurrently
        </p>
        <a class="link" href="https://henr-janitra.medium.com/multiple-lock-with-key-implementation-in-go-9e60c2e4d430" target="_blank" rel="noopener noreferrer">
          Read more
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, useStore, watch } from '@nuxtjs/composition-api'

export default {
  setup () {
    const store = useStore()
    const writing = ref(null)

    watch(
      () => { return store.state.navTarget },
      (newValue) => {
        if (newValue === 'writing') {
          const style = window.getComputedStyle(writing.value)
          let margin = style.marginTop.match(/\d+/)

          margin = parseInt(margin)
          const newOffset = writing.value.offsetTop - margin - store.state.navHeight
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
      writing
    }
  }
}
</script>

<style lang="scss">
@import "include-media";
@import '~/assets/scss/variables';

.my_writing {
    margin-top: 50px;
    margin-bottom: 100px;
    & > h1{
      width: fit-content;
      margin: auto;
      margin-bottom: 60px;
      color: #1E90AC;
      font-size: 24px;
    }
    .blog {

        width: 100%;
        .writing {
            border-radius: 15px;
            box-shadow: 0 0 3px 3px rgba(0, 0, 0, 0.1), 0 8px 0 0 #20ADFD;

            padding: 32px 40px;
            width: fit-content;
            min-width: 600px;
            margin: auto;
            margin-bottom: 40px;

            .date {
                display: flex;
                flex-direction: row;
                align-items: flex-end;
                margin-bottom: 8px;
                i {
                    width: 20px;
                    height: 20px;
                    background-image: url("~/assets/icons/calendar-alt-solid.svg");
                    background-size: 18px;
                    background-position: center;
                    background-repeat: no-repeat;

                    margin-right: 8px;
                }
                p {
                    margin: 0;
                    color: rgba(70, 70, 70, 75%);
                    font-size: 16px;
                    font-weight: 400;
                    font-family: Sans-Serif;
                }
            }
            .title {
              font-size: 28px;
              font-weight: 700;
              margin: 0;
              margin-bottom: 28px;
            }
            .description {
                font-size: 16px;
                font-weight: 400;
                width: 500px;
                margin-bottom: 28px;
                &:after {
                    content: '...';
                    // position: absolute;
                    // right: 0;
                    // bottom: 0;
                }
            }
            .link {

              width: fit-content;
              height: fit-content;
              border-radius: 5px;
              border: solid 1px #0D98BA;

              width: fit-content;
              display: block;
              margin: 0;
              padding: 10px 24px;
              background-color: transparent;

              font-size: 16px;
              font-weight: 400;
              color: #0D98BA;
              text-decoration: none;

              transition-property: color, background-color;
              transition-duration: 0.3s;

              &:hover {
                color: white;
                background-color: #0D98BA;
                cursor: pointer;
              }
            }
        }
    }
}

@include media("screen", "<=desktop") {
  .my_writing {
    .blog {
      .writing {
        padding: 24px 40px;
        min-width: 500px;
        .date {
          align-items: center;
          i {
            width: 16px;
            height: 16px;
            background-size: 14px;
          }
          p {
            font-size: 14px;
          }
        }
        .title {
          font-size: 20px;
          margin-bottom: 20px;
        }
        .description {
          font-size: 14px;
          width: 500px;
          margin-bottom: 24px;
        }
        .link {
          font-size: 14px;
          padding: 8px 20px;
        }
      }
    }
  }
}

@include media("screen", "<=tablet") {
  .my_writing {
    & > h1 {
      font-size: 20px;
      margin-bottom: 40px;
    }
    .blog {
      .writing {
        padding: 20px 32px;
        min-width: 400px;
        .date {
          align-items: center;
          i {
            width: 14px;
            height: 14px;
            background-size: 12px;
            margin-right: 4px;
          }
          p {
            font-size: 12px;
          }
        }
        .title {
          font-size: 20px;
          margin-bottom: 20px;
        }
        .description {
          font-size: 14px;
          width: 400px;
          margin-bottom: 24px;
        }
        .link {
          font-size: 14px;
          padding: 8px 20px;
        }
      }
    }
  }
}

@include media("screen", "<=phone") {
  .my_writing {
    & > h1 {
      font-size: 16px;
      // margin-bottom: 32px;
    }
    .blog {
      .writing {
        margin-left: 16px;
        margin-right: 16px;
        padding: 24px;
        min-width: unset;
        .date {
          align-items: center;
          i {
            width: 14px;
            height: 14px;
            background-size: 12px;
            margin-right: 4px;
          }
          p {
            font-size: 10px;
          }
        }
        .title {
          font-size: 16px;
          margin-bottom: 16px;
        }
        .description {
          font-size: 12px;
          width: unset;
          margin-top: 0;
          margin-bottom: 24px;
        }
        .link {
          width: unset;
          text-align: center;
          display: block;
          font-size: 14px;
          padding: 8px 20px;
        }
      }
    }
  }
}
</style>
