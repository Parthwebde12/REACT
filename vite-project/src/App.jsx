import Navbar from './components/Navbar'
import Footer from './components/footer'
import Cards from './components/cards'
function App() {
  

  return (
    <>
      <Navbar/>  
         <div className='cards'>
              <Cards title="card 1" description="card 1 desc"/>
              <Cards title="card 2" description="card 2 desc"/>
              <Cards title="card 3" description="card 3 desc"/>
              <Cards title="card 4" description="card 4 desc"/>
              
              
               
         </div>9

             
      <Footer/>
    </>
  )
}

export default App
