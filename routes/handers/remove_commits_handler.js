const connect = require("../../modules/connect")

// 也需要引入 ObjectId
const ObjectId = require("mongodb").ObjectId

const removecommitsHandler = (req, res) => {
    let {id} = req.body

    console.log(id)
    console.log(ObjectId(id))
    // 定义返回的内容
    let content = {err: null, data: {}}
    connect((db, close) => {
        let commits = db.collection('commits');
        commits.remove({_id: ObjectId(id)}, (err, results) => {
            if (err) {
                console.log(err)
                content.err = 500
                return false
            }
            content.err = 200
            res.send(content);
            close()

        })
    })

    // 删除点赞的数据库 
    connect((db, close) => {
        let commits_hot = db.collection("like");
        commits_hot.remove({id: id}, (err, results) => {
            if (err) {
                console.log(err)
                return false
            }
            close()
        })
    })
}

module.exports = removecommitsHandler