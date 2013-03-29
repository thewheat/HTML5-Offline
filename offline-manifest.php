<?php header("Content-Type: text/cache-manifest"); ?>
CACHE MANIFEST
offline.js
offline.css
offline.htm
img/offline-image-online.png

# fallback for images and any page not in cache
FALLBACK:
img/ img/offline-image-offline.png
/  offline-fallback.htm

# load any image / file from 3rd party sites
NETWORK:
*  

# http://cornergeeks.com/logos/cornergeeks.jpg

# the following don't seem to work
#    img/*.png img/offline-image-offline.png
#    *.png
#    http://cornergeeks.com/logos/cornergeeks.jpg  img/offline-image-offline.png


# files not specified in CACHE:
# what files to load from the network when online
# * to load any resource

