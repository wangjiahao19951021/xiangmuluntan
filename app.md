
###   接口文档

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

4. 点赞作者返回内容
url: /api/v1/hot_like
method: POST
params: {
    id: id,     文章id
    like_id: like_id 点赞用户id
}
response: {
    err, data
}

err:
    500 服务器问题
    200 成功


