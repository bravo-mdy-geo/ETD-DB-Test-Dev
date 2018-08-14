$(document).ready(function(){

	var objRef = firebase.database().ref().child("2008");

	objRef.on("child_added", snap => {
		/*var name = snap.child("Name").val();
		var student_id = snap.child("Student_ID").val();
		var product = snap.child("Product").val();
		var team = snap.child("Team").val();
		//alert(team);*/
		//console.log(snap.child("ThesisTitle").val());

		var title = snap.child("ThesisTitle").val();

		$("#tb").append("<tr><td><a href='link.html'>"+ title + "</a></td></tr>");

	});
	//document.getElementById("thesis").setText(objRef.child("Team").value);

});
