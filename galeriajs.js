window.onload = function () {
    let nodeLlista = document.getElementById("llistaImatges");
    let nodeCaption = document.getElementById("caption");
    let nodeImatge = document.getElementById("imatge");
    let llistaEnllaços = nodeLlista.getElementsByTagName("a");
    for (let enllaçActual of llistaEnllaços) {
      enllaçActual.onclick = function (evt) {
        evt.preventDefault();
        nodeCaption.innerHTML = this.title;
        nodeImatge.src = this.href;
      };
      let imatge = new Image();
      imatge.src = enllaçActual.href;
    }
  };