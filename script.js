function flip(){
	if (document.getElementById('menu').style.display == 'none'){
		document.getElementById('menu').style.display = 'block';
		document.getElementById('menuBTN').innerHTML = '∧';
	} else {
		document.getElementById('menu').style.display = 'none';
		document.getElementById('menuBTN').innerHTML = '∨';
	}
}

function market(){
	document.getElementById('iframe').src = 'https://krunker.io/social.html?p=market';
}

function merch(){
	document.getElementById('iframe').src = '';
}

function terms(){
	document.getElementById('iframe').src = '';
}
