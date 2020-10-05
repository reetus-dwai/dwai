function sort(){
  if (document.getElementById('rarity').value){
    for (i=0; i<document.getElementsByClassName(document.getElementById('rarity').value).length; i++){
    document.getElementsByClassName(document.getElementById('rarity').value)[i].style.display = 'block';
    }
  }
}
