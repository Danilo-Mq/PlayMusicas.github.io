/*let song = document.getElementById ("icone");

function adiantar() {
    song.currentTime -= 30;
}

function voltar () {
    song.currentTime += 30;
}*/

//Index/Variavel para armazenamento das musicas e informações
let musicas = [
    {titulo: "Lil Whind - Caribe", artista: "Lil Whind", src: "./Musicas/Lil Whind - Caribe.mp3", img:"./Img/Lil Whind - Caribe.jpg"},
    {titulo: "Lil Whind - Be Jota", artista: "Lil Whind", src: "./Musicas/Lil Whind - Be Jota.mp3", img:"./Img/Lil Whind - Frente Verso.jpg"},
    {titulo: "Lil Whind - Money", artista: "Lil Whind", src: "./Musicas/Lil Whind - Money.mp3", img:"./Img/Lil Whind - Frente Verso.jpg"},
    {titulo: "Lil Whind - Piauí", artista: "Lil Whind", src: "./Musicas/Lil Whind - Piauí.mp3", img:"./Img/Lil Whind - Caribe.jpg"},
    {titulo: "Enemy", artista: "Imagine Dragons", src: "./Musicas/Imagine Dragons - Enemy.mp3", img:"./Img/Enemy - Imagine Dragons.jpg"},
    {titulo: "Bones", artista: "Imagine Dragons", src: "./Musicas/Imagine Dragons - Bones.mp3", img:"./Img/Bones.jpg"}
];

//Variaveis
let musica = document.querySelector("audio");
let indexMusica = 0;
let duracaoMusica = document.querySelector(".fim");
let imagem = document.querySelector("img");
let nomeMusica = document.querySelector (".descricao h2");
let nomeArtista = document.querySelector(".descricao i");
renderizarMusica(indexMusica);

//Eventos
document.querySelector(".botao-play").addEventListener("click", tocarmusica);
document.querySelector(".botao-pause").addEventListener("click", pausarmusica);
musica.addEventListener("timeupdate", atualizarBarra);
document.querySelector(".anterior").addEventListener("click", () =>{
    indexMusica--;
    if (indexMusica < 0) {
        indexMusica = 6;
    }
    renderizarMusica(indexMusica);
});
document.querySelector(".proximo").addEventListener("click", () =>{
    indexMusica++;
    if (indexMusica > 6) {
        indexMusica = 0;
    }
    renderizarMusica(indexMusica);
});

//Funções para todas as musicas renderizarem junto com seus nome/imagens/musicas. Referencia com as tags Index
function renderizarMusica (index){
    musica.setAttribute("src", musicas [index].src);
    musica.addEventListener("loadeddata", () => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        imagem.src = musicas[index].img;
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
})
}

//Funções para mudar o play e pause apos o click
function tocarmusica(){
    musica.play();
    document.querySelector(".botao-pause").style.display = "block";
    document.querySelector(".botao-play").style.display = "none";
}

function pausarmusica(){
    musica.pause();
    document.querySelector(".botao-play").style.display = "block";
    document.querySelector(".botao-pause").style.display = "none";
}

//Função para a atulização da barra conforme a musica toca
function atualizarBarra(){
    let barra = document.querySelector("progress");
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + "%";
    let tempoDecorrido = document.querySelector(".inicio");
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor (musica.currentTime));
}

//Conversão de Segundos para minutos
function segundosParaMinutos(segundos){
    let campoMinuto = Math.floor (segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10){
        campoSegundos = "0" + campoSegundos;
    }
    return campoMinuto + ":" + campoSegundos;
}

