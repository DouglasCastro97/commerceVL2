import React from 'react'
import { Image, StyleSheet, Dimensions, Text, View } from 'react-native'

import computer from '../../assets/pexels-hasan-albari-1229861.jpg'

const width = Dimensions.get('screen').width

export default function CartShopping() {
  return (
    <>
      <Image source={computer} style={style.computer} />
      <Text style={style.title}>Detalhe da cesta</Text>

      <View style={style.car}>
        <Text style={style.name}>Carrinho de compras</Text>
        <Text style={style.sellerName}>Iplace</Text>
        <Text>
          O MacBook Air com chip M1 é um notebook extremamente portátil,
          versátil e rápido. Com uma linda tela Retina, tecnologia silenciosa
          sem ventoinha, design fino e bateria que dura o dia todo, você vai
          conseguir fazer tudo na velocidade da luz.
        </Text>
        <Text>R$ 11.599</Text>
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
  car: {
    paddingVertical: 8,
    paddingHorizontal: 16
  },
  name: {
    fontSize: 26,
    lineHeight: 42,
    color: '#000',
    fontWeight: 'bold'
  },
  sellerName: {
    fontSize: 16,
    lineHeight: 26
  }
})
