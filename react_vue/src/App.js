import React, { lazy } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Suspense,
} from 'react-router-dom'

//
import './App.css'

// Splash Screen component for lazy loading
import SplashScreen from './pages/SplashScreen'
// Import NotFound page for handling unmatched routes
import NotFound from './pages/NotFound'

// Lazy-loaded components
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Partners = lazy(() => import('./pages/Partners'))
const Resources = lazy(() => import('./pages/Resources'))
const Services = lazy(() => import('./pages/Services'))
const Properties = lazy(() => import('./pages/Properties'))
const Insights = lazy(() => import('./pages/Insights'))

// LATER DESIGNS
// const Dashboard = lazy(() => import("./Pages/Dashboard"));
// const Login = lazy(() => import("./Pages/Login"));

// Mock authentication function
const isAuthenticated = () => {
  return localStorage.getItem('token') !== null
}

/**
 * Private Route wrapper
 *
 * PrivateRoute ensures that only authenticated users can access certain routes.
 * If the user is not authenticated, they are redirected to the login page.
 */
const PrivateRoute = ({ element }) => {
  return isAuthenticated() ? element : <Navigate to='/login' replace />
}

function App() {
  return (
    <Router>
      <Suspense fallback={<SplashScreen />}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />}>
            <Route path='partners' element={<Partners />} />
            <Route path='resources' element={<Resources />} />
          </Route>
          <Route path='/services' element={<Services />} />
          <Route path='/properties' element={<Properties />} />
          <Route path='/insights' element={<Insights />} />

          {/*  */}
          {/* <Route 
            path='/dashboard'
            element={<PrivateRoute element={<Dashboard />} />}
          /> */}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
