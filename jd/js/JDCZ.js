

var arrImage=[];

var lunboNode=document.getElementsByClassName('lunbo_image');
var imageNode=lunboNode[0].getElementsByTagName('li');
var lunboLinkNode=document.getElementsByClassName('lunbo_num');
var linkNode=lunboLinkNode[0].getElementsByTagName('li');
var curIndex=0;//默认的下标索引值
var timer;
lunbo();

function lunbo () {
	timer=setInterval(function(){
		if(curIndex>=linkNode.length){
			curIndex=0;
		}
		changeTo(curIndex);
		curIndex++;
	},2500)
}
//移动到下个图片
function changeNext(){
	curIndex++;
	if(curIndex>=imageNode.length){
		curIndex=0;
	}
	changeTo(curIndex);
}
//移动到上个图片
function changePrev(){
	curIndex--;
	if(curIndex<0){
		curIndex=5;
	}
	changeTo(curIndex);
}
//清除间隔时间
function clearLunbo(){
	clearInterval(timer);
}

function changeButton(obj){
	obj.style.width="40px";
	setTimeout(function(){
		obj.style.width="60px";
	},1500);
}
//变换图片
function changeTo(curIndex){
	changeLinkIndex(linkNode,curIndex,'current');
	var left=-curIndex*730;
	lunboNode[0].style.left=left+"px";
}
function changeLinkIndex(node,curIndex,clasName){
	for(var i=0;i<node.length;i++){
		removeClass(node[i],clasName);
	}
	addClass(node[curIndex],clasName);
}

//给某个元素的class添加一个className
function addClass(elem,className){
	if(!hasClass(elem,className)){
		elem.className+=' '+className;
	}
}
//给某个元素的class删除一个className
function removeClass(elem,cls){
	if(hasClass(elem,cls)){
		elem.className=elem.className.replace(cls,'');
	}
}
//判断元素是否存在className
function hasClass(elem,cls){
	var elemClassName=elem.className;
	if(elemClassName.indexOf(cls)>-1){
		return true;
	}
	else{
		return false;
	}
}







// function toggleFun(index){
// 	for(var i=0;i<=9;i++){
// 		if(i!=index){
// 			$(".tab"+i).css({
// 				"border":"1px solid red",
// 				"border-width":"3px 1px 0px 1px"
// 			});
// 		}
// 	}
// 	for(var j=0;j<=9;j++){
// 		if(j==index){
// 			$(".item"+j).css({
// 				"display":"none"
// 			});
// 		}
// 		else{
// 			$(".item"+j).css({
// 				"display":"none"
// 			});
// 		}
// 	}
// }

// $(document).ready(function(){
// 	for(var a=0;a<=9;a++){
// 		(function(){
// 			var k=a;
// 			$(".tab"+k).hover(function(){
// 				$(this).css({
// 					"border":"1px solid red",
// 					"border-width":"3px 1px 0px 1px"
// 				});
// 				toggleFun(k);
// 			});
// 		})();
// 	}
// });
// 
// 
// 
// 

//JQuery Tab切换
function loggleFun(index){
	for(var i=0;i<=9;i++){
		if(i!=index){
			$(".tab"+i).css({
				"border-top":"3px solid #fff",
				"border-left":"1px solid #fff",
				"border-right":"1px solid #fff",
				"border-width":"3px 1px 0px 1px"
			});
		}
}
	for(var i=0;i<=9;i++){
		if(i==index){
			$(".item"+i).css({
			"display":"block"
			});
		}else{
			$(".item"+i).css({
			"display":"none"
			});
		}
	}
}
	$(document).ready(function(){
		$(".tab0").hover(function(){
		$(this).css({
			"border":"1px solid red",
			"border-width":"3px 1px 0px 1px",
			"border-bottom":"1px solid #fff"
		});
			loggleFun(0);
	});
	

	$(".tab1").hover(function(){
		$(this).css({
			"border":"1px solid red",
			"border-width":"3px 1px 0px 1px"
		});
			loggleFun(1);
	});

	$(".tab2").hover(function(){
		$(this).css({
			"border":"1px solid red",
			"border-width":"3px 1px 0px 1px"
		});
			loggleFun(2);
	});

	$(".tab3").hover(function(){
		$(this).css({
			"border":"1px solid red",
			"border-width":"3px 1px 0px 1px"
		});
			loggleFun(3);
	});

	$(".tab4").hover(function(){
		$(this).css({
			"border":"1px solid red",
			"border-width":"3px 1px 0px 1px"
		});
			loggleFun(4);
	});

	$(".tab5").hover(function(){
		$(this).css({
			"border":"1px solid red",
			"border-width":"3px 1px 0px 1px"
		});
			loggleFun(5);
	});

	$(".tab6").hover(function(){
		$(this).css({
			"border":"1px solid red",
			"border-width":"3px 1px 0px 1px"
		});
			loggleFun(6);
	});

	$(".tab7").hover(function(){
		$(this).css({
			"border":"1px solid red",
			"border-width":"3px 1px 0px 1px"
		});
			loggleFun(7);
	});

	$(".tab8").hover(function(){
		$(this).css({
			"border":"1px solid red",
			"border-width":"3px 1px 0px 1px"
		});
			loggleFun(8);
	});
});



/////////////////////////////////////////////////////////////////////////////////////////////////////////

// 一楼轮播
 
//自动走动
//
var timer;
var temp=1;

function yuanDian(index){

	for(var j=1;j<=4;j++){
		if(j!=index){
			$(".dot"+j).css({
				"background":"blue"
			});
		}
	}

	for(var j=1;j<=4;j++){
		if(j==index){
			$(".img"+j).css({
				"display":"block"
			});
		}
		else{
			$(".img"+j).css({
					"display":"none"
			});
		}
	}
}



function diao(){
		timer=setInterval(function(){
		if(temp>4){
			temp=1;
		}
		for(var i=1;i<=4;i++){
			if(i==temp){
				$(".img"+i).css({
					"display":"block"
				});
				$(".dot"+i).css({
					"background":"red"
				});
			}

			else{
				$(".img"+i).css({
					"display":"none"
				});
				$(".dot"+i).css({
					"background":"blue"
				});
			}

		}
		temp++;
	},1500);

}
diao();

$(document).ready(function(){
	for(var a=1;a<=4;a++){
		(function(){
			var k=a;
			$(".dot"+k).hover(function(){
				clearInterval(timer);
				$(this).css({
					"background":"red",
				});
				yuanDian(k);
			},function(){
				diao();
			  });
		})();                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
	}
});
                              