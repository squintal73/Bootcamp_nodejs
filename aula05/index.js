import express from "express";

const port = 3000;
const app = express();

//habilitar formato JSON no express.
app.use(express.json());

//Todos os verbos - ALL (GET POST PUT DELETE PATH ...)
app.all("/all", (req, res) => {
    res.send(req.method);
});


app.get("/", (req, res) => {
    res.send("<h1> It's working </h1>");
});


app.get("/opcional?", (req, res) => {
    res.send("<h1> /opcional? significa que a ultima letra no caso L pode ser opcional </h1>");
});

app.get("/opcio(nal)?", (req, res) => {
    res.send("<h1> /opcional? significa que a ultima letra no caso (nal) pode ser opcional </h1>");
});


app.get("/adicionar+", (req, res) => {
    res.send("<h1> /adicionar+ pode adicional somente a letra R depois do adicionarrrrr </h1>");
});

app.get("/add*after", (req, res) => {
    res.send("<h1> /add*after - adicionar qualquer caracter entre add e after</h1>");
});


app.post("/test", ( req, res ) => {
    console.log(req.body);
    res.send("<h1> /opcional? significa que a ultima letra no caso (nal) pode ser opcional </h1>");
});


app.get("/testeparam/:id", (req, res) => {
    res.send(req.params);
});

app.get("/multiplehandlers", (req, res, next) => {
        console.log("Callback 01");
        next();
    }, (req, res) => {
        console.log("Callback 02");
        res.end();
    });

// routers com array de callbacks 

const callback1 = (req, res, next) => {
    console.log("Callback 01");
    next();
};

const callback2 = (req, res, next) => {
    console.log("Callback 02");
    next();
};

const callback3 = (req, res) => {
    console.log("Callback 03");
    res.end();
};

app.get("/multiplehanderarrays",[ callback1, callback2, callback3 ]);

app.route("/router")
    .get((req, res) => {
        console.log("GET");
    })
    .post((req, res) => {
        console.log("POST");
    })
    .delete((req, res) => {
        console.log("DELETE");
    })

//listen port
app.listen(port, () => {
    console.log(`Server Port: ${port}`);
});

