var express = require('express');
var router = express.Router();

var handler = require("./handers")

// 配置接口
// router.post("/register", function (req, res, next) {
//   // 此处逻辑较多，封装开来
//   res.send("111")
// })

// 注册接口
router.post("/register", handler.registerHandler)
// 登录接口
router.post("/login", handler.loginHandler)
//banner接口
router.get("/banners", handler.bannersHandler)

// 提交文本内容接口
router.post("/commit", handler.commitHandler)

// 处理图片上传内容
router.post("/upload_content_img", handler.uploadContentImgHandler)


// 返回列表内容接口
router.get("/getcommits", handler.getcommitsHandler)

// 点赞功能接口
router.post("/hot", handler.hotHandler)

// 删除内容接口
router.post("/remove_commits", handler.removecommitsHandler)



module.exports = router;
