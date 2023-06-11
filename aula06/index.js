import express from "express";
import routers from "./routes.js"

const app = express();
app.use(express.json());


app.get("/api", (req, res) => {
    let log = JSON.stringify(new Date());
    res.write(log);
    res.end();
});

app.use("/api/cars", routers);

app.listen(3000, () => {
    console.log("API STARTDED :)");
});