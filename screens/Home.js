import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Home() {
  return (
    <SafeAreaView>
      <View>
        <Text style={{ fontFamily: 'bold', fontSize: 24, lineHeight: 22 }}>
          Home
        </Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})
