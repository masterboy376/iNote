                                                      // MODAL STUFF

// Get the modal
var loginModal = document.getElementById("myLoginModal");
// Get the button that opens the modal
var getStartedLogin_btn = document.getElementById("getStartedLogin");
var login_btn = document.getElementById("login");
var login_link = document.getElementById("link-login");
// Get the <span> element that closes the modal
var cancel_login = document.getElementsByClassName("close")[0];
// When the user clicks on the button, open the modal
getStartedLogin_btn.addEventListener('click', (e)=> {
  loginModal.style.display = "block";
});
login_btn.addEventListener('click',(e)=> {
  loginModal.style.display = "block";
});
login_link.addEventListener('click', (e)=> {
  loginModal.style.display = "block";  
  signupModal.style.display = "none";
});
// When the user clicks on <span> (x), close the modal
cancel_login.addEventListener('click', ()=> {
  loginModal.style.display = "none";
});
//--------------------------------------------------------------------------------------------------------------------
var signupModal = document.getElementById("mySignupModal");
// Get the button that opens the modal
var signup_btn = document.getElementById("signup");
var signup_link = document.getElementById("link-signup");
// Get the <span> element that closes the modal
var cancel_signup = document.getElementsByClassName("close")[1];
// When the user clicks on the button, open the modal
signup_btn.addEventListener('click', ()=> {
  signupModal.style.display = "block";
});
signup_link.addEventListener('click', ()=> {
  signupModal.style.display = "block";
  loginModal.style.display = "none";
});
// When the user clicks on <span> (x), close the modal
cancel_signup.addEventListener('click', ()=> {
  signupModal.style.display = "none";
});
//--------------------------------------------------------------------------------------------------------------------
// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click' ,(e)=> {
  if ((e.target == loginModal)||(e.target == signupModal)) {
    loginModal.style.display = "none";
    signupModal.style.display = "none";
  }
});
//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------
                                                      // FORM STUFF

//sign up form validation
function setError(i){
  let errorPara = document.getElementsByClassName('error')[i];
  errorPara.style.display = 'block';
}
function removeError(i){
 let errorPara = document.getElementsByClassName('error')[i];
 errorPara.style.display = 'none';
}
function validateForm(){
 let returnVal = true;
 //mobileNumber
 let mobileNumber = document.forms[1]['mobile-number'].value;
 if(mobileNumber.length>15 || mobileNumber.length<4){
     returnVal = false;
     setError(1);
 }
 else{
     removeError(1);
 }

 if(mobileNumber.includes('e')){
     returnVal = false;
     setError(2);
 }
 else{
     removeError(2);
 }
 //username
 let username = document.forms[1]['username'].value;
 if (username.length<4){
     returnVal = false;
     setError(3);
 }
 else{
     removeError(3);
 }
 //password
 let password = document.forms[1]['password'].value;
 if(password.length<6){
     returnVal =false;
     setError(4);
 }
 else{
     removeError(4);
 }
 //confirmPassword
 let confirmPassword = document.forms[1]['confirm-password'].value;
 if(!(confirmPassword===password)){
     returnVal =false;
     setError(5);
 }
 else{
     removeError(5);
 }




 return returnVal;
}                                                      
                                                                                   
