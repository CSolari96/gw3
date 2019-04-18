$('.embed-video').embedVideo();
$('.embed-video').embedVideo({
  kalturaServerURL: 'http://cloudvideo.cdn.net.co',
  maxWidth : '1200px', // data-max-width
  html5 : false,
  autoplay: false, // data-autoplay
  thumbnail : false, // data-thumbnail
  width : '100%', // data-width
  height : '100%', // data-height
  play : '<svg enable-background="new 0 0 34 34" height="34px" id="Layer_1" version="1.1" viewBox="0 0 34 34" width="34px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M17.078,0.25c-9.389,0-17,7.611-17,17s7.611,17,17,17s17-7.611,17-17S26.467,0.25,17.078,0.25z M14,23.963  V10.537l9,6.713L14,23.963z" fill="#FFF"/></svg>',
  playWidth: '100px',
  playHeight: '100px',
  playOpacity: '0.7'
});
