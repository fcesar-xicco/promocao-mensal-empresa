//--------------------------------------------------SUPORTES

let produtosSuportes = [
    {nome:'SUPORTE SPLIT 7-12 400MM',vista:22.90, prazo:25.90, extra1:21.90 ,extra2:23.90 },//0
    {nome:'SUPORTE SPLIT 7-12 450MM',vista:25.90, prazo:28.90, extra1:24.90 ,extra2:26.90 },//1
    {nome:'SUPORTE SPLIT 18-24 500MM',vista:33.90, prazo:36.90, extra1:32.90 ,extra2:34.90 },//2
    {nome:'SUPORTE SPLIT 30-36 600MM ',vista:52.90, prazo:55.90, extra1:51.90 ,extra2:53.90 }//3
]



suportes.forEach((suport)=>{
    suport.addEventListener("click",() =>{
      
        descricao.style.color = 'black'
        descricao.style.background = 'white'
      
        descricao.innerText = `${produtosSuportes[suport.value]['nome']}
        a prazo: ${produtosSuportes[suport.value]['prazo'].toFixed(2)}
        à vista: ${produtosSuportes[suport.value]['vista'].toFixed(2)}

        na caixa fechada a vista:${produtosSuportes[suport.value]['extra1'].toFixed(2)} cada
        na caixa fechada a prazo:${produtosSuportes[suport.value]['extra2'].toFixed(2)} cada
        
        Promoção vem verão!!
        validade até ${datafinal}      
        `
    })
  
  })