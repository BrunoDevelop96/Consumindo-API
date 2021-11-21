
function fetchApiData(){
fetch('http://127.0.0.1:8000/api/getDados')
  .then(response => response.json())
  .then(data => {
    var dados =""
    for (var [key, value] of Object.entries(data)) {
        dados += key+": "+value+"<br>";
    }
    document.getElementById('dados').innerHTML=dados 
  })

}
