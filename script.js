function inserir(num) {
    let numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}
function limpaTela(){
    document.getElementById('resultado').innerHTML = "";
}
function apagar(){
    let restoN = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = restoN.substring(0, restoN.length - 1)
}

function calcular(li){
    let resultado = document.getElementById('resultado').innerHTML;

    if (resultado){
        document.getElementById('resultado').innerHTML = eval(resultado);
        let lista = []
        lista.push(resultado +"="+ eval(resultado))
            let data = new Date()
        
        document.getElementById('historico-lista').innerHTML = lista +" "+ data.toLocaleString();
             
    }
    else{
        document.getElementById('resultado').innerHTML = "indefinido!!";
    }
    return 0;
}

