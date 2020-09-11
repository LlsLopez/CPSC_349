var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR= '[data-image-role="title"]';





function initialzieEvents() {
    'use strict';
    var thumnails = getThumbnailsArray();
    thumbnails.forEach(addThumbClockHandler);
}