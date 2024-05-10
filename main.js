// Functionize Minecraft Fishing Start Code

// HTML Variables
var fishBtn = document.getElementById("fish-btn");
var fishImg = document.getElementById("result-img");
var codCounter = document.getElementById("num-cod");
var salmonCounter = document.getElementById("num-salmon");
var tropicalCounter = document.getElementById("num-tropical");
var pufferCounter = document.getElementById("num-puffer");

// Fish Count Variables
var codNum = 0;
var salmonNum = 0;
var tropNum = 0;
var puffNum = 0;

// Fish Button Event Listener
fishBtn.addEventListener("click", fishBtnClicked);

function fishBtnClicked() {
  // Determine Selected Character
  var character = document.getElementById("character-select").value;

  if (character === "steve") {
    // Steve Fish Simulator
    var randNum = Math.random();
    console.log(randNum);

    if (randNum < 0.7) {
      fishImg.src = `img/Raw-Cod.png`;
      codNum++;
      codCounter.innerHTML = codNum;
    } else if (randNum < 0.9) {
      fishImg.src = `img/Raw-Salmon.png`;
      salmonNum++;
      salmonCounter.innerHTML = salmonNum;
    } else if (randNum < 0.95) {
      fishImg.src = `img/Tropical-Fish.png`;
      tropNum++;
      tropicalCounter.innerHTML = tropNum;
    } else {
      fishImg.src = `img/Pufferfish.png`;
      puffNum++;
      pufferCounter.innerHTML = puffNum;
    }
  } else if (character === "alex") {
    // Alex Fish Simulator
    var randNum = Math.random();
    console.log(randNum);

    if (randNum < 0.1) {
      fishImg.src = `img/Raw-Cod.png`;
      codNum++;
      codCounter.innerHTML = codNum;
    } else if (randNum < 0.2) {
      fishImg.src = `img/Raw-Salmon.png`;
      salmonNum++;
      salmonCounter.innerHTML = salmonNum;
    } else if (randNum < 0.5) {
      fishImg.src = `img/Tropical-Fish.png`;
      tropNum++;
      tropicalCounter.innerHTML = tropNum;
    } else {
      fishImg.src = `img/Pufferfish.png`;
      puffNum++;
      pufferCounter.innerHTML = puffNum;
    }
  } else {
    var randNum = Math.random();
    console.log(randNum);

    if (randNum < 0.25) {
      fishImg.src = `img/Raw-Cod.png`;
      codNum++;
      codCounter.innerHTML = codNum;
    } else if (randNum < 0.5) {
      fishImg.src = `img/Raw-Salmon.png`;
      salmonNum++;
      salmonCounter.innerHTML = salmonNum;
    } else if (randNum < 0.75) {
      fishImg.src = `img/Tropical-Fish.png`;
      tropNum++;
      tropicalCounter.innerHTML = tropNum;
    } else {
      fishImg.src = `img/Pufferfish.png`;
      puffNum++;
      pufferCounter.innerHTML = puffNum;
    }
  }
}
