  window.onload = function() {

    var is_reload = sessionStorage.getItem("reload");

    if (is_reload == 'true'){
      var dice1 = Math.floor(Math.random()*6) + 1;
      var randomDiceImageSource = "images/dice" + dice1 + ".png";
      var image1 = document.querySelectorAll("img")[0];
      image1.setAttribute("src", randomDiceImageSource);

      var dice2 = Math.floor(Math.random()*6) + 1;
      var randomDiceImageSource = "images/dice" + dice2 + ".png";
      var image2 = document.querySelectorAll("img")[1];
      image2.setAttribute("src", randomDiceImageSource);

      if (dice1 > dice2) {
        document.querySelector("h1").innerHTML = "🎌 Player 1 wins!";
      }
      else if (dice1 < dice2) {
        document.querySelector("h1").innerHTML = "Player 2 wins! 🎌";
      }
      else {
        document.querySelector("h1").innerHTML = "They're both losers!";
      }
    } else {
        is_reload = 'true';
        sessionStorage.setItem("reload", is_reload);
    }
  }
