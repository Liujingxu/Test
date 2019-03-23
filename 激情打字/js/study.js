time = 0;
i = -1 ;
m = 0;
function getDate(){
	oj = new Date();
	hour = oj.getHours();
	minute = oj.getMinutes();
	second = oj.getSeconds();
	str = hour + ':'+ minute + ':'+ second ;
	
	dateobj = document.getElementById('date');
	dateobj.innerHTML = str;
	
	i++;
}
function begin(){
	m = prompt("请输入预估时间(s)：");
	getDate();
	setInterval(function(){
		getDate();
	},1000)
}

function achieve(){
	
	time = i ;
	if(time<m){
		alert("共用时" + time + "s" +" "+ "恭喜成功！！");
	}else{
		alert("共用时" + time + "s" +" "+ "很遗憾，失败了！！");
	}
}

