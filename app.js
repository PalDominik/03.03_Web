function hello()
{
    
    document.title = "Függvények";
}

function konzolHello(nev)
{
    console.log(`Helló ${nev}`)
}

function mennyiAzIdo()
{
    const d = new Date();
    return d;
}

function teszt(ut)
{
    if(ut)
    {
        return "jobbra";
    
    }else{
        return "balra";
    }
}

function koszones(name,type)
{
    if(type == null)
    {
        typeContent = "Üdvözlöm kedves";
    }
    else if(type == "kedves")
    {
        typeContent = "Szép napot kedves"
    }
    else if(type == "durva")
    {
        typeContent = "Na te is itt vagy "
    }
    let content = `${typeContent} ${name}`;
    document.getElementById("udvariasVagyDurva").textContent = content;

}

function optimalizaltKoszones(name,type)
{
    const greetings = {
        durva: "Csákány csotány",
        kedves:"Üdvözlöm kedves"
    };
    const typeContent = greetings[type] ?? "Szervusz kedves";
    document.getElementById("udvariasVagyDurva").textContent = 
    `${typeContent} ${name}`;
}

function alapÉrték(a,b=10)
{
    return a + b;
}

function szamok(...args)
{
    let sum = 0;
    for(let arg of args) sum += arg;
    return sum;
}

function init()
{
    hello();
    konzolHello("Kattalin");
    document.getElementById("pontosIdo").textContent = mennyiAzIdo();
    console.log(`Merre mennyek? ${teszt(true)}`);
    // koszones("Jullianna","durva");
    optimalizaltKoszones("Gréta","durva");
    console.log(alapÉrték(5));
    document.getElementById("osszegzes").textContent = szamok(8,67,13,32,10,21);
    let a = 10;
    let b = 5;
    let c = 10;
    let d = 11;
    let szorzat = function(x,y){return x*y;}
    console.log(`${a} és ${b} szorzata: ${szorzat(a,b)}`);

    let nagyobb = (x,y) => Math.max(x,y) ?? "Egyenlő";
    console.log(`Két szám közül a nagyobb: ${nagyobb(d,b)}`)
}


document.addEventListener("DOMContentLoaded",init);