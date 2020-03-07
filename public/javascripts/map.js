var mymap = L.map('mapid').setView([-8.1159897, -79.0299835], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);


$.ajax({
	dataType:"json",
	url:"api/bicicletas",
	success:function(result){
		console.log(result);
		result.bicicletas.forEach(function(bici){
			L.marker(bici.ubicacion,{title:bici.id}).addTo(mymap);

		});
	}
})