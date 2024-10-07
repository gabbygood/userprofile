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
            marginTop: -90
          }}
        />
        <Text style={{ marginLeft: 0, fontWeight: 400, fontSize: 16, fontFamily: "bold" }}>
          Gabrielle Goylan
        </Text>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolores deserunt aliquam animi molestiae ratione quibusdam velit excepturi iusto. Inventore, quod.</Text>
        <View style={{ flexDirection: "column", width: "100%", alignItems: "center", marginTop: 10 }}>
          <View style={{ backgroundColor: "gray", margin: 5, borderRadius: 10 }}><Text style={{ padding: 10 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, ea?</Text></View>
          <View style={{ backgroundColor: "gray", margin: 5, borderRadius: 10 }}><Text style={{ padding: 10 }}>Skills 1</Text></View>
          <View style={{ backgroundColor: "gray", margin: 5, borderRadius: 10 }}><Text style={{ padding: 10 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, ea?</Text></View>
          <View style={{ backgroundColor: "gray", margin: 5, borderRadius: 10 }}><Text style={{ padding: 10 }}>Skill 2</Text></View>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})
