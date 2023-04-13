var botonesDetalles = document.getElementsByClassName("btn-detalles");
for (var i = 0; i < botonesDetalles.length; i++) {
  botonesDetalles[i].onclick = function() {
    var detalle = this.parentNode.querySelector(".detalle");
    detalle.style.display = detalle.style.display === "none" ? "block" : "none";
  };
}