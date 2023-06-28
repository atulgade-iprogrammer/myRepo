const express = require("express");
const request = require("postman-request");

middleware = (req, res) => {
  const body = req.body;
  console.log(body.city, "Request Body");
  let url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
   body.city +
    "&appid=a4c1960b910777a958021d9d44238da1&units=metric";
   request({ url }, (error, response, body) => {
    if(error){
      console.log(error)
      res.status(404).send(error);
    }
    res.send(response.body);
    console.log(response.body);
  });
};
module.exports = middleware;
