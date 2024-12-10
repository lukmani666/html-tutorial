if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log("Latitude: " + position.coords.latitude);
      console.log("Longitude: " + position.coords.longitude);
    });
}



// Storing data
localStorage.setItem('username', 'JohnDoe');

// Retrieving data
var username = localStorage.getItem('username');
console.log(username); // Outputs: JohnDoe


var worker = new Worker('worker.js');
worker.postMessage('Start work');

worker.onmessage = function(event) {
  console.log('Worker said: ', event.data);
};