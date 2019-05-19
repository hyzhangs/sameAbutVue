<template>
  <div>
    <cube-form :model="model" :schema="schema" @submit="submitHandler"></cube-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      model: {
        username: "",
        password: ""
      },
      schema: {
        // 登录用户名配置
        fields: [
          {
            type: "input",
            modelKey: "username",
            label: "用户名",
            props: {
              placeholder: "请输入用户名"
            },
            rules: {
              required: true,
              type: "string",
              min: "3",
              max: "16"
            },
            trigger: "blur",
            messages: {
              required: "用户名不能为空",
              min: "不能少于三个字符",
              max: "用户名最大不能大于16个字符"
            }
          },
          //密码配置
          {
            type: "input",
            modelKey: "password",
            label: "密码",
            props: {
              placeholder: "请输入密码",
              type: "password",
              eye: {
                open: false
              }
            },
            rules: {
              required: true,
              type: "password",
              min: "3",
              max: "16"
            },
            trigger: "blur",
            messages: {
              required: "用户名不能为空",
              min: "不能少于三个字符",
              max: "用户名最大不能大于16个字符"
            }
          },
          {
            type: "submit",
            label: "登录"
          }
        ]
      }
    };
  },
  methods: {
    // submitHandler(e) {
    //   e.preventDefault();
    //   this.$http.get('/api/login',{params:this.model}).then(l=>{
    //       console.log(l);
    //   })
    // }
    async submitHandler(e) {
      e.preventDefault();
      try {
        const result = await this.$http.get("./api/login", {
          params: this.model
        });
        if (result.code === 0) {
          this.$store.commit("setToken", result.token);
          window.localStorage.setItem("token", result.token);
         //  alert("登陆成功");
         this.$router.replace({path:'/tabbar'});
         // 判断路由是否带参数，带参数就去到从定向参数地址 否则进入首页
         if(this.$router.query.redirect){
           this.$router.replace({path: 'this.$router.query.redirect'})
         }else{
           this.$router.replace({path: '/tabbar/index'})
         }
        } else {
          alert("登录失败");
        }
       // console.log(result.data.token);
      } catch (err) {
        // console.log(err);
      }
    }
  }
};
</script>
<style lang="stylus" scoped></style>
