function calcularTempo() {
    const dataInicio = new Date("2022-08-06"); // Defina a data do início do namoro
    const hoje = new Date();

    let diff = hoje - dataInicio;
    let segundos = Math.floor(diff / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);
    let anos = Math.floor(dias / 365);
    let meses = Math.floor((dias % 365) / 30);
    let diasRestantes = dias % 30;
    let horasRestantes = horas % 24;
    let minutosRestantes = minutos % 60;
    let segundosRestantes = segundos % 60;

    document.getElementById("tempo").textContent =
        `${anos} anos, ${meses} meses, ${diasRestantes} dias, ${horasRestantes} horas, ${minutosRestantes} minutos e ${segundosRestantes} segundos`;
}

setInterval(calcularTempo, 1000);

function toggleMusica() {
    var musica = document.getElementById("musica");
    var botao = document.querySelector(".botao-musica");
    if (musica.paused) {
        musica.play();
        botao.textContent = "Pausar Música";
    } else {
        musica.pause();
        botao.textContent = "Tocar Música";
    }
}