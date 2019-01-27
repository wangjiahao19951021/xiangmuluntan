

const connect = require("../../modules/connect")

const getcommitsHandler = (req, res) => {
    // 获取get过来的参数   每页多少条数据 pageSize    当前第几页 pageNum
    let {pageNum, pageSize} = req.query
    console.log(pageNum, pageSize)
    connect((db, close) => {
        let collection = db.collection("commits")
        let commits = {err: null, data: {}}
        // skip 从哪开始取 limit 取几个

        // 获取总页数
        collection.find({}).toArray((err, results) => {
            if (err) {
                commits.err = 500
            } else {
                commits.err = 200
                commits.data.totalData = results.length;
                // 开始位置 结束位置
                commits.data.commits = results.splice((pageNum-1) * pageSize, parseInt(pageSize))
            }
            res.send(commits);
            close()
        })

        // 按条件查询 
        // collection.find().skip((pageNum-1) * pageSize).limit(parseInt(pageSize)).toArray((err, results) => {
        //     if (err) {
        //         commits.err = 500
        //     } else {
        //         commits.err = 200                
        //         commits.data = results
        //     }
        //     res.send(commits)
        //     close()
        // })
    })
}


module.exports = getcommitsHandler