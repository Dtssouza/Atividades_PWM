console.log("Olá");

const titulo = document.getElementById("titulo");
const btComfirmar= document.getElementById("btComfirmar");
const somar = document.getElementById("somar");
var soma = 0;

var a ,b;

a = 10;
b = 15;


const handleTitleMouseOver = () => {
    titulo.innerHTML = "<br>Danilo's Fofocas Blog";
}
 
titulo.onmouseover = handleTitleMouseOver;

somar.onclick= () =>{
    const somar = confirm(`Valor da soma : ${a +b }`)
}

btComfirmar.onclick = () =>{
    const comfirmacao = confirm("fudeo");
    titulo.innerHTML = `<br/> comfirmacao :  ${comfirmacao}`;
}