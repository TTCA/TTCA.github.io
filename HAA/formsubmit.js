function formsubmit_complaint(hostel,room,complaint){
  $.ajax({
     url: "http://amal.tathva.org/HAA/submitcomplaint.php",
     method: "POST",
     data:"hostel="+hostel+"&room="+room+"&complaint="+complaint,
     success:function(result){
       load_successful_complaint_view();
      }
  });
}

function formsubmit_myfeedback(mess,food,staff,extras,recom){
  $.ajax({
     url: "http://amal.tathva.org/HAA/myfeedback.php",
     method: "POST",
     data:"mess="+mess+"&food="+food+"&staff="+staff+"&extras="+extras+"&recom="+recom,
     success:function(result){
       console.log(result);
         load_successful_myfeedback_view();
      }
  });
}
