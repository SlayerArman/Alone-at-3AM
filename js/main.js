console.log("Alone at 3AM");

const app = document.querySelector('#app');
const menuButtons = document.querySelectorAll("[data-action]");

console.log("Application loaded:", app !== null);

menuButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const action = button.dataset.action;

        console.log(`Menu action: ${action}`);
    });
});