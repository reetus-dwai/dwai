function sort(){
  if (document.getElementById('rarity').value){
    document.getElementByClass(document.getElementById('rarity').value).style.display = 'block';
  } else {
    document.getElementById('items').innerHTML = 'You did not choose anything to sort';
  }
}
