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

// 引入解析地址工具
const url_util = require("url")

// 引入连接数据库模块
const connect = require("../modules/connect")
const ObjectId = require("mongodb").ObjectId





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


// 内容详情页面
// 1 解析出commit id
// 2.连接数据库
// 3.返回给ejs模板
router.get('/commitlist/content', function (req, res, next) {
  
 let id = url_util.parse(req.url, true).query.id || 0
 next(id)

}, function (id, req, res, next) {

  let contnets = {err: null, data: {}}
  if (id === 0 || id.length < 24 || id.length > 24) {
    next(contnets); 
    return false;
  } 
  connect((db, close) => {
    db.collection("commits").find({_id: ObjectId(id)}).toArray((err, results) => {
      if (err) {
        contnets.err = 500
        close()        
      } else {
        // 如果没有数据
        if (!results.length) {
          contnets.err = 201
          close()
        } else {
          contnets.err = 200
          contnets.data = results[0]
          close()             
        }
      }
      // 将数据甩出去
        next(contnets)
    })
  })

}, function (contnets, req, res, next) {

  res.render('content', { title: '详情', content: contnets});
  
})








module.exports = router;