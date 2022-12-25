import React from 'react'
import { Text } from 'react-native'

const weekday = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

const Weekday = (props) => {
  return <Text>{weekday[new Date(props.date * 1000).getDay()]}</Text>
}

export default Weekday
