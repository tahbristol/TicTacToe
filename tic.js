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
            $('td').text(undefined);
            console.log("text "+$('#upLeft').text());
            console.log("text value: "+$('#upLeft').val());
        }

    });
        $('td').on('click',function(){

            if(player1===1){
                $(this).append('O');
                player1=0;
                player2=1;
                $(this).addClass('filled');
                store();
                win();


            } else if(player2===1){
                $(this).append('X');
                player1=1;
                player2=0;
                $(this).addClass('filled');
                store();
                win();
            }

        });



    var board = [];

    var store = function(){
        for(var y=0; y<8; y++){
            board[y]=[];
        }
        board[0][0]=$('#upLeft').text();
        board[0][1]=$('#upMid').text();
        board[0][2]=$('#upRight').text();

        board[1][0]=$('#midLeft').text();
        board[1][1]=$('#midMid').text();
        board[1][2]=$('#midRight').text();

        board[2][0]=$('#upLeft').text();
        board[2][1]=$('#upMid').text();
        board[2][2]=$('#upRight').text();

        board[3][0]=$('#upLeft').text();
        board[3][1]=$('#midLeft').text();
        board[3][2]=$('#lowLeft').text();

        board[4][0]=$('#upMid').text();
        board[4][1]=$('#midMid').text();
        board[4][2]=$('#lowMid').text();

        board[5][0]=$('#upRight').text();
        board[5][1]=$('#midRight').text();
        board[5][2]=$('#lowRight').text();

        board[6][0]=$('#upLeft').text();
        board[6][1]=$('#midMid').text();
        board[6][2]=$('#lowRight').text();

        board[7][0]=$('#upRight').text();
        board[7][1]=$('#midMid').text();
        board[7][2]=$('#lowLeft').text();
    };

        var win = function(){
        for(var i =0; i<board.length;i++){

            console.log("boardLength: " +board.length)
                var space1=board[i][0];
                var space2=board[i][1];
                var space3=board[i][2];
                console.log("s1"+ space1);
                console.log("s2"+ space2);
                console.log("s3"+ space3);
                if(space1 === "X" || space1 === "O" || space2 === "X" || space2 === "O"   || space3 === "X" || space3 === "O" ){
                    if(space1 === space2 && space2 === space3 && space1 === space3){

                        $('table').hide();
                        //$('.gameover').append('<p>GameOver</p>');

                    }

                }

        }



    };






});
