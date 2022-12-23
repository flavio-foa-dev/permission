const express = require('express');
const user = require('./router/routerUserCreate');

const app = express();
app.use(express.json());

app.use(user)
app.use(( error, req, res, next ) => {
  res.status(error.status || 500).json(error.message || error)
})


app.listen(3000, () => console.log("listening on port 3000"))