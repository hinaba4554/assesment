function showbookingoptions() 
{
    // remove previous booking option (booking-box)
    document.getElementById("bookingOptions").innerHTML="";

    var bookingtype = document.getElementById("bookingtype").value;

    if(bookingtype == "full-day") {
        // show only date input
        var DateInput = document.createElement("input");
        DateInput.type="date";
        DateInput.id="date";
        DateInput.required=true;


        document.getElementById("bookingOptions").appendChild(DateInput);
    }else if(bookingtype == "half-day")
      {
        // show only date input
        var DateInput = document.createElement("input");
        DateInput.type = "date";
        DateInput.id = "date";
        DateInput.required = true;

        // show only slot option 
        // for select-option
        var slotoption = document.createElement("select");
        slotoption.id = "slotoption";
        slotoption.required = "true";


        // for disable option 
        var option = document.createElement("option");
        option.value = "";
        option.disabled = "disabled";
        option.selected="selected";
        option.innerHTML = "---selected option---";

        // for multiple option 
        // 1.breackfast
        var breackfast = document.createElement("option");
        breackfast.value = "breackfast";
        breackfast.innerHTML = "breackfast";

        // 2.Lunch
        var Lunch = document.createElement("option");
        Lunch.value = "lunch";
        Lunch.innerHTML = "lunch";

        //3.Dinner

      var dinner = document.createElement("option");
      dinner.value = "dinner";
      dinner.innerHTML = "dinner";

      //  call multiple option 
      slotoption.appendChild(option);
      slotoption.appendChild(breackfast);
      slotoption.appendChild(Lunch);
      slotoption.appendChild(dinner);

      document.getElementById("bookingOptions").appendChild(DateInput);
      document.getElementById("bookingOptions").appendChild(slotoption);

      }else if(bookingtype=="hourly")
      {
          // for date including
           var DateInput = document.createElement("input");
           DateInput.input.type = "date";
           DateInput.id = "date";
           DateInput.required = true;

          //  for time including
           var timeinput = document.createElement("input");
           timeinput.type = "time";
           timeinput.id = "time";
           timeinput.required = true;


           document.getElementById("bookingOptions").appendChild(DateInput);
           document.getElementById("bookingOptions").appendChild(timeinput);
      }
      

}