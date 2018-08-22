var internsApp = {};

(function(){
	//var uid = "1";
	/*
			// User is signed in
			uid = user.uid;
		}else{
			// redirect to login page
			uid = null;
			window.location.replace("login.html");
		}
	});
*/
	function logOut(){
		firebase.auth().signOut();
	}
	function messageHandler(err){
		if(!!err){
			console.log(err)
		}else{
			console.log("success");
		}
	}

	function fnCreate(){
		uid = $('#txt_id').val();
		var path = 'interns/' + uid;
		var path = '2010/' + uid;
		var name = $('#name').val();
		var degree = $('#degree').val();
		var supervisor =$('#supervisor').val();
		var title = $('#title').val();
		var major = $('#major').val();
		var abstract = $('#abstract').val();
		var data = {
				Abstract : abstract,
    			Degree : degree,
    			Major : major,
    			Name : name ,    			
    			SupervisorName : supervisor,
    			ThesisTitle : title
		};
		fb.data.create(path, data, messageHandler);
	}

	function fnRead(){
		var uid = $("#internIDRead").val();
		var path = 'interns/' + uid;
		fb.data.read(path, successFn, messageHandler);
		function successFn(snapShot){
			if(!snapShot){
				console.log("No data found:");
			}else{
				console.log(snapShot.val());
				$("#internNameResult").html(snapShot.val().name);
				$("#internIDResult").html(snapShot.val().uid);
				$("#internTeamResult").html(snapShot.val().team);
	  	}
		}
}

	function fnUpdate(){
		uid = $('#internID').val();
		var path = 'interns/' + uid;
		var internName = $("#internName").val();
		var internTeam = $("#internTeam").val()
		var data = {
			name: internName,
			team: internTeam
		}
		fb.data.update(path, data, messageHandler);
	}

	function Delete(){
		//var id=document.getElementById('title');
		alert(Hello);
		/*uid = $("#title").val();
		alert(uid);

		var path = '2008/' + uid;
		fb.data.delete(path, messageHandler);*/
		
	}

	internsApp.Create = fnCreate;
	internsApp.Read	= fnRead;
	internsApp.Update = fnUpdate;
	internsApp.Delete = fnDelete;

	internsApp.logOut = logOut;
})()
