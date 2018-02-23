$(document).ready(function(){
	//responsive slicnav 
	$('#nav').slicknav();
	
	//owl carousel
	 $('.owl-carousel-run').owlCarousel({
    loop:true,
	navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
	autoplay:true,
	autoplayTimeout:3000,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
//owl carousel
	$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
	autoplay:true,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})

	
});