  function root() {

      let wd = document.getElementById('wd').value;

      let rootof = Math.sqrt(wd);
      console.log(rootof);

      document.getElementById("showData").innerHTML = ` Your answer is ${rootof}`




  }