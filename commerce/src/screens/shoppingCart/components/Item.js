import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

import Texto from '../../../components/Texto'

export default function Item({ item: { name, image } }) {
  return (
    <View style={style.items}>
      <Image source={image} style={style.image} />
      <Texto style={style.name}>{name}</Texto>
    </View>
  )
}

const style = StyleSheet.create({
  items: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ececec',
    paddingVertical: 16,
    marginHorizontal: 16,
    alignItems: 'center'
  },
  image: {
    width: 46,
    height: 46
  },
  name: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 11,
    color: '#464646'
  }
})
