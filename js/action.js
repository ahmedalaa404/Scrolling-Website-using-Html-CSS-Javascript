let stars = document.getElementById("stars");

let mountain3 = document.getElementById("mountain3");

let moon = document.getElementById("moon");

let nouvile = document.getElementById("nouvile");

let mountain4 = document.getElementById("mountain4");

let river = document.getElementById("river");

let boat = document.getElementById("boat");
let mainBg= document.querySelector('.main');

window.onscroll=function()
{
    let value=scrollY;
    stars.style.left=value+'px';
    moon.style.top=(value*3)+'px';
    mountain3.style.top=(value*2)+'px';
    mountain4.style.top=(value*1.5)+'px';
    river.style.top=(value)+'px';
    boat.style.left=(value*2)+'px';
    nouvile.style.fontSize=value+'px';
    if(value>=80)
    {
        nouvile.style.fontSize=80+'px';
        nouvile.style.position='fixed';
    }
    if(value>=470)
    {
        nouvile.style.display='none'
    }

    if(value>=185)
    {
        mainBg.style.backgroundColor="#2475bb5e";
    }

    else
    {
        mainBg.style.backgroundColor="transparent";
    }

    if(value>=300)
    {
        mainBg.style.backgroundColor="#1364abc7";
    }

    
}
