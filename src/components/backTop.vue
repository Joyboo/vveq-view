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
        let backVal = setInterval(() => {
          let scrolled = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
          if (scrolled > 0) {
            scrolled -= 10;
            document.documentElement.scrollTop =
            window.pageYOffset =
            document.body.scrollTop = scrolled;
          } else {
            this.show = false;
            clearInterval(backVal);
          }
        }, 1)
      },
      handleScroll() {
        let scrolled = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
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
    box-shadow: 0 6px 12px 0 rgba(0,0,0,.15);
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
