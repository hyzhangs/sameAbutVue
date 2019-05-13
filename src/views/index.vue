<template>
  <div id="index">
    <cube-slide ref="slide" :data="items" @change="changePage">
      <cube-slide-item
        v-for="(item, index) in items"
        :key="index"
        @click.native="clickHandler(item, index)"
      >
        <a :href="item.url">
          <img :src="item.image">
        </a>
      </cube-slide-item>
    </cube-slide>
    <!-- 滚动分类 -->
    <cube-slide ref="slidelists" :data="lists" :auto-play="false">
      <cube-slide-item v-for="(list, index) in lists" :key="index">
          <ul class="classul">
              <li class="classli" v-for="(item,index) in list" :key="index">
                 <a :href="item.url">
                     <img :src="item.image" >
                     <p> {{item.label}}</p>
                 </a>
              </li>
          </ul>
      </cube-slide-item>
    </cube-slide>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [], // 轮播图数组
      lists: [] // 滚动分类数组
    };
  },
  methods: {
    changePage(current) {
      console.log("当前轮播图序号为:" + current);
    },
    clickHandler(item, index) {
      console.log(item, index);
    }
  },
  async created() {
    try {
      const items = await this.$http.get("/api/abnner");
      this.items = items.data;
      console.log(items);
       const lists = await this.$http.get("/api/rollinglists");
       this.lists = lists.data;
    } catch (err) {
      console.log(err);
    }
  }
};
</script>
<style lang="stylus" scoped>
    #index
        .classul
            display flex
            flex-wrap wrap
        .classli
            width 20%
            justify-content center
            img
                width 35px
                height 35px
                border-radius 50%
                padding 5px 0
            p
                font-size 14px
                padding-buttom 10px


</style>

