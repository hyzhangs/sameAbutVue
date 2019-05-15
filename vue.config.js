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
                image: 'http://pic.51yuansu.com/pic2/cover/00/30/43/58107fc32de56_610.jpg',
                label:'分类一'
            },
               {
                url: 'https://m.xdclass.net',
                image: 'http://pic.51yuansu.com/pic2/cover/00/30/43/58107fc32de56_610.jpg',
                label:'分类一'
            },
               {
                url: 'https://m.xdclass.net',
                image: 'http://pic.51yuansu.com/pic2/cover/00/30/43/58107fc32de56_610.jpg',
                label:'分类一'
            },
               {
                url: 'https://m.xdclass.net',
                image: 'http://pic.51yuansu.com/pic2/cover/00/30/43/58107fc32de56_610.jpg',
                label:'分类一'
            },
               {
                url: 'https://m.xdclass.net',
                image: 'http://pic.51yuansu.com/pic2/cover/00/30/43/58107fc32de56_610.jpg',
                label:'分类一'
            },
               {
                url: 'https://m.xdclass.net',
                image: 'http://pic.51yuansu.com/pic2/cover/00/30/43/58107fc32de56_610.jpg',
                label:'分类一'
            },
               {
                url: 'https://m.xdclass.net',
                image: 'http://pic.51yuansu.com/pic2/cover/00/30/43/58107fc32de56_610.jpg',
                label:'分类一'
            },
               {
                url: 'https://m.xdclass.net',
                image: 'http://pic.51yuansu.com/pic2/cover/00/30/43/58107fc32de56_610.jpg',
                label:'分类一'
            },
               {
                url: 'https://m.xdclass.net',
                image: 'http://img.mp.itc.cn/upload/20161118/2e35f4043d574840a761801d1fe8c82d_th.png',
                label:'分类一'
            },
               {
                url: 'https://m.xdclass.net',
                image: 'http://pic.51yuansu.com/pic2/cover/00/30/43/58107fc32de56_610.jpg',
                label:'分类一'
            },
          ],
          [
            {
                url: 'https://m.xdclass.net',
                image: 'http://img.mp.itc.cn/upload/20161118/2e35f4043d574840a761801d1fe8c82d_th.png',
                label:'分类一'
            },
             {
                url: 'https://m.xdclass.net',
                image: 'http://img.mp.itc.cn/upload/20161118/2e35f4043d574840a761801d1fe8c82d_th.png',
                label:'分类一'
            },
            {
                url: 'https://m.xdclass.net',
                image: 'http://img.mp.itc.cn/upload/20161118/2e35f4043d574840a761801d1fe8c82d_th.png',
                label:'分类一'
            },
            {
                url: 'https://m.xdclass.net',
                image: 'http://img.mp.itc.cn/upload/20161118/2e35f4043d574840a761801d1fe8c82d_th.png',
                label:'分类一'
            },
            {
                url: 'https://m.xdclass.net',
                image: 'http://img.mp.itc.cn/upload/20161118/2e35f4043d574840a761801d1fe8c82d_th.png',
                label:'分类一'
            },
            {
                url: 'https://m.xdclass.net',
                image: 'http://img.mp.itc.cn/upload/20161118/2e35f4043d574840a761801d1fe8c82d_th.png',
                label:'分类一'
            },
            {
                url: 'https://m.xdclass.net',
                image: 'http://img.mp.itc.cn/upload/20161118/2e35f4043d574840a761801d1fe8c82d_th.png',
                label:'分类一'
            },
            {
                url: 'https://m.xdclass.net',
                image: 'http://img.mp.itc.cn/upload/20161118/2e35f4043d574840a761801d1fe8c82d_th.png',
                label:'分类一'
            },
            {
                url: 'https://m.xdclass.net',
                image: 'http://img.mp.itc.cn/upload/20161118/2e35f4043d574840a761801d1fe8c82d_th.png',
                label:'分类一'
            },
            {
                url: 'https://m.xdclass.net',
                image: 'http://img.mp.itc.cn/upload/20161118/2e35f4043d574840a761801d1fe8c82d_th.png',
                label:'分类一'
            },
          ],
        ]
      })
    });
    app.get('/api/classify',(req,res)=>{
      switch(req.query.type){
          case '0':
          res.json({
              data:[
                  {
                      image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                      label:'小米'
                  },
                    {
                      image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                      label:'华为'
                  },
                    {
                      image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                      label:'荣耀'
                  },
                    {
                      image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                      label:'雪梨手机'
                  },
                  {
                      image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                      label:'小米'
                  },
                    {
                      image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                      label:'华为'
                  },
                    {
                      image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                      label:'荣耀'
                  },
                    {
                      image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                      label:'雪梨手机'
                  },
                  {
                      image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                      label:'小米'
                  },
                    {
                      image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                      label:'华为'
                  },
                    {
                      image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                      label:'荣耀'
                  },
                    {
                      image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                      label:'雪梨手机'
                  },
                  {
                      image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                      label:'小米'
                  },
                    {
                      image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                      label:'华为'
                  },
                    {
                      image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                      label:'荣耀'
                  },
                    {
                      image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                      label:'雪梨手机'
                  },
                  {
                      image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                      label:'小米'
                  },
                    {
                      image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                      label:'华为'
                  },
                    {
                      image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                      label:'荣耀'
                  },
                    {
                      image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                      label:'雪梨手机'
                  },
                  
              ]
          });
          break;
          case '1':
          res.json({
              data: [
                  {
                      image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                      label:'小米'
                  },
                  {
                      image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                      label:'小米'
                  },
                  {
                      image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                      label:'小米'
                  },
                  {
                      image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                      label:'小米'
                  },
              ]
          });
          break;
          case '2':
          res.json({
              data: [
                  {
                      image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                      label:'华为'
                  },
                  {
                      image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                      label:'华为'
                  },
                  {
                      image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                      label:'华为'
                  },
                  {
                      image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                      label:'华为'
                  }
              ]
          });
          break;
          case '3':
          res.json({
              data: [
                  {
                      image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                      label:'荣耀'
                  },
                  {
                      image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                      label:'荣耀'
                  },
                  {
                      image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                      label:'荣耀'
                  },
                  {
                      image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                      label:'荣耀'
                  },
              ]
          });
          break;
          case '4':
          res.json({
              data: [
                  {
                      image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                      label:'小米'
                  },
                  {
                      image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                      label:'小米'
                  },
                  {
                      image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                      label:'小米'
                  },
                  {
                      image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                      label:'小米'
                  },
              ]
          });
          break;
          case '5':
          res.json({
              data: [
                  {
                      image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                      label:'雪梨手机'
                  },
                  {
                      image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                      label:'雪梨手机'
                  },
                  {
                      image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                      label:'雪梨手机'
                  },
                  {
                      image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                      label:'雪梨手机'
                  },
              ]
          });
          break;
          case '6':
          res.json({
              data: [
                  {
                      image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                      label:'小米'
                  },
                  {
                      image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                      label:'小米'
                  },
                  {
                      image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                      label:'小米'
                  },
                  {
                      image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                      label:'小米'
                  },
              ]
          });
          break;
      }
  });
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
