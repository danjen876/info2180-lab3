window.onload = function() 
{
    
    //LOADING PAGE AND STYLING BOARD
    var x;
    var finished = false; //flag

    var board = document.querySelector("#board");
    var squares = board.children;

    for (x=0; x<squares.length; x++) 
    {
        squares[x].classList.add("square");
    }
}