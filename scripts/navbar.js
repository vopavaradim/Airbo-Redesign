function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      
      x.style.display = "block";
    }
  }

function goHP() {
  window.location = "index.html";
}

function goGuide() {
  window.location = "navody.html";
}

function goLogin() {
  window.location = "https://app.airbo.cz/prihlasit";
}

function goRegister() {
  window.location= "https://app.airbo.cz/registrace";
}