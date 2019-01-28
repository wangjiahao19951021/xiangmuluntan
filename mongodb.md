## Node第四课

> Express 框架、模板，MongoDB数据库

#### Express 模板

这是一个用户量较大的一个Node框架，提供了一整套的Node模板，在里面可以使用EJS模板引擎..

基于 Node.js 平台，快速、开放、极简的 web 开发框架。（开发后端）

Express的性能对Node没有影响，依然很高。

##### 用法：

安装方法：

1. 全局安装express 和express应用生成器
```
npm install express -g
npm install express-generator -g
```
2. 使用应用生成器去创建应用

-e 代表使用ejs模板引擎，否则会使用jade模板引擎

```
 cmd:   express project(项目名字) -e（使用ejs模板引擎）
```
3. 安装依赖，进入到创建好的项目中安装依赖

```
cd project
npm install
```
应用分析：

1. package.json

    body-parse：专门负责解析前端传递来的数据

    cookie-parser：解析请求头中的cookie信息

    ejs：模板引擎编译工具

    serve-favicon：专门处理类似于谷歌浏览主动请求favicon.ico文件的问题

2. bin/www 这个是和创建的服务相关的东西，可以在这里配置端口等等设置。

3. public：静态资源文件夹，在这个文件夹里的文件，在前端都可以直接访问，不需要再在后端配置路由， /stylesheets/a.css

4. app.js：主应用文件，在这里可以设置路由、插件等等之类的东西，其实创建出来的就是requestListener

5. views:放入ejs模板，express会将ejs模板装换成html文件

6. routes:里面的全是路由文件，专门来处理不同的请求


##### 模板引擎：

在前端开发过程中，有很多模板引擎可以使用，例如jade，ejs等等，使用模板引擎的优点：

1. 可以在模板引擎文件里去写一些逻辑性的代码,用于服务端渲染，提高seo优化级别

2. 可以使用便捷语法来开发html结构代码（jade）。

什么是ejs：

ejs是一个简单高效的模板语言，通过数据和模板，可以生成html标记文本，可以说ejs是一个js库，ejs可以运行在客户端和服务器端，客户端安装直接用引入文件即可，服务端要用npm包安装

* ejs的特点：

* 快速编译和渲染

* 简单的模板标签

* 自定义标记分隔符

* 支持文本包含

* 支持浏览器端和服务器端

* 模板静态缓存

* 支持express视图系统

语法：

符号： <%  %>

引入： <%- include(path) %>

输出：<%= %> 不会解析html代码

     <%-  %> 输出且解析html代码

在<%%>中间可以写一些js的代码逻辑，只不过一定要用<%%>包裹



##### 服务端渲染：

其实前端开发需要做的事情，只有三个：1. 创建界面结构 2. 数据交互  3. 渲染数据

数据交互其实又可以分成两种：1. 给后端数据 2. 从后端拿数据

数据交互的目的是什么？取：将数据渲染到dom文档中 给：提交数据到后台后，后台会继续返回我们一个数据，拿到这个数据，依然还是需要渲染

数据渲染方式分为两种：

1. 客户端渲染（浏览器渲染）：前端js通过ajax等数据交互技术，获取到数据后通过操作dom来进行数据的渲染

    例如，ajax获取到用户购物车的信息，通过拼接字符串的方法将数据渲染在dom中

