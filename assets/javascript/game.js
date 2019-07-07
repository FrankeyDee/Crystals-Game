		
	$(document).ready(function(){


        //variables
    
    
        let counter = 0;
        let wins= 0;
        let losses = 0;
    
        
    
        function randomNum(min,max){
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max-min +1)) + min;
    
        }
    
        let winNumber = randomNum(40,90);
        $("#target").html(winNumber);
    
        crystalOne= randomNum(1, 12);
        crystalTwo= randomNum(1, 12);
        crystalThree= randomNum(1, 12);
        crystalFour= randomNum(1, 12);
    
    
        function reset(){
            counter = 0;
            $("#target").html(winNumber);
            winNumber = randomNum(40,90);
            $("#playerScore").text(counter);
            crystalOne= randomNum(1, 12);
            crystalTwo= randomNum(1, 12);
            crystalThree= randomNum(1, 12);
            crystalFour= randomNum(1, 12);    
        }
            
        
        $("#gem1").on("click", function(){
            counter += crystalOne;
            WinLoose();
            $(playerScore).text(counter);
            
        });
    
        $("#gem2").on("click", function(){
            counter += crystalTwo;
            WinLoose();
            $(playerScore).text(counter);
            
    
        });
    
        $("#gem3").on("click", function(){
            counter += crystalThree;
            WinLoose();
            $(playerScore).text(counter);
            
    
        });
    
        $("#gem4").on("click", function(){
            counter += crystalFour;
            WinLoose();
            $(playerScore).text(counter);
            
    
        });
    
        function WinLoose (){
    
        if (counter === winNumber){
            wins += 1;
            document.querySelector('.results').innerHTML = 'Winner!';
            $(win).text(wins);
            reset();
    
        } else if(counter > winNumber){
            losses += 1;
            document.querySelector('.results').innerHTML = 'Bummer!';
            $(loss).text(losses);
            reset();
        }
        
    }
        
    });
    
    
    
        
    
    