function newElement() {
    const li = document.createElement("li");
    const inputValue = document.getElementById("myInput").value;
    const text = document.createTextNode(inputValue);
   li.appendChild(aggy);
    {
      document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";
  }

