// Doing using JS, not a pure CSS file, because then it would disrespect exclude_matches in manifest.

var selector = '#gbwa + div a div:last-child'; // selector for the red circle with unread number in it

selector += ', #yt-masthead-user .sb-notif-on .yt-uix-button-content'; // youtube-specific

// hide it!
var styleEl = document.createElement('style');
styleEl.innerText = selector + ' {visibility: hidden !important; }';
document.head.appendChild(styleEl);
