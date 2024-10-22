import { View, Text } from 'react-native'
import React from 'react'

const Service = () => {
  return (
    <View style={
        {
          flex:1,
          justifyContent:'center',
          alignItems:'center',
          backgroundColor: "#d8d8d8",
        }
      }>
        <Text  style={
          { fontSize: 33,
            fontWeight: 'bold',
            color: "blue" }
          }>Services !</Text>
      </View>
  )
}

export default Service