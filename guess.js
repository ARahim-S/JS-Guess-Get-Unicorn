"ıse strict";
const inputField = document.querySelector(".password");
const cornifyAdd = document.querySelector(".cornifyAdd");
const secretCode = "password_145";
const valueInput = function (e) {
  const valueGuess = e.target.value;
  console.log(valueGuess);
  if (valueGuess === secretCode) {
    cornify_add();
  }
};

inputField.addEventListener("input", valueInput);
