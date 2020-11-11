Ext.require(['Ext.plugin.Viewport']);

Ext.onReady(function(){

  Ext.create('Ext.data.Store', {
    storeId: 'datosStore', //identificador del almacenamiento para usar posteriormente
    fields:[ 'Hora', 'Lunes', 'Martes','Miércoles','Jueves','Viernes','Sábado'], //campos que forman el "registro"
    data: [ //en este caso, es un arreglo de objetos
        { hora: '07:00', lunes: '', martes: '',miercoles: '',jueves: '', viernes:'',sabado:''},
        { hora: '08:00', lunes: 'RIAS', martes: 'RIAS',miercoles: 'RIAS',jueves: 'RIAS', viernes:'RIAS',sabado:''},
        { hora: '09:00', lunes: 'Lenguajes y Automatas II', martes: 'Lenguajes y Automatas II',miercoles: 'Lenguajes y Automatas II',jueves: 'Lenguajes y Automatas II', viernes:'Lenguajes y Automatas II',sabado:'' },
        { hora: '10:00', lunes: 'Taller de Investigación I', martes: 'Taller de Investigación I',miercoles: 'Taller de Investigación I',jueves: 'Taller de Investigación I', viernes:'',sabado:'' },
        { hora: '11:00', lunes: 'Conmutación y Enrutamiento', martes: 'Conmutación y Enrutamiento',miercoles: 'Conmutación y Enrutamiento',jueves: 'Conmutación y Enrutamiento', viernes:'Conmutación y Enrutamiento',sabado:'' },
        { hora: '12:00', lunes: 'Arquitectura de Sw para la Web', martes: 'Arquitectura de Sw para la Web',miercoles: 'Arquitectura de Sw para la Web',jueves: 'Arquitectura de Sw para la Web', viernes:'Arquitectura de Sw para la Web',sabado:'' },
        { hora: '13:00', lunes: 'Programación Lógica y Funcional', martes: 'Programación Lógica y Funcional',miercoles: 'Programación Lógica y Funcional',jueves: 'Programación Lógica y Funcional', viernes:'',sabado:'' },
        { hora: '14:00', lunes: 'Sistemas Programables', martes: 'Sistemas Programables',miercoles: 'Sistemas Programables',jueves: 'Sistemas Programables', viernes:'',sabado:'' },
        { hora: '15:00', lunes: '', martes: '',miercoles: '',jueves: '', viernes:'Íngles 4',sabado:'' },
        { hora: '16:00', lunes: '', martes: '',miercoles: '',jueves: '', viernes:'Íngles 4',sabado:'' },
        { hora: '17:00', lunes: '', martes: '',miercoles: '',jueves: '', viernes:'Íngles 4',sabado:'' },
        { hora: '18:00', lunes: '', martes: '',miercoles: '',jueves: '', viernes:'Íngles 4',sabado:'' },
        { hora: '19:00', lunes: '', martes: '',miercoles: '',jueves: '', viernes:'',sabado:'' },
        { hora: '20:00', lunes: '', martes: '',miercoles: '',jueves: '', viernes:'',sabado:'' },
    ]
  });

  //Definir tabla y relacionarla
  Ext.create('Ext.grid.Panel', {
    title:  '<p>Escuela: Tecnol&oacute;gico Nacional de M&eacute;xico campus Orizaba</p>'+
            '<p>Alumno: David Nicodemo Zilli Vazquez</p>'+
            '<p>N&uacute;m de Control: 17011289</p>'+
            '<p>Semestre: 7o</p>'
            ,
    //headerPosition: 'top', //probar con y sin atributo
    store: Ext.data.StoreManager.lookup('datosStore'), // Al administrador de almacen busque relación con almacenamiento
    columns: [ //columnas de tabla, pueden ser menos que en el almacenamiento
      { text: 'Hora',
        dataIndex: 'hora', //nombre del "campo" del "registro"
        sortable: true, //permite o no que se reordene la información
        hideable: false,
        flex: 1
      }, //permite o no que se oculte la columna
      { text: 'Lunes',
        dataIndex: 'lunes',
        sortable: true,
        flex: 1 //1 o mayor significa que el tamaño de la columna se adaptará al contenido
      },
      { text: 'Martes',
        dataIndex: 'martes',
        sortable: true,
        flex: 1 //1 o mayor significa que el tamaño de la columna se adaptará al contenido
      },
      { text: 'Miércoles',
        dataIndex: 'miercoles',
        sortable: true,
        flex: 1 //1 o mayor significa que el tamaño de la columna se adaptará al contenido
      },
      { text: 'Jueves',
        dataIndex: 'jueves',
        sortable: true,
        flex: 1 //1 o mayor significa que el tamaño de la columna se adaptará al contenido
      },
      { text: 'Viernes',
        dataIndex: 'viernes',
        sortable: true,
        flex: 1 //1 o mayor significa que el tamaño de la columna se adaptará al contenido
      },
      { text: 'Sabado',
        dataIndex: 'sabado',
        sortable: true,
        flex: 1 //1 o mayor significa que el tamaño de la columna se adaptará al contenido
      }
    ],

    width: '90%',
    style: 'display: block; margin-left: auto; margin-right:auto;  margin-bottom: 20px;',
    renderTo: Ext.get('dnico1') //se pega al body
  });

  Ext.create('Ext.panel.Panel', {
  title: 'Materias',
  width: '90%',
  height: '430px',
  style : 'display: block; margin-left: auto; margin-right: auto; margin-bottom: 20px;', //si no dice la unidad, entonces son pixeles
  defaults: {
    // para todos los paneles del acordeón
    bodyStyle: 'padding:5px; background-color:#D6EAF8;'
  },
  layout: {
    type: 'accordion',
    titleCollapse: true,
    animate: true,
    activeOnTop: false,
    padding : '5px',
    aling : 'center',
  },
  items: [{
      title: 'RIAS',
      html: '<h4>Maestra: M.C.C Monica Ru&iacute;z Mat&iacute;nez</h4>'
    },{
      title: 'Lenguajes y Automatas II',
      html: '<h4>Maestra: M.C.C Rossana Graciela Trejo Pacheco</h4>'
    },{
      title: 'Taller de Investigación I',
      html: '<h4>Maestro: M.S.C Marmol Enrique Santos Quintero</h4>'
    },{
      title: 'Conmutación y Enrutamiento',
      html: '<h4>Maestro: M.C.C Jos&eacute; Alberto Venegas Garc&iacute;a</h4>'
    },{
      title: 'Arquitectura de Sw para la Web',
      html: '<h4>Maestra: M.S.C Alma Ivonne S&aacute;nchez Garc&iacute;a</h4>'
    },{
      title: 'Programación Lógica y Funcional',
      html: '<h4>Maestro: M.S.C Rafael Herrera Garc&iacute;a</h4>'
    },{
      title: 'Sistemas Programables',
      html: '<h4>Maestro: M.S.C Rafael Herrera Garc&iacute;a</h4>'
    },{
      title: 'Íngles 4',
      html: '<h4>Maestro: Lic. Javier Tapia</h4>'
    }

  ],
  renderTo: Ext.get('dnico2')
  });



});
