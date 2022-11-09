import React from 'react'
import { StyleSheet, View } from 'react-native'

import Details from './components/Details'
import Topo from './components/Topo'

export default function ShoppingCart({ topo, details }) {
  return (
    <>
      <Topo {...topo} />

      <View style={style.ShoppingCart}>
        <Details {...details} />
      </View>
    </>
  )
}

const style = StyleSheet.create({
  ShoppingCart: {
    paddingVertical: 8,
    paddingHorizontal: 16
  }
})
