import { View, Text } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const Index = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d8d8d8',
      }}
    >
      <Text
        style={{
          fontSize: 33,
          fontWeight: 'bold',
          color: 'blue',
        }}
      >
        Hello World !
      </Text>

      <View
        style={{
          flexDirection: 'row',
          marginTop: 20,
        }}
      >
        <Link
          href={'/about'}
          style={{
            fontSize: 20,
            marginHorizontal: 10,
          }}
        >
          About
        </Link>
        <Link
          href={'/contact'}
          style={{
            fontSize: 20,
            marginHorizontal: 10,
          }}
        >
          Contact
        </Link>
        <Link
          href={'/services'}
          style={{
            fontSize: 20,
            marginHorizontal: 10,
          }}
        >
          Services
        </Link>
      </View>
    </View>
  );
};

export default Index;
