function sort(){
  if (document.getElementById('rarity').value){
    document.getElementById('items').innerHTML = document.getElementById('rarity').value;
  } else {
    document.getElementById('items').innerHTML = 'bruh';
  }
}
