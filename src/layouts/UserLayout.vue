<template>
  <div id="userLayout" :class="['user-layout-wrapper', isMobile && 'mobile']">
    <div class="container">
      <div class="container-left">
        <span class="title">
          <img src="@/assets/LogoIman.png" class="logo" alt="logo" />
        </span>
      </div>
      <div class="container-right">
        <div class="top">
          <div class="header">
            <span class="title">{{ $t('enterSystem') }}</span>
          </div>
        </div>

        <router-view />

        <div class="footer">
          <div class="copyright">
            Служба поддержки
            <div>+998 99 123 45 67</div>
          </div>
        </div>
      </div>
      <!-- <div class="top">
        <div class="header">
          <a href="/">
            <img src="~@/assets/logo.svg" class="logo" alt="logo">
            <span class="title"></span>
          </a>
        </div>
        <div class="desc"></div>
      </div>

      <router-view />

      <div class="footer">
        <div class="copyright">
          Copyright &copy; {{ getDate }} Udevs
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import { deviceMixin } from '@/store/device-mixin'

export default {
  data: () => ({
    getDate: new Date().getFullYear()
  }),
  name: 'UserLayout',
  mixins: [deviceMixin],
  mounted () {
    document.body.classList.add('userLayout')
  },
  beforeDestroy () {
    document.body.classList.remove('userLayout')
  }
}
</script>

<style lang="less" scoped>
@media only screen and (max-width: 950px) {
  #userLayout.user-layout-wrapper {
    height: 100vh;

    .container {
      display: block;
      height: 100%;
      &-left {
        display: none;
        width: 100%;
      }

      &-right {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      a {
        text-decoration: none;
      }

      .top {
        text-align: center;

        .header {
          line-height: 44px;
          margin-bottom: 50px;
          font-size: 54px;
          .badge {
            position: absolute;
            display: inline-block;
            line-height: 1;
            vertical-align: middle;
            margin-left: -12px;
            margin-top: -10px;
            opacity: 0.8;
          }

          .title {
            font-size: 54px;
            color: rgba(0, 0, 0, 0.85);
            font-family: Avenir, 'Helvetica Neue', Arial, Helvetica, sans-serif;
            font-weight: 600;
            position: relative;
            top: 2px;
            margin-bottom: 20px;
          }
        }
        .desc {
          font-size: 14px;
          color: rgba(0, 0, 0, 0.45);
          margin-top: 12px;
          margin-bottom: 40px;
        }
      }

      .main {
        // min-width: 260px;
        margin: 0 auto;
        max-width: 460px;
        width: 100%;
        padding: 0 20px;
      }

      .footer {
        padding: 0 16px;
        margin: 48px 0 40px;
        text-align: center;

        .links {
          margin-bottom: 8px;
          font-size: 14px;
          a {
            color: rgba(0, 0, 0, 0.45);
            transition: all 0.3s;
            &:not(:last-child) {
              margin-right: 40px;
            }
          }
        }
        .copyright {
          color: #c4c4c4;
          font-size: 14px;
          div {
            color: #6c6c6c;
            font-size: 20px;
          }
        }
      }
    }
  }
}
@media only screen and (min-width: 951px) {
  #userLayout.user-layout-wrapper {
    height: 100vh;

    &.mobile {
      .container {
        .main {
          max-width: 368px;
          width: 98%;
        }
      }
    }

    .container {
      width: 100%;
      min-height: 100%;
      position: relative;
      display: flex;

      &-left {
        width: 50%;
        background-color: #01CAB0;
        display: flex;
        align-items: center;
        justify-content: center;
        span.title {
          font-size: 130px;
          font-weight: bold;
          color: white;
        }
      }

      &-right {
        width: 50%;
        background-color: white;
        padding: 40px 135px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      a {
        text-decoration: none;
      }

      .top {
        text-align: center;

        .header {
          line-height: 44px;
          margin-bottom: 50px;
          font-size: 54px;
          .badge {
            position: absolute;
            display: inline-block;
            line-height: 1;
            vertical-align: middle;
            margin-left: -12px;
            margin-top: -10px;
            opacity: 0.8;
          }

          .logo {
            width: 500px;
            height: 120px;
            object-fit: cover;
            object-position: 50% 42%;
          }

          .title {
            font-size: 54px;
            color: rgba(0, 0, 0, 0.85);
            font-family: Avenir, 'Helvetica Neue', Arial, Helvetica, sans-serif;
            font-weight: 600;
            position: relative;
            top: 2px;
            margin-bottom: 20px;
          }
        }
        .desc {
          font-size: 14px;
          color: rgba(0, 0, 0, 0.45);
          margin-top: 12px;
          margin-bottom: 40px;
        }
      }

      .main {
        // min-width: 260px;
        margin: 0 auto;
        max-width: 460px;
        width: 100%;
      }

      .footer {
        position: absolute;
        bottom: 0;
        padding: 0 16px;
        margin: 48px 0 40px;
        text-align: center;

        .links {
          margin-bottom: 8px;
          font-size: 14px;
          a {
            color: rgba(0, 0, 0, 0.45);
            transition: all 0.3s;
            &:not(:last-child) {
              margin-right: 40px;
            }
          }
        }
        .copyright {
          color: #c4c4c4;
          font-size: 14px;
          div {
            color: #6c6c6c;
            font-size: 20px;
          }
        }
      }
    }
  }
}
// #userLayout.user-layout-wrapper {
//     height: 100%;

//     &.mobile {
//       .container {
//         .main {
//           max-width: 368px;
//           width: 98%;
//         }
//       }
//     }

//     .container {
//       width: 100%;
//       min-height: 100%;
//       background: #f0f2f5 url(~@/assets/background.svg) no-repeat 50%;
//       background-size: 100%;
//       padding: 110px 0 144px;
//       position: relative;

//       a {
//         text-decoration: none;
//       }

//       .top {
//         text-align: center;

//         .header {
//           height: 44px;
//           line-height: 44px;

//           .badge {
//             position: absolute;
//             display: inline-block;
//             line-height: 1;
//             vertical-align: middle;
//             margin-left: -12px;
//             margin-top: -10px;
//             opacity: 0.8;
//           }

//           .logo {
//             height: 66px;
//             vertical-align: top;
//             margin-right: 16px;
//             border-style: none;
//           }

//           .title {
//             font-size: 33px;
//             color: rgba(0, 0, 0, .85);
//             font-family: Avenir, 'Helvetica Neue', Arial, Helvetica, sans-serif;
//             font-weight: 600;
//             position: relative;
//             top: 2px;
//           }
//         }
//         .desc {
//           font-size: 14px;
//           color: rgba(0, 0, 0, 0.45);
//           margin-top: 17px;
//           margin-bottom: 50px;
//         }
//       }

//       .main {
//         min-width: 260px;
//         width: 368px;
//         margin: 0 auto;
//       }

//       .footer {
//         position: absolute;
//         width: 100%;
//         bottom: 0;
//         padding: 0 16px;
//         margin: 48px 0 24px;
//         text-align: center;

//         .links {
//           margin-bottom: 8px;
//           font-size: 14px;
//           a {
//             color: rgba(0, 0, 0, 0.45);
//             transition: all 0.3s;
//             &:not(:last-child) {
//               margin-right: 40px;
//             }
//           }
//         }
//         .copyright {
//           color: rgba(0, 0, 0, 0.45);
//           font-size: 14px;
//         }
//       }
//     }
//   }
</style>
