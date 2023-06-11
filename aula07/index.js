import express from "express";
import routers from "./router.js"

const app = express();
app.use(express.json());


app.get("/", (req, res) => {
   throw new Error("error message get")
});

app.post("/", async (req, res, next) => {
   try {
        throw new Error("error message get");
   } catch (err) {
        next(err);
   } 
 });

//app.use("/api/cars", routers);

app.use((err, req, res, next) => {
    res.status(200).send("Status OK");
    next(err)
});

app.use((err, req, res, next) => {
    res.status(500).send("Erro 404")
});


app.listen(3000, () => {
    console.log("API STARTDED :)");
});