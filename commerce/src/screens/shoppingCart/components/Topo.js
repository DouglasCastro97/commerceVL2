import React from 'react'
import { Image, StyleSheet, Dimensions } from 'react-native'

import Texto from '../../../components/Texto'

import computer from '../../../../assets/pexels-hasan-albari-1229861.jpg'

const width = Dimensions.get('screen').width;



export default function Topo({ title }) {
  return (
    <>
      <Image source={computer} style={style.computer} />
      <Texto style={style.title}>{title}</Texto>
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
})