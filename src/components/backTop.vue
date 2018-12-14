<template>
  <transition enter-active-class="animated bounceInDown" leave-active-class="animated bounceOutUp">
    <div v-show="show" id="back-top" @click="backTop">
      <i class="fa fa-angle-up"></i>
    </div>
  </transition>
</template>

<script>
  export default {
    name: "backTop",
    data() {
      return {
        show: false
      }
    },
    methods: {
      backTop() {
        // 移动次数
        let num = 100;
        // 总高度
        let scrolled = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        // 每次移动距离
        let offset = parseInt(scrolled / num);
        // 总消耗时间(毫秒)
        let time = 200
        // 定时器间隔时间
        let o = parseInt(time / num)

        let backVal = setInterval(() => {
          let s = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
          if (s > 0) {
            s -= offset;
            window.pageYOffset =
              document.body.scrollTop =
                document.documentElement.scrollTop = s;
          } else {
            this.show = false;
            clearInterval(backVal);
          }
        }, o)
      },
      handleScroll() {
        let scrolled = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        this.show = !(scrolled <= 0);
      }
    },
    mounted() {
      this.$nextTick(function () {
        window.addEventListener('scroll', this.handleScroll)
      })
    }
  }
</script>

<style scoped>
  #back-top {
    width: 30px;
    height: 30px;
    position: fixed;
    bottom: 25px;
    z-index: 100;
    border-radius: 3px;
    color: white;
    background-color: #409EFF;
    font-size: 35px;
    padding: 5px;
    box-shadow: 0 6px 12px 0 rgba(0, 0, 0, .15);
  }

  #back-top:hover {
    opacity: 0.7;
    cursor: pointer;
  }

  #back-top i {
    position: relative;
    top: -11px;
    left: 4px;
  }

  /* 移动端 */
  @media only screen and (max-width: 1199px) {
    #back-top {
      right: 25px;
    }
  }

  /* pc端(小屏) */
  @media only screen and (min-width: 1200px) {
    #back-top {
      right: 4%;
    }
  }

  /* pc端(大屏) */
  @media only screen and (min-width: 1920px) {
    #back-top {
      right: 5%;
    }
  }

</style>
