import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Create() {
  return (
    <SafeAreaView>
      <View>
        <Text style={{ marginLeft: 0, fontWeight: 400, fontSize: 16, fontFamily: "bold" }}>
          Create
        </Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})