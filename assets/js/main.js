$(document).ready(function() {
	var $btns = $('.tab-link').click(function() {
	  if (this.id == 'all') {
	    $('#work-image > a').fadeIn(450);
	  } else {
	    var $el = $('.' + this.id).fadeIn(450);
	    $('#work-image > a').not($el).hide();
	  }
	  $btns.removeClass('active');
	  $(this).addClass('active');
	})
});










gsap.registerPlugin(ScrollTrigger);

const pageContainer = document.querySelector('[data-scroll-container]');
const pageContainer = document.querySelector('[data-scroll-container]');

/* SMOOTH SCROLL */
const scroller = new LocomotiveScroll({
  el: pageContainer,
  smooth: true
});

scroller.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(pageContainer, {
  scrollTop(value) {
    return arguments.length
      ? scroller.scrollTo(value, 0, 0)
      : scroller.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      left: 0,
      top: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  },
  pinType: pageContainer.style.transform ? "transform" : "fixed"
});

window.addEventListener("load", function () {
  let pinBoxes = document.querySelectorAll(".services-wrap > *");
  let textWrap = document.querySelector(".services-wrap");
  let textWrapWidth = textWrap.offsetWidth;
  let horizontalScrollLength = textWrapWidth - window.innerWidth;

  // Pinning and horizontal scrolling

  gsap.to(".services-wrap", {
    scrollTrigger: {
      scroller: pageContainer, //locomotive-scroll
      scrub: true,
      trigger: "#sectionPin",
      pin: true,
      // anticipatePin: 1,
      start: "top top",
      end: textWrapWidth
    },
    x: -horizontalScrollLength,
    ease: "none"
  });


  ScrollTrigger.addEventListener("refresh", () => scroller.update()); //locomotive-scroll
  ScrollTrigger.refresh();

  
});





// window.addEventListener("load", function () {
// 	let pinBoxes = document.querySelectorAll(".my-text > *, .my-text2 > *");
// 	let pinWrap = document.querySelector(".my-text,.my-text2");
// 	let pinWrapWidth = pinWrap.offsetWidth;
// 	let horizontalScrollLength = pinWrapWidth - window.innerWidth;
  
// 	// Pinning and horizontal scrolling
//   gsap.to(".my-text", {
// 	  scrollTrigger: {
// 		scroller: pageContainer, //locomotive-scroll
// 		scrub: true,
// 		trigger: "#text-section",
// 		pin: true,
// 		// anticipatePin: 1,
// 		start: "top top",
// 		end: pinWrapWidth
// 	  },
// 	  x: -horizontalScrollLength,
// 	  ease: "none"
// 	});
// 	gsap.to(".my-text2", {
// 	  scrollTrigger: {
// 		scroller: pageContainer, //locomotive-scroll
// 		scrub: true,
// 		trigger: "#text-section",
// 		pin: true,
// 		// anticipatePin: 1,
// 		start: "top top",
// 		end: pinWrapWidth
// 	  },
// 	  x: +horizontalScrollLength,
// 	  ease: "none"
// 	});
  
// 	ScrollTrigger.addEventListener("refresh", () => scroller.update()); //locomotive-scroll
// 	ScrollTrigger.refresh();
  
	
//   });