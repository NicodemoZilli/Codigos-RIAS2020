function abrirmsj(tit,msj){
  var titulo=tit;
  var mensaje=msj;
  Swal.fire({
    title: titulo,
    text: mensaje,
    confirmButtonText: "Ok",
    confirmButtonColor: "#fe982e",
  });
}
