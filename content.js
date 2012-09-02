function seekAndDestroy() {
  var el = document.getElementById('gbi1a');
  if (el && location.hostname.indexOf('plus.google.com')) {
    el.style.display = 'none';
    return true;
  }
  return false;
}

if (!seekAndDestroy()) {
  // Hack for GMail, anyway it's gonna show progress bar for a second. 
  window.setTimeout(seekAndDestroy, 100);
}