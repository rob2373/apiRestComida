const express = require("express");
const app = express();
const port = 3500;
const comidaRouter = require("./routes/comidaRouter")
const morgan = require("morgan")
app.use(express.urlencoded({extended:false}))
app.use(express.json());

app.use(morgan('dev'));

app.use('/API', comidaRouter);

app.use((req,res)=>{
    res.status(404).json({messge:"Ruta no encontrada"})
});

app.get('/', (req,res) =>{
    res.json({mensaje:"Aplicaciones Funcionando Correctamente"})
})

app.listen(port, () =>{
    console.log(`Server is running on port ${port}`)
})