// 获取页面元素
var small = document.getElementById('small');
var zoom = document.getElementById('zoom');
var big = document.getElementById('big');

small.onmouseover = function(){
    zoom.style.display = 'block';
    big.style.display = 'block';
}

small.onmouseout = function(){
    zoom.style.display = 'none';
    big.style.display = 'none';
}

// 放大的比列
var rate = 800 / 450;
console.log(rate);


small.onmousemove = function(e){
    // 获取鼠标如何移动的方式；根据鼠标方向移动；
    // e.clientX/Y相对页面左上角移动的距离
    var zoomX = e.clientX - small.offsetLeft-150 ;
    var zoomY = e.clientY - small.offsetTop -150;
    if(zoomX <0){
        zoomX = 0;
    }
    if(zoomY <0){
        zoomY = 0;
    }   
    if(zoomX >= 150){
        zoomX = 150;
    }
    if(zoomY >= 150){
        zoomY = 150;
    }

    zoom.style.left = zoomX + 'px';
    zoom.style.top = zoomY + 'px';

    big.style.backgroundPositionX = -zoomX*rate +'px';
    big.style.backgroundPositionY = -zoomY*rate +'px';
    
}