import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Hero from './components/home/Hero'
import InteractiveFeatures from './components/home/interactiveFeatures'
import LearningMaterials from './components/home/learningMaterials'
import JoyfulLearning from './components/home/JoyfulLearning'
import ReadOurBlog from './components/home/ReadOurBlog'
import FrequentlyAskedQuestions from './components/home/FrequentlyAskedQuestions'
import JoinAndCommunity from './components/home/JoinAndCommunity'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path='/'
            element={
              <div className='mx-auto'>
                <Hero />
                <InteractiveFeatures />
                <LearningMaterials />
                <JoyfulLearning />
                <ReadOurBlog />
                <FrequentlyAskedQuestions />
                <div className='mx-3'>
                  <JoinAndCommunity />
                </div>
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
