function sort(){
  if (document.getElementById('rarity').value){
    document.getElementByClassName('Contraband').style.display = 'block';
  } else {
    document.getElementById('items').innerHTML = 'You did not choose anything to sort';
  }
}
