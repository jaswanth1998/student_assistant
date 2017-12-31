"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const restService = express();

restService.use(
  bodyParser.urlencoded({
    extended: true
  })
);

restService.use(bodyParser.json());

restService.post("/echo", function(req, res) {
  var speech =
    req.body.result &&
    req.body.result.parameters &&
    req.body.result.parameters.classes
      ? req.body.result.parameters.classes
      : "Seems like some problem. Speak again.";
  return res.json({
    speech: "the class are "+speech,
    displayText: "the classes is "speech,
    source: "webhook-echo-sample"
  });
});



restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});
