import {createBrowserRouter} from 'react-router-dom'


export const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>

  }
])
function App() {
  return (<div className='w-full min-h-screen bg-gray-950 text-white text-shadow-blue-100 text-9xl'>Hello from react-router-dom</div>
  )
}
