// http://jonathanstark.com/blog/debugging-html-5-offline-application-cache?filename=2009/09/27/debugging-html-5-offline-application-cache/ - 1
var cacheStatusValues = [];
cacheStatusValues[0] = 'uncached';
cacheStatusValues[1] = 'idle';
cacheStatusValues[2] = 'checking';
cacheStatusValues[3] = 'downloading';
cacheStatusValues[4] = 'updateready';
cacheStatusValues[5] = 'obsolete';

var cache = window.applicationCache;

function logEvent(e) {
    var online, status, type, message;
    online = (navigator.onLine) ? 'yes' : 'no';
    status = cacheStatusValues[cache.status];
    type = e.type;
    message = '';
    message += (new Date());
    message+= 'online: ' + online;
    message+= ', event: ' + type;
    message+= ', status: ' + status;
    if (type == 'error' && navigator.onLine) {
        message+= ' (prolly a syntax error in manifest)';
    }
    console.log(message);
    var l = document.getElementById("log");
    if(l) l.innerHTML = message + "\n" +  l.innerHTML;
}
function updateStatus(online){
    var l = document.getElementById("status");
    if(l){
        if(online){
          l.innerHTML = "Online";
          l.style.color = "#00cc00";
          l.style.fontWeight = "bold";
        }
        else{
          l.innerHTML = "Offline";
          l.style.color = "#ff0000";
          l.style.fontWeight = "bold";
        }
    }
}
window.addEventListener("offline", function(e) { updateStatus(false);  }, false);
window.addEventListener("online" , function(e) { updateStatus(true);  window.applicationCache.update(); }, false);

window.applicationCache.addEventListener('updateready', function(e) {
    if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
        // Browser downloaded a new app cache.
        // Swap it in and reload the page to get the new hotness.
        window.applicationCache.swapCache();
        if (confirm('A new version of this site is available. Load it?')) {
            window.location.reload();
        }
    } else {
        // Manifest didn't changed. Nothing new to server.
    }
}, false);
updateStatus(navigator.onLine);
/*
window.applicationCache.addEventListener(
    'updateready', 
    function(){
        if(confirm("Updated cache. Ok to update!")){
            window.applicationCache.swapCache();
            console.log('swap cache has been called');
        }
    }, 
    false
);

//*/
cache.addEventListener('cached', logEvent, false);
cache.addEventListener('checking', logEvent, false);
cache.addEventListener('downloading', logEvent, false);
cache.addEventListener('error', logEvent, false);
cache.addEventListener('noupdate', logEvent, false);
cache.addEventListener('obsolete', logEvent, false);
cache.addEventListener('progress', logEvent, false);
cache.addEventListener('updateready', logEvent, false);

//*/

//setInterval(function(){cache.update()}, 10000);

// http://jonathanstark.com/blog/debugging-html-5-offline-application-cache?filename=2009/09/27/debugging-html-5-offline-application-cache/ - 0
