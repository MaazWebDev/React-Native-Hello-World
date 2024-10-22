import { View, Text } from 'react-native'
import React from 'react'

const Contact = () => {
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
          }>Contact Us !</Text>
      </View>
  )
}

export default Contact