if (location.hostname.indexOf('plus.google.com') &&
    location.hostname.indexOf('plus.sandbox.google.com')) {
  var styleEl = document.createElement('style');
  styleEl.innerText = '#gbi1a { display: none!important; }'
  document.head.appendChild(styleEl);
}
