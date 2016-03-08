$(document).ready(function(){
    $('#info-block-1').css('opacity', 0);
    $('#info-block-1').waypoint(function() {
        $('#info-block-1').addClass('fadeIn');
    }, { offset: '70%' });
    $('#info-block-2').css('opacity', 0);
    $('#info-block-2').waypoint(function() {
        $('#info-block-2').addClass('fadeIn');
    }, { offset: '70%' });
    $('#header-music').css('opacity', 0);
    $('#header-music').waypoint(function() {
        $('#header-music').addClass('fadeInLeft');
    }, { offset: '70%' });
    $('#flexy').css('opacity', 0);
    $('#flexy').waypoint(function() {
        $('#flexy').addClass('fadeIn');
    }, { offset: '50%' });
    $('#header-video').css('opacity', 0);
    $('#header-video').waypoint(function() {
        $('#header-video').addClass('fadeInRight');
    }, { offset: '70%' });
    $('#vid-1').css('opacity', 0);
    $('#vid-1').waypoint(function() {
        $('#vid-1').addClass('fadeIn');
    }, { offset: '70%' });
    $('#vid-2').css('opacity', 0);
    $('#vid-2').waypoint(function() {
        $('#vid-2').addClass('fadeIn');
    }, { offset: '70%' });
    $('#credits-author').css('opacity', 0);
    $('#credits-author').waypoint(function() {
        $('#credits-author').addClass('fadeInUp');
    }, { offset: '100%' });
});