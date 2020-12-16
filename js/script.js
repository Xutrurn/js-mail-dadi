// alert("Hello world");

var resultViz = document.getElementById("roll");
resultViz.addEventListener("click", function() {

  var player = Math.floor((Math.random() * 6) + 1);
  console.log(player);
  var ai = Math.floor((Math.random() * 6) + 1);
  console.log(ai);

  if (player > ai) {
    console.log("You win");
    resultViz = "You win";
  } else if (player < ai) {
    console.log("You lose");
    resultViz = "You lose";

  } else {
    console.log("You and Ai draw");
    resultViz = "You and Ai draw";

  }

  document.getElementById("result").innerHTML = resultViz;







  // console.log();
});