2. 服务端渲染，浏览器请求到的内容其实可以通过后端加工一下,将一会数据直接渲染好，再给浏览器就可以了

    例如，每个学期开始的时候，学生会得到课本，。课本上的空题都需要学生自己去写，当学期末写完的时候，相当于客户端将数据渲染在浏览器中，学生将答案写在了课本上

    通过，老师都可以得到教材课本，在这种课本上，答案，讲义等等都已经印刷好了，相当于服务端将数据渲染在浏览器，书商将答案印在了课本上

    客户端渲染的优点：比较灵活；经过用户的动作进行加载的数据

    服务端渲染的优点：减少了前端逻辑，提高了SEO优化等级，只要是在页面加载的时候就需要渲染的数据，变动较少的数据


    在php中实现服务端渲染：
    
    在php文件中可以放入html代码，访问php文件的时候就相当于访问这个对应的html文件，因为在php文件中，所以可以写一些php的代码来渲染数据

    在Node中实现服务端渲染：

    利用模板引擎，node在渲染模板的时候给模板传入数据，在模板中就可以使用特定的语法来渲染dom了

---
注意：express里的路由是靠请求路径划分的，前一个自己搭的路由是根据请求类型划分的。

#### MongoDB 数据库

这是一个数据库，与MySQL(关系型数据库)的区别就是，它是一个非关系型数据库  NoSql数据库

##### 关系型数据库和非关系型数据库的区别

1.实质。    

非关系型数据库的实质：非关系型数据库产品是传统关系型数据库的功能阉割版本，通过减少用不到或很少用的功能，来大幅度提高产品性能。

2.价格。

目前基本上大部分主流的非关系型数据库都是免费的。而比较有名气的关系型数据库，比如Oracle、DB2、MSSQL是收费的。虽然Mysql免费，但它需要做很多工作才能正式用于生产。

3.功能。    

实际开发中，有很多业务需求，其实并不需要完整的关系型数据库功能，非关系型数据库的功能就足够使用了。这种情况下，使用性能更高、成本更低的非关系型数据库当然是更明智的选择。

mongodb的特点：

1. 性能高、I/O处理快
2. 速度快
3. 稳定不好，占用空间大

#### 1.安装MongoDB

下载对应版本的mongodb来进行安装，安装的后注意需要手动设置数据库的位置。。。详细请搜索

1.在安装的时候选择安装地址，一般情况下安装在c盘（默认安装地址）即可

2.我们在c盘（最好）建立一个data文件夹，在data文件夹下面再建立一个db文件夹

3.在mongodb的bin文件夹下，cmd执行 mongod.exe --dbpath c:\data\db

4.运行mongod.exe来启动mongodb

5.依然在mongodb的bin文件夹下cmd 输入mongo回车，就可以操作mongodb，例如 show databases;


>小贴士：如果安装不上，因为有一些个dll文件缺少，要么去按照百度教的方法下载驱动精灵修复系统，要么重装系统，要么就用自己的电脑

一般情况下，使用命令行操作数据库就可以，如果不愿意请自行下载各种可视化工具：
[基于node可视化工具](https://www.cnblogs.com/shiweida/p/7692468.html)

#### 2.MongoDB概念

MongoDB是一个基于分布式文件存储的数据库。由C++语言编写。旨在为WEB应用提供可扩展的高性能数据存储解决方案。

它的特点:高性能、易部署、易使用，存储数据非常方便。


#### 3.专业术语

SQL术语、概念 | MongoDB术语、概念 | 说明
---|---|---
database | database | 数据库
table | collection | 表\集合
row | doucument | 数据记录行\文档
column | field | 数据字段\域
index | index | 索引
table joins |  | 表连接 mongodb不支持
primary key | primary key | 主键，mongodb自动将_id作为主键

database>colletions>documents

#### 4.mongodb的存储数据类似于js的json格式对象，或者json文件存储数据的方式：

```
[
    {
        "_id":ObjectId("1726iuhas678971726731"),
        "age":25,
        "city":"beijing",
        "email":"asdgakj@qq.com"
    },
    {
        "_id":ObjectId("1726iuhas678971726731"),
        "age":25,
        "city":"beijing"
    }
]
```

#### 5.数据库

一个mongodb中可以建立多个数据库。

MongoDB的默认数据库为"db"，该数据库存储在data目录中。

MongoDB的单个实例可以容纳多个独立的数据库，每一个都有自己的集合和权限，不同的数据库也放置在不同的文件中。

#### 6.简单操作

show databases 查看数据库

db 查看当前数据库

use name 切换某个数据库


#### 7.文档
文档是一个键值(key-value)对(即BSON)。

MongoDB 的文档不需要设置相同的字段，并且相同的字段不需要相同的数据类型，这与关系型数据库有很大的区别，也是 MongoDB 非常突出的特点。
一个简单的文档例子如下：
[
    {"genres": ["犯罪","剧情" ],"title": "肖申克的救赎"},
    {"title":"阿甘正传",grade:"8.4","genres":"励志"}
]


#### 8.集合

集合就是 MongoDB 文档组，类似于 RDBMS （关系数据库管理系统：Relational Database Management System)中的表格。

