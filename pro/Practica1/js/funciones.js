$( function() {
  $( "#menu2" ).menu();
} );


$( function() {
  //Tabs
  $( "#tabs" ).tabs();
  //tooltip
  $( document ).tooltip();

//button
  $( ".widget input[type=submit]" ).button();
  $( "button" ).on( "click", function() {
      $( "#dialog-confirm" ).dialog( "open" );
    });

//Dialog
    $( "#dialog-confirm" ).dialog({
      autoOpen: false,
      resizable: false,
      height: "auto",
      width: 400,
      modal: true,
      buttons: {
        "Si": function() {
          $( this ).dialog( alert("Hola") );
        },
        Cancel: function() {
          $( this ).dialog( "close" );
        }
      }
    });

//draggable y droppable
$("#todo").sortable({connectWith:"#lenguajes", dropOnEmpty:false});
$("#lenguajes").sortable({connectWith:"#todo", dropOnEmpty:false});
  } );
  