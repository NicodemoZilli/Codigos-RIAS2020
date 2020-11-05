/*
dialogo.js
Uso control window de ExtJS; en este ejemplo funciona como diálogo
*/
Ext.require([
    'Ext.plugin.Viewport'
]);
Ext.onReady(function(){
    var ventana;
	var nueva = function(btn) { //el parámetro es el objeto que invoca a la función
		if (!ventana) {
			ventana = new Ext.Window({
				animateTarget : btn.el, //Elemento (nodo HTML) del botón, tiene un efecto visual
				html : '<p>Cualquier cosa</p><form><input type="text" name="txtAlgo"/><input type="button" value="Saluda" onclick="alert(txtAlgo.value);"/></form>',
				closeAction : 'hide',
				height : 200,
				width : 300,
				modal: true,
				title: 'Dialoguito',
				constrain : true //si se limita a su contenedor o no
			});
		}
		ventana.show(); //En este caso, sólo se crea una vez y se oculta/muestra
	};
	new Ext.Button({
		renderTo : Ext.getBody(),
		text : 'Abrir dlg',
		style : 'margin: 100px',
		handler : nueva
	});
});
