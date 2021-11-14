function double (num)
{
  return x * 2;
}

function triple (num) {
  return x * 3;
}

var x = 2;
double (x);


document.querySelector("#double").textContent += `3 * 3 = ${triple(3)}`;