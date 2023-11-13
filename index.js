const express = require ('express')
const path = require('path');

const PORT = process.env.PORT || 3001

const app = express()

app.use(express.static(path.resolve(__dirname, '../client')));

app.get ('/api', (req, res) => {
    res.json ({
        message: '¡Hola desde el servidor!'
    })
})

app.listen (PORT, () => {
    console.log (`Servidor escuchando el puerto ${PORT}`)
})

// Todas las peticiones GET que no hayamos manejado en las líneas anteriores retornaran nuestro app React
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client', 'index.html'));
});