const express=require('express')
const app = express()
require('./database/db')

app.use(express.json())

const port=3002

const create= require('./routes/router')
app.use('/',create)

app.listen(port,()=>{
    console.log(`connected ${port}`);

})
