$(document).ready(function() {
	//La etiqueta "button" va a funcionar como un botón jQuery
	$("#btnEnviar").button();

	//Al recibir click, hará algo
	$('#btnEnviar').click(function(event) {
	event.preventDefault(); //para que no haga el submit
	var sURL = 'login.php';
	var sCve = $('#txtCve').val();
	var sPwd = $('#txtPwd').val();

	var llamada=$.post(
		sURL, //URL
		{ //Datos de envío
			txtCve: sCve,
			txtPwd: sPwd
		},
		function(oDatos) { //trabajo a realizar en caso de éxito
			//Si la respuesta es OK, cambia el contenido
			if (oDatos.sSit=='Ok'){


				$('#espacio1').html(''); //Quitó el formulario
				$('#espacio1').html('<h3>Inicio</h3>'+
					'<h4>Bienvenido '+oDatos.sNom+'</h4>'+
					'<h4>Eres tipo '+oDatos.sTipo+'</h4>'+
					'<div class="por_columnas"></div>');

					if (oDatos.sTipo == "Alumno"){				//Agrega funcion ver materias a alumno

						oLigaNva = $('<a/>');
						oLigaNva.attr('href','tabMaterias.php');
						oLigaNva.html('Ver Materias');

						oLigaLis = $('<li/>');
						oLigaLis.append(oLigaNva);

						$('#nuevo').append(oLigaLis);

					}else	if (oDatos.sTipo == "Administrador"){//Agrega una liga al menú

					oLigaNva = $('<a/>');
					oLigaNva.attr('href','tabAlumnos.php');
					oLigaNva.html('ABC Alumnos ');

					oLigaLis = $('<li/>');
					oLigaLis.append(oLigaNva);

					$('#nuevo').append(oLigaLis);

				}

				//Cambiar la liga del menú
				oLigaS = $('<a/>');
				oLigaS.attr('href','logout.php');
				oLigaS.html('Salir');
				 oLigaLis2 = $('<li/>');
				 oLigaLis2.append(oLigaS)
				$('#Salida').append(oLigaLis2);


			}else{
				//Error "de negocio"
				sError = oDatos.sNom;
				alert(sError);
			}
		}); //fin llamada

		//Informativo
		llamada.done(function() {
			console.log( "terminado" );
			})
			.fail(function() {
				console.log( "error" );
			})
			.always(function() {
				console.log( "completado" );
			});
	}); //fin de la definición del click del botón
}); //fin del ready
