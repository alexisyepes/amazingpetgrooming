$(document).ready(function () {

mySlideShow();


function mySlideShow() {
    $("#slideshow > div:gt(0)").hide();

    setInterval(function() { 
      $('#slideshow > div:first')
        .fadeOut(3000)
        .next()
        .fadeIn(3000)
        .end()
        .appendTo('#slideshow');
    },  5000);
}


//************Scheduler code */

var recurrence = new $.ig.scheduler.DateRecurrence();
recurrence.frequency($.ig.scheduler.DateRecurrenceFrequency.daily);
recurrence.count(3);

var today = new Date(),
    currentYear = today.getFullYear(),
    currentMonth = today.getMonth(),
    appointments = [{
        "resourceId": 2,
        "id": 1,
        "start": new Date(currentYear, currentMonth, 2, 6, 45),
        "end": new Date(currentYear, currentMonth, 3, 6, 45),
        "subject": "Full Grooming Service"
    }
    ],
    resources = [
        {
            id: 1,
            displayName: "Paula"
        },
        {
            id: 2,
            displayName: "Diana"
        },
        {
            id: 3,
            displayName: "Claudia"
        },
        
    ],
    recurrenceAppointments = [{
        "resourceId": 1,
        "id": 10,
        "start": new Date(currentYear, currentMonth, 4, 8),
        "end": new Date(currentYear, currentMonth, 4, 8, 30),
        "subject": "Cat",
        "description": "Lion Cut"
    }];
  
    $(function () {
      $("#scheduler").igScheduler({
          height: "650px",
          width: "100%",
          selectedDate: today,
          views: ["monthView", "agendaView"],
          dataSource: appointments,
          resources: resources
      });
  });
            

//*************************** */
});




