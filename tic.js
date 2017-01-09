$(function(){
    //Variables
    var player1;
    var player2;
    var comupter;
    var playerNum = 'no';
    var playerNum = 'no';
    var play1 = ['Player 1'];
    var play2 = ['Player 2'];
    var win = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],
              [3,5,7]];


    //Set number of players
    $('#play1').on('click',function(){
        $(this).css('background-color','green');
        $('#play2').css('background-color','#E7E7E7');
        playerNum='one';
        player1=1;
        
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
            console.log(playerNum);
            console.log(player1 + " " + player2);
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

                    	
                    },3000);
                    
                    
            }else if(p1[0] === 'Player 2'){
                   
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
         					
         					},3000);

                   
            }


        }
    }
};













});
