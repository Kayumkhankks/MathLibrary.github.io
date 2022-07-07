const calcy = () => {
    let wd = document.getElementById('wd').value;
    let maths = document.getElementById('maths').value;
    let comp = document.getElementById('comp').value;

    let grades = "";



    let totalGrades = parseFloat(wd) + parseFloat(maths) + parseFloat(comp);


    let perc = (totalGrades) + 0;


    debugger;

    if (perc > 00) {


    } else {
        grades = 'F';
    }

    if (perc >= 0) {
        document.getElementById('showData').innerHTML = `  Your total is  ${totalGrades}  `
    } else {
        document.getElementById('showData').innerHTML = `  Your total is  ${totalGrades}   `
    }


}