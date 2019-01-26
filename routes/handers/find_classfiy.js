

const connect = require("../../modules/connect")


// 查找 分类信息
const findClassify = (callback) => {
    connect((db, close) => {
        let classify = db.collection('classify');
        classify.find({}).toArray((err, results) => {
            if (err) {
                console.log(err);
                return false;
            } 
            callback(results);
            close();
        })
    })
}
module.exports = findClassify