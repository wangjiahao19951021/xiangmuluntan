

const connect = require("../../modules/connect")

// 引入 ObjectID
const ObjectId = require("mongodb").ObjectId

const hotHandler = (req, res) => {
    // post请求
    let {id} = req.body
    connect((db, close) => {
        let commits = db.collection("commits")
        let content = {err: null, data: {}}
        // 点赞 更新
        // 更新某一条数据  对前端传过来的字符串进行处理 ObjectID
        // 将 id 对应 hot 数据 +1 
        commits.update({_id: ObjectId(id)}, {$inc: {hot: 1}}, (err, results) => {            
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
}
module.exports = hotHandler