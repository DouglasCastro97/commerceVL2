import React from 'react'
import { StatusBar, SafeAreaView, View } from 'react-native'
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold
} from '@expo-google-fonts/montserrat'

import AppLoading from 'expo-app-loading'

import ShoppingCart from './src/screens/shoppingCart/index'
import mock from './src/mocks/Cart'

export default function App() {
  const [fontesApp] = useFonts({
    MontserratRegular: Montserrat_400Regular,
    MontserratBold: Montserrat_700Bold
  })

  if (!fontesApp) {
    return <AppLoading />
  }

  return (
    <SafeAreaView>
      <StatusBar />
      <ShoppingCart {...mock} />
    </SafeAreaView>
  )
}
