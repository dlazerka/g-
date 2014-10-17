// Cannot inject a css file because it disrespects exclude_matches in manifest.
var styleEl = document.createElement('style');
var selector = '.gb_Oa, .gb_Oa div'; // red box
selector += ', #yt-masthead-user .sb-notif-on .yt-uix-button-content'; // youtube
styleEl.innerText = selector + ' {visibility: hidden !important; }';
document.head.appendChild(styleEl);
