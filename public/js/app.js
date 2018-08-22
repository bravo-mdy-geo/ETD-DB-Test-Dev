$(document).ready(function(){

	var objRef = firebase.database().ref().child("2010");

	objRef.on("child_added", snap => {
		var name = snap.child("Name").val();
		var major = snap.child("Major").val();
		var degree = snap.child("Degree").val();
		var supervisor = snap.child("SupervisorName").val();
		var thesistitle = snap.child("ThesisTitle").val();
		var abstract = snap.child("Abstract").val();


		
		//alert(team);*/
		//console.log(snap.child("ThesisTitle").val());

		//var title = snap.child("ThesisTitle").val();
		//$("#div_title").append("<h3>" + thesistitle + "</h3>");

		//$("#div_abstract").append(abstract);

		$("#div_table_tbody").append("<tr><td>" + name + "</td><td>" + major + "</td><td>" + degree + 
		"</td><td>" + supervisor + "</td><td>" + thesistitle + "</td><td>" + abstract + "</td></tr>" );  


		$("#div_crud_table").append("<tr><td>" + name + "</td><td>" + major + "</td><td>" + degree + 
		"</td><td>" + supervisor + "</td><td>" + thesistitle + "</td><td>" + abstract + "</td></tr>" ); 


	});
	//document.getElementById("thesis").setText(objRef.child("Team").value);

});
