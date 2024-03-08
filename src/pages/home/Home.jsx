import React from 'react'
import Banner from '../../components/banner/Banner'
import LinksContainer from '../../components/link/Link'
import Newproducts from '../../components/newproducts/newproducts'

export default function Home() {
  return (
    <div>
    <Banner></Banner>
  <LinksContainer></LinksContainer>
  <Newproducts></Newproducts>
    </div>
  )
}
