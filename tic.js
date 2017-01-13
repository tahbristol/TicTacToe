$(function(){
    //Variables
    var player1;
    var player2;
    var comupter;
    var playerNum = 'no';

    var play1 = ['Player 1'];
    var play2 = ['Player 2'];
    var comp = ['Computer'];
    var win = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],
              [3,5,7]];
    var IDs = [];




    //Set number of players
    $('#play1').on('click',function(){
        $(this).css('background-color','green');
        $('#play2').css('background-color','#E7E7E7');
        playerNum='one';
        player1=0;
        computer=1;


    });
    $('#play2').on('click',function(){
        $(this).css('background-color', 'green');
        $('#play1').css('background-color','#E7E7E7');
        playerNum='two';
        player1=1;
        player2=0;

    });

    //Game play
    $('#start').on('click',function(){

        if(playerNum !== 'no'){
            $('table').fadeTo('slow',1);
            $('td').text(undefined);
        }
        if(playerNum === 'one'){
            onePlayer();
        }else if(playerNum === 'two'){
            twoPlayers();
        }
    });

    $('#reset').on('click',function(){
        $('.filled').remove();

         play1 = ['Player 1'];
         play2 = ['Player 2'];
         $('#play1').css('background-color','#E7E7E7');
         $('#play2').css('background-color','#E7E7E7');
         $('.winner1').css('visibility', 'hidden');
         $('.winOne').removeClass('winner2');
         $('.winOne').addClass('winner1');
         $('.winTwo').addClass('winner2');



    });




function twoPlayers (){

        $('td').on('click',function(){

	    //Monitor if a space has already been filled.
	        var id = $(this).attr('id');
            var space = document.getElementById(id);
            var spaceChild = space.children;

            //Add cell position to player array based on grid number.
            	//if(player 1's turn
            if(player1===1 && spaceChild[0] === undefined){


            if($(this).attr('id') === 'upLeft'){
                play1.push(1);

            }else if($(this).attr('id') === 'upMid'){
                play1.push(2);

            }else if($(this).attr('id') === 'upRight'){
                play1.push(3);

            }else if($(this).attr('id') === 'midLeft'){
                play1.push(4);

            }else if($(this).attr('id') === 'midMid'){
                play1.push(5);

            }else if($(this).attr('id') === 'midRight'){
                play1.push(6);

            }else if($(this).attr('id') === 'lowLeft'){
                play1.push(7);

            }else if($(this).attr('id') === 'lowMid'){
                play1.push(8);

            }else if($(this).attr('id') === 'lowRight'){
                play1.push(9);

            }

            //add player piece to gameboard
            $(this).append("<p  class='filled' style='margin:0 auto; margin-bottom:0;' >O</p>");
                //switch players
                player1=0;
                player2=1;

                //check for winning numbers in player array
                look(win,play1);

                //if player 2's turn
            } else if(player2===1 && spaceChild[0] === undefined){

                if($(this).attr('id') === 'upLeft'){
                    play2.push(1);

                }else if($(this).attr('id') === 'upMid'){
                    play2.push(2);

                }else if($(this).attr('id') === 'upRight'){
                    play2.push(3);

                }else if($(this).attr('id') === 'midLeft'){
                    play2.push(4);

                }else if($(this).attr('id') === 'midMid'){
                    play2.push(5);

                }else if($(this).attr('id') === 'midRight'){
                    play2.push(6);

                }else if($(this).attr('id') === 'lowLeft'){
                    play2.push(7);

                }else if($(this).attr('id') === 'lowMid'){
                    play2.push(8);

                }else if($(this).attr('id') === 'lowRight'){
                    play2.push(9);

                }

                $(this).append("<p  class='filled'style='margin:0 auto; margin-bottom:0;'>X</p>");
                player1=1;
                player2=0;

                look(win,play2);
            }

        });//$('td')





};


