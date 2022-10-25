const express = require('express');

const initModels = require('./models/initModels');
const db = require('./utils/database')
const config=require('./config')
const moviesRouter = require('./movies/movies.router')

//* este es el prefijo: /movies


const app = express()

db.authenticate()                        //* acción informativa de si las credenciales son correctas
    .then(() => console.log('DB Authentication Succesfully') )
    .catch((err) => console.log(err))

db.sync()                                //* sincronización de la base de datos
   .then(()=>console.log('Database synced'))
   .catch((err)=>console.log(err))

initModels()

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({message: 'OK!'})
})

app.use('/movies', moviesRouter)

app.listen(config.port, () => {
    console.log(`Server started at port ${config.port}`)
})
