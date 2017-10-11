var Roll = [$('#roll1'),$('#roll2'),$('#roll3')];
var Game_start = $('#start_game');
var GIFE_NUM;//奖品编号，3为未获奖
var List_roll = [-436,-210,-323]//蓝，绿，剃须刀
var num;//转轮最终位置
Game_start.on('touchstart',Game_touch);
function Game_touch(){
	Game_start.off('touchstart',Game_touch);
	// reset();
	// $.ajax({//ajax后台链接
	// 	url: 'config.php',
	// 	type: 'POST',
	// 	dataType: 'json',
	// 	data: {},
	// 	success: function(msges) {
	// 		GIFE_NUM = msges;
	// 		if(GIFE_NUM != 3){
	// 			num = [GIFE_NUM,GIFE_NUM,GIFE_NUM];//转轮最终位置
	// 		}
	// 		else{
	// 			num = [Rdm(0,2),Rdm(0,2),Rdm(0,2)];
	// 			for(;num[0] == num[1] && num[1] == num[2];){
	// 				num = [Rdm(0,2),Rdm(0,2),Rdm(0,2)];
	// 			}
	// 		}
	// 		Round(0,10,List_roll[num[0]]);
	// 		Round(1,10,List_roll[num[1]]);
	// 		Round(2,10,List_roll[num[2]]);
	// 	},
	// 	error:function(msges){
	// 		GIFE_NUM = 3;
	// 		num = [Rdm(0,2),Rdm(0,2),Rdm(0,2)];
	// 		for(;num[0] == num[1] && num[1] == num[2];){
	// 			num = [Rdm(0,2),Rdm(0,2),Rdm(0,2)];
	// 		}
	// 		console.log(num)
	// 		Round(0,10,List_roll[num[0]]);//一号轮
	// 		Round(1,10,List_roll[num[1]]);//二号
	// 		Round(2,10,List_roll[num[2]]);//三
	// 	}
	// })
	Round(0,10,List_roll[2]);//一号轮
	Round(1,10,List_roll[2]);//二号
	Round(2,10,List_roll[2]);//三	
}
function Round(number,time,end){//转轮动画

	if(time != 0){
		Roll[number].animate({"top":-436},number*100+1000/time,"linear",function(){
			$(this).css({"top":-98});
			Round(number,time - 1,end);
		});
	}
	else{
		Roll[number].animate({"top":end},number*100+2000,"linear",function(){
			if(number == Roll.length - 1){
				console.log(end)
				Game_start.on('touchstart',Game_touch);
			}
		});
	}
}
function reset(){//重置
	Roll[0].css({"top":-98});
	Roll[1].css({"top":-98});
	Roll[2].css({"top":-98});
}
// -98,-210,-323    436