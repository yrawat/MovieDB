
var api = ' http://www.omdbapi.com/?t=';
var apiKey = '&apikey=f10ffc41';

var input;

function setup() {
  noCanvas(400, 200);

  var button = select('#submit');
  button.mousePressed(weatherAsk);

  input = select('#city');
}

function weatherAsk() {
  var url = api + input.value() + apiKey;
  loadJSON(url, gotData);
}

function gotData(data) {
 
  createImg(data.Poster);
  createElement('h1', data.Title.fontcolor("white"));
   createElement('h3', data.Released.fontcolor("white"));
   createElement('h3', data.Ratings[0].Value.fontcolor("white"));
   createElement('h4', data.Plot.fontcolor("white"));
}
