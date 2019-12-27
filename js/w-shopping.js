var w2_imgs=document.querySelectorAll('.w2-main-center-le2 .w2-img-img');
var w2_le1=document.querySelector('.w2-main-center-le1');
var w2preImg=0;
var w2time1,w2time2,w2time3,w2time4,w2time5,w2time6,w2time7,w2time8;
var w2imgIndex=0;
var w2_le2=document.querySelector('.w2-main-center-le2');


// w2autoMove();
$.ajax({
    url:'./data/w-goods.json',
    type:'get',
    dataType:'json',
    cache:false,
    success:function(jsonArr){
        var w2results='';
        $.each(jsonArr[0],function(index,item){
            w2results+=`<div class="w2-main-foot2-goods" code="${item.code}">
            <h1>${item.title}</h1>
            <h2>${item.title2}</h2>
            <h3><img src="${item.imgurl}" alt=""></h3>
            <div class="w2-main-foot2-goods-price">
                <span>${item.zk}</span><i>${item.price}</i><em>添加至购物车</em>
            </div>
        </div>`;
        });
        $('.w2-main-foot2-le').html(w2results);


        var w2results2='';
        $.each(jsonArr[1],function(index,item){
            w2results2+=`<div class="w2-main-foot5-le1">
            <div class="w2-main-foot5-le1-le">
                <div class="w2-main-foot5-le1-lele">
                    <img src="${item.w1}" alt="">
                </div>
                <div class="w2-main-foot5-le1-leri">
                    <h3>${item.w2}</h3>
                    <p>${item.w3}</p>
                    <p>${item.w4}</p>
                </div>
            </div>
            <div class="w2-main-foot5-le1-ri">
                <div class="w2-main-foot5-le1-ri1">
                    <img src="${item.w5}" alt="">
                    <div class="w2-main-foot5-le1-ri11">
                        <h4>推荐</h4>
                        <h5>总时数53.4小时（评测时47.8小时）</h5>
                    </div>
                </div>
                <div class="w2-main-foot5-le1-ri2">
                    <h4><a href="">抢先体验版本评测</a><span>发布于：${item.w10}</span></h4>
                </div>
                <h6>${item.w6}</h6>
                <div class="w2-main-foot5-le1-ri3">
                    <h4>这篇评测是否有价值?</h4><h3>是</h3><h2>否</h2>
                </div>
                <div class="w2-main-foot5-le1-ri4">
                    <p>有<span> ${item.w7} </span>人觉得这篇评测有价值</p>
                </div>
            </div>
        </div>`;
        });
        $('.w2-main-foot5-le').html(w2results2);

        var w2results3='';
        $.each(jsonArr[1],function(index,item){
            w2results3+=`<div class="w2-main-foot5-ri1">
            <div class="w2-main-foot5-ri11">
                <img src="${item.w11}" alt=""><span>${item.w8}</span>
            </div>
            <div class="w2-main-foot5-ri12">
                <h4><a href="">抢先体验版本评测</a><span>发布于：11月30日</span></h4>
            </div>
            <div class="w2-main-foot5-ri13">
                <p>${item.w9}</p>
            </div>
            <div class="w2-main-foot5-ri14">
                <h4>是否有价值?</h4><h3>是</h3><h2>否</h2>
            </div>
        </div>`;
        });
        $('.w2-main-foot5-ri').html(w2results3);
    }
})


for(i=0,len=w2_imgs.length;i<len;i++){
    w2_imgs[i].ind=i;
    w2_imgs[i].onclick=function(){
        clearInterval(w2time1);
        w2_imgs[w2imgIndex].style.border='2px solid transparent';
        for(n=0;n<w2_imgs.length;n++){
            if(this==w2_imgs[n]){
                if(n==0){
                    w2_le1.innerHTML=`<video src="https://media.st.dl.bscstorage.net/steam/apps/256758435/movie480.mp4?t=1565806635" 
                    class="w2-vid" autoplay="autoplay" controls="controls" muted="muted" loop="loop"></video>`;
                }else{
                    if(n==1){
                        w2_le1.innerHTML=`<video src="https://media.st.dl.bscstorage.net/steam/apps/256754907/movie480.mp4?t=1561954882" 
                        class="w2-vid" autoplay="autoplay" controls="controls" muted="muted" loop="loop"></video>`;
                    }else{
                        w2_le1.innerHTML='';
                        w2_le1.innerHTML=w2_imgs[n].innerHTML;
                    }
                }
            w2_imgs[w2preImg].style.border='2px solid transparent';
            w2preImg=this.ind;
            w2_imgs[w2preImg].style.border='2px solid #fff';
        }
        }
        w2imgIndex=w2preImg;
        w2move();
    }
}


