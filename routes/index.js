// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// let count = 0;

// router.get('/', function (req, res, next) {
//   // 记录首页访问人数
//   count ++;
  
//   // 传出count
//   next(count)

// }, function(count, req, res, next) {
//   // res.render('index', { title: '论坛', count });
//   res.render('index', { title: '论坛', count });
// });

// module.exports = router;




// 专做页面配置

var express = require('express');
var router = express.Router();

// 查找分类信息
const findClassify = require("./handers/find_classfiy")





/* GET home page. */

router.get('/', function (req, res, next) {

  res.render('index', { title: '我的社区' });
  
});

// 注册页面
router.get('/register', function (req, res, next) {

  res.render('register', { title: '注册', type: 'register' });
  
});

// 登录页面
router.get('/login', function (req, res, next) {

  res.render('login', { title: '登录', type: 'login' });
  
});


// 发帖页面
// 发帖页分类信息  采用服务端渲染
router.get('/commit', function (req, res, next) {
  //获取分类信息
  findClassify((classify) => {
    next (classify)
  })
}, function (classify, req, res, next) {

  res.render('commit', { title: '发帖', classify});
  
})



// 列表页面
router.get('/commitlist', function (req, res, next) {

  res.render('commitlist', { title: '列表'});
  
})








module.exports = router;