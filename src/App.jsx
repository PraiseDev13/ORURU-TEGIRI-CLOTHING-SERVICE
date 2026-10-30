import {Routes , Route} from 'react-router-dom'
import Nav from './Component/Nav.jsx'
import Home from './Pages/Home.jsx'
import Shop from './Pages/Shop.jsx'


function App() {


  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
        
       
    </>
  )
}

export default App
