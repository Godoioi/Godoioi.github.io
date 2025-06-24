// ATENÇÃO: Coloque a data de início do namoro aqui!
// Formato: Ano, Mês (lembre-se que Mês começa em 0, então Maio é 4), Dia, Hora, Minuto, Segundo
const dataInicioNamoro = new Date(2025, 4, 24, 20, 30, 8);

function atualizarContador() {
    const agora = new Date();
    const diferenca = agora - dataInicioNamoro;

    // Cálculos
    const segundosTotal = Math.floor(diferenca / 1000);
    const minutosTotal = Math.floor(segundosTotal / 60);
    const horasTotal = Math.floor(minutosTotal / 60);
    
    const dias = Math.floor(horasTotal / 24);
    const horas = horasTotal % 24;
    const minutos = minutosTotal % 60;
    const segundos = segundosTotal % 60;

    // Função para adicionar um zero à esquerda se o número for menor que 10
    const pad = (num) => String(num).padStart(2, '0');

    // Atualiza o HTML com os valores
    document.getElementById('dias').innerText = pad(dias);
    document.getElementById('horas').innerText = pad(horas);
    document.getElementById('minutos').innerText = pad(minutos);
    document.getElementById('segundos').innerText = pad(segundos);
}

// Faz o contador rodar a cada segundo
setInterval(atualizarContador, 1000);

// Roda a função uma vez logo ao carregar a página
atualizarContador();