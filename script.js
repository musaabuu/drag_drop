const cards = document.querySelectorAll('.card');
const container = document.querySelector('.container');
const contained = document.querySelector('.contained');
// console.log(cards);

for (let card of cards) {
    card.addEventListener('dragstart', (e) => {
        let selected = e.target;
        contained.addEventListener('dragover', (e) => {
            e.preventDefault();
        });
        contained.addEventListener('drop', (e) => {
            contained.appendChild(selected);
            selected = null;
        });
        container.addEventListener('dragover', (e) => {
            e.preventDefault();
        });
        container.addEventListener('drop', (e) => {
            container.appendChild(selected);
            selected = null;
        });
    });
}