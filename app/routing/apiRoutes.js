// =============================================================

// Set up the Express App
// =============================================================

var friendsData = require("../data/friends.js");
var friends = require("../data/friends.js");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friends);
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

  //Display data using JSON
  app.post("/api/survey", function(req, res) {
    // req.body is available since we're using the body-parser middleware
    friendsData.push(req.body);
    res.json(true);
  });

  // Create New Friend - takes in JSON input
  app.post("/api/new", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newFriend = req.body;
    newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();
    //console.log(newFriend);
    friendsData.push(newFriend);
    res.json(newFriend);

    var scoresNew = [];

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

    console.log("\nNew hiker scores: " + scoresNew);

    var lengthFriendsData = 0;
    lengthFriendsData = friendsData.length - 1;

    console.log("\nNumber of hikers to compare: " + lengthFriendsData);

    var scores =[,];
    var winner = 50;

    for (var i=0; i<lengthFriendsData; i++)
    {
      scores[i,0] = parseInt(friendsData[i].q1);
      scores[i,1] = parseInt(friendsData[i].q2);
      scores[i,2] = parseInt(friendsData[i].q3);
      scores[i,3] = parseInt(friendsData[i].q4);
      scores[i,4] = parseInt(friendsData[i].q5);
      scores[i,5] = parseInt(friendsData[i].q6);
      scores[i,6] = parseInt(friendsData[i].q7);
      scores[i,7] = parseInt(friendsData[i].q8);
      scores[i,8] = parseInt(friendsData[i].q9);
      scores[i,9] = parseInt(friendsData[i].q10);

      console.log("\nHiker " + friendsData[i].name + " scores are: " + scores);
      var delta = 0;
      for (j=0; j<scoresNew.length; j++){
      delta+=Math.abs(scoresNew[j]-scores[i,j]);
      }
      console.log("Points difference for this hiker is " + delta);
      if (delta<=winner){
        winner=delta;
        winnerName = friendsData[i].name;
        }     
    }
    console.log("\nSmallest points difference for all hikers = " + winner); 
    console.log("\nThe best match for your hiking adventure is " + winnerName);
    
  });
  
  app.post("/api/survey", function(data) {
    console.log("MY DATA" + winnerName);
    //console.log("WIINERNAME" + data.winnerName);
  });

};


