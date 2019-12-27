var w_ipts=document.querySelectorAll('.w-for input');
var spans=document.querySelectorAll('.w-for span');
var wcen=document.querySelector('.w-main-cen-cen');
var wbutt=document.querySelector('.w-butt');
var wcheck=document.querySelector('.w-check');
var wzc=document.querySelector('.w-zc');
var wmm=document.querySelector('.w-mm');
var result = [];


w_ipts[0].onblur=function(){
    var val=w_ipts[0].value.replace(/\s+/g,'');
    var reg=/^\w{4,12}$/g;
    if(val==''){
        spans[0].style.color='red';
        spans[0].innerHTML='输入不能为空!';
        return false;
    }
    if(reg.test(val)){
        spans[0].style.color='green';
        spans[0].innerHTML='可用！';
        result[0] = 1;
    }else{
        spans[0].style.color='red';
        spans[0].innerHTML='不可用！';
        result[0] = 0;
    }
}
w_ipts[1].onblur=function(){
    var val=w_ipts[1].value.replace(/\s+/g,'');
    var reg = /^\w{4,22}@[a-z0-9]{1,12}(\.[a-z]{2,3}){1,2}$/g;
    if(val==''){
        spans[1].style.color='red';
        spans[1].innerHTML='输入不能为空!';
        return false;
    }
    if(reg.test(val)){
        spans[1].style.color='white';
        spans[1].innerHTML='电子邮件用于确认购买并帮助您管理Steam帐户的访问。';
        result[1] = 1;
    }else{
        spans[1].style.color='red';
        spans[1].innerHTML='请正确输入您的邮箱!';
        result[1] = 0;
    }
}
w_ipts[2].onblur=function(){
    var val=w_ipts[2].value.replace(/\s+/g,'');
    var reg = /^[0-9a-zA-Z]{6,12}$/g;
    if(val==''){
        spans[2].style.color='red';
        spans[2].innerHTML='输入不能为空!';
        return false;
    }
    if(reg.test(val)){
        spans[2].innerHTML='';
        result[2] = 1;
    }else{
        spans[2].style.color='red';
        spans[2].innerHTML='6到12个字符，可以是数字、字母(区分大小写)!';
        result[2] = 0;
    }
}
w_ipts[3].onblur=function(){
    var val=w_ipts[3].value.replace(/\s+/g,'');
    if(val==''){
        spans[3].style.color='red';
        spans[3].innerHTML='输入不能为空!';
        return false;
    }
    if(val == w_ipts[2].value){
        spans[3].innerHTML='';
        result[3] = 1;
    }else{
        spans[3].style.color='red';
        spans[3].innerHTML='密码不符!';
        result[3] = 0;
    }
}

wbutt.onclick=function(){
    
    if (!w_ipts[0].value || !w_ipts[1].value || !w_ipts[2].value || !w_ipts[3].value) {
       wcen.style.display='block';
        wcen.innerHTML='<p>输入不能为空，请正确输入!</p><p>并查看下面突出显示的更多错误。</p>';
        document.Element.scrollTop=0;
        return false;
    }
    for(var index in result){
        if(result[index]==0){
        wcen.style.display='block';
        wcen.innerHTML='<p>格式错误，请正确输入!</p><p>并查看下面突出显示的更多错误。</p>';
        document.Element.scrollTop=0;
        return false;
        }
    }
    if(!wcheck.checked){
        wcen.style.display='block';
        wcen.innerHTML='<p>您还未勾选协议!</p><p>您必须同意这些协议条款才能继续,请勾选协议!</p>';
        document.Element.scrollTop=0;
        return false;
    }
    
    ajax({
        type:'get',
        url:'./data/login.php',
        data:'act=add&user='+wzc.value+'&pass='+wmm.value,
        success:function(d){
            var json = JSON.parse(d);
            if(json.msg == "注册成功"){
                window.location.href = './login.html';
            }
            if(json.msg == "此用户名已被占用"){
                alert(json.msg);
            }
        },
    });
}
