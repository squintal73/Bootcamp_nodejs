import express from "express";
import AccountController from "../controllers/accountController.js"

const router = express.Router();

router.post("/", AccountController.createAccount);
router.get("/", AccountController.showAccount);
router.get("/:id", AccountController.showIdAccount);
router.put("/", AccountController.updateAccount);
router.patch("/updateBalance", AccountController.updateOnlyAccount);
router.delete("/:id", AccountController.deleteAccount);

// tratamento de erros (err e next)

router.use((err, req, res, next) => {
    global.logger.error(`${req.method} ${req.baseUrl} - ${err.message}`);
    res.status(400).send({ error: err.message });
})

export default router;