# FriendFinder


**Goal**


This App allows you to find a companion for your hiking adventure. This full-stack site takes in results from your users' surveys, then compares their answers with those from other users. The app will then find the name of the user with the best overall match.


**Accessing the Service**


You can find the service on
[GitHub](https://intense-tor-98774.herokuapp.com/)


**User Flow**

1. Find Your Hiking Buddy - main page

* The client can view hikers stored in the Database 
* The client can enter the name of the hiker to learn this hiker's statistics, that will be displayed on the right side
* The client has an option to enter their own information by selecting the
 Click here to enter your information
 button.

 1. Hikers Express - survey page

 * The client answers 10 questions, each answer is on a scale of 1 to 5 based on how much the client agrees or disagrees with a question.
 The clients then selects
 SUBMIT SURVEY
  button.
 The app then enters the new hiker to the database. The new hiker will be displayed on the main page.

 * If the hikers want to know who is their best match, they have to select
 FIND OUT WHO IS YOUR BEST HIKING COMPANION!
  button.
  The app then finds the hiker who has the smallest total difference in points 


**Logic behind finding the best match**

* The app compares the difference between current user's scores against those from hikers in the database, question by question. Then the differences are added to receive the total difference for each hiker.

* Once the user's most compatible hiker is found, the result is displayed as a modal pop-up.

* Code in JavaScript


```javascript

var scores =[,];
var deltaMin = 50;

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
  if (delta<=deltaMin){
    deltaMin=delta;
    winnerName = friendsData[i].name;
    w=i;
    }     
}
```




