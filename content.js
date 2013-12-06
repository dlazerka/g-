// Cannot inject a css file because it disrespects exclude_matches in manifest.
var styleEl = document.createElement('style');
var selector = 'a[href^="https://plus.google.com/u/"][href*="notifications/all"] div:nth-child(2)'; // red box
selector += ', ' + selector + ' div'; // number in red box
selector += ', #yt-masthead-user .sb-notif-on .yt-uix-button-content'; // youtube
styleEl.innerText = selector + ' {visibility: hidden !important; }';
document.head.appendChild(styleEl);
