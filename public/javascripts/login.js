
// 表单提交

$("#form").submit(login)

//登录逻辑
function login (e) {
    // 阻止默认行为 阻止表单提交的默认行为
    e.preventDefault();
    // 表单验证 先不做了
    let username = $("#username").val();
    let password = $("#password").val();

    $.ajax({
        url: "/api/v1/login",
        type: 'post',
        data: {
            username: username,
            password: password,
        },
        success: function (results) {
            console.log(results)
            let message = ''
            let type = ''
            switch (results.err) {
                case 500:
                    message = '服务器出错'; type = 'error'; break;
                case 400:
                    message = '用户不存在'; type = 'error';break;
                case 200:
                    message = '登录成功'; type = 'success';break;
                case 401:
                    message = '密码错误'; type = 'error';break;
                    
            }

            $.message({
                message, type
            })

            // 成功跳转
            if (results.err === 200) {
                // 成功跳转到登录页面
                setTimeout (() => {
                    window.location.href = '/'
                }, 2000)
            }

            // 存储登录信息 使用jquery-cokie.js
            // 创建一个cookie并设置有效时间为 7天
            $.cookie('userinfo', JSON.stringify(results.data), { expires: 7 });
        }
    })
}








// // message:' 操作成功',    //提示信息
// time:'2000',           //显示时间（默认：2s）
// type:'success',        //显示类型，包括4种：success.error,info,warning
// showClose:false,       //显示关闭按钮（默认：否）
// autoClose:true,        //是否自动关闭（默认：是）