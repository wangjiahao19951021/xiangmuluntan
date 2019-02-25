
const connect = require("../../modules/connect")

const hotlikeHandler = (req, res) => {

    // 点赞时间 点赞作者id
    connect((db, close) => {

        let content = {err: null, data: {}}

        let commits = db.collection("like");
        commits.find({}).toArray((err, results) => {
            if (err) {
                content.err = 500
                res.send(content);
                close();
                return false;
            } else {
                content.err = 200
                content.data = results
                res.send(content);
                close();
            }
            
        })

        
    })
}

module.exports = hotlikeHandler
