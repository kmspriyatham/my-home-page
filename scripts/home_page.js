$( document ).ready( function() {
var $window = $(window);
var distanceToHome = $('#home').offset().top;
var distanceToAboutMe = $('#about_me').offset().top;
var distanceToProjects = $('#projects').offset().top;
var distanceToContact = $('#contact').offset().top;
var distanceToInterests = $('#interests').offset().top;
$window.scroll(function() {
    var cur_dis = $window.scrollTop();
    if ( cur_dis >= distanceToHome - 75 && cur_dis <= distanceToAboutMe ) {
        $('#id_home_but').attr('class', 'active');
        $('#id_about_me_but').attr('class', '');
        $('#id_projects_but').attr('class', '');
        $('#id_contact_but').attr('class', '');
        $('#id_interests_but').attr('class', '');
        $('#id_resume_but').attr('class','');
    }
    if ( cur_dis >= distanceToAboutMe - 75 && cur_dis <= distanceToProjects ) {
        $('#id_home_but').attr('class', '');
        $('#id_about_me_but').attr('class', 'active');
        $('#id_projects_but').attr('class', '');
        $('#id_contact_but').attr('class', '');
        $('#id_interests_but').attr('class', '');
        $('#id_resume_but').attr('class','');
    }
    if ( cur_dis >= distanceToProjects - 75 && cur_dis <= distanceToContact ) {
        $('#id_home_but').attr('class', '');
        $('#id_about_me_but').attr('class', '');
        $('#id_projects_but').attr('class', 'active');
        $('#id_contact_but').attr('class', '');
        $('#id_interests_but').attr('class', '');
        $('#id_resume_but').attr('class','');
    }
    if ( cur_dis >= distanceToContact - 75 && cur_dis <= distanceToInterests ) {
        $('#id_home_but').attr('class', '');
        $('#id_about_me_but').attr('class', '');
        $('#id_projects_but').attr('class', '');
        $('#id_contact_but').attr('class', 'active');
        $('#id_interests_but').attr('class', '');
        $('#id_resume_but').attr('class','');
    }
    if ( cur_dis >= distanceToInterests - 75) {
        $('#id_home_but').attr('class', '');
        $('#id_about_me_but').attr('class', '');
        $('#id_projects_but').attr('class', '');
        $('#id_contact_but').attr('class', '');
        $('#id_interests_but').attr('class', 'active');
        $('#id_resume_but').attr('class','');
    }

});
var flag = 0;
var surprises = [
"I was born on 25<sup>th</sup> December, 1994.",
"My favourite movie is The Avengers.",
"Research has always been my passion.",
"Python is my favourite programming language.",
"I use C++ most of the time, because it's fun.",
"I hate Java, Javascript, CSS and Photoshop.",
"My favourite physicist is Richard Feynman.",
"My favourite mathematician is Carl Gauss.",
"I love competitive programming.",
"My AIR in IIT-JEE 2012 was 80.",
]; 
var n = surprises.length;
	$('#form_but').mouseenter(function(event) {
		event.preventDefault();
			var index = Math.floor(Math.random() * n);
			var surp = surprises[index];
			$('#surprise').empty();
			$('#surprise').hide();
			$('#surprise').append(surp);
			$('#surprise').fadeIn(500);
	});
	
	$('#form_but').mouseleave(function(event) {
		event.preventDefault();
		$('#surprise').fadeOut(500);
	});
    
    $("#projects_but").click(function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $("#projects").offset().top - 70
        }, 500);
    });

    $("#about_me_but").click(function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $("#about_me").offset().top - 70
        }, 500);
    });

    $("#interests_but").click(function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $("#interests").offset().top - 70
        }, 500);
    });

    $("#home_but").click(function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $("#home").offset().top - 70
        }, 500);
    });

    $("#contact_but").click(function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $("#contact").offset().top - 70
        }, 500);
    });

    $("#resume_but").click(function(event) {
        //event.preventDefault();
    });

    $("#my_name").click(function(event) {
        event.preventDefault();
    });

    //Facebook API
});
