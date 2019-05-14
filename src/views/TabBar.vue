<template>
<div>
  <router-view/>
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
          break
        case "我的":
          this.$router.push({ path: "/tabbar/my" });
          break


      }
      // if you clicked different tab, this methods can be emitted
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
</style>

