var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://samples.openweathermap.org/data/2.5/find?q=';
const OPEN_WEATHER_MAP_EXTRA = '&units=imperial&appid=30caeb6b4d37c7747a8b74c72a31afe8';

module.exports = {
  getTemp: function(location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}${location}${OPEN_WEATHER_MAP_EXTRA}`;

    return axios.get(requestUrl).then(function(res) {
      if(res.data.list == undefined) {
        throw new Error(res.data.message);
      } else {
        return res.data.list[0].main.temp;
      }
    }, function(res) {
      throw new Error(res.data.message);
    })
  }
};
