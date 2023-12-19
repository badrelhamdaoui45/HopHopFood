(function () {
    var juicerCssUrl = "https://www.juicer.io/embed.css";
      var juicerJsUrl = "https://www.juicer.io/embed-no-jquery.js";

  function setAttributesToJuicerElement(juicerFeed) {
    if (!juicerFeed.hasAttribute('data-feed-id')) {
      juicerFeed.setAttribute('data-feed-id', 'hophopfood');
    }
    if (!juicerFeed.hasAttribute('data-origin')) {
      juicerFeed.setAttribute('data-origin', 'wp-plugin-1-12');
    }

  }
  var feedElements = document.querySelectorAll('.juicer-feed[data-feed-id="hophopfood" i]')
  if (feedElements.length === 0) {
    var juicerScript = document.currentScript;
    var juicerFeed = document.createElement('div');
    juicerFeed.setAttribute('class', 'juicer-feed');
    setAttributesToJuicerElement(juicerFeed);
    juicerScript.parentNode.appendChild(juicerFeed);
  } else {
    feedElements.forEach(setAttributesToJuicerElement);
  }

  var head  = document.head;
  var link  = document.createElement('link');
  link.rel  = 'stylesheet';
  link.type = 'text/css';
  link.href = juicerCssUrl;
  link.media = 'all';
  head.appendChild(link);


  var script = document.createElement('script');
  script.src = juicerJsUrl;
  head.appendChild(script);
})();
