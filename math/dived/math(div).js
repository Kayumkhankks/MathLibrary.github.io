 function dive() {
     let wd = document.getElementById("wd").value;
     let maths = document.getElementById("maths").value;


     let dived = parseFloat(wd) / parseFloat(maths);


     document.getElementById("showData").innerHTML = `Your answer is = ${ dived}`


 }