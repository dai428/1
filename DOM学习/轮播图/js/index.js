// 1.获取元素
var imglis = document.getElementById('imglist').querySelectorAll('li');
var leftBtn = document.getElementById('left');
var rightBtn = document.getElementById('right');
var circlelis = document.getElementById('circle').querySelectorAll('li');

// idx控制图片显示
var idx = 0;

leftBtn.onclick = function(){
    idx--;
    console.log(idx);
    changePic();
}

rightBtn.onclick = function(){
    idx++;
    console.log(idx);
    changePic();
}

// 2.控制页面图片显示与隐藏
function changePic(){
    // idx边界处理
    if(idx > imglis.length - 1){
        idx = 0;
    }
    if(idx < 0){
        idx = imglis.length - 1;
    }

    // 先把所有的current移除，然后对相应元素添加class属性进行显示
    for( var i=0;i<imglis.length;i++){
        imglis[i].removeAttribute('class');
        circlelis[i].removeAttribute('class');
    }
    imglis[idx].setAttribute('class','current');
    circlelis[idx].setAttribute('class','current');
}

// 3.点击指示器切换图片
for(var i=0;i<circlelis.length;i++){
    circlelis[i].idxx = i;
    circlelis[i].onclick = function(){
        idx = this.idxx;
        
        changePic();
    }
}
