// Cannot inject a css file because it disrespects exclude_matches in manifest.
var styleEl = document.createElement('style');
styleEl.innerText = '#gbi1a { display: none!important; }';
document.head.appendChild(styleEl);
