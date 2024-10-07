import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS } from '../constants'
import { MaterialIcons } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context'

const Settings = ({ navigation }) => {
  const navigateToEditProfile = () => {
    navigation.navigate('EditPrfile')
  }

  const navigateToSecurity = () => {
    console.log('Security Function')
  }

  const navigateToNotifications = () => {
    console.log('Notifications Function')
  }

  const navigateToPrivacy = () => {
    console.log('Privacy Function')
  }

  const navigateToSubscription = () => {
    console.log('subscriptions')
  }

  const navigateToSupport = () => {
    console.log('Support')
  }

  const navigateToTermsAndPolicies = () => {
    console.log('Terms And Policies')
  }

  const accountItems = [
    {
      icon: 'person-outline',
      text: 'Edit Profile',
      action: navigateToEditProfile,
    },
    { icon: 'security', text: 'Security', action: navigateToSecurity },
    {
      icon: 'notifications',
      text: 'Notifications',
      action: navigateToNotifications,
    },
    { icon: 'lock-outline', text: 'Privacy', action: navigateToPrivacy },
  ]

  const supportItems = [
    {
      icon: 'credit-card',
      text: 'My Subscription',
      action: navigateToSubscription,
    },
    {
      icon: 'help-outline',
      text: 'Help & Support',
      action: navigateToSupport,
    },
    {
      icon: 'info-outline',
      text: 'Terms & Policies',
      action: navigateToTermsAndPolicies,
    },
  ]

  const renderSettingsItem = ({ icon, text, action }) => (
    <TouchableOpacity
      onPress={action}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
        paddingLeft: 12,
      }}
    >
      <MaterialIcons name={icon} size={24} color='black' />
      <Text style={{ marginLeft: 0, fontWeight: 400, fontSize: 16 }}>
        {text}
      </Text>
    </TouchableOpacity>
  )

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View
        style={{
          marginHorizontal: 12,
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.goBack()
          }}
          style={{ position: 'absolute', left: 0 }}
        >
          <MaterialIcons
            name='keyboard-arrow-left'
            size={24}
            color={COLORS.black}
          />
        </TouchableOpacity>
        <Text style={{ fontFamily: 'bold', fontSize: 24, lineHeight: 22 }}>
          Settings
        </Text>
      </View>
      {/* Account Settings */}
      <ScrollView style={{ marginHorizontal: 12 }}>
        <View style={{ marginBottom: 12 }}>
          <Text
            style={{
              fontFamily: 'bold',
              fontSize: 20,
              lineHeight: 20,
              marginVertical: 10,
            }}
          >
            Account
          </Text>
          <View style={{ borderRadius: 12, backgroundColor: COLORS.gray }}>
            {accountItems.map((item, index) => (
              <React.Fragment key={index}>
                {renderSettingsItem(item)}
              </React.Fragment>
            ))}
          </View>
        </View>
        {/* Support & About */}
        <View style={{ marginBottom: 12 }}>
          <Text
            style={{
              fontFamily: 'bold',
              fontSize: 20,
              lineHeight: 20,
              marginVertical: 10,
            }}
          >
            Support & About
          </Text>
          <View style={{ borderRadius: 12, backgroundColor: COLORS.gray }}>
            {supportItems.map((item, index) => (
              <React.Fragment key={index}>
                {renderSettingsItem(item)}
              </React.Fragment>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Settings
