

function validate(){
  var  validationField = document.getElementById('valida-txt');
  var  password= document.getElementById('pass2');

  var content = password.value;
  var  errors = [];
  if (content.length < 8) {
    errors.push("Debe ser al menos de 8 caracteres.");
  }
  if (content.search(/[a-z]/i) < 0) {
    errors.push("Debe contener al menos una letra.");
  }
  if (content.search(/[0-9]/i) < 0) {
    errors.push("Debe contener al menos un d&iacute;gito");
  }
  validationField.innerHTML = errors.join('');

  if (errors.length > 0) {
    password.style.borderColor="red";
  }else {
    password.style.borderColor="#BBBBBB";
  }
}

function validateEqualPass(){
  var  password= document.getElementById('pass2');
  var  password2= document.getElementById('pass3');

  var  validationField = document.getElementById('valida-txt');

  var content = password.value;
  var content2 = password2.value;


  if(content != content2){
    password.style.borderColor="red";
    password2.style.borderColor="red";
    validationField.innerHTML="Las contraseñas no son iguales";
  }else{
    password.style.borderColor="#BBBBBB";
    password2.style.borderColor="#BBBBBB";
    validationField.innerHTML="";
    btnSUBR.disabled = false;
  }
}

var N=false,U=false,C=false,T=false,E=false,S=false;

function VerificaNom(){
  var inputNom = document.getElementById('Inom');
  var  vft = document.getElementById('valid-txt');

  if(inputNom.value == ""){
      vft.innerHTML="El nombre no puede estar vacío";
      N=false;
      inputNom.style.borderColor="red";
  }else if(inputNom.value.length < 10){
      vft.innerHTML="Nombre demasiado corto";
      N=false;
      inputNom.style.borderColor="red";
  }else if(inputNom.value.length > 40){
      vft.innerHTML="Nombre demasiado largo";
      N=false;
      inputNom.style.borderColor="red";
  }else{
      vft.innerHTML="";
      N=true;
      inputNom.style.borderColor="#BBBBBB";
  }
}

function VerificaUsu(){
  var input = document.getElementById('Iusu');
  var  vft = document.getElementById('valid-txt');

  if(input.value == ""){
      vft.innerHTML="El usuario no puede estar vacío";
      U=false;
      input.style.borderColor="red";
  }else if(input.value.length < 5){
      vft.innerHTML="Usuario demasiado corto";
      U=false;
      input.style.borderColor="red";
  }else if(input.value.length > 15){
      vft.innerHTML="Usuario demasiado largo";
      U=false;
      input.style.borderColor="red";
  }else{
      vft.innerHTML="";
      U=true;
      input.style.borderColor="#BBBBBB";
  }
}

function VerificaEm(){
  var input = document.getElementById('Iem');
  var  vft = document.getElementById('valid-txt');
  emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  if (emailRegex.test(input.value)){
   vft.innerHTML="";
   C=true;
   input.style.borderColor="#BBBBBB";
  } else {
   vft.innerHTML="La dirección de email es incorrecta.";
   C=false;
   input.style.borderColor="red";
  }
}

function VerificaTel () {
  var inputcel = document.getElementById('ntl');
  var  vft = document.getElementById('valid-txt');

  var ntl = inputcel.value;

  if(ntl.length<10 || ntl.length>10){
    vft.innerHTML="El número telefónico debe ser de 10 digitos";
    T=false;
    inputcel.style.borderColor="red";
  }else{
    vft.innerHTML="";
    T=true;
    inputcel.style.borderColor="#BBBBBB";
  }

}

function VerificaEd(){
  var input = document.getElementById('edad');
  var  vft = document.getElementById('valid-txt');

  if(input.value < 18 || input.value >90){
     vft.innerHTML="Edad incorrecta";
     E=false;
     input.style.borderColor="red";
  }else{
     vft.innerHTML="";
     E=true;
     input.style.borderColor="#BBBBBB";
  }
}

function VerificaSx(){
  var input1 = document.getElementById('sexo1');
  var input2 = document.getElementById('sexo2');


  if(input1.checked){
    S=true;
  }else if(input2.checked){
    S=true;
  }
}

function VerificaSg(){
  var er="";
  if(!N)
    er+="Falta Nombre\n";

  if(!U)
    er+=" Usuario\n";

  if(!C)
    er+=" Correo\n";

  if(!T)
    er+=" Telefono\n";

  if(!E)
    er+=" Edad\n";

  if(!S)
    er+=" Sexo\n";

  if(er!="")
    abrirmsj('¡ERROR!',er);
  else{
      overlay.classList.remove('active');
      popup.classList.remove('active');

      overlayContra.classList.add('active');
      popupContra.classList.add('active');
  }
}

function AME(rtx){
  var input = document.getElementById('Iusu');

    if( rtx != ''){
      var output = document.getElementById('valid-txt');
      output.innerHTML = rtx;
      input.style.backgroundColor="rgba(255, 0, 0, 0.7)";
    }else {
      input.style.backgroundColor="white";
    }
}
