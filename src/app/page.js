import Image from 'next/image'
import Header from '../../components/header'
import Arrivals from '../../components/arrivals'
import Footer from '../../components/footer'

// look for away to make the component imports one line^

export default function Home() {
  return (
    <div>    

      {/* nav component above main */}
      <Header />
      <main className="border-2 flex min-h-screen flex-col">
            
            <Arrivals />
            {/* image */}
            <div className='border-red-500 border-2 flex-col'>
              <h1> home page </h1>
            </div>
            {/* how to use */}
            <div className='border-red-500 border-2 flex-col'>
              <h1> home page </h1>
            </div>
      </main>  
      {/* footer component */}
      <Footer />
    </div>

  )
}
