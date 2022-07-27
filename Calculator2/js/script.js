
var valx;
var valy;
let saoIguai;

function comparaNumber(){

    var valx = window.document.getElementById('valx').value;
    var valy = window.document.getElementById('valy').value;
    
    if(valy === valx){
        comparaFirstFrase(valx,valy);
    }else{
        comparaSecondFrase(valx,valy);
    }
    
 
}

function comparaFirstFrase(valx,valy){
  
     console.log(`Os números ${valx} e ${valy} são iguais.`)

}

function comparaSecondFrase(valx,valy){
    
     const soma = parseInt(valx) + parseInt(valy) ;
    
     if(soma > 10){
        console.log('maior que 10');
     }else if(soma > 20){
        console.log('maior que 20');
     }
    console.log(`Sua soma é ${soma}`);
//     let resu20 = 'maior';
//     let resu10 = 'menor';
//     const comp10 = soma > 10;
//     const comp20 = soma > 20;

//     if(comp10){
//         resu10 = 'maior';
//     }
    
//     if(comp20){
//         resu20 = 'menor';
//     }

// return `Sua soma é ${soma}, que é ${resu10} que 10 e ${resu20} e 20`;
}


