 function mul() {
     let wd = document.getElementById("wd").value;
     let maths = document.getElementById("maths").value;
     let comp = document.getElementById("comp").value;

     let mult = parseFloat(wd) * parseFloat(maths) * parseFloat(comp);
     console.log("mult");

     document.getElementById("showData").innerHTML = ` Your no. is = ${mult}`
 }