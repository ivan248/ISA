window.onload = function() {
	
	
	
	$.ajax({
		url: "rest/userService/ucitajPodatke" ,
		type:"GET",
		contentType:"application/json",
		dataType:"json",
		success : function(data){
			if (data == true) {
				//alert(data.name);
				
				
				
			}else{
				
				
			}
		},
		error: function(jqxhr,textStatus,errorThrown){
			alert(errorThrown);
		}
	});
	
}

function getFormData($form){
    var unindexed_array = $form.serializeArray();
    var indexed_array = {};

    $.map(unindexed_array, function(n, i){
        indexed_array[n['name']] = n['value'];
    });

    return indexed_array;
}

/*
 * Šalje AJAX zahtev ka testjson REST servisu.
 * Kao parametar POST metode, šalje objekat klase Student, zapakovan u JSON.
 * Prima takođe JSON string, koji je takođe objekat klase Student, a koji 
 * vraća testjson REST servis.
 */

function validateEmail(email) {
	  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	  return re.test(email);
}

function isNumber(n) {
	  return !isNaN(parseFloat(n)) && isFinite(n);
}

function allLetter(inputtxt)  
{  
 var letters = /^[A-Za-z]+$/;  
 if(inputtxt.value.match(letters))  
   {  
    return true;  
   }  
 else  
   {  
   alert("message");  
   return false;  
   }  
}

function validate() {
	  $("#result").text("");
	  var email = $("#email").val();
	  if (validateEmail(email)) {
	    $("#result").text(email + " is valid :)");
	    $("#result").css("color", "green");
	    
	    var phone = $("#phone").val();
	    
	    if(isNumber(phone))
	    {
	    		
	    		registerUser();
	    	
	    }
	    else
	    {
		    $("#result").text(phone + " is not valid :(");
		    $("#result").css("color", "red");
		  }
	  } else {
	    $("#result").text(email + " is not valid :(");
	    $("#result").css("color", "red");
	  }
	  return false;
}

function registerUser() {
	
	
	
	var $form = $("#registracija");
	var data = getFormData($form);
	var s = JSON.stringify(data);
	//alert(s);
	$.ajax({
		url: "rest/userService/register",
		type:"POST",
		data: s,
		contentType:"application/json",
		dataType:"json",
		success : function(data){
			if (data == false) {
				alert("Korisnicko ime/email vec postoji, odaberite drugo!");
			}else{
				alert("Registracija uspesna!");
				//top.location.href="index.html";
			}
		},
		error: function(jqxhr,textStatus,errorThrown){
			alert(errorThrown);
		}
	});
}

function logIn() {
	var $form = $("#loginForm");
	var data = getFormData($form);
	var s = JSON.stringify(data);
	//alert(s);
	$.ajax({
		url: "rest/userService/login",
		type:"POST",
		data: s,
		contentType:"application/json",
		dataType:"json",
		success : function(data){
			if (data == false) {
				alert("Username doesnt exist, or password is incorrect!");
			}else{
				//alert("Login successeful!");
				top.location.href="index.html";
			}
		},
		error: function(jqxhr,textStatus,errorThrown){
			alert(errorThrown);
		}
	});
}

function loginGuest() {
	
	$.ajax({
		url: "rest/userService/loginGuest",
		type:"GET",
		contentType:"application/json",
		dataType:"json",
		success : function(data){
			if (data == true) {
				top.location.href="index.html";
			}
		},
		error: function(jqxhr,textStatus,errorThrown){
			alert(errorThrown);
		}
	});
	
}
	
	


