/**
 * 轮询图片控件设置
 */

$('#slider').nivoSlider({
    animSpeed: 100,          //图片过渡时间   
    pauseTime: 2000,         //图片显示时间
    pauseOnHover: false,
    manualAdvance: false,
});

$('#slider').nivoSlider({  
    effect: 'random',               // 过渡效果  
    slices: 15,                     // 切片效果时的数量  
    boxCols: 8,                     // 格子效果时的列数  
    boxRows: 4,                     // 格式效果时的行数  
    animSpeed: 1000,                // 图片过渡时间  
    pauseTime: 5000,                // 图片显示时间  
    startSlide: 0,                  // 从第几张图片开始（第一张为）  
    directionNav: true,             // 是否显示图片方向切换按钮（上一页/下一页）  
    controlNav: true,               // 是否显示图片导航控制按钮（,2,3... ）  
    controlNavThumbs: false,        // 是否使用图片的缩略图做为导航控制按钮  
    pauseOnHover: true,             // 鼠标县浮时是否停止动画  
    manualAdvance: false,           // 是否手动切换  
    prevText: 'Prev',               // 上一页方向切换按钮的显示文本  
    nextText: 'Next',               // 下一页方向切换按钮的显示文本  
    randomStart: false,             // 开始图片是否随机  
    beforeChange: function(){},     // 图片切换前触发函数  
    afterChange: function(){},      // 图片切换后触发函数  
    slideshowEnd: function(){},     // 在所有图片显示完毕后触发函数  
    lastSlide: function(){},        // 在最后一张图片显示完毕后触发函数  
    afterLoad: function(){}         // 图片加载完毕后触发函数  
}); 
