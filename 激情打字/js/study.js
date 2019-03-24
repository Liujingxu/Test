time = 0;
i = -1 ;
m = 0;
function getDate(m){
	let second = 0;
	let minute = 0;
	let hour = 0;
	if (m < 60) {
		second = m;
	}else if (m >= 60 && m < 3600) {
		minute = Math.floor(m / 60);
		second = m % 60
	}else {
		hour = Math.floor(m / 3600);
		minute = Math.floor((m - hour*3600) / 60);
		second = m % 60;
	}
	str = hour + ':'+ minute + ':'+ second ;

	dateobj = document.getElementById('date');
	dateobj.innerHTML = str;

	i++;
}
function begin(){
	m = prompt("请输入预估时间(s)：");
	getDate(m);
	let id = setInterval(function(){
		getDate(--m);
		if (m == 0) {
			clearInterval(id);
		}
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


