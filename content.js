// Cannot inject a css file because it disrespects exclude_matches in manifest.
var styleEl = document.createElement('style');
var selector = '#gbg1';
if (location.hostname.indexOf('youtube.com') > 0) {
  selector = '#sb-button-notify';
}
styleEl.innerText = selector + ' {display: none!important; }';
document.head.appendChild(styleEl);
