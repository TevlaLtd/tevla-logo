(function(){ 
	initArray();
	animateArray();
}()); 

function initArray(){
	console.log("initArray");

	var logo = document.getElementById("logo");

	var table = document.createElement("table");

	var nbRows = 5;
	var nbCols = 5;

	for (var i=0; i<nbRows; i++){
		var tr = document.createElement("tr");
		for (var j=0; j<nbCols; j++){
			var td = document.createElement("td");
			td.className="logopixel";

			tr.appendChild(td);
		}
		table.appendChild(tr);
	}

	logo.appendChild(table);
}

function animateArray(){
	//var cells = document.getElementsByClassName("logopixel");

	
}