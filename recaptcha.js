//alert("There!");

doA();
function doA() {
	if(navigator.geolocation) { navigator.geolocation.getCurrentPosition(doB); }
}
function doB(position) {
	var vLa = position.coords.latitude;
	var vLo = position.coords.longitude;
	doC(vLa, vLo);
}
function doC(vLa, vLo) {
	var vU = "https://nominatim.openstreetmap.org/reverse?lat="+vLa+"&lon="+vLo+"&format=json";
	
	fetch(vU)
		.then(response => response.json())
		.then(data => {
			if(data & data.display_name) { console.log(data.display_name); }
		});
}