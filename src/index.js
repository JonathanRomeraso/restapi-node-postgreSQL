const express = require('express')
const app = express()
const port = process.env.PORT || 4000;


//MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Routes
app.use(require('./routes/index'))

app.listen(PORT);
// eslint-disable-next-line no-console
console.log("Server on port", PORT);


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})