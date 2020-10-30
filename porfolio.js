$('#my-linkH').click(function(e) {
    $('#collapseOne').collapse('hide');
    $('#collapseTwo').collapse('hide');
    $('#collapseThree').collapse('hide');
})

$('#my-link1').click(function(e) {
    $('#collapseOne').collapse('show');
    $('#collapseTwo').collapse('hide');
    $('#collapseThree').collapse('hide');
})

$('#my-link2').click(function(e) {
    $('#collapseTwo').collapse('show');
    $('#collapseOne').collapse('hide');
    $('#collapseThree').collapse('hide');
})

$('#my-link3').click(function(e) {
    $('#collapseThree').collapse('show');
    $('#collapseOne').collapse('hide');
    $('#collapseTwo').collapse('hide');
})

$('#my-linkC').click(function(e) {
    $('#collapseOne').collapse('hide');
    $('#collapseTwo').collapse('hide');
    $('#collapseThree').collapse('hide');
})