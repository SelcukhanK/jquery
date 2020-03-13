$(document).ready( function() {
    // test
    // $('main').hide(3000).delay(1000).show(500);
    
    // muis events
    $('figure img').mouseenter( function() {
        $(this).fadeTo(600, .01);
    }).mouseleave( function() {
        $(this).fadeTo(1000, 1);
    }).click( function() {
        $(this)
    })
});