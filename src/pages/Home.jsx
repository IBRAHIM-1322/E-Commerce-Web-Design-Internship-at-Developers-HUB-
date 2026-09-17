import Header from '../components/Header'
import HomeMain from '../components/HomeMain'
import Footer from '../components/Footer'
import NavButtons from '../components/NavButtons'

function Home() {
  return (
    <div className='bg-gray-100'>
      <Header/>
      <HomeMain/>
      <Footer/>
      <NavButtons/>
    </div>
  )
}

export default Home
