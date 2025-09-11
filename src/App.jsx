import TopNav from "./component/TopNav.jsx"
import BottomNav from "./component/BottomNav.jsx"
import Footer from './component/Footer.jsx'
import LandingPage from './component/LandingPage.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom' 

const App = () => {
  return (
   <BrowserRouter>
    <TopNav />
    <BottomNav />
    <Routes>
    <Route path='/' element={<LandingPage />} />
    </Routes>
    <Footer />
   </BrowserRouter>
  )
}

export default App