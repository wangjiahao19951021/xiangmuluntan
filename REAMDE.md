echo "# xiangmuluntan" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin git@github.com:wangjiahao19951021/xiangmuluntan.git
git push -u origin master

git remote -v
git remote rm origin




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




# 关闭端口
netstat -aon|findstr "1234"

tasklist|findstr "显示的pid"

任务管理器  进程显示pid 关闭pid 对应程序


# 富文本编辑器引入
---------------------- 跨域上传 ----------------------
使用第三方的 formidable 插件初始化一个 form 对象
yarn add formidable -S


# 分页插件 pagination      http://www.jq22.com/jquery-info5697




### nodejs项目在外网访问  通过ngrok映射

ngrok authtoken 授权码

打开ngrok.exe          输入ngrok http 3000

需要注意的是，这里的端口8080可以根据需要替换成其他端口。这条命令的意思是将本地8080端口对应的服务暴露到外网中。 



红色标注的方框内，第一个是http协议对应的外网地址，第二个是https协议对应的外网地址。

这样，凡是访问https://2ef82bb3.ngrok.io的请求都将发送到localhost:8080。

每次启动ngrok都会分配一个新的外网域名，所以需要每次更换配置或者更换访问地址，不太方便。

当然，ngrok也提供了解决方法，那就是付费，可以设置固定域名。


# https://www.cnblogs.com/shiweida/p/7692468.html mongodb数据库可视化


# cmd cls清除内容

