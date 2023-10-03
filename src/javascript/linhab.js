
//--------------------------------------------------LINHA BRANCA

let produtosLinhaB = [
    {nome:'BOMBA UNIVERSAL 127/220v EMICOL',vista:18.50 , prazo:21.00, extra1:18.75 ,extra2:21.90},//0
    {nome:'BOMBA UNIVERSAL 220V EMICOL ',vista:20.90 , prazo:23.90, extra1:18.75 ,extra2:21.90},//1
    {nome:'Mecanismo EIXO LONGO W11300816 Orig.',vista: 154.90, prazo:167.90},//2
    {nome:'Mecanismo SMART MINI W11299803 Orig.',vista:125.90 , prazo:139.90},//3
    {nome:'Mecanismo EIXO CURTO W11300675 Orig.',vista: 139.90, prazo:153.00},//4
    {nome:'AGITADOR 8 BLADES W10882241 Orig',vista: 79.90, prazo:85.00},//5
    {nome:'SENSOR TEMP 2,7K W10531315 Orig.',vista:11.90, prazo:13.50},//6
    {nome:'TUBO MONDIAL THORMAC ',vista: 38.90, prazo:39.90}//7

] 





linhaB.forEach((linhaB)=>{
    linhaB.addEventListener("click",() =>{
      
  
        descricao.style.color = 'black'
        descricao.style.background = 'white'
      
        descricao.innerText = `${produtosLinhaB[linhaB.value]['nome']}
        a prazo: ${produtosLinhaB[linhaB.value]['prazo'].toFixed(2)}
        à vista: ${produtosLinhaB[linhaB.value]['vista'].toFixed(2)}
        `
        if (linhaB.value== 0 || linhaB.value == 1){
            descricao.innerText += `
            Acima de 5 bombas a vista: ${produtosLinhaB[linhaB.value]['extra1'].toFixed(2)} cada
            Acima de 5 bombas a prazo: ${produtosLinhaB[linhaB.value]['extra2'].toFixed(2)} cada
                                    `}
        descricao.innerText += `
        Promoção vem verão!!
        validade até ${datafinal}
        `
    })
  
  })