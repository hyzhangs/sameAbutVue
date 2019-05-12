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
