let i      = 0;
let mais   = document.getElementById('mais');
let resete = document.getElementById('resete');
let menos  = document.getElementById('menos');
let num    = document.getElementById('num');

function subtract()
{
    i--;
    num.innerHTML = `${i}`;
    color();
}


function sum()
{
    i++;
    num.innerHTML = `${i}`;
    color();
}

function empaty()
{
    
    i = 0;
    num.innerHTML = `${i}`; 
    color();
}

function color ()
{

    if(i < 0)
    num.style.color = "red";
    
    else if (i>0)
    num.style.color = "green"
    
    else
    num.style.color = "black";
}

mais.addEventListener('click', sum);
menos.addEventListener('click', subtract);
resete.addEventListener('click', empaty);

