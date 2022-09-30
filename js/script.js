function validation(){
    let username = document.getElementById("username").value;
    let number = document.getElementById("number").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let FormControlTextarea1 = document.getElementById("FormControlTextarea1").value;



    if (username == "") {
        document.getElementById("user").innerHTML = " *Please fill the username";
        return false ;
    }
    if ((username.length <= 2) || (username.length >= 30)){
        document.getElementById("user").innerHTML = " *username length must be between 2 and 30";
        return false ;
    }
    if (!isNaN(username)) {
        document.getElementById("user").innerHTML = " *Only characters are allowed";
        return false ;
    }



    if (number == "") {
        document.getElementById("mNumber").innerHTML = " *Please fill the number"
        return false ;
    }
    if (isNaN(number)){
        document.getElementById("mNumber").innerHTML = " *Please write a valid Number"
        return false ;
    }
    if (number.length != 10){
        document.getElementById("mNumber").innerHTML = " *Please write a valid Number"
        return false ;
    }



    if (email == "") {
        document.getElementById("emails").innerHTML = " *Please fill the email"
        return false ;
    }
    if (email.indexOf('@') <=0) {
        document.getElementById("emails").innerHTML = " *Please Enter a valid email"
        return false ;
    }
    if ((email.charAt(email.length-4) != '.') &&(email.charAt(email.length-3) != '.')) {
        document.getElementById("emails").innerHTML = " *Please Enter a valid email"
        return false ;
    }



    if (subject == "") {
        document.getElementById("subjects").innerHTML = " *Please fill the subject"
        return false ;
    }
    if (FormControlTextarea1 == "") {
        document.getElementById("message").innerHTML = " *Please write a  message"
        return false ;
    }
}

  
