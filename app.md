
## express项目生成器

# http://www.expressjs.com.cn/starter/generator.html

# npm init -y

# yarn add express -S



# 全局安装express 和express应用生成器
 # npm install express -g
 # npm install express-generator -g

express xiangmuluntan   jade语法

# express -e xiangmuluntan  ejs语法 使用此种方法express应用生成器

# 一次性安装 yarn一次性安装page.json中的包   
# yarn 

# yarn add mongodb -S





#   接口文档

1. 注册

url: /api/v1/register
method: POST
params: username, password, nickname
response {
    err, data
}

err: 
    500 服务器问题
    200 注册成功
    400 用户已存在

2. 登录

url: /api/v1/login
method: POST
params: username, password
response {
    err, data
}

err: 
    500 服务器问题
    200 成功
    400 用户不存在
    401 密码不正确

3. 轮播图

url: /api/v1/banners
method: GET
params
response: {
    err, data
}

err:
    500 服务器问题
    200 成功


3. 提交内容

url: /api/v1/commit
method: POST
params: {
    content, 
    title, 
    author_id, 
    author_nick, 
    type, 
    classid
}
response: {
    err, data
}

err:
    500 服务器问题
    200 成功

