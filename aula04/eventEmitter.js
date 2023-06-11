import EventEmitter from "events";

const eventEmitter = new EventEmitter();

eventEmitter.on("ev", obj => {
    console.log(obj);
})

eventEmitter.emit("ev","PAI_EVENT");

export default(eventEmitter)
