function newElement() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("myInput").value;
    let aggy = document.createTextNode(inputValue);
   li.appendChild(aggy);
    {
      document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";}

