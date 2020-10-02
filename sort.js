function sort(){
  if (document.getElementById('rarity').value){
    document.getElementById('items').innerHTML = document.getElementById('rarity').value;
  } 
  if (document.getElementById('weapons-primary').value){
    document.getElementById('items').innerHTML = document.getElementById('weapons-primary').value;
  }
  if (document.getElementById('weapons-secondary').value){
    document.getElementById('items').innerHTML = document.getElementById('weapons-secondary').value;
  }
  if (document.getElementById('cosmetics').value){
    document.getElementById('items').innerHTML = document.getElementById('cosmetics').value;
  }
}
