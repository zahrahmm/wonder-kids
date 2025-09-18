import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Hero from './components/home/Hero'
import InteractiveFeatures from './components/home/interactiveFeatures'
import LearningMaterials from './components/home/learningMaterials'
import JoyfulLearning from "./components/JoyfulLearning";
import ReadOurBlog from "./components/ReadOurBlog";

export default function App() {


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path='/'
            element={
              <div>
                <Hero /> <InteractiveFeatures /> <LearningMaterials /> <JoyfulLearning />
      <ReadOurBlog />
              </div>
            }
          />
          <Route path='/shop' element={<div>Shop Page</div>} />
          <Route path='/about' element={<div>About Us Page</div>} />
          <Route path='/contact' element={<div>Contact Page</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
