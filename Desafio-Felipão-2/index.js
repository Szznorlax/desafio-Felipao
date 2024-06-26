const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ranking(wins, loses) {
    const MMR = wins - loses;
    let Rank;

    if (wins < 10) Rank = "Ferro";
    else if (wins <= 20) Rank = "Bronze";
    else if (wins <= 50) Rank = "Prata";
    else if (wins <= 80) Rank = "Ouro";
    else if (wins <= 90) Rank = "Diamante";
    else if (wins <= 100) Rank = "Lendário";
    else Rank = "Imortal";

    return { MMR, Rank };
}

function Matches() {
    rl.question("Digite a quantidade de vitórias: ", (wins) => {
        rl.question("Digite a quantidade de derrotas: ", (loses) => {
            const resultado = ranking(parseInt(wins, 10), parseInt(loses, 10));
            console.log(`O Herói tem saldo de ${resultado.MMR} está no nível de ${resultado.Rank}!`);

            rl.question("Você quer inserir outro jogador? (sim/não): ", (player) => {
                if (player.toLowerCase() === 'sim') {
                    Matches(); 
                } else {
                    rl.close(); 
                }
            });
        });
    });
}

Matches(); 