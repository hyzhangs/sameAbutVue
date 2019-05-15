<template>
  <div class="panelsboxs">
    <cube-scroll class="leftpanenls">
      <ul>
        <li
          v-for="(list,index) in tabslabel"
          @click="selectList(index)"
          :class="list.active?'active':''"
          :key="index"
        >{{list.label}}</li>
      </ul>
    </cube-scroll>
     <cube-scroll class="rightpanenls">
      <ul>
        <li
          v-for="(item,index) in tags"
          :key="index"
        ><img :src="item.image" alt="">
        <p>{{item.label}}</p></li>
      </ul>
    </cube-scroll>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tabslabel: [
        { label: "热门推荐", active: true },
        { label: "数码3C", active: false },
        { label: "家用空调", active: false },
        { label: "电脑产品", active: false },
        { label: "手袋", active: false },
        { label: "金银财宝", active: false },
        { label: "口红", active: false },
        { label: "美妆", active: false }
      ],
      tags:[]
    }
  },
  methods: {
    async  getClassify(index) {
        const result = await this.$http.get('/api/classify',{params:{type:index}})
        this.tags = result.data;
      },
        selectList(event){
            this.tabslabel.forEach((v,i)=>{
                if(i === event){
                    v.active = true;
                }else{
                    v.active = false;
                }
            })
            this.getClassify(event);
        }
  },
  created(){
      // 获取默认分类数据
      this.getClassify(0);
  }
};
</script>
<style lang="stylus" scoped>
    .panelsboxs
        display flex
        .leftpanenls
            width 30%
        li
            height 50px
            line-height 50px
            color #333
            background #f8f8f8
            font-size 14px
            border-bottom 1px solid #fff
        .active
            background #ffffff
            color #e93b3d
        .rightpanenls
            width 70%
            ul
             display flex
             flex-wrap  wrap
            li
                width 50%
                justify-content center
                align-items center
                font-size 15px
                img 
                    width 80px
                    height  80px
</style>

