alert("Bem-vindo ao Jovi Vision!");

let imagens = [
    "img/slide1.png",
    "img/slide2.png",
    "img/slide3.png"
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

async function abrirCamera(){

    let video = document.getElementById("camera");

    let stream = await navigator.mediaDevices.getUserMedia({

        video:{
            facingMode:"environment"
        }

    });

    video.srcObject = stream;

}


