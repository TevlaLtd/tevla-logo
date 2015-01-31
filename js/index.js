(function(){ 
	var _logo;
	var _interval;
	var _index=0;
	var _cells;
	var _nbCells;
	var _comingsoon;


	var data = {};
	//T
		data["00"] = 1;
		data["10"] = 1;
		data["20"] = 1;
		data["30"] = 1;
		data["40"] = 1;
		data["21"] = 1;
		data["22"] = 1;
		data["23"] = 1;
		data["24"] = 1;
	//E
		data["60"] = 1;
		data["61"] = 1;
		data["62"] = 1;
		data["63"] = 1;
		data["64"] = 1;
		data["70"] = 1;
		data["80"] = 1;
		data["90"] = 1;
		// data["100"] = 1;
		data["72"] = 1;
		data["82"] = 1;
		data["92"] = 1;
		// data["102"] = 1;
		data["74"] = 1;
		data["84"] = 1;
		data["94"] = 1;
		// data["104"] = 1;
	//V
		data["110"] = 1;
		data["111"] = 1;
		data["112"] = 1;
		data["123"] = 1;
		data["134"] = 1;
		data["143"] = 1;
		data["152"] = 1;
		data["151"] = 1;
		data["150"] = 1;

	//L
		data["170"] = 1;		
		data["171"] = 1;		
		data["172"] = 1;		
		data["173"] = 1;		
		data["174"] = 1;		
		data["184"] = 1;		
		data["194"] = 1;		
		data["204"] = 1;		
		// data["224"] = 1;		

	//A
		data["221"] = 1;
		data["222"] = 1;
		data["223"] = 1;
		data["224"] = 1;
		data["230"] = 1;
		data["240"] = 1;
		data["250"] = 1;
		data["261"] = 1;
		data["262"] = 1;
		data["263"] = 1;
		data["264"] = 1;
		data["232"] = 1;		
		data["242"] = 1;		
		data["252"] = 1;

	init();
	_interval = setInterval(animateArray,50);


	function init(){

		_comingsoon = document.getElementById("comingsoon");


		_logo = document.getElementById("logo");

		var table = document.createElement("table");
		table.id="pixels";

		//calculate how big each cells should be
		var stageWidth = window.innerWidth;
		var stageHeight = window.innerHeight;

		_comingsoon.style.top = (stageHeight-30) / 2 + 150;

		var nbX = 27;
		var nbY = 5;

		var paddingCell = Math.round(((stageWidth-47)/nbX)/2);

		var i=0;
		var j=0;
		var ji="";
		var td, tr;

		for (i=0; i<nbY; i++){
			tr = document.createElement("tr");
			for (j=0; j<nbX; j++){
				td = document.createElement("td");
				td.id="cell";
				td.style.padding = paddingCell + "px";
				ji = String(j)+String(i);
				if (data[ji])
					td.className="active";
				else td.className="logopixel";

				tr.appendChild(td);
			}
			table.appendChild(tr);
		}

		_logo.appendChild(table);

		_cells = document.getElementsByClassName("active");
		_nbCells = _cells.length;

		//position the _logo in the middle of the screen
		//console.log(stageHeight)
		//console.log(paddingCell)
		//console.log(nbY*paddingCell + nbY)
		_logo.style.paddingTop = Math.round((stageHeight-(nbY*paddingCell*2 + nbY))/2) + "px";
	}

	function animateArray(){
		try {
			_cells[Number(_index-1)].style.backgroundColor = '#000';
		} catch (e){
		}

		_index++;

		if (_index>_nbCells){
			clearInterval(_interval);
			_index = 0;
			_interval = setInterval(moveLogo,1);
		}
	}

	function moveLogo(){
		var padtop = Number(String(_logo.style.paddingTop).replace(/[^-\d\.]/g, '')) - 1;
		_logo.style.paddingTop = padtop + "px";

		_index++;

		if (_index>120){
			clearInterval(_interval);
			_index = 0;
			_interval = setInterval(showComingSoon,1);
		}
	}

	function showComingSoon(){
		_index += 0.01;
		_comingsoon.style.opacity=_index;

		if (_comingsoon.style.opacity>1){
			clearInterval(_interval);
		}

		
	}

}()); 


