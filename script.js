
TweenMax.to(".loading-screen", 4, {
      delay: 3.5,
      top: "-110%",
      ease: Expo.easeInOut
});

TweenMax.from(".logo", 3, {
      delay: 7,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut
});

TweenMax.from(".contact", 3, {
      delay: 8,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut
});

TweenMax.from(".options", 3, {
      delay: 8,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut
});

TweenMax.from(".bottom-text", 3, {
      delay: 8,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut
});

TweenMax.from(".copyright", 3, {
      delay: 8,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut
});

TweenMax.from(".media ul li", 3, {
      delay: 8,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut
});

// TweenMax.staggerFrom(".media ul li", 2, {
//       delay: 8,
//       opacity: 0,
//       y: 20,
//       ease: Power3.easeInOut
// }, 0.1);

TweenMax.from(".menu", 3, {
      delay: 8,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut
});

TweenMax.from(".p1", 3, {
      delay: 7,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut
});
TweenMax.from("#title", 3, {
      delay: 7,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut
});

TweenMax.from(".p2", 3, {
      delay: 7.2,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut
});

TweenMax.from("#one", 3, {
      delay: 7.4,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut
});

TweenMax.from("#two", 3, {
      delay: 7.7,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut
});

var t1 = new TimelineMax();

t1.from(".ringOne", 4, {
      delay: 0.4,
      opacity: 0,
      y: 40,
      ease: Expo.easeInOut
}).from(".ringTwo", 4, {
      delay: 0.9,
      opacity: 0,
      y: 40,
      ease: Expo.easeInOut
}, "-=5").from(".logo-hero", 3, {
      delay: 1.1,
      opacity: 0,
      y: 40,
      ease: Expo.easeInOut
}, "-=5").from(".hi-content", 1, {
      delay: 3.5,
      opacity: 0,
      // y: 40,
      ease: Expo.easeInOut
}, "-=5")

      .to(".ringOne", 4, {
            delay: 0.4,
            x: 40,
            ease: Expo.easeInOut
      }).to(".ringTwo", 4, {
            delay: 0.9,
            x: 40,
            ease: Expo.easeInOut
      }, "-=5").to(".logo-hero", 3, {
            delay: 1.1,
            x: 285,
            opacity: 1,
            ease: Expo.easeInOut
      }, "-=5").to(".hi-content", 1, {
            delay: 1.1,
            // x: 230,
            opacity: 0,
            ease: Expo.easeInOut
      }, "-=5");

// var textWrapper = document.querySelector('.ml7 .letters');
// textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

// anime.timeline({ loop: false })
//       .add({
//             targets: '.ml7 .letter',
//             translateY: ["1.1em", 0],
//             translateX: ["0.55em", 0],
//             translateZ: 0,
//             rotateZ: [180, 0],
//             duration: 750,
//             easing: "easeOutExpo",
//             delay: function (el, i) {
//                   return 9000 + 50 * i;
//             }
//       });

