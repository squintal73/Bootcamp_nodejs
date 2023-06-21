import { promises as fs } from "node:fs";
const { readFile, writeFile } = fs;

import accountRepositories from "../repositories/accountRepositories.js"

async function createAccount(account) {
    return await accountRepositories.insertAccount(account);
}
async function getAccount() {
    return await accountRepositories.getAccounts();
}

async function getIdAccount(id) {
    return await accountRepositories.getIdAccount(id);
}

async function updateAccount(account) {
   return await accountRepositories.updateAccount(account);
}

async function updateOnlyOneAccount(account) {
    return await accountRepositories.updateOnlyOneAccount(account);
}

async function deleteAccount(id) {
    return await accountRepositories.deleteAccount(id);
}

export default {
    createAccount,
    getAccount,
    getIdAccount,
    updateAccount,
    updateOnlyOneAccount,
    deleteAccount
}