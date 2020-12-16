var nums = ["1", "2", "3", "4", "5", "6", "7", 
			 "8", "9", "0"]

function buildPin(){

 	var num = 	
	Math.floor(Math.random()*nums.length);
	var num2 = 
	Math.floor(Math.random()*nums.length);
	var num3 = 
	Math.floor(Math.random()*nums.length);
	var num4 = 
	Math.floor(Math.random()*nums.length);
	document.getElementById("pin").value= "Use this Pin: " + num  + 	 num2 + num3 + num4
}


////////
document.getElementById('screen-input').value = '';
function buttonClick (num){
    let screen = document.getElementById('screen-input');
    screen.value += num;
    if(num ==''){
        screen.value = num;
    }
}
function backSpace (){
var screen = document.getElementById('screen-input').value;
var backSpsace = screen.slice(0, screen.length -1);
document.getElementById('screen-input').value = backSpsace;
}
function equalTo(){
    let screen = document.getElementById('screen-input');
    screen = eval(screen.value);
}
