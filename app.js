const ratingState = document.getElementById("Rating-State");
const thanksState = document.getElementById("Thanks-state");

const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const num3 = document.getElementById("num3");
const num4 = document.getElementById("num4");
const num5 = document.getElementById("num5");
const rating = document.getElementById("rating");

const submitButton = document.getElementById("submitButton");
const backBtn = document.getElementById("backBtn");

num1.onclick = function () {
  rating.textContent = `${1}`;
}

num2.onclick = function () {
  rating.textContent = `${2}`;
}

num3.onclick = function () {
  rating.textContent = `${3}`;
}

num4.onclick = function () {
  rating.textContent = `${4}`;
}

num5.onclick = function () {
  rating.textContent = `${5}`;
}

submitButton.addEventListener("click", submitScore);

//function=>
     /// preventDefault() => by useing this default it make the section to stay still withot showing for a secound then disaper.
  function submitScore(e) {
     e.preventDefault();
    ratingState.style.display = "none";
    thanksState.style.display = "block";
  }

  backBtn.addEventListener("click", backButon);

  function backButon(){
    thanksState.style.display = "none";
    ratingState.style.display = "block";
  }