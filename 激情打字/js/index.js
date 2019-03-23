function getDate(){
		oj = new Date();
		year = oj.getFullYear();
		month = oj.getMonth()+1;
		day = oj.getDate();
		hour = oj.getHours();
		minute = oj.getMinutes();
		second = oj.getSeconds();
		str = year + '-' + month + '-' + day + '-' + hour + ':' + minute + ':' + second ;
		alert(str);
}