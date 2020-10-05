function sort(){
  for (i = 1; i < (document.getElementsByTagName('p').length - 1); i++){
    document.getElementsByTagName('p')[i].style.display = 'none';
  }
  if (document.getElementById('rarity').value){
    for (i = 0; i < document.getElementsByClassName(document.getElementById('rarity').value).length; i++){
    document.getElementsByClassName(document.getElementById('rarity').value)[i].style.display = 'block';
    }
  } else {
      document.getElementsByTagName('p').sort;
      for (i = 1; i < (document.getElementsByTagName('p').length - 1); i++){
        document.getElementsByTagName('p')[i].style.display = 'block';
      }
  }
}
