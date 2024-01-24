import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootLayout from './Layouts/RootLayout'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import ErrorPage from './pages/ErrorPage'
import './App.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'projects',
        element: <Projects />,
      },
    ],
  },
  {
    path: '*',
    element: <ErrorPage />
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
