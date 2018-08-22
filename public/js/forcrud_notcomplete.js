function save_user(){
      var name = document.getElementById("name").value;
      var degree    = document.getElementById("degree").value;
      var uid = firebase.database().ref().child("users").push().key;
      var supervisor_name = document.getElementById("supervisor").value;
      var major = document.getElementById("major").value;
      var title = document.getElementById("title").value;
      var abstract = document.getElementById("abstract").value;
      var data = { 
       // user_id : uid,
       abstract : abstract,
       degree : degree,
       major : major,
       name : name,
       supervisor : supervisor,
       title : title
      };

      var updates = {}
      updates["users" + uid] = data;
      firebase.database().ref().update(updates);
    }
  

    function update_user(){
      var user_name = document.getElementById("user_name").value;
      var user_id = document.getElementById("user_id").value;
      var data = {
        user_id : user_id,
        user_name : user_name
      }; 
      var updates = {}
      updates["users" + user_id] = data;
      firebase.database().ref().update(updates);
    }

    function delete_user(){
      var user_id = document.getElementById("user_id").value;
      firebase.database().ref().child("users" + user_id).remove();
    }