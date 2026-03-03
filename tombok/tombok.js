let tomb = [];

function tombfeltoltes()
{
    for(let index = 0; index < 10 ;index++)
    {
        tomb[index] = Math.round(Math.random()*9)+1;
    }
}



function init()
{
    tombfeltoltes();
    console.log(tomb);
}

document.addEventListener("DOMContentLoaded",init);