$(document).ready(function(){
  load_loginpage_view();
})
var menu_status=0;
function activate_menu(){
  if(menu_status==0){
    $("#menu").fadeIn(function(){

        $("#messfeedbacks_img").css("filter","grayscale(100%)");
        $("#myfeedback_img").css("filter","grayscale(100%)");
        $("#messusage_img").css("filter","grayscale(100%)");
        $("#menu_activator").css("filter","grayscale(0%)");
      menu_status=1;
    });
    $("#container").css("filter"," blur(10px)");
  }
}
function deactivate_menu(){
  if(menu_status==1){
    $("#menu").fadeOut(function(){
        menu_status=0;
    });
    $("#container").css("filter","blur(0px)");
  }
}

function show_menu(){
  $("#menu_bar").fadeIn();
}
function hide_menu(){
  $("#menu_bar").fadeOut();
}
function logout(){
  load_loginpage_view();
}

function load_signup_view(){
  alert("You need to contact app maker for an account.");
}







function load_loginpage_view(){
  hide_menu();
  var html="<meta name='viewport' content='width=device-width, initial-scale=1.0'> <div id='loginpage'>";
  html+="<div id=loginpage_title>";
  html+="      <div id='loginpage_college'>NITC</div>";
  html+="      <div id='loginpage_app'>Hostel Affairs App</div>";
  html+="    </div>";
  html+="    <div id='loginpage_form'>";
  html+="      <input id='loginpage_email' class='text_field' type='email' placeholder='Email'><br>";
  html+="      <input id='loginpage_password' class='text_field' type='password' placeholder='Password'>";
  html+="      <div id='loginpage_action' class='button'>Login</div>";
  html+="      <div id='loginpage_signup'>Not a user yet? Sign up <a id='signup_link' style='text-decoration:underline'>here</a></div>";
  html+="    </div>";
  html+="  </div>";
  $("#container").html(html);
  $("#loginpage_action").click(function(){
    loginpage_authenticate();
  });
  $("#signup_link").click(function(){
    load_signup_view();
  });
}

function create_messfeedback_bar(mess,food,staff,extra,kerala,ap,north,other){
  var avg=(food*0.5+staff*0.3+extra*0.2);
  var html="<div class='messfeedback_messbar'>";
    html+="<div class='messfeedback_firstbar'>";
    html+="  <div class='messfeedback_messname'>"+mess+"</div>";
    html+="  <div class='messfeedback_rating'>"+avg+"</div>";
    html+="</div>";
    html+="<div class='messfeedback_scorebar'>";
    html+=" <div class='messfeedback_score_food'>";
    html+="   <div class='messfeedback_score_food_title'>Food</div>";
    html+="   <div class='messfeedback_score_food_score'>"+food+"</div>";
    html+=" </div>";
    html+=" <div class='messfeedback_score_staff'>";
    html+="   <div class='messfeedback_score_staff_title'>Staff</div>";
    html+="   <div class='messfeedback_score_staff_score'>"+staff+"</div>";
    html+=" </div>";
    html+=" <div class='messfeedback_score_extras'>";
    html+="   <div class='messfeedback_score_extras_title'>Extras</div>";
    html+="   <div class='messfeedback_score_extras_score'>"+extra+"</div>";
    html+=" </div>";
    html+="</div>";
    html+="<div class='messfeedback_recommended'>";
    html+=" Recommended for";
    html+=" <div class='messfeedback_recommended_bar'>";
    html+="   <div class='messfeedback_recommended_kerala' style='flex-grow:"+kerala+"'>KL</div>";
    html+="   <div class='messfeedback_recommended_ap' style='flex-grow:"+ap+"'>AP</div>";
    html+="   <div class='messfeedback_recommended_north' style='flex-grow:"+north+"'>NI</div>";
    html+="   <div class='messfeedback_recommended_others' style='flex-grow:"+other+"'>OT</div>";
    html+=" </div>";
    html+="</div>";
    html+="</div>";
    return html;
}



function load_messfeedbacks_view(){
  $.ajax({
     url: "http://amal.tathva.org/HAA/messstats.php",
     method: "POST",
    dataType: "json",
     success:function(result){
      var messdetails=result;
       var html="<div id='messfeedbacks'>";
       for (messnumber in messdetails){
         var mess=messdetails[messnumber];
         html+=create_messfeedback_bar(mess.name,mess.food,mess.staff,mess.extra,mess.kl,mess.ap,mess.ni,mess.ot);
       }
       html+="</div>";
       $("#messfeedbacks_img").css("filter","grayscale(0)");
       $("#myfeedback_img").css("filter","grayscale(100%)");
       $("#messusage_img").css("filter","grayscale(100%)");
       $("#menu_activator").css("filter","grayscale(100%)");
       $("#container").html(html);
      }
  });
}







