var mymap = L.map('mapid').setView([-8.1159897, -79.0299835], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);
var marker = L.marker([-8.09360379, -79.01168704]).addTo(mymap);

marker.bindPopup("<b>secuestrame!</b><br>tu puedes!").openPopup();