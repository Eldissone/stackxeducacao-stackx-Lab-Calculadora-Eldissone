let resultado 

class Lista{
    constructor() {
        this.arrayCalculos = [];
    }
    
    calcular(){
        let dadosCalculo = document.getElementById('resultado').innerHTML;
        if (dadosCalculo){
            resultado = eval(dadosCalculo);
            document.getElementById('resultado').innerHTML = resultado;
            let data = new Date()

            let Dhist = dadosCalculo +"="+ resultado +" "+ data.toLocaleString();

            this.arrayCalculos.push(Dhist);
            this.id++;
            let tbody = document.getElementById('historico-lista')
            tbody.innerText = '';
            for (let i = 0; i < this.arrayCalculos.length; i++){

                let linha  = tbody.insertRow();

                let data = linha.insertCell();
                data.innerText = this.arrayCalculos[i]
           
            }
            
        } else{
            document.getElementById('resultado').innerHTML = "indefinido!!";
        }
        return resultado;  
        
    }
    
    inserir(num) {
    let lista = {}
       
        lista.numeroL = document.getElementById('resultado').value;
        let numero = document.getElementById('resultado').innerHTML;
        document.getElementById('resultado').innerHTML = numero + num;
        
        
        return lista;
    }
    
    limpaTela(){
        document.getElementById('resultado').innerHTML = "";
    }
    apagar(){
        let restoN = document.getElementById('resultado').innerHTML;
        document.getElementById('resultado').innerHTML = restoN.substring(0, restoN.length - 1)
    }
}

let lista = new Lista();