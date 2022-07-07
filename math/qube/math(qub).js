const qub = () => {
    let wd = document.getElementById("wd").value;

    let qube = Math.cbrt(wd);

    document.getElementById("showData").innerHTML = ` YOUR ANSWER  IS = ${qube}`

}