const botoes = document.querySelectorAll(".carrosel_botao");
const cards = document.querySelectorAll(".carrosel_cards > div:not(.carrosel_botao)");

botoes.forEach((botao, index) => {
    botao.addEventListener("click", () => {
        cards.forEach((card, i) => {
            if (i === index) {
                card.classList.remove("carrosel_card_desativo");
                card.classList.add("carrosel_card_ativo");
            } else {
                card.classList.remove("carrosel_card_ativo");
                card.classList.add("carrosel_card_desativo");
            }
        });
    });
});
