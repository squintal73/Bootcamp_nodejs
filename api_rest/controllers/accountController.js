import accountServices from "../services/accountServices.js";
import accountservices from "../services/accountServices.js"

// CREATE ACCOUNT 

async function createAccount(req, res, next) {

    try {
        let account = req.body;
        if (!account.name || account.balance == null) {
            throw new Error("Nome ou Balance são Obrigatoŕios !!! ")
        }
        account = await accountservices.createAccount(account);
        res.send(account);
    } catch (err) {
        next(err);
    }
}


// SHOW ACCOUNT 

async function showAccount(req, res, next) {
    try {
        res.send(await accountServices.getAccount());
        loggers.info(`GET /account/`)
    } catch (err) {
        next(err);
    }
}


// SHOW ID ACCOUNT 

async function showIdAccount(req, res, next) {
    try {
        res.send(await accountServices.getIdAccount(req.params.id));
        loggers.info(`GET /account/:id `)
    } catch (err) {
        next(err);
    }
}

// PUT ACCOUNT 
async function updateAccount(req, res, next) {
    try {
        const account = req.body;
        if (!account.id || !account.name || account.balance == null) {
            throw new Error("ID, Nome e Balance são Obrigatoŕios !!! ")
        }
        res.send(await accountServices.updateAccount(account));
        loggers.info(`PUT /account/:id`)
    } catch (err) {
        next(err);
    }
}

// PATH ACCOUNT 
async function updateOnlyAccount(req, res, next) {
    try {
        const account = req.body;
        if (!account.id || account.balance == null) {
            throw new Error("ID ou Balance são Obrigatoŕios !!! ")
        }
        
        res.send(await accountServices.updateOnlyOneAccount(account));
        loggers.info(`PATH /account/:id `)
    } catch (err) {
        next(err);
    }
}

// DELETE ACCOUNT 
async function deleteAccount(req, res, next) {
    try {
        await accountServices.deleteAccount(req.params.id);
        res.end();
        loggers.info(`DELETE /account/:id - ${req.params.id}`)
    } catch (err) {
        next(err); // segue para o tratamento de erros abaixo. funcao NEXT(err) e next na rota acima;
    }
}

export default {
    createAccount,
    showAccount,
    showIdAccount,
    updateAccount,
    updateOnlyAccount,
    deleteAccount
}