import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS } from '../constants'
import { MaterialIcons } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context'


const Settings = ({ navigation }) => {


  const navigateToEditProfile = () => {
    navigation.navigate("EditPrfile")
  }

  const navigateToSecurity = () => {
    console.log("Security Function")
  }

  const navigateToNotifications = () => {
    console.log("Notifications Function");

  }

  const navigateToPrivacy = () => {
    console.log("Privacy Function");

  }

  const accountItems = [
    { icon: "person-outline", text: "Edit Profile", action: navigateToEditProfile },
    { icon: "security", text: "Security", action: navigateToSecurity },
    { icon: "notifications", text: "Notifications", action: navigateToNotifications },
    { icon: "lock-outline", text: "Privacy", action: navigateToPrivacy }
  ]


  const renderSettingsItem = ({ icon, text, action }) => {
    <TouchableOpacity onPress={action} style={{ flexDirection: "row", alignItems: "center", paddingVertical: 8, paddingLeft: 12 }}>
      <MaterialIcons name="icon" size={24} color="black" />
      <Text style={{ marginLeft: 0, fontWeight: 400, fontSize: 16 }}>gefewyu</Text>
    </TouchableOpacity>
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={{ marginHorizontal: 12, flexDirection: "row", justifyContent: "center", }}>
        <TouchableOpacity onPress={() => { navigation.goBack() }} style={{ position: "absolute", left: 0 }}>
          <MaterialIcons name="keyboard-arrow-left" size={24} color={COLORS.black} />
        </TouchableOpacity>
        <Text style={{ fontFamily: 'bold', fontSize: 24, lineHeight: 22 }}>Settings</Text>
      </View>
      <View style={{ marginBottom: 12, marginTop: 5 }}>
        <Text style={{ fontFamily: 'bold', fontSize: 20, lineHeight: 20, marginVertical: 10 }}>Account</Text>
        <View style={{ borderRadius: 12, backgroundColor: COLORS.gray }}>
          {accountItems.map((item, index) => (<React.Fragment key={index}>
            {renderSettingsItem(item)}
          </React.Fragment>))}
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Settings