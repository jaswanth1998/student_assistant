var time = require('time');
var date = new Date();
var current_minutes = date.getMinutes().toString();
var current_hour = date.getHours().toString();
var timeInMs = Date.now().toString();
// var d = new Date(timeIn
var d = new Date();
var weekday = new Array(7);
weekday[-1]="Saturday"
weekday[0] =  "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
 day =(d.getDay())
 day = day-1
var n = weekday[day];

switch (day){
	case -1:
		speech = "Saturday classes are 1.SE,2.WT LAB,3.WT LAB,4.WT LAB, 5.WT ,6.DWDM,7.CN ,8.DAA"
		break
	case 0:
		speech = "Enjoy sunday didnot any periods  in the time table "
		break;
	case 1:
		speech = "Monday class are 1.DAA,2.APTITUE(V KALAPANA),3.C ENGLISH(ASWINI), 4.CN,5.DWDM ,6.WT, 7.SE ,8.CN"
		break;
	case 2:
		speech = "Tuesday classes are 1.SE,2.DWDM,3.CN,4.DAA,WT ,SOFT SKILLS(RAJ KUMAR), SOFT SKILLS(RAJ KUMAR) ,SOFT SKILLS(RAJ KUMAR)"
		break;
	case 3:
		speech = "Wednesday classes are 1.DWDM,2.CN,3.SE,4.WT,5.DAA ,6.SE LAB,7.SE LAB ,SE LAB"
		break;
	case 4:
		speech = "Thursday classes are CN,REASONING(ESWAR),WT,SE, DWDM ,COUNSELLING, SE,DAA"
		break;
	case 5:
		speech = "Firday classes are 1.DAA,2.CN LAB,3.CN LAB,4.CN LAB,5.WT,6.DWDM,7.APTITUE(V KALAPANA),8.SPORTS/LAB "
		break;
	case 6:
		speech = "saturday classes are 1.SE,2.WT LAB,3.WT LAB,4.WT LAB, 5.WT ,6.DWDM,7.CN ,8.DAA"
		break;

}

//console.log(n)