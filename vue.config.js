module.exports = {
  // 每次更改这个配置文件的时候 都要从新启动项目
  configureWebpack: {
    devServer: {
      // 接口编辑方法
      before(app) {
        let ueserpoor = [
          { 'username': 'xiad', 'password': '123456' },
          { 'username': 'time', 'password': '123456' }]
        app.get('/api/register', (req, res) => {
          const { username, password } = req.query
          const userLength = ueserpoor.filter(o => o.username == username).length;
          if (userLength > 0) {
            res.json({
              succsee: false,
              message: "用户名已存在"
            });
          } else {
            res.json({
              success: true,
              message: '注册成功'
            })
          }
        });
        // 登录接口
        let tokenKey = 'hyzhangclass'
        app.get('/api/login', (req, res) => {
          const { username, password } = req.query;
          if ((username == 'xiad' && password == "123456") || (username == 'time' && password == "123456") ) {
            res.json({
              code: 0,
              message: "登陆成功",
              token: tokenKey + '-' + username + '-' + (new Date().getTime() + 60 * 60 * 1000)
            })
      }else {
        res.json({
          code: 1,
          message: "账号或密码错误"
        })
      }
    });
    // 首页轮播图数据接口
    app.get('/api/abnner', (req, res)=>{
      res.json({
        data:[
          {
            url: 'http://www.didichuxing.com/',
            image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide01.png'
          },
          {
            url: 'http://www.didichuxing.com/',
            image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png'
          },
          {
            url: 'http://www.didichuxing.com/',
            image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide03.png'
          }
        ]
      })
    });
    // 获取滚动接口数据
    app.get('/api/rollinglists',(req,res)=>{
      res.json({
        data:[
          [
            {
                url: 'https://m.xdclass.net',
                image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                label:'分类一'
            },
               {
                url: 'https://m.xdclass.net',
                image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                label:'分类一'
            },
               {
                url: 'https://m.xdclass.net',
                image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                label:'分类一'
            },
               {
                url: 'https://m.xdclass.net',
                image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                label:'分类一'
            },
               {
                url: 'https://m.xdclass.net',
                image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                label:'分类一'
            },
               {
                url: 'https://m.xdclass.net',
                image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                label:'分类一'
            },
               {
                url: 'https://m.xdclass.net',
                image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                label:'分类一'
            },
               {
                url: 'https://m.xdclass.net',
                image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                label:'分类一'
            },
               {
                url: 'https://m.xdclass.net',
                image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                label:'分类一'
            },
               {
                url: 'https://m.xdclass.net',
                image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                label:'分类一'
            },
          ],
          [
            {
                url: 'https://m.xdclass.net',
                image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png',
                label:'分类一'
            },
             {
                url: 'https://m.xdclass.net',
                image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png',
                label:'分类一'
            },
            {
                url: 'https://m.xdclass.net',
                image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png',
                label:'分类一'
            },
            {
                url: 'https://m.xdclass.net',
                image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png',
                label:'分类一'
            },
            {
                url: 'https://m.xdclass.net',
                image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png',
                label:'分类一'
            },
            {
                url: 'https://m.xdclass.net',
                image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png',
                label:'分类一'
            },
            {
                url: 'https://m.xdclass.net',
                image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png',
                label:'分类一'
            },
            {
                url: 'https://m.xdclass.net',
                image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png',
                label:'分类一'
            },
            {
                url: 'https://m.xdclass.net',
                image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png',
                label:'分类一'
            },
            {
                url: 'https://m.xdclass.net',
                image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png',
                label:'分类一'
            },
          ],
        ]
      })
    })
  }
}
  },
css: {
  loaderOptions: {
    stylus: {
      'resolve url': true,
        'import': [
          './src/theme'
        ]
    }
  }
},
pluginOptions: {
  'cube-ui': {
    postCompile: true,
      theme: true
  }
}
}
