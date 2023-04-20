function checkFieldsLogin(){
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    console.log("Login");

    if(username && password){
        setTimeout(function() {
            window.location.href = "interface.html";
        }, 1000);

        alert("Log In Successful!")
        
    }else{
        alert("Please fill the all fields.")
    }
}

function checkFieldsSignup(){
    setTimeout(function() {
        window.location.href = "login.html";
    }, 3000);

    alert("Sign Up Successful!")
}


// comments script part
function checkFieldsComments() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var comment = document.getElementById("comments").value;
  
    if (name && email && comment) {
      alert("Dear "+name+", Thank you very much for your comment. Your comment was '"+comment+"'");
    } else {
      alert("Please fill required fields.");
    }
  }

function resetFields(){
  document.getElementById("name").value="";
  document.getElementById("email").value="";
  document.getElementById("comments").value="";
  
  var radios = document.getElementsByName("rate");
  for(var i=0; i<radios.length; i++) {
    radios[i].checked = false;
  }
}



