
import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Page404 from './pages/Page404'
import VodInfo from './pages/VodInfo'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/vod/:id' element={<VodInfo />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  )
}
// npm run dev - להריץ את האפליקציה
export default App
