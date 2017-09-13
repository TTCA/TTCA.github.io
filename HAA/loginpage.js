function loginpage_authenticate(){
  var email=$("#loginpage_email").val();
  var password=$("#loginpage_password").val();
  $.ajax({
     url: "http://lollipop.tathva.org/HAA/signin.php",
     method: "POST",
     dataType: "json",
     data:"email="+email+"&password="+password,
     success:function(result){
        if(result.status=="good"){
          load_messfeedbacks_view();
          $("#menu_username").html(result.roll);
          show_menu();
        }
        else{
          if(result.reason=='not exist'){
            alert("Not created an account yet");
          }
          else{
              alert("Wrong password.");
          }
        }
      }
  });
}
