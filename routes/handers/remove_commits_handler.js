const connect = require("../../modules/connect")

// 也需要引入 ObjectId
const ObjectId = require("mongodb").ObjectId

const removecommitsHandler = (req, res) => {
    let {id} = req.body
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
}

module.exports = removecommitsHandler