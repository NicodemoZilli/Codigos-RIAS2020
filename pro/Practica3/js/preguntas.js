Ext.require([
    'Ext.plugin.Viewport'
]);
Ext.onReady(function(){
  Ext.create('Ext.panel.Panel',{
    title: 'ZiSan Programming - eLearning',
    items:[
      {
        xtype: 'button',
        text: 'Menu',
        menu: new Ext.menu.Menu({
          items:[
            {
              text: 'Inicio',
              href: '../Practica3/index.html',
              hrefTarget: '_self',
            },{
              text: 'Seccion 2',
              href: 'ejemplos.html',
              hrefTarget: '_self'
            },{
              text: 'Ver Código',
              href: 'https://github.com/NicodemoZilli/Codigos-RIAS2020/tree/master/pro/Practica3',
              hrefTarget: '_self'
            },{
              text: 'Vista Principal',
              href: '../../../../../',
              hrefTarget: '_self'
            }
          ]
        })
      }
    ],
    renderTo: Ext.getBody()
  });

    Ext.create('Ext.panel.Panel', {
		title: 'Responde las siguientes preguntas:',
		width: '70%',
		height: 400,
    style : 'margin-left:15%',
		defaults: {
			// para todos los paneles del acordeón
			bodyStyle: 'padding:20px; background-color:#D6EAF8;'
		},
		layout: {
			type: 'accordion',
			titleCollapse: true,
			animate: true,
			activeOnTop: true,
      padding : '5px',
      aling : 'center',
		},
		items: [
      {
				title: 'Pregunta 1',
				html: '  <p>1.-El <input id="p1"> es la representaci&oacute;n gr&aacute;fica del algoritmo o proceso. se utiliza en las disciplinas como programa, la econom&iacute;a, los procesos industriales y la psicolog&iacute;a cognitiva.</p>'
			},{
				title: 'Pregunta 2',
				html: '<p>2.-Un <input id="p2">  es un lenguaje artificial e informal &uacute;til para el desarrollo de algoritmos, no es un leng. de progr. verdadero, puede ser solo texto.</p>'
			},{
				title: 'Pregunta 3',
				html: '<p>3.-Un  <input id="p3">  es un conjunto de instrucciones que son redactadas por un usuario en un Sfw que tiene conocimientos del Lenguaje de Programaci&oacute;n.</p>'
			},{
        title: 'Pregunta 4',
        html: '<p>4.-Una <input id="p4"> es un nombre que se asocia con una porci&oacute;n de la memoria del ordenador, en la que se guarda el valor asignado a dicha variable.</p>'
      },{
        title: 'Pregunta 5',
        html: '<p>5.-Un <input id="p5"> es un lenguaje artificial que puede ser usado para controlar el comportamiento de una m&aacute;quina, especialmente una computadora. Estos se componen de un conjunto de reglas sint&aacute;cticas y sem&aacute;nticas que permiten expresar instrucciones que luego serán interpretadas.</p>'
      }],
		renderTo: Ext.getBody()
	});
});

Ext.onReady(function(){
    var ventana;
	var nueva = function(btn) {
		if (!ventana) {
			ventana = new Ext.Window({
				animateTarget : btn.el,
				html : '<p>Tus respuestas han sido registradas :)</p>',
        style : 'padding:15px',
				closeAction : 'hide',
				modal: true,
				title: '¡Listo!',
				constrain : true
			});
		}
		ventana.show();
	};
	new Ext.Button({
		renderTo : Ext.getBody(),
		text : 'Enviar',
		style : 'margin-left:47%',
		handler : nueva
	});
});
