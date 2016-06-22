//Getting correct coordinates
function getUTMCoordinates(lat, lng){
  var epsg = cpc.const.epsg[utm];

  if (cpc.const.countryCodes.NORWAY === countryCode) {

    var municpipalityNumber = this._geoCoder.getMunicipalityNumber();
    var countyNumber = municpipalityNumber.substr(0, 2); // two first numbers of municipality number
    var utm = cpc.const.countyToUtm[countyNumber];
    var utmOutput = cpc.const.utmOutput[utm];
    var epsg = cpc.const.epsg[utm];

    // add temp loading text
    var coordContainer = L.DomUtil.create('li', "kommunekart-popup-list-utm");
    var startText = utmOutput + "N" + ": laster..";
    coordContainer.style.width = "195px"; // set width to avoid resizing later
    coordContainer.appendChild(document.createTextNode(startText));
    container.appendChild(coordContainer);



    var lat = this._latlng.lat;
    var lng = this._latlng.lng;

    cpc.util.transformation.transformCoordAsync(lat, lng, cpc.const.epsg.LAT_LNG, epsg, success, failure);

  }
  function success(res) {
    // setTimeout is temp to add some delay to see the spinner

    if (!res && !res.coordinate) {
      failure();
      return;
    }

    var coordinate = res.coordinate;
    var epsg = coordinate.epsg;
    var north = coordinate.north;
    var east = coordinate.east;

    var utm = cpc.const.epsgToUtm[epsg];
    var utmName = cpc.const.utmOutput[utm] + "N";
    var coordinateString = context._makeUtmCoordinateString(north, east, {numberOfDeciamals: 1, isDegrees: false});

    var text = utmName + ": " + coordinateString; // e.x: 123456,7N  12345,6Ø
    context._utmText = text; // expose the text to be able to test it
    coordContainer.innerHTML = "";
    coordContainer.appendChild(document.createTextNode(text));

    context._updateLayout();

  }

}

function _makeUtmCoordinateString(north, east) {
  return this._makeCoordinateString(north, east, { numberOfDecimals: 1, isDegrees: false });
}

function _makeLatLngCoordinateString(north, east) {
  return this._makeCoordinateString(north, east, { numberOfDecimals: 5, isDegrees: true });
}

function _makeCoordinateString(north, east, options) {
  options = options || {};
  var isDegrees = options.isDegrees || false;
  var numberOfDecimals = options.numberOfDecimals || 0;

  var optionalDegreeString = isDegrees ? String.fromCharCode(176) : ""; // String.fromCharCode(176) is the degree sign

  var northString = this._formatCoordinate(north, numberOfDecimals) + optionalDegreeString + "N";
  var eastString =  this._formatCoordinate(east, numberOfDecimals) + optionalDegreeString + "Ø";
  var doubleSpace = "  ";
  return northString + doubleSpace + eastString;
}

function _formatCoordinate(coordinate, numberOfDecimals) {
  return parseFloat(coordinate).toFixed(numberOfDecimals).replace(".", ",");
}
