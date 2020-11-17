Ext.require(['Ext.plugin.Viewport']);
Ext.onReady(function(){
  var m1='<center>Aplicaciones Enriquecidas <br>de Internet</center>'
  var m2 ='<center>Lenguajes y autómatas <br>2'
  var m3 ='<center>Taller de investigaci&oacute;n<br> 1'
  var m4 ='<center>Comutaci&oacute;n y enrutamiento<br>de redes de datos'
  var m5 ='<center>Arquitectura de SW para<br> la Web'
  var m6 ='<center>Prog. L&oacute;gica y Funcional'
  var m7 ='<center>Sistemas Programables'
  var i='<center>Inglés 4'
	Ext.create('Ext.data.Store', {
    storeId: 'datoshorario',
    fields:[ 'hora', 'lu', 'ma','mie','jue','vie','sa'],
    data: [
        { hora:'8:00-9:00',lu:m1,ma:m1,mie:m1,jue:m1,vie:m1 },
        { hora:'9:00-10:00',lu:m2,ma:m2,mie:m2,jue:m2,vie:m2 },
        { hora:'10:00-11:00',lu:m3,ma:m3,mie:m3,jue:m3},
        { hora:'11:00-12:00',lu:m4,ma:m4,mie:m4,jue:m4,vie:m4},
        { hora:'12:00-13:00',lu:m5,ma:m5,mie:m5,jue:m5,vie:m5},
        { hora:'13:00-14:00',lu:m6,ma:m6,mie:m6,jue:m6},
        { hora:'14:00-15:00',lu:m7,ma:m7,mie:m7,jue:m7},
        { hora:'15:00-16:00',sa:i},
        { hora:'16:00-17:00',sa:i},
        { hora:'17:00-18:00',sa:i},
        { hora:'18:00-19:00',sa:i},
		]
	});

	//Definir tabla y relacionarla
	Ext.create('Ext.grid.Panel', {
		title: 'Horario 7mo. Semestre',
		store: Ext.data.StoreManager.lookup('datoshorario'),
		columns: [
			{ text: 'Hora',
				dataIndex: 'hora',
        height: 40,
				sortable: false,
				hideable: false},
			{ text: 'Lunes',
				dataIndex: 'lu',
        height: 40,
				flex: 2 ,sortable: false,
				hideable: false},
			{ text: 'Martes',
				dataIndex: 'ma',
        flex: 2,
        sortable: false,
        hideable: false},
      { text: 'Miércoles',
				dataIndex: 'mie',
        flex: 2,
        sortable: false,
				hideable: false},
      { text: 'Jueves',
  			dataIndex: 'jue',
        flex: 2,
        sortable: false,
  			hideable: false},
      { text: 'Viernes',
    		dataIndex: 'vie',
        flex: 2,
        sortable: false,
    		hideable: false},
      { text: 'Sabado',
    		dataIndex: 'sa',
        flex: 0,
        sortable: false,
    		hideable: false}
		],

		height: 400,
		width: '90%',
    style: 'margin-left:5%',
		renderTo: Ext.getBody()
	});
});


 Ext.onReady(function(){
   document.body.innerHTML += "<div class='mat'><h3>Información de los grupos</h3></div>";
 	Ext.create('Ext.data.Store', {
     storeId: 'datosmat',
     fields:['clave','nom','prof','cre','aula'],
     data: [
       {clave:'7gAC',nom:'Aplicaciones Enriquecidas de Internet',prof:'M&oacute;nica Ru&iacute;z Mart&iacute;nez', cre:'5',aula:'L1'},
       {clave:'7g1A',nom:'Lenguajes y aut&oacute;matas 2',prof:'Rossana Graciela Trejo Pacheco', cre:'5',aula:'3'},
       {clave:'7g3A',nom:'Taller de investigaci&oacute;n',prof:'Marmol enrique Santos Quintero', cre:'4',aula:'CB1'},
       {clave:'7g2C',nom:'Conmutaci&oacute;n y enrutamiento de redes de datos',prof:'Jos&eacute; Alberto Venegas Garc&iacute;a', cre:'5',aula:'L10'},
       {clave:'7gBC',nom:'Aplicaciones de software para la Web',prof:'Alma Ivonne S&aacute;nchez Garc&iacute;a', cre:'5',aula:'L6'},
       {clave:'7g4E',nom:'Programaci&oacute;n L&oacute;gica y Funcional',prof:'Rafael Herrera Garc&iacute;a', cre:'4',aula:'L5'},
       {clave:'7gAC',nom:'Sistemas Programables',prof:'Rafael Herrera Garc&iacute;a', cre:'4',aula:'LC02'},
       {clave:'IN4F',nom:'Ingl&eacute;s Nivel 4',prof:'Segio Huerta Trujillo', cre:'2'},
 		]
 	});

 	Ext.create('Ext.grid.Panel', {
 		title: 'Grupos de materias',
 		store: Ext.data.StoreManager.lookup('datosmat'),
 		columns: [
 			{ text: 'Clave',
 				dataIndex: 'clave',
 				hideable: false,},
      { text: 'Nombre Materia',
   			dataIndex: 'nom',
  			hideable: false,
        flex: 1},
      { text: 'Profesor',
   			dataIndex: 'prof',
  			hideable: false,
        sortable: false,
        flex: 1},
      { text: 'Créditos',
     		dataIndex: 'cre',
  			hideable: false,
        sortable: false,
        flex: 0},
      { text: 'Aula',
        dataIndex: 'aula',
        hideable: false,
        sortable: false,
        flex: 0}
 		],

 		height: 300,
 		width: '70%',
     style: 'margin-left:15%',
 		renderTo: Ext.getBody()
 	});
 });
