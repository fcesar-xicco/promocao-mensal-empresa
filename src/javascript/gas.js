//--------------------------------------------------GAS


let produtosGas = [
    {nome:'GAS R22 13,6KG BOTIJA',vista:535.00 , prazo:579.00},//0
    {nome:'GAS R404 10,9KG BOTIJA',vista:489.90 , prazo:525.00},//1
    {nome:'GAS R404 10,9KG BOTIJA RLX',vista:482.00, prazo:510.00},//2
    {nome:'GAS R410 11,34K BOTIJA',vista:499.90 , prazo:538.90},//3
    {nome:'GAS R410A 11,3KG BOTIJA RLX',vista:399.90, prazo:445.00},//4
    {nome:'GAS R134A 13,6KG BOTIJA',vista:395.90 , prazo:425.00},//5
    {nome:'GAS R134 13,6KG BOTIJA RLX',vista:329.90 , prazo:379.00},//6
    
    {nome:'GAS MACARICO MAP EOS 400G',vista: 27.90, prazo:31.00, extra1: 28.90},//7
    {nome:'GAS R134A 750G LATA ',vista:51.00 , prazo:55.00, extra1:43.90},//8
    {nome:'GAS R134A 750G LATA RLX ',vista: 47.90, prazo:52.00, extra1: 43.90},//9
    {nome:'GAS R410A 600G LATA RLX',vista: 68.90, prazo:72.90, extra1:64.90},//10  
    
    

]


gas.forEach((gas)=>{
    gas.addEventListener("click",() =>{
      
  
        descricao.style.color = 'black'
        descricao.style.background = 'white'
      
        descricao.innerText = `${produtosGas[gas.value]['nome']}
        a prazo: ${produtosGas[gas.value]['prazo'].toFixed(2)}
        à vista: ${produtosGas[gas.value]['vista'].toFixed(2)}
        `
        if (gas.value== 7 || gas.value == 8 || gas.value == 9 || gas.value == 10){
            descricao.innerText += `Acima de 12 unidades a vista: ${produtosGas[gas.value]['extra1']} cada
         `
        }

        descricao.innerText += `
        Promoção vem verão!!
        validade até ${datafinal}
        `
    })
  
  })
  