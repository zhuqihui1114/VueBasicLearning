<template>
  <div id="app">
    <loading v-if="loading"></loading>
    <NavHeader v-show="headShow"></NavHeader>
    <transition name="slide-down">
      <keep-alive>
        <router-view class="router-view"></router-view>
      </keep-alive>
    </transition>
    <FooterView v-show="footerShow"></FooterView>

  </div>
</template>
<script>
  import NavHeader from './components/Nav.vue'
  import FooterView from './components/Footer.vue'
  import Home from './components/Home.vue'

  import {mapGetters} from 'vuex'

  export default {

    components: {
      Home,
      NavHeader,
      FooterView
    },
    mounted() {
      var path = this.$route.path.substring(1);
      this.headerChange(path);
      this.footerChange(path);
    },
    computed: mapGetters([
      'headShow',
      'loading',
      'footerShow'
    ]),
    watch: { //监听，当路由发生变化时
      $route(to, from) {
        console.log(to);
        console.log(from);
        var path = to.path.substring(1);
        this.headerChange(path);
        this.footerChange(path);
      }
    },
    methods: {
      headerChange(path) {
        if (path == 'user-info' || path == 'user-reg' || path == 'user-login' || path.indexOf('article') != -1) {
          this.$store.dispatch('hideHead')
        } else {
          this.$store.dispatch('showHead')
        }
      },
      footerChange(path) {
        if (path.indexOf('article') == -1) {
          this.$store.dispatch('showFooter');
        } else {
          this.$store.dispatch('hideFooter');
        }
      }
    },

  }
</script>

<style>
  .slide-down-enter-active, .slide-down-leave-active {
    transition: all .1s cubic-bezier(0, 1.2, 1, 0.5);
    opacity: .7;
    transform: translate3d(0, 6em, 0);
  }
  .slide-down-enter, .slide-down-leave-active {
    opacity: .1;
    transform: translate3d(0, 6em, 0);
  }

</style>
