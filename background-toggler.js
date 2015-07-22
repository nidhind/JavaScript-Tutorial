
var flag = 1

function controller() {
	if (flag == 1) {
		flag=0;
		changeBkgnd();
	}
}

function changeBkgnd() {

	var myDiv = document.getElementById("myDiv");
	myDiv.style.backgroundColor = "purple";
	setTimeout(resetBkgnd, 100);

}

function resetBkgnd() {

	var myDiv = document.getElementById("myDiv");
	myDiv.style.backgroundColor = "yellow";
	setTimeout(changeBkgnd, 100);
}
