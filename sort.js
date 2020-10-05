function sort(){
  document.getElementsByTagName('p')[1].style.display = 'none';
  if (document.getElementById('rarity').value){
    for (i = 0; i < document.getElementsByClassName(document.getElementById('rarity').value).length; i++){
    document.getElementsByClassName(document.getElementById('rarity').value)[i].style.display = 'block';
    }
  } else {
    document.getElementsByTagName('p')[1].style.display = 'block';
  }
}
