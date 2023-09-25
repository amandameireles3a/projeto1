let musicas = [
    {titulo:'5 Regras', artista:'Jorge & Mateus', src:'musicas/5Regras.mp3', img:'imagens/5regras.jfif'},
    {titulo:'Seu Astral', artista:'Jorge & Mateus', src:'musicas/Seu Astral.mp3', img:'imagens/astral.jpg'},
    {titulo:'Duas Metades', artista:'Jorge & Mateus', src:'musicas/Duas Metades.mp3', img:'imagens/duasmetades.jpg'},
    {titulo:'Dói', artista:'Jorge & Mateus', src:'musicas/Dói.mp3', img:'imagens/doi.jpg'},
    {titulo:'Louca de Saudade', artista:'Jorge & Mateus', src:'musicas/Louca de Saudade.mp3', img:'imagens/maxresdefault.jpg'},
    {titulo:'Namorando Com Saudade', artista:'Jorge & Mateus', src:'musicas/Namorando Com Saudade.mp3', img:'imagens/namorando.jpg'},
    {titulo:'Tá Escrito Em Meu Olhar', artista:'Jorge & Mateus', src:'musicas/Tá Escrito Em Meu Olhar.mp3', img:'imagens/olhar.jpg'},
    {titulo:'Propaganda', artista:'Jorge & Mateus', src:'musicas/Propaganda.mp3', img:'imagens/propaganda.jpg'},
    {titulo:'Todo Seu', artista:'Jorge & Mateus', src:'musicas/Todo Seu.mp3', img:'imagens/todoseu.jpg'},
    {titulo:'Troca', artista:'Jorge & Mateus', src:'musicas/Troca.mp3', img:'imagens/troca.jpg'},
];  

let musica = document.querySelector('audio');
let indexMusica = 0;

let duracaoMusica = document.querySelector('.fim');
let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i');

renderizarMusica(indexMusica);

// Eventos
document.querySelector('.botao-play').addEventListener('click', tocarMusica);

document.querySelector('.botao-pause').addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate', atualizarBarra);

document.querySelector('.anterior').addEventListener('click', () => {
    indexMusica--;
    if (indexMusica < 0) {
        indexMusica = 2;
    }
    renderizarMusica(indexMusica);
});

document.querySelector('.proxima').addEventListener('click', () => {
    indexMusica++;
    if (indexMusica > 2){
        indexMusica = 0;
    }
    renderizarMusica(indexMusica);
});

// Funções
function renderizarMusica(index){
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        imagem.src = musicas[index].img;
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
    });
}

function tocarMusica(){
    musica.play();
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';
}

function pausarMusica(){
    musica.pause();
    document.querySelector('.botao-pause').style.display = 'none';
    document.querySelector('.botao-play').style.display = 'block';
}

function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
}

function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10){
        campoSegundos = '0' + campoSegundos;
    }

    return campoMinutos+':'+campoSegundos;
}
