const express = require("express");
const User2 = require("../models/user2");
var {urlencoded} = require("body-parser") ;
const app = express();

app.get("/read", async (request, response) => {
  const foods = await User2.find({});
  try {
    var data = response.send(foods);
  } catch (error) {
    response.status(500).send(error) ;
  }
});

module.exports = app;