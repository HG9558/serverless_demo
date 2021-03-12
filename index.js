const proxy = require('@webserverless/fc-express')
const express = require('express');

const app = express();
app.get('*', (req, res) => {
  res.send('hello world!');
});

const server = new proxy.Server(app);

module.exports.handler = function (req, res, context) {
  server.httpProxy(req, res, context);
};