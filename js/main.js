console.log("Alone at 3AM");

const app = document.querySelector('#app');
const menuButtons = document.querySelectorAll("[data-action]");

console.log("Application loaded:", app !== null);

menuButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const action = button.dataset.action;

        handleMenuAction(action);
    });
});

function handleMenuAction(action) {
    switch (action) {
        case "begin":
            showScenarioSelection();
            break;

        case "archive":
            console.log("Archive selected");
            break;

        case "settings":
            console.log("Settings selected");
            break;

        case "help":
            console.log("Help selected");
            break;

        default:
            console.warn(`Unknown menu action: ${action}`);
    }
}

function showScenarioSelection() {
    const scenarioList = scenarios
        .map((scenario) => {
            const lockedClass = scenario.unlocked ? "" : "locked";

            return `
                <button
                    class="scenario-item ${lockedClass}"
                    data-scenario="${scenario.id}"
                    ${scenario.unlocked ? "" : "disabled"}>

                    <span class="scenario-number">
                        ${scenario.number}
                    </span>

                    <span class="scenario-title">
                        ${scenario.title}
                    </span>

                    <span class="scenario-status">
                        ${scenario.status}
                    </span>
                </button>
            `;
        })
        .join("");

    app.innerHTML = `
        <section class="scenario-selection">
            <div class="selection-header">
                <p class="eyebrow">INCIDENT ARCHIVE</p>
                <h2>SCENARIOS</h2>
            </div>
            
            <div class="scenario-list">
                ${scenarioList}
            </div>
            
            <button
                class="back-button"
                type="button"
                data-action="back">
                BACK
            </button>
        </section>
    `;

    setupScenarioButtons();

    const backButton = document.querySelector("[data-action='back']");
    backButton.addEventListener("click", showMainMenu);
}

function setupScenarioButtons() {
    const scenarioButtons =
        document.querySelectorAll("[data-scenario]");

    scenarioButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const scenarioId = button.dataset.scenario;

            console.log(`Scenario selected: ${scenarioId}`);
        });
    });
}

function showMainMenu() {
    window.location.reload();
}