import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("GET /cars");
});

router.get("/consulta", (req, res) => {
    res.send("Lista de carros");
});

export default router;