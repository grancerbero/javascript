let counter = 0;
function count(){
    counter += 1;
    alert (counter);

}

function count1(){
    
    document.querySelector("h1").innerHTML = "Goodbye!";
}


function count2(){
    counter ++;
    document.querySelector("h1").innerHTML = counter;

    if ( counter % 10 === 0 ) {
        alert (`Counter is now ${counter} ojo aqui colocar ctrl alt llave derecha  space para OBTRENER BACKTICK`); 
        
    }
}
document.addEventListener('DOMContentLoaded', function (){  
    document.querySelector('button').addEventListener('click', count2)
} )
