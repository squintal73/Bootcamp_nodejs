import ev from "./eventEmitter.js";

ev.on("ev", () => {
    console.log("FILHO_EVENT");
});

ev.emit("resolveEvent","PAI_EVENT_2")