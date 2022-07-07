const squ = () => {
    let wd = document.getElementById("wd").value;

    let sque = Math.pow(wd, 2);

    document.getElementById("showData").innerHTML = `YOUR ANSWER IS = ${sque}`

}