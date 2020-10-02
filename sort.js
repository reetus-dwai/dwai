function sort(){
  if (document.getElementById('rarity').value){
    document.getElementByClassName(document.getElementById('rarity').value.toString()).style.display = 'block';
  } else {
    document.getElementById('items').innerHTML = 'You did not choose anything to sort';
  }
}
