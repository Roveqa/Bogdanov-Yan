import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import "./i18n.js"

import Layout from './Components/Layout/Layout'
import Index from './Components/Index/Index'
import About from './Components/About/About'
import Works from './Components/Works/Works'
import Contact from './Components/Contact/Contact'
import Services from './Components/Services/Services'

import Clowi from './Components/Projects/Clowi/Clowi'
import Ecolink from './Components/Projects/Ecolink/Ecolink'
import Dlaife from './Components/Projects/Dlaife/Dlaife'
import Coltsadeus from './Components/Projects/Coltsadeus/Coltsadeus'
import NataliaShpedtportfolio from './Components/Projects/NataliaShpedtportfolio/NataliaShpedtportfolio'
import Arturio from './Components/Projects/Arturio/Arturio'

import NotFoundPage from './Components/NotFoundPage/NotFoundPage'

import PrivacyPolicy from './Components/PrivacyPolicy/PrivacyPolicy'
import CookiePolicy from './Components/CookiePolicy/CookiePolicy'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Index /> },
      { path: 'about', element: <About /> },
      { path: 'works', element: <Works /> },
      { path: 'services', element: <Services /> },
      { path: 'contacts', element: <Contact /> },
      { path: 'works/clowi', element: <Clowi /> },
      { path: 'works/ecolink', element: <Ecolink /> },
      { path: 'works/dlaife', element: <Dlaife /> },
      { path: 'works/coltsadeus', element: <Coltsadeus /> },
      { path: 'works/natalia-shpedt', element: <NataliaShpedtportfolio /> },
      { path: 'works/arturio', element: <Arturio /> },
      { path: 'works/arturio', element: <Arturio /> },
      { path: 'privacy-policy', element: <PrivacyPolicy /> },
      { path: 'cookie-policy', element: <CookiePolicy /> },
      { path: '*', element: <NotFoundPage /> }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);