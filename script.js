alert("Bem-vindo ao Jovi Vision!");

let imagens = [
    "",
    "",
    ""
];

let index = 0;

function trocarImagem(){
    document.getElementById("banner").src = imagens[index];
    index++;
    if(index >= imagens.length){
        index = 0;
    }
}

setInterval(trocarImagem, 3000);
setInterval(trocarImagem, 3000);