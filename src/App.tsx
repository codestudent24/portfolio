import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootLayout from './Layouts/RootLayout'
import './App.css'
import Home from './pages/Home'

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
        element: <h1>About</h1>,
      },
      {
        path: 'projects',
        element: <h1>Projects</h1>,
      },
    ],
  },
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
