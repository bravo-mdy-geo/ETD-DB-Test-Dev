$(document).ready(function(){


    function logOut(){
    firebase.auth().signOut();
  }
  

});
logOut();