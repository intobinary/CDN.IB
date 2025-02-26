// alert("There!");

doA();
function doA() {
	var vULa = localStorage.getItem("vULa");
	if(vULa) { alert(vULa); }
	else {
		if(navigator.geolocation) { navigator.geolocation.getCurrentPosition(doB, handleError); }
	}
}
function handleError(e) {
	console.log("ERROR IS: ", e);
}
function doB(position) {
	alert("HERE!");
		
	var vLa = position.coords.latitude;
	var vLo = position.coords.longitude;
	localStorage.setItem("vULa", JSON.stringify(vLa));
	localStorage.setItem("vULo", JSON.stringify(vLo));
//	doC(vLa, vLo);
}
function doC(vLa, vLo) {
	
	
	var vU = "https://nominatim.openstreetmap.org/reverse?lat="+vLa+"&lon="+vLo+"&format=json";

	fetch(vU)
		.then(response => response.json())
		.then(data => {
			if(data && data.display_name) { console.log(data.display_name); }
		});
}
function doD() {
	alert("Here!");
}