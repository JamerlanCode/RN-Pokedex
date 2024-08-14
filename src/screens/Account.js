import React from 'react'
import { View, Text, } from 'react-native'
import LoginForm from '../components/Auth/LoginForm'
import UserData from '../components/Auth/UserData'

export default function Account() {

  const auth = null
  return (
    <View>
      {auth ? <UserData/> : <LoginForm/>}
      <Text>Account Screen</Text>
    </View>
  )
}