function onePlayer(){

    if(player1===1 ){

    $('td').on('click',function(){

    //Monitor if a space has already been filled.
        var id = $(this).attr('id');

        var space = document.getElementById(id);

        var spaceChild = space.children;


        //Add cell position to player array based on grid number.



        if(spaceChild[0] === undefined){
            if($(this).attr('id') === 'upLeft'){
            play1.push(1);

           }else if($(this).attr('id') === 'upMid'){
            play1.push(2);

            }else if($(this).attr('id') === 'upRight'){
            play1.push(3);

            }else if($(this).attr('id') === 'midLeft'){
            play1.push(4);

            }else if($(this).attr('id') === 'midMid'){
            play1.push(5);

            }else if($(this).attr('id') === 'midRight'){
            play1.push(6);

            }else if($(this).attr('id') === 'lowLeft'){
            play1.push(7);

            }else if($(this).attr('id') === 'lowMid'){
            play1.push(8);

            }else if($(this).attr('id') === 'lowRight'){
            play1.push(9);

            }


            //add player piece to gameboard
            $(this).append("<p  class='filled' style='margin:0 auto; margin-bottom:0;' >O</p>");
            //switch players
            player1=0;
            computer=1;

            //check for winning numbers in player array
            look(win,play1);

            onePlayer();
            //player1===1 && spaceChild[0] === undefined*/
        }
        });

    }
        //computers turn. Need to code AI portion.
        else if(computer===1 ){


            var compThink =setTimeout(function(){
                getId();
            }, 3000);

            //getId();
            player1 = 1;
            computer = 0;



        }




}




/* ======Functions=====*/


//Fxn to check if player arrays have winning numbers. Checks after every turn.
var look = function(win,p1){

    for(var i=1; i<win.length;i++){
           var tempArr = [];
              for(var x=0; x<win[i].length; x++){
                   tempArr[x] = (p1.indexOf(win[i][x]));
               }

        if(tempArr[0] !== -1 && tempArr[1] !== -1 && tempArr[2] !== -1){


        if(p1[0] === 'Player 1'){


            $('.winOne').css('visibility', 'visible');
            var restartGame = setTimeout(function(){
                    $('.filled').remove();
                    //$('.winner').remove();
                    play1 = ['Player 1'];
                    play2 = ['Player 2'];
                    $('#play1').css('background-color','#E7E7E7');
                    $('#play2').css('background-color','#E7E7E7');
                    $('.winner1').css('visibility', 'hidden');


            },5000);


        }else if(p1[0] === 'Player 2' /*|| p1[0] === 'Computer'*/){
        /*if(p1[0] === 'Computer'){
            $('.winTwo').text("Computer Wins!");
        }*/

           $('.winOne').removeClass('winner1');
           $('.winOne').addClass('winner2');
           $('.winTwo').removeClass('winner2');
           restartGame = setTimeout(function(){
                    $('.filled').remove();

                    play1 = ['Player 1'];
                    play2 = ['Player 2'];
                    $('#play1').css('background-color','#E7E7E7');
                    $('#play2').css('background-color','#E7E7E7');
                    $('.winOne').removeClass('winner2');
                    $('.winOne').addClass('winner1');
                    $('.winTwo').addClass('winner2');

                },5000);


        }


    }
    }
};



/*function randomNumberAI(){
     return Math.floor(Math.random(1,10) * (10-1) +1);
};*/



var getId = function(){
        //Array of all IDs on the page
        $('[id]').each(function(){

            IDs.push($(this).attr('id'));
        });
        //Remove last four IDs=> they are not spaces but buttons
        IDs.pop();
        IDs.pop();
        IDs.pop();
        IDs.pop();
        //Cycle through all spaces to check if they are occupied
        for(var i = 0; i<9; i++){
            var spaceId =IDs[i];

            var content = document.getElementById(IDs[i]);
            var contentChild = content.children;

            //If not occupied, ie nothing was appended therefore it is undefined.
            if(contentChild[0]=== undefined  ){

                //if space is undefined(empty) then fill the space.
                $(content).append("<p  class='filled' style='margin:0 auto; margin-bottom:0;' >X</p>");
                //Array of computer filled spaces as they are filled.
                if($(content).attr('id') === 'upLeft'){
                    comp.push(1);

                }else if($(content).attr('id') === 'upMid'){
                    comp.push(2);

                }else if($(content).attr('id') === 'upRight'){
                    comp.push(3);

                }else if($(content).attr('id') === 'midLeft'){
                    comp.push(4);

                }else if($(content).attr('id') === 'midMid'){
                    comp.push(5);

                }else if($(content).attr('id') === 'midRight'){
                    comp.push(6);

                }else if($(content).attr('id') === 'lowLeft'){
                    play1.push(7);

                }else if($(content).attr('id') === 'lowMid'){
                    comp.push(8);

                }else if($(content).attr('id') === 'lowRight'){
                    comp.push(9);

                }

                //switch to player one.
                player1=1;
                computer=0;
                //Run function to determine if there is a winner at this point.
                look(win,comp);
                //Switch to other player
                onePlayer();
                IDs = [];
                //Get out of the loop once a space is filled.
                break;

            }

        }

        // onePlayer();



};






});
