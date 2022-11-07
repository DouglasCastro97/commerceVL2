import React from 'react'
import { StatusBar, SafeAreaView, View } from 'react-native'
import CartShopping from './src/screens/cartShopping'

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar />
      <CartShopping />
    </SafeAreaView>
  );
};
