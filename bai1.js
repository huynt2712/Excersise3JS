function calSubstract() {
  const number1 = document.getElementById("number1").value;
  const number2 = document.getElementById("number2").value;
  const result = document.getElementById("result");
  result.innerHTML = parseInt(number1) - parseInt(number2);
}
