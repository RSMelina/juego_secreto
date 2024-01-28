//en JS las funciones pueden ser llamadas arriba o abajo, ejemplo "numeroSecreto" que esta siendo llamada arriba
//y las de "asignarTextoElemento" que están siendo llamadas abajo
let numeroSecreto= 0;

let intentos=0;

let listaNumerosSorteados=[];

let numMax=10;
// let parrafo= document.querySelector('p');
// parrafo.innerHTML='Indica un número del 1 al 10';

function asignarTextoElemento(elemento,texto){
    let elementoHTML= document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
    return;
}
function verificarIntento(){
    let numeroDeUusuario= parseInt(document.getElementById('valorUsuario').value);    
    //el triple "===" es para comparar el dato y el tipo de dato, si ambos son 5 pero uno es de tipo string dará Falso
    //console.log(intentos);
    if(numeroDeUusuario===numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos ===1) ? 'vez':'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
        //El usuario no acertó.
        if(numeroDeUusuario>numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor');
        }else{
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value='';
}

function generarNumeroSecreto() {
    let numGenerado= Math.floor(Math.random()*numMax)+1;
    console.log(numGenerado);
    if (listaNumerosSorteados.length==numMax){
        asignarTextoElemento('p','ya se sortearon todos los números posibles');
    }else{
        if(listaNumerosSorteados.includes(numGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numGenerado);
            console.log(listaNumerosSorteados);
            return numGenerado;
        } 
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto:)');
    asignarTextoElemento('p',`Indica un número del 1 al ${numMax}`);
    numeroSecreto= generarNumeroSecreto();
    intentos=1;
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números, se creo función de arriba para solo ponerla aquí
    //Generar número aleatorio
    //Inicializar el número de intentos
    condicionesIniciales();
    //Deshabilitar botón "nuevo juego"
    document.getElementById('reiniciar').setAttribute('disabled','true');
}

//Estas dos funciones se pasaron a la funciòn mensajesIniciales que esta arriba, por lo que ahora las puedes llamar 
//por esa misma y ya no usar estas 2 líneas:
//asignarTextoElemento('h1','Juego del número secreto:)');
//asignarTextoElemento('p','Indica un número del 1 al 100*');
condicionesIniciales();