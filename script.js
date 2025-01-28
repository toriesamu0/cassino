// script.js

const symbols = ["🍒", "🍋", "🍉", "🍇", "🔔", "🦁", "💎"];
let balance = 100;
let resultDisplay = document.getElementById("result");
let spinButton = document.getElementById("spinButton");

spinButton.addEventListener("click", spinSlots);

function spinSlots() {
    if (balance <= 0) {
        resultDisplay.textContent = "Ficou mais pobre doque voce ja é, FUDIDO!";
        return;
    }

    // Subtrair o valor da aposta
    balance -= 10;
    document.getElementById("balance").textContent = `Saldo: R$ ${balance}`;

    // Ativar animação de rotação nos rolos
    const reels = document.querySelectorAll('.slot');
    reels.forEach(reel => {
        reel.classList.add('spin');
    });

    // Girar os rolos e obter resultados aleatórios
    setTimeout(() => {
        const reel1 = getRandomSymbol();
        const reel2 = getRandomSymbol();
        const reel3 = getRandomSymbol();
        
        displayResults(reel1, reel2, reel3);
        checkWin(reel1, reel2, reel3);

        // Remover a animação de rotação depois que terminar
        reels.forEach(reel => {
            reel.classList.remove('spin');
        });
    }, 1000); // Aguardar o tempo da animação antes de exibir os resultados
}

function getRandomSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function displayResults(reel1, reel2, reel3) {
    document.getElementById("reel1").textContent = reel1;
    document.getElementById("reel2").textContent = reel2;
    document.getElementById("reel3").textContent = reel3;
}

function checkWin(reel1, reel2, reel3) {
    if (reel1 === reel2 && reel2 === reel3) {
        resultDisplay.textContent = `Você ganhou! Símbolos: ${reel1} ${reel2} ${reel3}`;
        balance += 50; // Ganhou um prêmio
        document.getElementById("balance").textContent = `Saldo: R$ ${balance}`;
    } else {
        resultDisplay.textContent = `Você perdeu. Símbolos: ${reel1} ${reel2} ${reel3}`;
    }
}
