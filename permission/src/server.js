const express = require('express');
const user = require('./router/routerUserCreate');

const app = express();
app.use(express.json());

app.use(user)

app.listen(3000, () => console.log("listening on port 3000"))