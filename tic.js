$(function(){
    //hide the x and o for each game space.
    $('.X').addClass('hidden');
    $('.O').addClass('hidden');

    //Fade in the game board.
    $('#start').on('click',function(){
     $('table').fadeTo('slow',1);
    });

    var player1;
    var player2;
    var comupter;
    //Set active player
    $('#play1').on('click',function(){
        $(this).css('background-color','green');
        $('#play2').css('background-color','#FCFCFC');
    });
    $('#play2').on('click',function(){
        $(this).css('background-color', 'green');
        $('#play1').css('background-color','#FCFCFC');
    });







});
