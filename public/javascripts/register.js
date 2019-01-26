
// 注册表单提交

$("#form").submit(register)

//注册逻辑
function register (e) {
    // 阻止默认行为 阻止表单提交的默认行为
    e.preventDefault();
    // 表单验证 先不做了
    let username = $("#username").val();
    let password = $("#password").val();
    let nickname = $("#nickname").val();

    $.ajax({
        url: "/api/v1/register",
        type: 'post',
        data: {
            username: username,
            password: password,
            nickname: nickname
        },
        success: function (results) {
            console.log(results)
            let message = ''
            let type = ''
            switch (results.err) {
                case 500:
                    message = '服务器出错'; type = 'error'; break;
                case 400:
                    message = '用户已存在'; type = 'error';break;
                case 200:
                    message = '注册成功'; type = 'success';break;
            }

            $.message({
                message, type
            })

            if (results.err === 200) {
                // 成功跳转到登录页面
                setTimeout (() => {
                    window.location.href = '/login'
                }, 2000)
            }
            
            
        }
    })
}








// // message:' 操作成功',    //提示信息
// time:'2000',           //显示时间（默认：2s）
// type:'success',        //显示类型，包括4种：success.error,info,warning
// showClose:false,       //显示关闭按钮（默认：否）
// autoClose:true,        //是否自动关闭（默认：是）