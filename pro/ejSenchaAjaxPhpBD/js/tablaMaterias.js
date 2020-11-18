



Ext.require(['Ext.plugin.Viewport']);

var nLinActual = -1;

Ext.onReady(function(){

    Ext.define('Materia', {
		    extend: 'Ext.data.Model',
		    fields: ['ncvemateria', 'snombremateria', 'ncreditos']
	  });

  Ext.create('Ext.data.Store', {
    extend: 'Ext.data.Store',
    storeId: 'Materia',
    model: 'Materia',
    autoLoad: true,
    autoSync: true,

    proxy: {
			type: 'ajax',
			actionMethods: {
				read: 'GET',
				update: 'POST'
		  },
			batchActions: false,
			api: {
				read: 'buscaTodosMaterias.php',
				update: 'resABCMateria.php?txtOpe=m',
				destroy: 'resABCMateria.php?txtOpe=b'
			},
			reader: {
				type: 'json',
				rootProperty: 'arrMat'
			},
			writer: {
				type: 'json'
			},
			listeners: {
				exception: function(proxy, response, operation, eOpts) {
					Ext.Msg.alert(
						'Aviso',
						'Error al llamar al servidor'
					);
				}
			}
		}
	});

  Ext.create('Ext.grid.Panel', {
    renderTo: Ext.get("espacio1"),
    store: Ext.data.StoreManager.lookup('Materia'),
    width: "90%",
    height: "31em",
    title: 'Materias',
    selType: 'rowmodel',
    id: "tblMat",
    plugins: {
      ptype: 'rowediting',
      clicksToEdit: 2,
      listeners: {
        edit: function(editor, e, eOpts) {
           alert("Información enviada");
        }
      }
    },
    columns: [
      {
        text: 'Clave',
        width: '10%',
        dataIndex: 'ncvemateria'
      },
      {
        text: 'Nombre',
        width: '20%',
        dataIndex: 'snombremateria',
        editor: {
          xtype: 'textfield',
          allowBlank: false
        }
      },
      {
        text: 'Créditos',
        width: '20%',
        dataIndex: 'apePat',
        editor: {
          xtype: 'ncreditos',
          allowBlank: false
        }
      }
    ],
    listeners: {
      select: function(selModel, record, index, options){
        nLinActual = index;
      }
    }
  });
});
