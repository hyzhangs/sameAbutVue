<template>
  <div>
    <transition :name="transitionName">
      <router-view class="Router"/>
    </transition>
    <cube-tab-bar
      v-model="selectedLabelDefault"
      :data="tabs"
      @click="clickHandler"
      @change="changeHandler"
      class="bottom-bar"
    ></cube-tab-bar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      transitionName: "silde-right",
      selectedLabelDefault: "首页",
      tabs: [
        {
          label: "首页",
          icon: "cubeic-home"
        },
        {
          label: "分类",
          icon: "cubeic-tag"
        },
        {
          label: "搜索",
          icon: "cubeic-search"
        },
        {
          label: "购物车",
          icon: "cubeic-mall"
        },
        {
          label: "我的",
          icon: "cubeic-person"
        }
      ]
    };
  },
  methods: {
    clickHandler(label) {
      // if you clicked home tab, then print 'Home'
      console.log(label);
    },
    changeHandler(label) {
      console.log(label);
      switch (label) {
        case "首页":
          this.$router.push({ path: "/tabbar/index" });
          break;
        case "分类":
          this.$router.push({ path: "/tabbar/list" });
          break;
        case "搜索":
          this.$router.push({ path: "/tabbar/search" });
          break;
        case "购物车":
          this.$router.push({ path: "/tabbar/shopcar" });
          break;
        case "我的":
          this.$router.push({ path: "/tabbar/my" });
          break;
      }
      // if you clicked different tab, this methods can be emitted
    },
    created() {
      switch (this.$router.path) {
        case "/tabbar/index":
          this.selectedLabelDefault = "首页";
          break;
        case "/tabbar/list":
          this.selectedLabelDefault = "分类";
          break;
        case "/tabbar/search":
          this.selectedLabelDefault = "搜索";
          break;
        case "/tabbar/shopcar":
          this.selectedLabelDefault = "购物车";
          break;
        case "/tabbar/my":
          this.selectedLabelDefault = "我的";
          break;
      }
    }
  }
};
</script>
<style lang="stylus" scoped>
.bottom-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  background: #fff;
}

.Router {
  position: absolute;
  width: 100%;
  transition: all 0.8s ease;
}

.silde-left-enter, .silde-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(100%, 0);
  transform: translate(100%, 0);
}

.silde-left-leave-active, silde-right-enter {
  opacity: 0;
  -webkit-transform: translate(-100%, 0);
  transform: translate(-100, 0);
}
</style>