集合存在于数据库中，集合没有固定的结构，这意味着你在对集合可以插入不同格式和类型的数据，但通常情况下我们插入集合的数据都会有一定的关联性。


```
{
    'title':['aaa',"aaa","aaa",["a":{}]]
},
{
    'title':'bbb'
}
```


#### 9.数据类型

String : 这是最常用的数据类型来存储数据。在MongoDB中的字符串必须是有效的UTF-8。

Integer : 这种类型是用来存储一个数值。整数可以是32位或64位，这取决于您的服务器。

Boolean : 此类型用于存储一个布尔值 (true/ false) 。

Double : 这种类型是用来存储浮点值。

Min/ Max keys : 这种类型被用来对BSON元素的最低和最高值比较。

Arrays : 使用此类型的数组或列表或多个值存储到一个键。

Timestamp : 时间戳。这可以方便记录时的文件已被修改或添加。

Object : 此数据类型用于嵌入式的文件。

Null : 这种类型是用来存储一个Null值。

Symbol : 此数据类型用于字符串相同，但它通常是保留给特定符号类型的语言使用。

Date : 此数据类型用于存储当前日期或时间的UNIX时间格式。可以指定自己的日期和时间，日期和年，月，日到创建对象。

Object ID : 此数据类型用于存储文档的ID。

Binary data : 此数据类型用于存储二进制数据。

Code : 此数据类型用于存储到文档中的JavaScript代码。

Regular expression : 此数据类型用于存储正则表达式



#### 10.库的操作

* Help查看命令提示

help

db.help()

db.test.help()

db.test.find().help()

* 创建/切换数据库

use music

* 查询数据库

show dbs 空库将不会显示

db.albums.insertOne({'title':'bey bey'})来插入一条后再看

* 查看当前使用的数据库

db/db.getName()

* 显示当前DB状态

db.stats()

* 查看当前DB版本

db.version()

* 查看当前DB的链接机器地址

db.getMongo()

* 删除数据库

db.dropDatabase()

#### Collection聚集集合操作


创建一个聚集集合

db.createCollection("collName", {size（集合大小）: 20, capped（固定大小，可提高使用效率）: true, max（最大值）: 100});

db.collName.isCapped(); //判断集合是否为定容量

得到指定名称的聚集集合

db.getCollection("account");

得到当前db的所有聚集集合

db.getCollectionNames();

显示当前db所有聚集的状态

db.printCollectionStats();

### 添加、修改与删除集合数据

查看

db.users.find()

添加

