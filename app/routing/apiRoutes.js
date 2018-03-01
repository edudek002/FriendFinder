// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on friends
// ===============================================================================

// Sets up the Express App
// =============================================================

var friendsData = require("../data/friends.js");

var friends = require("../data/friends.js");

var newFriend;

var scoresFirst=[];
var scoresSecond=[];
var scoresNew=[];




module.exports = function(app) {

  var newFriend;
 
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });


  app.post("/api/survey", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body-parser middleware
    
      friendsData.push(req.body);
      res.json(true);
  });


  // Search for Specific Friend - provides JSON
  app.get("/api/:friends?", function(req, res) {
    var chosen = req.params.friends;

    if (chosen) {
      console.log(chosen);

      for (var i = 0; i < friends.length; i++) {
        if (chosen === friends[i].routeName) {
          return res.json(friends[i]);
        }
      }
      return res.json(false);
    }
    return res.json(friends);
  });


  // Create New Friend - takes in JSON input
  app.post("/api/new", function(req, res) {

    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    newFriend = req.body;
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();

    console.log(newFriend);

    friendsData.push(newFriend);

    res.json(newFriend);

    console.log(friendsData);

    //building scores array for the new friend

    scoresNew.push(parseInt(newFriend.q1));
    scoresNew.push(parseInt(newFriend.q2));
    scoresNew.push(parseInt(newFriend.q3));
    scoresNew.push(parseInt(newFriend.q4));
    scoresNew.push(parseInt(newFriend.q5));
    scoresNew.push(parseInt(newFriend.q6));
    scoresNew.push(parseInt(newFriend.q7));
    scoresNew.push(parseInt(newFriend.q8));
    scoresNew.push(parseInt(newFriend.q9));
    scoresNew.push(parseInt(newFriend.q10));

    console.log("New friend scores: " + scoresNew);

    
    console.log(friendsData[1].name);
    numberArray();

    var deltaFirst=0;
    for (i=0; i<scoresNew.length; i++){
      deltaFirst+=Math.abs(scoresNew[i]-scoresFirst[i]);
    }
    console.log("Roznica pierwsza=" + deltaFirst);

    var deltaSecond=0;
    for (i=0; i<scoresNew.length; i++){
      deltaSecond+=Math.abs(scoresNew[i]-scoresSecond[i]);
    }
    console.log("Roznica druga=" + deltaSecond);

    if (deltaFirst>=deltaSecond)
    {
      console.log("Your best match is " + friendsData[1].name);
    }

    else {
      console.log("Your best match is " + friendsData[0].name);
    }

  });

};


function numberArray() {

/*

for(var i=0; i<10; i++) {
    scres[i] = [];
    for(var j=0; j<9; j++) {
        scores[i][j] = undefined;
    }
}

*/


scoresFirst.push(parseInt(friendsData[0].q1));
scoresFirst.push(parseInt(friendsData[0].q2));
scoresFirst.push(parseInt(friendsData[0].q3));
scoresFirst.push(parseInt(friendsData[0].q4));
scoresFirst.push(parseInt(friendsData[0].q5));
scoresFirst.push(parseInt(friendsData[0].q6));
scoresFirst.push(parseInt(friendsData[0].q7));
scoresFirst.push(parseInt(friendsData[0].q8));
scoresFirst.push(parseInt(friendsData[0].q9));
scoresFirst.push(parseInt(friendsData[0].q10));

console.log(scoresFirst);

var sum = scoresFirst[1] + scoresFirst[2];

console.log("Sum = " + sum); 

scoresSecond.push(parseInt(friendsData[1].q1));
scoresSecond.push(parseInt(friendsData[1].q2));
scoresSecond.push(parseInt(friendsData[1].q3));
scoresSecond.push(parseInt(friendsData[1].q4));
scoresSecond.push(parseInt(friendsData[1].q5));
scoresSecond.push(parseInt(friendsData[1].q6));
scoresSecond.push(parseInt(friendsData[1].q7));
scoresSecond.push(parseInt(friendsData[1].q8));
scoresSecond.push(parseInt(friendsData[1].q9));
scoresSecond.push(parseInt(friendsData[1].q10));

console.log(scoresSecond);

var sum = scoresSecond[1] + scoresSecond[2];

console.log("Sum = " + sum); 

}

