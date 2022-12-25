import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, useColorScheme } from 'react-native'
import CustomDarkTheme from './Themes/CustomDarkTheme'
import { NavigationContainer, DefaultTheme, DarkTheme, useTheme } from '@react-navigation/native'
import MainScreen from './screens/MainScreen'
import { useFonts, Inter_900Black, Inter_400Regular, Inter_300Light, Inter_100Thin } from '@expo-google-fonts/inter'

export default function App() {
  const scheme = useColorScheme()

  let [fontsLoaded] = useFonts({
    Inter_900Black,
    Inter_400Regular,
    Inter_300Light,
    Inter_100Thin
  })

  if (!fontsLoaded) {
    return null
  }

  console.log(scheme)

  return (
    <NavigationContainer theme={scheme === 'dark' ? CustomDarkTheme : DefaultTheme}>
      <View style={styles.container}>
        <StatusBar style={scheme === 'dark' ? 'light' : 'dark'} />
        <MainScreen />
      </View>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
