function sorteio(){

    document.getElementById("audio-control").play();
    var NUMEROS = [0,1,2,3,4,5,6,7,8,9];
    let casaAtual = 0;
    let atual = 0;
    
    let numFinal = "33164875819";
    let nome = "Bruno Bastos";
    
    let casa1= setInterval(()=>trocaNumero(document.getElementById("casa-0")), 100);
    let casa2= setInterval(()=>trocaNumero(document.getElementById("casa-1")), 100);
    let casa3= setInterval(()=>trocaNumero(document.getElementById("casa-2")), 100);
    let casa4= setInterval(()=>trocaNumero(document.getElementById("casa-3")), 100);
    let casa5= setInterval(()=>trocaNumero(document.getElementById("casa-4")), 100);
    let casa6= setInterval(()=>trocaNumero(document.getElementById("casa-5")), 100);
    let casa7= setInterval(()=>trocaNumero(document.getElementById("casa-6")), 100);
    let casa8= setInterval(()=>trocaNumero(document.getElementById("casa-7")), 100);
    let casa9= setInterval(()=>trocaNumero(document.getElementById("casa-8")), 100);
    let casa10= setInterval(()=>trocaNumero(document.getElementById("casa-9")), 100);
    let casa11= setInterval(()=>trocaNumero(document.getElementById("casa-10")), 100);
    
    let casas = [casa1, casa2, casa3, casa4, casa5, casa6, casa7, casa8, casa9, casa10, casa11];
    setInterval(trocaCasa, 1000);
    
    function trocaCasa(){
        let casa = getCasa();
        clearInterval(casas[casaAtual]);
        casa.innerHTML = numFinal.charAt(casaAtual);
        casaAtual++;
        if(casaAtual == casas.length){
            document.getElementById("vencedor").innerHTML = nome;
        }
    }
    
    function trocaNumero(e)
    {
        let casa = e;
        nextNum(casa);
        casa.innerHTML = NUMEROS[atual];
    }
    
    function getCasa(){
    
        return document.getElementById("casa-"+casaAtual);
    }
    
    function nextNum(casa){
        if(atual == 9){
            atual = 0;
        }else{
            atual++;
        }
    }    
}
