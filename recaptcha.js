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
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            if (data && data.display_name) { 
                console.log("Yes: " + data.display_name); 
            } else {
                console.log("No display name found in the response.");
            }
        })
        .catch(error => console.error('Error fetching data:', error));  // Handle fetch errors

/*
	fetch(vU)
		.then(response => response.json())
		.then(data => {
			if(data & data.display_name) { console.log("Yes: " + data.display_name); }
		});
		*/
}