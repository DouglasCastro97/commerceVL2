import react from 'react'
import { View, Image, StyleSheet } from 'react-native'

import Texto from '../../../components/Texto'

export default function Details({ car, logo, product, description, price }) {
  return (
    <>
      <Texto style={style.car}>{car}</Texto>
      <View style={style.seller}>
        <Image source={logo} style={style.sellerImage} />
        <Texto style={style.product}>{product}</Texto>
      </View>
      <Texto style={style.description}>{description}</Texto>
      <Texto style={style.price}>{price}</Texto>
    </>
  )
}

const style = StyleSheet.create({
  car: {
    color: '#000',
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold'
  },
  seller: {
    flexDirection: 'row',
    paddingVertical: 12
  },
  sellerImage: {
    width: 32,
    height: 32
  },
  product: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12
  },
  description: {
    color: '#a3a3a3',
    fontSize: 16,
    lineHeight: 26
  },
  price: {
    color: '#2a9f85',
    fontWeight: 'bold',
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8
  }
})
