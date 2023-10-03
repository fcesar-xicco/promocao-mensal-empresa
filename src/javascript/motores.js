
//-----------------------------------------------MOTORES
let produtosMotores = [
    {nome:'Comp. Electrolux 1/4 R134 ECLA002 110V ',vista:375.90 , prazo:419.00 },//0
    {nome:'Comp. Electrolux 1/4 R134 ECLA003 220V ',vista:375.90, prazo:419.00 },//1
    {nome:'Comp. EMBRACO 1/4 R134 110V EMR80HLR',vista:369.90 ,prazo:415.00 },//2
    {nome:'Comp. EMBRACO 1/4 R134 220V EMR80HLR',vista:369.90 , prazo:415.00 },//3

    {nome:'Comp. Tecumseh 1/4 R134 127V TA1380Y',vista:389.90 , prazo:420.90 },//4
    {nome:'Comp. Tecumseh 1/4 R134 220V TA1380Y',vista:389.90 , prazo:420.90 },//5

    
]




motor.forEach((mot)=>{
    mot.addEventListener("click",() =>{
      
      if( mot.classList.contains("220v")){
       // descricao.style.color = 'red'
       descricao.style.background =  '#f7b9b9'
      }else{
        descricao.style.color = 'black'
        descricao.style.background = 'white'
      }
        descricao.innerText = `${produtosMotores[mot.value]['nome']}
        a prazo: ${produtosMotores[mot.value]['prazo'].toFixed(2)}
        à vista: ${produtosMotores[mot.value]['vista'].toFixed(2)}
        `
        if(mot.value == 0 ||mot.value == 1 ||mot.value == 4 || mot.value == 5){
          descricao.innerText += `1 ano de garantia!!
          `
        }
        descricao.innerText +=`
        Promoção vem verão!!
        validade até ${datafinal}
        `
    })
  
  })