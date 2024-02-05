$(document).ready(function(){  

	var swiper = new Swiper(".about-slider", {		
		  effect: "coverflow",
		  grabCursor: true,
		  centeredSlides: true,
		  slidesPerView: "auto",
		  coverflowEffect: {
			scale: 0.8,
			rotate: 0,
			slideShadows:false
		  },	
		navigation: {
			nextEl: ".about-slider-next",
			prevEl: ".about-slider-prev",
		},
    });
	
	var swiper1 = new Swiper(".study__slider", {    
		navigation: {
			nextEl: ".study__slider-next",
			prevEl: ".study__slider-prev",
		},
		pagination: {
			el: ".study__slider-pagination",
			clickable: true,
			renderBullet: function (index, className) {
			  return '<span class="' + className + '">' + (index + 1) + "</span>";
			},
		},		 
    });
	
	var swiper2 = new Swiper(".clients__slider", {    
		mousewheel: true,
		calculateHeight:true,
		slidesPerView: "auto",			
    });
	
	$('.faq__item').click(function () {
		$(this).toggleClass('active');
		$(this).children('.faq__item-text').slideToggle();
	});
	
	
    $("a").click(function(event){
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 800);
    });
	
	
});