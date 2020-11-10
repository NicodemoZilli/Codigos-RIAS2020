Ext.require([
    'Ext.plugin.Viewport'
]);

Ext.onReady(function(){


  //Menu

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
              hrefTarget: '_blank'
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
  title: 'Preguntas en Acorde&oacute;n',
  width: '70%',
  height: '550px',
  style : 'margin-left:15%', //si no dice la unidad, entonces son pixeles
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
  items: [{
      title: 'Pregunta 1',
      html: '<h2>¿Qu&eacute; software de aplicaci&oacute;n es utilizado para poder practicar y obtener la l&oacute;gica de programaci&oacute;n?</h2>'
            +'<div id="carru"></div>'
    },{
      title: 'Pregunta 2',
      html: '<h2>Selecciona el programa que dominas</h2>'
            +'<div id="graf"></div>'
    },{
      title: 'Pregunta 3',
      html: '<h2>Java es un lenguaje de <div id="autoJava"></div> nivel</h2>'
    },{
      title: 'Pregunta 4',
      html: '<h2>Una variable es un espacio de memoria reservado que se utiliza para almacenar un determinado valor que va a ser utilizado, modificado dentro de un programa</h2>'
            +'<div id="butt"></div>'
    }

  ],
  renderTo: Ext.getBody()
});

//group

Ext.create('Ext.form.Panel', {
        renderTo: Ext.get('graf'),
        xtype: 'fieldset',
        flex: 1,
        title: 'Lenguajes',
        defaultType: 'radio', // each item will be a radio button
        layout: 'form',
        padding: 0,
        height: 220,
        items: [{
            checked: true,
            boxLabel: 'Java',
            name: 'fav-color',
            value: 'Java'
        }, {
            boxLabel: 'C/C++',
            name: 'fav-color',
            value: 'C/C++'
        }, {
            boxLabel: 'Python',
            name: 'fav-color',
            value: 'Python'
        }, {
            boxLabel: 'PHP',
            name: 'fav-color',
            value: 'PHP'
        }]
});


Ext.namespace('Ext.datos');

//carru
Ext.datos.leng = [   //arreglo de 2 dimensiones
			  [1,"DFD"],[2,"ALICE"],[3,"PSeInt"],[4,"Raptor"], //se crea llave valor
			];
var store = Ext.create('Ext.data.ArrayStore', {  //se crea el espacio de almacenamiento en cache
                      fields: ["cve","leng"],
                        data : Ext.datos.leng
                    });
  Ext.create('Ext.form.field.ComboBox', { //lista
                  renderTo: Ext.get('carru'),
                  store: store,  //se alimenta de la variable store de la linea 16
                  displayField:'leng',
                  queryMode: 'local',
                  emptyText: 'escribe ...',
                  hideTrigger:false //para ocultar flecha del combo
              });


//Autocomplete
Ext.datos.meses = [   //arreglo de 2 dimensiones
			  [1,"Alto"],[2,"Bajo"],[3,"Mediano"],[4,"Corto"], //se crea llave valor
			  [5,"Arbol"]
			];
	var store = Ext.create('Ext.data.ArrayStore', {  //se crea el espacio de almacenamiento en cache
                    fields: ["cve","nombre"],
                    data : Ext.datos.meses
                });
	//Es posible también almacenar el componente en una variable, aunque en este
	//momento no es necesario
    Ext.create('Ext.form.field.ComboBox', { //lista
                    renderTo: Ext.get('autoJava'),
                    store: store,  //se alimenta de la variable store de la linea 16
                    displayField:'nombre',
                    queryMode: 'local',
                    emptyText: 'escribe ...',
                    hideTrigger:false //para ocultar flecha del combo
                });


//ventanas pregunta 5
                var ventana;
                var verd = function(btn) {
                 if (!ventana) {
                   ventana = new Ext.Window({
                     animateTarget : btn.el,
                     html : '<p>La respuesta es correcta</p>',
                     style : 'padding:15px',
                     closeAction : 'hide',
                     modal: true,
                     title: '¡Listo!',
                     constrain : true
                   });
                 }
                 ventana.show();
                };

                var ventana2;
                var fals = function(btn) {
                 if (!ventana2) {
                   ventana2 = new Ext.Window({
                     animateTarget : btn.el,
                     html : '<p>La respuesta es incorrecta</p>',
                     style : 'padding:15px',
                     closeAction : 'hide',
                     modal: true,
                     title: '¡Listo!',
                     constrain : true
                   });
                 }
                 ventana2.show();
                };

 //button
 Ext.create('Ext.panel.Panel',{
    extend: 'Ext.Container',
    renderTo: Ext.get('butt'),
    items: [
      {
        xtype: 'button',
        text: 'Verdadero',
        style: 'margin:10px; padding:20px;',
        handler: verd
      },{
        xtype: 'button',
        text: 'Falso',
        style: 'margin:10px; padding:20px;',
        handler: fals
      }
    ]
 });


});
