$(document).ready(function() {
    $("#toggle").click(function() {
      var elem = $("#toggle").text();
      if (elem == "Leggi di più") {
        //Stuff to do when btn is in the read more state
        $("#toggle").text("Chiudi");
        $("#text").slideDown();
      } else {
        //Stuff to do when btn is in the read less state
        $("#toggle").text("Leggi di più");
        $("#text").slideUp();
      }
    });
  });

  function serviziS() {
    var x = document.getElementById("serviziS");
    if (x.style.display === "none") {
      x.style.display = "block";
      document.getElementById("serviziSB").innerText = "-"
    } else {
      x.style.display = "none";
      document.getElementById("serviziSB").innerText = "+"
    }
  }

  function vietatoS() {
    var x = document.getElementById("vietatoS");
    if (x.style.display === "none") {
      x.style.display = "block";
      document.getElementById("vietatoSB").innerText = "-"
    } else {
      x.style.display = "none";
      document.getElementById("vietatoSB").innerText = "+"
    }
  }

  function noleggioS() {
    var x = document.getElementById("noleggioS");
    if (x.style.display === "none") {
      x.style.display = "block";
      document.getElementById("noleggioSB").innerText = "-"
    } else {
      x.style.display = "none";
      document.getElementById("noleggioSB").innerText = "+"
    }
  }
  function stellaS() {
    var x = document.getElementById("stellaS");
    if (x.style.display === "none") {
      x.style.display = "block";
      document.getElementById("stellaSB").innerText = "-"
    } else {
      x.style.display = "none";
      document.getElementById("stellaSB").innerText = "+"
    }
  }

  function stazioniS() {
    var x = document.getElementById("stazioniS");
    if (x.style.display === "none") {
      x.style.display = "block";
      document.getElementById("stazioniSB").innerText = "-"
    } else {
      x.style.display = "none";
      document.getElementById("stazioniSB").innerText = "+"
    }
  }

  function pianetiS() {
    var x = document.getElementById("pianetiS");
    if (x.style.display === "none") {
      x.style.display = "block";
      document.getElementById("pianetiSB").innerText = "-"
    } else {
      x.style.display = "none";
      document.getElementById("pianetiSB").innerText = "+"
    }
  }