
function getWorldE(){
	var world = prompt("请输入文本");

		world = world.replace(/\s/g," ");
		n = world.length/120;

		x = 0;
		y = 0;
		for (j = 0 ; j < n ; j++) {
			y=x+120;
			cTable(world,x,y);
			x=y;
		}
}
function getWorldC(){
	var world = prompt("请输入文本");
	world = world.replace(/\s*/g," ");
		n = world.length/80;
		x = 0;
		y = 0;
		for (j = 0 ; j < n ; j++) {
			y=x+80;
			cTable(world,x,y);
			x=y;
		}
}

function cTable(world,x,y){

	var table = document.getElementById("table");
	var tr1 = document.createElement("tr");
	table.appendChild(tr1);
	var td1 = document.createElement("td");
	td1.className="td_en";
	td1.innerHTML=world.substring(x,y);
 	tr1.appendChild(td1);

 	var tr2 = document.createElement("tr");
	table.appendChild(tr2);
	var td2 = document.createElement("td");
	var put = document.createElement("input");
	put.type = "text";
	put.className = "text";
 	tr2.appendChild(td2);
 	td2.appendChild(put);

 	start();

}


function start() {
    let inputs = document.getElementsByClassName('text');
    let text = document.getElementsByClassName('td_en');
    for (let i = 0; i < text.length; i++) {
        inputs[i].onchange = function () {
            let answer = text[i].innerHTML.trim();
            let myAnswer = this.value.trim();
            if (answer == myAnswer) {
                this.style = "background: lightgreen";
            }else {
                this.style = "background: red";
            }
        }
    }
}
