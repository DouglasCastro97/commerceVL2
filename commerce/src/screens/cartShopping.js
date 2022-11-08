import React from 'react'
import { Image, StyleSheet, Dimensions, Text, View } from 'react-native'

import computer from '../../assets/pexels-hasan-albari-1229861.jpg'
import logo from '../../assets/logo.png'
import { processFontFamily } from 'expo-font'

const width = Dimensions.get('screen').width

export default function CartShopping() {
  return (
    <>
      <Image source={computer} style={style.computer} />
      <Text style={style.title}>Detalhe da cesta</Text>

      <View style={style.shoppingCart}>
        <Text style={style.car}>Carrinho</Text>
        <View style={style.seller}>
          <Image source={logo} style={style.sellerImage} />
          <Text style={style.product}>MacBook Air</Text>
        </View>
        <Text style={style.description}>
          O MacBook Air com chip M1 é um notebook extremamente portátil,
          versátil e rápido. Com uma linda tela Retina, tecnologia silenciosa
          sem ventoinha, design fino e bateria que dura o dia todo, você vai
          conseguir fazer tudo na velocidade da luz.
        </Text>
        <Text style={style.price}>R$ 11.599</Text>
      </View>
    </>
  )
}

const style = StyleSheet.create({
  computer: {
    width: '100%',
    height: (578 / 768) * width
  },
  title: {
    position: 'absolute',
    textAlign: 'center',
    width: '100%',
    fontSize: 16,
    lineHeight: 26,
    color: 'white',
    fontWeight: 'bold',
    padding: 16
  },
  shoppingCart: {
    paddingVertical: 8,
    paddingHorizontal: 16
  },
  car: {
    color: '#000',
    fontSize: 26,
    lineHeight: 42,
    fontFamily: 'MontserratBold'
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
    marginLeft: 12,
    fontFamily: 'MontserratRegular'
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
