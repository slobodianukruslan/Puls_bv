$(document).ready(function(){
	
	// Initialization of Slick Slider

	$('.carousel__inner').slick({
		infinite: true,
		speed: 2000,
		// adaptiveHeight: true,
		autoplay: true,
		autoplaySpeed: 2000,
		pauseOnHover: false,
		slide: ".carousel__item",
		prevArrow:".arrow__left",
		nextArrow:".arrow__right",
		responsive: [
		{
			breakpoint: 930,
			settings: {
				arrows: false,
				dots: true
			}
		}],
	});

	
	// Catalog Tabs

	$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab--active)', function() {
    $(this)
      .addClass('catalog__tab--active').siblings().removeClass('catalog__tab--active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content--active').eq($(this).index()).addClass('catalog__content--active');
  });


	// Flip card

	const button = document.getElementsByClassName('flip-block__link');

	for (let card of button) {
		function flipCard(e) {
			e.preventDefault();
			if (this.parentNode.classList.contains('flip-block__front')) {
				this.parentNode.classList.add('flip-block__front--active');
				this.parentNode.nextElementSibling.classList.add('flip-block__back--active');
			} else if(this.parentNode.classList.contains('flip-block__back')) {
				this.parentNode.classList.remove('flip-block__back--active');
				this.parentNode.previousElementSibling.classList.remove('flip-block__front--active');
			}
		}	
		card.addEventListener('click', flipCard);
	}

	// Modal windows

		// Close for all windows
	$('.modal__close').on('click', function() {
		$('.overlay, #consultation, #order, #thanks').fadeOut('slow');
	});
		
		// Modal window header
	$('[data-modal=consultation]').on('click', function() {
		$('.overlay, #consultation').fadeIn('slow');
	});

		// Modal window catalog
	$('.button--catalog').each(function(i) {
		$(this).on('click', function() {
			$('#order .modal__descr').text($('.flip-block__title').eq(i).text());
			$('.overlay, #order').fadeIn('slow');
		});
	});


	// Form validate

	function validateForms(form){
		$(form).validate({
			rules: {
				name: "required",
				phone: "required",
				email: {
					required: true,
					email: true
				}			
			},
			messages: {
				name: "Пожалуйста, введите ваше имя",
				phone: "Пожалуйста, введите ваш номер телефона",
				email: {
					required: "Пожалуйста, введите ваш e-mail",				
					email: "Формат почты должен быть таким: name@domain.com"
				}
			}
		});
	};

	validateForms('#consultation-form');
	validateForms('#consultation form');
	validateForms('#order form');

	
	// Mask for phone number

	$('input[name=phone]').mask("+7 (***) ***-**-**");

	
	// Smooth scroll

	$(window).scroll(function() {
		if ($(this).scrollTop() > 1000) {
			$('.scroll-up').fadeIn();
		} else {
			$('.scroll-up').fadeOut();
		}
	});


	$("a[href^='#']").click(function(){
		const _href = $(this).attr("href");
		$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
		return false;
	});


	// Initialization WOW
	new WOW().init();

});