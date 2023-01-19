import {
  createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  RouterProvider
} from 'react-router-dom'

// pages
import Home from './pages/Home'
import About from './pages/About'
import Faq from './pages/help/Faq'
import Contact, { contactAction } from './pages/help/Contact'
import NotFound from './pages/NotFound'
import Careers from './pages/careers/Careers'
import { careersLoader } from './pages/careers/Careers'
import CareerDetails, { careerDetailsLoader } from './pages/careers/CareerDetails'
import CareerError from './pages/careers/CareerError'

// layouts
import RootLayout from './layouts/RootLayout'
import HelpLayout from './layouts/HelpLayout'
import CareersLayout from './layouts/CareersLayout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact/>} action={contactAction} />
      </Route>

      {/* loaders are used to load data to a component before it renders, we no longer need a ueEffect hook*/}
      <Route path="careers" element={<CareersLayout />} errorElement={<CareerError/>}>
        <Route 
          index 
          element={<Careers />} 
          loader={careersLoader}
        />
        <Route
          path=":id"
          element={<CareerDetails/>}
          loader={careerDetailsLoader}
        />
        </Route>

      <Route path="*" element={<NotFound/>}/> 
      {/* 404 or catch all component */}

    </Route>

  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App