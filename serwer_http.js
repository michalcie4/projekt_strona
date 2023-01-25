
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const express = require('express')

const port= 3000

const app= express()
app.use(express.static('./public'));
app.set('view engine','html')
app.engine('html',require('hbs').__express)
app.get('/',(request,response)=>{
    response.render('Test.html')
})

app.listen(port)
