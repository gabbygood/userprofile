import { Button, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS } from '../constants'

export default function Profile() {
  return (
    <SafeAreaView>
      <View
        style={{ flex1: 1, flexDirection: 'row', justifyContent: 'center' }}
      >
        <Text
          style={{
            fontFamily: 'bold',
            fontSize: 24,
            lineHeight: 22,
            paddingHorizontal: 10,
            alignContent: 'center',
          }}
        >
          Gabrielle Goylan
        </Text>
        <Image
          style={{ borderRadius: 50, shadowOffset: 10 }}
          source={require('../assets/images/meee2.jpg')}
        />
      </View>
      <View
        style={{
          width: 700,
          height: 10,
          backgroundColor: COLORS.black,
          alignContent: 'center',
          marginLeft: 700,
          marginTop: 20,
        }}
      ></View>
      <View
        style={{
          flex: 1,
          backgroundColor: 'none',
          alignContent: 'center',
          marginLeft: 1000,
          marginTop: 100,
        }}
      >
        <Text
          style={{
            fontFamily: 'bold',
            fontSize: 20,
            lineHeight: 20,
            marginVertical: 10,
            backgroundColor: 'gray',
            paddingLeft: 20,
            width: 120,
            height: 100,
            borderRadius: 20,
            alignContent: 'center',
            justifyContent: 'center',
          }}
        >
          LOGOUT
        </Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})
