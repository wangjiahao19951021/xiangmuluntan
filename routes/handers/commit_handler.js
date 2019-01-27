
const connect = require("../../modules/connect")


const commitHandler = (req, res, next) =>{
    // 获取前端传过来的数据 post请求方式
    let params = req.body;
    // console.log(params)
    // title content author_id author_nick
    // let {content, title, author_id, author_nick, type, classid}


    // 返回信息
    let response_content = {err: null, data: {}}

    connect((db, close) => {

        const commit = db.collection("commits")
        // 插入数据 
        // content title time author_id hot type author_nick classid
        // commit.insertOne()

        params.time = Date.now()
        // 点赞数
        params.hot = 0
        commit.insertOne(params, (err, results) =>{
            if (err) {
                console.log(err)
                response_content.err = 500
            } else {
                response_content.err = 200
            }
            res.send(response_content)
            close()
        })
    })
}

module.exports = commitHandler