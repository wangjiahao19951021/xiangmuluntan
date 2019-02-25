

const connect = require("../../modules/connect")

// 引入 ObjectID
const ObjectId = require("mongodb").ObjectId

const hotHandler = (req, res) => {
    // post请求
    let params = req.body

    connect((db, close) => {
        let commits = db.collection("commits")
        let content = {err: null, data: {}}
        // 点赞 更新
        // 更新某一条数据  对前端传过来的字符串进行处理 ObjectID
        // 将 id 对应 hot 数据 +1 
        commits.update({_id: ObjectId(params.id)}, {$inc: {hot: 1}}, (err, results) => {            
            if (err) {
                content.err = 500
            } else {
                content.err = 200
            }
            res.send(content)
            close()
        })

        // 将数据库表中所有hot 重置为0
        // commits.update({}, {$set: {"hot": 0}},{multi:true})

        
    })
    params.hot_id = []
    connect((db, close) => {
        let hot_commits = db.collection("like");
        hot_commits.find({id: params.id}).toArray((err, results) => {
            if (err) {
                return false
            } else {
                if (results.length) {
                    // console.log(results)
                    // console.log(results.hot_id)
                    // console.log(results[0].hot_id)
                    if (results[0].hot_id.indexOf(params.like_id) == -1) {
                        // 此处为向数据库表数组中添加内容  百度
                        hot_commits.update({id: params.id}, {$push: {"hot_id": params.like_id}})
                    }

                    // 先做一个初始化，设置一个User类，其初始数据如下：
                    // { 
                    // arr: [ 1, 2 ],
                    // _id: 5ac5ee12a79131259413c40f,
                    // name: 'scy',
                    // __v: 0 
                     // }
                    // //第一个参数是匹配条件 第二个参数是具体操作
                    // User.update({name:"scy"},{$push:{"arr":3}});//向user里面的arr末尾追加元素3

                } else {
                    params.hot_id.push(params.like_id)
                    delete params.like_id
                    hot_commits.insertOne(params, (err, results) => {
                        if (err) {
                            
                        } else{
                            
                        }
                    })
                }
            }
            close()
        })
    })
   
}
module.exports = hotHandler