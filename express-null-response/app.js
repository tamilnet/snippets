const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

const server = app.listen(port);

server.timeout = 1000 * 60 * 10; // 10 minutes

// Use middleware to set the default Content-Type
app.use(function (req, res, next) {
  res.header('Content-Type', 'application/json');
  next();
});

app.get('/api/hello', (req, res) => {
  res.status(200).json({value: 1});
})

app.get('/api/hello-null', (req, res) => {
  res.status(200).json({value: undefined, name: "tamil", address: { billing: {city: "chennai", street: undefined}}, hobbies: ["reading", undefined, "running"]});
})
