const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function Hero() {
    rl.question("Digite o nome do herói: ", (nameHero) => {
        rl.question("Digite a quantidade de experiência do herói: ", (XP) => {
            const xpHero = parseInt(XP, 10);
            let level;

            if (xpHero < 1000) level = "Ferro";
            else if (xpHero <= 2000) level = "Bronze";
            else if (xpHero <= 5000) level = "Prata";
            else if (xpHero <= 7000) level = "Ouro";
            else if (xpHero <= 8000) level = "Platina";
            else if (xpHero <= 9000) level = "Ascendente";
            else if (xpHero <= 10000) level = "Imortal";
            else level = "Radiante";

            console.log(`O Herói de nome ${nameHero} está no nível de ${level}`);

            rl.question("Você quer inserir outro herói? (sim/não): ", (newHero) => {
                if (newHero.toLowerCase() === 'sim') {
                    Hero(); 
                } else {
                    rl.close(); 
                }
            });
        });
    });
}

Hero(); 