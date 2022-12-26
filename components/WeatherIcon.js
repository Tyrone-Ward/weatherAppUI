import React from 'react'

export const iconMap = {
  '01d': 'ios-sunny-outline',
  '01n': 'ios-moon',
  '02d': 'ios-partly-sunny-outline',
  '02n': 'cloudy-night-sharp',
  '03d': 'cloudy-outline',
  '03n': 'cloudy-sharp',
  '04d': 'ios-partly-sunny-outline',
  '04n': 'cloudy-night-sharp',
  '09d': 'rainy-outline',
  '09n': 'ios-rainy-sharp',
  '10d': 'rainy-outline',
  '10n': 'ios-rainy-sharp',
  '11d': 'ios-thunderstorm-outline',
  '11n': 'ios-thunderstorm-sharp',
  '13d': 'snow',
  '13n': 'snow',
  '50d': 'rainy-outline',
  '50n': 'ios-rainy-sharp'
}

const WeatherIcon = (props) => {
  return <>{iconMap[props.iconName]}</>
}

export default WeatherIcon
