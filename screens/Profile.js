import { Button, Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS, images } from '../constants'

export default function Profile() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <StatusBar style={{ backgroundColor: COLORS.gray }} />
      <View style={{ width: '100%' }}>
        <Image
          source={images.cover}
          resizeMethod='cover'
          style={{ height: 228, width: '100%' }}
        />
      </View>
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Image
          source={require('../assets/images/meee2.jpg')}
          resizeMode='contain'
          style={{
            height: 155,
            width: 155,
            borderRadius: 999,
            borderColor: COLORS.primary,
            borderWidth: 2,
          }}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})
