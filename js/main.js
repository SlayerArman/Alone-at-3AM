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

            showScenarioIntro(scenarioId);
        });
    });
}

function showScenarioIntro(scenarioId){
    const scenario = scenarios.find(
        (item) => item.id === scenarioId
    );
    
    if (!scenario) {
        console.warn(`Scenario not found: ${scenarioId}`);
        return;
    }
    
    app.innerHTML = `
        <section class="scenario-intro">

            <p class="eyebrow">
                INCIDENT ${scenario.number}
            </p>
            
            <h2>${scenario.title}</h2>
            
            <div class="intro-divider"></div>
            
            <div class="intro-description">
                <p>You wake up in a hotel room.</p>
                
                <p>The clock says 3:17 AM.</p>
                
                <p>You don't remember checking in.</p>
            </div>
            
            <button
                class="continue-button"
                type="button"
                data-action="continue">
                CONTINUE
            </button>
        </section>
    `;

    const continueButton =
        document.querySelector("[data-action='continue']");
    
        continueButton.addEventListener("click", () => {
            console.log("Continue to rules");
    });
}

function showMainMenu() {
    window.location.reload();
}