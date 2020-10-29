$( function() {
    $( "#menu" ).menu();
  } );

$( function() {
    $( "#resizable" ).resizable();
  } );

  $( function() {
    $( "#datepicker" ).datepicker();
  } );

  $( function() {
    $( "#accordion" ).accordion();
    $( "#accordion2" ).accordion();
    
  } );

  $( function() {
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
  } );

  $( function() {
    $( "#draggable" ).draggable();
    $( "#draggable2" ).draggable();

    $( "#droppable" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Contestada!" );
      }
    });
  } );


  $( function() {
    $( "#radio1" ).checkboxradio();
    $( "#radio2" ).checkboxradio();
    $( "#radio3" ).checkboxradio();

  } );

  $( function() {
    $( "#controlgroup" ).controlgroup()
  } );


  $( function() {
    var availableTags = [
      "BASIC",
      "C",
      "C++",
      "COBOL",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme",
      "Alto",
      "alto",
      "Bajo",
      "bajo"
    ];
    $( "#autocomplete" ).autocomplete({
      source: availableTags
    });
  } );

  $( function() {
    $( "button" ).button();
  } );

  $( function() {
    $( ".check" ).checkboxradio();
  } );