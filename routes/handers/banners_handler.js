
// 数据库模块
const connect = require("../../modules/connect")

const bannersHandler = (req, res, next) => {
    connect((db, close) => {
        let banners = db.collection('banners')
        let content = {err: null, data: {}};
        banners.find({}).toArray((err, results) => {
            if (err) {
                content.err = 500;
                res.send(content);
                close();
                return false;
            }
            content.err = '200';
            content.data = results;
            res.send(content);
            close();
        })
    })
}

module.exports = bannersHandler