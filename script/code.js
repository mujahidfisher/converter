document.querySelector("#converter").addEventListener("click", function () {
  // let temp1 = document.querySelector("#temp1")
  // let temp2 = document.querySelector("#temp2")
  // let temp3 = document.querySelector("#temp3")
  let output = document.querySelector("#output");
  let cel = document.querySelector("input[name='unit1']");
  let fahr2 = document.querySelector("input[name='unit2']");
  let fahr = document.querySelector("input[name='unit3']");
  let cel2 = document.querySelector("input[name='unit4']");
  let kel = document.querySelector("input[name='unit5']");
  let kel2 = document.querySelector("input[name='unit6']");
  let numb = document.querySelector("#number");
  // cel to fahr
  if (cel.checked && fahr2.checked) {
    let method = numb.value * (9 / 5) + 32;
    output.innerHTML += method.toFixed(2);
    // fahr to cel
  } else if (fahr.checked && cel2.checked) {
    let method = ((numb.value - 32.0) * 5.0) / 9.0;
    output.innerHTML += method.toFixed(2);
    // cel to kel
  } else if (cel.checked && kel.checked) {
    let method = eval(numb.value) + 273.15;
    output.innerHTML += method.toFixed(2);
    // fahr to kel
  } else if (fahr.checked && kel.checked) {
    let method = ((numb.value - 32) * 5) / 9 + 273.15;
    output.innerHTML += method.toFixed(2);
    // kel to cel
  } else if (kel2.checked && cel2.checked) {
    let method = numb.value - 273.15;
    output.innerHTML += method.toFixed(2);
    console.log(output);
    //kel to fahr
  } else if (kel2.checked && fahr2.checked) {
    let method = (numb.value - 273.15) * 1.8 + 32;
    output.innerHTML += method.toFixed(2);
  }
});
