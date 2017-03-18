var React = require('react');

//({temp, location}) faz com que temp = props.temp e location = props.location
var WeatherMessage = ({temp, location}) => {
  return(
    <h3>It's it {temp} in {location}</h3>
  );
};

module.exports = WeatherMessage;
