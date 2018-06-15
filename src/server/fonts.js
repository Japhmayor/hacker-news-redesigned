// Load fonts
//
// The technique is a combination of using fontfaceobserver and storing data-uri
// encoded fonts in the localstorage for perfect font loading experience.
//
// FontFaceObserver eliminates any visible flicker (FOIT) during the initial load,
// by simply swtiching from fallback to primary typeface when fonts are loaded.
// Permanently caching fonts as a CSS file in localstorage completely eliminates FOUT on subsequent visits.
//
// https://www.smashingmagazine.com/2014/09/improving-smashing-magazine-performance-case-study/#webfonts
// https://gist.github.com/hdragomir/8f00ce2581795fd7b1b7
// https://fontfaceobserver.com

const fonts = process.env.NODE_ENV === 'development'
  // If in development mode, simply load fonts from Google, and add `fonts-loaded` class to <HTML> so fonts styles are applied.
  ? `
    <link href="https://fonts.googleapis.com/css?family=Fira+Sans:400,400i,500,600" rel="stylesheet">
    <script>document.documentElement.className += " fonts-loaded";</script>
    `
  // Otherwise start font loading magic fuckery.
  : `
    <script>
      (function() {
        // FontFace Observer: https://github.com/bramstein/fontfaceobserver
        (function(){function e(e,t){document.addEventListener?e.addEventListener("scroll",t,!1):e.attachEvent("scroll",t)}function t(e){document.body?e():document.addEventListener?document.addEventListener("DOMContentLoaded",function t(){document.removeEventListener("DOMContentLoaded",t),e()}):document.attachEvent("onreadystatechange",function n(){if("interactive"==document.readyState||"complete"==document.readyState)document.detachEvent("onreadystatechange",n),e()})}function n(e){this.a=document.createElement("div"),this.a.setAttribute("aria-hidden","true"),this.a.appendChild(document.createTextNode(e)),this.b=document.createElement("span"),this.c=document.createElement("span"),this.h=document.createElement("span"),this.f=document.createElement("span"),this.g=-1,this.b.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.c.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.f.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.h.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;",this.b.appendChild(this.h),this.c.appendChild(this.f),this.a.appendChild(this.b),this.a.appendChild(this.c)}function r(e,t){e.a.style.cssText="max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;left:-999px;white-space:nowrap;font:"+t+";"}function i(e){var t=e.a.offsetWidth,n=t+100;return e.f.style.width=n+"px",e.c.scrollLeft=n,e.b.scrollLeft=e.b.scrollWidth+100,e.g!==t?(e.g=t,!0):!1}function s(t,n){function r(){var e=s;i(e)&&null!==e.a.parentNode&&n(e.g)}var s=t;e(t.b,r),e(t.c,r),i(t)}function o(e,t){var n=t||{};this.family=e,this.style=n.style||"normal",this.weight=n.weight||"normal",this.stretch=n.stretch||"normal"}function l(){if(null===a){var e=document.createElement("div");try{e.style.font="condensed 100px sans-serif"}catch(t){}a=""!==e.style.font}return a}function c(e,t){return[e.style,e.weight,l()?e.stretch:"","100px",t].join(" ")}var u=null,a=null,f=null;o.prototype.load=function(e,i){var o=this,a=e||"BESbswy",l=i||3e3,h=(new Date).getTime();return new Promise(function(e,i){null===f&&(f=!!window.FontFace);if(f){var p=new Promise(function(e,t){function n(){(new Date).getTime()-h>=l?t():document.fonts.load(c(o,o.family),a).then(function(t){1<=t.length?e():setTimeout(n,25)},function(){t()})}n()}),d=new Promise(function(e,t){setTimeout(t,l)});Promise.race([d,p]).then(function(){e(o)},function(){i(o)})}else t(function(){function t(){var t;if(t=-1!=m&&-1!=g||-1!=m&&-1!=S||-1!=g&&-1!=S)(t=m!=g&&m!=S&&g!=S)||(null===u&&(t=/AppleWebKit\\/([0-9]+)(?:\\.([0-9]+))/.exec(window.navigator.userAgent),u=!!t&&(536>parseInt(t[1],10)||536===parseInt(t[1],10)&&11>=parseInt(t[2],10))),t=u&&(m==x&&g==x&&S==x||m==T&&g==T&&S==T||m==N&&g==N&&S==N)),t=!t;t&&(null!==C.parentNode&&C.parentNode.removeChild(C),clearTimeout(L),e(o))}function f(){if((new Date).getTime()-h>=l)null!==C.parentNode&&C.parentNode.removeChild(C),i(o);else{var e=document.hidden;if(!0===e||void 0===e)m=p.a.offsetWidth,g=d.a.offsetWidth,S=v.a.offsetWidth,t();L=setTimeout(f,50)}}var p=new n(a),d=new n(a),v=new n(a),m=-1,g=-1,S=-1,x=-1,T=-1,N=-1,C=document.createElement("div"),L=0;C.dir="ltr",r(p,c(o,"sans-serif")),r(d,c(o,"serif")),r(v,c(o,"monospace")),C.appendChild(p.a),C.appendChild(d.a),C.appendChild(v.a),document.body.appendChild(C),x=p.a.offsetWidth,T=d.a.offsetWidth,N=v.a.offsetWidth,f(),s(p,function(e){m=e,t()}),r(p,c(o,'"'+o.family+'",sans-serif')),s(d,function(e){g=e,t()}),r(d,c(o,'"'+o.family+'",serif')),s(v,function(e){S=e,t()}),r(v,c(o,'"'+o.family+'",monospace'))})})},"undefined"!=typeof module?module.exports=o:(window.FontFaceObserver=o,window.FontFaceObserver.prototype.load=o.prototype.load)})();
    
        "use strict";
        // once cached, the css file is stored on the client forever unless
        // the URL below is changed. Any change will invalidate the cache
        const css_href = '/assets/css/fonts.css';
  
        // if we have the fonts in localStorage
        if (window.localStorage && localStorage.font_css_cache){
          // just use the cached version
          injectFontsStylesheet();
        } 
        
        else {
          // otherwise, don't block the loading of the page; wait until it's done.
          window.addEventListener('load', injectFontsStylesheet);
        }
  
        // quick way to determine whether a css file has been cached locally
        function fileIsCached(href) {
          return window.localStorage && localStorage.font_css_cache && (localStorage.font_css_cache_file === href);
        }
  
        // time to get the actual css file
        function injectFontsStylesheet() {
          // use the cached version if we already have it
          if (fileIsCached(css_href)) {
            injectRawStyle(localStorage.font_css_cache, function() {
              document.documentElement.className += " fonts-loaded";
            });
          } 
          
          // Fetch the css file otherwise
          else {
            fetch(css_href)
              .then(response => response.text())
              .then(css => {
                // once fetched, inject the file into <style> and run FontFaceObserver
                injectRawStyle(css, function(){
                  const fonts = [
                    new FontFaceObserver('Fira Sans', { weight: 400 }),
                    new FontFaceObserver('Fira Sans', { style: 'italic' }),
                    new FontFaceObserver('Fira Sans', { weight: 500 }),
                    new FontFaceObserver('Fira Sans', { weight: 600 }),
                  ];
                
                  Promise.all(fonts.map(font => font.load(null, 15000)))
                    .then(function () {
                      document.documentElement.className += ' fonts-loaded';
                    });
                });
                
                localStorage.font_css_cache = css;
                localStorage.font_css_cache_file = css_href;
              });
          }
        }
        // this is the simple utitily that injects the cached or loaded css text
        function injectRawStyle(text, callback) {
          const style = document.createElement('style');
          style.setAttribute("type", "text/css");
          style.innerHTML = text;
          document.getElementsByTagName('head')[0].appendChild(style);
          callback();
        }
      })();
    </script>
    `;

export default fonts;
