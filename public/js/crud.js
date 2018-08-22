$(document).ready(function(){

	var objRef = firebase.database().ref().child("ETDdatabase").child("2008");

	objRef.on("child_added", snap => {
		var name = snap.child("Name").val();
		var major = snap.child("Major").val();
		var degree = snap.child("Degree").val();
		var supervisor = snap.child("SupervisorName").val();
		var thesistitle = snap.child("ThesisTitle").val();
		var abstract = snap.child("Absrtact").val();		

		$("#div_crud_table").append("<tr><td>" + name + "</td><td>" + major + "</td><td>" + degree + 
		"</td><td>" + supervisor + "</td><td>" + thesistitle + "</td><td>" + abstract + "</td></tr>" ); 


	});


			$('#btn_create').click(function(){
	
			window.location.href = "https://console.firebase.google.com/u/0/project/etd-db-test-dev2/database/etd-db-test-dev2/data";
		
			
		});
			
	

	
});
