const registerHandler = require("./register_handler")
const loginHandler = require("./login_handler")
const bannersHandler = require("./banners_handler")
const commitHandler = require("./commit_handler")
// 图片接口
const uploadContentImgHandler = require("./upload_content_img_handler")

const getcommitsHandler = require("./get_commits_handler")

// 点赞接口
const hotHandler = require("./hot_handler")

// 删除内容接口
const removecommitsHandler = require("./remove_commits_handler")

// 点赞
const hotlikeHandler = require("./hot_like_handler")


const handler = {
    // 注册
    registerHandler,
    // 登录
    loginHandler,
    // banner
    bannersHandler,
    // 提交内容接口
    commitHandler,
    // 处理图片上传
    uploadContentImgHandler,
    // 帖子列表接口
    getcommitsHandler,
    // 点赞功能接口
    hotHandler,
    // 删除内容接口
    removecommitsHandler,

    // 点赞从做
    hotlikeHandler

}
module.exports = handler