window.onload = function() 
{
    
    //LOADING PAGE AND STYLING BOARD
    var x;
    board = document.querySelector("#board");
    squares = board.children;
    console.log(board.children);

    for (x=0; x<squares.length; x++) 
    {
        squares[x].classList.add("square");

        squares[x].addEventListener("mouseover", function()
        {
            this.classList.add("hover");
        });

        squares[x].addEventListener("mouseout", function()
        {
            this.classList.remove("hover");
        });
    }
}