// smooth momentum sco
// jQuery(function($) {
//
//   "use strict";
//
//   var win = $(window)
//   , target = $('body')
//   , wrapper = target.find('> div')
//   , easing = "cubic-bezier(.3,.59,.4,1.04)" //css easing
//   , duration = "1s" //duration ms(millisecond) or s(second)
//   , top = 0
//   , kineticScroll = {
//     _init: function() {
//       if( wrapper.length == 1 ) {
//         target.height(wrapper.height());
//         wrapper.css({
//           transition: 'transform ' + duration + ' ' + easing,
//           position: 'fixed',
//           top: '0',
//           left: '0',
//           width: '100%',
//           padding: '0',
//           zIndex: '2'
//         });
//
//         win.on({
//           scroll: function () {
//             kineticScroll._scroll();
//           }
//           , resize: function() {
//             target.height(wrapper.outerHeight());
//           }
//         });
//
//         kineticScroll._scroll();
//       }
//     },
//     _scroll: function() {
//       top = win.scrollTop();
//       wrapper.css('transform', 'translateY(-' + top + 'px)');
//     }
//   };
//
//   if (typeof window.ontouchstart == 'undefined') {
//     kineticScroll._init();
//   }
// });
$(".my-paroller").paroller();
