import logo from '../../assets/logo.png'

import iphone13 from '../../assets/products/Iphone13.jpeg'
import Play5 from '../../assets/products/Play5.jpg'
import Earphone from '../../assets/products/Earphone.jpg'
import Cabinet from '../../assets/products/cabinet.jpg'

const cart = {
  topo: {
    title: 'Detalhes do produto'
  },
  details: {
    car: 'Carrinho',
    logo: logo,
    product: 'MacBook Air',
    description:
      'O MacBook Air com chip M1 é um notebook extremamente portátil, versátil e rápido. Com uma linda tela Retina, tecnologia silenciosa sem ventoinha, design fino e bateria que dura o dia todo, você vai conseguir fazer tudo na velocidade da luz.',
    price: 'R$ 11.599',
    button: 'Comprar'
  },
  items: {
    title: 'Itens do carrinho',
    list: [
      {
        name: 'Iphone 13',
        image: iphone13
      },
      {
        name: 'PlayStation 5',
        image: Play5
      },
      {
        name: 'Fone gamer',
        image: Earphone
      },
      {
        name: 'Gabinete gamer',
        image: Cabinet
      }
    ]
  }
}

export default cart
