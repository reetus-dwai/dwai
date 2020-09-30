function flip(){
	if (document.getElementById('menu').style.display == 'none'){
		document.getElementById('menu').style.display = 'block';
		document.getElementById('menuBTN').innerHTML = '∧';
	} else {
		document.getElementById('menu').style.display = 'none';
		document.getElementById('menuBTN').innerHTML = '∨';
	}
}
