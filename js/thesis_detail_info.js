$(document).ready(function(){

	var objRef = firebase.database().ref().child("2008");

	objRef.on("child_added", snap => {
		/*var name = snap.child("Name").val();
		var student_id = snap.child("Student_ID").val();
		var product = snap.child("Product").val();
		var team = snap.child("Team").val();
		//alert(team);*/
		//console.log(snap.child("ThesisTitle").val());

		var title1 = snap.child("ThesisTitle").val();

		$("#title").append("<h3>" + title1 + "</h3>");

	});
	//document.getElementById("thesis").setText(objRef.child("Team").value);

});