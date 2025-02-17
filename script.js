const cards = document.querySelectorAll('.card');
// console.log(cards);

cards.forEach(card => {
    card.addEventListener('dragstart', () => {
        i = +this.closest('.div');
        console.log(i);
    });
    card.addEventListener('dragover', () => {
    });
    card.addEventListener('dragleave', () => {
    });
    card.addEventListener('drop', () => {
    });

    
});