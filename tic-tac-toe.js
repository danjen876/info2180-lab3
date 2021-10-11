window.onload = function() 
{
    
    //LOADING PAGE AND STYLING BOARD
    var x;
    var temp;
    var twoCases = ["X", "O"];
    var finished = false; //flag

    var board = document.querySelector("#board");
    var squares = board.children;

    for (x=0; x<squares.length; x++) 
    {
         //adding each square
        squares[x].classList.add("square");

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
        });

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
    }
}