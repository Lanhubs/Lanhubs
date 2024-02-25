
import './App.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import RootTemplate from './Components/Templates/Wrapper/Wrapper'
import About from "./pages/About"
import Home from './pages'
import Contacts from "./pages/contact/index"
import Resume from './pages/resume'
import Projects from "./pages/Projects"
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootTemplate/>} >
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/resume' element={<Resume/>} />
      <Route path='/projects' element={<Projects/>} />
      <Route path='/contact' element={<Contacts/>} />


    </Route>))

const Router =(): React.ReactNode=>  <RouterProvider router={router} />
export default Router
