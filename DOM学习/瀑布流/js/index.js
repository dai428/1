
// 1.动态设置页面左右居中
window.onload = function () {
    waterFlow();

    // 准备上拉加载的数据
    var dataImage = {
        data: [
            { src: './img/1.jpg' },
            { src: './img/2.jpg' },
            { src: './img/3.jpg' },
            { src: './img/4.jpg' },
            { src: './img/5.jpg' },
            { src: './img/6.jpg' },
            { src: './img/7.jpg' },
            { src: './img/8.jpg' },
            { src: './img/9.jpg' },
            { src: './img/10.jpg' },
            { src: './img/11.jpg' },
        ]
    }

    window.onscroll = function () {
        if (checkReachBottom()) {
            var parentContainer = document.getElementById('container')
            for (var i = 0; i < dataImage.data.length; i++) {
                var childBox = document.createElement('div');
                childBox.setAttribute('class', 'box');
                parentContainer.appendChild(childBox);

                var childImgBox = document.createElement('div');
                childImgBox.setAttribute('class', 'boxing');
                childBox.appendChild(childImgBox);

                var img = document.createElement('img');
                img.setAttribute('src', dataImage.data[i].src);
                childImgBox.appendChild(img)
            }
            waterFlow();
        }
    }
}


function waterFlow() {
    // 获取父级容器
    var parentContainer = document.getElementById('container');
    // 获取所有子元素
    var allChild = document.getElementsByClassName('box');
    // 获取屏幕宽度
    var screenWidth = document.documentElement.clientWidth;
    // 获取一个图片容器的宽度
    var childWidth = allChild[0].offsetWidth;
    // 计算屏幕水平方向最多摆放的图片个数
    var rowsNum = Math.floor(screenWidth / childWidth);
    // 让页面左右居中
    parentContainer.style.cssText = 'width:' + rowsNum * childWidth + 'px;margin:0 auto;'

    getMinHeightOfCols(allChild, rowsNum);

}



// 2.动态设置图片位置
function getMinHeightOfCols(allChild, rowsNum) {
    // 存储每列的高度
    var colsHeightArr = [];
    for (var i = 0; i < allChild.length; i++) {
        // 判断取出第一行的图片，获取图片对应的高度，放入到数组
        if (i < rowsNum) {
            // 获取当前图片的高度
            colsHeightArr[i] = allChild[i].offsetHeight;
        } else {
            // 获取列高度的最小值
            var minHeightOfCols = Math.min.apply(null, colsHeightArr);
            // 获取最小值对应的下标
            var minHeightOfIndex = colsHeightArr.indexOf(minHeightOfCols);
            // 摆放第二张图片的位置
            allChild[i].style.position = 'absolute';
            allChild[i].style.top = minHeightOfCols + 'px';
            allChild[i].style.left = allChild[minHeightOfIndex].offsetLeft + 'px';

            // 高度的合并
            colsHeightArr[minHeightOfIndex] = colsHeightArr[minHeightOfIndex] + allChild[i].offsetHeight;

        }
    }
}
// 3.设置页面触底
function checkReachBottom() {
    // 获取滚动高度
    var scrollHeight = document.documentElement.scrollTop;
    // 获取视口高度
    var pageHeight = document.documentElement.clientHeight;
    // 获取最后一个元素距离文档顶部的高度
    var allChild = document.getElementsByClassName('box');
    var lastChildTop = allChild[allChild.length - 1].offsetTop;

    return lastChildTop < pageHeight + scrollHeight ? true : false;


}
