"use strict";

function loadGoogleMaps() {
    let key = 'AIzaSyCgim6sMqqVKGdOmDLnSe6k6Ts7Yrp90cw';
    let callback = 'gmapController';

    let elem = document.createElement('script');
    elem.type = "text/javascript";
    elem.src = "https://maps.googleapis.com/maps/api/js?key=" + key + "&callback=" + callback;

    document.body.appendChild(elem);
}