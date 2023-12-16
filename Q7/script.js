var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var pets = JSON.parse(this.responseText);
    var table = document.getElementById('petsTable');
    for (var i = 0; i < pets.length; i++) {
      var row = table.insertRow(-1);
      row.insertCell(0).innerHTML =  (i+1)+'.';
      row.insertCell(1).innerHTML = pets[i].name;
      row.insertCell(2).innerHTML = pets[i].age;
      row.insertCell(3).innerHTML = pets[i].weight;
      row.insertCell(4).innerHTML = pets[i].type;
      row.insertCell(5).innerHTML = pets[i].likes;
    }
  }
};
xmlhttp.open("GET", "pets.json", true);
xmlhttp.send();
