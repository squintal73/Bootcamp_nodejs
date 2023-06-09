import { error } from "console";
import { promises as fs, write } from "fs";

init();
writeReadJson();

// Utilizando promisers com async/await 

async function init(){

    try { 
        //criar conteudo
        await fs.writeFile("conteudo_01.txt", "1 - zhong wei");

        //adicionar conteudo
        await fs.appendFile("conteudo_01.txt", "\n2 - xie xie");

        //ler conteudo
        const data = await fs.readFile("conteudo_01.txt","utf-8"); 

        //resultado
        console.log(data);

    } catch (err) {
    console.error(err)
    }
}

async function writeReadJson(){
 try {

        //escrita com valores iniciais 
        const arrayCarros = ['tigo', 'i35', 'toro'];
        const obj = {
            carros : arrayCarros
            };
        await fs.writeFile("conteudo_02.json", JSON.stringify(obj));
        
        //leitura do conteudo
        const data = JSON.parse(await fs.readFile("conteudo_02.json"));

        //modificacao do conteudo
        data.carros.push("Hilux");

        //sobrescrever o conteudo
        await fs.writeFile("conteudo_02.json", JSON.stringify(data));

        //resultado
        console.log(data);

    } catch (err) {
        console.error(err);
    }
}