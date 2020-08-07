$(document).ready(function () {
	// this carousel for about us section
	// ==================================
	var owl = $(".service-slider");
	owl.owlCarousel({
		loop: true,
		nav: false,
		margin: 20,
		dots: false,
		navRewind: false,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 2,
			},
			1000: {
				items: 3,
			},
		},
	});

	// this carousel for testimonials section
	// ========================================
	var testimonials = $(".testimony-slide");
	testimonials.owlCarousel({
		center: true,
		items: 5,
		dots: true,
		loop: true,
		autoplay: false,
		dotsData: true,
		margin: 50,
		responsive: {
			0: {
				items: 1,
			},
			480: {
				items: 2,
			},
			600: {
				items: 3,
			},
			1000: {
				items: 5,
			},
		},
	});

	// this code for smooth scrolling
	// ================================
	// select all links with hashes
	$('a[href*="#"]')
		// Remove links that don't actually link to anything
		.not('[href="#"]')
		.not('[href="#0"]')
		.not('[href="#Chef-Special"]')
		.not('[href="#Lunch-Special"]')
		.not('[href="#Amazing-Appetizers"]')

		.click(function (event) {
			if (
				location.pathname.replace(/^\//, "") ==
					this.pathname.replace(/^\//, "") &&
				location.hostname == this.hostname
			) {
				var target = $(this.hash);
				target = target.length
					? target
					: $("[name" + this.hash.slice(1) + "]");
				// dose a scroll target axist ?
				if (target.length) {
					// only prevent default of animations is actually gonna happen
					event.preventDefault();
					$("html,body").animate(
						{
							scrollTop: target.offset().top,
						},
						1000,
						function () {
							// callback after animation
							// mst change focus
							var $target = $(target);
							$target.focus();
							if ($target.is(":focus")) {
								return false;
							} else {
								$target.attr("tabindex", "-1");
								$target.focus();
							}
						}
					);
				}
			}
		});
});
