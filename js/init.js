// var clock = $('.clock').FlipClock(new Date("February 5, 2016 10:00:00"),{
//     clockFace: 'DailyCounter',
//     countdown: true
//     });  

var clock;

$(document).ready(function() {
	var clock;

	clock = $('.clock').FlipClock({
        clockFace: 'DailyCounter',
        autoStart: false,
        callbacks: {
        	stop: function() {
        		$('.message').html('The clock has stopped!')
        	}
        }
    });
		    
    clock.setTime(8288580);
    clock.setCountdown(true);
    clock.start();


    $(".modal").modal();
    $(".collapsible").collapsible();
});