/*
acordeon.js
Uso de la distribución tipo acordeón de ExtJS
*/
Ext.require([
    'Ext.plugin.Viewport'
]);
Ext.onReady(function(){
    Ext.create('Ext.panel.Panel', {
		title: 'Ejemplo Acorde&oacute;n',
		width: '50em',
		height: 500, //si no dice la unidad, entonces son pixeles
		defaults: {
			// para todos los paneles del acordeón
			bodyStyle: 'padding:10px'
		},
		layout: {
			// definición para el acordeón
			type: 'accordion',
			titleCollapse: true,
			animate: true,
			activeOnTop: true
		},
		items: [{
				title: 'Panel 1',
				html: '<p>Contenido del primer panel</p>',
				closable: true
			},{
				title: 'Panel 2',
				html: '<iframe src="http://www.orizaba.tecnm.edu.mx"></iframe>'
			},{
				title: 'Panel 3',
				html: '<p><form>Hola <input type="text" name="txtNom"/></form></p>'
			}],
		renderTo: Ext.getBody()
	});
});
