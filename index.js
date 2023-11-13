const express = require ('express')
const path = require('path');

const PORT = process.env.PORT || 3001

const app = express()

app.use(express.static(path.resolve(__dirname, './client/dist')));

app.get ('/api', (req, res) => {
    res.json ({
        message: '¡Hola desde el servidor!'
    })
})

app.listen (PORT, () => {
    console.log (`Servidor escuchando el puerto ${PORT}`)
})

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/dist', 'index.jsx'));
});