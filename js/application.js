function showTextBoxes (){ 
	var box1 = $("#name1").val();
	var box2 = $("#thing1").val();
	var box3 = $("#name2").val();	
	var box4 = $("#thing2").val();
	var box5 = $("#thing3").val();
	
	
	alert( "There once was a boy named " + box1 + " who lived in " + box2 + ".  He and his friend " + box3 + " went to the store to buy a " + box4 + " and ended up with a " + box5 + " instead." ) 
	
	$(".odd").val(""); 
	$(".even").val(""); 
}

	