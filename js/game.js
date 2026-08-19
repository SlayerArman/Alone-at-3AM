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
}