function w2move(){
    // var w2imgIndex=0;
    // var start=w2_le2.scrollLeft;
    var everyStep=120;
    
    w2time1=setInterval(() => {
                w2imgIndex++;
                if(w2imgIndex >= w2_imgs.length){
                    clearInterval(w2time1);
                    // w2_imgs[w2imgIndex].style.border='2px solid transparent';
                    // w2_le2.scrollLeft=everyStep;
                    w2imgIndex=0;
                    // w2move();
                }
                
                if(w2imgIndex==0){
                    w2_le1.innerHTML=`<video src="https://media.st.dl.bscstorage.net/steam/apps/256758435/movie480.mp4?t=1565806635" 
                    class="w2-vid" autoplay="autoplay" controls="controls" muted="muted" loop="loop"></video>`;
                }else{
                    if(w2imgIndex==1){
                        w2_le1.innerHTML=`<video src="https://media.st.dl.bscstorage.net/steam/apps/256754907/movie480.mp4?t=1561954882" 
                        class="w2-vid" autoplay="autoplay" controls="controls" muted="muted" loop="loop"></video>`;
                    }else{
                        w2_le1.innerHTML='';
                        w2_le1.innerHTML=w2_imgs[w2imgIndex].innerHTML;
                    }
                }
                w2_imgs[w2imgIndex].style.border='2px solid #fff';
                w2_imgs[w2imgIndex-1].style.border='2px solid transparent';
                // if(w2imgIndex>=20){
                //     w2imgIndex=0;
                // }
                // if(w2imgIndex>=0 && w2imgIndex<=4){
                //     w2_le2.scrollLeft=everyStep*0;
                // }else{
                if(w2imgIndex>4 && w2imgIndex<=9){
                //     while(w2imgIndex=5){
                //     var w2num=0;
                //     w2time2=setInterval(function(){[]
                //         w2num++;
                //         if(w2num>=5){
                //             clearInterval(w2time2);
                //         }
                //         w2_le2.scrollLeft=everyStep*w2num;
                //     },100)
                // }
                    w2_le2.scrollLeft=everyStep*5;
                }else{
                    if(w2imgIndex> 9 && w2imgIndex<=14){
                        // var w2num=5;
                        // w2time3=setInterval(function(){
                        //     w2num++;
                        //     if(w2num>=9){
                        //         clearInterval(w2time3);
                        //     }
                        //     w2_le2.scrollLeft=everyStep*w2num;
                        // },50)
                        w2_le2.scrollLeft=everyStep*10;
                    }else{
                        if(w2imgIndex> 14 && w2imgIndex<=19){
                            // var w2num=10;
                            // w2time4=setInterval(function(){
                            //     w2num++;
                            //     if(w2num>=9){
                            //         clearInterval(w2time4);
                            //     }
                            //     w2_le2.scrollLeft=everyStep*w2num;
                            // },50)
                            w2_le2.scrollLeft=everyStep*15;
                        // }else{
                        //     if(w2imgIndex>=20){
                        //         w2imgIndex=0;
                        //         clearInterval(w2time1)
                        //         // w2_le2.scrollLeft=everyStep*0;
                        //         // w2time1;
                        //     }
                        }
                    }
                }
            // }
                
                
            }, 2000);
}
w2move();

$('.w2-main-foot2-le').on('click','.w2-main-foot2-goods em',function(){
    var code=$(this).parent().parent().attr('code');
    if(localStorage.getItem('goods')){
        var codeArr=JSON.parse(ocalStorage.getItem('goods')).code;
    }else {
        var codeArr = [];
    }
    codeArr.push(code);
    var jsonStr = JSON.stringify({"code":codeArr});
    localStorage.setItem('goods',jsonStr);
    alert('成功加入购物车！');
})
