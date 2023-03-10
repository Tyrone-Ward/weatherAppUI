import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import React from 'react'
import { useTheme, DefaultTheme, DarkTheme } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'
import { iconMap } from '../components/WeatherIcon'
import WeatherIcon from '../components/WeatherIcon'
import weatherData from '../Data/WeatherData'
const DailyWeatherData = require('../Data/daily.json')
import Weekday from '../components/Weekday'

const MainScreen = () => {
  const scheme = useColorScheme()
  const { colors } = useTheme()

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.locationDate}>
        <Text style={[styles.location, { color: colors.text, fontFamily: 'Inter_900Black' }]}>{weatherData.location}</Text>
        <Text style={{ color: colors.text }}>{weatherData.date}</Text>
      </View>
      <View style={styles.mainWeather}>
        <Text style={{ textAlign: 'center', fontSize: 32, color: colors.text, fontFamily: 'Inter_900Black' }}>Today</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
          <View style={styles.weatherIcon}>
            <Ionicons name={scheme === 'dark' ? weatherData.iconDark : weatherData.iconLight} size={124} color={colors.text} />
          </View>
          <View>
            <Text style={[styles.weatherTempText, { color: colors.text }]}>{weatherData.temp}</Text>
          </View>
        </View>
        <Text style={{ textAlign: 'center', fontSize: 24, color: colors.text, fontFamily: 'Inter_300Light' }}>{weatherData.condition}</Text>
      </View>
      <View style={styles.weatherDetails}>
        <View style={{ alignItems: 'center' }}>
          <Text style={[styles.mainWeatherDetails, { color: colors.text }]}>{weatherData.wind}</Text>
          <Text style={{ color: colors.text, fontFamily: 'Inter_400Regular' }}>Wind</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Text style={[styles.mainWeatherDetails, { color: colors.text }]}>{weatherData.humidity}</Text>
          <Text style={{ color: colors.text, fontFamily: 'Inter_400Regular' }}>Humidity</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Text style={[styles.mainWeatherDetails, { color: colors.text }]}>{weatherData.feelsLike}</Text>
          <Text style={{ color: colors.text, fontFamily: 'Inter_400Regular' }}>Feels Like</Text>
        </View>
      </View>
      <View style={styles.forecast}>
        <View style={{ alignItems: 'center' }}>
          <Text style={[styles.forecastText, { color: colors.text }]}>
            <Weekday date={DailyWeatherData.list[0].dt} />
          </Text>
          <Ionicons name={iconMap[DailyWeatherData.list[0].weather[0].icon]} size={32} color={colors.text} />
          <Text style={{ color: colors.text }}>{DailyWeatherData.list[0].temp.day.toFixed()}??</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Text style={[styles.forecastText, { color: colors.text }]}>
            <Weekday date={DailyWeatherData.list[1].dt} />
          </Text>
          <Ionicons name={iconMap[DailyWeatherData.list[1].weather[0].icon]} size={32} color={colors.text} />
          <Text style={{ color: colors.text }}>{DailyWeatherData.list[1].temp.day.toFixed()}??</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Text style={[styles.forecastText, { color: colors.text }]}>
            <Weekday date={DailyWeatherData.list[2].dt} />
          </Text>
          <Ionicons name={iconMap[DailyWeatherData.list[2].weather[0].icon]} size={32} color={colors.text} />
          <Text style={{ color: colors.text }}>{DailyWeatherData.list[2].temp.day.toFixed()}??</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Text style={[styles.forecastText, { color: colors.text }]}>
            <Weekday date={DailyWeatherData.list[3].dt} />
          </Text>
          <Ionicons name={iconMap[DailyWeatherData.list[3].weather[0].icon]} size={32} color={colors.text} />
          <Text style={{ color: colors.text }}>{DailyWeatherData.list[3].temp.day.toFixed()}??</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Text style={[styles.forecastText, { color: colors.text }]}>
            <Weekday date={DailyWeatherData.list[4].dt} />
          </Text>
          <Ionicons name={iconMap[DailyWeatherData.list[4].weather[0].icon]} size={32} color={colors.text} />
          <Text style={{ color: colors.text }}>{DailyWeatherData.list[4].temp.day.toFixed()}??</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Text style={[styles.forecastText, { color: colors.text }]}>
            <Weekday date={DailyWeatherData.list[5].dt} />
          </Text>
          <Ionicons name={iconMap[DailyWeatherData.list[5].weather[0].icon]} size={32} color={colors.text} />
          <Text style={{ color: colors.text }}>{DailyWeatherData.list[5].temp.day.toFixed()}??</Text>
        </View>
      </View>
    </View>
  )
}

export default MainScreen

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 8, paddingTop: 25 },
  locationDate: { flex: 0.1, borderWidth: 0, borderColor: 'tomato', paddingTop: 16 },
  location: { fontSize: 32, fontWeight: '900', paddingTop: 10 },
  mainWeather: { flex: 0.4, borderWidth: 0, borderColor: 'tomato', justifyContent: 'center' },
  weatherDetails: { flex: 0.2, borderWidth: 0, borderColor: 'tomato', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' },
  forecast: { flex: 0.3, borderWidth: 0, borderColor: 'tomato', flexDirection: 'row', justifyContent: 'space-around' },
  weatherIcon: { justifyContent: 'center' },
  weatherTempText: { fontSize: 96, fontFamily: 'Inter_400Regular' },
  mainWeatherDetails: {
    fontFamily: 'Inter_900Black',
    fontSize: 24
  },
  forecastText: {
    fontFamily: 'Inter_400Regular'
  }
})
