import React from 'react'
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold
} from '@expo-google-fonts/montserrat'

import { StatusBar, SafeAreaView, View } from 'react-native'
import CartShopping from './src/screens/cartShopping'

export default function App() {
  const [fontesApp] = useFonts({
    MontserratRegular: Montserrat_400Regular,
    MontserratBold: Montserrat_700Bold
  });

  if (!fontesApp) {
    return <View />
  }

  return (
    <SafeAreaView>
      <StatusBar />
      <CartShopping />
    </SafeAreaView>
  )
}
