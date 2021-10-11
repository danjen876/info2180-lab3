window.onload = function() 
{
    
    //Variables
    var x, y;
    var temp;
    var twoCases = ["X", "O"];
    var finished = false; //flag
    var board = document.querySelector("#board");
    var squares = board.children;

    //Loading page and styling board
    for (x=0; x<squares.length; x++) 
    {
        //Adding each square
        squares[x].classList.add("square");

        //What happens when you hover over
        squares[x].addEventListener("mouseover", function()
        {
            this.classList.add("hover");
        });

        //What happens when your mouse leaves the square
        squares[x].addEventListener("mouseout", function()
        {
            this.classList.remove("hover");
        });

        //What happens when you click
        squares[x].addEventListener("click", function()
        {
            //Adding the current letter
            this.classList.add(twoCases[0]);
            this.textContent = twoCases[0];

            //Swap cases for the next click
            temp = twoCases[0];
            twoCases[0] = twoCases[1];
            twoCases[1] = temp;

            //Creating the winning combination set
            var squareSet = [squares[0].textContent + squares[1].textContent + squares[2].textContent, //horizontal wins
                            squares[3].textContent + squares[4].textContent + squares[5].textContent,
                            squares[6].textContent + squares[7].textContent + squares[8].textContent,

                            squares[0].textContent + squares[3].textContent + squares[6].textContent, //vertical wins
                            squares[1].textContent + squares[4].textContent + squares[7].textContent,
                            squares[2].textContent + squares[5].textContent + squares[8].textContent,

                            squares[2].textContent + squares[4].textContent + squares[6].textContent, //diagonal wins
                            squares[0].textContent + squares[4].textContent + squares[8].textContent];

            //Checking to see if anyone has won yet
            for (y=0; y<squareSet.length; y++)
            {
                if((squareSet[y] == "XXX") || (squareSet[y] == "OOO")) //if we have 3 in a row
                {
                    winstatus = document.getElementById("status");
                    winstatus.classList.add("you-won");
                    winstatus.textContent = "Great job player " + twoCases[1] + "! You won!"; //send congratulatory message
                    finished = true; //flag gets changed for finishing the game
                }
            }

        });

        //Resetting the game
        document.querySelector("button").addEventListener("click", function()
        {
            //Reloading the entire page
            window.location.reload();
        });
    }
}