function load_myfeedback_view(){
  var html="<div id='myfeedback'>";
  html+="  <div id='myfeedback_form'>";
  html+="    <div id='myfeedback_hostel_label'>Your Mess</div>";
  html+="    <select id='myfeedback_hostel_textbox'>";
  html+="      <option class='myfeedback_recommend_option'>A Mess</option>";
  html+="      <option class='myfeedback_recommend_option'>B Mess</option>";
  html+="      <option class='myfeedback_recommend_option'>C Mess</option>";
  html+="      <option class='myfeedback_recommend_option'>D Mess</option>";
  html+="      <option class='myfeedback_recommend_option'>E Mess</option>";
  html+="      <option class='myfeedback_recommend_option'>F Mess</option>";
  html+="      <option class='myfeedback_recommend_option'>G Mess</option>";
  html+="    </select>";
  html+="    <div id='myfeedback_food_label'>Food rating</div>";
  html+="    <input id='myfeedback_food_textbox' class='text_field'>";
  html+="    <div id='myfeedback_staff_label'>Staff rating</div>";
  html+="    <input id='myfeedback_staff_textbox' class='text_field'>";
  html+="    <div id='myfeedback_extras_label'>Extras rating</div>";
  html+="    <input id='myfeedback_extras_textbox' class='text_field'>";
  html+="    <div id='myfeedback_recommend_label'>Would Recommended Mess for people from</div>";
  html+="    <select id='myfeedback_recommend_select'>";
  html+="      <option class='myfeedback_recommend_option'>Kerala</option>";
  html+="      <option class='myfeedback_recommend_option'>Andhra Pradesh</option>";
  html+="      <option class='myfeedback_recommend_option'>North India</option>";
  html+="      <option class='myfeedback_recommend_option'>Other</option>";
  html+="    </select>";
  html+="    <div id='myfeedback_submit' class='button'>Submit Feedback</div>";
  html+="  </div>";
  html+="</div>";

  $("#messfeedbacks_img").css("filter","grayscale(100%)");
  $("#myfeedback_img").css("filter","grayscale(0)");
  $("#messusage_img").css("filter","grayscale(100%)");
  $("#menu_activator").css("filter","grayscale(100%)");
  $("#container").html(html);

  $("#myfeedback_submit").click(function(){
    formsubmit_myfeedback($("#myfeedback_hostel_textbox").val(),$("#myfeedback_food_textbox").val(),$("#myfeedback_staff_textbox").val(),$("#myfeedback_extras_textbox").val(),$("#myfeedback_recommend_select").val());
  });
}

function load_successful_myfeedback_view(){
  var html="<div id='myfeedback_done'>";
  html+="  <div id='myfeedback_verified'><img src='verified.png'></div>";
  html+="  <div id='myfeedback_sucessmessage'>Your feedback has been submitted</div>";
  html+="  <div id='myfeedback_anotherone' class='button'>Change feedback</div>";
  html+="</div>";
  $("#myfeedback").html(html);
  $("#myfeedback_anotherone").click(function(){
    load_myfeedback_view();
  });
}


function load_submitcomplaint_view(){
  var html="<div id='submitcomplaint'>";
  html+="  <div id='submitcomplaint_form'>";
  html+="    <div id='submitcomplaint_hostel_label'>Hostel</div>";
  html+="    <select id='submitcomplaint_hostel_select' class='select'>";
  html+="         <option>A Hostel</option>";
  html+="         <option>B Hostel</option>";
  html+="         <option>C Hostel</option>";
  html+="         <option>D Hostel</option>";
  html+="         <option>E Hostel</option>";
  html+="         <option>F Hostel</option>";
  html+="         <option>G Hostel</option>";
  html+="    </select>";
  html+="    <div id='submitcomplaint_room_label'>Room no.</div>";
  html+="    <input id='submitcomplaint_room_textbox' class='text_field'>";
  html+="    <div id='submitcomplaint_desc_label'>Description</div>";
  html+="    <textarea id='submitcomplaint_desc_textbox' class='text_field'></textarea>";
  html+="    <div id='submitcomplaint_action' class='button'>Submit</div>";
  html+="  </div>";
  html+="</div>";
  $("#container").html(html);
  $("#submitcomplaint_action").click(function(){
    formsubmit_complaint($("#submitcomplaint_hostel_select").val(),$("#submitcomplaint_room_textbox").val(),$("#submitcomplaint_desc_textbox").val());
  });
}


function load_successful_complaint_view(){
  var html="<div id='submitcomplaint_done'>";
  html+="  <div id='submitcomplaint_verified'><img src='verified.png'></div>";
  html+="  <div id='submitcomplaint_sucessmessage'>Your complaint has been submitted</div>";
  html+="  <div id='submitcomplaint_anotherone' class='button'>New complaint</div>";
  html+="</div>";
  $("#submitcomplaint").html(html);
  $("#submitcomplaint_anotherone").click(function(){
    load_submitcomplaint_view();
  });
}








function create_extra_bar(item,time,price,last){
  var html="<div class='mess_extrabar";
  if(last==1){
    html+=" mess_extrabar_last";
  }
  html+="'>";
  html+="  <div class='mess_extraitemdetail'>";
  html+="    <div class='mess_extraname'>"+item+"</div>";
  html+="    <div class='mess_time'>"+time+"</div>";
  html+="  </div>";
  html+="  <div class='mess_extraitemprice'>&#8377;"+price+"</div>";
  html+="</div>";
  return html;
}

function create_extra_daybar(day,extras){
  var html="<div class='mess_daybar'>";
  html+="  <div class='mess_daytitle'>"+day+"</div>";
  html+="  <div class='mess_extraslist'>";
  for (extra in extras){
    html+=create_extra_bar(extra.item,extra.time,extra.price,extra.last);
  }
  html+="      </div>";
  html+="</div>";
}




function load_mess_view(){
  var html="<div id='mess'>";
  html+="    <div id='mess_totalbar'><div>Total=</div><div id='mess_total'>&#8377;256</div></div>";
  html+="    <div id='mess_list'>";
  var days=[];
  for (day in days){
    html+=create_extra_daybar(day.day,day.extras);
  }
  html+="      </div>";
  html+="    </div>";
  html+="</div>";
          $("#messfeedbacks_img").css("filter","grayscale(100%)");
          $("#myfeedback_img").css("filter","grayscale(100%)");
          $("#messusage_img").css("filter","grayscale(0%)");
          $("#menu_activator").css("filter","grayscale(100%)");
html="<div id='submitcomplaint_sucessmessage'>Coming soon</div>";
          $("#container").html(html);
}


function load_contacts_view(){
    var html="<div id='submitcomplaint_sucessmessage'>Coming soon</div>";
    $("#container").html(html);
}
