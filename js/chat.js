var c3_sendbtn = document.getElementById("c3_sendbtn");
var c3_msgInput = document.getElementById("c3_msg_input");
var c3_content = document.getElementById("c3_content");
var c3_title = document.querySelector('.c2_h4c');

// c3_title.innerText = getCookie('c_nickName') + '，您有什么需要帮忙的吗？'

c3_sendbtn.onclick=function(){
    var msgInputValue = c3_msgInput.value;

    var c3_div = document.createElement("div");
    var c3_li = document.createElement("li");
    // 处理（操作）dom对象
    c3_div.style.cssText = "clear:both;";// div.style.clear = "both";
    c3_li.innerHTML = msgInputValue;
    // 给元素添加类名;
    c3_li.className = "c3_msgContent c3_right";
    // 放入具体的地方;
    c3_content.appendChild(c3_div)
    c3_content.appendChild(c3_li);
    c3_content.scrollTop = c3_content.scrollHeight;// 滚动到底部
    // 细节;
    c3_msgInput.value = "";
    c3_msgInput.focus();
    
    ajax({
    url: 'http://www.tuling123.com/openapi/api',
    type: 'get',
    data: 'key=4670f9d766704929b7983312808cdfa7&userid=xiaocuo&info='+c3_msgInput.value,
    success: function (data){
        var json=JSON.parse(data);
    var c3_div = document.createElement("div");
    var c3_li = document.createElement("li");
    // 处理（操作）dom对象
    c3_div.style.cssText = "clear:both;";// div.style.clear = "both";
    c3_li.innerHTML = json.text;
    // 给元素添加类名;
    c3_li.className = "msgContent left";
    // 放入具体的地方;
    c3_content.appendChild(c3_div)
    c3_content.appendChild(c3_li);
    c3_content.scrollTop = c3_content.scrollHeight;
    },
    });
}