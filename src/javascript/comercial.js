
//--------------------------------------------------Comercial

let produtosComercial = [
    {nome:'CONTROLADOR FULL GAUGE MT512E',vista:142.90 , prazo:159.90},//0
    {nome:"Contr. Ageon Refrigerar A102-AHB",vista:129.90, prazo:145.00},//1
    {nome:'COBRE FLEXIVEL DIVERSAS BITOLAS',vista:82.90 , prazo:86.90 ,kg10:79.90 , kg20:75.90},//2
    {nome:'Micro motor Elgin 1/40 110/220V',vista:57.90 , prazo:65.00 },//3
    {nome:'Micro motor Elgin 1/25 110/220V',vista:69.90 , prazo:76.00}//4
    
]


comercial.forEach((comercial)=>{
    comercial.addEventListener("click",() =>{
  
        descricao.style.color = 'black'
        descricao.style.background = 'white'
      

        if(comercial.value==2){

            descricao.innerText = `${produtosComercial[comercial.value]['nome']}
            prazo: ${produtosComercial[comercial.value]['prazo'].toFixed(2)}
            à vista: ${produtosComercial[comercial.value]['vista'].toFixed(2)}

            acima de 10kg: ${produtosComercial[comercial.value]['kg10'].toFixed(2)} o kg no a vista
            acima de 20kg: ${produtosComercial[comercial.value]['kg20'].toFixed(2)} o kg no a vista

            Promoção vem verão!!
            validade até ${datafinal}
            `



        }else{
            descricao.innerText = `${produtosComercial[comercial.value]['nome']}
            a prazo: ${produtosComercial[comercial.value]['prazo'].toFixed(2)}
            à vista: ${produtosComercial[comercial.value]['vista'].toFixed(2)}

            Promoção vem verão!!
            validade até ${datafinal}
            `
        }



    })
  
  })
  