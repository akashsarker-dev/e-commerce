
import './App.css'
import Banner from './components/banner/Banner'
import Copyright from './components/copyright/Copyright'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import SearchNav from './components/searchnav/SearchNav'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <SearchNav></SearchNav>
      <Banner></Banner>
      <Footer></Footer>
      <Copyright></Copyright>
      
    </>
  )
}

export default App
