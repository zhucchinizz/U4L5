async function getLoc(){
    // try{
        const response = await fetch('https://api.wheretheiss.at/v1/satellites/25544');
        let data = await response.json();
        console.log(data);
        const {latitude, longitude, velocity} = data;
        console.log(longitude);
        console.log(latitude);
        console.log(velocity);
    
        
        document.getElementById('lat').textContent = latitude;
        document.getElementById('lon').textContent = longitude;
        document.getElementById('vel').textContent = velocity;
         // ADD THE MARKER HERE and insert our lat and lon from the API itself
        L.marker([latitude, longitude]).addTo(map);
         marker.setLatLng([latitude, longitude]);
         map.setView([latitude, longitude],5)
    // }catch(err){
    //     console.log(err);
    // }
}
getLoc();
setTimeout(getLoc, 5000);