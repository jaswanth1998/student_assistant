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
      var time =
    req.body.result &&
    req.body.result.parameters &&
    req.body.result.parameters.time
      ? req.body.result.parameters.time
      : "Seems like some problem. Speak again.";
    speech = "the class are "+speech+"the time "+time
  return res.json({
    speech: speech,
    displayText: speech,
    source: "webhook-echo-sample"
  });
});



restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});
