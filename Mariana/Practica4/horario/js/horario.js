/*
Uso de tabla con información fija con ExtJS
*/

Ext.require(['Ext.plugin.Viewport']);
Ext.onReady(function(){
	//Definir datos
	//El espacio de nombres "data" implica que ahí se mantiene información de la aplicación 
	//La clase Store implica un almacén de datos en cliente (puede ser fijo o provenir del servidor)
	Ext.create('Ext.data.Store', {   
    storeId: 'datosStore', //identificador del almacenamiento para usar posteriormente
    fields:[ 'hora', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes'], //campos que forman el "registro"
    data: [ //en este caso, es un arreglo de objetos
        { hora: '08-09', lunes: 'Aplicaciones enriquecidas para la web', martes: 'Aplicaciones enriquecidas para la web' , miercoles: 'Aplicaciones enriquecidas para la web', jueves: 'Aplicaciones enriquecidas para la web', viernes:'Aplicaciones enriquecidas para la web'},
        { hora: '09-10', lunes: 'Lenguajes y automatas II', martes: 'Lenguajes y automatas II' , miercoles: 'Lenguajes y automatas II', jueves: 'Lenguajes y automatas II', viernes:'Lenguajes y automatas II'},
        { hora: '10-11', lunes: 'Metodologias emergentes para la web', martes: 'Metodologias emergentes para la web' , miercoles: 'Metodologias emergentes para la web', jueves: 'Metodologias emergentes para la web', viernes:'Metodologias emergentes para la web'},
        { hora: '11-12', lunes: 'Conmutacion y enrutamiento de datos', martes: 'Conmutacion y enrutamiento de datos' , miercoles: 'Conmutacion y enrutamiento de datos', jueves: 'Conmutacion y enrutamiento de datos', viernes:'Conmutacion y enrutamiento de datos'},
        { hora: '12-13', lunes: 'Arquitectura de software para la web', martes: 'Arquitectura de software para la web' , miercoles: 'Arquitectura de software para la web', jueves: 'Arquitectura de software para la web', viernes:'Arquitectura de software para la web'},
        { hora: '12-14', lunes: 'Programacion logica y funcional', martes: 'Programacion logica y funcional' , miercoles: 'Programacion logica y funcional', jueves: 'Programacion logica y funcional', viernes:''},
        { hora: '14-15', lunes: 'Sistemas programables', martes: 'Sistemas programables' , miercoles: 'Sistemas programables', jueves: 'Sistemas programables', viernes:''}
		]
	});
	//Definir tabla y relacionarla
	Ext.create('Ext.grid.Panel', {
		title: 'Horario',
		//headerPosition: 'top', //probar con y sin atributo
		store: Ext.data.StoreManager.lookup('datosStore'), // Al administrador de almacen busque relación con almacenamiento
		columns: [ //columnas de tabla, pueden ser menos que en el almacenamiento
			{ text: 'Hora', 
				dataIndex: 'hora', //nombre del "campo" del "registro"
				sortable: true, //permite o no que se reordene la información
				hideable: false}, //permite o no que se oculte la columna
			{ text: 'Lunes', 
				dataIndex: 'lunes', 
				flex: 1 //1 o mayor significa que el tamaño de la columna se adaptará al contenido
			},
			{ text: 'Martes', 
				dataIndex: 'martes',
				menuDisabled:true,
                flex: 1 //1 o mayor significa que el tamaño de la columna se adaptará al contenido
			},
            { text: 'Miercoles', 
				dataIndex: 'miercoles',
				menuDisabled:true,
                flex: 1 //1 o mayor significa que el tamaño de la columna se adaptará al contenido
			},
            { text: 'Jueves', 
				dataIndex: 'jueves',
				menuDisabled:true,
                flex: 1//1 o mayor significa que el tamaño de la columna se adaptará al contenido
			},
            { text: 'Viernes', 
				dataIndex: 'viernes',
				menuDisabled:true,
                flex: 1 //1 o mayor significa que el tamaño de la columna se adaptará al contenido
			}
		],
		height: 300,
		width: 1000,
		style: 'display: block; margin-left: auto; margin-right: auto;',
		renderTo: Ext.getBody() //se pega al body
	});
});