let resultado 
let n 
let res

class Lista{
    constructor() {
        this.arrayCalculos = [ ];
    }

    inserir(num) {
        let lista = {}

        const limite = 6;
        let res = document.getElementById('resultado').value;
        if(res.length > limite){
            res.value = res.slice(0,limite)
        }
        lista.numeroL = document.getElementById('resultado').value;
        let numero = document.getElementById('resultado').innerHTML;
        res = document.getElementById('resultado').innerHTML = numero + num;

        return lista;
    }

    limpaTela(){
        document.getElementById('resultado').innerHTML = "";
    }
    apagar(){
        let restoN = document.getElementById('resultado').innerHTML;
        document.getElementById('resultado').innerHTML = restoN.substring(0, restoN.length - 1)
    }
    
    calcular(){
        let dadosCalculo = document.getElementById('resultado').innerHTML;
        if (dadosCalculo){
            resultado = eval(dadosCalculo);
            document.getElementById('resultado').innerHTML = resultado;
            let data = new Date()

            let Dhist = dadosCalculo +"="+ resultado +" "+ data.toLocaleString();

            this.arrayCalculos.push(Dhist);
        
            let tbody = document.getElementById('historico-lista')
            tbody.innerText = '';
            
            for (let i = 0; i < 4; i++){

                let linha  = tbody.insertRow();

                let data = linha.insertCell();
                data.innerText = this.arrayCalculos[i]
           
            }
            
        }
        else{
            document.getElementById('resultado').innerHTML = "indefinido!!";
        }
        return resultado;  
    
    } 
    
}

let lista = new Lista();