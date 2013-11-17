// Cannot inject a css file because it disrespects exclude_matches in manifest.
var styleEl = document.createElement('style');
var selector = '.gb_qa .gb_pa'; // red box
selector +=  ', .gb_qa .gb_ra, .gb_qa .gb_ra.gb_sa'; // number in red box
selector += ', #yt-masthead-user .sb-notif-on .yt-uix-button-content'; // youtube
styleEl.innerText = selector + ' {visibility: hidden; }';
document.head.appendChild(styleEl);
