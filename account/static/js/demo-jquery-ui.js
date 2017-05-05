/**
 * Created by Maffee on 2016/12/13.
 */
$(function() {
    $( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 100,
        values: [50, 95],
        slide: function( event, ui ) {
        $( "#amount" ).val( ui.values[0]/100 + " - " + ui.values[1]/100 );
        }
    });
    $( "#amount" ).val( $( "#slider-range" ).slider( "values", 0 )/100 +
        " - " + $( "#slider-range" ).slider( "values", 1 )/100 );
});