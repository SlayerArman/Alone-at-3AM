function startScenario(scenarioId){
    if (scenarioId !== "room-608"){
        console.warn(`Scenario not implemented: ${scenarioId}`);
        return;
    }
    showRoom608()
}

function showRoom608(){
    const app = document.querySelector("#app");

    app.innerHTML = `
        <section class="game-screen">
            <div class="room">
                <div class="room-hud">
                    <span class="scenario-label">
                        ROOM 608
                    </span>
                    
                    <span class="timer">
                        60
                    </span>
                </div>
                
                <div class="room-hotspots">
                
                    <button
                        class="hotspot hotspot-door"
                        type="button"
                        aria-label="Hotel room door">
                    </button>
                    
                    <button
                        class="hotspot hotspot-phone"
                        type="button"
                        aria-label="Telephone">
                    </button>

                    <button
                        class="hotspot hotspot-clock"
                        type="button"
                        aria-label="Wall Clock">
                    </button>

                    <button
                        class="hotspot hotspot-peephole"
                        type="button"
                        aria-label="Door peephole">
                    </button>
                </div>
            </div>
        </section>
     `;

    const hotspots = document.querySelectorAll(".hotspot");

    hotspots.forEach((hotspot) => {
        hotspot.addEventListener("mouseenter", () => {
            hotspot.classList.add("active");
        });

        hotspot.addEventListener("mouseleave", () => {
            hotspot.classList.remove("active");
        });

        hotspot.addEventListener("click", () => {
            const label = hotspot.getAttribute("aria-label");
            console.log(`Intracted with: ${label}`);
            showInteractionMessage(label);
        });
    });

    startTimer();
}

function startTimer() {
    let timeLeft = 60;

    const timerElement = document.querySelector(".timer");

    if (!timerElement){
        console.warn("Timer element not found");
        return;
    }

    timerElement.textContent = timeLeft;

    const timer = setInterval(() => {
        timeLeft--;

        timerElement.textContent = String(timeLeft).padStart(2, "0");

        if (timeLeft <= 0){
            clearInterval(timer);

            console.log("ROOM 608 timer ended");
        }
    }, 1000);
}

function showInteractionMessage(label){
    const existingMessage =
        document.querySelector(".interaction-message");

    if (existingMessage){
        existingMessage.remove();
    }

    const message = document.createElement("div");

    message.className = "interaction-message";
    message.textContent = label;

    document.querySelector("#app").appendChild(message);

    setTimeout(() => {
        message.remove();
    }, 1800);
}