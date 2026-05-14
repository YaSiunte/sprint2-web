alert("Bem-vindo ao Jovi Smart Camera!");

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

async function capturar(){

    let video = document.getElementById("camera");
    let canvas = document.getElementById("canvas");
    let contexto = canvas.getContext("2d");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    contexto.drawImage(video, 0, 0);

    let resultado = document.getElementById("resultado");

    resultado.innerHTML =
    "Analisando imagem...";

    const reconhecimento = await Tesseract.recognize(
        canvas,
        "eng"
    );

    let texto = reconhecimento.data.text;

    if(texto.length < 5){
        resultado.innerHTML =
        "Melhore a iluminação ou aproxime a câmera.";
    }

    else{
        resultado.innerHTML =
        "Imagem capturada com ótima qualidade.";
    }
}

function entrar(){
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    if(email == "" || senha == ""){
        alert("Preencha todos os campos!");
    }
    else{   
        alert("Login realizado com sucesso!");
    }
}