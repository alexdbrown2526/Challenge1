console.log('js working');

$(document).ready(readyNow);

$(document).on('click', '#deleteButton', function () {
    $(this).parent().remove();
})

function readyNow(){
    let counter = 0;

    console.log('jq');
    $('#generateButton').on('click', function(){
    $('#newDiv').append('<button id="deleteButton">Delete</button>');
    $('#newDiv').append('<button id="swapButton">Swap</button>');
        counter++;
    $('#newDiv').append('<p id="numberClicks">' + counter + '</p>');
    $('#newDiv').css('background-color', 'red');
    $('#swapButton').click(function(){
    $('#newDiv').toggleClass('.yellow');
    
    
    
    });
      
        
        console.log('button working');

    })
}
