$(function(){
    //hide the x and o for each game space.
    $('.X').addClass('hidden');
    $('.O').addClass('hidden');
    $('.blank').addClass('hidden');
    //Fade in the game board.


    var player1;
    var player2;
    var comupter;
    var playerNum = 'no';
    var playerNum = 'no';
    console.log("p1 " +player1);
    console.log("p2 " +player2);
    //Set active player
    $('#play1').on('click',function(){
        $(this).css('background-color','green');
        $('#play2').css('background-color','#E7E7E7');
        playerNum='one'
        player1=0;
        player2=1;
        console.log(player1);
        console.log(player2);
    });
    $('#play2').on('click',function(){
        $(this).css('background-color', 'green');
        $('#play1').css('background-color','#E7E7E7');
        playerNum='two';
        player1=1;
        player2=0;
        console.log(player1);
        console.log(player2);
    });

    //Game play
    $('#start').on('click',function(){
        if(playerNum !== 'no'){
            $('table').fadeTo('slow',1);
        }

    });
        $('td').on('click',function(){
            console.log("p1 " +player1);
            console.log("p2 " +player2);
            if(player1===1){
                $(this).children('.O').removeClass('hidden');
                player1=0;
                player2=1;


            } else if(player2===1){
                $(this).children('.X').removeClass('hidden');
                player1=1;
                player2=0;
            }

        });



    /*if(player2 = 1){
        $('td').on('click',function(){
            console.log("p1 "+player1);
            console.log("p2 "+player2);

            $(this).children('.X').removeClass('hidden');
        });

    }*/






});
