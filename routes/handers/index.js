const registerHandler = require("./register_handler")
const loginHandler = require("./login_handler")
const bannersHandler = require("./banners_handler")
const commitHandler = require("./commit_handler")
// 图片接口
const uploadContentImgHandler = require("./upload_content_img_handler")


const getcommitsHandler = require("./get_commits_handler")
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
    // 列表接口
    getcommitsHandler
}
module.exports = handler