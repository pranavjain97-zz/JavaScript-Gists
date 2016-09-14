var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);

var compare=function(choice1,choice2)
 { if(choice1==choice2) 
   return "The result is a tie"; 
   
   else if(choice1=="rock") 
    { if(choice2=="scissors") 
        return "You won"; 
          else 
            return "Computer won";
      if(choice2=="paper") 
        return "Computer wins"; 
          else 
            return "You win"; }
            
    
    else if(choice1=="paper") 
    { if(choice2=="scissors") 
        return "Computer wins"; 
          else 
            return "You win";
      if(choice2=="rock") 
        return "You win"; 
          else 
            return "Computer wins"; }     
            
    
    else if(choice1=="scissors") 
    { if(choice2=="paper") 
        return "You win"; 
          else 
            return "Computer wins";
      if(choice2=="rock") 
        return "Computer wins"; 
          else 
            return "you win"; }  
            
            
    
 };
 
 compare(userChoice,computerChoice);
