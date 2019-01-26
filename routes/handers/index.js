const registerHandler = require("./register_handler")
const loginHandler = require("./login_handler")
const bannersHandler = require("./banners_handler")
const commitHandler = require("./commit_handler")

const handler = {
    // 注册
    registerHandler,
    // 登录
    loginHandler,
    // banner
    bannersHandler,
    // 提交内容接口
    commitHandler
}
module.exports = handler