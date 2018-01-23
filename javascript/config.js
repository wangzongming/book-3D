//用户自定义的配置
window.Wxx = wxx = w = {
	images:[{//图片配置 每个图片就是一页
		src:'http://books.mingbianji.com/showbox/iPhone6&AppleWatch/files/mobile/1.jpg'
	},{
		src:'http://books.mingbianji.com/showbox/iPhone6&AppleWatch/files/mobile/2.jpg'
	},{
		src:'http://books.mingbianji.com/showbox/iPhone6&AppleWatch/files/mobile/3.jpg'
	},{
		src:'http://books.mingbianji.com/showbox/iPhone6&AppleWatch/files/mobile/4.jpg'
	},{
		src:'http://books.mingbianji.com/showbox/iPhone6&AppleWatch/files/mobile/5.jpg'
	},{
		src:'http://books.mingbianji.com/showbox/iPhone6&AppleWatch/files/mobile/6.jpg'
	}], 
	soundBaseURL:'./style/raw/mp3.mp3',//翻书声音路径
	pageEnd:function(flag){//翻书到第一页或者最后一页 
		if(flag === 'first'){
			console.log('翻到了第一页');
		}else{
			console.log('翻到了最后');
		}
	},
	touchPage:function(curPageIndex){//翻页时回调函数 
		console.log(`当前页数【${curPageIndex}】`)
	}
}

setTimeout(function(){
	window.Wxx.gotoPage(3, function(){
		console.log('跳转完成');
		console.log(wxx.pageIndex)
		// window.Wxx.lastPage();
	}) 
}, 2000)
