import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

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
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})
