var c_user=document.querySelector('.c_user');
var c_pass=document.querySelector('.c_pass');
var c_btn1=document.querySelector('.c_btn1');
var c_btn2=document.querySelector('.c_btn2');


cc_btn1.onclick=function(){
    ajax({
    url: './data/login.php',
    type: 'get',
    data: 'act=login'+'&user='+c_user.value+'&pass='+c_pass.value,
    success:function(d){
        var json = JSON.parse(d);
        if(json.msg == "登陆成功"){
            window.location.href = './index1.html';
        }
        if(json.msg == "用户名或密码有误"){
            alert(json.msg);
        }
    },
    });
};




c_btn2.onclick = function(){
    window.location.href = './w-zhuce.html'
};