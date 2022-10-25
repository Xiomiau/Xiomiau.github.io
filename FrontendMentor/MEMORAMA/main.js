let tarjeta1 = null;
let tarjeta2 = null;
let tarjetasDestapadas=0;
let primerResultado =null;
let segundoResulltado = null;
let movimientos = 0;
let aciertos=0;
let temporizador=false;
let timer =30;
let reiniciar = null;
let timerInicial = timer;


let mostrasMovimientos = document.getElementById('movimientos');
let mostrarAciertos = document.getElementById("Aciertos");
 let mostratTiempo = document.getElementById('t-restante');

let numeros = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
numeros = numeros.sort(()=>{return Math.random()-0.5});
console.log(numeros);

function contarTiempo(){
    reiniciar=setInterval(()=>{timer--
    mostratTiempo.innerHTML = `Tiempo: ${timer} segundos`;
    if(timer==0){
        clearInterval(reiniciar);
        bloquearTarjetas();
    }
    }, 1000)

}


function bloquearTarjetas(){
    for (let i =0; i<=15; i++){
        let tarjetaBloqueada = document.getElementById(i);
        tarjetaBloqueada.innerHTML= numeros[i];
        tarjetaBloqueada.disabled = true;
    }
}
    

    



function destapar(id){
    if(temporizador==false){
        contarTiempo();
        temporizador =true;
    }
tarjetasDestapadas++;
console.log(tarjetasDestapadas);
if(tarjetasDestapadas==1){
    tarjeta1=document.getElementById(id);
    primerResultado = numeros[id]
    tarjeta1.innerHTML = primerResultado;
    tarjeta1.disabled = true;

} 
else if(tarjetasDestapadas==2){
    tarjeta2 = document.getElementById(id);
    segundoResulltado = numeros[id];
    tarjeta2.innerHTML = segundoResulltado;
    tarjeta2.disabled = true;
    movimientos++;
    mostrasMovimientos.innerHTML= ` Movimientos ${movimientos}`;
    if(primerResultado==segundoResulltado){
        tarjetasDestapadas=0;

        aciertos++;
        mostrarAciertos.innerHTML = `Aciertos: ${aciertos}`;

        if(aciertos==8){
            clearInterval(reiniciar);
            mostrarAciertos.innerHTML = `Aciertos: ${aciertos} 😱`;
            mostratTiempo.innerHTML= `Fantástico! Solo te demoraste:   <br>  ${timerInicial-timer} segundos!`
            mostrasMovimientos.innerHTML = ` Movimientos: ${movimientos} 😱🤩`;
        }
    }
    else{
        setTimeout(()=>{
            tarjeta1.innerHTML = ' ';
            tarjeta2.innerHTML = ' ';
            tarjeta1.disabled= false;
            tarjeta2.disabled= false;
            tarjetasDestapadas=0;
        },700);
    }
}

}


