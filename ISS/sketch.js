var craftData;
var img;

function setup() {
  createCanvas(1280, 640);
  loadJSON("http://api.open-notify.org/iss-now.json", getData, 'jsonp');
  img = loadImage("map.jpg");
}

function getData(data) {
  craftData = data;
}

function draw() {
  image(img, 0, 0);
  
  if (craftData) {

    var long = craftData.iss_position.longitude;
    var lat = craftData.iss_position.latitude;
    
    var glong = map(long, -180, 180, 0, width);
    var glat = map(lat, 90, -90, 0, height);

    noStroke();
    fill(255, 0, 0);
    ellipse(glong, glat, 8, 8);
  }
}
