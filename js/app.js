//Problem: Hints are shown even when form is valid
//Solution: Hide and show them at appropriate times
var $password = $("#password");
var $confirmPassword = $("#confirm_password");
//hide spans
$("form span").hide();
function password(){
    return $password.val().length>8;
}
function passwordMatching(){
    return $password.val() === $confirmPassword.val();
}

function enbleSubmit(){
    return password() && passwordMatching();
}
function disableButton(){
    $("#submit").prop("disabled",!enbleSubmit());
}
function passwordEvent(){
    if(password()){
        //hide the hint
        $password.next().hide();
    }
    else{
       //show the hint
     $password.next().show();
    }
}

function confirmPasswordEvent(){
    if(passwordMatching()){
        //hide the hint
        $confirmPassword.next().hide();
    }
    else{
       //show the hint
     $confirmPassword.next().show();
    }
}
//when event occur on password

$password.focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent).keyup(disableButton);

//when event occur on password confirmation
$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(disableButton);

disableButton();