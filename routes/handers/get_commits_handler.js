

const connect = require("../../modules/connect")

const getcommitsHandler = (req, res) => {
    // 获取get过来的参数   每页多少条数据 pageSize    当前第几页 pageNum
    let {pageNum, pageSize, orderBy, classify} = req.query
    // console.log(pageNum, pageSize, orderBy, classify)
    connect((db, close) => {
        let collection = db.collection("commits")
        let commits = {err: null, data: {}}
        // skip 从哪开始取 limit 取几个

        let order = {}
        // // 按最新时间排序
        order[orderBy] = -1

        let technology = 'technology'
        // 获取总页数  sort() 排序  -1 降序 1 升序 {type: classify}
        collection.find( classify === "all" ? {} : {type: classify} ).sort(order).toArray((err, results) => {
            if (err) {
                commits.err = 500
            } else {
                let counts = results.length
                commits.err = 200
                commits.data.totalData = counts;
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