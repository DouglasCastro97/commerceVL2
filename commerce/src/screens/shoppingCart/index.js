import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'

import Texto from '../../components/Texto'

import Details from './components/Details'
import Item from './components/Item'
import Topo from './components/Topo'

export default function ShoppingCart({ topo, details, items }) {
  return (
    <>
      <FlatList
        data={items.list}
        renderItem={Item}
        keyExtractor={({ name }) => name}
        ListHeaderComponent={() => {
          return (
            <>
              <Topo {...topo} />
              <View style={style.ShoppingCart}>
                <Details {...details} />
                <Texto style={style.title}>{ items.title }</Texto>
              </View>
            </>
          )
        }}
      />
    </>
  )
}

const style = StyleSheet.create({
  title: {
    color: '#464646',
    fontWeight: 'bold',
    marginTop: 32,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32
  },
  ShoppingCart: {
    paddingVertical: 8,
    paddingHorizontal: 16
  }
})
