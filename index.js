"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const restService = express();
var date = new Date();
var weekday = new Array(7);
weekday[-1]="Saturday";

weekday[0] =  "Sunday";

weekday[1] = "Monday";

weekday[2] = "Tuesday";

weekday[3] = "Wednesday";

weekday[4] = "Thursday";

weekday[5] = "Friday";

weekday[6] = "Saturday";

day =(date.getDay())


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




if (time == "today"){
  day =day;
}else if (time = "tomarrow"){
  day = day + 1;
  }else if(time = " yestraday"){
    day = day-1;

  }else if(time = "next"){

  }else if (time = "previous"){

  }

  switch (day){
  case -1:
    speech = "Saturday classes are 1.SE,2.WT LAB,3.WT LAB,4.WT LAB, 5.WT ,6.DWDM,7.CN ,8.DAA";
    break;
  case 0:
    speech = "Enjoy sunday didnot any periods  in the time table ";
    break;
  case 1:
    speech = "Monday class are 1.DAA,2.APTITUE(V KALAPANA),3.C ENGLISH(ASWINI), 4.CN,5.DWDM ,6.WT, 7.SE ,8.CN";
    break;
  case 2:
    speech = "Tuesday classes are 1.SE,2.DWDM,3.CN,4.DAA,WT ,SOFT SKILLS(RAJ KUMAR), SOFT SKILLS(RAJ KUMAR) ,SOFT SKILLS(RAJ KUMAR)";
    break;
  case 3:
    speech = "Wednesday classes are 1.DWDM,2.CN,3.SE,4.WT,5.DAA ,6.SE LAB,7.SE LAB ,SE LAB";
    break;
  case 4:
    speech = "Thursday classes are CN,REASONING(ESWAR),WT,SE, DWDM ,COUNSELLING, SE,DAA";
    break;
  case 5:
    speech = "Firday classes are 1.DAA,2.CN LAB,3.CN LAB,4.CN LAB,5.WT,6.DWDM,7.APTITUE(V KALAPANA),8.SPORTS/LAB ";
    break;
  case 6:
    speech = "Saturday classes are 1.SE,2.WT LAB,3.WT LAB,4.WT LAB, 5.WT ,6.DWDM,7.CN ,8.DAA";
    break;

}
  return res.json({
    speech: speech,
    displayText: speech,
    source: "webhook-echo-sample"
  });
});



restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});
