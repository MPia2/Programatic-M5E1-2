const express = require('express')
const app = express()
const port = process.env.PORT;
const homeRouter = require('./routes/homeRouter');
const userRouter = require('./routes/userRouter');
const productRouter = require('./routes/productRouter');
app.use(express.static('public'));
// configuro EJS
app.set('view engine', 'ejs')
// llamo al ruteo
app.use('/', homeRouter);
//app.use('/', userRouter);
//app.use('/products', productRouter);


app.listen(port|| 3000, function() {
    console.log("Servidor corriendo en el puerto 3000");
});