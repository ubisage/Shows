import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Movies from './components/homepage/Movies';
import Summary from './components/homepage/Summary';


const router = createBrowserRouter([
  {path: '/', element: <Movies/>},
  {path: '/:movieId', element: <Summary/>},
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
