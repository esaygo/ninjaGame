$(document).ready(function() {

  $('.selectPlayer').hide();

  $('.selectArena').hover(function() {
      var arena = $(this).text();
      $('#wrapper').css('background-image', 'url(images/'  + arena + '.jpg)' );
    },

      function() {
       $('#wrapper').css("background", "#000");

  });


  $('.selectArena').click( function() {
    var arena = $(this).text();
    $('.selectArena').unbind("mouseenter mouseleave");
    $('#wrapper').css('background-image', 'url(images/'  + arena + '.jpg)' );
    $('.selectArena').hide();
    $('.selectPlayer').show();

  });

  $('#player1').change(function () {
    var val = $(this).val();
    console.log(val);
  $('#playerOne').append('<img src = images/' + val + '.jpg>');

  });

  $('#player2').change(function () {
    var val = $(this).val();
    console.log(val);
  $('#playerTwo').append('<img src = images/' + val + '.jpg>');
  $('#buttonsWrapper').hide();
  $('#playerOne').css("margin-left", "200px");
  $('#playerTwo').css("margin-left", "400px");

});





}); //document.ready() end
