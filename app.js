// Initialize leaflet.js
var L = require('leaflet');

// Initialize the map
var map = L.map('map', {
   scrollWheelZoom: true
});

// Set the position and zoom level of the map
map.setView([-2.981739, 104.791049], 7);

// Set base layers
var esri_NatGeoWorldMap = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
   attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
   maxZoom: 18,
   id: 'mapbox/streets-v11',
   tileSize: 512,
   zoomOffset: -1,
   accessToken: 'pk.eyJ1IjoicHVqaWxlc21hbmEiLCJhIjoiY2t1aHpvaW5rMGowbTJ4bjZkYWozaXZvbCJ9.JHRxzAywxGoW_fs0jSWhFw'
}).addTo(map);


// Create base layers group object
var baseLayers = {
   "ESRI National Geographic": esri_NatGeoWorldMap,
};

var pinkIcon = L.icon({
   iconUrl: 'style/marker-pink.png',
   iconSize: [39, 39],
   iconAnchor: [18, 39],
   popupAnchor: [10, -35]
});
var greenIcon = L.icon({
   iconUrl: 'style/marker-green.png',
   iconSize: [39, 39],
   iconAnchor: [18, 39],
   popupAnchor: [10, -35]
});
var blueIcon = L.icon({
   iconUrl: 'style/marker-blue.png',
   iconSize: [39, 39],
   iconAnchor: [18, 39],
   popupAnchor: [10, -35]
});

var myHome = L.marker([-2.981739, 104.791049], { icon: pinkIcon }).bindPopup('<b>MyHome, Palembang Jalan sultan Agung</b>');


var capitals = L.layerGroup([myHome]).addTo(map);

var overlays = {
   'Capitals': capitals
};

// Add baseLayers and overlays to layer panel
L.control.layers(baseLayers, overlays).addTo(map);