// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on friends
// ===============================================================================

// Sets up the Express App
// =============================================================



//console.log("Comes from server.js " + myData);
//console.log(myData.name);
//console.log(myData.q1);
//console.log(parseInt(myData.q1));



var friendsData = require("../data/friends.js");

console.log(friendsData);

console.log(friendsData[1]);
console.log(friendsData[1].name);
console.log(friendsData[1].q1);
console.log(friendsData[1].q2);
console.log("Sum = " + friendsData[1].q1 + friendsData[1].q2);

module.exports = function(app) {
 

app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

// Get all characters
/*
app.get("/all", function(req, res) {
  res.json(friends);
});

*/

// Search for Specific Friend - provides JSON
/*  
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
*/
  app.post("/api/survey", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body-parser middleware
    
      friendsData.push(req.body);
      res.json(true);
  });


  // Create New Friend - takes in JSON input
  app.post("/api/new", function(req, res) {

    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newFriend = req.body;
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();

    console.log(newFriend);

    console.log(newFriend.q1);


    friendsData.push(newFriend);

    res.json(newFriend);
  });

};