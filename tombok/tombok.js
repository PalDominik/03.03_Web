let tomb = [];

function tombfeltoltes()
{
    for(let index = 0; index < 10 ;index++)
    {
        tomb[index] = Math.round(Math.random()*9)+1;
    }
}


function tombokKiiratasa()
{
    let elemekVesszovelTagolva = "";
    tomb.forEach(elem => {
            elemekVesszovelTagolva +=elem + ", "; 
    });
    document.getElementById("tombok").textContent = elemekVesszovelTagolva;

}

function tombosszegzo()
{
    let sum = 0;
    tomb.forEach(elem => {
        sum += elem;
    });
    document.getElementById("osszegzo").textContent = `A tömb összege: ${sum} `;
}

function tombatlag()
{
    let sum = tombosszegzo();
    let index = tomb.length;
    document.getElementById("atlag").textContent = `A tömb átlaga: ${sum/index}`;
}


function init()
{
    tombfeltoltes();
    // console.log(tomb);
    tombokKiiratasa();
    tombosszegzo();
    tombatlag();

}

document.addEventListener("DOMContentLoaded",init);