db.users.save({name: ‘zhangsan', age: 25, sex: true});

db.users.insertOne({name: ‘zhangsan', age: 25, sex: true});

db.users.insertMany([{name: ‘zhangsan', age: 25, sex: true},{name: ‘zhangsan', age: 25, sex: true}]);

修改



db.users.update({age: 25}(约定条件，全部修改只写{}), {$set: {name: 'changeName',sex:1}}, false, true);

第三个参数为，如果没有这个数据，会不会创建，第四个参数为，如果有很多，是要全改true，还是只改第一条

相当于：update users set name = ‘changeName' where age = 25;

db.users.update({name: 'Lisi'}, {$inc: {age: 50}}, false, true);

相当于：update users set age = age + 50 where name = ‘Lisi';

db.users.update({name: 'Lisi'}, {$inc: {age: 50}, $set: {name: 'hoho'}}, false, true);

相当于：update users set age = age + 50, name = ‘hoho' where name = ‘Lisi';


删除

db.users.remove({age: 32});符合条件全删
db.users.remove({age: 132}，{justone:true});只删一条
db.users.remove({});删除所有document


查询修改删除


```
db.users.findAndModify({
    query: {age: {$gte: 25}}, 
    sort: {age: -1}, 
    update: {$set: {name: 'a2'}, $inc: {age: 2}},
    remove: true
});

db.runCommand({ findandmodify : "users", 
    query: {age: {$gte: 25}}, 
    sort: {age: -1}, 
    update: {$set: {name: 'a2'}, $inc: {age: 2}},
    remove: true
});
```
query 过滤条件 $gte大于

sort如果多个文档符合查询过滤条件，将以该参数指定的排列方式选择出排在首位的对象，该对象将被操作，-1位为降序

remove 若为true，被选中对象将在返回前被删除

update 一个 修改器对象

remove 创建新对象若查询结果为空



#### 聚集集合查询

查询所有记录


db.userInfo.find();

相当于：select* from userInfo;

查询去重后数据

db.userInfo.distinct("name");

相当于：select distict name from userInfo;

查询age = 22的记录

db.userInfo.find({"age": 22});

相当于： select * from userInfo where age = 22;

查询age > 22的记录

db.userInfo.find({age: {$gt: 22}});

相当于：select * from userInfo where age >22;

查询age < 22的记录

db.userInfo.find({age: {$lt: 22}});

相当于：select * from userInfo where age <22;


查询age >= 25的记录

db.userInfo.find({age: {$gte: 25}});

相当于：select * from userInfo where age >= 25;

查询age <= 25的记录

db.userInfo.find({age: {$lte: 25}});

查询age >= 23 并且 age <= 26

db.userInfo.find({age: {$gte: 23, $lte: 26}});

查询name中包含 mongo的数据

db.userInfo.find({name: /^mongo/});

//相当于%%
select * from userInfo where name like ‘%mongo%’;

查询name中以mongo开头的

db.userInfo.find({name: /^mongo/});

相当于select * from userInfo where name like ‘mongo%’;


查询指定列name、age数据

db.userInfo.find({}, {name: 1, age: 1});

相当于：select name, age from userInfo;

查询指定列name、age数据, age > 25

db.userInfo.find({age: {$gt: 25}}, {name: 1, age: 1});

相当于：select name, age from userInfo where age >25;

按照年龄排序

升序：db.userInfo.find().sort({age: 1});

降序：db.userInfo.find().sort({age: -1});

查询name = zhangsan, age = 22的数据

db.userInfo.find({name: 'zhangsan', age: 22});

相当于：select * from userInfo where name = ‘zhangsan' and age = 
’22';

查询前5条数据

db.userInfo.find().limit(5);

相当于：select top 5 * from userInfo;



查询10条以后的数据

db.userInfo.find().skip(10);

相当于：select * from userInfo where id not in (
   select top 10 * from userInfo
);

查询在5-10之间的数据

db.userInfo.find().limit(10).skip(5);

or与 查询

db.userInfo.find({$or: [{age: 22}, {age: 25}]});

相当于：select * from userInfo where age = 22 or age = 25;

查询第一条数据

db.userInfo.findOne();

相当于：selecttop 1 * from userInfo;

db.userInfo.find().limit(1);

查询某个结果集的记录条数

db.userInfo.find({age: {$gte: 25}}).count();

相当于：select count(*) from userInfo where age >= 20;







[
    { classId:1,classText:'图书'},
    { classId:2,classText:'衣服'},
    { classId:3,classText:'手机'}
]


[
    {classId:1,title:'颠覆者',price:36,imgurl:"/images/goods/book/dfz.jpg",sale:34543,hot:67856},
    {classId:1,title:'美术入门',price:58,imgurl:"/images/goods/book/msrm.jpg",sale:34543,hot:54745},
    {classId:1,title:'全球通史',price:96,imgurl:"/images/goods/book/qqts.jpg",sale:435365,hot:3543},
    {classId:1,title:'时间简史',price:23,imgurl:"/images/goods/book/sjjs.jpg",sale:4265,hot:5767},
    {classId:1,title:'行为心理学',price:44,imgurl:"/images/goods/book/xwxlx.jpg",sale:465,hot:756765},
    {classId:2,title:'白夹克',price:128,imgurl:"/images/goods/clothes/1.jpg",sale:234,hot:57567},
    {classId:2,title:'黑棉袄',price:216,imgurl:"/images/goods/clothes/2.jpg",sale:2,hot:4654},
    {classId:2,title:'蓝棉袄',price:218,imgurl:"/images/goods/clothes/3.jpg",sale:343,hot:456546},
    {classId:2,title:'黑夹克',price:135,imgurl:"/images/goods/clothes/4.jpg",sale:543,hot:57657},
    {classId:2,title:'半袖',price:70,imgurl:"/images/goods/clothes/5.jpg",sale:35,hot:3545},
    {classId:3,title:'华为7X',price:1820,imgurl:"/images/goods/phone/hw-7x-1820.jpg",sale:234,hot:57567},
    {classId:3,title:'华为V8',price:1699,imgurl:"/images/goods/phone/hw-v8-1699.jpg",sale:2355,hot:6786},
    {classId:3,title:'Iphone 8PLUS',price:6088,imgurl:"/images/goods/phone/ip-8p-6088.jpg",sale:657,hot:3453},
    {classId:3,title:'坚果PRO',price:1499,imgurl:"/images/goods/phone/jg-pro-1499.jpg",sale:525,hot:7457},
    {classId:3,title:'OPPO R11S',price:2999,imgurl:"/images/goods/phone/op-r11-2999.jpg",sale:346,hot:467568}
]



[
    {uid:,goods:[{goodid,num}]}
]



### 使用Node+express+ejs+mongodb+boostrap+jquery实现的小型电商项目

项目的功能：

目前：登陆、注册、登陆记录、token验证、焦点图展示、商品展示、分类、排序、分页、购物车的部分功能

待完成：购物车的删除以及全选功能（作业）,商品搜索(作业),头像修改上传，内嵌的论坛。

项目结构：

使用了express模板:

* bin>www 服务相关
* config>index.js 全局配置
* node_modules 依赖的模块
* public>静态资源
    images>图片
    javascripts>web中使用的js文件
    stylesheets>web中使用的css样式文件
    lib>外链资源性文件，例如bootstrap、swiper
* app.js 整个的应用配置
* package.json 项目依赖配置
* routes> 路由配置
    index.js>各个标签页的路由配置，其中首页实现了banner图的服务端渲染
    api.js>api接口的路由配置
    modules>常用的功能性模块封装
* views> ejs模板视图
    particles>部分通用模板文件


https://github.com/Erioser/uploadImg-node

https://github.com/Erioser/editor-node


### socket

http不能实现持久性的连接，而且服务端不能主动向客户端推送信息

服务端的最主要的作用：接收客户端的请求，做出相应的响应。

例如，在一个论坛项目中，当有新帖子出现后需要通知客户端的时候，因为服务端无法主动向客户端发送消息，所以这样功能受限。

在以前，我们大部分情况下使用轮询的方式来完成

在这里我们学习如何使用websocket来实现

使用socket主要为的是实现：实现持久性连接，让客户端和服务端都能互相发送信息

这就叫双端通信连接，连接的每一端都被称为一个socket