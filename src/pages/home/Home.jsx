import React from 'react'
import Banner from '../../components/banner/Banner'
import LinksContainer from '../../components/link/Link'
import Newproduct from '../newproduct/Newproduct'

export default function Home() {
  return (
    <div>
    <Banner></Banner>
  <LinksContainer></LinksContainer>
  <Newproduct></Newproduct>
    </div>
  )
}
