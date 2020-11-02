$('#my-linkH').click(function(e) {
    $('#collapseOne').collapse('hide');
    $('#collapseTwo').collapse('hide');
    $('#collapseThree').collapse('hide');
    $('#collapseFour').collapse('hide');
})

$('#my-link1').click(function(e) {
    $('#collapseOne').collapse('show');
    $('#collapseTwo').collapse('hide');
    $('#collapseThree').collapse('hide');
    $('#collapseFour').collapse('hide');
})

$('#my-link2').click(function(e) {
    $('#collapseTwo').collapse('show');
    $('#collapseOne').collapse('hide');
    $('#collapseThree').collapse('hide');
    $('#collapseFour').collapse('hide');
})

$('#my-link3').click(function(e) {
    $('#collapseThree').collapse('show');
    $('#collapseOne').collapse('hide');
    $('#collapseTwo').collapse('hide');
    $('#collapseFour').collapse('hide');
})

$('#my-link4').click(function(e) {
    $('#collapseFour').collapse('show');
    $('#collapseThree').collapse('hide');
    $('#collapseOne').collapse('hide');
    $('#collapseTwo').collapse('hide');
})

$('#my-linkC').click(function(e) {
    $('#collapseOne').collapse('hide');
    $('#collapseTwo').collapse('hide');
    $('#collapseThree').collapse('hide');
    $('#collapseFour').collapse('hide');
})