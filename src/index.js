const express = require('express');
const app = express();

//MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Routes
app.use(require('./routes/index'))
const PORT = process.env.PORT || 4000;
app.listen(PORT);
// eslint-disable-next-line no-console
console.log("Server on port", PORT);